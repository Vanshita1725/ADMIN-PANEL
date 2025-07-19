import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

// Mock current user permissions and post types
const userPermissions = {
  canEditPosts: true,
  canCreatePosts: true,
};

const availablePostTypes = ['post', 'page', 'custom'];

const AddPage = () => {
  const [postType, setPostType] = useState('page');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [featuredImage, setFeaturedImage] = useState(null);
  const [featuredImagePreview, setFeaturedImagePreview] = useState(null);
  const [tab, setTab] = useState("Visual");
  const [showFeaturedModal, setShowFeaturedModal] = useState(false);
  const [featuredTab, setFeaturedTab] = useState('upload');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('post_type') || 'page';

    if (!availablePostTypes.includes(type)) {
      alert('Invalid post type.');
      window.location.href = '/404';
    } else {
      setPostType(type);
    }

    if (!userPermissions.canCreatePosts || !userPermissions.canEditPosts) {
      alert('You need a higher level of permission.');
      window.location.href = '/unauthorized';
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit to API or handle logic
    console.log('Post submitted', { postType, title, content });
  };

  const handleImageChange = (e) => {
    const file = e.target.files && e.target.files[0];
    setFeaturedImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = function (ev) {
        setFeaturedImagePreview(ev.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFeaturedImagePreview(null);
    }
  };

  // Toolbar buttons (mock, no formatting logic)
  const toolbarButtons = [
    { label: 'B', title: 'Bold' },
    { label: 'I', title: 'Italic' },
    { label: 'Link', title: 'Insert link' },
    { label: 'Quote', title: 'Blockquote' },
    { label: 'UL', title: 'Bulleted list' },
    { label: 'OL', title: 'Numbered list' },
    { label: 'Img', title: 'Insert image' },
  ];

  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen pt-16 px-2 sm:px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full">
          {/* Page Sidebar */}

          <Sidebar />

          {/* Main Content */}
          <div className="flex-1 lg:ml-46 max-w-full">
            <form onSubmit={handleSubmit} className="w-full">
              {/* Title Input */}
              <div className="flex flex-col  lg:ml gap-2 ">
                <h1 className="!text-2xl font-Normal mb-0 ">Add Page</h1>
                <input className="border rounded px-2 py-1 text-xl mb-4 bg-white focus:outline-none focus:ring w-full" placeholder="Add title" value={title} onChange={e => setTitle(e.target.value)} />
                {/* Editor area */}
                <div className="bg-white  mb-4">
                  {/* Toolbar row */}
                  <div className="flex flex-col sm:flex-row bg-gray-100 justify-between items-stretch sm:items-center border-gray-200">
                    <button className="flex items-center gap-2 border border-blue-600 rounded px-3 py-1.5 bg-white !text-sm font-Normal text-blue-800 hover:bg-blue-50 w-full sm:w-auto mb-2 sm:mb-0">
                      <i className="fa-solid fa-photo-film"></i>
                      Add Media
                    </button>
                    <div className="flex gap-3 text-sm w-full sm:w-auto">
                      <button className={`flex-1 sm:flex-none px-3 py-2 border-gray-100 border !bg-gray-50 ${tab === "Visual" ? "bg-gray-100 font-semibold text-blue-700" : "text-gray-700"}`} onClick={() => setTab("Visual")}>Visual</button>
                      <button className={`flex-1 sm:flex-none px-4 py-1 border !border-gray-200 bg-gray-100 ${tab === "Code" ? "bg-gray-100 font-semibold text-blue-700" : "text-gray-700"}`} onClick={() => setTab("Code")}>Code</button>
                    </div>
                  </div>
                  {/* Editor toolbar */}
                  <div className="flex flex-wrap items-center px-2 sm:px-4 py-2 gap-1 border bg-gray-50">
                    <select className="border rounded px-2 py-1 text-sm mr-2">
                      <option>Paragraph</option>
                      <option>Heading 1</option>
                      <option>Heading 2</option>
                    </select>
                    {/* ...toolbar buttons... */}
                    <button className="px-2 py-1 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded" title="Bold">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M6 4h8a4 4 0 010 8H6zm0 8h9a4 4 0 010 8H6z" /></svg>
                    </button>
                    <button className="px-2 py-1 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded" title="Italic">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M19 4h-9M10 20h9M15 4l-6 16" /></svg>
                    </button>
                    <button className="px-2 py-1 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded" title="Bulleted list">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="6" cy="7" r="1.5" /><circle cx="6" cy="12" r="1.5" /><circle cx="6" cy="17" r="1.5" /><line x1="10" y1="7" x2="20" y2="7" /><line x1="10" y1="12" x2="20" y2="12" /><line x1="10" y1="17" x2="20" y2="17" /></svg>
                    </button>
                    <button className="px-2 py-1 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded" title="Numbered list">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><text x="4" y="9" fontSize="6" fill="currentColor">1.</text><line x1="10" y1="7" x2="20" y2="7" /><text x="4" y="14" fontSize="6" fill="currentColor">2.</text><line x1="10" y1="12" x2="20" y2="12" /><text x="4" y="19" fontSize="6" fill="currentColor">3.</text><line x1="10" y1="17" x2="20" y2="17" /></svg>
                    </button>
                    <button className="px-2 py-1 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded" title="Blockquote">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M7 17a4 4 0 01-4-4V7a4 4 0 014-4h3v7a4 4 0 01-4 4zm10 0a4 4 0 01-4-4V7a4 4 0 014-4h3v7a4 4 0 01-4 4z" /></svg>
                    </button>
                    <button className="px-2 py-1 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded" title="Align left">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="10" x2="14" y2="10" /><line x1="4" y1="14" x2="20" y2="14" /><line x1="4" y1="18" x2="14" y2="18" /></svg>
                    </button>
                    <button className="px-2 py-1 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded" title="Align center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><line x1="4" y1="6" x2="20" y2="6" /><line x1="8" y1="10" x2="16" y2="10" /><line x1="4" y1="14" x2="20" y2="14" /><line x1="8" y1="18" x2="16" y2="18" /></svg>
                    </button>
                    <button className="px-2 py-1 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded" title="Align right">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><line x1="4" y1="6" x2="20" y2="6" /><line x1="10" y1="10" x2="20" y2="10" /><line x1="4" y1="14" x2="20" y2="14" /><line x1="10" y1="18" x2="20" y2="18" /></svg>
                    </button>
                    <button className="px-2 py-1 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded" title="Insert/edit link">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M10 13a5 5 0 007.07 0l1.42-1.42a5 5 0 00-7.07-7.07l-1.42 1.42" /><path d="M14 11a5 5 0 00-7.07 0l-1.42 1.42a5 5 0 007.07 7.07l1.42-1.42" /></svg>
                    </button>
                    <button className="px-2 py-1 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded" title="Toolbar toggle">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="4" y="6" width="16" height="2" /><rect x="4" y="11" width="16" height="2" /><rect x="4" y="16" width="16" height="2" /></svg>
                    </button>
                  </div>
                  {/* Editor area */}
                  <div className="px-2 sm:px-4 min-h-[200px]">
                    {tab === "Visual" ? (
                      <textarea className="w-full h-90 border-0 outline-none text-base bg-white" placeholder="" value={content} onChange={e => setContent(e.target.value)} />
                    ) : (
                      <pre className="w-full min-h-[200px] bg-gray-50 border-0 outline-none text-base p-2">{content}</pre>
                    )}
                  </div>
                  {/* Word count */}
                  <div className="px-2 sm:px-4 py-2 border border-gray-200 text-xs text-gray-600 bg-gray-50">Word count: {content.trim() ? content.trim().split(/\s+/).length : 0}</div>
                </div>
              </div>
            </form>
          </div>
          {/* Right Sidebar */}
          <aside className="md:w-80 w-full flex flex-col gap-6 mt-4 md:mt-0">
            {/* Publish Panel */}
            <div className="bg-white border rounded shadow-sm">
              <div className="flex items-center justify-between px-4 py-2 border border-gray-200 bg-gray-50">
                <span className="font-semibold">Publish</span>
              </div>
              <div className=" flex flex-col gap-2">
                <div className="px-4 py-3">
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
            {/* Page Attributes Panel */}
            <div className="bg-white border border-gray-200  shadow-sm ">
              <div className='border p-2 '>
                <h2 className="font-normal !text-sm !text-gray-700 mb-0">Page Attributes</h2>
              </div>
              <div className=" p-2 flex flex-col">
                <label className="block  !text-sm font-medium !text-gray-700 mb-1">Parent</label>
                <select className="w-45 border border-gray-300 px-2 py-1 !text-sm">
                  <option>(no parent)</option>
                  <option>Sample Parent Page</option>
                </select>
              </div>
              <div className=" flex flex-col p-2">
                <label className="block !text-sm font-medium !text-gray-700 mb-1">Template</label>
                <select className="w-45 border border-gray-300  px-2 py-1 !text-sm">
                  <option>Default template</option>
                  <option>Full Width</option>
                  <option>Landing Page</option>
                </select>
              </div>
              <div className=" flex flex-col p-2">
                <label className="block !text-sm font-medium !text-gray-700 mb-1">Order</label>
                <input type="number" className="w-20 border border-gray-300  px-2 py-1 !text-sm" defaultValue={0} min={0} />
              </div>
              <p className="!text-xs !text-gray-500 ps-2 mt-2">Need help? Use the Help tab above the screen title.</p>
            </div>
            {/* Featured Image Panel */}
            <div className="bg-white border border-gray-200 rounded shadow-sm  mb-4 ">
              <h1 className="font-medium !text-xl p-2 border !text-gray-700 mb-2">Featured image</h1>
             
            <button
                className="text-blue-700 hover:underline !text-xs bg-white underline  rounded px-2 py-2 font-normal hover:bg-blue-50"
                type="button"
                onClick={() => setShowFeaturedModal(true)}
              >
                Set featured image
              </button>
            </div>
            {showFeaturedModal && (
              <div className="fixed inset-0 z-50 flex items-center bg-black  justify-center">
                <div className="bg-white  shadow-lg w-[95vw] max-w-8xl h-[90vh]  flex flex-col relative">
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
          </aside>
        </div>
      </div>
    </>
  );
};

export default AddPage;