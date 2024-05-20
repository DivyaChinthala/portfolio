import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req, res) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DATABASE);
    // Find the existing user
    const existingUser = await db.collection("User").findOne({});

    if (existingUser) {
      const id = existingUser._id;
      const result = await db.collection("User").updateOne(
        { _id: new ObjectId(id) },
        {
          $set: {
            projects: body.projects,
          },
        }
      );
      return NextResponse.json({
        message: "Updated Successfully",
      });
    } else {
      const result = await db.collection("User").insertOne({
        projects: body.projects,
      });
      if (result.acknowledged) {
        const data = await db
          .collection("User")
          .findOne({ _id: result.insertedId });
        return res.status(201).json(data);
      } else {
        throw new Error("Failed to insert document");
      }
    }
  } catch (error) {
    console.error("Error handling the request:", error);
    return NextResponse.json({ error: "Internal Server Error" });
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DATABASE);
  const result = await db.collection("User").findOne({});
  return NextResponse.json(result?.projects || {});
}
