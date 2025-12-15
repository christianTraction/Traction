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
    fundingType: "", 
    fundingAmount: "" 
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
        alert("Thank you! We'll be in touch soon.");
        setFormData({ email: "", fundingType: "", fundingAmount: "" });
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
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">T</span>
              </div>
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
              Know which banks will say yes—before you apply
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-[680px]">
              Connect your financials. Get your Fundability Score. See matched banks in 3 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#cta-form"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg text-center transition shadow-lg shadow-emerald-500/20"
              >
                See My Bank Matches
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
                <div className="text-sm text-slate-400 mb-2">Fundability Score</div>
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
              <button className="text-xs text-emerald-400 hover:text-emerald-300">View banker →</button>
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
              <button className="text-xs text-emerald-400 hover:text-emerald-300">View banker →</button>
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
              <button className="text-xs text-emerald-400 hover:text-emerald-300">View banker →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Stat Cards */}
      <section id="problem" className="bg-slate-900 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-950 rounded-2xl p-8 border border-red-500/20 bg-red-950/10 flex flex-col items-center text-center">
              <div className="text-5xl font-bold text-red-400 mb-3">70%</div>
              <p className="text-slate-300 text-base">Apply to wrong bank first</p>
            </div>
            <div className="bg-slate-950 rounded-2xl p-8 border border-orange-500/20 bg-orange-950/10 flex flex-col items-center text-center">
              <div className="text-5xl font-bold text-orange-400 mb-3">15%</div>
              <p className="text-slate-300 text-base">Drop in approval odds per rejection</p>
            </div>
            <div className="bg-slate-950 rounded-2xl p-8 border border-emerald-500/20 bg-emerald-950/10 flex flex-col items-center text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-3">See approval likelihood</div>
              <p className="text-slate-300 text-base">before you apply</p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="#cta-form"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg shadow-emerald-500/20"
            >
              See My Bank Matches
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
              <h3 className="text-xl font-bold text-slate-50 mb-2">Connect your financials</h3>
              <p className="text-sm text-slate-400">Bank and accounting data in minutes</p>
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
              <h3 className="text-xl font-bold text-slate-50 mb-2">Get your Fundability Score</h3>
              <p className="text-sm text-slate-400">AI analyzes your approval likelihood</p>
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
              <h3 className="text-xl font-bold text-slate-50 mb-2">Choose your bank & banker</h3>
              <p className="text-sm text-slate-400">Review matches and connect directly</p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="#cta-form"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition shadow-lg shadow-emerald-500/20"
            >
              See My Bank Matches
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
              title="Fundability Score"
              shortDescription="Know your approval odds before applying"
              fullDescription="See where you stand today and what's holding you back from bank approval."
            />
            <FeatureCard
              icon="window"
              title="Funding Window"
              shortDescription="Best time to borrow based on cash flow"
              fullDescription="Know the best time to borrow based on your cash flow and market conditions."
            />
            <FeatureCard
              icon="compare"
              title="Real Bank Comparisons"
              shortDescription="Compare rates, fees, and approval time"
              fullDescription="Compare expected rates, fees, and time-to-close across matched banks."
            />
            <FeatureCard
              icon="credit"
              title="Credit Growth Tools"
              shortDescription="Build business credit with vendor reporting"
              fullDescription="Identify vendors and subscriptions that can report as tradelines and grow your business credit."
            />
          </div>
        </div>
      </section>

      {/* Founder Story - Pull Quote */}
      <section className="py-20 mb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl p-12 border border-slate-800 text-center">
            <p className="text-xl italic text-slate-200 leading-relaxed max-w-[600px] mx-auto mb-6">
              "We built Traction after experiencing 12 rejections for our family construction business—not because we couldn't do the work, but because we didn't fit the model."
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
                    <div className="font-semibold text-slate-50">Your Fundability Score</div>
                    <div className="text-sm">See where you stand and what's holding you back</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1 text-xl">✓</span>
                  <div>
                    <div className="font-semibold text-slate-50">Likely-fit banks</div>
                    <div className="text-sm">Matched based on your profile and their current appetite</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1 text-xl">✓</span>
                  <div>
                    <div className="font-semibold text-slate-50">Next-step checklist</div>
                    <div className="text-sm">Clear actions to improve your approval odds</div>
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
                    <div className="font-semibold text-slate-50">Hard credit pulls</div>
                    <div className="text-sm">We use soft checks only—no impact on your credit score</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1 text-xl">×</span>
                  <div>
                    <div className="font-semibold text-slate-50">Spam or unwanted calls</div>
                    <div className="text-sm">You choose when and who to contact</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1 text-xl">×</span>
                  <div>
                    <div className="font-semibold text-slate-50">Sell your leads</div>
                    <div className="text-sm">Your data stays private and secure</div>
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
            Your Data is Protected
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
              <p className="text-sm text-slate-400">256-bit SSL protection</p>
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
              <p className="text-sm text-slate-400">We never move your money</p>
            </div>

            {/* Never Shared */}
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 text-center group hover:border-slate-700 transition">
              <div className="w-16 h-16 rounded-lg bg-emerald-500/10 border border-emerald-500/20 mx-auto mb-4 flex items-center justify-center group-hover:bg-emerald-500/20 transition">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-50 mb-2">Never shared or sold</h3>
              <p className="text-sm text-slate-400">Your data stays private</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-slate-900 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Start free. Upgrade when you're ready to stay fundable.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-950 rounded-2xl p-10 border border-slate-800">
              <h3 className="text-2xl font-semibold mb-2">FREE</h3>
              <p className="text-slate-300 mb-4 text-sm">Know where you stand</p>
              <div className="text-4xl font-bold text-slate-50 mb-8">$0</div>
              <ul className="space-y-3 mb-8 text-slate-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>One-time Fundability Score</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Basic bank guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Funding checklist</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Email insights</span>
                </li>
              </ul>
              <button className="w-full border border-slate-700 hover:border-slate-600 text-slate-50 px-6 py-3 rounded-lg font-semibold transition">
                Start free
              </button>
            </div>
            <div className="bg-slate-950 rounded-2xl p-10 border-2 border-emerald-500 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most popular
              </div>
              <h3 className="text-2xl font-semibold mb-2">PRO</h3>
              <p className="text-slate-300 mb-4 text-sm">Stay fundable & grow</p>
              <div className="text-4xl font-bold text-emerald-400 mb-8">
                $49.99<span className="text-2xl text-slate-300">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-slate-300 text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Monthly Fundability Score</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Bank & banker matches</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Rate & fee comparisons</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Credit growth tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Market alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Banker introductions</span>
                </li>
              </ul>
              <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition mb-2">
                Upgrade to Pro
              </button>
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
              We help small business owners get approved—unlocking growth for the people who move our economy forward.
            </h2>
            <p className="text-lg text-slate-300 text-center mb-12 max-w-[680px] mx-auto">
              If you're planning to hire, buy equipment, or smooth out your cash flow, the right bank relationship changes everything.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@company.com"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <p className="text-xs text-slate-400 mt-1">
                  We never sell your email or spam you.
                </p>
              </div>

              {/* Funding Type Field */}
              <div>
                <label htmlFor="fundingType" className="block text-sm font-medium text-slate-300 mb-2">
                  What are you looking to fund?
                </label>
                <select
                  id="fundingType"
                  name="fundingType"
                  required
                  value={formData.fundingType}
                  onChange={(e) => setFormData({ ...formData, fundingType: e.target.value })}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="Working capital">Working capital</option>
                  <option value="Equipment purchase">Equipment purchase</option>
                  <option value="Expansion / new hire">Expansion / new hire</option>
                  <option value="Refinancing existing debt">Refinancing existing debt</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Funding Amount Field */}
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
                  <option value="">Select an option</option>
                  <option value="$10k–$50k">$10k–$50k</option>
                  <option value="$50k–$100k">$50k–$100k</option>
                  <option value="$100k–$250k">$100k–$250k</option>
                  <option value="$250k–$500k">$250k–$500k</option>
                  <option value="$500k+">$500k+</option>
                </select>
              </div>

              {/* Primary CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-4 rounded-lg font-semibold text-lg transition shadow-lg shadow-emerald-500/20"
                >
                  {isSubmitting ? "Submitting..." : "See my bank matches"}
                </button>
                
                {/* Micro-Trust Copy */}
            <p className="text-xs text-slate-400 text-center mt-3">
              No hard credit pull. Won't affect your score.
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

