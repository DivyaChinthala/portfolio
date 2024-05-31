import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../../lib/mongodb";

export async function GET(req: NextRequest, res: NextResponse) {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DATABASE);
  const result = await db.collection("User").findOne({});
  return NextResponse.json(result || {});
}
