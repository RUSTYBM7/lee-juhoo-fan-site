import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import MusicPlayer from '../components/MusicPlayer';
import {
  Play, ChevronRight, ChevronLeft, Star, Award, Film, Music,
  Mic, Calendar, Globe, Heart, Camera, Sparkles, Trophy,
  ArrowRight, Pause, Volume2, VolumeX, Maximize, Minimize
} from 'lucide-react';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: 'debut' | 'award' | 'album' | 'drama' | 'film' | 'global' | 'milestone';
  stats?: { label: string; value: string }[];
  color: string;
}

const Museum = () => {
  const { t, language } = useLanguage();
  const [activeEvent, setActiveEvent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const timelineEvents: TimelineEvent[] = [
    {
      id: 1,
      year: '2020',
      title: language === 'en' ? 'The Beginning' : '시작',
      subtitle: language === 'en' ? 'First Steps in Entertainment' : '엔터테인먼트 첫 걸음',
      description: language === 'en'
        ? 'Lee Juhoo takes his first steps into the entertainment industry with determination and passion. His unique presence and Charisma caught the attention of industry professionals.'
        : '이주후가 열정과 결단력으로 엔터테인먼트 업계에 첫 발을 내딛습니다. 그의 독특한 존재감과 카리스마가 업계 관계자들의 주목을 받았습니다.',
      image: '/images/lee/IMG_5109.JPG',
      category: 'debut',
      color: '#A855F7',
      stats: [
        { label: language === 'en' ? 'First Project' : '첫 작품', value: '2020' },
        { label: language === 'en' ? 'Initial Following' : '초기 팔로워', value: '10K' },
      ],
    },
    {
      id: 2,
      year: '2021',
      title: language === 'en' ? 'Rising Star' : '升起する星',
      subtitle: language === 'en' ? 'Breaking Through' : '돌파',
      description: language === 'en'
        ? 'A breakthrough year as Lee Juhoo lands his first major drama role. His performance resonates with viewers across Asia, establishing him as a rising star to watch.'
        : '이주후가 첫 번째 주요 드라마 역할에 배정되며 돌파의 해를 보냅니다. 그의 연기가 아시아 전역의 시청자들에게 울림을 주며 지켜볼 가치가 있는 신성으로 자리매김합니다.',
      image: '/images/lee/IMG_5115.JPG',
      category: 'drama',
      color: '#8B5CF6',
      stats: [
        { label: language === 'en' ? 'First Drama' : '첫 드라마', value: '2021' },
        { label: language === 'en' ? 'Viewership' : '시청률', value: '12%' },
      ],
    },
    {
      id: 3,
      year: '2022',
      title: language === 'en' ? 'Multi-Talented' : '다재다능',
      subtitle: language === 'en' ? 'Debut as Singer' : '가수 데뷔',
      description: language === 'en'
        ? 'Lee Juhoo expands his artistic horizons by releasing his debut single. The emotional ballad showcases his versatility not just as an actor but as a vocalist.'
        : '이주후가 데뷔 싱글을 발매하여 예술적 범위를 확장합니다. 감정적인 발라드는 배우이자 보컬리스트로서의 그의 다재다능함을 보여줍니다.',
      image: '/images/lee/IMG_5125.JPG',
      category: 'album',
      color: '#A855F7',
      stats: [
        { label: language === 'en' ? 'First Single' : '첫 싱글', value: '2022' },
        { label: language === 'en' ? 'Chart Position' : '차트 순위', value: '#3' },
      ],
    },
    {
      id: 4,
      year: '2023',
      title: language === 'en' ? 'Award Season' : '시상식 시즌',
      subtitle: language === 'en' ? 'Recognition' : '인정',
      description: language === 'en'
        ? 'A year of recognition. Lee Juhoo receives his first major award nomination, marking his transition from promising talent to established artist.'
        : '인정의 해입니다. 이주후가 첫 번째 주요상 후보에 지명되며 유망한 인재에서 확립된 예술가로의 전환을 표시합니다.',
      image: '/images/lee/IMG_5130.JPG',
      category: 'award',
      color: '#D4AF37',
      stats: [
        { label: language === 'en' ? 'First Nomination' : '첫 후보', value: '2023' },
        { label: language === 'en' ? 'Category' : '부분', value: 'Best New Actor' },
      ],
    },
    {
      id: 5,
      year: '2024',
      title: language === 'en' ? 'Global Stage' : '글로벌 무대',
      subtitle: language === 'en' ? 'International Recognition' : '국제적 인정',
      description: language === 'en'
        ? 'Lee Juhoo takes center stage at the Baeksang Arts Awards, winning Best Actor. His acceptance speech moves millions and solidifies his status as a top-tier star.'
        : '이주후가 백상예술대상에서 주인공상을 수상하며 중앙 무대에섭니다. 그의 수상 소감이 백만 명의 마음을 움직이며 최상위 스타 지위를 공고히 합니다.',
      image: '/images/lee/IMG_5135.JPG',
      category: 'award',
      color: '#D4AF37',
      stats: [
        { label: language === 'en' ? 'Award' : '수상', value: 'Best Actor' },
        { label: language === 'en' ? 'Show' : '쇼', value: 'Baeksang' },
      ],
    },
    {
      id: 6,
      year: '2024+',
      title: language === 'en' ? 'The Future' : '미래',
      subtitle: language === 'en' ? 'What Lies Ahead' : '앞으로의 여정',
      description: language === 'en'
        ? 'With Kathy Hutchison by his side as Managing Editor & Personal Manager, Lee Juhoo embarks on the next chapter of his journey. World tours, new projects, and endless possibilities await.'
        : '캐시 허친슨이 Managing Editor & Personal Manager로 곁에 있으며, 이주후는 여정의 다음 장을 시작합니다. 월드투어, 새로운 프로젝트, 그리고 무한한 가능성이 기다립니다.',
      image: '/images/lee/IMG_5140.JPG',
      category: 'milestone',
      color: '#10B981',
      stats: [
        { label: language === 'en' ? 'World Tour' : '월드투어', value: '2024-25' },
        { label: language === 'en' ? 'Projects' : '프로젝트', value: '∞' },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        setScrollProgress(progress);

        // Auto-advance based on scroll
        const sectionHeight = docHeight / timelineEvents.length;
        const currentEvent = Math.min(
          Math.floor(scrollTop / sectionHeight),
          timelineEvents.length - 1
        );
        setActiveEvent(currentEvent);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [timelineEvents.length]);

  const handlePrev = () => {
    setActiveEvent((prev) => (prev > 0 ? prev - 1 : timelineEvents.length - 1));
    scrollToEvent(activeEvent - 1);
  };

  const handleNext = () => {
    setActiveEvent((prev) => (prev < timelineEvents.length - 1 ? prev + 1 : 0));
    scrollToEvent(activeEvent + 1);
  };

  const scrollToEvent = (index: number) => {
    const sectionHeight = document.documentElement.scrollHeight / timelineEvents.length;
    window.scrollTo({
      top: index * sectionHeight,
      behavior: 'smooth',
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'debut':
        return <Sparkles size={20} />;
      case 'award':
        return <Trophy size={20} />;
      case 'album':
        return <Music size={20} />;
      case 'drama':
        return <Film size={20} />;
      case 'film':
        return <Camera size={20} />;
      case 'global':
        return <Globe size={20} />;
      default:
        return <Star size={20} />;
    }
  };

  const currentEvent = timelineEvents[activeEvent];

  return (
    <div ref={containerRef} className="min-h-screen bg-black">
      <Navigation />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-900 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={timelineEvents[0].image}
            alt="Lee Juhoo"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
        </div>

        <div className="relative z-10 text-center px-4">
          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4 animate-pulse">
            {language === 'en' ? 'Career Museum' : '경력 미술관'}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            LEE JUHOO
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'An immersive journey through the career of a rising star'
              : '升起するスターのキャリアを通じた没入型の旅'}
          </p>
          <button
            onClick={() => scrollToEvent(1)}
            className="group flex items-center gap-3 mx-auto px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full transition-all duration-300"
          >
            <Play size={20} fill="currentColor" />
            <span className="font-semibold">
              {language === 'en' ? 'Start Journey' : '旅を始める'}
            </span>
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight size={32} className="text-white/50 rotate-90" />
        </div>
      </section>

      {/* Timeline Sections */}
      {timelineEvents.map((event, index) => (
        <section
          key={event.id}
          className={`relative min-h-screen flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
            <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-gradient-to-r from-black via-black/80 to-transparent' : 'bg-gradient-to-l from-black via-black/80 to-transparent'}`} />
          </div>

          {/* Content Card */}
          <div
            className={`relative z-10 max-w-xl mx-8 md:mx-16 p-8 md:p-12 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 ${index % 2 === 0 ? 'md:ml-16' : 'md:mr-16'}`}
          >
            {/* Year Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: `${event.color}20`, color: event.color }}
            >
              {getCategoryIcon(event.category)}
              <span className="font-bold text-lg">{event.year}</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{event.title}</h2>
            <p className="text-lg text-purple-400 mb-4">{event.subtitle}</p>

            {/* Description */}
            <p className="text-gray-300 leading-relaxed mb-6">{event.description}</p>

            {/* Stats */}
            {event.stats && (
              <div className="grid grid-cols-2 gap-4 mb-6">
                {event.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <p className="text-2xl font-bold" style={{ color: event.color }}>
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Navigation Dots */}
            <div className="flex items-center gap-2">
              {timelineEvents.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToEvent(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === activeEvent ? 'bg-purple-500 w-8' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Timeline Line */}
          <div className="absolute left-8 md:left-16 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-yellow-500" />
        </section>
      ))}

      {/* Episode Navigation */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 px-6 py-3 rounded-full bg-black/80 backdrop-blur-xl border border-white/10">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>

        <div className="flex items-center gap-2">
          {timelineEvents.map((event, i) => (
            <button
              key={event.id}
              onClick={() => scrollToEvent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeEvent ? 'bg-purple-500 scale-150' : 'bg-white/30 hover:bg-white/50'
              }`}
              title={event.year}
            />
          ))}
        </div>

        <span className="text-white/70 text-sm ml-2">
          {activeEvent + 1} / {timelineEvents.length}
        </span>

        <button
          onClick={handleNext}
          className="p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <ChevronRight size={24} className="text-white" />
        </button>

        <div className="w-px h-6 bg-white/20 mx-2" />

        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          {isMuted ? <VolumeX size={20} className="text-white/70" /> : <Volume2 size={20} className="text-white" />}
        </button>
      </div>

      {/* Episode Title Card */}
      {showContent && (
        <div className="fixed top-24 left-8 z-40 max-w-md p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="px-3 py-1 rounded-full text-xs font-bold"
              style={{ backgroundColor: `${currentEvent.color}20`, color: currentEvent.color }}
            >
              {currentEvent.category.toUpperCase()}
            </span>
            <span className="text-white/50 text-sm">{currentEvent.year}</span>
          </div>
          <h3 className="text-xl font-bold text-white">{currentEvent.title}</h3>
          <p className="text-sm text-gray-400 mt-1">{currentEvent.subtitle}</p>
        </div>
      )}

      {/* Credits Section */}
      <section className="relative py-32 px-8 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-purple-400 uppercase tracking-widest text-sm mb-4">
            {language === 'en' ? 'A Lee Juhoo Official Production' : '이주후 공식 프로덕션'}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {language === 'en' ? 'The Journey Continues' : '여정은 계속됩니다'}
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            {language === 'en'
              ? 'With gratitude to fans worldwide'
              : '전 세계 팬들에게 감사드립니다'}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-full font-semibold transition-colors flex items-center gap-2"
            >
              <span>{language === 'en' ? 'Back to Home' : '홈으로'}</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/news"
              className="px-8 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500/10 rounded-full font-semibold transition-colors flex items-center gap-2"
            >
              <span>{language === 'en' ? 'Latest News' : '최신 뉴스'}</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      </section>

      <Footer />
      <MusicPlayer />
    </div>
  );
};

export default Museum;