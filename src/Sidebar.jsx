
import React, { useState, useEffect, useRef } from 'react';
import { Tooltip } from 'bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const tooltipRefs = useRef([]);
  const navigate = useNavigate();
  // Close sidebar on route change (mobile)
  useEffect(() => {
    if (isMobileOpen) {
      const handleResize = () => {
        if (window.innerWidth >= 768) setIsMobileOpen(false);
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isMobileOpen]);

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
        { label: 'Add Media File', to: '/NewMedia' }
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
        { label: 'Available Tools', to: '/Tools ' },
        { label: 'Import', to: '/Import' },
        { label: 'Export', to: '/Export' },
        { label: 'Site Health', to: '/Sitehealth' },
        { label: 'Export Personal Data', to: '/ExportPersonalData' },
        { label: 'Erase Personal Data', to: '/ErasePersonalData' },
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
        padding:  0;
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

  const openMobileSidebar = () => setIsMobileOpen(true);
  const closeMobileSidebar = () => setIsMobileOpen(false);

  const handleMenuClick = (item, index) => {
    if (item.dropdown && item.dropdown.length > 0) {
      // Always open dropdown and navigate to first subitem
      setOpenDropdown(index);
      if (item.dropdown[0].to) {
        navigate(item.dropdown[0].to);
      }
    } else if (item.to) {
      navigate(item.to);
      setOpenDropdown(null);
    }
  };

  return (
    <>
      {/* Off-canvas Toggle Button for mobile, tablet, and md screens (moved to top-right) */}
      <button
        className="lg:hidden fixed top-8 right-4 z-50  text-black p-2 rounded shadow-"
        onClick={openMobileSidebar}
        aria-label="Open sidebar"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Off-canvas sidebar for mobile, tablet, and md screens */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${isMobileOpen ? '' : 'pointer-events-none'}`}
        aria-hidden={!isMobileOpen}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 opacity-40 transition-opacity duration-300 ${isMobileOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={closeMobileSidebar}
        />
        {/* Sidebar */}
        <aside
          className={`bg-[#23282d] text-white fixed top-10 left-0 h-full w-full max-w-xs shadow-lg transition-transform duration-300 ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
          style={{ overflowY: 'auto', scrollbarWidth: 'thin' }}
        >
          <button
            className="absolute top-4 right-4 text-white text-xl"
            onClick={closeMobileSidebar}
            aria-label="Close sidebar"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <ul className="flex flex-col gap-1 mt-10 px-2">
            {menuItems.map((item, idx) => (
              <li key={item.label} className="nav-item text-sm flex flex-col gap-1 relative">
                <div
                  ref={el => tooltipRefs.current[idx] = el}
                  className={`flex items-center no-underline text-white gap-2 cursor-pointer py-2 px-2 hover:bg-[#32373c] rounded`}
                  onClick={() => handleMenuClick(item, idx)}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {/* Dropdown below the item */}
                {openDropdown === idx && item.dropdown && (
                  <ul className="mt-1 ps-0 mb-2">
                    {item.dropdown.map((subItem, subIdx) => (
                      <li key={subIdx}>
                        <Link
                          to={subItem.to}
                          className="text-sm !no-underline !text-white hover:bg-[#32373c] rounded"
                          onClick={() => setOpenDropdown(null)}
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
              <span>Collapse Menu</span>
            </li>
          </ul>
        </aside>
      </div>

      {/* Desktop sidebar for lg and up */}
      <aside
        className={`bg-[#23282d] text-white fixed top-10 py-4 left-0 hidden lg:flex flex-col shadow-lg transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-46'}`}
        style={{ height: 'calc(100vh - 2rem)', overflowY: 'auto', scrollbarWidth: 'thin' }}
      >
        <ul className="flex flex-col gap-1 mt-1 px-2">
          {menuItems.map((item, idx) => (
            <li key={item.label} className="nav-item text-sm flex flex-col gap-1 relative">
              <div
                ref={el => tooltipRefs.current[idx] = el}
                className={`flex items-center no-underline text-white gap-2 cursor-pointer py-2 px-2 hover:bg-[#2a6cafff]  ${isCollapsed ? 'justify-center' : ''}`}
                onClick={() => handleMenuClick(item, idx)}
              >
                <span>{item.icon}</span>
                {!isCollapsed && <span>{item.label}</span>}
              </div>
              {/* Dropdown below the item */}
              {!isCollapsed && openDropdown === idx && item.dropdown && (
                <ul className="mt-1 p-0 mb-2">
                  {item.dropdown.map((subItem, subIdx) => (
                    <li key={subIdx}>
                      <Link
                        to={subItem.to}
                        className="block py-1 text-sm !no-underline bg-[#34383dff] !text-white hover:bg-[#2a6cafff]  px-2"
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
            {!isCollapsed && <span>Collapse Menu</span>}
          </li>
        </ul>
      </aside>
    </>
  )
}

export default Sidebar;