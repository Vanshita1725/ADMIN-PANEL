import { useState } from 'react';
import { FaSearch, FaExternalLinkAlt, FaChevronDown } from 'react-icons/fa';
import Header from './Header';
import Sidebar from './Sidebar';

const EditPostsScreen = () => {
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
    <div className="wp-admin bg-gray-200 min-h-screen">
      <Header />
      <Sidebar />
      <div className="ml-48 pt-12 px-4 max-w-screen-2xl">
        {/* Header Section (Page Title and Actions) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-semibold text-gray-900">Pages</h1>
            <a 
              href="#post-new" 
              className="px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded hover:bg-blue-50 text-sm"
            >
              Add Page
            </a>
          </div>
          <div className="flex gap-3 items-center">
            <button 
              onClick={() => setShowScreenOptions(!showScreenOptions)}
              className="text-gray-600 hover:text-gray-900 bg-white text-sm flex items-center gap-1 px-3 py-2 border border-gray-300 rounded"
            >
              Screen Options <FaChevronDown className="text-xs" />
            </button>
            {showScreenOptions && (
              <div className="absolute right-4 mt-8 w-56 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                <div className="px-4 py-2 text-sm bg-white text-gray-700 border-b">Screen Options</div>
                <div className="px-4 py-2 text-sm text-gray-700">Help</div>
              </div>
            )}
          </div>
        </div>
        {/* ...existing code... */}
        {/* Status tabs, Bulk actions, Table, Pagination remain unchanged */}
        <div className="mb-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <ul className="subsubsub flex flex-wrap gap-2 text-sm">
            {Object.entries({
              all: 'All',
              publish: 'Published',
              draft: 'Draft',
              future: 'Scheduled',
              trash: 'Trash'
            }).map(([key, label]) => (
              <li key={key} className="flex items-center gap-2">
                {key !== 'all' && <span className="text-gray-300">|</span>}
                <button 
                  onClick={() => setFilterStatus(key)}
                  className={`px-2 py-1 rounded ${filterStatus === key ? 'font-medium text-blue-600 bg-white border border-gray-300' : 'text-gray-600 hover:text-blue-600 bg-transparent'}`}
                >
                  {label} <span className="count">({statusCounts[key]})</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <div className="relative">
              <input 
                type="search" 
                placeholder="Search pages..." 
                className="pl-3 pr-8 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm w-full bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute right-2.5 top-2.5 text-gray-400" />
            </div>
          </div>
        </div>
        <div className="mb-4 flex items-center gap-3">
          <div className="relative">
            <button 
              onClick={() => setShowBulkActions(!showBulkActions)}
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 flex items-center gap-1"
            >
              Bulk actions <FaChevronDown className="text-xs" />
            </button>
            {showBulkActions && (
              <div className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                <button 
                  onClick={() => handleBulkAction('edit')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 bg-white"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleBulkAction('trash')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 bg-white"
                >
                  Move to Trash
                </button>
              </div>
            )}
          </div>
          <select 
            className="block pl-3 pr-10 py-2 text-sm border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 rounded-md bg-white"
          >
            <option>All dates</option>
            <option>Last 24 hours</option>
            <option>Last 7 days</option>
          </select>
          <button 
            className="px-3 py-2 bg-white text-gray-700 rounded-md text-sm hover:bg-gray-50 border border-gray-300"
          >
            Filter
          </button>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-8">
                  <input 
                    type="checkbox" 
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    checked={selectedPosts.length === filteredPosts.length && filteredPosts.length > 0}
                    onChange={handleSelectAll}
                  />
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPosts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50 group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input 
                      type="checkbox" 
                      checked={selectedPosts.includes(post.id)}
                      onChange={() => handleSelectPost(post.id)}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-gray-900">
                        <a href={`#edit=${post.id}`} className="text-blue-600 hover:text-blue-800">
                          {post.title}
                        </a>
                        {post.status !== 'publish' && (
                          <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-600 rounded">
                            {post.status}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="mt-1 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a href={`#edit=${post.id}`} className="text-xs text-gray-600 hover:text-blue-600">Edit</a>
                      <span className="text-gray-300">|</span>
                      <button 
                        onClick={() => setShowQuickEdit(true)}
                        className="text-xs text-gray-600 hover:text-blue-600"
                      >
                        Quick Edit
                      </button>
                      <span className="text-gray-300">|</span>
                      <a href="#" className="text-xs text-gray-600 hover:text-blue-600">Trash</a>
                      <span className="text-gray-300">|</span>
                      <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-xs text-gray-600 hover:text-blue-600 flex items-center">
                        Preview <FaExternalLinkAlt className="ml-1 text-xs" />
                      </a>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {post.author}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {post.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
          <div>2 items</div>
          <div className="flex gap-1 mt-2 sm:mt-0">
            <button className="px-3 py-1 rounded border border-gray-300 bg-white hover:bg-gray-50">First</button>
            <button className="px-3 py-1 rounded border border-gray-300 bg-white hover:bg-gray-50">Previous</button>
            <span className="px-3 py-1 bg-white rounded border border-gray-300">1</span>
            <button className="px-3 py-1 rounded border border-gray-300 bg-white hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPostsScreen;