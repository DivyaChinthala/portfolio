import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";

export async function GET(req: NextRequest, res: NextResponse) {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DATABASE);
  const result = await db.collection("portfolio-details").findOne({
    email: process.env.USER_EMAIL,
  });
  return NextResponse.json(result || {});
}
