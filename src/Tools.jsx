import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Tools() {
  return (
    <div className="min-h-screen bg-[#f6f7f7] flex flex-col">
      <Header />
      <div className="flex flex-1 w-full max-w-7xl mt-10 lg:ms-46 py-8 px-4 gap-6">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <h1 className="!text-2xl !font-normal text-gray-900 mb-8">Tools</h1>
          <div className="max-w-2xl">
            <div className="bg-white border border-gray-300 rounded shadow-sm p-6">
              <h2 className="!text-xl !font-normal text-gray-900 mb-2">Categories and Tags Converter</h2>
              <p className="text-gray-700 text-sm">
                If you want to convert your categories to tags (or vice versa), use the{' '}
                <a
                  href="#"
                  className="text-[#2271b1] underline hover:text-[#135e96]"
                >
                  Categories and Tags Converter
                </a>{' '}
                available from the Import screen.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}