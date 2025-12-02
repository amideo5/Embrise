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
import ArticleComponent1 from './pages/ArticleComponent1';
import ArticleComponent2 from './pages/ArticleComponent2';
import ArticleComponent3 from './pages/ArticleComponent3';
import ArticleComponent4 from './pages/ArticleComponent4';
import ArticleComponent5 from './pages/ArticleComponent5';
import ArticleComponent6 from './pages/ArticleComponent6';


const App = () => {
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
        <Route path="/whoneedsawebsite" element={<ArticleComponent1 />} />
        <Route path="/techintegration" element={<ArticleComponent2 />} />
        <Route path="/wherewecomein" element={<ArticleComponent3 />} />
        <Route path="/unleashpotential" element={<ArticleComponent4 />} />
        <Route path="/createbusinessworld" element={<ArticleComponent5 />} />
        <Route path="/aiforbusiness" element={<ArticleComponent6 />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
