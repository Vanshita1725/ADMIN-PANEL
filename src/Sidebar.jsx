import React, { useState, useEffect, useRef } from 'react';
import { Tooltip } from 'bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const tooltipRefs = useRef([]);
  
  const menuItems = [
    { 
      label: 'Dashboard', 
      to: '/Dashboard', 
      icon: <i className="fa-solid fa-gauge"></i>, 
      dropdown: [
        { label: 'Overview', to: '/Dashboard' },
        { label: 'Stats', to: '/dashboard/stats' },
        { label: 'Reports', to: '/dashboard/reports' }
      ] 
    },

    { 
      label: 'Posts', 
      to: '/posts', 
      icon: <i className="fa-solid fa-thumbtack"></i>, 
      dropdown: [
        { label: 'All Posts', to: '/posts/all' },
        { label: 'Add Post', to: '/posts/add' },
        { label: 'Categories', to: '/posts/categories' },
        { label: 'Tags', to: '/posts/tags' }
      ] 
    },

    { 
      label: 'Media', 
      to: '/Media', 
      icon: <i className="fa-solid fa-photo-film"></i>,
      dropdown: [
        { label: 'All Posts', to: '/posts/all' },
        { label: 'Add Post', to: '/posts/add' },
        { label: 'Categories', to: '/posts/categories' },
        { label: 'Tags', to: '/posts/tags' }
      ] 
    },

    { 
      label: 'Pages', 
      to: '/Pages', 
      icon:<ion-icon name="copy-outline"></ion-icon>,
      dropdown: [
        { label: 'All Posts', to: '/posts/all' },
        { label: 'Add Post', to: '/posts/add' },
        { label: 'Categories', to: '/posts/categories' },
        { label: 'Tags', to: '/posts/tags' }
      ] 
    },


    { 
      label: 'Comments', 
      to: '/Comments', 
      icon: <ion-icon name="chatbox-outline"></ion-icon>, 
      dropdown: [
        { label: 'All Posts', to: '/posts/all' },
        { label: 'Add Post', to: '/posts/add' },
        { label: 'Categories', to: '/posts/categories' },
        { label: 'Tags', to: '/posts/tags' }
      ] 
    },


    { 
      label: 'Appearance', 
      to: '/Appearance', 
      icon:<i className="fa-solid fa-brush"></i>, 
      dropdown: [
        { label: 'All Posts', to: '/posts/all' },
        { label: 'Add Post', to: '/posts/add' },
        { label: 'Categories', to: '/posts/categories' },
        { label: 'Tags', to: '/posts/tags' }
      ] 
    },


    { 
      label: 'Plugins', 
      to: '/Plugins', 
      icon: <i className="fa-solid fa-plug"></i>, 
      dropdown: [
        { label: 'All Posts', to: '/posts/all' },
        { label: 'Add Post', to: '/posts/add' },
        { label: 'Categories', to: '/posts/categories' },
        { label: 'Tags', to: '/posts/tags' }
      ] 
    },


    { 
      label: 'Users', 
      to: '/Users', 
      icon: <i className="fa-solid fa-user"></i>, 
      dropdown: [
        { label: 'All Posts', to: '/posts/all' },
        { label: 'Add Post', to: '/posts/add' },
        { label: 'Categories', to: '/posts/categories' },
        { label: 'Tags', to: '/posts/tags' }
      ] 
    },

    { 
      label: 'Tools', 
      to: '/Tools', 
      icon: <i className="fa-solid fa-wrench"></i>, 
      dropdown: [
        { label: 'All Posts', to: '/posts/all' },
        { label: 'Add Post', to: '/posts/add' },
        { label: 'Categories', to: '/posts/categories' },
        { label: 'Tags', to: '/posts/tags' }
      ] 
    },


    { 
      label: 'Setting', 
      to: '/Setting', 
      icon: <i className="fa-solid fa-sliders"></i>, 
      dropdown: [
        { label: 'General', to: '/GeneralSettings' },
        { label: 'Writting', to: '/WritingSettings' },
        { label: 'Reading', to: '/ReadingSettings' },
        { label: 'Discussion', to: '/DiscussionSettings' },
         { label: 'Media', to: '/MediaSettings' },
          { label: 'Permalinks', to: '/PermalinkSettings' },
           { label: 'Privacy', to: '/PrivacySettings' }

         
      ] 
    }
    // ... (rest of your menu items remain the same)
  ];

  // Initialize tooltips
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .tooltip-inner {
        background-color: #23282d;
        color: #f0f0f1;
        padding: 8px 12px;
        border-radius: 4px;
        text-align: left;
        max-width: 300px;
      }
      .bs-tooltip-end .tooltip-arrow::before {
        border-right-color: #23282d;
      }
      .tooltip-list {
        display: flex;
        flex-direction: column;
        gap: 4px;
        padding: 0;
        margin: 0;
        list-style: none;
      }
      .tooltip-list li {
        padding: 2px 0;
        white-space: nowrap;
      }
    `;
    document.head.appendChild(style);

    tooltipRefs.current.forEach((el, idx) => {
      if (el) {
        const item = menuItems[idx];
        if (item.dropdown) {
          el.setAttribute('data-bs-html', 'true');
          el.setAttribute('title', `
            <ul class="tooltip-list">
              ${item.dropdown.map(subItem => `<li>${subItem.label}</li>`).join('')}
            </ul>
          `);
        }
        new Tooltip(el, {
          trigger: 'hover',
          placement: 'right'
        });
      }
    });

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    // Close all dropdowns when collapsing
    if (!isCollapsed) {
      setOpenDropdown(null);
    }
  };

  return (
    <div>
      <aside 
        className={`bg-[#23282d] !text-white fixed top-10 py-4 left-0 flex flex-col shadow-lg transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-46'}`}
        style={{ height: 'calc(100vh - 2rem)', overflowY: 'auto', scrollbarWidth: 'thin' }}
      >
        <ul className="flex flex-col gap-1 mt-1 px-2">
          {menuItems.map((item, idx) => (
            <li key={item.label} className="nav-item !text-sm !text-white flex flex-col gap-1 relative">
              <Link
                to={item.to}
                ref={el => tooltipRefs.current[idx] = el}
                className={`flex items-center !text-white gap-2 cursor-pointer py-2 px-2 hover:bg-[#32373c] rounded ${isCollapsed ? 'justify-center' : ''}`}
                onClick={(e) => {
                  if (item.dropdown && !isCollapsed) {
                    e.preventDefault();
                    setOpenDropdown(openDropdown === idx ? null : idx);
                  }
                }}
              >
                <span className={`${isCollapsed ? 'mr-0' : 'mr-2'}`}>{item.icon}</span>
                {!isCollapsed && (
                  <>
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="flex bg-red-600 text-white !text-sm px-2 py-1 rounded-full ml-2">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </Link>
              
              {/* Dropdown with links - only show when not collapsed */}
              {!isCollapsed && openDropdown === idx && item.dropdown && (
                <ul className="mt-1 mb-2 bg-[#23282d] border-[#0073aa] rounded">
                  {item.dropdown.map((subItem, subIdx) => (
                    <li key={subIdx}>
                      <Link 
                        to={subItem.to}
                        className="block py-1 px-2 hover:bg-[#32373c] rounded cursor-pointer !text-sm !text-white"
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className='nav-item px-2 flex !text-sm gap-4 items-center'>
            <button 
              className='!bg-transparent !p-0'
              onClick={toggleSidebar}
            >
              <i className={`fa-solid fa-circle-chevron-${isCollapsed ? 'right' : 'left'}`}></i>
            </button> 
            {!isCollapsed && 'Collapse Menu'}
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;