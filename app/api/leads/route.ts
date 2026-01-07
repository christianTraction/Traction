import { NextResponse } from "next/server";
import { getAllLeads, initDatabase } from "@/lib/db";
import { cookies } from "next/headers";

// Initialize database on first request
let dbInitialized = false;

export async function GET(request: Request) {
  try {
    // Check authentication
    const cookieStore = await cookies();
    const adminSession = cookieStore.get("admin_session");
    
    if (!adminSession || adminSession.value !== "authenticated") {
      return NextResponse.json(
        { success: false, message: "Unauthorized. Please log in." },
        { status: 401 }
      );
    }

    // Initialize database if not already done
    if (!dbInitialized) {
      await initDatabase();
      dbInitialized = true;
    }
    
    const leads = await getAllLeads();

    return NextResponse.json(
      { success: true, leads, count: leads.length },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching leads:", error);
    return NextResponse.json(
      { success: false, message: "Error fetching leads." },
      { status: 500 }
    );
  }
}


