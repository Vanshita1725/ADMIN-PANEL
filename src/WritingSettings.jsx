import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function WritingSettings() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div>
      <Header />
      <main className="flex flex-col mx-auto bg-gray-100 min-h-screen p-0">
        <div className='flex flex-row'>
          <div className="w-46">
            <Sidebar />
          </div>
          <div className="flex-1 mt-10 bg-gray-100 border border-[#e5e7eb] rounded shadow-sm p-8">
        <h1 className="!text-2xl !font-normal mb-8">Writing Settings</h1>

        <form className="space-y-6">
          {/* Default Post Category */}
          <div className="flex items-center space-x-6">
            <label htmlFor="default_category" className="w-56 !text-sm font-normal">Default Post Category</label>
            <select id="default_category" name="default_category" className="w-64 border rounded px-3 py-2">
              <option>Uncategorized</option>
              <option>News</option>
              <option>Blog</option>
            </select>
          </div>

          {/* Default Post Format */}
          <div className="flex items-center space-x-6">
            <label htmlFor="default_post_format" className="w-56 !text-sm font-normal">Default Post Format</label>
            <select id="default_post_format" name="default_post_format" className="w-64 border rounded px-3 py-2">
              <option value="standard">Standard</option>
              <option value="gallery" selected>Gallery</option>
              <option value="aside">Aside</option>
              <option value="link">Link</option>
            </select>
          </div>

          {/* Default Editor */}
          <div className="flex items-start space-x-6">
            <p className="w-56 !text-sm font-normal">Default editor for all users</p>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="radio" name="default_editor" value="classic" defaultChecked className="accent-blue-600" />
                <span>Classic editor</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="default_editor" value="block" className="accent-blue-600" />
                <span>Block editor</span>
              </label>
            </div>
          </div>

          {/* Allow Switching Editor */}
          <div className="flex items-start space-x-6">
            <p className="w-56 !text-sm font-normal">Allow users to switch editors</p>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input type="radio" name="allow_switch" value="yes" className="accent-blue-600" />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="allow_switch" value="no" defaultChecked className="accent-blue-600" />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Post via Email */}
          <div className="mt-10">
            <h2 className="!text-xl !font-normal mb-2">Post via email</h2>
            <p className="text-sm text-gray-600 mb-4">
              To post to WordPress by email, you must set up a secret email account with POP3 access.
              Any mail received at this address will be posted, so it’s a good idea to keep this address very secret.
              Here are three random strings you could use:
              <kbd className="bg-gray-200 px-1 rounded mx-1">V9lX7hMI</kbd>,
              <kbd className="bg-gray-200 px-1 rounded mx-1">8wyot2ax</kbd>,
              <kbd className="bg-gray-200 px-1 rounded mx-1">taYpyVdL</kbd>.
            </p>

            {/* Mail Server + Port */}
            <div className="flex items-center space-x-4 mb-4">
              <label htmlFor="mailserver_url" className="w-56 font-normal !text-sm">Mail Server</label>
              <input type="text" id="mailserver_url" name="mailserver_url" className="w-full max-w-md border rounded px-3 py-2" defaultValue="mail.example.com" />
              <span className="font-medium">Port</span>
              <input type="text" id="mailserver_port" name="mailserver_port" className="w-20 border rounded px-2 py-2" defaultValue="110" />
            </div>

            {/* Login */}
            <div className="flex items-center space-x-4 mb-4">
              <label htmlFor="mailserver_login" className="w-56 font-normal !text-sm">Login Name</label>
              <input type="text" id="mailserver_login" name="mailserver_login" className="w-full max-w-md border rounded px-3 py-2" defaultValue="login@example.com" />
            </div>

            {/* Password */}
            <div className="flex items-center space-x-4 mb-4 relative">
              <label htmlFor="mailserver_pass" className="w-56 font-normal !text-sm">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="mailserver_pass"
                name="mailserver_pass"
                className="w-full max-w-md border rounded px-3 py-2 pr-10"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-4 text-blue-600 text-sm top-1/2 -translate-y-1/2"
              >
                👁️
              </button>
            </div>

            {/* Mail Category */}
            <div className="flex items-center space-x-6">
              <label htmlFor="default_email_category" className="w-56 font-normal !text-sm">Default Mail Category</label>
              <select id="default_email_category" name="default_email_category" className="w-64 border rounded px-3 py-2">
                <option>Uncategorized</option>
                <option>News</option>
              </select>
            </div>
          </div>

          {/* Update Services */}
          <div className="mt-10">
            <h2 className="!text-xl font-normal mb-2">Update Services</h2>
            <p className="text-sm text-gray-600 mb-2">
              When you publish a new post, WordPress automatically notifies the following site update services.
              For more about this, see the <a href="#" className="text-blue-600 underline">Update Services</a> documentation article.
              Separate multiple service URLs with line breaks.
            </p>
            <textarea
              name="ping_sites"
              rows="3"
              className="w-full border rounded px-3 py-2"
              defaultValue="http://rpc.pingomatic.com/"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            <button type="submit" className="!bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 !text-sm font-normal shadow">
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