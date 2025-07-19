import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

export default function PermalinkSettings() {
  const [structure, setStructure] = useState('day-name');
  const [customStructure, setCustomStructure] = useState('/%year%/%monthnum%/%day%/%postname%/');
  const [categoryBase, setCategoryBase] = useState('');
  const [tagBase, setTagBase] = useState('');
  const [collapsed, setCollapsed] = useState(false); // <-- Sidebar collapse state

  const handleSubmit = (e) => {
    e.preventDefault();
    const settings = {
      structure,
      customStructure: structure === 'custom' ? customStructure : '',
      categoryBase,
      tagBase,
    };
    console.log('Saved settings:', settings);
  };

  return (
    <div>
      <Header />
      <main className="flex flex-col lg:ms-46 bg-gray-200 min-h-screen p-0">
        <div className='flex flex-row'>
          
            <Sidebar />
          
          <div className="flex-1 mt-10 bg-gray-200 border border-[#e5e7eb] rounded shadow-sm p-8">
            <h1 className="!text-2xl !font-normal mb-4 text-gray-800">Permalink Settings</h1>
            <p className="text-xs sm:text-sm text-gray-600 mb-6">
              WordPress offers you the ability to create a custom URL structure for your permalinks and archives. Custom URL structures can improve the aesthetics, usability, and forward-compatibility of your links.{' '}
              <a href="#" className="text-blue-600">A number of tags are available</a>.
            </p>
            <form onSubmit={handleSubmit} className="bg-gray-200 p-3 sm:p-4 md:p-6  overflow-x-auto">
              {/* Common Settings */}
              <section className="mb-8 md:mb-10">
                <h1 className="!text-xl  font-normal mb-2 sm:mb-3 text-gray-800">Common Settings</h1>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-5">
                  Select the permalink structure for your website.
                </p>
                <div className="space-y-3 !text-sm !font-normal sm:space-y-4">
                  {[
                    { value: 'plain', label: 'Plain', example: '?p=123' },
                    { value: 'day-name', label: 'Day and name', example: '2025/07/08/sample-post/' },
                    { value: 'month-name', label: 'Month and name', example: '2025/07/sample-post/' },
                    { value: 'numeric', label: 'Numeric', example: 'archives/123' },
                    { value: 'post-name', label: 'Post name', example: 'sample-post/' },
                  ].map(option => (
                    <RadioOption
                      key={option.value}
                      value={option.value}
                      checked={structure === option.value}
                      onChange={() => setStructure(option.value)}
                      label={option.label}
                      example={`http://localhost/wordpress/${option.example}`}
                    />
                  ))}
                  {/* Custom Structure */}
                  <div className="flex flex-col gap-2 mt-3 sm:mt-4">
                    <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
                      <input
                        type="radio"
                        name="structure"
                        value="custom"
                        className="mt-1"
                        checked={structure === 'custom'}
                        onChange={() => setStructure('custom')}
                      />
                      <div className="w-full">
                        <label className="font-medium text-gray-800">Custom Structure</label>
                        <div className="flex flex-col md:flex-row items-start md:items-center mt-2 gap-2">
                          <span className="text-gray-600 whitespace-nowrap text-xs sm:text-sm">http://localhost/wordpress</span>
                          <input
                            type="text"
                            name="permalink_structure"
                            value={customStructure}
                            onChange={(e) => setCustomStructure(e.target.value)}
                            className="px-3 py-2 border rounded-md text-xs sm:text-sm w-full min-w-0"
                          />
                        </div>
                      </div>
                    </div>
                    <AvailableTags />
                  </div>
                </div>
              </section>
              {/* Optional Settings */}
              <section className="mb-8 md:mb-10">
                <h2 className="text-base !text-lg font-semibold mb-2 sm:mb-3 text-gray-800">Optional</h2>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-5">
                  You may enter custom structures for your category and tag URLs here.
                </p>
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  <div className="flex items-start mb-6">
                    <label htmlFor="category-base" className="w-56 font-semibold pr-5 pt-2">Category base</label>
                    <div className="flex-1">
                      <input
                        id="category-base"
                        name="categoryBase"
                        type="text"
                        className="w-full max-w-md p-2 bg-white border border-[#8c8f94] rounded"
                        value={categoryBase}
                        onChange={e => setCategoryBase(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex items-start mb-6">
                    <label htmlFor="tag-base" className="w-56 font-semibold pr-5 pt-2">Tag base</label>
                    <div className="flex-1">
                      <input
                        id="tag-base"
                        name="tagBase"
                        type="text"
                        className="w-full max-w-md p-2 bg-white border border-[#8c8f94] rounded"
                        value={tagBase}
                        onChange={e => setTagBase(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </section>
              <div className="mt-4 sm:mt-6">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-2  ! font-normaltext-xs sm:text-sm"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

// Reusable Components
const RadioOption = ({ value, checked, onChange, label, example }) => (
  <div className="flex items-start gap-3">
    <input
      type="radio"
      name="structure"
      value={value}
      className="mt-1"
      checked={checked}
      onChange={onChange}
    />
    <div>
      <label className="font-medium text-gray-800">{label}</label>
      <p className="text-sm text-gray-600 break-all">
        <code>{example}</code>
      </p>
    </div>
  </div>
);

const InputField = ({ id, label, value, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type="text"
      id={id}
      className="w-full px-3 py-2 border rounded-md text-sm"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

const AvailableTags = () => {
  const tags = [
    '%year%', '%monthnum%', '%day%', '%hour%', '%minute%', '%second%',
    '%post_id%', '%postname%', '%category%', '%author%',
  ];

  return (
    <div className="mt-2">
      <span className="text-sm font-medium text-gray-700">Available tags:</span>
      <div className="flex flex-wrap gap-2 mt-1">
        {tags.map(tag => (
          <span
            key={tag}
            className="px-2 py-1 border border-blue-500 rounded text-xs text-gray-800"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );


};
