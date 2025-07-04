import React from 'react';
import { X, Crown, Zap, Star, ArrowRight, Sparkles, Brain, Rocket } from 'lucide-react';

interface UpgradeModalProps {
  onClose: () => void;
  userPlan: string;
}

export default function UpgradeModal({ onClose, userPlan }: UpgradeModalProps) {
  const handleUpgrade = () => {
    // In a real app, this would redirect to payment processing
    alert('Redirecting to upgrade page...');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-lg w-full relative overflow-hidden border border-gray-200 shadow-2xl">
        {/* Header */}
        <div className="relative p-8 text-center bg-gradient-to-br from-blue-50 to-purple-50 border-b border-gray-100">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-lg p-2 shadow-sm"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Crown className="w-10 h-10 text-white" />
          </div>
          
          <h3 className="text-3xl font-bold text-gray-900 mb-3">
            <span className="gradient-text">AI Premium Feature</span>
          </h3>
          <p className="text-gray-600">
            Unlock the full power of AI-driven SEO automation
          </p>
        </div>

        {/* Content */}
        <div className="relative p-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mb-6 border border-blue-100">
            <div className="flex items-center space-x-3 mb-4">
              <Sparkles className="w-6 h-6 text-purple-600" />
              <h4 className="text-xl font-semibold text-gray-900">Unlock AI Premium</h4>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center space-x-3">
                <Brain className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Advanced AI-powered SEO analysis</span>
              </li>
              <li className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span>Unlimited AI submissions & optimization</span>
              </li>
              <li className="flex items-center space-x-3">
                <Star className="w-5 h-5 text-purple-600 flex-shrink-0" />
                <span>Real-time AI insights & predictions</span>
              </li>
              <li className="flex items-center space-x-3">
                <Rocket className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span>Priority AI processing & support</span>
              </li>
            </ul>
          </div>

          <div className="text-center mb-6">
            <div className="inline-flex items-baseline space-x-2">
              <span className="text-4xl font-bold text-gray-900">$49</span>
              <span className="text-lg text-gray-500">/month</span>
            </div>
            <p className="text-gray-600 mt-2">Start your AI-powered SEO journey today</p>
          </div>

          <div className="space-y-3">
            <button
              onClick={handleUpgrade}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 btn-glow group"
            >
              <span>Upgrade to AI Premium</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={onClose}
              className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-medium hover:bg-gray-200 transition-colors border border-gray-200"
            >
              Maybe Later
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              ✨ 14-day free trial • Cancel anytime • No hidden fees
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}