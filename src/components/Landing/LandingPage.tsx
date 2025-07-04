import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Zap, 
  Target, 
  BarChart3, 
  Globe, 
  Shield, 
  Users, 
  Sparkles,
  Play,
  ChevronRight,
  Menu,
  X,
  Rocket,
  Brain,
  TrendingUp,
  Award,
  Clock,
  Infinity,
  Crown
} from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Target,
      title: 'Automated SEO Submission',
      description: 'AI-powered submission to 1000+ directories and platforms with intelligent optimization and real-time tracking.',
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Brain,
      title: 'Keyword & Competitor Tools',
      description: 'Advanced AI-driven keyword research and competitor analysis to dominate your niche with data-backed insights.',
      gradient: 'from-purple-500 to-pink-400'
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'Real-time AI insights and predictive analytics to track performance and forecast growth opportunities.',
      gradient: 'from-green-500 to-emerald-400'
    },
    {
      icon: Sparkles,
      title: 'All-in-One SEO Dashboard',
      description: 'Unified AI-powered dashboard to manage campaigns, track rankings, and optimize performance automatically.',
      gradient: 'from-orange-500 to-red-400'
    }
  ];

  const plans = [
    {
      name: 'Starter',
      price: 0,
      period: 'forever',
      description: 'Perfect for individuals getting started',
      features: [
        '5 SEO Projects',
        '10 AI Submissions/month',
        'Basic Analytics',
        'Email Support',
        'Community Access'
      ],
      popular: false,
      gradient: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      price: 49,
      period: 'month',
      description: 'For growing businesses and agencies',
      features: [
        '50 SEO Projects',
        '500 AI Submissions/month',
        'Advanced Analytics',
        'Priority Support',
        'API Access',
        'White-label Reports',
        'Competitor Tracking'
      ],
      popular: true,
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Enterprise',
      price: 149,
      period: 'month',
      description: 'For large teams and enterprises',
      features: [
        'Unlimited Projects',
        'Unlimited AI Submissions',
        'Custom AI Models',
        '24/7 Support',
        'Custom Integrations',
        'Dedicated Manager',
        'Advanced Security',
        'Custom Reporting'
      ],
      popular: false,
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const whyChoose = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning algorithms optimize your SEO strategy automatically'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Results',
      description: 'See improvements in rankings within 24-48 hours with our automated systems'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and end-to-end encryption'
    },
    {
      icon: Award,
      title: 'Proven Success',
      description: 'Average 300% increase in organic traffic within the first 90 days'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="relative z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold gradient-text">OPPTYM</span>
                <p className="text-xs text-gray-500 -mt-1">AI-Smart Marketing Starts Here</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">Pricing</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">About</a>
              <button
                onClick={onGetStarted}
                className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-200 btn-glow"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-6 space-y-4">
              <a href="#features" className="block text-gray-600 hover:text-gray-900 transition-colors font-medium">Features</a>
              <a href="#pricing" className="block text-gray-600 hover:text-gray-900 transition-colors font-medium">Pricing</a>
              <a href="#about" className="block text-gray-600 hover:text-gray-900 transition-colors font-medium">About</a>
              <button
                onClick={onGetStarted}
                className="w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-3 rounded-xl font-medium btn-glow"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50/50 via-white to-pink-50/50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-pink-100 px-4 py-2 rounded-full border border-blue-200 mb-8">
              <Rocket className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-700 font-medium">Powered by Advanced AI Technology</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="gradient-text">OPPTYM</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-600 mb-4 font-light">
              AI-Smart Marketing Starts Here
            </p>
            
            <p className="text-xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your SEO strategy with our AI-powered automation platform. 
              Boost rankings, drive traffic, and dominate search results with intelligent optimization.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button
                onClick={onGetStarted}
                className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 btn-glow group"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors group">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center group-hover:shadow-lg transition-all">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                <span className="font-medium">Watch Demo</span>
              </button>
            </div>
            
            <div className="mt-16 flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>14-Day Free Trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 bg-white border border-gray-200 rounded-2xl flex items-center justify-center shadow-lg">
            <TrendingUp className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-16 h-16 bg-white border border-gray-200 rounded-2xl flex items-center justify-center shadow-lg">
            <Target className="w-6 h-6 text-pink-500" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full border border-blue-200 mb-6">
              <Brain className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-blue-700 font-medium">AI-Powered Features</span>
            </div>
            <h2 className="text-5xl font-bold gradient-text mb-6">Intelligent Marketing Tools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to automate and optimize your entire SEO strategy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-3xl p-8 card-hover group border border-gray-100 shadow-sm"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 px-4 py-2 rounded-full border border-green-200 mb-6">
              <Star className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-700 font-medium">Flexible Pricing</span>
            </div>
            <h2 className="text-5xl font-bold gradient-text mb-6">Choose Your Growth Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free and scale as you grow. All plans include our core AI-powered features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 relative card-hover border ${
                  plan.popular ? 'border-blue-300 shadow-xl ring-2 ring-blue-100' : 'border-gray-200 shadow-sm'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    {plan.name === 'Starter' && <Users className="w-8 h-8 text-white" />}
                    {plan.name === 'Professional' && <Rocket className="w-8 h-8 text-white" />}
                    {plan.name === 'Enterprise' && <Crown className="w-8 h-8 text-white" />}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-5xl font-bold text-gray-900">
                        ${plan.price}
                      </span>
                      {plan.price > 0 && (
                        <span className="text-gray-500">/{plan.period}</span>
                      )}
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={onGetStarted}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-xl btn-glow'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  {plan.price === 0 ? 'Start Free' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="about" className="py-32 relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full border border-purple-200 mb-6">
              <Award className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-purple-700 font-medium">Why Choose OPPTYM</span>
            </div>
            <h2 className="text-5xl font-bold gradient-text mb-6">The Future of SEO is Here</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of businesses that trust OPPTYM to revolutionize their digital marketing strategy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-3xl p-12 border border-gray-200">
            <h2 className="text-5xl font-bold gradient-text mb-6">Ready to Transform Your SEO?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of businesses using OPPTYM to dominate search results with AI-powered automation.
            </p>
            <button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-200 inline-flex items-center space-x-2 btn-glow group"
            >
              <span>Start Your Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold gradient-text">OPPTYM</span>
                  <p className="text-xs text-gray-500 -mt-1">AI-Smart Marketing Starts Here</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 max-w-md">
                The most advanced AI-powered SEO automation platform for businesses of all sizes. 
                Transform your digital marketing with intelligent automation.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#features" className="hover:text-gray-900 transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">API</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#about" className="hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; 2024 OPPTYM. All rights reserved. Powered by AI.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}