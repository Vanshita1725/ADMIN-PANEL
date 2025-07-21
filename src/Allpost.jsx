import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const mockPosts = [
  {
    id: 1,
    title: "Hello world!",
    author: "root",
    categories: ["Uncategorized"],
    tags: [],
    comments: 1,
    date: "2025/07/14 at 5:02 am",
    status: "Published",
  },
];

export default function Allpost() {
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");

  // For pixel-perfect spacing, use py-8 for top, px-4 for sides, and mb-4 for gaps
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full lg:w-auto">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-0">
          <div className="max-w-txl mt-10 lg:ms-47 py-8 px-2 sm:px-4">
            {/* Top bar */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h1 className="!text-2xl !font-normal mr-2">Posts</h1>
              <button className="border border-blue-500 text-blue-700 bg-white px-3 py-1 rounded hover:bg-blue-50 !text-xs">Add Post</button>
            </div>
            {/* Tabs */}
            <div className="md:flex justify-between h-10  items-center mb-4">     
                      <div className="flex items-center  gap-4 text-sm">
              <span className=" font-semibold  border-blue-700 pb-1 cursor-pointer">All <span className="text-gray-600">(1)</span></span>
              <span className="text-blue-700  hover:underline border-l-2 border-gray-300 pl-2 cursor-pointer">Published <span className="text-gray-600">(1)</span></span>
            </div>
            <div className="flex relative gap-3 " >
              <input
                type="text"
                className="border rounded px-3 h-10 bg-white w-64 text-sm"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder=""
              />
              <button className="border border-blue-500 text-blue-700 bg-white px-2 h-10 bg-gray-200 rounded hover:bg-blue-50 !text-xs">Search Posts</button>
             </div>
             </div>
 
            {/* Filters and search */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <select className="border rounded px-2 py-1 text-sm">
                <option>Bulk actions</option>
                <option>Edit</option>
                <option>Move to Trash</option>
              </select>
              <button className="border border-blue-500 text-blue-700 bg-white px-3 py-1 rounded hover:bg-blue-50 text-sm">Apply</button>
              <select className="border rounded px-2 py-1 text-sm">
                <option>All dates</option>
                <option>2025/07</option>
              </select>
              <select className="border rounded px-2 py-1 text-sm">
                <option>All Categories</option>
                <option>Uncategorized</option>
              </select>
              <button className="border border-blue-500 text-blue-700 bg-white px-3 py-1 rounded hover:bg-blue-50 text-sm">Filter</button>
              
            </div>
            {/* Table */}
            <div className="overflow-x-auto bg-white rounded shadow border mb-2">
              <table className="min-w-full text-sm whitespace-nowrap">
                <thead className="bg-gray-50 border-1 border-b">
                  <tr>
                    <th className="px-3 py-2 w-8">
                      <input
                        type="checkbox"
                        checked={selected.length === mockPosts.length && mockPosts.length > 0}
                        onChange={() => {
                          if (selected.length === mockPosts.length) setSelected([]);
                          else setSelected(mockPosts.map((p) => p.id));
                        }}
                      />
                    </th>
                    <th className="px-3 py-2 text-left font-semibold cursor-pointer  select-none">
                      <span className="flex text-blue-700 items-center gap-1">Title <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10l4-4 4 4M16 14l-4 4-4-4" /></svg></span>
                    </th>
                    <th className="px-3 py-2 text-left font-semibold">Author</th>
                    <th className="px-3 py-2 text-left font-semibold">Categories</th>
                    <th className="px-3 py-2 text-left font-semibold">Tags</th>
                    <th className="px-3 py-2 text-center font-semibold w-16">
                      <span className="flex items-center justify-center gap-1">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 3h-6a2 2 0 00-2 2v5h10V5a2 2 0 00-2-2z" /></svg>
                        <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10l4-4 4 4M16 14l-4 4-4-4" /></svg>
                      </span>
                    </th>
                    <th className="px-3 py-2 text-left font-semibold">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {mockPosts.map((post, idx) => (
                    <tr
                      key={post.id}
                      className={`border-b ${selected.includes(post.id) ? 'bg-blue-50' : idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100`}
                    >
                      <td className="px-3 py-2">
                        <input
                          type="checkbox"
                          checked={selected.includes(post.id)}
                          onChange={() => {
                            if (selected.includes(post.id)) {
                              setSelected(selected.filter(id => id !== post.id));
                            } else {
                              setSelected([...selected, post.id]);
                            }
                          }}
                        />
                      </td>
                      <td className="px-3 py-2 font-semibold text-blue-800 cursor-pointer hover:underline">{post.title}</td>
                      <td className="px-3 py-2 text-blue-700">{post.author}</td>
                      <td className="px-3 py-2 text-blue-700 underline cursor-pointer">{post.categories.join(', ')}</td>
                      <td className="px-3 py-2 text-gray-500">{post.tags.length ? post.tags.join(', ') : '—'}</td>
                      <td className="px-3 py-2 text-center">
                        <span className="inline-flex items-center gap-1 bg-gray-200 rounded px-2 py-1 text-xs font-semibold text-gray-700">
                          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 3h-6a2 2 0 00-2 2v5h10V5a2 2 0 00-2-2z" /></svg>
                          {post.comments}
                        </span>
                      </td>
                      <td className="px-3 py-2">
                        <div className="text-gray-700 text-xs">{post.status}</div>
                        <div className="text-gray-500 text-xs">2025/07/08 at 11:19 am</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tbody>
                  <tr>
                    <th className="px-3 py-2 w-8">
                      <input
                        type="checkbox"
                        checked={selected.length === mockPosts.length && mockPosts.length > 0}
                        onChange={() => {
                          if (selected.length === mockPosts.length) setSelected([]);
                          else setSelected(mockPosts.map((p) => p.id));
                        }}
                      />
                    </th>
                    <th className="px-3 py-2 text-left font-semibold cursor-pointer  select-none">
                      <span className="flex text-blue-700 items-center gap-1">Title <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10l4-4 4 4M16 14l-4 4-4-4" /></svg></span>
                    </th>
                    <th className="px-3 py-2 text-left font-semibold">Author</th>
                    <th className="px-3 py-2 text-left font-semibold">Categories</th>
                    <th className="px-3 py-2 text-left font-semibold">Tags</th>
                    <th className="px-3 py-2 text-center font-semibold w-16">
                      <span className="flex items-center justify-center gap-1">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 3h-6a2 2 0 00-2 2v5h10V5a2 2 0 00-2-2z" /></svg>
                        <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10l4-4 4 4M16 14l-4 4-4-4" /></svg>
                      </span>
                    </th>
                    <th className="px-3 py-2 text-left font-semibold">Date</th>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Bottom bulk actions */}
            <div className="flex items-center gap-2 mt-2">
              <select className="border rounded px-2 py-1 text-sm">
                <option>Bulk actions</option>
                <option>Edit</option>
                <option>Move to Trash</option>
              </select>
              <button className="border border-blue-500 text-blue-700 bg-white px-3 py-1 rounded hover:bg-blue-50 text-sm">Apply</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}