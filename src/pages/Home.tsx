import React, { useState, useEffect } from 'react';
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
  Instagram, Youtube, Twitter, Sparkles
} from 'lucide-react';

const leeGalleryImages = [
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

const Home = () => {
  const { t } = useLanguage();
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  // Section data for filmography, awards, etc.
  const filmography = [
    { year: '2024', title: 'The Last Summer', role: 'Main Lead', type: 'Drama' },
    { year: '2023', title: 'Midnight in Seoul', role: 'Supporting', type: 'Film' },
    { year: '2022', title: 'Heartbeat', role: 'Main Lead', type: 'Drama' },
    { year: '2021', title: 'Starlight', role: 'Guest', type: 'Film' },
    { year: '2020', title: 'Dream catcher', role: 'Main Lead', type: 'Drama' },
  ];

  const awards = [
    { year: '2024', award: 'Best Actor', event: 'Baeksang Arts Awards' },
    { year: '2023', award: 'Popularity Award', event: 'KBS Drama Awards' },
    { year: '2022', award: 'Best New Actor', event: 'Blue Dragon Awards' },
  ];

  const quotes = [
    { text: 'Acting is not about being famous. It\'s about connecting with the audience.', author: 'Lee Juhoo' },
    { text: 'Every role is a new journey of self-discovery.', author: 'Lee Juhoo' },
    { text: 'Music speaks when words fail.', author: 'Lee Juhoo' },
  ];

  const stats = [
    { label: t.sections.stats.height, value: '183cm' },
    { label: t.sections.stats.weight, value: '70kg' },
    { label: t.sections.stats.dob, value: '1994-01-18' },
    { label: t.sections.stats.bloodType, value: 'AB' },
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
                  src={leeGalleryImages[1]}
                  alt="Lee Juhoo"
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
                  {t.sections.intro.description}
                </p>
                <button className="px-6 py-3 rounded-btn bg-primary text-black font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
                  Learn More <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Biography Deep Dive */}
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
                { icon: <Film />, title: 'Actor', desc: 'Versatile performances across drama and film' },
                { icon: <Music />, title: 'Singer', desc: 'Multi-talented artist with vocal prowess' },
                { icon: <Star />, title: 'Entertainer', desc: 'Captivating audiences worldwide' },
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
                      src={leeGalleryImages[i * 2]}
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

        {/* Section 4: Awards Encyclopedia */}
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
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <Award size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">{award.award}</h3>
                    <p className="text-white/60 text-sm">{award.event}</p>
                  </div>
                  <span className="text-primary font-semibold">{award.year}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Physical Stats & Profile */}
        <section className="py-20 px-4 bg-oled-base">
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
                  src={leeGalleryImages[5]}
                  alt="Lee Juhoo Profile"
                  className="rounded-image w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Fashion & Style Archive */}
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
              {[2, 4, 7, 10].map((idx, i) => (
                <div key={i} className="group rounded-card overflow-hidden">
                  <img
                    src={leeGalleryImages[idx]}
                    alt={`Fashion ${i + 1}`}
                    className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Global Impact & Analytics */}
        <section className="py-20 px-4 bg-oled-base">
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
                { value: '10M+', label: 'Social Followers', icon: <Users /> },
                { value: '50+', label: 'Countries Reached', icon: <Globe /> },
                { value: '100+', label: 'Events Attended', icon: <Calendar /> },
                { value: '1B+', label: 'Total Views', icon: <TrendingUp /> },
              ].map((stat, i) => (
                <div key={i} className="text-center p-6 rounded-card bg-oled-card border border-oled-border">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-white/60 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 8: Video Content Library */}
        <section className="py-20 px-4 bg-oled-elevated">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="text-primary uppercase tracking-widest text-sm font-medium">
                  {t.sections.videos.title}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                  {t.sections.videos.heading}
                </h2>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="group relative rounded-card overflow-hidden">
                <video
                  src="/videos/PinLoad_Pin_von_Fernanda_Zapata_auf_Junho_Koreanische_schauspieler_Koreanisch_Schaus_1779397872838.mp4"
                  className="w-full aspect-video object-cover"
                  controls
                />
              </div>
              <div className="group relative rounded-card overflow-hidden">
                <video
                  src="/videos/PinLoad___1779397949116.mp4"
                  className="w-full aspect-video object-cover"
                  controls
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Discography & Music */}
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
              {[
                { title: 'Heartbeat', type: 'Single', year: '2024' },
                { title: 'Midnight Dreams', type: 'Album', year: '2023' },
                { title: 'Starlight', type: 'Single', year: '2023' },
              ].map((album, i) => (
                <div key={i} className="group rounded-card overflow-hidden bg-oled-card border border-oled-border hover:border-primary transition-colors">
                  <div className="aspect-square relative">
                    <img
                      src={leeGalleryImages[i * 3 + 3]}
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

        {/* Section 10: Philanthropy */}
        <section className="py-20 px-4 bg-oled-elevated">
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
                  Lee Juhoo is committed to giving back to society. Through various charitable initiatives,
                  he supports education, healthcare, and environmental causes.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { cause: 'Education', amount: '$500K+' },
                    { cause: 'Healthcare', amount: '$300K+' },
                    { cause: 'Environment', amount: '$200K+' },
                    { cause: 'Disaster Relief', amount: '$150K+' },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-card bg-oled-base border border-oled-border">
                      <p className="text-white/50 text-sm">{item.cause}</p>
                      <p className="text-primary font-semibold">{item.amount}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src={leeGalleryImages[8]}
                  alt="Philanthropy"
                  className="rounded-image w-full aspect-square object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 11: Press & Media Archive */}
        <section className="py-20 px-4 bg-oled-base">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary uppercase tracking-widest text-sm font-medium">
                {t.sections.press.title}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                {t.sections.press.heading}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { source: 'Korea Herald', headline: 'Rising Star Lee Juhoo Captivates Global Audience', date: '2024' },
                { source: 'Dispatch', headline: 'Inside the World of Lee Juhoo: An Exclusive Interview', date: '2024' },
                { source: 'Allkpop', headline: 'Lee Juhoo Wins Best Actor at Baeksang Awards', date: '2023' },
              ].map((article, i) => (
                <div key={i} className="p-6 rounded-card bg-oled-card border border-oled-border hover:border-primary transition-colors">
                  <span className="text-primary text-sm">{article.source}</span>
                  <h3 className="text-white font-semibold mt-2 line-clamp-2">{article.headline}</h3>
                  <p className="text-white/50 text-sm mt-2">{article.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 12: Fan Community Hub Preview */}
        <section className="py-20 px-4 bg-oled-elevated">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-primary uppercase tracking-widest text-sm font-medium">
                  {t.sections.community.title}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                  {t.sections.community.heading}
                </h2>
                <p className="text-white/70 leading-relaxed mb-6">
                  Join our global community of fans. Share your love for Lee Juhoo, participate in exclusive events, and connect with fellow enthusiasts.
                </p>
                <Link
                  to="/community"
                  className="px-6 py-3 rounded-btn bg-primary text-black font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                >
                  Join Community <ChevronRight size={18} />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['🎭', '🎨', '📸', '💬'].map((emoji, i) => (
                  <div key={i} className="p-6 rounded-card bg-oled-base border border-oled-border text-center">
                    <span className="text-4xl">{emoji}</span>
                    <p className="text-white/70 text-sm mt-2">
                      {['Fan Projects', 'Fan Art', 'Photo Sharing', 'Discussions'][i]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 13: Merchandise Universe */}
        <section className="py-20 px-4 bg-oled-base">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary uppercase tracking-widest text-sm font-medium">
                {t.sections.merchandise.title}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                {t.sections.merchandise.heading}
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: 'Official Photo Book', price: '$45' },
                { name: 'Fan Kit 2024', price: '$29' },
                { name: 'Concert DVD', price: '$35' },
                { name: 'Limited Edition Lightstick', price: '$25' },
              ].map((item, i) => (
                <div key={i} className="group rounded-card overflow-hidden bg-oled-card border border-oled-border hover:border-primary transition-colors">
                  <div className="aspect-square relative">
                    <img
                      src={leeGalleryImages[i * 4 + 2]}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-semibold">{item.name}</h3>
                    <p className="text-primary font-semibold mt-1">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 14: Interactive Career Timeline */}
        <section className="py-20 px-4 bg-oled-elevated">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary uppercase tracking-widest text-sm font-medium">
                {t.sections.timeline.title}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                {t.sections.timeline.heading}
              </h2>
            </div>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30" />
              {[
                { year: '2018', event: 'Debut with 2PM' },
                { year: '2020', event: 'First Drama Lead Role' },
                { year: '2022', event: 'Best New Actor Award' },
                { year: '2024', event: 'Baeksang Arts Awards Win' },
              ].map((item, i) => (
                <div key={i} className={`relative flex items-center mb-8 ${i % 2 === 0 ? 'justify-start pr-1/2' : 'justify-end pl-1/2'}`}>
                  <div className={`w-1/2 ${i % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="p-4 rounded-card bg-oled-card border border-oled-border">
                      <span className="text-primary font-semibold">{item.year}</span>
                      <p className="text-white">{item.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 15: The Person Behind the Star (Kathy) */}
        <section className="min-h-screen py-20 px-4 bg-oled-base flex items-center">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src={leeGalleryImages[0]}
                  alt="Lee Juhoo"
                  className="rounded-image w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
              </div>
              <div className="space-y-6">
                <span className="text-primary uppercase tracking-widest text-sm font-medium">
                  {t.sections.kathy.title}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {t.sections.kathy.heading}
                </h2>
                <p className="text-white/70 leading-relaxed text-lg">
                  {t.sections.kathy.description}
                </p>
                <p className="text-white/60 italic">
                  "{t.sections.kathy.story}"
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/kathy"
                    className="px-6 py-3 rounded-btn bg-primary text-black font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    {t.sections.kathy.learnMore} <ChevronRight size={18} />
                  </Link>
                  <button
                    onClick={() => document.getElementById('future')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-6 py-3 rounded-btn border border-white/30 text-white font-semibold hover:border-primary hover:text-primary transition-colors inline-flex items-center justify-center gap-2"
                  >
                    {t.sections.kathy.continue} <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 16: Future Projects & Pipeline */}
        <section id="future" className="py-20 px-4 bg-oled-elevated">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary uppercase tracking-widest text-sm font-medium">
                {t.sections.future.title}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                {t.sections.future.heading}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'New Drama Series', desc: 'Coming Summer 2024', image: leeGalleryImages[3] },
                { title: 'World Tour', desc: 'Asia & Beyond 2024-2025', image: leeGalleryImages[6] },
                { title: 'Solo Album', desc: 'Late 2024 Release', image: leeGalleryImages[9] },
              ].map((project, i) => (
                <div key={i} className="group relative rounded-card overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-xl">{project.title}</h3>
                    <p className="text-white/70">{project.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 17: Famous Quotes */}
        <section className="py-20 px-4 bg-oled-base">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary uppercase tracking-widest text-sm font-medium">
                {t.sections.quotes.title}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                {t.sections.quotes.heading}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {quotes.map((quote, i) => (
                <div key={i} className="p-8 rounded-card bg-oled-card border border-oled-border relative">
                  <span className="text-6xl text-primary/20 absolute top-4 left-4">"</span>
                  <p className="text-white/80 italic text-lg relative z-10 pt-8">
                    {quote.text}
                  </p>
                  <p className="text-primary font-semibold mt-4">— {quote.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 18: Endorsements */}
        <section className="py-20 px-4 bg-oled-elevated">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary uppercase tracking-widest text-sm font-medium">
                Brand Partnerships
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                Trusted by Premium Brands
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['Gucci', 'Samsung', 'Nike', 'Coca-Cola'].map((brand, i) => (
                <div key={i} className="flex items-center justify-center p-8 rounded-card bg-oled-base border border-oled-border">
                  <span className="text-white/30 text-2xl font-bold">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 19: Social Media Feed */}
        <section className="py-20 px-4 bg-oled-base">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <span className="text-primary uppercase tracking-widest text-sm font-medium">
                Stay Connected
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                Follow Lee Juhoo
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[11, 14, 17, 20].map((idx, i) => (
                <a key={i} href="#" className="group relative aspect-square overflow-hidden rounded-image">
                  <img
                    src={leeGalleryImages[idx]}
                    alt={`Social ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Instagram size={32} className="text-white" />
                  </div>
                </a>
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