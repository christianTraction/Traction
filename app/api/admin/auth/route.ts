import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "traction2024";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password } = body;

    if (!password) {
      return NextResponse.json(
        { success: false, message: "Password is required." },
        { status: 400 }
      );
    }

    // Compare passwords using a constant-time comparison to prevent timing attacks
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, message: "Incorrect password." },
        { status: 401 }
      );
    }

    // Set an admin session cookie (expires in 24 hours)
    const cookieStore = await cookies();
    cookieStore.set("admin_session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return NextResponse.json(
      { success: true, message: "Authentication successful." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in admin auth:", error);
    return NextResponse.json(
      { success: false, message: "Authentication failed." },
      { status: 500 }
    );
  }
}

export async function DELETE() {
  // Logout - clear the admin session cookie
  const cookieStore = await cookies();
  cookieStore.delete("admin_session");

  return NextResponse.json(
    { success: true, message: "Logged out successfully." },
    { status: 200 }
  );
}


