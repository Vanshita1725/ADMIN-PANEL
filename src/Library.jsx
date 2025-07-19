import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Library() {
  // No media items for this view
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [mediaType, setMediaType] = useState("all");
  const [mediaDate, setMediaDate] = useState("all");

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 md:flex-row">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 w-full p-0">
          <div className=" max-w-7xl lg:ms-46 mt-6 md:mt-10  py-4 md:py-8 px-2 sm:px-4">
            {/* Top title bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 mb-4">
              <h1 className="!text-2xl !text-gray-500 !font-normal">Media Library</h1>
              <button className="border !border-blue-500 text-blue-700 bg-white px-3 py-1 rounded !text-xs !font-medium hover:bg-blue-50">Add Media File</button>
            </div>
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row md:items-center bg-white border rounded px-2 sm:px-4 py-2 sm:py-3 mb-6 sm:mb-8 shadow-sm gap-2 md:gap-0">
              {/* View mode icons */}
              <div className="flex items-center gap-2 mb-2 md:mb-0 md:mr-4">
                <button
                  className={`p-1 border rounded ${viewMode === "list" ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-white"}`}
                  onClick={() => setViewMode("list")}
                  aria-label="List view"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>
                <button
                  className={`p-1 border rounded ${viewMode === "grid" ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-white"}`}
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid view"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="4" y="4" width="7" height="7" rx="1"/><rect x="13" y="4" width="7" height="7" rx="1"/><rect x="4" y="13" width="7" height="7" rx="1"/><rect x="13" y="13" width="7" height="7" rx="1"/></svg>
                </button>
              </div>
              {/* Filters */}
              <div className="flex flex-wrap gap-2">
              <select
                className="border  border-gray-300 rounded px-2 py-1 mr-2"
                value={mediaType}
                onChange={e => setMediaType(e.target.value)}
              >
                <option value="all">All media items</option>
                <option value="images">Images</option>
                <option value="audio">Audio</option>
                <option value="video">Video</option>
              </select>
              <select
                className="border border-gray-300 rounded px-2 py-1 mr-2"
                value={mediaDate}
                onChange={e => setMediaDate(e.target.value)}
              >
                <option value="all">All dates</option>
                <option value="2024-06">June 2024</option>
                <option value="2024-05">May 2024</option>
              </select>
             
              <button className="border border-blue-500 text-blue-700 bg-white px-3 py-1 rounded font-medium hover:bg-blue-50 md:mr-4">Bulk select</button>
              </div>
              {/* Spacer */}
              <div className="flex-1" />
              {/* Search */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
                <label htmlFor="media-search" className="text-gray-700">Search media</label>
                <input
                  id="media-search"
                  type="text"
                  className="border border-gray-300 rounded px-3 py-1 w-full sm:w-72"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
            </div>
            
            {/* No media items found */}
            <div className="flex flex-col items-center justify-center h-[200px] sm:h-[300px] md:h-[350px] text-gray-500 text-lg sm:text-xl font-normal select-none">
              No media items found.
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}