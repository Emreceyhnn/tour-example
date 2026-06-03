import { ThemeProvider, CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import theme from './theme';
import LandingPage from './pages/LandingPage';
import TermsOfService from './pages/TermsOfService';
import BayGuidePage from './pages/BayGuidePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AboutUsPage from './pages/AboutUsPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/:lang">
            <Route index element={<LandingPage />} />
            <Route path="terms" element={<TermsOfService />} />
            <Route path="bay-guide" element={<BayGuidePage />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="about" element={<AboutUsPage />} />
          </Route>
          {/* Default redirect to English */}
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
