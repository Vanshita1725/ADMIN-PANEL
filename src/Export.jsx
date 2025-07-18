import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const options = [
  {
    label: "All content",
    value: "all",
    desc: "This will contain all of your posts, pages, comments, custom fields, terms, navigation menus, and custom posts.",
  },
  { label: "Posts", value: "posts" },
  { label: "Pages", value: "pages" },
  { label: "Media", value: "media" },
];

export default function Export() {
  const [selected, setSelected] = useState("all");

  return (
    <div className="min-h-screen bg-[#f6f7f7] flex flex-col">
      <Header />
      <div className="flex flex-1 w-full mt-7 max-w-7xl lg:ms-46 py-8 px-4 gap-6">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <div className="max-w-2xl">
            <h1 className="!text-2xl !font-normal text-gray-900 mb-4">Export</h1>
            <div className="text-gray-500 mb-3 !text-xs">
              When you click the button below WordPress will create an XML file for you to save to your computer.
            </div>
            <div className="text-gray-500 mb-3 !text-xs">
              This format, which is called WordPress eXtended RSS or WXR, will contain your posts, pages, comments, custom fields, categories, and tags.
            </div>
            <div className="text-gray-500 mb-6 !text-xs">
              Once you’ve saved the download file, you can use the Import function in another WordPress installation to import the content from this site.
            </div>
            <div className="mb-6">
              <div className="font-semibold text-gray-900 mb-3 text-lg">Choose what to export</div>
              <div className="flex flex-col gap-3">
                {options.map(opt => (
                  <label key={opt.value} className="flex items-start gap-2 cursor-pointer select-none">
                    <input
                      type="radio"
                      name="export"
                      value={opt.value}
                      checked={selected === opt.value}
                      onChange={() => setSelected(opt.value)}
                      className="mt-1 accent-[#2271b1]"
                    />
                    <span className="text-gray-900 font-medium text-base">{opt.label}</span>
                    {opt.value === "all" && (
                      <span className="block text-gray-700 font-normal  mt-1 text-xs">{opt.desc}</span>
                    )}
                  </label>
                ))}
              </div>
            </div>
            <button
              className="bg-[#2271b1] text-white px-3 py-1 rounded !text-sm !font-normal hover:bg-[#135e96] transition-colors text-base"
              type="button"
            >
              Download Export File
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}