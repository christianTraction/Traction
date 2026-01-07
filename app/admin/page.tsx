"use client";

import { useState, useEffect } from "react";

interface Lead {
  id: number;
  email: string;
  credit_score: string | null;
  funding_amount: string | null;
  annual_revenue: string | null;
  time_in_business: string | null;
  created_at: string;
}

export default function AdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if already authenticated by trying to fetch leads
    // The API will return 401 if not authenticated
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const response = await fetch("/api/leads");
      if (response.ok) {
        setAuthenticated(true);
        fetchLeads();
      } else {
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    try {
      const response = await fetch("/api/admin/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setAuthenticated(true);
        fetchLeads();
      } else {
        setError(data.message || "Incorrect password");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
    }
  };

  const fetchLeads = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/leads");
      const data = await response.json();
      
      if (data.success) {
        setLeads(data.leads);
      } else {
        setError("Failed to fetch leads");
      }
    } catch (err) {
      setError("Error loading leads");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const exportCSV = () => {
    const headers = ["ID", "Email", "Credit Score", "Amount", "Revenue", "Time in Business", "Date"];
    const rows = leads.map((lead) => [
      lead.id,
      lead.email,
      lead.credit_score || "",
      lead.funding_amount || "",
      lead.annual_revenue || "",
      lead.time_in_business || "",
      formatDate(lead.created_at),
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `traction-leads-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 max-w-md w-full">
          <h1 className="text-2xl font-bold text-slate-50 mb-2">Admin Login</h1>
          <p className="text-slate-400 mb-6">Enter password to view submissions</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-slate-50 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              autoFocus
            />
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Form Submissions</h1>
            <p className="text-slate-400">
              {leads.length} total {leads.length === 1 ? "submission" : "submissions"}
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={fetchLeads}
              className="bg-slate-800 hover:bg-slate-700 text-slate-50 px-4 py-2 rounded-lg font-medium transition"
            >
              Refresh
            </button>
            <button
              onClick={exportCSV}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium transition"
            >
              Export CSV
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-slate-400">Loading submissions...</p>
          </div>
        ) : error ? (
          <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-red-400">
            {error}
          </div>
        ) : leads.length === 0 ? (
          <div className="bg-slate-900 rounded-2xl p-12 border border-slate-800 text-center">
            <p className="text-slate-400 text-lg">No submissions yet</p>
            <p className="text-slate-500 text-sm mt-2">
              Form submissions will appear here once users start submitting.
            </p>
          </div>
        ) : (
          <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-800 border-b border-slate-700">
                  <tr>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                      ID
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                      Email
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                      Credit Score
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                      Amount
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                      Revenue
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                      Time in Business
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-300">
                      Submitted
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {leads.map((lead) => (
                    <tr
                      key={lead.id}
                      className="hover:bg-slate-800/50 transition"
                    >
                      <td className="px-6 py-4 text-sm text-slate-400">
                        #{lead.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-50 font-medium">
                        {lead.email}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-300">
                        {lead.credit_score || (
                          <span className="text-slate-500 italic">Not specified</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-300">
                        {lead.funding_amount || (
                          <span className="text-slate-500 italic">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-300">
                        {lead.annual_revenue || (
                          <span className="text-slate-500 italic">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-300">
                        {lead.time_in_business || (
                          <span className="text-slate-500 italic">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-400">
                        {formatDate(lead.created_at)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

