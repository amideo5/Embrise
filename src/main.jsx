import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './styles/site.css';
import App from './App.jsx';

const legacyHashRoutes = {
  '/customDevelopment': '/services/custom-software-development',
  '/webDevelopment': '/services/web-development',
  '/mobileDevelopment': '/services/mobile-app-development',
  '/dataAnalytics': '/services/data-analytics-network-solutions',
  '/uiuxDesign': '/services/ui-ux-design',
  '/aiIntegration': '/services/ai-integration',
  '/whoneedsawebsite': '/insights/who-needs-a-website',
  '/techintegration': '/insights/how-tech-integration-enhances-your-business',
  '/wherewecomein': '/insights/where-do-we-come-in',
  '/unleashpotential': '/insights/business-availability-and-reliability',
  '/createbusinessworld': '/insights/lan-based-business-applications',
  '/aiforbusiness': '/insights/what-ai-can-do-for-your-business',
};

if (window.location.hash.startsWith('#/')) {
  const oldRoute = window.location.hash.slice(1).split('?')[0].replace(/\/$/, '') || '/';
  const nextRoute = legacyHashRoutes[oldRoute] || oldRoute;
  window.history.replaceState(null, '', `${nextRoute}${window.location.search}`);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
