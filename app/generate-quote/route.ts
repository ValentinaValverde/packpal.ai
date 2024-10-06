import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { packList } = await request.json();
  return new Response(JSON.stringify({ packList }));
}
