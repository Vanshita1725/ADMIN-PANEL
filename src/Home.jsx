import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const Home = () => (
  
  <div className="bg-[#f6f7f7] min-h-screen">
    <Header />
    <div className="flex pt-10">
      <Sidebar />
      <main className="flex-1 lg:ml-46 bg-gray-100 font-sans text-gray-800">
        <div className=" mx-4">
          <div className="flex justify-end"><button className=" px-4 py-2 rounded-lg">Screen Options</button></div>
          <div className="flex justify-between ">
            <p className="text-2xl font-normal mb-2">Dashboard</p>
          </div>

          {/* Welcome Panel */}
          <div className="bg-white shadow-xs mb-6">
            <div className="mb-6 text-white bg-black p-7 pt-10 h-55">
              <h1 className="!text-2xl font-normal mb-2">Welcome to WordPress!</h1>
              <p className="text-white underline !text-lg">Learn more about the 6.8.1 version.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 p-3">
              {/* Block Patterns Card */}
              <div className="p-3 flex gap-4">
                <div className="p-2 w-21 h-13 bg-black flex items-center justify-center !text-white rounded-lg">
                  <i className="fa-solid fa-pen"></i>
                </div>
                <div className="flex flex-col">
                  <h2 className="!text-xl !font-normal mb-3 pe-2">Author rich content with blocks and patterns</h2>
                  <p className="text-gray-600 !text-sm mb-4">
                    Block patterns are pre-configured block layouts. Use them to get inspired or create new pages in a flash.
                  </p>
                  <Link className="!text-blue-500 !text-sm !underline py-2">
                    Add a new page
                  </Link>
                </div>
              </div>

              {/* Block Themes Card */}
              <div className="p-3 flex gap-4">
                <div className="h-13 w-21 bg-black flex items-center justify-center !text-white rounded-lg">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                    <rect width="48" height="48" rx="4" fill="#1E1E1E"></rect>
                    <path fillRule="evenodd" clipRule="evenodd" d="M18 16h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2V18a2 2 0 0 1 2-2zm12 1.5H18a.5.5 0 0 0-.5.5v3h13v-3a.5.5 0 0 0-.5-.5zm.5 5H22v8h8a.5.5 0 0 0 .5-.5v-7.5zm-10 0h-3V30a.5.5 0 0 0 .5.5h2.5v-8z" fill="#fff"></path>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <h2 className="!text-xl !font-normal mb-3">Customize your entire site with block themes</h2>
                  <p className="text-gray-600 !text-sm mb-4">
                    Design everything on your site — from the header down to the footer, all using blocks and patterns.
                  </p>
                  <Link className="!text-blue-500 !text-sm !underline py-2 mt-3">
                    Open site editor
                  </Link>
                </div>
              </div>

              {/* Styles Card */}
              <div className="p-3 flex flex-row gap-4">
                <div className="p-2 w-21 h-13 bg-black flex items-center justify-center !text-white rounded-lg">
                  <i className="fa-solid fa-circle-half-stroke"></i>
                </div>
                <div className="flex flex-col">
                  <h2 className="!text-xl !font-normal mb-3 pe-4">Switch up your site's look & feel with Styles</h2>
                  <p className="text-gray-600 text-sm mb-4">
                    Tweak your site, or give it a whole new look! Get creative — how about a new color palette or font?
                  </p>
                  <Link className="!text-blue-500 !text-sm !underline py-3 ">
                    Edit styles
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Main Dashboard Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Left Column */}
            <div className="space-y-6">
              {/* At a Glance */}
              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="!text-lg font-semibold mb-4">At a Glance</h2>
                <div className="space-y-3">
                  <div className="flex gap-10">
                    
                  <div className="flex items-center">
                    <div className="w-8  rounded-full flex items-center justify-center mr-3">
                      <i class="fa-solid fa-thumbtack"></i>
                    </div>

                    <div>
                      <p className="font-medium flex items-center justify-center">1 Post</p>
                    </div>
                  </div>
                  <div className="flex items-center ps-10">
                    <div className="w-8  rounded-full flex items-center justify-center mr-1">
                      <i class="fa-solid fa-copy"></i>
                    </div>

                    <div>
                      <p className="font-medium flex items-center justify-center">1 Page</p>
                    </div>
                  </div>
                     </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8  rounded-full flex items-center justify-center mr-3">
                    <i class="fa-solid fa-message"></i>
                    </div>
                    <div>
                      <p className="font-medium flex items-center justify-center">1 Comment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Site Health Status */}
              <div className="bg-white rounded-lg shadow p-3">
                <h2 className="!text-lg !font-normal mb-4">Site Health Status</h2>
                <p className="!text-sm justify-end w-65 flex !-rigth-7 relative text-gray-600 mb-1">
                  You're the best of this issue that should be addressed as soon as possible to improve its performance and security.
                </p>
                <div className=" items-center mb-3">
                  <div className=" w-12 h-12 text-yellow-400 rounded-full  flex items-center justify-center  ml-8">
                    <i class="fa-solid fa-spinner"></i>
                    </div>
                    <div>
                    <p className="font-medium !text-gray-600 !text-xs">Should be improved</p>
                  </div>
                </div>
                <p className="!text-sm text-gray-600">
                  Take a look at the 8 items on the Site Health screen.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow p-4">
                <h2 className="text-lg font-semibold mb-4">Activity</h2>

                <div className="mb-4">
                  <h3 className="font-medium mb-2">Recently Published</h3>
                  <div className="text-sm space-y-1">
                    <p className="text-gray-600">Jul 8th, 11:19 am</p>
                    <p className="font-medium">Hello world!</p>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Recent Comments</h3>
                  <div className="text-sm space-y-2">
                    <p className="font-medium">From A WordPress Commenter on Hello world!</p>
                    <p className="text-gray-600">
                      Hi, this is a comment. To get started with moderating, editing, and deleting comments, please visit the Comments screen in...
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4 text-sm">
                  <a href="#" className="text-blue-600 hover:underline">All (1)</a>
                  <a href="#" className="text-blue-600 hover:underline">Mine (0)</a>
                  <a href="#" className="text-blue-600 hover:underline">Pending (0)</a>
                  <a href="#" className="text-blue-600 hover:underline">Approved (1)</a>
                  <a href="#" className="text-blue-600 hover:underline">Spam (0)</a>
                  <a href="#" className="text-blue-600 hover:underline">Trash (0)</a>
                </div>
              </div>
            </div>

            {/* Middle Column */}
            <div className="space-y-6">

              <div className="space-y-6">
                {/* Quick Draft */}
                <div className="bg-white rounded-lg shadow p-4">
                  <h2 className="text-lg font-semibold mb-4">Quick Draft</h2>
                  <form className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Title</label>
                      <input
                        type="text"
                        className="w-full text-sm border border-gray-300 rounded px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Content</label>
                      <textarea
                        className="w-full text-sm border border-gray-300 rounded px-3 py-2 h-24"
                        placeholder="What's on your mind?"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded"
                    >
                      Save Draft
                    </button>
                  </form>
                </div>

                {/* WordPress Events and News */}
                <div className="bg-white rounded-lg shadow p-4">
                  <h2 className="text-lg font-semibold mb-4">WordPress Events and News</h2>

                  <div className="mb-4">
                    <p className="text-sm mb-2">Enter your closest city to find nearby events.</p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="City"
                        className="flex-1 text-sm border border-gray-300 rounded px-3 py-2"
                      />
                      <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded">
                        Submit
                      </button>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="border-t border-gray-200 pt-3">
                      <h3 className="font-medium mb-1">Introducing WordPress Credits: A New Contribution Internship Program for University Students</h3>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <h3 className="font-medium mb-1">WordCamp US 2025: See You in Portland, Oregon!</h3>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <h3 className="font-medium mb-1">Jonathan Desrosiers: The Ghosts of Unactivated Contributors</h3>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <h3 className="font-medium mb-1">WordPress.org Blog: Introducing WordPress Credits: A New Contribution Internship Program for University Students</h3>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <h3 className="font-medium mb-1">Open Channels FM: Beyond Hosting: Generalists, Pricing Advice, and ATS Role in Development</h3>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-4 text-sm">
                    <a href="#" className="text-blue-600 hover:underline">Meetups</a>
                    <a href="#" className="text-blue-600 hover:underline">WordCamps</a>
                    <a href="#" className="text-blue-600 hover:underline">News</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div id="column3-sortables" className="bg-gray-100 border border-4 border-gray-300 flex items-center justify-center border-dashed h-60" >
                <p className="text-center text-gray-600">Drag boxes here</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);

export default Home;