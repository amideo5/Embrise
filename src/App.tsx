import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import CustomDevelopment from './pages/CustomDevelopment';
import ScrollToTop from './components/ScrollToTop';
import WebDevelopment from './pages/WebDevelopment';
import MobileDevelopment from './pages/MobileDevelopment';
import DataAnalytics from './pages/DataAnalytics';
import UIUXDesign from './pages/UIUXDesign';
import AIIntegration from './pages/AIIntegration';

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Home />} />
        <Route path="/customDevelopment" element={<CustomDevelopment />} />
        <Route path="/webDevelopment" element={<WebDevelopment />} />
        <Route path="/mobileDevelopment" element={<MobileDevelopment />} />
        <Route path="/dataAnalytics" element={<DataAnalytics />} />
        <Route path="/uiuxDesign" element={<UIUXDesign />} />
        <Route path="/aiIntegration" element={<AIIntegration />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
