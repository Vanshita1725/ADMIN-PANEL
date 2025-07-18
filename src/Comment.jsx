import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import icon from './assets/icon.png'; // Assuming you have an icon for the avatar

const mockComments = [
  {
    id: 1,
    author: 'A WordPress Commenter',
    email: 'wapuu@wordpress.example',
    website: 'wordpress.org',
    avatar: 'C:\Users\Dell\OneDrive\Desktop\wordpress-panel\src\assets\icon.png',
    comment: "Hi, this is a comment.\nTo get started with moderating, editing, and deleting comments, please visit the Comments screen in the dashboard.\nCommenter avatars come from <a href=\"#\" class=\"text-blue-700 underline\">Gravatar</a>.",
    post: 'Hello world!',
    postLink: '#',
    viewPost: '#',
    commentCount: 1,
    date: '2025/07/14 at 5:02 am',
  },
];

const statusFilters = [
  { label: 'All', count: 1, active: true },
  { label: 'Mine', count: 0 },
  { label: 'Pending', count: 0 },
  { label: 'Approved', count: 1 },
  { label: 'Spam', count: 0 },
  { label: 'Trash', count: 0 },
];

const Comment = () => {
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState('');
  const [bulkAction, setBulkAction] = useState('');
  const [commentType, setCommentType] = useState('all');

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(mockComments.map((c) => c.id));
    } else {
      setSelected([]);
    }
  };

  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 max-w-8xl mt-5 lg:ms-46 flex-1">
          {/* Page Title and item count */}
          <div className="flex justify-between items-center mb-2">
            <h1 className="!text-2xl  !font-normal">Comments</h1>
            <span className="text-sm text-gray-600">{mockComments.length} item</span>
          </div>

          {/* Status Filter Bar */}
          <div className="flex flex-wrap items-center gap-2 text-sm mb-4">
            {statusFilters.map((f, i) => (
              <span key={f.label} className={f.active ? 'font-semibold !no-underline text-blue-700' : 'text-gray-700'}>
                {i !== 0 && <span className="mx-1 text-gray-400">|</span>}
                <a href="#" className={f.active ? 'text-black !no-underline' : '!no-underline'}>
                  {f.label} <span className="text-gray-500">({f.count})</span>
                </a>
              </span>
            ))}
          </div>

          {/* Filter Row */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <select
                className="border border-gray-300 rounded px-2 py-1 text-sm"
                value={bulkAction}
                onChange={(e) => setBulkAction(e.target.value)}
              >
                <option value="">Bulk actions</option>
                <option value="approve">Approve</option>
                <option value="unapprove">Unapprove</option>
                <option value="spam">Mark as spam</option>
                <option value="trash">Move to Trash</option>
                <option value="delete">Delete permanently</option>
              </select>
              <button className="border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 px-4 py-1 rounded text-sm font-medium">Apply</button>
              <select
                className="border border-gray-300 rounded px-2 py-1 text-sm"
                value={commentType}
                onChange={(e) => setCommentType(e.target.value)}
              >
                <option value="all">All comment types</option>
                <option value="comments">Comments</option>
                <option value="pings">Pings</option>
              </select>
              <button className="border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 px-4 py-1 rounded text-sm font-medium">Filter</button>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                className="border border-gray-300 rounded px-2 py-1 text-sm w-56"
                placeholder=""
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="border border-blue-500 bg-white text-blue-700 hover:bg-blue-50 px-4 py-1 rounded text-sm font-medium">Search Comments</button>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white border border-gray-200 rounded shadow-sm overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="p-2 text-left w-8">
                    <input
                      type="checkbox"
                      checked={selected.length === mockComments.length}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th className="p-2 text-left w-56 cursor-pointer select-none">
                    <span className="flex items-center gap-1">Author <span className="text-gray-400">&#8597;</span></span>
                  </th>
                  <th className="p-2 text-left cursor-pointer select-none">
                    <span className="flex items-center gap-1">Comment <span className="text-gray-400">&#8597;</span></span>
                  </th>
                  <th className="p-2 text-left w-64 cursor-pointer select-none">
                    <span className="flex items-center gap-1">In response to <span className="text-gray-400">&#8597;</span></span>
                  </th>
                  <th className="p-2 text-left w-56 cursor-pointer select-none">
                    <span className="flex items-center gap-1">Submitted on <span className="text-gray-400">&#8597;</span></span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockComments.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-4 text-center text-gray-500">No comments found.</td>
                  </tr>
                ) : (
                  <>
                    {mockComments.map((c) => (
                      <tr key={c.id} className="border-b border-gray-100 hover:bg-gray-50 align-top">
                        <td className="p-2 align-top">
                          <input
                            type="checkbox"
                            checked={selected.includes(c.id)}
                            onChange={() => handleSelect(c.id)}
                          />
                        </td>
                        <td className="p-2 align-top">
                          <div className="flex items-start gap-2">
                            <img src={icon} alt="avatar" className="w-10 h-10 rounded-full border" />
                            <div>
                              <div className="font-semibold">{c.author}</div>
                              <div className="text-xs text-blue-700 hover:underline cursor-pointer">{c.website}</div>
                              <div className="text-xs text-gray-500">{c.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-2 align-top">
                          <div className="whitespace-pre-line text-gray-800" dangerouslySetInnerHTML={{__html: c.comment}} />
                        </td>
                        <td className="p-2 align-top">
                          <div className="flex flex-col items-start gap-1">
                            <a href={c.postLink} className="text-blue-700 font-semibold hover:underline">{c.post}</a>
                            <a href={c.viewPost} className="text-xs text-blue-700 hover:underline">View Post</a>
                            <span className="inline-flex items-center gap-1 mt-1"><span className="bg-gray-500 text-white text-xs px-2 py-0.5 rounded shadow">{c.commentCount}</span></span>
                          </div>
                        </td>
                        <td className="p-2 align-top">
                          <div className="text-xs text-gray-700">{c.date}</div>
                        </td>
                      </tr>
                    ))}
                    {/* Empty row for spacing, as in WP */}
                    <tr>
                      <td className="p-2 align-top border-t border-gray-200">
                        <input type="checkbox" disabled className="opacity-0" />
                      </td>
                      <td className="p-2 align-top border-t border-gray-200 text-gray-700">Author</td>
                      <td className="p-2 align-top border-t border-gray-200 text-gray-700">Comment</td>
                      <td className="p-2 align-top border-t border-gray-200 text-gray-700">In response to</td>
                      <td className="p-2 align-top border-t border-gray-200 text-gray-700">Submitted on</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>

          {/* Bottom Bulk Actions and item count */}
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-2">
              <select
                className="border border-gray-300 rounded px-2 py-1 text-sm"
                value={bulkAction}
                onChange={(e) => setBulkAction(e.target.value)}
              >
                <option value="">Bulk actions</option>
                <option value="approve">Approve</option>
                <option value="unapprove">Unapprove</option>
                <option value="spam">Mark as spam</option>
                <option value="trash">Move to Trash</option>
                <option value="delete">Delete permanently</option>
              </select>
              <button className="border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 px-4 py-1 rounded text-sm font-medium">Apply</button>
            </div>
            <span className="text-sm text-gray-600">{mockComments.length} item</span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Comment;