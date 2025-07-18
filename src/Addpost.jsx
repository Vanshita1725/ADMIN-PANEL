import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Link } from "react-router";

const postFormats = [
  { label: "Standard", icon: <i className="fa-solid fa-thumbtack"></i>},
  { label: "Aside", icon: <i className="fa-solid fa-file"></i> },
  { label: "Audio", icon: <i className="fa-solid fa-music"></i> },
  { label: "Chat", icon: <i className="fa-solid fa-comments"></i> },
  { label: "Gallery", icon: <i className="fa-solid fa-photo-film"></i> },
  { label: "Image", icon: <i className="fa-solid fa-image"></i> },
  { label: "Link", icon: <i className="fa-solid fa-link"></i> },
  { label: "Quote", icon: <i className="fa-solid fa-quote-left"></i> },
  { label: "Status", icon: <i className="fa-solid fa-ellipsis"></i> },
  { label: "Video", icon: <i className="fa-solid fa-camera-retro"></i> },
];

export default function Addpost() {
  const [showFeaturedModal, setShowFeaturedModal] = useState(false);
  const [featuredTab, setFeaturedTab] = useState('upload');
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [format, setFormat] = useState("Standard");
  const [tab, setTab] = useState("Visual");
  const [categoryChecked, setCategoryChecked] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [showMostUsedTags, setShowMostUsedTags] = useState(false);

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex max-w-7xl lg:ms-46 py-8 gap-6 px-4 mt-10 justify-between">
        <Sidebar />
        {/* Main Content */}
        <div className="flex flex-col w-full gap-2 ">
          <h1 className="!text-2xl font-Normal mb-0 ">Add Post</h1>
          <input           className=" border rounded px-2 py-1 text-xl mb-4 bg-white focus:outline-none focus:ring"
            placeholder="Add title"
            value={title}
            onChange={e => setTitle(e.target.value)}></input>
          
          {/* Editor area */}
          <div className="bg-white  mb-4">
            {/* Toolbar row */}
            <div className="flex bg-gray-100 justify-between  items-center   border-gray-200">
              <button className="flex justify-between mb-1  items-center gap-2 border   border-blue-600 rounded mb- px-3 py-1.5 bg-white !text-sm font-Normal text-blue-800 hover:bg-blue-50">
                              <i className="fa-solid fa-photo-film"></i>

                Add Media
              </button>
              
              <div className="flex justify-between -mb-1 bg-gray-100 gap-3 text-sm ">
                <button
                  className={`px-3 py-2 border-gray-100 border  !bg-gray-50 ${tab === "Visual" ? "bg-gray-100 font-semibold text-blue-700" : "text-gray-700"}`}
                  onClick={() => setTab("Visual")}
                >
                  Visual
                </button>
                <button
                  className={`px-4 py-1 border !border-gray-200 bg-gray-100 ${tab === "Code" ? "bg-gray-100 font-semibold text-blue-700" : "text-gray-700"}`}
                  onClick={() => setTab("Code")}
                >
                  Code
                </button>
              </div>
            </div>
            {/* Editor toolbar */}
            <div className="flex items-center px-4 py-2 boder-gray-50  gap-1 border bg-gray-50">
              <select className="border rounded px-2 py-1 text-sm mr-2">
                <option>Paragraph</option>
                <option>Heading 1</option>
                <option>Heading 2</option>
              </select>
              {/* Bold */}
              <button className="px-2 py-1 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded" title="Bold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M6 4h8a4 4 0 010 8H6zm0 8h9a4 4 0 010 8H6z" /></svg>
              </button>
              {/* Italic */}
              <button className="px-2 py-1 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded" title="Italic">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M19 4h-9M10 20h9M15 4l-6 16" /></svg>
              </button>
              {/* Bulleted List */}
              <button className="px-2 py-1 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded" title="Bulleted list">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="6" cy="7" r="1.5"/><circle cx="6" cy="12" r="1.5"/><circle cx="6" cy="17" r="1.5"/><line x1="10" y1="7" x2="20" y2="7" /><line x1="10" y1="12" x2="20" y2="12" /><line x1="10" y1="17" x2="20" y2="17" /></svg>
              </button>
              {/* Numbered List */}
              <button className="px-2 py-1 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded" title="Numbered list">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><text x="4" y="9" fontSize="6" fill="currentColor">1.</text><line x1="10" y1="7" x2="20" y2="7" /><text x="4" y="14" fontSize="6" fill="currentColor">2.</text><line x1="10" y1="12" x2="20" y2="12" /><text x="4" y="19" fontSize="6" fill="currentColor">3.</text><line x1="10" y1="17" x2="20" y2="17" /></svg>
              </button>
              {/* Blockquote */}
              <button className="px-2 py-1 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded" title="Blockquote">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M7 17a4 4 0 01-4-4V7a4 4 0 014-4h3v7a4 4 0 01-4 4zm10 0a4 4 0 01-4-4V7a4 4 0 014-4h3v7a4 4 0 01-4 4z" /></svg>
              </button>
              {/* Align Left */}
              <button className="px-2 py-1 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded" title="Align left">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="10" x2="14" y2="10" /><line x1="4" y1="14" x2="20" y2="14" /><line x1="4" y1="18" x2="14" y2="18" /></svg>
              </button>
              {/* Align Center */}
              <button className="px-2 py-1 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded" title="Align center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><line x1="4" y1="6" x2="20" y2="6" /><line x1="8" y1="10" x2="16" y2="10" /><line x1="4" y1="14" x2="20" y2="14" /><line x1="8" y1="18" x2="16" y2="18" /></svg>
              </button>
              {/* Align Right */}
              <button className="px-2 py-1 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded" title="Align right">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><line x1="4" y1="6" x2="20" y2="6" /><line x1="10" y1="10" x2="20" y2="10" /><line x1="4" y1="14" x2="20" y2="14" /><line x1="10" y1="18" x2="20" y2="18" /></svg>
              </button>
              {/* Insert/Edit Link */}
              <button className="px-2 py-1 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded" title="Insert/edit link">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M10 13a5 5 0 007.07 0l1.42-1.42a5 5 0 00-7.07-7.07l-1.42 1.42" /><path d="M14 11a5 5 0 00-7.07 0l-1.42 1.42a5 5 0 007.07 7.07l1.42-1.42" /></svg>
              </button>
              {/* Toolbar Toggle */}
              <button className="px-2 py-1 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded" title="Toolbar toggle">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="4" y="6" width="16" height="2" /><rect x="4" y="11" width="16" height="2" /><rect x="4" y="16" width="16" height="2" /></svg>
              </button>
            </div>
            {/* Editor area */}
            <div className="px-4  min-h-[300px]">
              {tab === "Visual" ? (
                <textarea
                  className="w-full min-h-[200px] border-0 outline-none  text-base bg-white"
                  placeholder=""
                  value={content}
                  onChange={e => setContent(e.target.value)}
                />
              ) : (
                <pre className="w-full min-h-[200px] bg-gray-50 border-0 outline-none text-base p-2">{content}</pre>
              )}
            </div>
            {/* Word count */}
            <div className="px-4 py-2 border border-gray-200 text-xs text-gray-600 bg-gray-50">Word count: {content.trim() ? content.trim().split(/\s+/).length : 0}</div>
          </div>
        </div> 
        {/* Sidebar widgets (right column) */}
        <div className="w-[340px] pt-10 flex flex-col gap-4">
          {/* Publish box */}
          <div className="bg-white border rounded shadow-sm">
            <div className="flex items-center justify-between px-4 py-2 border border-gray-200 bg-gray-50">
              <span className="font-semibold">Publish</span>
            </div>
            <div className=" flex flex-col gap-2">
                <div  className="px-4 py-3">
              <div className="flex gap-2">
                <button className="border !border-blue-600 text-blue-700 rounded px-3 py-1 !text-sm bg-gray-100  hover:bg-gray-50">Save Draft</button>
                <button className="border !border-blue-500 text-blue-700 bg-gray-100 px-3 py-1 rounded text-sm hover:bg-blue-50">Preview</button>
              </div>
              <div className="text-sm text-gray-700 mt-2 space-y-2">
                <div className="flex items-center gap-2">
<i className="fa-solid text-gray-300 fa-map-pin"></i>                  <span className="font-normal text-sm">Status:</span> <span className="font-semibold text-gray-900">Draft</span> <button className="text-blue-700 hover:underline  border-b !border-blue-600  py-0.5 text-xs ml-1">Edit</button>
                </div>
                <div className="flex items-center gap-2">
<i className="fa-solid text-gray-300 fa-eye"></i>                  <span className="font-normal text-sm">Visibility:</span> <span className="font-semibold text-gray-900">Public</span> <button className="text-blue-700 hover:underline  border-b !border-blue-600  py-0.5 text-xs ml-1">Edit</button>
                </div>
                <div className="flex items-center gap-2">
<i className="fa-solid text-gray-300 fa-calendar-days"></i>                  <span className="font-normal text-sm">Publish</span> <span className="font-semibold text-gray-900">immediately</span> <button className="text-blue-700 hover:underline  border-b !border-blue-600  py-0.5 text-xs ml-1">Edit</button>
                </div>
              </div>
              </div>
              <div className="flex items-center border p-2  justify-between  border-gray-200 bg-gray-50">
                <button className="text-red-400 underline font-semibold bg-white !text-sm border-none px-0 py-0">Move to Trash</button>
                <button className="bg-blue-500 text-white !text-xs rounded px-3 py-2 font-normal hover:bg-blue-800">Publish</button>
              </div>
            </div>
          </div>
          {/* Format box */}
          <div className="bg-white border shadow-sm">
            <div className="flex items-center justify-between px-2 py-1 border">
              <span className="font-semibold">Format</span>
              <button className="text-gray-500 bg-white border border-gray-300 rounded px-2 py-1 hover:bg-gray-50">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>
            <div className="px-4 py-3 flex flex-col gap-1">
              {postFormats.map(f => (
                <label
                  key={f.label}
                  className={`!flex items-center cursor-pointer text-sm px-1 py-1 rounded gap-2 ${format === f.label ? "bg-white font-semibold" : "bg-white"}`}
                  style={{ opacity: 1 }}
                >
                  <input
                    type="radio"
                    name="format"
                    className="accent-blue-600 mr-2"
                    checked={format === f.label}
                    onChange={() => setFormat(f.label)}
                    style={{ verticalAlign: 'middle' }}
                  />
                  <span className="flex items-center gap-2">
                    <i className={`${f.icon.props.className} ${format === f.label ? 'text-blue-700' : 'text-gray-400'}`}></i>
                    <span className={format === f.label ? "text-blue-700" : "text-gray-400"}>{f.label}</span>
                  </span>
                </label>
              ))}
            </div>
          </div>
          {/* Categories box */}
          <div className="bg-white border  shadow-sm">
            <div className="flex items-center justify-between px-2 py-2 border">
              <span className="font-semibold">Categories</span>
              <button className="text-gray-500 bg-white hover:text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>
            <div className="px-2 flex gap-4 flex-col py-3">
              <div className="bg-white border-b-1  border-l-1  border-gray-300 rounded p- pt-0 pe-0">
                <div className="flex text-sm  ">
                  <button className="px-2 py-1 font-semibold border-r-1 border-t-1 border-gray-300  text-blue-700 bg-white rounded-tl rounded-tr focus:outline-none" >All Categories</button>
                  <button className="ps-2 pr-30 py-1 !border-b-1 !border-gray-200 text-blue-700 bg-white ml-2 focus:outline-none" style={{border: 'none', borderBottom: 'none'}}>Most Used</button>
                </div>
                <div className="flex border-r-1 py-2 ps-2 border-gray-300 items-center gap-2 ">
                  <input
                    type="checkbox"
                    checked={categoryChecked}
                    onChange={() => setCategoryChecked(!categoryChecked)}
                    className="accent-blue-600 border-gray-400 border rounded"
                    id="cat-uncat"
                  />
                  <label htmlFor="cat-uncat" className="text-sm">Uncategorized</label>
                </div>
              </div>
              <Link className="text-blue-700 hover:underline  text-sm  bg-white  rounded px-2  font-semibold hover:bg-blue-50 ">+ Add Category</Link>
            </div>
          </div>
          {/* Tags box */}
          <div className="bg-white border  shadow-sm">
            <div className="flex items-center justify-between px-4 py-2 border">
              <span className="font-semibold">Tags</span>
              <button className="text-gray-500 bg-white hover:text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>
            <div className="px-4 py-3">
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  className="border rounded px-2 py-1 text-sm flex-1"
                  value={tagInput}
                  onChange={e => setTagInput(e.target.value)}
                  placeholder=""
                />
                <button
                  className="border border-gray-400 rounded px-3 py-1 text-sm bg-white hover:bg-gray-50"
                  onClick={handleAddTag}
                  type="button"
                >Add</button>
              </div>
              <div className="text-sm text-gray-600 mb-1">Separate tags with commas</div>
              <button
                className="text-blue-700 border-blue-700 rounded px-2 py-1 text-xs font-normal bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
                style={{textDecoration: 'underline'}}
                type="button"
                onClick={() => setShowMostUsedTags(v => !v)}
              >
                Choose from the most used tags
              </button>
              {showMostUsedTags && (
                <div className="border border-gray-300  px-2 py-2 mt-2 text-sm bg-white text-gray-700">No tags found.</div>
              )}
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mb-2">
                  {tags.map(tag => (
                    <span key={tag} className="bg-gray-200 text-gray-700 rounded px-2 py-0.5 text-xs">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* Featured image box */}
          <div className="bg-white  shadow-sm">
            <div className="flex items-center justify-between px-4 py-2 border">
              <span className="font-semibold">Featured image</span>
              <button className="text-gray-500 bg-white hover:text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>
            <div className="px-4 py-3">
              <button
                className="text-blue-700 hover:underline text-sm bg-white underline  rounded px-2 py-2 font-semibold hover:bg-blue-50"
                type="button"
                onClick={() => setShowFeaturedModal(true)}
              >
                Set featured image
              </button>
      {/* Featured Image Modal */}
      {showFeaturedModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white rounded shadow-lg w-[110vw] max-w-5xl h-[80vh] flex flex-col relative">
            <div className="flex items-center justify-between border-b px-8 py-4">
              <span className="text-2xl font-semibold">Featured image</span>
              <button className="text-gray-500 text-2xl hover:text-gray-700" onClick={() => setShowFeaturedModal(false)}>&times;</button>
            </div>
            <div className="flex border-b px-8 pt-4 gap-2">
              <button
                className={`px-4 py-2 border-b-2 ${featuredTab === 'upload' ? 'border-blue-600 text-blue-700 font-semibold' : 'border-transparent text-gray-700'} bg-white focus:outline-none`}
                onClick={() => setFeaturedTab('upload')}
              >
                Upload files
              </button>
              <button
                className={`px-4 py-2 border-b-2 ${featuredTab === 'library' ? 'border-blue-600 text-blue-700 font-semibold' : 'border-transparent text-gray-700'} bg-white focus:outline-none`}
                onClick={() => setFeaturedTab('library')}
              >
                Media Library
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center px-8">
              {featuredTab === 'upload' ? (
                <div className="flex flex-col items-center justify-center w-full h-full">
                  <div className="text-xl font-normal mb-2 mt-8">Drop files to upload</div>
                  <div className="mb-2 text-gray-500">or</div>
                  <label className="inline-block">
                    <input type="file" className="hidden" />
                    <span className="inline-block border border-blue-500 text-blue-700 px-6 py-2 rounded cursor-pointer hover:bg-blue-50 text-lg">Select Files</span>
                  </label>
                  <div className="mt-4 text-gray-500 text-sm">Maximum upload file size: 40 MB.</div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center w-full h-full">
                  <div className="text-gray-500 text-lg">Media Library is empty.</div>
                </div>
              )}
            </div>
            <div className="border-t px-8 py-4 flex justify-end">
              <button className="bg-gray-200 text-gray-500 px-6 py-2 rounded cursor-not-allowed" disabled>Set featured image</button>
            </div>
          </div>
        </div>
      )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}