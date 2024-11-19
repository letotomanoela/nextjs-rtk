import prisma from "@/config/db";

import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const user = await prisma.user.findMany();

  return NextResponse.json({ user }, { status: 200 });
}
