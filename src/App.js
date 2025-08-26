import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import HighlightsSection from './components/HighlightsSection/HighlightsSection';
import GalleryPreview from './components/Gallery/ GalleryPreview';
import Footer from './components/Footer/Footer';
import AboutUsPage from './components/About/AboutUsPage';
import GalleryPage from './components/Gallery/GalleryPage';
import AlbumView from './components/Gallery/AlbumView';
import ContactPage from './components/Contact/ContactPage';


function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ height: '80px' }} /> {/* ✅ Spacer below navbar */}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <HighlightsSection />
              <GalleryPreview />
              <Footer />
            </>
          }
        />

        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery/:albumId" element={<AlbumView />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;