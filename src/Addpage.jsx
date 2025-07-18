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
      reader.onload = function(ev) {
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
          <div className="flex-1 w-full max-w-full">
            <form onSubmit={handleSubmit} className="w-full">
              {/* Heading */}
              <h1 className="!text-2xl  font-normal !text-gray-500 mb-2">Add Page</h1>
              {/* Title Input */}
              <input
                type="text"
                className="w-full !text-xl border border-gray-300 rounded px-3 md:px-4 py-2 mb-4 bg-white placeholder-gray-400"
                placeholder="Add title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                autoFocus
              />
              {/* Editor Panel */}
              <div className="border border-gray-300 bg-[#f6f7f7] w-full">
                {/* Top Bar: Add Media & Tabs */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-2 pt-2 gap-2">
                  <button type="button" className="flex items-center gap-2 bg-white border border-gray-300 !text-blue-700 px-3 py-1 rounded hover:bg-blue-50 !text-sm font-medium mb-2 sm:mb-0">
                    <i className="fa-solid !!text-sm  fa-photo-film"></i> Add Media
                  </button> 
                  <div className="flex gap-0.5 w-full sm:w-auto justify-end">
                    <button type="button" className="px-3 py-1 border border-gray-300 border-b-0 rounded-t bg-white !text-blue-700 font-medium">Visual</button>
                    <button type="button" className="px-3 py-1 border border-gray-300 border-b-0 rounded-t bg-[#f6f7f7] !text-gray-500 font-medium">Code</button>
                  </div>
                </div>
                {/* Toolbar Row */}
                <div className="flex flex-wrap items-center gap-2 px-2 pb-2 pt-1 border-b border-gray-300 bg-white w-full">
                  <select className="border border-gray-300 rounded px-2 py-1 !text-sm mr-2">
                    <option>Paragraph</option>
                    <option>Heading 1</option>
                    <option>Heading 2</option>
                    <option>Heading 3</option>
                  </select>
                  {/* Toolbar Buttons */}
                  <button type="button" title="Bold" className="px-2 py-1 !text-gray-700 hover:bg-gray-200 rounded font-bold"><i className="fa fa-bold"></i></button>
                  <button type="button" title="Italic" className="px-2 py-1 !text-gray-700 hover:bg-gray-200 rounded italic"><i className="fa fa-italic"></i></button>
                  <button type="button" title="Bulleted list" className="px-2 py-1 !text-gray-700 hover:bg-gray-200 rounded"><i className="fa fa-list-ul"></i></button>
                  <button type="button" title="Numbered list" className="px-2 py-1 !text-gray-700 hover:bg-gray-200 rounded"><i className="fa fa-list-ol"></i></button>
                  <button type="button" title="Blockquote" className="px-2 py-1 !text-gray-700 hover:bg-gray-200 rounded"><i className="fa fa-quote-right"></i></button>
                  <button type="button" title="Align left" className="px-2 py-1 !text-gray-700 hover:bg-gray-200 rounded"><i className="fa fa-align-left"></i></button>
                  <button type="button" title="Align center" className="px-2 py-1 !text-gray-700 hover:bg-gray-200 rounded"><i className="fa fa-align-center"></i></button>
                  <button type="button" title="Align right" className="px-2 py-1 !text-gray-700 hover:bg-gray-200 rounded"><i className="fa fa-align-right"></i></button>
                  <button type="button" title="Insert/edit link" className="px-2 py-1 !text-gray-700 hover:bg-gray-200 rounded"><i className="fa fa-link"></i></button>
                  <button type="button" title="Toolbar Toggle" className="px-2 py-1 !text-gray-700 hover:bg-gray-200 rounded"><i className="fa fa-table"></i></button>
                </div>
                {/* Content Area */}
                <textarea
                  className="w-full border-0 px-3 py-2 h-64 md:h-80 focus:ring-0 resize-vertical bg-white !text-base"
                  placeholder="Start writing your content..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  style={{ minHeight: '200px' }}
                />
                {/* Footer */}
                <div className="flex justify-start items-center px-2 py-2 border-t border-gray-300 bg-white !text-xs !text-gray-500">
                  <span>Word count: {content.trim() ? content.trim().split(/\s+/).length : 0}</span>
                </div>
              </div>
            </form>
          </div>
          {/* Right Sidebar */}
          <aside className="md:w-80 w-full flex flex-col gap-6 mt-4 md:mt-0">
            {/* Publish Panel */}
            <div className="bg-white border border-gray-200 rounded shadow-sm ">
              <h2 className="!font-normal !text-xl border !border-gray-300 mb-0 !text-gray-700 p-1">Publish</h2>
            <div className='border border-gray-300 p-4 '>           
                 <div className="flex flex-col gap-2 !text-sm !text-gray-600 mb-4">
                <div>Status: <span className="font-medium">Draft</span></div>
                <div>Visibility: <span className="font-medium">Public</span></div>
                <div>Publish: <span className="font-medium">Immediately</span></div>
              </div>
              <button
                type="submit"
                form=""
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 !text-white font-semibold py-2 rounded"
              >
                Publish
              </button>
              </div>

            </div>
            {/* Page Attributes Panel */}
            <div className="bg-white border border-gray-200 rounded shadow-sm p-4">
              <h2 className="font-semibold !text-gray-700 mb-2">Page Attributes</h2>
              <div className="mb-4">
                <label className="block !text-sm font-medium !text-gray-700 mb-1">Parent</label>
                <select className="w-full border border-gray-300 rounded px-2 py-1 !text-sm">
                  <option>(no parent)</option>
                  <option>Sample Parent Page</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block !text-sm font-medium !text-gray-700 mb-1">Template</label>
                <select className="w-full border border-gray-300 rounded px-2 py-1 !text-sm">
                  <option>Default template</option>
                  <option>Full Width</option>
                  <option>Landing Page</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="block !text-sm font-medium !text-gray-700 mb-1">Order</label>
                <input type="number" className="w-20 border border-gray-300 rounded px-2 py-1 !text-sm" defaultValue={0} min={0} />
              </div>
              <p className="!text-xs !text-gray-500 mt-2">Need help? Use the Help tab above the screen title.</p>
            </div>
            {/* Featured Image Panel */}
            <div className="bg-white border border-gray-200 rounded shadow-sm p-4">
              <h2 className="font-semibold !text-gray-700 mb-2">Featured image</h2>
              <div className="flex flex-col items-center justify-center h-32 border border-dashed border-gray-300 rounded bg-gray-50 !text-gray-400 !text-sm">
                {featuredImagePreview ? (
                  <img src={featuredImagePreview} alt="Featured Preview" className="object-contain h-28 w-full rounded" />
                ) : (
                  'No image set'
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                className="mt-3 w-full border border-dashed border-gray-300 bg-gray-50 px-4 py-2 rounded !text-sm"
                onChange={handleImageChange}
              />
              <button className="mt-3 w-full bg-gray-200 hover:bg-gray-300 !text-gray-700 font-semibold py-1.5 rounded !text-sm">
                Set featured image
              </button>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default AddPage;