import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  Eye, 
  Globe, 
  Calendar,
  Target,
  MoreVertical,
  Filter
} from 'lucide-react';
import { Project } from '../../types';

export default function MyProjects() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'E-commerce Store',
      url: 'https://example-store.com',
      keywords: ['online shopping', 'ecommerce', 'retail'],
      description: 'Main e-commerce website for online retail business',
      status: 'active',
      createdAt: '2024-01-15T10:00:00Z',
      lastUpdated: '2024-01-20T14:30:00Z'
    },
    {
      id: '2',
      title: 'Tech Blog',
      url: 'https://tech-insights.blog',
      keywords: ['technology', 'programming', 'software'],
      description: 'Technology blog focusing on software development',
      status: 'active',
      createdAt: '2024-01-10T09:15:00Z',
      lastUpdated: '2024-01-18T16:45:00Z'
    },
    {
      id: '3',
      title: 'Local Restaurant',
      url: 'https://best-pizza.local',
      keywords: ['pizza', 'restaurant', 'local dining'],
      description: 'Local restaurant website for online ordering',
      status: 'paused',
      createdAt: '2024-01-05T12:00:00Z',
      lastUpdated: '2024-01-15T11:20:00Z'
    }
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const [newProject, setNewProject] = useState({
    title: '',
    url: '',
    keywords: '',
    description: ''
  });

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.url.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || project.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    const project: Project = {
      id: Date.now().toString(),
      title: newProject.title,
      url: newProject.url,
      keywords: newProject.keywords.split(',').map(k => k.trim()),
      description: newProject.description,
      status: 'active',
      createdAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString()
    };
    
    setProjects([...projects, project]);
    setNewProject({ title: '', url: '', keywords: '', description: '' });
    setShowCreateModal(false);
  };

  const deleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">My Projects</h2>
          <p className="text-gray-600">Manage your SEO projects and track their performance</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>New Project</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="paused">Paused</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{project.title}</h3>
                    <p className="text-sm text-gray-500">{project.url}</p>
                  </div>
                </div>
                <div className="relative group">
                  <button className="p-1 hover:bg-gray-100 rounded-lg">
                    <MoreVertical className="w-4 h-4 text-gray-400" />
                  </button>
                  <div className="absolute right-0 top-8 bg-white border border-gray-200 rounded-lg shadow-lg w-32 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                    <button className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 flex items-center space-x-2">
                      <Eye className="w-3 h-3" />
                      <span>View</span>
                    </button>
                    <button className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 flex items-center space-x-2">
                      <Edit3 className="w-3 h-3" />
                      <span>Edit</span>
                    </button>
                    <button 
                      onClick={() => deleteProject(project.id)}
                      className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 text-red-600 flex items-center space-x-2"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="mb-4">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>

              {/* Keywords */}
              <div className="mb-4">
                <div className="flex items-center space-x-1 mb-2">
                  <Target className="w-4 h-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700">Keywords</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {project.keywords.slice(0, 3).map((keyword, index) => (
                    <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md">
                      {keyword}
                    </span>
                  ))}
                  {project.keywords.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                      +{project.keywords.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center text-xs text-gray-500 pt-4 border-t border-gray-100">
                <Calendar className="w-3 h-3 mr-1" />
                <span>Updated {new Date(project.lastUpdated).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Project Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Create New Project</h3>
              <form onSubmit={handleCreateProject} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Title
                  </label>
                  <input
                    type="text"
                    value={newProject.title}
                    onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter project title"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website URL
                  </label>
                  <input
                    type="url"
                    value={newProject.url}
                    onChange={(e) => setNewProject({...newProject, url: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Keywords (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={newProject.keywords}
                    onChange={(e) => setNewProject({...newProject, keywords: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="keyword1, keyword2, keyword3"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    value={newProject.description}
                    onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-20 resize-none"
                    placeholder="Brief description of your project"
                    required
                  />
                </div>
                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all"
                  >
                    Create Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}