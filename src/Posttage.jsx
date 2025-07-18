import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Posttage() {
  const [tags, setTags] = useState([]);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState([]);
  const [sort, setSort] = useState({ key: "name", dir: "asc" });

  const sorted = [...tags].sort((a, b) => {
    const dir = sort.dir === "asc" ? 1 : -1;
    if (a[sort.key] < b[sort.key]) return -1 * dir;
    if (a[sort.key] > b[sort.key]) return 1 * dir;
    return 0;
  });

  const handleAdd = e => {
    e.preventDefault();
    if (!name.trim()) return;
    setTags([
      ...tags,
      {
        id: Date.now(),
        name: name.trim(),
        slug: slug.trim() || name.trim().toLowerCase().replace(/\s+/g, "-"),
        description,
        count: 0,
      },
    ]);
    setName("");
    setSlug("");
    setDescription("");
  };

  const handleSelectAll = e => {
    setSelected(e.target.checked ? sorted.map(tag => tag.id) : []);
  };
  const handleSelect = id => {
    setSelected(selected.includes(id) ? selected.filter(i => i !== id) : [...selected, id]);
  };
  const handleSort = key => {
    setSort(s => ({ key, dir: s.key === key && s.dir === "asc" ? "desc" : "asc" }));
  };

  return (
    <div className="min-h-screen bg-[#f6f7f7] flex flex-col">
      <Header />
      <div className="flex flex-1 w-full mt-10 max-w-7xl lg:ms-48 py-8 px-4 gap-6">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <h1 className="!text-2xl !font-normal pb-3 text-gray-900">Tags</h1>
          <div className="grid grid-cols-1 md:grid-cols-[420px_1fr] gap-6 items-start">
            {/* Add Tag Form */}
            <form
              className="rounded p-2 pt-2 flex flex-col gap-2"
              onSubmit={handleAdd}
            >
              <h2 className="!text-lg !font-normal mb-2 text-gray-900">Add Tag</h2>
              <div>
                <label className="block text-sm !font-normal mb-1 text-gray-900" htmlFor="tag-name">
                  Name
                </label>
                <input
                  id="tag-name"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-base bg-white focus:outline-none focus:ring-2 focus:ring-[#2271b1]"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  autoComplete="off"
                />
                <div className="text-xs text-gray-600 mt-1">
                  The name is how it appears on your site.
                </div>
              </div>
              <div>
                <label className="block text-sm !font-normal mb-1 text-gray-900" htmlFor="tag-slug">
                  Slug
                </label>
                <input
                  id="tag-slug"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-base bg-white focus:outline-none focus:ring-2 focus:ring-[#2271b1]"
                  value={slug}
                  onChange={e => setSlug(e.target.value)}
                  autoComplete="off"
                />
                <div className="text-xs text-gray-600 mt-1">
                  The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.
                </div>
              </div>
              <div>
                <label className="block text-sm !font-normal mb-1 text-gray-900" htmlFor="tag-desc">
                  Description
                </label>
                <textarea
                  id="tag-desc"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-base bg-white focus:outline-none focus:ring-2 focus:ring-[#2271b1] min-h-[90px]"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
                <div className="text-xs text-gray-600 mt-1">
                  The description is not prominent by default; however, some themes may show it.
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#2271b1] text-white px-5 py-2 rounded font-semibold hover:bg-[#135e96] transition-colors w-fit mt-2"
              >
                Add Tag
              </button>
            </form>
            {/* Tags Table and Info */}
            <div>
              <div className="overflow-x-auto mt-10 border border-gray-200 rounded bg-white">
                <table className="min-w-full text-sm">
                  <thead className="bg-white border  border-gray-300">
                    <tr>
                      <th className="px-3 py-2 text-left w-8">
                        <input
                          type="checkbox"
                          checked={selected.length === sorted.length && sorted.length > 0}
                          onChange={handleSelectAll}
                        />
                      </th>
                      <th
                        className="px-3 py-2 cursor-pointer select-none text-[#2271b1] font-semibold"
                        onClick={() => handleSort("name")}
                      >
                        Name
                        <span className="inline-block align-middle ml-1 text-xs text-gray-400">
                          {sort.key === "name" ? (sort.dir === "asc" ? "▲" : "▼") : <span className="text-gray-400">▲</span>}
                        </span>
                      </th>
                      <th
                        className="px-3 py-2 cursor-pointer select-none text-[#2271b1] font-semibold"
                        onClick={() => handleSort("description")}
                      >
                        Description
                        <span className="inline-block align-middle ml-1 text-xs text-gray-400">
                          {sort.key === "description" ? (sort.dir === "asc" ? "▲" : "▼") : <span className="text-gray-400">▲</span>}
                        </span>
                      </th>
                      <th
                        className="px-3 py-2 cursor-pointer select-none text-[#2271b1] font-semibold"
                        onClick={() => handleSort("slug")}
                      >
                        Slug
                        <span className="inline-block align-middle ml-1 text-xs text-gray-400">
                          {sort.key === "slug" ? (sort.dir === "asc" ? "▲" : "▼") : <span className="text-gray-400">▲</span>}
                        </span>
                      </th>
                      <th
                        className="px-3 py-2 cursor-pointer select-none text-[#2271b1] font-semibold"
                        onClick={() => handleSort("count")}
                      >
                        Count
                        <span className="inline-block align-middle ml-1 text-xs text-gray-400">
                          {sort.key === "count" ? (sort.dir === "asc" ? "▲" : "▼") : <span className="text-gray-400">▲</span>}
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sorted.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="text-center bg-gray-200 text-gray-500 py-2">
                          No categories found.
                        </td>
                      </tr>
                    ) :
                      sorted.map((cat) => (
                        <tr key={cat.id} className="bg-[#f6f7f7] border border-gray-300">
                          <td className="px-3 py-2">
                        
                          </td>
                          <td className="px-3 py-2 font-semibold text-[#2271b1]">
                            {cat.name}
                          </td>
                          <td className="px-3 py-2 text-gray-700">
                            {cat.description ? cat.description : <span className="text-gray-400">—</span>}
                          </td>
                          <td className="px-3 py-2 text-gray-700">{cat.slug}</td>
                          <td className="px-3 py-2 text-[#2271b1] font-semibold">{cat.count}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                    <thead className="bg-white border border-gray-300">
                    <tr>
                      <th className="px-3 py-2 text-left w-8">
                        <input
                          type="checkbox"
                          checked={selected.length === sorted.length && sorted.length > 0}
                          onChange={handleSelectAll}
                        />
                      </th>
                      <th
                        className="px-3 py-2 cursor-pointer select-none text-[#2271b1] font-semibold"
                        onClick={() => handleSort("name")}
                      >
                        Name
                        <span className="inline-block align-middle ml-1 text-xs text-gray-400">
                          {sort.key === "name" ? (sort.dir === "asc" ? "▲" : "▼") : <span className="text-gray-400">▲</span>}
                        </span>
                      </th>
                      <th
                        className="px-3 py-2 cursor-pointer select-none text-[#2271b1] font-semibold"
                        onClick={() => handleSort("description")}
                      >
                        Description
                        <span className="inline-block align-middle ml-1 text-xs text-gray-400">
                          {sort.key === "description" ? (sort.dir === "asc" ? "▲" : "▼") : <span className="text-gray-400">▲</span>}
                        </span>
                      </th>
                      <th
                        className="px-3 py-2 cursor-pointer select-none text-[#2271b1] font-semibold"
                        onClick={() => handleSort("slug")}
                      >
                        Slug
                        <span className="inline-block align-middle ml-1 text-xs text-gray-400">
                          {sort.key === "slug" ? (sort.dir === "asc" ? "▲" : "▼") : <span className="text-gray-400">▲</span>}
                        </span>
                      </th>
                      <th
                        className="px-3 py-2 cursor-pointer select-none text-[#2271b1] font-semibold"
                        onClick={() => handleSort("count")}
                      >
                        Count
                        <span className="inline-block align-middle ml-1 text-xs text-gray-400">
                          {sort.key === "count" ? (sort.dir === "asc" ? "▲" : "▼") : <span className="text-gray-400">▲</span>}
                        </span>
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="text-xs text-gray-700 mt-4">
                Tags can be selectively converted to categories using the{" "}
                <a href="#" className="text-[#2271b1] underline hover:text-[#135e96]">
                  tag to category converter
                </a>
                .
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}