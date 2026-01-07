"use client";

import { useState } from "react";
import FeatureItem from "@/components/FeatureItem";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import FAQItem from "@/components/FAQItem";
import Metric from "@/components/Metric";

export default function Home() {
  const [formData, setFormData] = useState({ 
    email: "", 
    creditScore: "",
    fundingAmount: "",
    annualRevenue: "",
    timeInBusiness: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Thank you! We'll calculate your Approval Score and send results shortly.");
        setFormData({ email: "", creditScore: "", fundingAmount: "", annualRevenue: "", timeInBusiness: "" });
        // TODO: Transition to Step 2
      } else {
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Top Nav */}
      <nav className="sticky top-0 z-50 bg-slate-950 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <img
                src="/images/logo.svg"
                alt="Traction Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-xl font-semibold">Traction</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-slate-300 hover:text-slate-50 transition">
                How it works
              </a>
              <a href="#features" className="text-slate-300 hover:text-slate-50 transition">
                Features
              </a>
              <a href="#pricing" className="text-slate-300 hover:text-slate-50 transition">
                Pricing
              </a>
              <a href="#for-banks" className="text-slate-300 hover:text-slate-50 transition">
                For banks
              </a>
            </div>
            <a
              href="#cta-form"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              Get matched
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              Stop applying to banks that will reject you
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-[680px]">
              See your approval odds at every bank before you apply. Get matched with lenders that want your business—in 3 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#cta-form"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg text-center transition shadow-lg shadow-emerald-500/20"
              >
                See My Approval Odds
              </a>
            </div>
            <p className="text-sm text-slate-400">
              Free • No credit impact • 3-minute setup
            </p>
          </div>

          {/* Right Column: Photo with Fundability Score Overlay */}
          <div className="relative">
            {/* Hero Photo */}
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/hero-business-owner.jpg"
                alt="Small business owner working confidently in their business"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Fundability Score - Overlaid at Bottom */}
            <div className="absolute bottom-4 left-4 right-4 lg:bottom-6 lg:left-6 lg:right-6">
              <div className="bg-slate-900/95 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-slate-700 shadow-2xl">
                <div className="text-sm text-slate-400 mb-2">Approval Score</div>
                <div className="text-5xl lg:text-6xl font-bold text-emerald-400 mb-3">82</div>
                <div className="text-lg lg:text-xl text-slate-200 mb-4">Strong — 3 banks actively lending</div>
                <div className="bg-slate-800/80 rounded-lg p-3 lg:p-4 text-sm lg:text-base text-slate-300">
                  Best funding window – Next 30–60 days
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bank Match Cards - Moved Below Hero */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="space-y-3">
            <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 hover:border-slate-700 transition">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-semibold text-slate-50 text-lg">Community Bank North</div>
                  <div className="text-sm text-slate-400">Line of credit • Est. rate 6.5%</div>
                </div>
                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded">High</span>
              </div>
              <div className="text-xs text-slate-500 mb-2">Approval likelihood: High</div>
              <a href="#cta-form" className="text-xs text-emerald-400 hover:text-emerald-300 inline-block">Get introduced →</a>
            </div>
            <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 hover:border-slate-700 transition">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-semibold text-slate-50 text-lg">Metro Regional Bank</div>
                  <div className="text-sm text-slate-400">Line of credit • Est. rate 7.2%</div>
                </div>
                <span className="text-xs bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded">Medium</span>
              </div>
              <div className="text-xs text-slate-500 mb-2">Approval likelihood: Medium</div>
              <a href="#cta-form" className="text-xs text-emerald-400 hover:text-emerald-300 inline-block">Get introduced →</a>
            </div>
            <div className="bg-slate-900 rounded-xl p-5 border border-slate-800 hover:border-slate-700 transition">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-semibold text-slate-50 text-lg">Harborline Credit Union</div>
                  <div className="text-sm text-slate-400">Line of credit • Est. rate 7.8%</div>
                </div>
                <span className="text-xs bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded">Medium</span>
              </div>
              <div className="text-xs text-slate-500 mb-2">Approval likelihood: Medium</div>
              <a href="#cta-form" className="text-xs text-emerald-400 hover:text-emerald-300 inline-block">Get introduced →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Stat Cards */}
      <section id="problem" className="bg-slate-900 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-slate-50">
            The way small businesses get funding is broken
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-950 rounded-2xl p-8 border border-red-500/20 bg-red-950/10 flex flex-col items-center text-center">
              <div className="text-5xl font-bold text-red-400 mb-3">7 in 10</div>
              <p className="text-slate-300 text-base">businesses apply to a bank that was never going to approve them—wasting weeks and hurting their credit</p>
            </div>
            <div className="bg-slate-950 rounded-2xl p-8 border border-orange-500/20 bg-orange-950/10 flex flex-col items-center text-center">
              <div className="text-5xl font-bold text-orange-400 mb-3">Each rejection</div>
              <p className="text-slate-300 text-base">drops your approval odds 15% at every other bank—making good lenders say no too</p>
            </div>
            <div className="bg-slate-950 rounded-2xl p-8 border border-emerald-500/20 bg-emerald-950/10 flex flex-col items-center text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-3">Your advantage</div>
              <p className="text-slate-300 text-base">See which banks will approve you before you ever apply—and skip straight to the ones that want you</p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="#cta-form"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg shadow-emerald-500/20"
            >
              See My Approval Odds
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            How Traction works in 3 simple steps
          </h2>
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Step 1 - Connect */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition">
                <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-50 mb-2">Link your business accounts</h3>
              <p className="text-sm text-slate-400">Secure, read-only connection to your bank and accounting software. Takes 2 minutes.</p>
            </div>

            {/* Step 2 - Analyze */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition">
                <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-50 mb-2">See which banks will approve you</h3>
              <p className="text-sm text-slate-400">We calculate your approval likelihood at every lender based on what they're actively funding right now.</p>
            </div>

            {/* Step 3 - Choose */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition">
                <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center text-sm font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-50 mb-2">Apply with confidence</h3>
              <p className="text-sm text-slate-400">Compare rates and terms, then get introduced to the banker who's most likely to say yes.</p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="#cta-form"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg shadow-emerald-500/20"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-slate-900 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Stay fundable, not just funded.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FeatureCard
              icon="score"
              title="Approval Predictor"
              shortDescription="See your approval odds before you apply"
              fullDescription="Know exactly where you stand with every lender. We show you which banks are likely to approve you, which are on the fence, and which will reject you—before you waste time applying."
            />
            <FeatureCard
              icon="window"
              title="Best Time to Borrow"
              shortDescription="Find the perfect funding window based on your cash flow"
              fullDescription="Our algorithm analyzes your revenue patterns and tells you the best 30-60 day window to apply—when banks are most likely to approve you and you're most likely to repay on time."
            />
            <FeatureCard
              icon="compare"
              title="Real Rate Comparisons"
              shortDescription="Compare actual rates, fees, and terms side-by-side"
              fullDescription="See exactly what each bank will charge you—estimated rates, origination fees, repayment terms, and time to close—all in one place, so you pick the best deal."
            />
            <FeatureCard
              icon="credit"
              title="Credit Building"
              shortDescription="Turn vendor payments into business credit"
              fullDescription="We identify which of your current vendors report to business credit bureaus. Pay them on time, build your credit score, and qualify for better rates every year."
            />
          </div>
        </div>
      </section>

      {/* Founder Story - Pull Quote */}
      <section className="py-20 mb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl p-12 border border-slate-800 text-center">
            <p className="text-xl italic text-slate-200 leading-relaxed max-w-[600px] mx-auto mb-6">
              "I watched my family's construction business get rejected by 12 banks—not because we couldn't do the work, but because we didn't fit their credit model. Traction exists so no business owner has to go through that again. Every business deserves to know which banks will say yes before they waste months hearing no."
            </p>
            <p className="text-slate-400 font-medium">— Traction Founder</p>
          </div>
        </div>
      </section>

      {/* Process Proof Section */}
      <section className="py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h3 className="text-2xl font-semibold mb-6 text-slate-50">What you'll get in 3 minutes</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1 text-xl">✓</span>
                  <div>
                    <div className="font-semibold text-slate-50">Your Approval Score</div>
                    <div className="text-sm">See where you stand with every bank and what's holding you back</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1 text-xl">✓</span>
                  <div>
                    <div className="font-semibold text-slate-50">Banks that want you</div>
                    <div className="text-sm">Matched based on what they're actively funding right now</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1 text-xl">✓</span>
                  <div>
                    <div className="font-semibold text-slate-50">Your next steps</div>
                    <div className="text-sm">Clear actions to improve your approval odds before you apply</div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <h3 className="text-2xl font-semibold mb-6 text-slate-50">What we never do</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1 text-xl">×</span>
                  <div>
                    <div className="font-semibold text-slate-50">Hard credit checks</div>
                    <div className="text-sm">Soft checks only—won't affect your credit score at all</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1 text-xl">×</span>
                  <div>
                    <div className="font-semibold text-slate-50">Spam or pressure</div>
                    <div className="text-sm">You choose which banks to contact and when</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1 text-xl">×</span>
                  <div>
                    <div className="font-semibold text-slate-50">Share your information</div>
                    <div className="text-sm">Your data stays between you and the lenders you choose—never sold</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Privacy Section */}
      <section className="py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Share your data with confidence
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Bank-level Encryption */}
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 text-center group hover:border-slate-700 transition">
              <div className="w-16 h-16 rounded-lg bg-emerald-500/10 border border-emerald-500/20 mx-auto mb-4 flex items-center justify-center group-hover:bg-emerald-500/20 transition">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-50 mb-2">Bank-level encryption</h3>
              <p className="text-sm text-slate-400">The same 256-bit SSL protection your bank uses to secure your checking account</p>
            </div>

            {/* Read-only Access */}
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 text-center group hover:border-slate-700 transition">
              <div className="w-16 h-16 rounded-lg bg-emerald-500/10 border border-emerald-500/20 mx-auto mb-4 flex items-center justify-center group-hover:bg-emerald-500/20 transition">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-50 mb-2">Read-only access</h3>
              <p className="text-sm text-slate-400">We can see your financial data, but we can never move, transfer, or withdraw your money</p>
            </div>

            {/* Never Shared */}
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 text-center group hover:border-slate-700 transition">
              <div className="w-16 h-16 rounded-lg bg-emerald-500/10 border border-emerald-500/20 mx-auto mb-4 flex items-center justify-center group-hover:bg-emerald-500/20 transition">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-50 mb-2">Never shared or sold</h3>
              <p className="text-sm text-slate-400">Your information stays between you and the banks you choose to contact—period</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-slate-900 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Start free. Upgrade when funding becomes a priority.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-950 rounded-2xl p-10 border border-slate-800">
              <h3 className="text-2xl font-semibold mb-2">FREE</h3>
              <p className="text-slate-300 mb-4 text-sm">Get your first approval score</p>
              <p className="text-xs text-slate-400 mb-4">Perfect for: One-time funding needs or first-time borrowers</p>
              <div className="text-4xl font-bold text-slate-50 mb-8">$0</div>
              <ul className="space-y-3 mb-8 text-slate-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>One-time Approval Score</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>See which banks might approve you</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Basic funding checklist</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Email tips and insights</span>
                </li>
              </ul>
              <a href="#cta-form" className="w-full border border-slate-700 hover:border-slate-600 text-slate-50 px-6 py-3 rounded-lg font-semibold transition block text-center">
                Get Started Free
              </a>
            </div>
            <div className="bg-slate-950 rounded-2xl p-10 border-2 border-emerald-500 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most popular
              </div>
              <h3 className="text-2xl font-semibold mb-2">PRO</h3>
              <p className="text-slate-300 mb-4 text-sm">Build long-term fundability</p>
              <p className="text-xs text-slate-400 mb-4">Perfect for: Growing businesses that need ongoing access to capital</p>
              <div className="text-4xl font-bold text-emerald-400 mb-8">
                $49.99<span className="text-2xl text-slate-300">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-slate-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Monthly Approval Score updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Live bank matches with approval odds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Real rate and fee comparisons</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Credit building recommendations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Market alerts when new programs open</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>2 banker introductions per year</span>
                </li>
              </ul>
              <a href="#cta-form" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition mb-2 block text-center">
                Start 7-Day Free Trial
              </a>
              <p className="text-xs text-slate-400 text-center">Cancel anytime. No hidden fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Banks Section */}
      <section id="for-banks" className="py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            For banks: qualified, opt-in small business relationships.
          </h2>
          <p className="text-xl text-slate-300 text-center max-w-3xl mx-auto mb-12">
            Traction helps community and regional banks grow small-business portfolios with pre-qualified, opt-in borrowers who match your credit box. Instead of buying generic leads, you receive data-rich introductions to owners who choose you.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <FeatureItem
              title="Higher-quality demand"
              body="Borrowers arrive with context, data, and clear intent."
            />
            <FeatureItem
              title="Targeted reach"
              body="Connect with industries and profiles you're actively pursuing."
            />
            <FeatureItem
              title="Lower acquisition costs"
              body="Shift from generic lead buys to curated introductions."
            />
          </div>
          <div className="text-center">
            <a
              href="mailto:partnerships@usetraction.com"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Learn more about partnering
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-900 py-20 mb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-0">
            <FAQItem
              question="Are you a lender?"
              answer="No. Traction is a marketplace and intelligence platform. We don't lend money. We match your business with banks and bankers most likely to approve you and help you prepare to get a 'yes.'"
            />
            <FAQItem
              question="Will using Traction affect my credit score?"
              answer="No hard credit pull is required to see your Fundability Score or bank matches. If a bank moves forward with a full application, they may request authorization for a credit check."
            />
            <FAQItem
              question="What kind of businesses is Traction for?"
              answer="We focus on small and growing businesses, typically under $5M in annual revenue, seeking working capital, lines of credit, equipment financing, or commercial real estate loans."
            />
            <FAQItem
              question="What if I've already been denied by a bank?"
              answer="That's exactly when Traction can help. We look at your data and match you with banks whose criteria and appetite fit your profile, and show you what to improve if you're not quite ready."
            />
            <FAQItem
              question="Why would I pay for Pro?"
              answer="Pro is for owners who want a continuous funding strategy—not just a one-time loan. You get dynamic scoring, timing intelligence, trade line building, and curated banker introductions."
            />
          </div>
        </div>
      </section>

      {/* Closing CTA + Form Section */}
      <section id="cta-form" className="py-20 mb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl p-8 sm:p-10 md:p-12 border border-slate-800">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 max-w-[680px] mx-auto">
              See which banks will approve you—before you apply
            </h2>
            <p className="text-lg text-slate-300 text-center mb-12 max-w-[680px] mx-auto">
              Get your free Approval Score and see which lenders want your business. 
              Takes 3 minutes. No credit check.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
              
              {/* Question 1: Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@yourbusiness.com"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <p className="text-xs text-slate-400 mt-1">
                  We never sell your email or spam you.
                </p>
              </div>

              {/* Question 2: Credit Score */}
              <div>
                <label htmlFor="creditScore" className="block text-sm font-medium text-slate-300 mb-2">
                  What's your estimated personal credit score?
                </label>
                <select
                  id="creditScore"
                  name="creditScore"
                  required
                  value={formData.creditScore}
                  onChange={(e) => setFormData({ ...formData, creditScore: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="">Select your range</option>
                  <option value="Excellent (720+)">Excellent (720+)</option>
                  <option value="Good (680-719)">Good (680-719)</option>
                  <option value="Fair (640-679)">Fair (640-679)</option>
                  <option value="Building (580-639)">Building (580-639)</option>
                  <option value="Not sure">Not sure</option>
                </select>
                <p className="text-xs text-slate-400 mt-1">
                  This helps us match you with the right lenders. Check for free at Credit Karma.
                </p>
              </div>

              {/* Question 3: Funding Amount */}
              <div>
                <label htmlFor="fundingAmount" className="block text-sm font-medium text-slate-300 mb-2">
                  How much funding do you need?
                </label>
                <select
                  id="fundingAmount"
                  name="fundingAmount"
                  required
                  value={formData.fundingAmount}
                  onChange={(e) => setFormData({ ...formData, fundingAmount: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="">Select an amount</option>
                  <option value="$10k–$50k">$10k – $50k</option>
                  <option value="$50k–$100k">$50k – $100k</option>
                  <option value="$100k–$250k">$100k – $250k</option>
                  <option value="$250k–$500k">$250k – $500k</option>
                  <option value="$500k+">$500k+</option>
                </select>
              </div>

              {/* Question 4: Annual Revenue */}
              <div>
                <label htmlFor="annualRevenue" className="block text-sm font-medium text-slate-300 mb-2">
                  What's your annual revenue?
                </label>
                <select
                  id="annualRevenue"
                  name="annualRevenue"
                  required
                  value={formData.annualRevenue}
                  onChange={(e) => setFormData({ ...formData, annualRevenue: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="">Select your range</option>
                  <option value="Under $100k">Under $100k</option>
                  <option value="$100k–$250k">$100k – $250k</option>
                  <option value="$250k–$500k">$250k – $500k</option>
                  <option value="$500k–$1M">$500k – $1M</option>
                  <option value="$1M–$5M">$1M – $5M</option>
                  <option value="$5M+">$5M+</option>
                </select>
                <p className="text-xs text-slate-400 mt-1">
                  Estimated annual gross revenue (before expenses).
                </p>
              </div>

              {/* Question 5: Time in Business */}
              <div>
                <label htmlFor="timeInBusiness" className="block text-sm font-medium text-slate-300 mb-2">
                  How long have you been in business?
                </label>
                <select
                  id="timeInBusiness"
                  name="timeInBusiness"
                  required
                  value={formData.timeInBusiness}
                  onChange={(e) => setFormData({ ...formData, timeInBusiness: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="">Select timeframe</option>
                  <option value="Less than 6 months">Less than 6 months</option>
                  <option value="6 months–1 year">6 months – 1 year</option>
                  <option value="1–2 years">1 – 2 years</option>
                  <option value="2–5 years">2 – 5 years</option>
                  <option value="5+ years">5+ years</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-4 rounded-lg font-semibold text-lg transition shadow-lg shadow-emerald-500/20"
                >
                  {isSubmitting ? "Calculating..." : "See My Approval Odds"}
                </button>
                
                <p className="text-xs text-slate-400 text-center mt-3">
                  Free • 3 minutes • No credit check
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Traction. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-slate-50 text-sm transition">
                Privacy
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-50 text-sm transition">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

