import React from 'react';
import { Bell, User, LogOut, Search, Sparkles } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

interface NavbarProps {
  activeTab: string;
}

export default function Navbar({ activeTab }: NavbarProps) {
  const { user, logout } = useAuth();

  const getPageTitle = (tab: string) => {
    const titles: Record<string, string> = {
      dashboard: 'AI Dashboard',
      projects: 'My Projects',
      tools: 'AI Tools',
      directory: 'Multi-Type Submission',
      reports: 'Analytics Reports',
      pricing: 'Pricing Plans',
      profile: 'Profile Settings',
      admin: 'Admin Panel'
    };
    return titles[tab] || 'AI Dashboard';
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'free': return 'text-gray-600';
      case 'basic': return 'text-blue-600';
      case 'premium': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  const getPlanBadge = (plan: string) => {
    switch (plan) {
      case 'free': return 'bg-gray-100 text-gray-700';
      case 'basic': return 'bg-blue-100 text-blue-700';
      case 'premium': return 'bg-purple-100 text-purple-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <header className="light-navbar px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{getPageTitle(activeTab)}</h1>
          <p className="text-sm text-gray-600 mt-1">
            Welcome back, <span className="text-blue-600">{user?.name || 'User'}</span>
          </p>
        </div>

        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 glass border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all"
            />
          </div>

          {/* Notifications */}
          <button className="relative p-2 text-gray-500 hover:text-gray-900 transition-colors glass rounded-xl hover:bg-white/50">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
          </button>

          {/* User Menu */}
          <div className="relative group">
            <button className="flex items-center space-x-3 p-2 rounded-xl glass hover:bg-white/50 transition-colors">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                <div className="flex items-center space-x-2">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getPlanBadge(user?.subscription || 'free')}`}>
                    {user?.subscription?.toUpperCase()} PLAN
                  </span>
                </div>
              </div>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-48 glass-card rounded-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <div className="px-4 py-2 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                  <p className="text-xs text-gray-500">{user?.email}</p>
                </div>
                <button
                  onClick={logout}
                  className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-white/50 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}