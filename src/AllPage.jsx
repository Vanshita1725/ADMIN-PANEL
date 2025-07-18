import { useState } from 'react';
import { FaSearch, FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';
import Header from './Header';
import Sidebar from './Sidebar';

const AllPage = () => {
  // State declarations
  const [selectedPosts, setSelectedPosts] = useState([]);
  const [showQuickEdit, setShowQuickEdit] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [showScreenOptions, setShowScreenOptions] = useState(false);

  // Sample posts data
  const posts = [
    {
      id: 1,
      title: 'Hello world!',
      author: 'admin',
      categories: ['Uncategorized'],
      tags: [],
      date: '2023/06/15',
      status: 'publish',
      link: '#'
    },
    {
      id: 2,
      title: 'Privacy Policy',
      author: 'admin',
      categories: [],
      tags: [],
      date: '2023/06/20',
      status: 'draft',
      link: '#'
    }
  ];

  // Handle selecting all posts
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedPosts(filteredPosts.map(post => post.id));
    } else {
      setSelectedPosts([]);
    }
  };

  // Handle selecting individual post
  const handleSelectPost = (postId) => {
    setSelectedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId) 
        : [...prev, postId]
    );
  };

  // Filter posts based on status and search query
  const filteredPosts = posts.filter(post => {
    if (filterStatus !== 'all' && post.status !== filterStatus) return false;
    if (searchQuery && !post.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

//   Handle status changes
  const handleStatusChange = (postId, newStatus) => {
    console.log(`Changing post ${postId} status to ${newStatus}`);
  };

  // Handle bulk actions
  const handleBulkAction = (action) => {
    if (selectedPosts.length === 0) return;
    switch(action) {
      case 'trash':
        alert(`Moving ${selectedPosts.length} posts to trash`);
        break;
      case 'publish':
        alert(`Publishing ${selectedPosts.length} posts`);
        break;
      case 'draft':
        alert(`Moving ${selectedPosts.length} posts to draft`);
        break;
      default:
        alert(`Performing ${action} on selected posts`);
    }
    setSelectedPosts([]);
  };

  // Calculate status counts
  const statusCounts = {
    all: posts.length,
    publish: posts.filter(p => p.status === 'publish').length,
    draft: posts.filter(p => p.status === 'draft').length,
    future: posts.filter(p => p.status === 'future').length,
    trash: posts.filter(p => p.status === 'trash').length
  };

  return (
    <div className="wp-admin bg-[#f1f1f1] min-h-screen">
      <Header />
      <Sidebar />
      <div className="lg:ml-48 pt-12 px-4 max-w-screen-2xl">
        {/* Top Bar: Title, Add Page, Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <h1 className="!text-2xl !font-normal text-black leading-tight">Pages</h1>
            <a href="#post-new" className="ml-2 px-3 !no-underline py-1.5 border border-blue-600 text-blue-700 bg-white rounded hover:bg-blue-50 text-base font-normal">Add Page</a>
          </div>
          
        </div>
        <div className='flex items-center justify-between  '>
        {/* Status Tabs */}
        <ul className="subsubsub p-0  flex flex-wrap gap-2 !text-xs mb-3">
          {Object.entries({
            all: 'All',
            publish: 'Published',
            draft: 'Draft',
            
          }).map(([key, label]) => (
            <li key={key} className="flex items-center gap-2">
              {key !== 'all' && <span className="text-gray-300">|</span>}
              <button
                onClick={() => setFilterStatus(key)}
                className={`px-2 py-1 rounded ${filterStatus === key ? 'font-medium  text-black' : 'text-gray-600 hover:text-blue-700 bg-transparent'}`}
              >
                {label} <span className="count">({statusCounts[key]})</span>
              </button>
            </li>
          ))}
        </ul>
        <form className="flex items-center gap-2" onSubmit={e => e.preventDefault()}>
            <input
              type="search"
              placeholder=""
              className="border border-gray-300 rounded px-2 py-1.5 text-base bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 min-w-[180px]"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="border border-blue-600 text-blue-700 bg-white rounded px-3 py-1.5 text-base font-normal hover:bg-blue-50">Search Pages</button>
          </form>
          </div>
        {/* Bulk Actions Top */}
        <div className="flex items-center gap-2 mb-2">
          <select className="border border-gray-300 rounded px-2 py-1 text-sm bg-white">
            <option>Bulk actions</option>
            <option>Edit</option>
            <option>Move to Trash</option>
          </select>
          <button className="px-3 py-1 bg-[#f6f7f7] border border-gray-300 rounded text-sm text-gray-700">Apply</button>
          <select className="border border-gray-300 rounded px-2 py-1 text-sm bg-white ml-2">
            <option>All dates</option>
            <option>Last 24 hours</option>
            <option>Last 7 days</option>
          </select>
          <button className="px-3 py-1 bg-[#f6f7f7] border border-gray-500 rounded text-sm text-gray-700 ml-2">Filter</button>
        </div>
        {/* Table */}
        <div className="bg-white  border-1 border-gray-300 rounded shadow-sm overflow-x-auto">
          <table className="min-w-full text-sm border-separate border-spacing-0">
            <thead className="bg-white border-1">
              <tr>
                <th className="px-3 py-2 w-8 align-middle border-b border-gray-300">
                  <input
                    type="checkbox"
                    className="appearance-none w-4 h-4  border-1 border-gray-400 rounded-sm checked:bg-[#2271b1] checked:border-[#2271b1] focus:ring-0 focus:outline-none cursor-pointer"
                    checked={selectedPosts.length === filteredPosts.length && filteredPosts.length > 0}
                    onChange={handleSelectAll}
                    style={{
                      backgroundImage: (selectedPosts.length === filteredPosts.length && filteredPosts.length > 0)
                        ? 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'16\' height=\'16\' rx=\'3\' fill=\'%232271b1\'/%3E%3Cpath d=\'M4 8.5L7 11.5L12 6.5\' stroke=\'white\' stroke-width=\'2\'/%3E%3C/svg%3E")'
                        : 'none',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  />
                </th>
                <th className="px-3 py-2 text-left align-middle border-b border-gray-300 text-[#2271b1] font-semibold">
                  <div className="flex items-center gap-1">
                    Title
                    <span className="flex flex-col text-xs text-gray-400 ml-1">
                      <span className="leading-none">▲</span>
                      <span className="leading-none">▼</span>
                    </span>
                  </div>
                </th>
               
                <th className="px-3 py-2 text-left align-middle border-b border-gray-300 text-[#2271b1] font-semibold">
                  <div className="flex items-center gap-1">
                    Author
                    <span className="flex flex-col text-xs text-gray-400 ml-1">
                      <span className="leading-none">▲</span>
                      <span className="leading-none">▼</span>
                    </span>
                  </div>
                </th>
                 <th className="px-3 py-2 text-center align-middle border-b border-gray-300 w-12">
                 <div className="flex items-center gap-1 px-3 py-2">
                  <i class="fa-solid fa-message"></i>
                    <span className="flex flex-col text-xs text-gray-400 ml-1">
                      <span className="leading-none">▲</span>
                      <span className="leading-none">▼</span>
                    </span>
                    </div>
                </th>
                <th className="px-3 py-2 text-left align-middle border-b border-gray-300 text-[#2271b1] font-semibold">
                  <div className="flex items-center gap-1">
                    Date
                    <span className="flex flex-col text-xs text-gray-400 ml-1">
                      <span className="leading-none">▲</span>
                      <span className="leading-none">▼</span>
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className='border-1'>
              {filteredPosts.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center bg-gray-200 text-gray-500 py-2">No pages found.</td>
                </tr>
              ) : (
                filteredPosts.map((post, idx) => (
                  <tr key={post.id} className={idx % 2 === 1 ? "bg-white" : "bg-[#f6f7f7]"}>
                    <td className="px-3 py-2 align-middle">
                      <input
                        type="checkbox"
                        checked={selectedPosts.includes(post.id)}
                        onChange={() => handleSelectPost(post.id)}
                        className="appearance-none w-4 h-4   border-1 border-gray-400 rounded-sm checked: checked:border-[#2271b1] focus:ring-0 focus:outline-none cursor-pointer"
                        style={{
                          backgroundImage: selectedPosts.includes(post.id)
                            ? 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'16\' height=\'16\' rx=\'3\' fill=\'%232271b1\'/%3E%3Cpath d=\'M4 8.5L7 11.5L12 6.5\' stroke=\'white\' stroke-width=\'2\'/%3E%3C/svg%3E")'
                            : 'none',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center',
                        }}
                      />
                    </td>
                    <td className="px-3 py-2 align-middle">
                      <a href={`#edit=${post.id}`} className="text-blue-700 hover:underline font-medium">
                        {post.title}
                      </a>
                      {post.status !== 'publish' && (
                        <span className="ml-2 text-xs text-gray-500">— {post.status.charAt(0).toUpperCase() + post.status.slice(1)}</span>
                      )}
                    </td>
                  
                    <td className="px-3 py-2 align-middle text-blue-700 cursor-pointer hover:underline">root</td>
                      <td className="px-3 py-2 text-center align-middle text-gray-700">—</td>
                    <td className="px-3 py-2 align-middle text-gray-700">
                      {post.status === 'publish' ? (
                        <span>Published<br /><span className="text-xs text-gray-500">2025/07/08 at 11:19 am</span></span>
                      ) : (
                        <span>Last Modified<br /><span className="text-xs text-gray-500">2025/07/08 at 11:19 am</span></span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
             <thead className="bg-white border-1">
              <tr>
                <th className="px-3 py-2 w-8 align-middle border-b border-gray-300">
                  <input
                    type="checkbox"
                    className="appearance-none w-4 h-4 border-1 border-gray-400 rounded-sm checked:bg-[#2271b1] checked:border-[#2271b1] focus:ring-0 focus:outline-none cursor-pointer"
                    checked={selectedPosts.length === filteredPosts.length && filteredPosts.length > 0}
                    onChange={handleSelectAll}
                    style={{
                      backgroundImage: (selectedPosts.length === filteredPosts.length && filteredPosts.length > 0)
                        ? 'url("data:image/svg+xml,%3Csvg width=\'16\' height=\'16\' viewBox=\'0 0 16 16\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Crect width=\'16\' height=\'16\' rx=\'3\' fill=\'%232271b1\'/%3E%3Cpath d=\'M4 8.5L7 11.5L12 6.5\' stroke=\'white\' stroke-width=\'2\'/%3E%3C/svg%3E")'
                        : 'none',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  />
                </th>
                <th className="px-3 py-2 text-left align-middle border-b border-gray-300 text-[#2271b1] font-semibold">
                  <div className="flex items-center gap-1">
                    Title
                    <span className="flex flex-col text-xs text-gray-400 ml-1">
                      <span className="leading-none">▲</span>
                      <span className="leading-none">▼</span>
                    </span>
                  </div>
                </th>
               
                <th className="px-3 py-2 w-30 text-left align-middle border-b border-gray-300 text-[#2271b1] font-semibold">
                  <div className="flex items-center gap-1">
                    Author
                    <span className="flex flex-col text-xs text-gray-400 ml-1">
                      <span className="leading-none">▲</span>
                      <span className="leading-none">▼</span>
                    </span>
                  </div>
                </th>
                 <th className="px-3 py-2 w-0 text-center align-middle border-b border-gray-300 w-12">
                  <div className="flex items-center gap-1 px-3 py-2">
                  <i class="fa-solid fa-message"></i>
                    <span className="flex flex-col text-xs text-gray-400 ml-1">
                      <span className="leading-none">▲</span>
                      <span className="leading-none">▼</span>
                    </span>
                    </div>
                </th>
                <th className="px-3 py-2 text-left w-45 align-middle border-b border-gray-300 text-[#2271b1] font-semibold">
                  <div className="flex items-center gap-1">
                    Date
                    <span className="flex flex-col text-xs text-gray-400 ml-1">
                      <span className="leading-none">▲</span>
                      <span className="leading-none">▼</span>
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        {/* Bulk Actions Bottom */}
        <div className="flex items-center justify-between gap-2 mt-2">
          <div>
            <select className="border border-gray-300 rounded px-2 py-1 text-sm bg-white">
            <option>Bulk actions</option>
            <option>Edit</option>
            <option>Move to Trash</option>
          </select>
          <button className="px-3 py-1 bg-[#f6f7f7] border border-gray-300 rounded text-sm text-gray-700">Apply</button>
          </div>

            <div>{filteredPosts.length} items</div>
        </div>
        {/* Pagination and Item Count */}
        
      </div>
    </div>
  );
};

export default AllPage;