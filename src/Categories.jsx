import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const initialCategories = [
  {
    id: 1,
    name: "Uncategorized",
    slug: "uncategorized",
    description: "",
    count: 1,
    parent: null,
  },
];

export default function Categories() {
  // Select all handler
  const handleSelectAll = e => {
    setSelected(e.target.checked ? sorted.map(cat => cat.id) : []);
  };
  // Add Category handler
  const handleAdd = e => {
    e.preventDefault();
    if (!name.trim()) return;
    setCategories([
      ...categories,
      {
        id: Date.now(),
        name: name.trim(),
        slug: slug.trim() || name.trim().toLowerCase().replace(/\s+/g, "-"),
        description,
        count: 0,
        parent: parent || null,
      },
    ]);
    setName("");
    setSlug("");
    setParent("");
    setDescription("");
  };
  const [categories, setCategories] = useState(initialCategories);
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [parent, setParent] = useState("");
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState({ key: "name", dir: "asc" });

  // Filtered and sorted categories
  const filtered = categories.filter(cat =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );
  const sorted = [...filtered].sort((a, b) => {
    const dir = sort.dir === "asc" ? 1 : -1;
    if (a[sort.key] < b[sort.key]) return -1 * dir;
    if (a[sort.key] > b[sort.key]) return 1 * dir;
    return 0;
  });
  return (
    <div className="min-h-screen bg-[#f6f7f7] flex flex-col">
      <Header />
      <div className="lg:flex max-w-7xl lg:ms-46 py-3 gap-6 px-4 mt-10 justify-between">
        <Sidebar />
        <div className="flex flex-col w-full ga p-2">
          <h1 className="!text-3xl !font-normal mb-20 text-gray-900">Categories</h1>
          <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr]  gap-8 items-start">
            {/* Add Category Form */}
            <form
              className="p-2 flex flex-col gap-3"
              onSubmit={handleAdd}
            >
              <h2 className="!text-lg !font-medium !mt-10 text-gray-900">Add Category</h2>
              <div>
                <label className="block text-sm !font-normal mb-1 text-gray-900" htmlFor="cat-name">
                  Name
                </label>
                <input
                  id="cat-name"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  autoComplete="off"
                />
                <div className="text-xs text-gray-600 mt-1">
                  The name is how it appears on your site.
                </div>
              </div>
              <div>
                <label className="block text-sm !font-normal mb-1 text-gray-900" htmlFor="cat-slug">
                  Slug
                </label>
                <input
                  id="cat-slug"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={slug}
                  onChange={e => setSlug(e.target.value)}
                  autoComplete="off"
                />
                <div className="text-xs text-gray-600 mt-1">
                  The “slug” is the URL-friendly version of the name. It is usually all lowercase and contains only letters, numbers, and hyphens.
                </div>
              </div>
              <div className="flex flex-col">
                <label className="block  text-sm !font-normal mb-1 text-gray-900" htmlFor="cat-parent">
                  Parent Category
                </label>
                <select
                  id="cat-parent"
                  className="w-30 border border-gray-300 rounded px-3 py-2 text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={parent}
                  onChange={e => setPrent(e.target.value)}
                >
                  <option value="">None</option>
                  {categories.filter(c => !c.parent).map(c => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <div className="text-xs text-gray-600 mt-1">
                  Categories, unlike tags, can have a hierarchy. You might have a Jazz category, and under that have children categories for Bebop and Big Band. Totally optional.
                </div>
              </div>
              <div>
                <label className="block text-sm !font-normal mb-1 text-gray-900" htmlFor="cat-desc">
                  Description
                </label>
                <textarea
                  id="cat-desc"
                  className="w-full border border-gray-300 rounded px-3 py-2 text-base bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
                <div className="text-xs text-gray-600 mt-1">
                  The description is not prominent by default; however, some themes may show it.
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#2271b1] text-white px-3 py-2  text-sm !font-normal hover:bg-[#135e96] transition-colors w-fit mt-2"
              >
                Add Category
              </button>
            </form>
            {/* Categories Table and Info */}
            <div className="w-full">
              {/* Bulk actions and table */}
              {/* Search and Bulk actions */}
               <div className="lg:flex items-center relative lg:w-105 lg:-right-90 mb-3 gap-2">
                  <input
                    type="text"
                    placeholder=""
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="border border-gray-400 rounded px-4 py-1 !text-base bg-white focus:outline-none focus:ring-2 w-40 focus:ring-blue-500 lg:w-56"
                    style={{ boxShadow: 'none' }}
                  />
                  <button
                    type="button"
                    className="border border-blue-600 text-[#2271b1] bg-white px-2 py-1 rounded !text-sm font-normal hover:bg-blue-50 transition-colors"
                    style={{ boxShadow: 'none' }}
                  >
                    Search Categories
                  </button>
                </div>
              <div className="flex flex-wrap items-center justify-between mb-2 gap-2">
               
                <div className="flex items-center gap-2">
                  <select className="border border-gray-300 rounded px-2 py-1 text-sm bg-white">
                    <option>Bulk actions</option>
                  </select>
                  <button className="border border-blue-600 text-blue-700 bg-white px-3 py-1 rounded text-sm hover:bg-blue-50 transition-colors">
                    Apply
                  </button>
                  <p className="items-flex justify-center flex relative lg:-right-117">1 item </p>
                </div>
              </div>
              <div className="overflow-x-auto border border-gray-200  bg-white">
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
                        <td colSpan={5} className="text-center text-gray-500 py-8">
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
              {/* Footer bulk actions and info */}
              <div className="flex items-center gap-2 mt-2">
                <select className="border border-gray-300 rounded px-2 py-1 text-sm bg-white">
                  <option>Bulk actions</option>
                </select>
                <button className="border border-blue-600 text-blue-700 bg-white px-3 py-1 rounded text-sm hover:bg-blue-50 transition-colors">
                  Apply
                </button>
                <p className="items-flex justify-center flex relative lg-right-117">1 item </p>

              </div>
              <div className="text-xs text-gray-700 mt-4">
                Deleting a category does not delete the posts in that category. Instead, posts that were only assigned to the deleted category are set to the default category{' '}
                <span className="font-semibold">Uncategorized</span>. The default category cannot be deleted.<br />
                Categories can be selectively converted to tags using the{' '}
                <a href="#" className="text-[#2271b1] underline hover:text-[#135e96]">category to tag converter</a>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}