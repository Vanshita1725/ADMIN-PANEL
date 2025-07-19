import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const ErasePersonalData = () => {
    const [email, setEmail] = useState('');
    const [sendEmail, setSendEmail] = useState(true);
    const [categories] = useState([]); // You can replace with real data
    const [sort, setSort] = useState({ key: 'name', dir: 'asc' });
    const [selected, setSelected] = useState([]);

    // Sorting logic (dummy, as no real data)
    const sorted = categories && Array.isArray(categories) ? categories.slice().sort((a, b) => {
        if (!a[sort.key] || !b[sort.key]) return 0;
        if (a[sort.key] < b[sort.key]) return sort.dir === 'asc' ? -1 : 1;
        if (a[sort.key] > b[sort.key]) return sort.dir === 'asc' ? 1 : -1;
        return 0;
    }) : [];

    const handleSort = (key) => {
        setSort((prev) => ({
            key,
            dir: prev.key === key ? (prev.dir === 'asc' ? 'desc' : 'asc') : 'asc',
        }));
    };

    const handleSelectAll = () => {
        if (selected.length === sorted.length && sorted.length > 0) {
            setSelected([]);
        } else {
            setSelected(sorted.map((cat) => cat.id));
        }
    };

    const handleSelectRow = (id) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
        );
    };

    return (
        <div className="min-h-screen bg-[#f6f7f7] flex flex-col">
            <Header />
            <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto py-8 px-2 sm:px-4 gap-6">

                <Sidebar />

                <main className="flex-1 min-w-0 w-full">
                    <div className=" mt-10 w-full lg:ms-15 px-2 sm:px-4">
                        <h1 className="!text-2xl !font-normal mb-0 mt-0 tracking-tight">Erase Personal Data</h1>
                        <div className="text-gray-600 text-base mb-8 mt-2">This tool helps site owners comply with local laws and regulations by deleting or anonymizing known data for a given user.</div>
                        <div className="mb-0 mt-0">
                            <h2 className="!text-xl !font-normal mb-6">Add Data Erasure Request</h2>
                            <form className="max-w-2xl mb-0">
                                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                                    <label htmlFor="email" className="font-medium text-base md:w-56 w-full mb-2 md:mb-0">Username or email address</label>
                                    <input
                                        id="email"
                                        type="text"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        className="flex-1 border border-gray-300  px-3 py-1 text-base focus:outline-none  bg-white w-full md:w-auto"
                                    />
                                </div>
                                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-6">
                                    <label htmlFor="sendEmail" className="font-medium text-base md:w-56 w-full mb-2 md:mb-0">Confirmation email</label>
                                    <div className="flex items-center gap-2">
                                        <input
                                            id="sendEmail"
                                            type="checkbox"
                                            checked={sendEmail}
                                            onChange={e => setSendEmail(e.target.checked)}
                                            className="accent-[#2271b1] w-4 h-4"
                                        />
                                        <label htmlFor="sendEmail" className="text-base text-gray-800 cursor-pointer select-none">Send personal data erasure confirmation email.</label>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-white text-[#2271b1] border-1 border-[#2271b1]  !font-medium !text-sm px-6 py-2 mt-2 hover:bg-blue-50 transition-colors cursor-pointer"
                                    disabled
                                >
                                    Send Request
                                </button>
                            </form>
                        </div>
                        <hr className="my-8 border-t border-gray-200" />
                        <div className="mt-0">
                            <div className="font-medium text-base mb-2">All (0)</div>
                            <div className="overflow-x-auto bg-white border border-gray-200 rounded">
                                <table className="min-w-full border-1 !border-gray-400 text-sm whitespace-nowrap">
                                    <thead className="bg-white border-1  !border-gray-400">
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
                                    <tbody className="border-1  !border-gray-400">
                                        {sorted.length === 0 ? (
                                            <tr>
                                                <td colSpan={5} className="text-center bg-gray-200 text-gray-500 py-2">
                                                    No categories found.
                                                </td>
                                            </tr>
                                        ) :
                                            sorted.map((cat) => (
                                                <tr key={cat.id} className="bg-[#f6f7f7] border border-gray-300">
                                                    <td className="px-3 py-2 text-center">
                                                        <input
                                                            type="checkbox"
                                                            checked={selected.includes(cat.id)}
                                                            onChange={() => handleSelectRow(cat.id)}
                                                        />
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
                                    <thead className="bg-white border-1  !border-gray-400">
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
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ErasePersonalData;