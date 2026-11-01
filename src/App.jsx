import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import CustomDevelopment from './pages/CustomDevelopment';
import ScrollToTop from './components/ScrollToTop';
import WebDevelopment from './pages/WebDevelopment';
import MobileDevelopment from './pages/MobileDevelopment';
import DataAnalytics from './pages/DataAnalytics';
import UIUXDesign from './pages/UIUXDesign';
import AIIntegration from './pages/AIIntegration';
import ArticleComponent1 from './pages/ArticleComponent1';
import ArticleComponent2 from './pages/ArticleComponent2';
import ArticleComponent3 from './pages/ArticleComponent3';
import ArticleComponent4 from './pages/ArticleComponent4';
import ArticleComponent5 from './pages/ArticleComponent5';
import ArticleComponent6 from './pages/ArticleComponent6';
import SEO from './components/SEO';

const App = () => (
  <BrowserRouter>
    <SEO />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/custom-software-development" element={<CustomDevelopment />} />
      <Route path="/services/web-development" element={<WebDevelopment />} />
      <Route path="/services/mobile-app-development" element={<MobileDevelopment />} />
      <Route path="/services/data-analytics-network-solutions" element={<DataAnalytics />} />
      <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
      <Route path="/services/ai-integration" element={<AIIntegration />} />
      <Route path="/insights/who-needs-a-website" element={<ArticleComponent1 />} />
      <Route path="/insights/how-tech-integration-enhances-your-business" element={<ArticleComponent2 />} />
      <Route path="/insights/where-do-we-come-in" element={<ArticleComponent3 />} />
      <Route path="/insights/business-availability-and-reliability" element={<ArticleComponent4 />} />
      <Route path="/insights/lan-based-business-applications" element={<ArticleComponent5 />} />
      <Route path="/insights/what-ai-can-do-for-your-business" element={<ArticleComponent6 />} />

      {/* Preserve old bookmarked paths and route them to the descriptive URLs. */}
      <Route path="/customDevelopment" element={<Navigate to="/services/custom-software-development" replace />} />
      <Route path="/webDevelopment" element={<Navigate to="/services/web-development" replace />} />
      <Route path="/mobileDevelopment" element={<Navigate to="/services/mobile-app-development" replace />} />
      <Route path="/dataAnalytics" element={<Navigate to="/services/data-analytics-network-solutions" replace />} />
      <Route path="/uiuxDesign" element={<Navigate to="/services/ui-ux-design" replace />} />
      <Route path="/aiIntegration" element={<Navigate to="/services/ai-integration" replace />} />
      <Route path="/whoneedsawebsite" element={<Navigate to="/insights/who-needs-a-website" replace />} />
      <Route path="/techintegration" element={<Navigate to="/insights/how-tech-integration-enhances-your-business" replace />} />
      <Route path="/wherewecomein" element={<Navigate to="/insights/where-do-we-come-in" replace />} />
      <Route path="/unleashpotential" element={<Navigate to="/insights/business-availability-and-reliability" replace />} />
      <Route path="/createbusinessworld" element={<Navigate to="/insights/lan-based-business-applications" replace />} />
      <Route path="/aiforbusiness" element={<Navigate to="/insights/what-ai-can-do-for-your-business" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);

export default App;
