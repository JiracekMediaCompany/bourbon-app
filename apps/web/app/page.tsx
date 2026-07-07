'use client';

import { useState, useRef, useEffect } from 'react';
import { BourbonAppLogo } from './components/BourbonAppLogo';
import { Scoreboard } from './components/Scoreboard';

export default function Home() {
  const [activePage, setActivePage] = useState('home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'bourbon', label: 'Bourbon' },
    { id: 'activity', label: 'Activity' },
    { id: 'community', label: 'Community Chat' },
    { id: 'ranking', label: 'Ranking' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const renderContent = () => {
    const contentMap: Record<string, string> = {
      home: 'Welcome to the Home Page',
      bourbon: 'Bourbon Collection',
      activity: 'Your Activity',
      community: 'Community Chat',
      ranking: 'Rankings',
    };
    return contentMap[activePage] || 'Select a page';
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Navigation Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b">
          <BourbonAppLogo />
        </div>
        <nav className="p-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-colors ${
                activePage === item.id
                  ? 'bg-amber-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm">
          <div className="px-8 py-4 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">{renderContent()}</h2>
            
            {/* User Icon and Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700">
                    Profile
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700">
                    Settings
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 border-t">
                    Sign In
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>
        <main className="flex-1 p-8">
          <div className="bg-white rounded-lg shadow p-8">
            {activePage === 'ranking' ? (
              <Scoreboard />
            ) : (
              <p className="text-gray-600">Content for {renderContent()} goes here</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
