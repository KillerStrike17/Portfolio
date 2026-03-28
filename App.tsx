import { Toaster } from "./src/components/ui/toaster";
import { Toaster as Sonner } from "./src/components/ui/sooner";
import { TooltipProvider } from "./src/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from "./src/components/Layout";
import ScrollToTop from "./src/components/ScrollToTop";
import Home from "./src/pages/Home";
import About from "./src/pages/About";
import Experience from "./src/pages/Experience";
import Projects from "./src/pages/Projects";
import Speaking from "./src/pages/Speaking";
import SpeakingDetail from "./src/pages/SpeakingDetail";
import Blogs from "./src/pages/Blogs";
import Contact from "./src/pages/Contact";
import NotFound from "./src/pages/NotFound";
import { ThemeProvider } from "./src/components/ThemeProvider";

const queryClient = new QueryClient();

const pageTransition = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        {...pageTransition}
        className="will-change-transform"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/speaking/:id" element={<SpeakingDetail />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="shub_theme_mode">
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Layout>
              <AnimatedRoutes />
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ThemeProvider>
);

export default App;
