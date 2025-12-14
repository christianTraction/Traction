"use client";

import { useState } from "react";
import FeatureItem from "@/components/FeatureItem";
import TestimonialCard from "@/components/TestimonialCard";
import FAQItem from "@/components/FAQItem";
import Metric from "@/components/Metric";

export default function Home() {
  const [formData, setFormData] = useState({ email: "", goal: "" });
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
        setFormData({ email: "", goal: "" });
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
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
              Small business funding, reimagined
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              Get matched with the bank that will actually say yes.
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Traction uses AI to match your small business with banks and bankers most likely to approve you—before you apply. Compare real options, understand your odds, and choose the right relationship with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#cta-form"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition"
              >
                See my bank matches
              </a>
            </div>
            {/* Trust Scaffolding */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <p className="text-xs text-slate-400">Bank-level encryption • Read-only connections • Never sell your data</p>
              <p className="text-xs text-slate-400">Soft eligibility check (no hard pull)</p>
              <p className="text-xs text-slate-400">Ex-bankers from 3 major banks • Launched via Harvard iLab</p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Compare real banks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Match with real bankers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                <span>Improve approval odds</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
              <div className="text-sm text-slate-400 mb-2">Fundability Score</div>
              <div className="text-5xl font-bold text-emerald-400 mb-2">82</div>
              <div className="text-lg text-slate-200 mb-4">Strong — 3 banks actively lending</div>
              <div className="bg-slate-800 rounded-lg p-3 text-sm text-slate-300">
                Best funding window – Next 30–60 days
              </div>
            </div>
            <div className="space-y-3">
              <div className="bg-slate-900 rounded-xl p-4 border border-slate-800">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-semibold text-slate-50">Community Bank North</div>
                    <div className="text-sm text-slate-400">Line of credit • Est. rate 6.5%</div>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">High</span>
                </div>
                <div className="text-xs text-slate-500 mb-2">Approval likelihood: High</div>
                <button className="text-xs text-emerald-400 hover:text-emerald-300">View banker →</button>
              </div>
              <div className="bg-slate-900 rounded-xl p-4 border border-slate-800">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-semibold text-slate-50">Metro Regional Bank</div>
                    <div className="text-sm text-slate-400">Line of credit • Est. rate 7.2%</div>
                  </div>
                  <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">Medium</span>
                </div>
                <div className="text-xs text-slate-500 mb-2">Approval likelihood: Medium</div>
                <button className="text-xs text-emerald-400 hover:text-emerald-300">View banker →</button>
              </div>
              <div className="bg-slate-900 rounded-xl p-4 border border-slate-800">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="font-semibold text-slate-50">Harborline Credit Union</div>
                    <div className="text-sm text-slate-400">Line of credit • Est. rate 7.8%</div>
                  </div>
                  <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">Medium</span>
                </div>
                <div className="text-xs text-slate-500 mb-2">Approval likelihood: Medium</div>
                <button className="text-xs text-emerald-400 hover:text-emerald-300">View banker →</button>
              </div>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Traction is not a lender. We match you with banks and bankers based on your data and their current appetite.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            The way small businesses shop for loans is broken.
          </h2>
          <p className="text-xl text-slate-300 text-center max-w-3xl mx-auto mb-12">
            Most owners walk into the wrong bank, get denied, and assume they can't get funded. In reality, there are banks that would say yes—you just don't know who they are.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800">
              <h3 className="text-xl font-semibold mb-4 text-slate-200">What happens today</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">×</span>
                  <span>Guessing which bank to try first.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">×</span>
                  <span>Each 'no' makes the next approval harder.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">×</span>
                  <span>Weeks lost on lenders that were never a fit.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">×</span>
                  <span>No clear comparison of your real options.</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800">
              <h3 className="text-xl font-semibold mb-4 text-slate-200">What should happen</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>See which banks are actively lending to businesses like yours.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Know your approval likelihood before you apply.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Compare expected rates, fees, and time-to-close across banks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Choose the banker who actually understands your business.</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center">
            <a
              href="#cta-form"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              See my bank matches
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            How Traction works in 3 simple steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <div className="text-sm font-semibold text-emerald-400 mb-2">Step 1</div>
              <h3 className="text-xl font-semibold mb-4">Tell us about your business</h3>
              <p className="text-slate-300 leading-relaxed">
                Connect your bank and accounting data or answer a few quick questions about your revenue, time in business, and funding needs.
              </p>
            </div>
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <div className="text-sm font-semibold text-emerald-400 mb-2">Step 2</div>
              <h3 className="text-xl font-semibold mb-4">We analyze your fundability</h3>
              <p className="text-slate-300 leading-relaxed">
                Our AI engine calculates your Fundability Score and compares it to live approval trends and bank appetites for businesses like yours.
              </p>
            </div>
            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
              <div className="text-sm font-semibold text-emerald-400 mb-2">Step 3</div>
              <h3 className="text-xl font-semibold mb-4">You choose your best-fit bank & banker</h3>
              <p className="text-slate-300 leading-relaxed">
                Review your matched banks with expected rates, fees, and time-to-close, then choose who you want to talk to.
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-400 text-center mb-8 max-w-2xl mx-auto">
            Traction is not a lender. We're an independent marketplace that helps you compare real bank options and connect directly with verified bankers.
          </p>
          <div className="text-center">
            <a
              href="#cta-form"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              See my bank matches
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Stay fundable, not just funded.
          </h2>
          <p className="text-xl text-slate-300 text-center mb-12">
            We don't just find loans—we build fundability.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-slate-200 mb-6">For business owners</h3>
              <FeatureItem
                title="Fundability Score"
                body="See where you stand today and what's holding you back from bank approval."
              />
              <FeatureItem
                title="Funding Window forecast"
                body="Know the best time to borrow based on your cash flow and market conditions."
              />
              <FeatureItem
                title="Real bank comparisons"
                body="Compare expected rates, fees, and time-to-close across matched banks."
              />
              <FeatureItem
                title="Credit growth tools"
                body="Identify vendors and subscriptions that can report as tradelines and grow your business credit."
              />
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-slate-200 mb-6">Under the hood (AI)</h3>
              <FeatureItem
                title="Cash-flow & banking analysis"
                body="We ingest your transactional patterns to understand risk, capacity, and timing."
              />
              <FeatureItem
                title="Approval pattern learning"
                body="Our models learn from approvals and declines across banks to improve matching over time."
              />
              <FeatureItem
                title="Industry-specific appetite"
                body="See lenders who actually understand and target your industry."
              />
              <FeatureItem
                title="Continuous feedback loop"
                body="Every connection and outcome trains our models—making the signal better for everyone."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Proof Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Built for small business owners, by small business owners.
          </h2>
          <p className="text-xl text-slate-300 text-center max-w-3xl mx-auto mb-12">
            Our founder grew up in a family construction and masonry business, making calls to banks that kept saying no—not because the business couldn't do the work, but because it didn't fit the model. Traction exists to close that gap for every owner.
          </p>
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

      {/* Pricing Section */}
      <section id="pricing" className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Start free. Upgrade when you're ready to stay fundable.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-950 rounded-2xl p-8 border border-slate-800">
              <h3 className="text-2xl font-semibold mb-2">Free – 'Know where you stand'</h3>
              <p className="text-slate-300 mb-6">Get oriented and understand your current position with banks.</p>
              <ul className="space-y-3 mb-8 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Connect basic data sources for a snapshot.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>One-time Fundability Score.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>General bank and loan category guidance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Basic funding checklist.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Email tips and insights.</span>
                </li>
              </ul>
              <button className="w-full border border-slate-700 hover:border-slate-600 text-slate-50 px-6 py-3 rounded-lg font-semibold transition">
                Start free
              </button>
            </div>
            <div className="bg-slate-950 rounded-2xl p-8 border-2 border-emerald-500 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most popular
              </div>
              <h3 className="text-2xl font-semibold mb-2">Pro – 'Stay fundable & grow'</h3>
              <p className="text-slate-300 mb-4">For owners who want a continuous funding strategy—not just a one-time loan.</p>
              <div className="text-3xl font-bold text-emerald-400 mb-6">
                $49.99/month or $599/year
              </div>
              <ul className="space-y-3 mb-8 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Continuous sync and cash-flow tracking.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Dynamic Fundability Score updated monthly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Specific bank & banker matches with predicted approval likelihood.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Expected rates, fees & time-to-close for each matched bank.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Trade line recommendations & credit growth tracking tools.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>Market alerts when new programs open or appetite shifts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">✓</span>
                  <span>2 verified banker introductions with annual plan (extra intros available).</span>
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
      <section id="for-banks" className="py-20">
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
      <section className="bg-slate-900 py-20">
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
      <section id="cta-form" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 border border-slate-800">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
              We help small business owners get approved—unlocking growth for the people who move our economy forward.
            </h2>
            <p className="text-xl text-slate-300 text-center mb-12 max-w-2xl mx-auto">
              If you're planning to hire, buy equipment, or smooth out your cash flow, the right bank relationship changes everything. Start by understanding where you stand and which banks are most likely to say yes.
            </p>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@business.com"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="goal" className="block text-sm font-medium text-slate-300 mb-2">
                  What are you trying to fund?
                </label>
                <input
                  type="text"
                  id="goal"
                  name="goal"
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  placeholder="Working capital, equipment, etc."
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
              <div className="flex flex-col justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  {isSubmitting ? "Submitting..." : "See my bank matches"}
                </button>
              </div>
            </form>
            <p className="text-xs text-slate-400 text-center mt-3">
              Next: answer 6 questions (2 minutes) → see matches.
            </p>
            <p className="text-xs text-slate-400 text-center mt-2">
              No spam. We don't sell your info. Unsubscribe anytime.
            </p>
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

