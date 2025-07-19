import React, { useRef, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function MediaNew() {
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef();

  // Handle file selection
  const handleFiles = (fileList) => {
    const arr = Array.from(fileList).map((file) => ({
      file,
      progress: Math.floor(Math.random() * 100), // Mock progress
    }));
    setFiles((prev) => [...prev, ...arr]);
  };

  // Drag and drop handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  // File input change
  const handleInputChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  // Remove file
  const removeFile = (idx) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1  overflow-y-auto p-0">
          <div className="max-w-8xl lg:ms-46 mt-10 py-8 px-4">
            <h1 className="!text-2xl   !font-normal mb-6">Upload New Media</h1>
            {/* Help/overview */}
            
            {/* Upload area */}
            <form
              className=" border-gray-300 rounded border-2  border-dashed p-1 flex flex-col items-center mb-6"
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onSubmit={e => e.preventDefault()}
            >
              <div
                className={`w-full flex flex-col items-center justify-center bg-gray-100 rounded-lg transition-colors duration-200 ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-gray-50"} py-16 mb-4`}
                style={{ minHeight: 180 }}
                onClick={() => fileInputRef.current.click()}
              >
                
                <div className="!text-xl text-gray-700 !font-Normal mb-1">Drop files to upload</div>
                <div className="text-gray-500 text-sm mb-4">or</div>
                <button
                  type="button"
                  className="border !border-blue-500 !text-sm text-blue-500 bg-white px-2 py-2 rounded !font-normal hover:bg-blue-50"
                  onClick={e => { e.stopPropagation(); fileInputRef.current.click(); }}
                >
                  Select Files
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleInputChange}
                />
              </div>
             
            </form>

            <div>
              <p className="!text-xs ">You are using the multi-file uploader. Problems? Try the <Link to="/Browsermediafile" > browser uploader </Link> instead.</p>
               <p className="!text-xs ">Maximum upload file size: 40 MB.</p>
            </div>
            {/* File list (mock upload progress) */}
            {files.length > 0 && (
              <div className="bg-white border rounded p-6 mb-6">
                <h3 className="font-semibold mb-4">Selected Files</h3>
                <ul className="space-y-3">
                  {files.map((f, i) => (
                    <li key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-gray-800">{f.file.name}</span>
                        <span className="text-xs text-gray-500">{Math.round(f.file.size / 1024)} KB</span>
                        <div className="w-32 bg-gray-200 rounded h-2 ml-4">
                          <div className="bg-blue-400 h-2 rounded" style={{ width: `${f.progress}%` }}></div>
                        </div>
                        <span className="text-xs text-gray-500 ml-2">{f.progress}%</span>
                      </div>
                      <button className="text-red-500 hover:underline text-xs ml-4" onClick={() => removeFile(i)}>Remove</button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}