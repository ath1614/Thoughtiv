import React, { useState } from 'react';
import { 
  Search, 
  Tags, 
  Map, 
  Bot, 
  Globe, 
  Lightbulb, 
  TrendingUp, 
  Link, 
  Calendar, 
  Shield, 
  Zap, 
  Radio, 
  Scissors, 
  BarChart3,
  Play,
  Filter,
  Grid3X3,
  List
} from 'lucide-react';

interface SEOTool {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  category: 'analysis' | 'optimization' | 'tracking' | 'utilities';
  inputs: string[];
}

const seoTools: SEOTool[] = [
  {
    id: '1',
    name: 'Meta Tag Analyzer',
    description: 'Analyze and optimize your meta tags for better SEO performance',
    icon: Tags,
    category: 'analysis',
    inputs: ['URL']
  },
  {
    id: '2',
    name: 'Keyword Density Checker',
    description: 'Check keyword density and optimize content for target keywords',
    icon: Search,
    category: 'analysis',
    inputs: ['URL', 'Target Keyword']
  },
  {
    id: '3',
    name: 'Sitemap Checker',
    description: 'Validate and analyze your XML sitemap for SEO issues',
    icon: Map,
    category: 'analysis',
    inputs: ['Sitemap URL']
  },
  {
    id: '4',
    name: 'Robots.txt Generator',
    description: 'Generate and validate robots.txt files for search engines',
    icon: Bot,
    category: 'utilities',
    inputs: ['Website URL']
  },
  {
    id: '5',
    name: 'Google Index Checker',
    description: 'Check if your pages are indexed by Google search engine',
    icon: Globe,
    category: 'tracking',
    inputs: ['URL']
  },
  {
    id: '6',
    name: 'Keyword Suggestion',
    description: 'Discover new keyword opportunities for your content',
    icon: Lightbulb,
    category: 'optimization',
    inputs: ['Seed Keyword']
  },
  {
    id: '7',
    name: 'Position Checker',
    description: 'Track your website rankings for target keywords',
    icon: TrendingUp,
    category: 'tracking',
    inputs: ['URL', 'Keyword', 'Location']
  },
  {
    id: '8',
    name: 'Backlink Finder',
    description: 'Discover and analyze backlinks to your website',
    icon: Link,
    category: 'analysis',
    inputs: ['URL']
  },
  {
    id: '9',
    name: 'Domain Age Checker',
    description: 'Check the age and history of any domain name',
    icon: Calendar,
    category: 'utilities',
    inputs: ['Domain']
  },
  {
    id: '10',
    name: 'Plagiarism Checker',
    description: 'Check content originality and detect duplicate content',
    icon: Shield,
    category: 'analysis',
    inputs: ['Text Content']
  },
  {
    id: '11',
    name: 'Page Speed Checker',
    description: 'Analyze website loading speed and performance metrics',
    icon: Zap,
    category: 'optimization',
    inputs: ['URL']
  },
  {
    id: '12',
    name: 'Ping Website',
    description: 'Ping search engines to index your website faster',
    icon: Radio,
    category: 'utilities',
    inputs: ['URL']
  },
  {
    id: '13',
    name: 'URL Shortener',
    description: 'Create short URLs with tracking and analytics',
    icon: Scissors,
    category: 'utilities',
    inputs: ['Long URL']
  },
  {
    id: '14',
    name: 'Visitor Analytics',
    description: 'Track website visitors and analyze user behavior',
    icon: BarChart3,
    category: 'tracking',
    inputs: ['Website URL']
  }
];

