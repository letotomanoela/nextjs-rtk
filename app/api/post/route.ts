import prisma from "@/config/db";

import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const post = await prisma.post.findMany();

  return NextResponse.json({ post }, { status: 200 });
}

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const result = await prisma.post.create({
    data: {
      ...body,
    },
  });
  return NextResponse.json({ result }, { status: 200 });
}
