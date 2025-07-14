import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function PrivacySettings() {
  const [selectedPage, setSelectedPage] = useState('');
  const [pages] = useState([
    { id: 123, label: 'Privacy Policy (Draft)' },
    { id: 124, label: 'Privacy Policy (Published)' }
  ]);

  const handleCreate = (e) => {
    e.preventDefault();
    alert('Privacy Policy page created (simulation)');
  };

  const handleSelect = (e) => {
    e.preventDefault();
    if (!selectedPage) {
      alert('Please select a page first');
    } else {
      alert(`Using page ID: ${selectedPage} as Privacy Policy`);
    }
  };

  return (
    <div>
      <Header />
      <main className="flex flex-col mx-auto bg-gray-100 min-h-screen p-0">
        <div className='flex flex-row'>
          <div className="w-46">
            <Sidebar />
          </div>
          <div className="flex-1 mt-10 bg-white border border-[#e5e7eb] rounded shadow-sm p-8">
         <div className="mb-6 text-center"> {/* Added text-center here */}
  <h1 className="!text-3xl !font-semibold">Privacy</h1>
</div>

<div className="flex justify-center border-b border-gray-300 mb-6"> {/* Added justify-center here */}
  <a href="#" className="px-4 py-2 !text-gray-600 font-medium border-b-2 border-blue-600">Settings</a>
  <a href="#" className="px-4 py-2 !text-gray-600 hover:text-blue-600">Policy Guide</a>
</div>

            <div className="space-y-6">
              <div className="bg-white p-0">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Privacy Settings</h2>
                
                <div className="space-y-4 text-gray-700 mb-6">
                  <p>As a website owner, you may need to follow national or international privacy laws. For example, you may need to create and display a privacy policy. If you already have a Privacy Policy page, please select it below. If not, please create one.</p>
                  
                  <p>The new page will include help and suggestions for your privacy policy. However, it is your responsibility to use those resources correctly, to provide the information that your privacy policy requires, and to keep that information current and accurate.</p>
                  
                  <p>After your Privacy Policy page is set, you should edit it. You should also review your privacy policy from time to time, especially after installing or updating any themes or plugins. There may be changes or new suggested information for you to consider adding to your policy.</p>
                </div>

                <p className="text-blue-600 mb-6">
                  <Link to="#" className="hover:underline">Edit</Link> or <Link to="#" className="hover:underline">preview</Link> your Privacy Policy page content.
                  <br />
                  Need help putting together your new Privacy Policy page? <Link to="#" className="font-semibold hover:underline">Check out the privacy policy guide</Link> for recommendations on what content to include, along with policies suggested by your plugins and theme.
                </p>

                <hr className="my-6 border-gray-200" />

                <div className="md:grid-cols-2 gap-6">
                  {/* Create New Section */}
                  <div className="flex gap-20 rounded-md p-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Create a new Privacy Policy page</h3>
                    <form onSubmit={handleCreate}>
                      <button
                        type="submit"
                        className="!bg-white text-blue-500 border !border-blue-500 px-4 py-2 rounded !text-xs"
                      >
                        Create
                      </button>
                    </form>
                  </div>

                  {/* Select Existing Section */}
                  <div className="flex gap-20 p-6">
                    <h3 className="text-lg font-medium text-gray-800 mb-4">Change your Privacy Policy page</h3>
                    <form onSubmit={handleSelect} className="flex items-center space-x-4">
                     
                      <select
                        id="privacyPage"
                        name="privacyPage"
                        value={selectedPage}
                        onChange={(e) => setSelectedPage(e.target.value)}
                        className="border border-gray-300 rounded px-2 py-1 text-sm"
                      >
                        <option value="">Privacy Policy </option>
                        {pages.map((page) => (
                          <option key={page.id} value={page.id}>
                            {page.label}
                          </option>
                        ))}
                      </select>
                      <button
                        type="submit"
                        className="!bg-blue-600 hover:bg-blue-700 text-white px-2 rounded !text-xs"
                      >
                        Use This Page
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}