export default function SEOTools() {
  const [selectedTool, setSelectedTool] = useState<SEOTool | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [toolInputs, setToolInputs] = useState<{[key: string]: string}>({});
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'All Tools' },
    { id: 'analysis', name: 'Analysis' },
    { id: 'optimization', name: 'Optimization' },
    { id: 'tracking', name: 'Tracking' },
    { id: 'utilities', name: 'Utilities' }
  ];

  const filteredTools = seoTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || tool.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      analysis: 'bg-blue-100 text-blue-700',
      optimization: 'bg-green-100 text-green-700',
      tracking: 'bg-purple-100 text-purple-700',
      utilities: 'bg-orange-100 text-orange-700'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  const runTool = async (tool: SEOTool) => {
    setIsRunning(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock results based on tool type
    const mockResults = {
      'Meta Tag Analyzer': {
        title: 'Example Website - Best Products Online',
        description: 'Find the best products at amazing prices. Free shipping worldwide.',
        keywords: 'ecommerce, products, online shopping',
        issues: ['Title too long', 'Missing H1 tag'],
        score: 85
      },
      'Keyword Density Checker': {
        keyword: toolInputs.keyword || 'example',
        density: 2.3,
        count: 15,
        recommendations: ['Increase keyword usage in headings', 'Add keyword to meta description']
      },
      'Page Speed Checker': {
        score: 92,
        loadTime: 1.2,
        size: '2.1 MB',
        suggestions: ['Optimize images', 'Enable compression']
      }
    };
    
    setResults(mockResults[tool.name as keyof typeof mockResults] || { status: 'Analysis complete' });
    setIsRunning(false);
  };

  const handleInputChange = (key: string, value: string) => {
    setToolInputs(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">SEO Tools</h2>
          <p className="text-gray-600">Powerful tools to analyze and optimize your website</p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <Grid3X3 className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setCategoryFilter(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  categoryFilter === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tools Grid/List */}
      <div className={viewMode === 'grid' 
        ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        : "space-y-4"
      }>
        {filteredTools.map((tool) => {
          const Icon = tool.icon;
          
          if (viewMode === 'list') {
            return (
              <div key={tool.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{tool.name}</h3>
                      <p className="text-sm text-gray-600">{tool.description}</p>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-2 ${getCategoryColor(tool.category)}`}>
                        {tool.category.charAt(0).toUpperCase() + tool.category.slice(1)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedTool(tool)}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all flex items-center space-x-2"
                  >
                    <Play className="w-4 h-4" />
                    <span>Use Tool</span>
                  </button>
                </div>
              </div>
            );
          }

          return (
            <div key={tool.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(tool.category)}`}>
                    {tool.category.charAt(0).toUpperCase() + tool.category.slice(1)}
                  </span>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{tool.description}</p>
                
                <button
                  onClick={() => setSelectedTool(tool)}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all flex items-center justify-center space-x-2"
                >
                  <Play className="w-4 h-4" />
                  <span>Use Tool</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tool Modal */}
      {selectedTool && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <selectedTool.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{selectedTool.name}</h3>
                    <p className="text-gray-600">{selectedTool.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedTool(null);
                    setResults(null);
                    setToolInputs({});
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>

              {/* Tool Inputs */}
              <div className="space-y-4 mb-6">
                {selectedTool.inputs.map((input) => (
                  <div key={input}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {input}
                    </label>
                    {input.includes('Content') ? (
                      <textarea
                        value={toolInputs[input.toLowerCase()] || ''}
                        onChange={(e) => handleInputChange(input.toLowerCase(), e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 resize-none"
                        placeholder={`Enter ${input.toLowerCase()}...`}
                      />
                    ) : (
                      <input
                        type="text"
                        value={toolInputs[input.toLowerCase()] || ''}
                        onChange={(e) => handleInputChange(input.toLowerCase(), e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={`Enter ${input.toLowerCase()}...`}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Run Button */}
              <button
                onClick={() => runTool(selectedTool)}
                disabled={isRunning}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isRunning ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Running Analysis...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>Run Tool</span>
                  </>
                )}
              </button>

              {/* Results */}
              {results && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Results</h4>
                  <div className="space-y-2 text-sm">
                    {Object.entries(results).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="font-medium text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                        <span className="text-gray-600">{Array.isArray(value) ? value.join(', ') : String(value)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}