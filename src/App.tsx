import React, { useState } from 'react';
import { AuthContext, useAuthProvider } from './hooks/useAuth';
import LandingPage from './components/Landing/LandingPage';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Sidebar from './components/Layout/Sidebar';
import Navbar from './components/Layout/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import MyProjects from './components/Projects/MyProjects';
import SEOTools from './components/SEOTools/SEOTools';
import DirectorySubmission from './components/Directory/DirectorySubmission';
import SubmissionReports from './components/Reports/SubmissionReports';
import PricingPlans from './components/Pricing/PricingPlans';
import ProfileSettings from './components/Profile/ProfileSettings';
import AdminPanel from './components/Admin/AdminPanel';
import UpgradeModal from './components/Modals/UpgradeModal';

function App() {
  const authProvider = useAuthProvider();
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [showLanding, setShowLanding] = useState(true);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const handleGetStarted = () => {
    setShowLanding(false);
    setAuthMode('register');
  };

  const handleFeatureRestricted = () => {
    setShowUpgradeModal(true);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard onFeatureRestricted={handleFeatureRestricted} />;
      case 'projects':
        return <MyProjects onFeatureRestricted={handleFeatureRestricted} />;
      case 'tools':
        return <SEOTools onFeatureRestricted={handleFeatureRestricted} />;
      case 'directory':
        return <DirectorySubmission onFeatureRestricted={handleFeatureRestricted} />;
      case 'reports':
        return <SubmissionReports onFeatureRestricted={handleFeatureRestricted} />;
      case 'pricing':
        return <PricingPlans />;
      case 'profile':
        return <ProfileSettings />;
      case 'admin':
        return <AdminPanel />;
      default:
        return <Dashboard onFeatureRestricted={handleFeatureRestricted} />;
    }
  };

  return (
    <AuthContext.Provider value={authProvider}>
      <div className="min-h-screen bg-gray-50">
        {showLanding && !authProvider.user ? (
          <LandingPage onGetStarted={handleGetStarted} />
        ) : !authProvider.user ? (
          <div className="min-h-screen bg-gray-50">
            {authMode === 'login' ? (
              <Login 
                onSwitchToRegister={() => setAuthMode('register')} 
                onBackToLanding={() => setShowLanding(true)}
              />
            ) : (
              <Register 
                onSwitchToLogin={() => setAuthMode('login')} 
                onBackToLanding={() => setShowLanding(true)}
              />
            )}
          </div>
        ) : (
          <div className="flex h-screen overflow-hidden bg-gray-100">
            <Sidebar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              isCollapsed={sidebarCollapsed}
              setIsCollapsed={setSidebarCollapsed}
              isAdmin={authProvider.user.subscription === 'premium'}
            />
            <div className="flex-1 flex flex-col overflow-hidden">
              <Navbar activeTab={activeTab} />
              <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
                {renderContent()}
              </main>
            </div>
          </div>
        )}
        
        {/* Upgrade Modal */}
        {showUpgradeModal && (
          <UpgradeModal 
            onClose={() => setShowUpgradeModal(false)}
            userPlan={authProvider.user?.subscription || 'free'}
          />
        )}
      </div>
    </AuthContext.Provider>
  );
}

export default App;