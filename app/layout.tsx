import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Traction - Get matched with the bank that will actually say yes",
  description: "Traction uses AI to match your small business with banks and bankers most likely to approve you—before you apply.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

