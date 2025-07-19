import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const importers = [
  {
    name: "Blogger",
    desc: "Import posts, comments, and users from a Blogger blog.",
  },
  {
    name: "Categories and Tags Converter",
    desc: "Convert existing categories to tags or tags to categories, selectively.",
  },
  {
    name: "LiveJournal",
    desc: "Import posts from LiveJournal using their API.",
  },
  {
    name: "Movable Type and TypePad",
    desc: "Import posts and comments from a Movable Type or TypePad blog.",
  },
  {
    name: "RSS",
    desc: "Import posts from an RSS feed.",
  },
  {
    name: "Tumblr",
    desc: "Import posts & media from Tumblr using their API.",
  },
  {
    name: "WordPress",
    desc: "Import posts, pages, comments, custom fields, categories, and tags from a WordPress export file.",
  },
];

export default function Imports() {
  return (
    <div className="min-h-screen bg-[#f6f7f7] flex flex-col">
      <Header />
      <div className="flex flex-col md:flex-row flex-1">
        <Sidebar />
        <main className="flex flex-col w-full max-w-7xl mt-6 lg:ms-46 py-8 px-4 gap-2">
          <h1 className="!text-2xl !font-normal text-gray-900 mb-2">Import</h1>
          <div className="text-gray-800 mb-2 text-sm lg:max-w-5xl">
            If you have posts or comments in another system, WordPress can import those into this site. To get started, choose a system to import from below:
          </div>
          <div className="max-w-3xl">
            <div className="border !border-grey-400  overflow-hidden bg-white">
            {importers.map((imp, i) => (
              <div
                key={imp.name}
                className={
                  `flex flex-col px-3 py-2 ` +
                  (i % 2 === 1 ? 'bg-white' : 'bg-[#f6f7f7]')
                }
              >
                <div className="flex flex-col md:flex-row md:items-center w-full gap-1 md:gap-0">
                  <div className="font-semibold !text-sm text-gray-500 lg:w-1/2 md:w-1/4 w-full mb-1 md:mb-0">{imp.name}</div>
                  <div className="text-gray-700 !text-xs lg:w-full md:w-1/2 w-full mb-1 md:mb-0 md:px-4">{imp.desc}</div>
                </div>
                <div className="flex gap-2 md:justify-start w-full mt-2">
                  <a href="#" className="text-[#2271b1] underline hover:text-[#135e96] !text-xs">Install Now</a>
                  <span className="text-gray-400">|</span>
                  <a href="#" className="text-[#2271b1] underline hover:text-[#135e96] !text-xs">Details</a>
                </div>
              </div>
              
            ))}
            
            </div>
            <div className="text-xs text-gray-700 mt-4">
              If the importer you need is not listed,{' '}
              <a href="#" className="text-[#2271b1] underline hover:text-[#135e96]">search the plugin directory</a> to see if an importer is available.
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}