import React from 'react';
import { 
  LayoutDashboard, 
  FolderOpen, 
  Wrench, 
  Send, 
  FileText, 
  CreditCard, 
  Settings, 
  Shield,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  isAdmin?: boolean;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'projects', label: 'My Projects', icon: FolderOpen },
  { id: 'tools', label: 'AI Tools', icon: Wrench },
  { id: 'directory', label: 'Multi-Submission', icon: Send },
  { id: 'reports', label: 'Reports', icon: FileText },
  { id: 'pricing', label: 'Pricing', icon: CreditCard },
  { id: 'profile', label: 'Settings', icon: Settings },
];

const adminItems = [
  { id: 'admin', label: 'Admin Panel', icon: Shield },
];

export default function Sidebar({ activeTab, setActiveTab, isCollapsed, setIsCollapsed, isAdmin }: SidebarProps) {
  const allMenuItems = isAdmin ? [...menuItems, ...adminItems] : menuItems;

  return (
    <div className={`light-sidebar transition-all duration-300 flex flex-col ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Logo Section */}
      <div className="p-4 border-b border-blue-100">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-xl gradient-text">OPPTYM</span>
                <p className="text-xs text-gray-500 -mt-1">AI-Smart Marketing</p>
              </div>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded-lg glass hover:bg-white/50 transition-colors"
          >
            {isCollapsed ? (
              <ChevronRight className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronLeft className="w-5 h-5 text-gray-500" />
            )}
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {allMenuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'group-hover:text-blue-500'} transition-colors`} />
                  {!isCollapsed && (
                    <span className="font-medium">{item.label}</span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Upgrade Banner */}
      {!isCollapsed && (
        <div className="p-4 border-t border-blue-100">
          <div className="glass-card rounded-xl p-4 shadow-lg">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Upgrade to Pro</h4>
              <p className="text-sm text-gray-600 mb-3">
                Unlock AI-powered features and unlimited submissions
              </p>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm py-2 px-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 btn-glow">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}