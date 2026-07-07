'use client';

import { useState } from 'react';

export default function Home() {
  const [activePage, setActivePage] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'bourbon', label: 'Bourbon' },
    { id: 'activity', label: 'Activity' },
    { id: 'community', label: 'Community Chat' },
    { id: 'ranking', label: 'Ranking' },
  ];

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
          <h1 className="text-2xl font-bold text-gray-800">Bourbon App</h1>
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
          <div className="px-8 py-4">
            <h2 className="text-xl font-semibold text-gray-800">{renderContent()}</h2>
          </div>
        </header>
        <main className="flex-1 p-8">
          <div className="bg-white rounded-lg shadow p-8">
            <p className="text-gray-600">Content for {renderContent()} goes here</p>
          </div>
        </main>
      </div>
    </div>
  );
}
