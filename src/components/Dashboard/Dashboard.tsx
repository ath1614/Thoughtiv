import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Globe, 
  BarChart3, 
  ArrowUpRight, 
  ArrowDownRight,
  Target,
  CheckCircle,
  Clock,
  AlertCircle,
  Sparkles,
  Brain,
  Zap,
  Rocket
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

interface DashboardProps {
  onFeatureRestricted: () => void;
}

export default function Dashboard({ onFeatureRestricted }: DashboardProps) {
  const { user } = useAuth();
  const isFreePlan = user?.subscription === 'free';

  const stats = [
    {
      title: 'AI Projects',
      value: isFreePlan ? '3/5' : '12',
      change: '+2.5%',
      trend: 'up',
      icon: Globe,
      color: 'text-blue-600',
      bgGradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Active Submissions',
      value: isFreePlan ? '8/10' : '48',
      change: '+12.3%',
      trend: 'up',
      icon: Target,
      color: 'text-green-600',
      bgGradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'AI Insights',
      value: isFreePlan ? 'Upgrade' : '2.4K',
      change: '+8.7%',
      trend: 'up',
      icon: Brain,
      color: 'text-purple-600',
      bgGradient: 'from-purple-500 to-pink-500',
      restricted: isFreePlan
    },
    {
      title: 'Success Rate',
      value: isFreePlan ? 'Premium' : '94.2%',
      change: '-0.8%',
      trend: 'down',
      icon: BarChart3,
      color: 'text-orange-600',
      bgGradient: 'from-orange-500 to-red-500',
      restricted: isFreePlan
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: 'AI optimized "E-commerce Store" and submitted to 5 directories',
      time: '2 hours ago',
      status: 'success',
      icon: CheckCircle
    },
    {
      id: 2,
      action: 'AI keyword analysis completed for "Tech Blog"',
      time: '4 hours ago',
      status: 'success',
      icon: Brain,
      restricted: isFreePlan
    },
    {
      id: 3,
      action: 'Directory submission pending AI approval',
      time: '6 hours ago',
      status: 'warning',
      icon: Clock
    },
    {
      id: 4,
      action: 'AI detected optimization opportunity',
      time: '1 day ago',
      status: 'info',
      icon: Sparkles,
      restricted: isFreePlan
    }
  ];

  const topDirectories = [
    { name: 'Google My Business', submissions: 45, success: 42, aiScore: 98 },
    { name: 'Bing Places', submissions: 38, success: 35, aiScore: 95 },
    { name: 'Yahoo Local', submissions: 32, success: 28, aiScore: 87 },
    { name: 'Foursquare', submissions: 28, success: 25, aiScore: 92 },
    { name: 'Yelp Business', submissions: 24, success: 22, aiScore: 89 }
  ];

  const handleRestrictedClick = () => {
    onFeatureRestricted();
  };

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Welcome to OPPTYM</h2>
            <p className="text-blue-600">AI-Smart Marketing Dashboard</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          Your AI-powered SEO automation is working 24/7 to boost your rankings and drive organic traffic.
        </p>
        {isFreePlan && (
          <div className="bg-white/70 rounded-xl p-4 border border-purple-200">
            <div className="flex items-center space-x-3">
              <Rocket className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-gray-900 font-medium">You're on the Starter plan</p>
                <p className="text-sm text-gray-600">Upgrade to unlock AI-powered features and unlimited submissions.</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          
          return (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 card-hover ${
                stat.restricted ? 'cursor-pointer' : ''
              }`}
              onClick={stat.restricted ? handleRestrictedClick : undefined}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.bgGradient} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className={`flex items-center space-x-1 text-sm ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {!stat.restricted && (
                    <>
                      {stat.trend === 'up' ? (
                        <ArrowUpRight className="w-4 h-4" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4" />
                      )}
                      <span>{stat.change}</span>
                    </>
                  )}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 text-sm">{stat.title}</p>
              {stat.restricted && (
                <div className="mt-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-700 border border-purple-200">
                    AI Premium Feature
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <Clock className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">AI Activity Feed</h3>
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity) => {
              const Icon = activity.icon;
              const statusColors = {
                success: 'text-green-600',
                warning: 'text-yellow-600',
                error: 'text-red-600',
                info: 'text-blue-600'
              };

              return (
                <div 
                  key={activity.id} 
                  className={`flex items-start space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors ${
                    activity.restricted ? 'cursor-pointer opacity-60' : ''
                  }`}
                  onClick={activity.restricted ? handleRestrictedClick : undefined}
                >
                  <Icon className={`w-5 h-5 mt-0.5 ${statusColors[activity.status as keyof typeof statusColors]}`} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                  {activity.restricted && (
                    <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full border border-purple-200">
                      AI Premium
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Top Directories */}
        <div className="bg-white rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Target className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">AI Optimized Directories</h3>
          </div>
          <div className="space-y-4">
            {topDirectories.map((directory, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900">{directory.name}</span>
                  <div className="text-right">
                    <span className="text-xs text-gray-500">
                      {directory.success}/{directory.submissions}
                    </span>
                    <div className="flex items-center space-x-1 mt-1">
                      <Sparkles className="w-3 h-3 text-blue-500" />
                      <span className="text-xs text-blue-600">{directory.aiScore}% AI</span>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${(directory.success / directory.submissions) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">AI Quick Actions</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105 card-hover">
            <Globe className="w-8 h-8 mb-3" />
            <span className="block text-sm font-medium">New AI Project</span>
            <span className="block text-xs opacity-80 mt-1">AI-powered setup</span>
          </button>
          <button className="p-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:shadow-lg transition-all duration-200 transform hover:scale-105 card-hover">
            <Target className="w-8 h-8 mb-3" />
            <span className="block text-sm font-medium">AI Multi-Submit</span>
            <span className="block text-xs opacity-80 mt-1">Smart automation</span>
          </button>
          <button 
            className={`p-6 rounded-xl transition-all duration-200 transform hover:scale-105 card-hover ${
              isFreePlan 
                ? 'bg-gray-100 text-gray-600 cursor-pointer border border-purple-200' 
                : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg'
            }`}
            onClick={isFreePlan ? handleRestrictedClick : undefined}
          >
            <Brain className="w-8 h-8 mb-3" />
            <span className="block text-sm font-medium">
              {isFreePlan ? 'AI Audit (Premium)' : 'AI SEO Audit'}
            </span>
            <span className="block text-xs opacity-80 mt-1">
              {isFreePlan ? 'Unlock with upgrade' : 'Deep AI analysis'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}