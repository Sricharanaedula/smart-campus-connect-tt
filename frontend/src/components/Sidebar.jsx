import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ClipboardList, 
  Calendar, 
  BookOpen, 
  Building, 
  Bell, 
  Settings,
  Menu,
  X
} from 'lucide-react';
import Logo from './Logo';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'My Requests', path: '/requests', icon: ClipboardList },
    { label: 'Appointments', path: '/appointments', icon: Calendar },
    { label: 'Documents', path: '/documents', icon: BookOpen },
    { label: 'Facilities', path: '/facilities', icon: Building },
    { label: 'Notifications', path: '/notifications', icon: Bell },
  ];

  const bottomMenuItems = [
    { label: 'Settings', path: '/settings', icon: Settings },
  ];

  const isActive = (path) => location.pathname === path;

  const navigateTo = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="bg-primary-600 text-white p-4 rounded-full shadow-soft-lg hover:bg-primary-700 transition-transform active:scale-95"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen z-40 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-all duration-300 flex flex-col pt-0
          ${isOpen ? 'w-64' : 'w-20'}
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className="h-20 flex items-center justify-between px-4 border-b border-slate-100 dark:border-slate-800/50">
          <div className="flex-shrink-0 cursor-pointer overflow-hidden whitespace-nowrap" onClick={() => navigateTo('/')}>
            {isOpen ? <Logo className="scale-90 origin-left" /> : <Logo className="scale-75 origin-left -ml-2" />}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto w-full py-6 flex flex-col gap-1 px-3 custom-scrollbar">
          <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2 px-3">
            {isOpen ? 'Overview' : '•••'}
          </div>
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigateTo(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group ${
                isActive(item.path)
                  ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
              title={!isOpen ? item.label : ''}
            >
              <item.icon size={22} className={isActive(item.path) ? 'text-primary-600 dark:text-primary-400' : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300'} />
              {isOpen && <span className="whitespace-nowrap">{item.label}</span>}
              
              {isOpen && item.label === 'Notifications' && (
                 <span className="ml-auto bg-danger-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">3</span>
              )}
            </button>
          ))}
          
          <div className="mt-auto"></div>
          <div className="mb-4 mt-8 h-px bg-slate-200 dark:bg-slate-800/60 w-full" />
          
          {bottomMenuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigateTo(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group ${
                isActive(item.path)
                  ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
              title={!isOpen ? item.label : ''}
            >
              <item.icon size={22} className={isActive(item.path) ? 'text-primary-600 dark:text-primary-400' : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300'} />
              {isOpen && <span className="whitespace-nowrap">{item.label}</span>}
            </button>
          ))}
        </div>

        {/* Desktop Collapse Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hidden md:flex absolute -right-4 top-24 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 w-8 h-8 rounded-full items-center justify-center text-slate-500 hover:text-primary-600 hover:border-primary-600 transition-all shadow-sm z-50 focus:outline-none"
        >
          {isOpen ? <X size={14} className="opacity-70" /> : <Menu size={14} className="opacity-70" />}
        </button>
      </aside>
    </>
  );
}
