import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Logo from './Logo';
import { Menu, X, Home, Compass, LayoutDashboard, LogIn, LogOut, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check local storage or system preference for dark mode
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: Home, showAlways: true },
    { name: 'Services', path: '/services', icon: Compass, showAlways: true },
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard, showAlways: false },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="outline-none" onClick={() => setIsOpen(false)}>
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                (link.showAlways || isAuthenticated) && (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`font-medium text-sm transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
                      location.pathname === link.path ? 'text-primary-600 dark:text-primary-400 font-semibold' : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>

            <div className="flex items-center space-x-4 border-l border-slate-200 dark:border-slate-700 pl-6">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 focus:outline-none"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              {!isAuthenticated ? (
                <Link
                  to="/login"
                  className="flex items-center gap-2 bg-text-light dark:bg-white text-white dark:text-text-light px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-soft active:scale-95"
                >
                  <LogIn size={18} />
                  Login
                </Link>
              ) : (
                <button
                  onClick={logout}
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-danger-600 dark:hover:text-danger-500 font-medium text-sm transition-colors"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-primary-600 transition-colors focus:outline-none p-1"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass bg-white/95 dark:bg-slate-900/95 border-t border-slate-100 dark:border-slate-800 shadow-soft-lg pb-6 pt-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col px-6 space-y-4">
            {navLinks.map((link) => (
              (link.showAlways || isAuthenticated) && (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 py-3 font-medium text-base border-b border-slate-100 dark:border-slate-800/50 ${
                    location.pathname === link.path ? 'text-primary-600 dark:text-primary-400' : 'text-slate-600 dark:text-slate-300'
                  }`}
                >
                  <link.icon size={20} className={location.pathname === link.path ? 'text-primary-600' : 'text-slate-400'} />
                  {link.name}
                </Link>
              )
            ))}
            
            <div className="pt-4">
              {!isAuthenticated ? (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full gap-2 bg-primary-600 text-white px-5 py-3 rounded-xl font-medium shadow-soft"
                >
                  <LogIn size={20} />
                  Login / Sign Up
                </Link>
              ) : (
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="flex items-center justify-center w-full gap-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-danger-600 px-5 py-3 rounded-xl font-medium transition-colors"
                >
                  <LogOut size={20} />
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
