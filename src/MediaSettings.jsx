import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function MediaSettings() {
  const [form, setForm] = useState({
    thumbnailWidth: '',
    thumbnailHeight: '',
    thumbnailCrop: false,
    mediumWidth: '',
    mediumHeight: '',
    largeWidth: '',
    largeHeight: '',
    uploadPath: '',
    uploadUrlPath: '',
    useYearMonthFolders: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setForm({
      ...form,
      [id]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // Implement saving logic here
  };

  return (
    <div>
      <Header />
      <main className="flex flex-col lg:ms-46 bg-gray-100 min-h-screen p-0">
        <div className='flex  flex-row'>
          
            <Sidebar />
          
          <div className="flex-1 mt-10 bg-white border border-[#e5e7eb] rounded shadow-sm p-8">
        <h1 className="!text-2xl !font-media mb-6">Media Settings</h1>
        <form onSubmit={handleSubmit}>
          {/* Image Sizes */}
          <h2 className="!text-xl !font-normal mb-2">Image Sizes</h2>
          <p className="text-gray-600  mb-4">
            Set maximum dimensions in pixels for inserting images.
          </p>

          {/* Thumbnail Size */}
          <div className="!text-xl " >Thumbnail Size
            <div className='flex  gap-10'>
              <div className="!text-sm">Width
            <SizeInput id="thumbnailWidth" value={form.thumbnailWidth} onChange={handleChange} /></div>
            <div className="!text-sm">Height<SizeInput  id="thumbnailHeight" value={form.thumbnailHeight} onChange={handleChange} >Height </SizeInput>
               </div>  </div>
            <Checkbox
              label="Crop thumbnail to exact dimensions"
              id="thumbnailCrop"
              checked={form.thumbnailCrop}
              onChange={handleChange}
            />
          </div>

          {/* Medium Size */}
          <div className="!text-xl mt-4">Medium Size
            <div className='flex  gap-10'>
          <div className="!text-sm">Max Width
            <SizeInput  id="mediumWidth" value={form.mediumWidth} onChange={handleChange} /></div>
          <div className="!text-sm">Max Height
            <SizeInput  id="mediumHeight" value={form.mediumHeight} onChange={handleChange} /></div>
          </div></div>

          {/* Large Size */}
           <div className="!text-xl mt-4">Large Size
            <div className='flex  gap-10'>
          <div className="!text-sm">Max Width
            <SizeInput  id="mediumWidth" value={form.mediumWidth} onChange={handleChange} /></div>
          <div className="!text-sm">Max Height
            <SizeInput  id="mediumHeight" value={form.mediumHeight} onChange={handleChange} /></div>
          </div></div>
          {/* Upload Settings */}
          <div className="mt-8">
          <h2 className="!text-xl font-normal mb-3">Uploading Files</h2>

          <TextInput
            label="Store uploads in this folder"
            id="uploadPath"
            placeholder="e.g., wp-content/uploads"
            value={form.uploadPath}
            onChange={handleChange}
            hint="Default is wp-content/uploads"
          />

          <TextInput
            label="Full URL path to files"
            id="uploadUrlPath"
            placeholder="Optional"
            value={form.uploadUrlPath}
            onChange={handleChange}
            hint="Leave blank to use the default."
          />

          <div className="mb-6">
            <Checkbox
              label="Organize uploads into month- and year-based folders"
              id="useYearMonthFolders"
              checked={form.useYearMonthFolders}
              onChange={handleChange}
            />
          </div>

          {/* Submit */}
          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
          </div>
        </form>
          </div>
        </div>
      </main>
    </div>
  );
}

// Reusable Components

const FieldGroup = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="font-medium text-gray-700 mb-2">{title}</h3>
    <div className="grid grid-cols-2 gap-4">{children}</div>
  </div>
);

const SizeInput = ({ label, id, value, onChange }) => (
  <div>
    <label htmlFor={id} className="block mb-1">
      {label}
    </label>
    <input
      id={id}
      type="number"
      value={value}
      onChange={onChange}
      className="w-full border p-2 rounded"
      placeholder="e.g., 150"
    />
  </div>
);

const TextInput = ({ label, id, placeholder, value, onChange, hint }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block font-medium  text-gray-700 mb-1">
      {label}
    </label>
    <input
      type="text"
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border p-2 rounded"
    />
    {hint && <p className="text-sm text-gray-500 mt-1">{hint}</p>}
  </div>
);

const Checkbox = ({ label, id, checked, onChange }) => (
  <label className="inline-flex text-xs items-center mt-3">
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={onChange}
      className="accent-blue-600 mr-2"
    />
    {label}
  </label>
);