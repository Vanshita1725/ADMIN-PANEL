import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import img from "./assets/icon.png";
function Dashboard() {
  const [showCityForm, setShowCityForm] = React.useState(false);

  return (
    <div className="bg-[#f6f7f7] min-h-screen">
      <Header />
      <div className="flex pt-10">
        <Sidebar />
        <main className="flex-1 ml-46 bg-gray-100 font-sans text-gray-800">
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
              <div className="bg-white  border border-gray-400 shadow ">
                <h2 className="!text-lg border p-2 !font-normal mb-4">At a Glance</h2>
                <div className="space-y-3">
                  <div className="flex gap-10">
                    
                  <div className="flex items-center">
                    <div className="gap-2 p-2  rounded-full flex flex-row items-center justify-center mr-3">
                      <i className="fa-solid fa-thumbtack !text-md !text-gray-400"></i>
                  
                      <p className="font-medium mb-2 !text-sm !font-normal !text-blue-500 flex items-center justify-center">1 Post</p>
                    </div>
                  </div>
                  <div className="flex items-center ps-10">
                    <div className="gap-2 rounded-full flex items-center justify-center mr-1">
                      <i className="fa-solid fa-copy !text-md !text-gray-400"></i>
                      <p className="font-medium flex mb-2 !text-sm !font-normal !text-blue-500 items-center justify-center">1 Page</p>
                    </div>
                  </div>
                     </div>
                  <div className="flex items-center">
                    <div className="mb-2 gap-2 p-2 rounded-full flex items-center justify-center mr-3">
                    <i className="fa-solid fa-message !text-md !text-gray-400"></i>
                   
                      <p className=" flex mb-2 !text-sm !font-normal !text-blue-500 items-center justify-center">1 Comment</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Site Health Status */}
              <div className="bg-white  shadow border  ">
                <h2 className="!text-lg !font-normal border p-2 mb-2">Site Helth Status</h2>
                <div className="flex h-20  p-2">
                  <div className=" h-20 w-30 mt-4 items-center mb-3">
                  <div className=" w-12 text-yellow-400 rounded-full  flex items-center justify-center  ml-8">
                    <i class="fa-solid fa-spinner"></i>
                    </div>
                    <div className="flex w-30 flex-col">
                    <p className="font-medium w-30 mt-3 !text-gray-600 !text-xs">Should be improved</p>
                  </div>
                  </div>
                  <p className="w-65 !text-sm">                  You're the best of this issue that should be addressed as soon as possible to improve its performance and security.
</p>
                </div>
                <div className="flex relative !-right-32" >
                <p className="!text-sm w-60 !text-gray-600">
                  Take a look at the <span className="!font-bold">8 items</span>  on the <Link >Site Health screen.</Link>
                </p>
                </div>
              </div>
                    
              <div className="bg-white  shadow border">
                <h2 className="!text-lg mb-2 border p-2 font-semibold ">Activity</h2>

                <div className="mb-4 border pb-2 ">
                  <h3 className="!font-normal ps-2 !text-sm mb-2">Recently Published</h3>
                  <div className="text-sm flex bg-gray-100  gap-20 space-y-1">
                    <p className="text-gray-600 mb-0 ps-2">Jul 8th, 11:19 am</p>
                    <p className="!font-normal mb-0 text-blue-500">Hello world!</p>
                  </div>
                </div>

                <div>
                  <h3 className="!font-normal !text-sm mb-2">Recent Comments</h3>
                  <div className="!text-sm bg-gray-100 flex  items-center justify-center p-2 space-y-2">
                    <img src={img} className="h-15 w-15" alt="" />
                    <div>
                    <p className="!font-normal !text-xs relative mb-1 -right-10">From<span className="!text-blue-700"> A WordPress Commenter</span> on<span className="!text-blue-700"> Hello world!</span></p>
                    <p className="text-gray-600 !text-xs w-80 pe-3  relative -right-10">
                      Hi, this is a comment. To get started with moderating, editing, and deleting comments, please visit the Comments screen in...
                    </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3  mt-4 p-3 text-sm">
                  <a href="#" className="text-blue-800 !text-xs   !no-underline hover:underline">All <span className="!text-gray-500 !no-underline">(1)</span></a>
                  <a href="#" className="text-blue-800 !text-xs  border-l-1 ps-1 border-gray-200 !no-underline hover:underline">Mine <span  className="!text-gray-500 !no-underline">(0)</span></a>
                  <a href="#" className="text-blue-800 !text-xs  border-l-1 ps-1 border-gray-200 !no-underline hover:underline">Pending <span  className="!text-gray-500 !no-underline">(0)</span></a>
                  <a href="#" className="text-blue-800 !text-xs  border-l-1 ps-1  border-gray-200 !no-underline hover:underline">Approved <span  className="!text-gray-500 !no-underline">(1)</span></a>
                  <a href="#" className="text-blue-800 !text-xs  border-l-1 ps-1 border-gray-200 !no-underline hover:underline">Spam <span  className="!text-gray-500 !no-underline">(0)</span></a>
                  <a href="#" className="text-blue-800 !text-xs  border-l-1 ps-1 border-gray-200 !no-underline hover:underline">Trash <span  className="!text-gray-500 !no-underline">(0)</span></a>
                </div>
              </div>
            </div>

            {/* Middle Column */}
            <div className="space-y-6">

              <div className="space-y-6">
                {/* Quick Draft */}
                <div className="bg-white  shadow border ">
                  <h2 className="!text-lg !font-normal border p-2 mb-4">Quick Draft</h2>
                  <form className="space-y-3">
                    <div className="flex pt-0 p-2 flex-col">
                      <label className="block text-sm  text-gray-500 font-normal mb-1">Title</label>
                      <input
                        type="text"
                        className="w-full text-sm border border-gray-300 rounded px-3 py-1"
                      />
                    </div>
                    <div className="flex p-2 pt-0 mb-0 flex-col">
                      <label className="block text-sm font-normal text-gray-500 mb-1">Content</label>
                      <textarea
                        className="w-full text-sm border border-gray-300 rounded px-3 py-2 h-24"
                        placeholder="What's on your mind?"
                      ></textarea>
                    </div>
                    <div className="p-2">
                    <button
                      type="submit"
                      className="bg-blue-800  hover:bg-blue-700 text-white !text-xs px-2 py-2 !rounded-md"
                    >
                      Save Draft
                    </button>
                    </div>
                  </form>
                </div>

                {/* WordPress Events and News */}
                <div className="bg-white  shadow border">
                  <h2 className="!text-lg border p-2 !font-normal mb-4">WordPress Events and News</h2>
                  <div className=" p-2">
                    <p className="text-xs flex gap-2 mb-2">Enter your closest city to find nearby events. 
                      <button
                        className=" border-blue-700 text-blue-700 px-2 py-1 rounded flex items-center gap-1 ml-2 text-xs focus:outline-none focus:ring-2 focus:ring-blue-300"
                        type="button"
                        onClick={() => setShowCityForm(true)}
                        tabIndex={0}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 10.5c0 5.25-7.5 11-7.5 11s-7.5-5.75-7.5-11a7.5 7.5 0 1115 0z"/></svg>
                        Select location
                      </button>
                    </p>
                    {showCityForm && (
                      <form className="flex items-center gap-2 mt-2">
                        <label className="!text-sm text-gray-700 mr-1">City:</label>
                        <input
                          type="text"
                          placeholder="Cincinnati"
                          className="flex !w-40 !text-sm border border-gray-300 rounded px-2 py-1"
                          defaultValue="Cincinnati"
                        />
                        <button type="submit" className="border border-blue-600 text-blue-700 bg-white hover:bg-blue-50 !text-sm px-4 py-1 rounded mr-1">Submit</button>
                        <button
                          type="button"
                          className="text-blue-700 underline !text-sm px-2 py-1 bg-transparent border-none"
                          onClick={() => setShowCityForm(false)}
                        >
                          Cancel
                        </button>
                      </form>
                    )}
                  </div>
                  <div className="space-y-4 p-2 pb-0">
                    <div className="border-t border-gray-200 ">
                      <h3 className="font-Normal !text-xs !text-blue-600 ">WordPress 6.8.2 Maintenance Release</h3>
                    </div>
                    
                      <h3 className="font-Normal !text-xs !text-blue-600 ">Celebrating Kim Parsell: 2025 WordCamp US Scholarship Applications Open!</h3>
                    
                    
                      <h3 className="font-Normal !text-xs !text-blue-600 ">HeroPress: The Journey Of Pratik Bhatt</h3>
                    
                    
                      <h3 className="font-Normal !text-xs !text-blue-600 ">WordPress.org blog: WordPress 6.8.2 Maintenance Release</h3>
                    
                    
                      <h3 className="font-Normal !text-xs !text-blue-600 ">Open Channels FM: Rethinking Global Remote Work Opportunities in Open Source </h3>
                    
                  </div>
                  <div className="flex gap-4 p-2 border-t border-gray-200 mt-4 text-sm">
                    <a href="#" className="text-blue-600 hover:underline">Meetups</a>
                    <a href="#" className="text-blue-600 hover:underline">WordCamps</a>
                    <a href="#" className="text-blue-600 hover:underline">News</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div id="column3-sortables" className="bg-gray-100 border-dashed border-4 border-gray-300 flex items-center justify-center border-dashed h-60" >
                <p className="text-center text-gray-600">Drag boxes here</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  );
}

export default Dashboard;