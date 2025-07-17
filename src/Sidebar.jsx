
import React, { useState, useEffect, useRef } from 'react';
import { Tooltip } from 'bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const tooltipRefs = useRef([]);
  const navigate = useNavigate();

  const menuItems = [
    { 
      label: 'Dashboard', 
      icon: <i className="fa-solid fa-gauge"></i>, 
      dropdown: [
        { label: 'Home', to: '/Home' },
        { label: 'Updates', to: '/Dashbordupdated' }
      ] 
    },
    { 
      label: 'Posts', 
      icon: <i className="fa-solid fa-thumbtack"></i>, 
      dropdown: [
        { label: 'All Posts', to: '/Allpost' },
        { label: 'Add Post', to: '/Addpost' },
        { label: 'Categories', to: '/Categories' },
        { label: 'Tags', to: '/Posttage' }
      ] 
    },
    { 
      label: 'Media', 
      icon: <i className="fa-solid fa-photo-film"></i>,
      dropdown: [
        { label: 'Library', to: '/Library' },
        { label: 'Add Media File', to: '/MediaNew' }
      ] 
    },
    { 
      label: 'Pages', 
      icon: <ion-icon name="copy-outline"></ion-icon>,
      dropdown: [
        { label: 'All Page', to: '/Allpage' },
        { label: 'Add Page', to: '/Addpage' }
      ] 
    },
    { 
      label: 'Comments', 
      to: '/Comments', 
      icon: <ion-icon name="chatbox-outline"></ion-icon> 
    },
    { 
      label: 'Appearance', 
      icon:<i className="fa-solid fa-brush"></i>, 
      dropdown: [
        { label: 'Themes', to: '/Themes' },
        { label: 'Editor', to: '/Editor' }
      ] 
    },
    { 
      label: 'Plugins', 
      icon: <i className="fa-solid fa-plug"></i>, 
      dropdown: [
        { label: 'Installed Plugins', to: '/Installpligins' },
        { label: 'Add Plugins', to: '/Addplugins' },
        
      ] 
    },
    { 
      label: 'Users', 
      icon: <i className="fa-solid fa-user"></i>, 
      dropdown: [
        { label: 'All User', to: '/Alluser' },
        { label: 'Add User',  to: '/Adduser' },
        { label: 'Profile', to: '/Profile' }
      ] 
    },
    { 
      label: 'Tools', 
      icon: <i className="fa-solid fa-wrench"></i>, 
      dropdown: [
        { label: 'Available Tools', to: '/posts/all' },
        { label: 'Import', to: '/posts/add' },
        { label: 'Export', to: '/posts/categories' },
        { label: 'Site Health', to: '/posts/tags' },
        { label: 'Export Personal Data', to: '/posts/all' },
        { label: 'Erase Personal Data', to: '/posts/add' },
        { label: 'Theme File Editor', to: '/posts/categories' },
        { label: 'Plugin File Editor', to: '/posts/tags' }
      ] 
    },
    { 
      label: 'Setting', 
      icon: <i className="fa-solid fa-sliders"></i>, 
      dropdown: [
        { label: 'General', to: '/GeneralSettings' },
        { label: 'Writing', to: '/WritingSettings' },
        { label: 'Reading', to: '/ReadingSettings' },
        { label: 'Discussion', to: '/DiscussionSettings' },
        { label: 'Media', to: '/MediaSettings' },
        { label: 'Permalinks', to: '/PermalinkSettings' },
        { label: 'Privacy', to: '/PrivacySettings' }
      ] 
    }
  ];

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
    setOpenDropdown(null); // close any open dropdown
  };

  const handleMenuClick = (item, index) => {
    if (item.dropdown) {
      navigate(item.dropdown[0].to); // navigate to first sub-page
      setOpenDropdown(index); // always open dropdown regardless of collapsed
    } else if (item.to) {
      navigate(item.to);
      setOpenDropdown(null);
    }
  };

  return (
    <aside 
      className={`bg-[#23282d] text-white fixed top-10 py-4 left-0 flex flex-col shadow-lg transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-46'}`}
      style={{ height: 'calc(100vh - 2rem)', overflowY: 'auto', scrollbarWidth: 'thin' }}
    >
      <ul className="flex flex-col gap-1 mt-1 px-2">
        {menuItems.map((item, idx) => (
          <li key={item.label} className="nav-item text-sm flex flex-col gap-1 relative">
            <div
              ref={el => tooltipRefs.current[idx] = el}
              className={`flex items-center no-underline text-white gap-2 cursor-pointer py-2 px-2 hover:bg-[#32373c] rounded ${isCollapsed ? 'justify-center' : ''}`}
              onClick={() => handleMenuClick(item, idx)}
            >
              <span>{item.icon}</span>
              {!isCollapsed && <span>{item.label}</span>}
            </div>

            {/* Dropdown below the item */}
            {!isCollapsed && openDropdown === idx && item.dropdown && (
              <ul className="mt-1 mb-2    ">
                {item.dropdown.map((subItem, subIdx) => (
                  <li key={subIdx}>
                    <Link 
                      to={subItem.to}
                      className="block py-1 text-sm !no-underline !text-white hover:bg-[#32373c] rounded px-2"
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

        <li className='nav-item px-2 flex text-sm gap-4 items-center'>
          <button 
            className='bg-transparent p-0'
            onClick={toggleSidebar}
          >
            <i className={`fa-solid fa-circle-chevron-${isCollapsed ? 'right' : 'left'}`}></i>
          </button> 
          {!isCollapsed && 'Collapse Menu'}
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
