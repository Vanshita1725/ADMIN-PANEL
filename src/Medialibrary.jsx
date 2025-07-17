import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Medialibrary() {
  // No media items for this view
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [mediaType, setMediaType] = useState("all");
  const [mediaDate, setMediaDate] = useState("all");

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 max-w-8xl overflow-y-auto p-0">
          <div className="max-w-7xl mt-10 ms-46 py-8 px-4">
            {/* Top title bar */}
            <div className="flex items-center gap-3 mb-4">
              <h1 className="!text-2xl !text-gray-500 !font-normal">Media Library</h1>
              <button className="border !border-blue-500 text-blue-700 bg-white p-2 rounded !text-xs !font-medium hover:bg-blue-50">Add Media File</button>
            </div>
            {/* Toolbar */}
            <div className="flex items-center bg-white border rounded px-4 py-3 mb-8 shadow-sm">
              {/* View mode icons */}
              <div className="flex items-center gap-2 mr-4">
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
              <div className="flex gap-2">
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
             
              <button className="border border-blue-500 text-blue-700 bg-white px-3 py-1 rounded font-medium hover:bg-blue-50 mr-4">Bulk select</button>
              </div>
              {/* Spacer */}
              <div className="flex-1" />
              {/* Search */}
              <label htmlFor="media-search" className="mr-2 text-gray-700">Search media</label>
              <input
                id="media-search"
                type="text"
                className="border border-gray-300 rounded px-3 py-1 w-72"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            
            {/* No media items found */}
            <div className="flex flex-col items-center justify-center h-[350px] text-gray-500 text-xl font-normal select-none">
              No media items found.
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}