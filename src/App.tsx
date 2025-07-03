import { Toaster as Sonner, Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { Gallery } from "./pages/Gallery";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { Helmet } from "react-helmet-async";

// ✅ now that @images → src/images, this will work
import logoUrl from "@images/website/logo.jpg";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <title>Vgold Enterprises</title>
        <meta property="og:title" content="Vgold-Enterprises" />
        <meta property="og:description" content="Vgold-Enterprises Project" />
        <meta property="og:type" content="website" />
     <meta property="og:image" content={logoUrl}/> {/* ✅ Vite will inject hashed path */}
      </Helmet>

      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

