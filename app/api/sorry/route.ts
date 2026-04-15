import { NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "https://zfgaas.downormal.dev/sorry";

export async function GET() {
  try {
    const res = await fetch(BACKEND_URL);
    if (!res.ok) {
      throw new Error(`Backend returned ${res.status}`);
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch apology" },
      { status: 502 }
    );
  }
}
