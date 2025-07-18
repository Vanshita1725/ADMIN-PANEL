import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";



export default function Themes() {
  const [search, setSearch] = useState("");
  const [hovered, setHovered] = useState(null);
  // Mock themes data
  const mockThemes = [
    {
      id: 1,
      name: "Astra",
      screenshot: "http://localhost/wordpress/wp-content/themes/twentytwentyfive/screenshot.png?ver=1.2",
      active: true
    },
    {
      id: 2,
     
      name: "Twenty Twenty-Four",
      screenshot: "https://wp-themes.com/wp-content/themes/twentytwentyfour/screenshot.png",
      active: false
 
    },
    {
      id: 3,
      name: "OceanWP",
      screenshot: "http://localhost/wordpress/wp-content/themes/twentytwentythree/screenshot.png?ver=1.6",
      active: false
    },
    
  ];
  const [themes] = useState(mockThemes);

  const filteredThemes = themes.filter((theme) =>
    theme.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto mt-10 p-0">
          <div className="max-w-8xl lg:ms-46 py-8 px-4 pe-0 me-3    ">
            {/* Top bar */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <h1 className="!text-2xl !text-gray-600 !font-normal">Themes</h1>
                <span className="ml-2 bg-gray-400 text-white !text-sm px-2.5 py-1 rounded-full font-semibold">{filteredThemes.length}</span>
                <button className="border !border-blue-500 text-blue-500 !text-sm bg-white px-2 py-2 !rounded-sm font-medium hover:bg-blue-50 ml-4">Add Theme</button>
              </div>
              
            </div>
            <div className="flex items-center gap-2 mb-2 flex-1 justify-end">
                <label htmlFor="theme-search" className="text-gray-700 text-sm">Search installed themes</label>
                <input
                  id="theme-search"
                  type="text"
                  className="border border-gray-300 bg-white rounded px-3 py-1 w-80"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
            {/* Themes grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {filteredThemes.map((theme) => (
                <div
                  key={theme.id}
                  className="relative bg-white  border rounded shadow flex flex-col overflow-hidden group"
                  onMouseEnter={() => setHovered(theme.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Screenshot */}
                  {theme.screenshot ? (
                    <img src={theme.screenshot} alt={theme.name} className="w-full h-64 object-cover" />
                  ) : (
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-gray-400">No screenshot</div>
                  )}
                  {/* Active theme banner */}
                  {theme.active ? (
                    <div className="absolute bottom-0 left-0 w-full bg-gray-900 text-white flex items-center justify-between px-4 py-3">
                      <span className="font-semibold text-base">Active: <span className="font-normal">{theme.name}</span></span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 ml-4">Customize</button>
                    </div>
                  ) : (
                    <>
                      {/* Hover overlay */}
                      {hovered === theme.id && (
                        <>
                          <div className="absolute w-full h-full bg-gray-100 opacity-90 flex items-center justify-center z-10 transition-all">
                            <span className="!text-White bg-gyay-600  text-lg items-center flex justify-center font-semibold px-6 py-2 rounded">Theme Details</span>
                          </div>
                          <div className="absolute bottom-0  -right-40 w-full flex gap-2 px-4 py-2 z-20 bg-transparent">
                            <button className="border !text-xs border-blue-500 text-blue-700 bg-white px-2 py-2 rounded-xl !font-medium hover:bg-blue-50">Activate</button>
                            <button className="bg-blue-600 !text-xs  text-white px-2 py-2 rounded-xl   !font-medium hover:bg-blue-700">Live Preview</button>
                          </div>
                        </>
                      )}
                      {/* Theme name (always visible) */}
                      <div className="w-full bg-white px-4 py-3 border-t text-base font-medium text-gray-800">{theme.name}</div>
                    </>
                  )}
                </div>
              ))}
              {/* Add Theme card */}
              <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-gray-50 rounded shadow h-64 cursor-pointer transition hover:border-blue-400 hover:bg-blue-50">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-2">
                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                  </div>
                  <div className="text-lg text-gray-600 font-medium">Add Theme</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}