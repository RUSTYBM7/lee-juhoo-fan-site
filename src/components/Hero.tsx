import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// Get all Lee images from public folder
const leeImages = [
  '/images/lee/IMG_5109.JPG',
  '/images/lee/IMG_5110.JPG',
  '/images/lee/IMG_5111.JPG',
  '/images/lee/IMG_5112.JPG',
  '/images/lee/IMG_5113.JPG',
  '/images/lee/IMG_5114.JPG',
  '/images/lee/IMG_5115.JPG',
  '/images/lee/IMG_5116.JPG',
  '/images/lee/IMG_5117.JPG',
  '/images/lee/IMG_5118.JPG',
  '/images/lee/IMG_5119.JPG',
  '/images/lee/IMG_5120.JPG',
  '/images/lee/IMG_5121.JPG',
  '/images/lee/IMG_5122.JPG',
  '/images/lee/IMG_5123.JPG',
  '/images/lee/IMG_5124.JPG',
  '/images/lee/IMG_5125.JPG',
  '/images/lee/IMG_5126.JPG',
  '/images/lee/IMG_5127.JPG',
  '/images/lee/IMG_5128.JPG',
  '/images/lee/IMG_5129.JPG',
  '/images/lee/IMG_5130.JPG',
  '/images/lee/IMG_5131.JPG',
  '/images/lee/IMG_5132.JPG',
  '/images/lee/IMG_5133.JPG',
  '/images/lee/IMG_5134.JPG',
  '/images/lee/IMG_5135.JPG',
  '/images/lee/IMG_5136.JPG',
  '/images/lee/IMG_5137.JPG',
  '/images/lee/IMG_5138.JPG',
  '/images/lee/IMG_5139.JPG',
  '/images/lee/IMG_5140.JPG',
  '/images/lee/IMG_5141.JPG',
  '/images/lee/IMG_5142.JPG',
  '/images/lee/IMG_5143.JPG',
  '/images/lee/IMG_5144.JPG',
  '/images/lee/IMG_5145.JPG',
  '/images/lee/IMG_5146.JPG',
  '/images/lee/IMG_5147.JPG',
];

interface HeroProps {
  isKathyPage?: boolean;
}

const Hero: React.FC<HeroProps> = ({ isKathyPage = false }) => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (leeImages.length === 0) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % leeImages.length);
        setIsTransitioning(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-oled-base">
      {/* Image Background */}
      {leeImages.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt={`Lee Juhoo ${index + 1}`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-oled-base via-oled-base/60 to-transparent" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="animate-slide-down">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-wider mb-4">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-8 tracking-widest uppercase">
            {t.hero.subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-slide-up">
          <a
            href="#content"
            className="px-8 py-3 rounded-btn bg-primary text-black font-semibold hover:bg-primary/90 transition-colors min-h-[48px] flex items-center justify-center"
          >
            {t.hero.explore}
          </a>
          <button
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % leeImages.length);
                setIsTransitioning(false);
              }, 1000);
            }}
            className="px-8 py-3 rounded-btn border border-white/30 text-white font-semibold hover:border-primary hover:text-primary transition-colors min-h-[48px] flex items-center justify-center"
          >
            {t.hero.shuffle}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Image Navigation Dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
        {leeImages.slice(0, 10).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentIndex(index);
                setIsTransitioning(false);
              }, 1000);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex % 10
                ? 'bg-primary w-6'
                : 'bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;