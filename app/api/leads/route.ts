import { NextResponse } from "next/server";
import { getAllLeads, initDatabase } from "@/lib/db";

// Initialize database on first request
let dbInitialized = false;

export async function GET(request: Request) {
  try {
    // Initialize database if not already done
    if (!dbInitialized) {
      await initDatabase();
      dbInitialized = true;
    }

    // In production, you'd want to add authentication here
    // For now, this is open - you can add password protection later
    
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

