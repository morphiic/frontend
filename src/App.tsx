import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/navigation/Navbar';
import { LegalHeader } from '@/components/navigation/LegalHeader';
import { Footer } from '@/components/layout/Footer';
import { CookieConsent } from '@/components/ui/CookieConsent';
import { PayPalProvider } from '@/components/providers/PayPalProvider';
import { Home } from '@/pages/Home';
import { Product } from '@/pages/Product';
import { PrivacyPolicy } from '@/pages/PrivacyPolicy';
import { Terms } from '@/pages/Terms';

const LEGAL_PATHS = ['/privacy', '/terms'];

function Layout() {
  const location = useLocation();
  const isLegal = LEGAL_PATHS.includes(location.pathname);
  const Header = isLegal ? LegalHeader : Navbar;

  return (
    <div className="relative min-h-screen bg-base-950">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}

function App() {
  return (
    <PayPalProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </PayPalProvider>
  );
}

export default App;
