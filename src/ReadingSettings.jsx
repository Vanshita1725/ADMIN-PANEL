import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

export default function ReadingSettings() {
  return (
    <div>
    <Header />     
    <main className="flex flex-col bg-gray-100 min-h-screen p-10">
      <div className='flex flex-row'>
        <div className="w-46">
          <Sidebar />
        </div>
          <div className='w-full bg-gray-100 pt-8'>
            <h1 className="!text-3xl !font-semibold mb-4 md:mb-6 text-gray-800 leading-tight">
              Reading Settings
            </h1>

            <form className=" md:space-y-6 !bg-gray-100  rounded p-4 md:p-6">
              {/* Homepage Displays */}
              <div>
                <label className="block text-base md:text-lg font-medium mb-2">
                  Your homepage displays
                </label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm md:text-base">
                    <input
                      type="radio"
                      name="show_on_front"
                      value="posts"
                      defaultChecked
                      className="accent-blue-600"
                    />
                    <span>Your latest posts</span>
                  </label>
                  <label className="flex items-center space-x-2 text-sm md:text-base">
                    <input
                      type="radio"
                      name="show_on_front"
                      value="page"
                      className="accent-blue-600"
                    />
                    <span>A static page (select below)</span>
                  </label>
                </div>

                <div className="mt-4 space-y-3 ml-0 md:ml-4">
                  <div>
                    <label htmlFor="page_on_front" className="block text-sm md:text-base mb-1">
                      Homepage
                    </label>
                    <select
                      id="page_on_front"
                      name="page_on_front"
                      className="w-48 h-9 text-sm md:text-base border rounded px-3 py-2"
                    >
                      <option value="">— Select —</option>
                      <option value="1">Home</option>
                      <option value="2">About</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="page_for_posts" className="block text-sm md:text-base mb-1">
                      Posts page
                    </label>
                    <select
                      id="page_for_posts"
                      name="page_for_posts"
                      className="w-48 h-9 text-sm md:text-base border rounded px-3 py-2"
                    >
                      <option value="">— Select —</option>
                      <option value="3">Blog</option>
                      <option value="4">News</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Blog pages show at most */}
              <div>
                <label htmlFor="posts_per_page" className="block text-sm md:text-base font-medium mb-1">
                  Blog pages show at most
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    id="posts_per_page"
                    name="posts_per_page"
                    className="w-24 text-sm md:text-base border rounded px-2 py-1"
                    defaultValue={10}
                    min={1}
                  />
                  <span className="text-sm md:text-base">posts</span>
                </div>
              </div>

              {/* Syndication feeds show */}
              <div>
                <label htmlFor="posts_per_rss" className="block text-sm md:text-base font-medium mb-1">
                  Syndication feeds show the most recent
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    id="posts_per_rss"
                    name="posts_per_rss"
                    className="w-24 text-sm md:text-base border rounded px-2 py-1"
                    defaultValue={10}
                    min={1}
                  />
                  <span className="text-sm md:text-base">items</span>
                </div>
              </div>

              {/* Feed content */}
              <div>
                <label className="block text-sm md:text-base font-medium mb-2">
                  For each post in a feed, include
                </label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2 text-sm md:text-base">
                    <input
                      type="radio"
                      name="rss_use_excerpt"
                      value="0"
                      defaultChecked
                      className="accent-blue-600"
                    />
                    <span>Full text</span>
                  </label>
                  <label className="flex items-center space-x-2 text-sm md:text-base">
                    <input
                      type="radio"
                      name="rss_use_excerpt"
                      value="1"
                      className="accent-blue-600"
                    />
                    <span>Excerpt</span>
                  </label>
                </div>
                <p className="text-xs md:text-sm text-gray-500 mt-2">
                  Your theme determines how content is displayed in browsers.{' '}
                  <a
                    href="https://developer.wordpress.org/advanced-administration/wordpress/feeds/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    Learn more about feeds
                  </a>
                  .
                </p>
              </div>

              {/* Search engine visibility */}
              <div>
                <label className="block text-sm md:text-base font-medium mb-2">
                  Search engine visibility
                </label>
                <label className="flex items-center space-x-2 text-sm md:text-base">
                  <input type="checkbox" name="blog_public" value="0" className="accent-blue-600" />
                  <span>Discourage search engines from indexing this site</span>
                </label>
                <p className="text-xs md:text-sm text-gray-500 mt-1">
                  It is up to search engines to honor this request.
                </p>
              </div>

              {/* Save Button */}
              <div>
                <button
                  type="submit"
                  className="text-sm md:text-base w-full md:w-auto px-4 md:px-6 py-2 !bg-blue-600 text-white rounded hover:bg-blue-700"
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