import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Index from '@/lib/pages/Index';
import About from '@/lib/pages/About';
import Services from '@/lib/pages/Services';
import ServiceDetail from '@/lib/pages/ServiceDetail';
import Contact from '@/lib/pages/Contact';
import Blog from '@/lib/pages/Blog';
import NotFound from '@/lib/pages/NotFound';
import ArticlePage from '@/lib/pages/ArticlePage';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return null;
}

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<ArticlePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
);

export default App;