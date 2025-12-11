import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, goal } = body;

    // Log the submission (in production, you'd save this to a database)
    console.log("New lead submission:", { email, goal, timestamp: new Date().toISOString() });

    // Here you would typically:
    // - Save to database
    // - Send to email service (SendGrid, Mailchimp, etc.)
    // - Send to CRM (HubSpot, Salesforce, etc.)

    return NextResponse.json(
      { success: true, message: "Thank you for your interest!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

