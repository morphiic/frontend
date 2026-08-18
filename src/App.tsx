import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Home } from '@/pages/Home';
import { Product } from '@/pages/Product';

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-base-950">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
