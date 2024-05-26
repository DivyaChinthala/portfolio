import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DATABASE);
  const existingUser = await db.collection("User").findOne({});
  if (existingUser) {
    const id = existingUser?._id;
    const result = await db.collection("User").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: body,
      }
    );
    return NextResponse.json({
      message: "Updated Successfully",
    });
  } else {
    const result = await db.collection("User").insertOne(body);
    if (result.acknowledged) {
      const data = await db
        .collection("User")
        .findOne({ _id: result.insertedId });
      return NextResponse.json(data);
    } else {
      throw new Error("Failed to insert document");
    }
  }
}

export async function GET(req: NextRequest, res: NextResponse) {
  const client = await clientPromise;
  const db = client.db("Portfolio");
  const result = await db.collection("User").findOne({});
  return NextResponse.json(result?.skills || {});
}
