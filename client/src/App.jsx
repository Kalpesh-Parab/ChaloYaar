import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import ScrollerManager from './components/common/ScrollerManager';

import HomePage from './pages/HomePage/HomePage';
import PackagesPage from './pages/PackagesPage/PackagesPage';
import TripDetailPage from './pages/TripDetailPage/TripDetailPage';
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import FAQPage from './pages/FAQPage/FAQPage';
import CustomTripPage from './pages/CustomTripPage/CustomTripPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

export default function App() {
  return (
    <Router>
      {/* 1. Resets scroll position to 0 on every page switch */}
      <ScrollToTop />

      {/* 2. Global Route-based Scroller */}
      <ScrollerManager />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/packages/:slug" element={<TripDetailPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/custom-trip" element={<CustomTripPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}