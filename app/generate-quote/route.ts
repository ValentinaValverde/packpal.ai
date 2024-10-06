import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { packList } = await request.json();
  return new Response("this is a test");
}
