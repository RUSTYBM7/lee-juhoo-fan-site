import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import MusicPlayer from '../components/MusicPlayer';
import {
  Award, Film, Heart, Music, Users, Star, TrendingUp,
  Calendar, Camera, Gift, BookOpen, Clock, MessageCircle,
  ShoppingBag, ChevronRight, Play, Volume2, Globe, MapPin,
  Instagram, Youtube, Twitter, Sparkles, Mic, Tv, Trophy
} from 'lucide-react';
import { getFilmographyImage, getAwardImage, getMusicCover, images } from '../lib/imageMapping';

const leeGalleryImages = images.hero;

const Home = () => {
  const { t } = useLanguage();
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  // Real LEE JUNHO Filmography
  const filmography = [
    { year: '2025', title: 'Typhoon Family', role: 'Lee Kang-joon', type: 'Drama', poster: getFilmographyImage('Typhoon Family') },
    { year: '2025', title: 'Cashero', role: 'Lee Sang-hak', type: 'Drama', poster: getFilmographyImage('Cashero') },
    { year: '2023', title: 'King the Land', role: 'Kwang Baek', type: 'Drama', poster: getFilmographyImage('King the Land') },
    { year: '2021', title: 'The Red Sleeve', role: 'Yi San', type: 'Drama', poster: getFilmographyImage('The Red Sleeve') },
    { year: '2019', title: 'Confession', role: 'Lee Hyun-woo', type: 'Drama', poster: getFilmographyImage('Confession') },
    { year: '2017', title: 'Good Manager', role: 'Ga Dong-chae', type: 'Drama', poster: getFilmographyImage('Good Manager') },
  ];

  // Real LEE JUNHO Awards
  const awards = [
    { year: '2024', award: 'Best Actor', event: 'Baeksang Arts Awards', category: 'The Red Sleeve', image: getAwardImage('Baeksang Arts Awards') },
    { year: '2021', award: 'Best Actor', event: 'MBC Drama Awards', category: 'The Red Sleeve', image: getAwardImage('MBC Drama Awards') },
    { year: '2021', award: 'Best Couple Award', event: 'KBS Drama Awards', category: 'with Lee Se-young', image: getAwardImage('KBS Drama Awards') },
    { year: '2023', award: 'Popularity Award', event: 'Asia Artist Awards', category: 'K-Pop', image: getAwardImage('Asia Artist Awards') },
  ];

  // Music Albums
  const musicAlbums = [
    { title: 'Can I', type: 'Single', year: '2023', cover: getMusicCover('Can I') },
    { title: 'Nothing But You', type: 'Single', year: '2023', cover: getMusicCover('Nothing But You') },
    { title: 'Canvas', type: 'EP', year: '2017', cover: getMusicCover('Canvas') },
  ];

  // Concerts & Events
  const events = [
    { date: '2026-03-15', title: 'Stunning Us - Seoul', location: 'Seoul, South Korea', type: 'Fan Meeting' },
    { date: '2026-04-10', title: 'Always in Shanghai', location: 'Shanghai, China', type: 'Fan Meeting' },
    { date: '2026-07-15', title: '2PM 17th Anniversary', location: 'Seoul, South Korea', type: 'Anniversary' },
  ];

  // Stats based on real data
  const stats = [
    { label: t.sections.stats.height, value: '183cm' },
    { label: t.sections.stats.weight, value: '70kg' },
    { label: t.sections.stats.dob, value: '1990-01-25' },
    { label: t.sections.stats.bloodType, value: 'A' },
  ];

  return (
    <div className="min-h-screen bg-oled-base pb-20">
      <Navigation />
      <Hero />

      <div id="content" className="scroll-smooth">
        {/* Section 1: Introduction & Philosophy */}
        <section className="py-20 px-4 bg-oled-base">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src={images.profile.portrait}
                  alt="LEE JUNHO"
                  className="rounded-image w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              </div>
              <div className="space-y-6">
                <span className="text-primary uppercase tracking-widest text-sm font-medium">
                  {t.sections.intro.title}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {t.sections.intro.heading}
                </h2>
                <p className="text-white/70 leading-relaxed">
                  LEE JUNHO is a South Korean singer-songwriter and actor, best known as a member of the boy band 2PM. He rose to prominence with his versatile performances across drama and film, earning critical acclaim including the prestigious Baeksang Arts Award for Best Actor.
                </p>
                <button className="px-6 py-3 rounded-btn bg-primary text-black font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
                  Learn More <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Biography */}
        <section className="py-20 px-4 bg-oled-elevated">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary uppercase tracking-widest text-sm font-medium">
                {t.sections.bio.title}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                {t.sections.bio.heading}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <Mic />, title: 'Singer', desc: 'Solo artist with multiple EPs and albums, known for powerful vocals and emotional performances' },
                { icon: <Tv />, title: 'Actor', desc: 'Baeksang Award-winning actor across dramas like The Red Sleeve and films like Cold Eyes' },
                { icon: <Star />, title: 'Entertainer', desc: 'Captivating audiences worldwide through diverse performances and fan meetings' },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-card bg-oled-card border border-oled-border">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Filmography */}
        <section className="py-20 px-4 bg-oled-base">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="text-primary uppercase tracking-widest text-sm font-medium">
                  {t.sections.filmography.title}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                  {t.sections.filmography.heading}
                </h2>
              </div>
              <Link
                to="/filmography"
                className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
              >
                View All <ChevronRight size={18} />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filmography.map((item, i) => (
                <div key={i} className="group rounded-card overflow-hidden bg-oled-card border border-oled-border hover:border-primary transition-colors">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={item.poster}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play size={48} className="text-primary" />
                    </div>
                    <span className="absolute top-3 left-3 px-2 py-1 bg-primary text-black text-xs font-semibold rounded">
                      {item.type}
                    </span>
                  </div>
                  <div className="p-4">
                    <span className="text-primary text-sm">{item.year}</span>
                    <h3 className="text-white font-semibold mt-1">{item.title}</h3>
                    <p className="text-white/50 text-sm mt-1">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Awards */}
        <section className="py-20 px-4 bg-oled-elevated">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary uppercase tracking-widest text-sm font-medium">
                {t.sections.awards.title}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                {t.sections.awards.heading}
              </h2>
            </div>
            <div className="space-y-4 max-w-2xl mx-auto">
              {awards.map((award, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-card bg-oled-card border border-oled-border hover:border-primary transition-colors"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img src={award.image} alt={award.award} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">{award.award}</h3>
                    <p className="text-white/60 text-sm">{award.event} • {award.category}</p>
                  </div>
                  <span className="text-primary font-semibold">{award.year}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Music Discography */}
        <section className="py-20 px-4 bg-oled-base">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary uppercase tracking-widest text-sm font-medium">
                {t.sections.music.title}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                {t.sections.music.heading}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {musicAlbums.map((album, i) => (
                <div key={i} className="group rounded-card overflow-hidden bg-oled-card border border-oled-border hover:border-primary transition-colors">
                  <div className="aspect-square relative">
                    <img
                      src={album.cover}
                      alt={album.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Play size={48} className="text-primary" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold">{album.title}</h3>
                    <p className="text-white/50 text-sm">{album.type} • {album.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Physical Stats */}
        <section className="py-20 px-4 bg-oled-elevated">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <span className="text-primary uppercase tracking-widest text-sm font-medium">
                  {t.sections.stats.title}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-8">
                  {t.sections.stats.heading}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <div key={i} className="p-4 rounded-card bg-oled-card border border-oled-border">
                      <p className="text-white/50 text-sm">{stat.label}</p>
                      <p className="text-white font-semibold text-lg">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src={images.profile.action}
                  alt="LEE JUNHO"
                  className="rounded-image w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Upcoming Events */}
        <section className="py-20 px-4 bg-oled-base">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary uppercase tracking-widest text-sm font-medium">
                Upcoming Events
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                Fan Meetings & Concerts
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {events.map((event, i) => (
                <div key={i} className="p-6 rounded-card bg-oled-card border border-oled-border">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar size={20} className="text-primary" />
                    <span className="text-primary text-sm">{event.date}</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg">{event.title}</h3>
                  <p className="text-white/50 text-sm mt-2 flex items-center gap-1">
                    <MapPin size={14} /> {event.location}
                  </p>
                  <span className="inline-block mt-4 px-3 py-1 rounded-pill bg-primary/20 text-primary text-sm">
                    {event.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Fashion Archive */}
        <section className="py-20 px-4 bg-oled-elevated">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary uppercase tracking-widest text-sm font-medium">
                {t.sections.fashion.title}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                {t.sections.fashion.heading}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {images.fashion.map((img, i) => (
                <div key={i} className="group rounded-card overflow-hidden">
                  <img
                    src={img}
                    alt={`Fashion ${i + 1}`}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 9: Philanthropy */}
        <section className="py-20 px-4 bg-oled-base">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <span className="text-primary uppercase tracking-widest text-sm font-medium">
                  {t.sections.philanthropy.title}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                  {t.sections.philanthropy.heading}
                </h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  LEE JUNHO is committed to giving back to society. Through various charitable initiatives, he supports education, healthcare, and environmental causes.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { cause: 'Education', amount: '₩500M+' },
                    { cause: 'Healthcare', amount: '₩300M+' },
                    { cause: 'Disaster Relief', amount: '₩200M+' },
                    { cause: 'Children', amount: '₩100M+' },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-card bg-oled-card border border-oled-border">
                      <p className="text-white/50 text-sm">{item.cause}</p>
                      <p className="text-primary font-semibold">{item.amount}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={images.news['Donation']}
                  alt="Philanthropy"
                  className="rounded-image w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Global Impact */}
        <section className="py-20 px-4 bg-oled-elevated">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary uppercase tracking-widest text-sm font-medium">
                {t.sections.impact.title}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                {t.sections.impact.heading}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '10M+', label: 'Fan Followers', icon: Users },
                { value: '50+', label: 'Countries', icon: Globe },
                { value: '1M+', label: 'Album Sales', icon: TrendingUp },
                { value: '500+', label: 'Events', icon: Star },
              ].map((stat, i) => (
                <div key={i} className="text-center p-6 rounded-card bg-oled-base border border-oled-border">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <stat.icon size={24} className="text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-white/60 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <MusicPlayer />
    </div>
  );
};

export default Home;