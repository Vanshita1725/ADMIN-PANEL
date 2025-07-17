import React, { useRef, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Link } from "react-router";

export default function Browsermediafile() {
  const [file, setFile] = useState(null);
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    setFile(e.target.files[0] || null);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    // Mock upload logic here
    alert("File uploaded (mock)");
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto p-0">
          <div className="max-w-6xl mt-6 mx-auto py-8 px-2">
            <h1 className="!text-2xl !font-normal mb-6">Upload New Media</h1>
            <form className="flex items-center  w-full mb-4" onSubmit={handleUpload}>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="file:cursor-pointer file:border-1 file:rounded file:bg-white file:px-3 file:py-1 file:text-sm file:font-normal"
              />
              <button
                type="submit"
                className="bg-blue-600 !text-xs text-white px-2 py-2 !rounded-md font-semibold hover:bg-blue-700"
                disabled={!file}
                style={{ minWidth: 90 }}
              >
                Upload
              </button>
            </form>
            <div className="mb-2 !text-xs !text-gray-800">
              You are using the browser’s built-in file uploader. The WordPress uploader includes multiple file selection and drag and drop capability.{' '}
              <Link to="/Medianew" className="text-blue-600 !text-xs  underline hover:text-blue-800">Switch to the multi-file uploader.</Link>
            </div>
            <div className="text-gray-700 !text-xs mb-2">Maximum upload file size: 40 MB.</div>
          </div>
        </main>
      </div>
    </div>
  );
}
