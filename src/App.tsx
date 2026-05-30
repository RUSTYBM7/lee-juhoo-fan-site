import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { MusicPlayerProvider } from './contexts/MusicPlayerContext';
import Home from './pages/Home';
import News from './pages/News';
import Community from './pages/Community';
import Contact from './pages/Contact';
import KathyPage from './pages/KathyPage';

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <MusicPlayerProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/kathy" element={<KathyPage />} />
          </Routes>
        </MusicPlayerProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;