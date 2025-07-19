import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const mockUsers = [
  {
    id: 1,
    username: 'root',
    name: '—',
    email: 'harshkothari2909@gmail.com',
    role: 'Administrator',
    posts: 1,
    avatar: 'https://secure.gravatar.com/avatar/00000000000000000000000000000000?d=mp',
  },
];

const Alluser = () => {
  const [selected, setSelected] = useState([]);
  const [bulkAction, setBulkAction] = useState('');
  const [roleAction, setRoleAction] = useState('');

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(mockUsers.map((u) => u.id));
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
    <div className="bg-gray-100">
      <Sidebar />
      <div >
        <Header />
        <main className="p-6 flex-1 lg:ms-46 mt-10 max-w-8xl">
          {/* Top bar: Users title, Add User button, and search */}
          <div className="flex flex-wrap items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              <h1 className="!text-2xl !text-gray-600 !font-normal">Users</h1>
              <button className="border !border-blue-500 text-blue-700 bg-white px-2 py-1 rounded !text-xs !font-medium hover:bg-blue-50">Add User</button>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                className="border bg-white border-gray-300 rounded px-3  w-50"
                placeholder=""
              />
              <button className="border !border-blue-500 !text-xs text-blue-700 bg-white px-2 py-1 rounded font-medium hover:bg-blue-50">Search Users</button>
            </div>
          </div>

          {/* Users filter bar */}
          <div className="flex items-center gap-2 mb-4 text-sm">
            <span className="font-semibold text-black">All <span className="text-gray-500">({mockUsers.length})</span></span>
            <span className="text-gray-700">|</span>
            <span className="text-blue-700 cursor-pointer hover:underline">Administrator <span className="text-gray-500">(1)</span></span>
          </div>

          {/* Top item count */}
          <div className="flex justify-end items-center mb-1">
            <span className="text-sm text-gray-600">{mockUsers.length} item</span>
          </div>

          {/* Top controls */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <select
              className="border border-gray-300 rounded px-2 py-1 text-sm"
              value={bulkAction}
              onChange={(e) => setBulkAction(e.target.value)}
            >
              <option value="">Bulk actions</option>
              <option value="delete">Delete</option>
            </select>
            <button className="border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 px-4 py-1 rounded text-sm font-medium">Apply</button>
            <select
              className="border border-gray-300 rounded px-2 py-1 text-sm"
              value={roleAction}
              onChange={(e) => setRoleAction(e.target.value)}
            >
              <option value="">Change role to...</option>
              <option value="Administrator">Administrator</option>
              <option value="Editor">Editor</option>
              <option value="Author">Author</option>
              <option value="Contributor">Contributor</option>
              <option value="Subscriber">Subscriber</option>
            </select>
            <button className="border border-blue-500 bg-white text-blue-700 hover:bg-blue-50 px-4 py-1 rounded text-sm font-medium">Change</button>
          </div>

          {/* Table */}
          <div className="bg-white border border-gray-200 rounded shadow-sm overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="p-2 text-left w-8">
                    <input
                      type="checkbox"
                      checked={selected.length === mockUsers.length && mockUsers.length > 0}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th className="p-2 text-left w-56 cursor-pointer select-none">
                    <span className="flex items-center gap-1">Username <span className="text-gray-400">&#8597;</span></span>
                  </th>
                  <th className="p-2 text-left w-56 cursor-pointer select-none">
                    <span className="flex items-center gap-1">Name</span>
                  </th>
                  <th className="p-2 text-left w-64 cursor-pointer select-none">
                    <span className="flex items-center gap-1">Email <span className="text-gray-400">&#8597;</span></span>
                  </th>
                  <th className="p-2 text-left w-40 cursor-pointer select-none">
                    <span className="flex items-center gap-1">Role</span>
                  </th>
                  <th className="p-2 text-left w-20 cursor-pointer select-none">
                    <span className="flex items-center gap-1">Posts</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockUsers.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-4 text-center text-gray-500">No users found.</td>
                  </tr>
                ) : (
                  <>
                    {mockUsers.map((u) => (
                      <tr key={u.id} className="border-b border-gray-100 hover:bg-gray-50 align-top">
                        <td className="p-2 align-top">
                          <input
                            type="checkbox"
                            checked={selected.includes(u.id)}
                            onChange={() => handleSelect(u.id)}
                          />
                        </td>
                        <td className="p-2 align-top">
                          <div className="flex items-center gap-2">
                            <img src={u.avatar} alt="avatar" className="w-8 h-8 rounded-full border" />
                            <span className="font-semibold text-blue-700 hover:underline cursor-pointer">{u.username}</span>
                          </div>
                        </td>
                        <td className="p-2 align-top">{u.name}</td>
                        <td className="p-2 align-top">
                          <a href={`mailto:${u.email}`} className="text-blue-700 hover:underline">{u.email}</a>
                        </td>
                        <td className="p-2 align-top">{u.role}</td>
                        <td className="p-2 align-top">
                          <span className="inline-block text-blue-700 hover:underline cursor-pointer">{u.posts}</span>
                        </td>
                      </tr>
                    ))}
                    {/* Empty row for spacing, as in WP */}
                    <tr>
                      <td className="p-2 align-top border-t border-gray-200">
                        <input type="checkbox" disabled className="opacity-0" />
                      </td>
                      <td className="p-2 align-top border-t border-gray-200 text-gray-700">Username</td>
                      <td className="p-2 align-top border-t border-gray-200 text-gray-700">Name</td>
                      <td className="p-2 align-top border-t border-gray-200 text-gray-700">Email</td>
                      <td className="p-2 align-top border-t border-gray-200 text-gray-700">Role</td>
                      <td className="p-2 align-top border-t border-gray-200 text-gray-700">Posts</td>
                    </tr>
                  </>
                )}
              </tbody>
            </table>
          </div>

          {/* Bottom controls and item count */}
          <div className="flex justify-between items-center mt-2">
            <div className="flex flex-wrap items-center gap-2">
              <select
                className="border border-gray-300 rounded px-2 py-1 text-sm"
                value={bulkAction}
                onChange={(e) => setBulkAction(e.target.value)}
              >
                <option value="">Bulk actions</option>
                <option value="delete">Delete</option>
              </select>
              <button className="border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 px-4 py-1 rounded text-sm font-medium">Apply</button>
              <select
                className="border border-gray-300 rounded px-2 py-1 text-sm"
                value={roleAction}
                onChange={(e) => setRoleAction(e.target.value)}
              >
                <option value="">Change role to...</option>
                <option value="Administrator">Administrator</option>
                <option value="Editor">Editor</option>
                <option value="Author">Author</option>
                <option value="Contributor">Contributor</option>
                <option value="Subscriber">Subscriber</option>
              </select>
              <button className="border border-blue-500 bg-white text-blue-700 hover:bg-blue-50 px-4 py-1 rounded text-sm font-medium">Change</button>
            </div>
            <span className="text-sm text-gray-600">{mockUsers.length} item</span>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Alluser;