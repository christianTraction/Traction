import { NextResponse } from "next/server";
import { saveLead, initDatabase } from "@/lib/db";

// Initialize database on first request
let dbInitialized = false;

export async function POST(request: Request) {
  try {
    // Check if DATABASE_URL is set
    if (!process.env.DATABASE_URL) {
      console.error("DATABASE_URL is not set");
      return NextResponse.json(
        { success: false, message: "Database not configured. Please contact support." },
        { status: 500 }
      );
    }

    // Initialize database if not already done
    if (!dbInitialized) {
      await initDatabase();
      dbInitialized = true;
    }

    const body = await request.json();
    const { email, fundingType, fundingAmount } = body;

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!fundingType || !fundingAmount) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Combine funding info for backward compatibility with goal field
    const goal = fundingType && fundingAmount ? `${fundingType} - ${fundingAmount}` : '';

    // Save to database with new fields
    const lead = await saveLead(email, goal, fundingType, fundingAmount);

    console.log("New lead saved:", { 
      id: lead.id, 
      email, 
      fundingType, 
      fundingAmount, 
      timestamp: lead.created_at 
    });

    return NextResponse.json(
      { success: true, message: "Thank you! We'll be in touch soon." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error processing lead:", error);
    // Log more details for debugging
    console.error("Error details:", {
      message: error?.message,
      code: error?.code,
      stack: error?.stack
    });
    
    // Check for specific database connection errors
    if (error?.code === 'ECONNREFUSED' || error?.message?.includes('connect')) {
      return NextResponse.json(
        { success: false, message: "Database connection failed. Please check configuration." },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
