import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const mockPlugins = [
  {
    name: "Akismet Anti-spam: Spam Protection",
    slug: "akismet",
    icon: "https://ps.w.org/akismet/assets/icon-256x256.png?rev=100",
    currentVersion: "5.3.7",
    newVersion: "5.5",
    detailsUrl: "#",
    compatibility: "100% (according to its author)",
    checked: false,
  },
];

export default function Dashbordupdated() {
  const [plugins, setPlugins] = useState(mockPlugins);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = (checked) => {
    setSelectAll(checked);
    setPlugins((prev) => prev.map((p) => ({ ...p, checked })));
  };

  const handlePluginCheck = (idx, checked) => {
    setPlugins((prev) => prev.map((p, i) => (i === idx ? { ...p, checked } : p)));
    setSelectAll(plugins.length > 0 && plugins.every((p, i) => (i === idx ? checked : p.checked)));
  };

  return (
    <div className="min-h-screen bg-[#f6f7f7] flex flex-col">
      <Header />
      <div className="flex flex-1 w-full max-w-7xl ms-46 mt-10 py-8 px-4 gap-6">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <h1 className="!text-2xl !font-normal text-gray-900 mb-2">WordPress Updates</h1>
          <div className="text-gray-700 mb-6 !text-sm max-w-5xl">
            Updates may take several minutes to complete. If there is no feedback after 5 minutes, or if there are errors please refer to the Help section above.
          </div>
          {/* Current version */}
          <div className=" py-4 mb-6 max-w-2xl">
            <div className="!text-md font-semibold text-gray-900 mb-1">Current version: 6.8.2</div>
            <div className="text-gray-700 mb-2  text-sm">Last checked on July 16, 2025 at 10:32 am GMT+0000. <a href="#" className="text-blue-700 underline">Check again.</a></div>
            <div className="text-gray-700 mb-2 pt-3 text-sm">This site is automatically kept up to date with each new version of WordPress.<br />
              <a href="#" className="text-blue-700 underline">Switch to automatic updates for maintenance and security releases only.</a>
            </div>
          </div>
          {/* Latest version notice */}
          <div className="mb-8">
            <div className="text-base text-gray-900 font-medium mb-2">You have the latest version of WordPress.</div>
            <button className="border bg-white border-[#2271b1] text-[#2271b1] px-2 py-2 rounded !font-normal !text-sm hover:bg-blue-50 transition-colors text-base">Re-install version 6.8.2</button>
          </div>
          {/* Plugins section */}
          <div className="mb-4 text-md font-semibold text-gray-900">Plugins (1)</div>
          <div className="text-gray-700 mb-2 text-sm max-w-3xl">
            The following plugins have new versions available. Check the ones you want to update and then click "Update Plugins".
          </div>
          <button className="border border-[#2271b1] text-[#2271b1] px-2 py-2 rounded bg-white !font-normal !text-sm hover:bg-blue-50 transition-colors text-base mb-2">Update Plugins</button>
          <div className="border border-gray-400 rounded bg-white mb-4">
            <table className="min-w-full text-sm">
              <thead className="border">
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 w-8 text-center">
                    <input type="checkbox" checked={selectAll} onChange={e => handleSelectAll(e.target.checked)} />
                  </th>
                  <th className="px-4 py-2 text-left !font-normal">Select All</th>
                </tr>
              </thead>
              <tbody>
                {plugins.map((plugin, idx) => (
                  <tr key={plugin.slug} className="border-t last:border-b-0">
                    <td className="px-4 py-4 text-center align-top">
                      <input
                        type="checkbox"
                        checked={plugin.checked}
                        onChange={e => handlePluginCheck(idx, e.target.checked)}
                      />
                    </td>
                    <td className="px-4 py-4 align-top">
                      <div className="flex items-center gap-4 mb-2">
                        <img src={plugin.icon} alt="icon" className="w-20 h-20 rounded" />
                        <div>
                        <span className="font-semibold text-gray-900 text-base">{plugin.name}</span>
                        <div className="text-gray-700 text-sm mb-1">
                        You have version {plugin.currentVersion} installed. Update to {plugin.newVersion}. <a href={plugin.detailsUrl} className="text-blue-700 underline">View version {plugin.newVersion} details.</a>
                      </div>
                      <div className="text-gray-700 text-xs mb-1">Compatibility with WordPress 6.8.2: {plugin.compatibility}</div>
                        </div>
                      </div>
                                          </td>
                  </tr>
                ))}
              </tbody>
              <thead className="border">
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 w-8 text-center">
                    <input type="checkbox" checked={selectAll} onChange={e => handleSelectAll(e.target.checked)} />
                  </th>
                  <th className="px-4 py-2 text-left !font-normal">Select All</th>
                </tr>
              </thead>
            </table>
            
          </div>
          <button className="border border-[#2271b1] text-[#2271b1] px-2 py-2 rounded  bg-white !text-sm !font-Normal hover:bg-blue-50 transition-colors text-base">Update Plugins</button>
          {/* Themes section */}
          <div className="mt-8">
            <div className="!text-md !font-semibold text-gray-900 mb-2">Themes</div>
            <div className="text-gray-700 !text-sm">Your themes are all up to date.</div>
          </div>
        </main>
      </div>
    </div>
  );
}