import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const redis = Redis.fromEnv();

export async function POST(req: NextRequest) {
  const { viewerId } = await req.json();

  if (!viewerId) {
    return NextResponse.json({ error: "Missing viewerId" }, { status: 400 });
  }

  const key = "tombstone-v2:live-viewers";
  const viewerKey = `${key}:${viewerId}`;

  await redis.set(viewerKey, "1", { ex: 30 });

  const keys = await redis.keys(`${key}:*`);

  return NextResponse.json({
    count: keys.length,
  });
}