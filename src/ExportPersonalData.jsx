import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

 function ExportPersonalData() {
  const [email, setEmail] = useState("");
  const [sendConfirmation, setSendConfirmation] = useState(true);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  // Sync both select all checkboxes
  const handleSelectAll = (e) => {
    setSelectAllChecked(e.target.checked);
    // Implement select all logic for rows here if needed
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStatus(
        `A request to export personal data for ${email} has been submitted. You will be notified by email when the export is ready.`
      );
      setEmail("");
    }, 1200);
  };

  // Sort icon SVG
  const sortIcon = (
    <span className="inline-block align-middle ml-1">
      <svg className="w-3 h-3 text-gray-400 inline" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10l4-4 4 4M16 14l-4 4-4-4" /></svg>
    </span>
  );

  return (
    <div className="min-h-screen bg-[#f6f7f7] flex flex-col">
      <Header />
      <div className="flex  w-full  py-8 px-4 gap-6">
        <Sidebar />
        <main className="flex-1 lg:ml-46 mt-8 min-w-0">
          <div >
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">Export Personal Data</h1>
            <div className="text-gray-700 mb-8 text-base">
              This tool helps site owners comply with local laws and regulations by exporting known data for a given user in a .zip file.
            </div>
            <div className="font-semibold text-lg text-gray-900 mb-4">Add Data Export Request</div>
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                <label htmlFor="email" className="w-55 font-medium text-gray-900 text-base">
                  Username or email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="flex border border-gray-300 rounded px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-[#2271b1] w-80"
                  placeholder=""
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  disabled={loading}
                />
              </div>
              <div className="flex items-center gap-2 mb-6 ml-0 md:ml-64">
                <input
                  id="sendConfirmation"
                  name="sendConfirmation"
                  type="checkbox"
                  checked={sendConfirmation}
                  onChange={e => setSendConfirmation(e.target.checked)}
                  className="accent-[#2271b1] w-4 h-4"
                />
                <label htmlFor="sendConfirmation" className="text-gray-900 text-base select-none">
                  Send personal data export confirmation email.
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  className="border-1 bg-white border-blue-600 text-blue-700 px-3 py-2  font-semibold hover:bg-blue-50 transition-colors !text-sm "
                  disabled={loading || !email}
                >
                  {loading ? "Requesting..." : "Send Request"}
                </button>
              </div>
            </form>
            {status && (
              <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-800 rounded text-base">
                {status}
              </div>
            )}
            {/* Table Section */}
            <div className="mt-8">
              <div className="border-b border-gray-200 mb-2">
                <span className="text-base text-gray-900 font-medium">All (0)</span>
              </div>
              <div className="overflow-x-auto bg-white border border-gray-300 rounded">
                <table className="min-w-full text-sm">
                  <thead className="bg-white border-b">
                    <tr>
                      <th className="px-4 py-2 w-8">
                        <input id="selectAll" type="checkbox" checked={selectAllChecked} onChange={handleSelectAll} className="cursor-pointer" />
                      </th>
                      <th className="px-4 py-2 text-left font-semibold">
                        <span className="text-[#2271b1] cursor-pointer hover:underline">Requester{sortIcon}</span>
                      </th>
                      <th className="px-4 py-2 text-left font-semibold">Status</th>
                      <th className="px-4 py-2 text-left font-semibold">
                        <span className="text-[#2271b1] cursor-pointer hover:underline">Requested{sortIcon}</span>
                      </th>
                      <th className="px-4 py-2 text-left font-semibold">Next steps</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 text-center" colSpan={5}>No items found.</td>
                    </tr>
                  </tbody>
                  <thead className="bg-white border-t">
                    <tr>
                      <th className="px-4 py-2 w-8">
                        <input id="selectAll" type="checkbox" checked={selectAllChecked} onChange={handleSelectAll} className="cursor-pointer" />
                      </th>
                      <th className="px-4 py-2 text-left font-semibold">
                        <span className="text-[#2271b1] cursor-pointer hover:underline">Requester{sortIcon}</span>
                      </th>
                      <th className="px-4 py-2 text-left font-semibold">Status</th>
                      <th className="px-4 py-2 text-left font-semibold">
                        <span className="text-[#2271b1] cursor-pointer hover:underline">Requested{sortIcon}</span>
                      </th>
                      <th className="px-4 py-2 text-left font-semibold">Next steps</th>
                    </tr>
                  </thead>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}


export default  ExportPersonalData;