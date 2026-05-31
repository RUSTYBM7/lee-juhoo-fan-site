import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import MusicPlayer from '../components/MusicPlayer';
import {
  Sparkles,
  ChevronDown,
  Crown,
  Send,
  Check,
  MapPin,
  Globe,
  Mail,
  ArrowRight,
  X,
  ExternalLink,
  Clock,
  Star,
  Flame,
  Users,
  TrendingUp,
  Heart,
  Calendar,
} from 'lucide-react';

const kathyImages = [
  '/images/kathy/kathy-1.jpeg',
  '/images/kathy/kathy-2.jpeg',
  '/images/kathy/kathy-3.jpeg',
  '/images/kathy/kathy-4.jpeg',
];

const News = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [newsModalOpen, setNewsModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<any>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  const openNewsModal = (news: any) => {
    setSelectedNews(news);
    setNewsModalOpen(true);
  };

  const closeNewsModal = () => {
    setNewsModalOpen(false);
    setSelectedNews(null);
  };

  return (
    <div className="min-h-screen bg-oled-base pb-20">
      <Navigation />
      <Hero />

      <div className="container mx-auto px-4 pt-20">
        {/* NEWS HEADER */}
        <section className="py-16 text-center">
          <span className="text-primary uppercase tracking-widest text-sm font-medium">
            Latest Updates
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            {t.news.title}
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t.news.subtitle}
          </p>
        </section>

        {/* SECTION 1: KATHY HUTCHISON - REDIRECTS TO /kathy */}
        <section className="py-8">
          <Link
            to="/kathy"
            className="block bg-gradient-to-br from-primary/10 via-oled-elevated to-primary/5 rounded-card border border-primary/30 hover:border-primary/50 transition-all group"
          >
            <div className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Sparkles size={32} className="text-black" />
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-pill bg-primary text-black text-xs font-bold">
                      Official Announcement
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                      Kathy Hutchison: Official Role Announcement
                    </h2>
                    <p className="text-primary font-medium mt-1">
                      Managing Editor & Personal Manager
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-white/50 text-sm hidden sm:block">View full announcement</span>
                  <div className="w-12 h-12 rounded-full bg-oled-card flex items-center justify-center group-hover:bg-primary transition-colors">
                    <ArrowRight size={24} className="text-primary group-hover:text-black" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* SECTION 2: Featured News - Clickable Cards */}
        <section className="py-16">
          <div className="flex items-center gap-3 mb-8">
            <Flame className="text-primary" />
            <h2 className="text-2xl font-bold text-white">Featured News</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            {t.news.featuredNews.filter(n => n.featured).map((news) => (
              <div
                key={news.id}
                className="group rounded-card overflow-hidden bg-oled-card border border-oled-border hover:border-primary transition-all cursor-pointer"
                onClick={() => openNewsModal(news)}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-black text-xs font-bold rounded">
                    {news.category}
                  </div>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-semibold flex items-center gap-2">
                      Read More <ChevronDown size={16} className="rotate-90" />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-white/30 text-sm">{news.date}</span>
                  <h3 className="text-xl font-bold text-white mt-2 mb-3">{news.title}</h3>
                  <p className="text-white/60">{news.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: Recent Updates - Clickable */}
        <section className="py-16 bg-oled-elevated">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-8">
              <Clock className="text-primary" />
              <h2 className="text-2xl font-bold text-white">Recent Updates</h2>
            </div>
            <div className="space-y-4">
              {t.news.recentUpdates.map((update, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-card bg-oled-base border border-oled-border hover:border-primary/50 transition-colors cursor-pointer group"
                  onClick={() => {
                    const news = t.news.featuredNews[0];
                    openNewsModal(news);
                  }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Star className="text-primary" size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">{update.title}</p>
                  </div>
                  <span className="text-white/30 text-sm">{update.date}</span>
                  <ChevronDown size={20} className="text-white/30 group-hover:text-primary transition-colors rotate-270" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Upcoming Events */}
        <section className="py-16">
          <div className="flex items-center gap-3 mb-8">
            <Calendar size={24} className="text-primary" />
            <h2 className="text-2xl font-bold text-white">Upcoming Events</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.news.upcomingEvents.map((event, i) => (
              <div key={i} className="p-6 rounded-card bg-oled-card border border-oled-border hover:border-primary transition-colors cursor-pointer group">
                <Calendar className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
                <p className="text-primary font-semibold">{event.date}</p>
                <h3 className="text-white font-bold mt-2">{event.title}</h3>
                <p className="text-white/50 text-sm mt-1 flex items-center gap-1">
                  <MapPin size={14} /> {event.location}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: Social Media Highlights */}
        <section className="py-16 bg-oled-elevated">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="text-primary" />
              <h2 className="text-2xl font-bold text-white">Social Media Highlights</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {t.news.socialHighlights.map((social, i) => (
                <div key={i} className="p-6 rounded-card bg-oled-base border border-oled-border text-center cursor-pointer hover:border-primary transition-colors">
                  <p className="text-white/50 text-sm">{social.platform}</p>
                  <p className="text-3xl font-bold text-white mt-2">{social.followers}</p>
                  <p className="text-green-500 text-sm mt-2">{social.trend}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: Press Releases */}
        <section className="py-16">
          <div className="flex items-center gap-3 mb-8">
            <ExternalLink className="text-primary" />
            <h2 className="text-2xl font-bold text-white">Press Releases</h2>
          </div>
          <div className="space-y-4">
            {t.news.pressReleases.map((press, i) => (
              <div
                key={i}
                className="p-4 rounded-card bg-oled-card border border-oled-border flex items-center justify-between hover:border-primary/50 transition-colors cursor-pointer group"
                onClick={() => {
                  const news = t.news.featuredNews.find(n => n.title.includes('Lee Juhoo')) || t.news.featuredNews[0];
                  openNewsModal(news);
                }}
              >
                <div>
                  <span className="text-primary text-sm">{press.source} • {press.date}</span>
                  <p className="text-white font-medium mt-1">{press.title}</p>
                </div>
                <ChevronDown size={20} className="text-white/30 group-hover:text-primary transition-colors rotate-270" />
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: All News Grid */}
        <section className="py-16 bg-oled-elevated">
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Crown className="text-primary" />
                <h2 className="text-2xl font-bold text-white">All News</h2>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {t.news.featuredNews.map((news) => (
                <div
                  key={news.id}
                  className="group rounded-card overflow-hidden bg-oled-base border border-oled-border hover:border-primary transition-colors cursor-pointer"
                  onClick={() => openNewsModal(news)}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute top-3 left-3 px-2 py-1 bg-oled-base/80 backdrop-blur text-white text-xs font-semibold rounded">
                      {news.category}
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="text-white/30 text-xs">{news.date}</span>
                    <h3 className="text-white font-semibold mt-1 line-clamp-2">{news.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: Newsletter Subscription */}
        <section className="py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="p-8 rounded-card bg-gradient-to-br from-primary/20 to-oled-card border border-primary/30">
              <Mail className="text-primary mx-auto mb-6" size={48} />
              <h2 className="text-3xl font-bold text-white mb-4">{t.news.subscribe.title}</h2>
              <p className="text-white/70 mb-8">{t.news.subscribe.description}</p>

              {subscribed ? (
                <div className="px-6 py-4 rounded-card bg-green-500/20 border border-green-500 text-green-500 font-semibold flex items-center justify-center gap-2">
                  <Check size={20} />
                  {t.news.subscribe.success}
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.news.subscribe.placeholder}
                    className="flex-1 px-4 py-3 rounded-input bg-oled-base border border-oled-border text-white focus:border-primary focus:outline-none transition-colors min-h-[48px]"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-btn bg-primary text-black font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 min-h-[48px]"
                  >
                    <Send size={18} />
                    {t.news.subscribe.button}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 9: Community Stats */}
        <section className="py-16 bg-oled-elevated">
          <div className="p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-2">Fan Community Statistics</h2>
              <p className="text-white/70">Join millions of fans worldwide</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '10M+', label: 'Total Fans', icon: Users },
                { value: '50+', label: 'Countries', icon: Globe },
                { value: '1M+', label: 'Active Members', icon: Heart },
                { value: '500+', label: 'Fan Clubs', icon: Star },
              ].map((stat, i) => (
                <div key={i} className="text-center p-6 rounded-card bg-oled-base border border-oled-border cursor-pointer hover:border-primary transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 text-primary">
                    <stat.icon />
                  </div>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-white/60 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 10: Quick Links */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white">Explore Lee Juhoo's World</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link to="/" className="p-6 rounded-card bg-oled-card border border-oled-border hover:border-primary transition-colors text-center group">
              <HomeIcon className="text-primary mx-auto mb-3" size={32} />
              <h3 className="text-white font-semibold">Home</h3>
              <p className="text-white/50 text-sm mt-1">Return to main page</p>
            </Link>
            <Link to="/community" className="p-6 rounded-card bg-oled-card border border-oled-border hover:border-primary transition-colors text-center group">
              <Users className="text-primary mx-auto mb-3" size={32} />
              <h3 className="text-white font-semibold">Community</h3>
              <p className="text-white/50 text-sm mt-1">Join our fans</p>
            </Link>
            <Link to="/contact" className="p-6 rounded-card bg-oled-card border border-oled-border hover:border-primary transition-colors text-center group">
              <Mail className="text-primary mx-auto mb-3" size={32} />
              <h3 className="text-white font-semibold">Contact</h3>
              <p className="text-white/50 text-sm mt-1">Get in touch</p>
            </Link>
          </div>
        </section>

        {/* SECTION 11: Kathy Connection - Links to /kathy */}
        <section className="py-16 bg-oled-elevated">
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <span className="text-primary uppercase tracking-widest text-sm font-medium">Official Announcement</span>
                <h2 className="text-3xl font-bold text-white mt-4 mb-6">
                  Kathy Hutchison's Role in Our Team
                </h2>
                <p className="text-white/70 leading-relaxed mb-8">
                  As the Managing Editor and Personal Manager, Kathy Hutchison plays a pivotal role in
                  connecting Lee Juhoo with his global fanbase. Her responsibilities include managing
                  official communications, organizing fan events, and ensuring every fan feels valued.
                </p>
                <Link
                  to="/kathy"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-primary text-black font-semibold hover:bg-primary/90 transition-colors"
                >
                  Learn More About Kathy
                  <ArrowRight size={18} />
                </Link>
              </div>
              <div className="relative">
                <img
                  src={kathyImages[2]}
                  alt="Kathy Hutchison"
                  className="rounded-image w-full aspect-square object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* News Modal */}
      {newsModalOpen && selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={closeNewsModal}>
          <div className="bg-oled-card rounded-card border border-oled-border max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={selectedNews.image} alt={selectedNews.title} className="w-full aspect-video object-cover" />
              <button
                onClick={closeNewsModal}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>
              <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-black text-xs font-bold rounded">
                {selectedNews.category}
              </div>
            </div>
            <div className="p-8">
              <span className="text-white/30 text-sm">{selectedNews.date}</span>
              <h2 className="text-2xl font-bold text-white mt-2 mb-4">{selectedNews.title}</h2>
              <p className="text-white/70 leading-relaxed">{selectedNews.excerpt}</p>
              <p className="text-white/50 leading-relaxed mt-4">
                This article contains the latest updates about Lee Juhoo's activities, achievements, and upcoming projects.
                Stay tuned for more detailed coverage and exclusive insights into his career journey.
              </p>
              <div className="mt-8 flex justify-end">
                <button
                  onClick={closeNewsModal}
                  className="px-6 py-3 rounded-btn bg-oled-base border border-oled-border text-white/70 hover:text-white hover:border-primary transition-colors flex items-center gap-2"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <MusicPlayer />
    </div>
  );
};

// Custom Home Icon Component
const HomeIcon = ({ className, size }: { className?: string; size?: number }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9,22 9,12 15,12 15,22" />
  </svg>
);

export default News;