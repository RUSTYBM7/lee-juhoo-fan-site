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
  BadgeCheck,
  Edit3,
  User,
  Users2,
  CalendarCheck,
  Crown,
  HeartHandshake,
  Send,
  Check,
  MapPin,
  Link2,
  Route,
  Smile,
  Calendar,
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
  const [roleAccepted, setRoleAccepted] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
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

  const handleRoleAcceptance = () => {
    setRoleAccepted(true);
    window.location.href = 'mailto:contact@leejuhoo.com?subject=Role%20Acceptance%20Confirmation&body=I%20am%20confirming%20my%20acceptance%20of%20the%20Managing%20Editor%20%26%20Personal%20Manager%20position.%20Please%20provide%20further%20details%20on%20the%20next%20steps.';
  };

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const openNewsModal = (news: any) => {
    setSelectedNews(news);
    setNewsModalOpen(true);
  };

  const closeNewsModal = () => {
    setNewsModalOpen(false);
    setSelectedNews(null);
  };

  const kathyTimeline = [
    { year: '2020', event: 'First Message' },
    { year: '2021', event: 'First Meeting' },
    { year: '2022', event: 'Relationship Begins' },
    { year: '2023', event: 'Public Announcement' },
    { year: '2024', event: 'Joining the Team' },
  ];

  const kathyStats = [
    { value: '2+', label: 'Years Together' },
    { value: '10K+', label: 'Messages Read' },
    { value: '50+', label: 'Countries Connected' },
    { value: '∞', label: 'Support Given' },
  ];

  const kathyMessages = [
    { author: 'Fan_KR', message: 'Thank you for taking care of him!', time: '1 week ago' },
    { author: 'GlobalFan', message: 'We love you, Kathy! Welcome!', time: '2 weeks ago' },
    { author: 'Jupiter_US', message: 'You two are adorable together!', time: '3 weeks ago' },
  ];

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

        {/* SECTION 1: KATHY HUTCHISON ROLE ANNOUNCEMENT - EXPANDABLE */}
        <section className="py-8">
          <div
            className="bg-gradient-to-br from-primary/10 via-oled-elevated to-primary/5 rounded-card border border-primary/30 cursor-pointer hover:border-primary/50 transition-all"
            onClick={() => toggleSection('kathy')}
          >
            <div className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
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
                  <span className="text-white/50 text-sm hidden sm:block">Click to expand</span>
                  <div className={`w-12 h-12 rounded-full bg-oled-card flex items-center justify-center transition-transform ${expandedSection === 'kathy' ? 'rotate-180' : ''}`}>
                    <ChevronDown size={24} className="text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* EXPANDABLE KATHY CONTENT */}
          {expandedSection === 'kathy' && (
            <div className="mt-4 bg-oled-card rounded-card border border-oled-border p-8">
              {/* Image and Description */}
              <div className="grid lg:grid-cols-2 gap-12 mb-12">
                <div className="relative">
                  <img
                    src={kathyImages[0]}
                    alt="Kathy Hutchison"
                    className="rounded-image w-full aspect-video object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Who Is Kathy Hutchison</h3>
                    <p className="text-white/80 text-lg leading-relaxed">
                      {t.news.kathyAnnouncement.description}
                    </p>
                    <p className="text-white/70 leading-relaxed mt-4">
                      {t.news.kathyAnnouncement.roleDetails}
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Responsibilities */}
              <div className="bg-oled-base rounded-card p-8 mb-12 border border-oled-border">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <BadgeCheck className="text-primary" />
                  Key Responsibilities
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4 p-4 rounded-card bg-oled-card border border-oled-border">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Edit3 className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Managing Editor</h4>
                      <p className="text-white/60 text-sm">Overseeing all official communications and content</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-card bg-oled-card border border-oled-border">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <User className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Personal Manager</h4>
                      <p className="text-white/60 text-sm">Supporting Lee Juhoo's professional activities</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-card bg-oled-card border border-oled-border">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <CalendarCheck className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Event Manager</h4>
                      <p className="text-white/60 text-sm">Organizing fan events and meet-ups worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-card bg-oled-card border border-oled-border">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Users2 className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Fans Mobilizer</h4>
                      <p className="text-white/60 text-sm">Building and nurturing global fan community</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Official Statement */}
              <div className="bg-primary/10 rounded-card p-8 mb-12 border border-primary">
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="text-primary" />
                  <h3 className="text-xl font-bold text-white">Official Statement from the Board</h3>
                </div>
                <p className="text-white/80 text-lg italic leading-relaxed">
                  "{t.news.kathyAnnouncement.statementText}"
                </p>
              </div>

              {/* How They Met */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">How They Met</h3>
                <p className="text-white/70 text-lg leading-relaxed text-center max-w-3xl mx-auto">
                  It began with a single message among millions. A fan, a comment, a connection —
                  sometimes the universe arranges meetings in the most unexpected ways. What started
                  as a simple exchange of thoughts grew into something neither of them anticipated.
                </p>
              </div>

              {/* Relationship Timeline */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Relationship Timeline</h3>
                <div className="relative max-w-2xl mx-auto">
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30" />
                  {kathyTimeline.map((item, i) => (
                    <div key={i} className={`relative flex items-center mb-8 ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                      <div className={`w-1/2 ${i % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                        <div className="p-4 rounded-card bg-oled-base border border-oled-border">
                          <span className="text-primary font-semibold">{item.year}</span>
                          <p className="text-white">{item.event}</p>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Manager-Wife Dynamic */}
              <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                <div className="space-y-6">
                  <span className="text-primary uppercase tracking-widest text-sm font-medium">Partnership</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">Manager-Wife Dynamic</h3>
                  <p className="text-white/70 leading-relaxed">
                    Kathy brings her professional expertise in management while maintaining the personal touch
                    that only a partner can provide. This unique position allows her to understand both the
                    business needs and the personal well-being of Lee Juhoo, ensuring he can focus on his
                    craft while she handles the rest.
                  </p>
                </div>
                <div>
                  <img
                    src={kathyImages[1]}
                    alt="Manager-Wife Dynamic"
                    className="rounded-image w-full aspect-square object-cover"
                  />
                </div>
              </div>

              {/* The Precious Gift */}
              <div className="max-w-3xl mx-auto text-center mb-12">
                <span className="text-primary uppercase tracking-widest text-sm font-medium">Appreciation</span>
                <h3 className="text-3xl font-bold text-white mt-2 mb-6">The Precious Gift</h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  What Kathy brings to Lee Juhoo's life is invaluable — someone who sees him not just as a star,
                  but as a person. Someone who reminds him to stay grounded when the world tries to lift him
                  too high.
                </p>
                <p className="text-primary text-lg mt-6 font-medium italic">
                  "The greatest gift is having someone who believes in you, even when the spotlight is bright."
                </p>
              </div>

              {/* Nashville-Seoul Bridge */}
              <div className="mb-12 text-center">
                <span className="text-primary uppercase tracking-widest text-sm font-medium">Global Connection</span>
                <h3 className="text-3xl font-bold text-white mt-2 mb-6">Nashville-Seoul Bridge</h3>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  <div className="text-center p-6 rounded-card bg-oled-base border border-oled-border">
                    <MapPin size={32} className="text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-white">Nashville</h4>
                    <p className="text-white/50">Where Kathy is based</p>
                  </div>
                  <Link2 size={48} className="text-primary" />
                  <div className="text-center p-6 rounded-card bg-oled-base border border-oled-border">
                    <MapPin size={32} className="text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-white">Seoul</h4>
                    <p className="text-white/50">Where Lee Juhoo works</p>
                  </div>
                </div>
              </div>

              {/* Fan Reactions */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Fan Reactions</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {['Welcome to the family, Kathy!', 'So happy Lee has someone like you!', 'Thank you for taking care of him!'].map((msg, i) => (
                    <div key={i} className="p-6 rounded-card bg-oled-card border border-oled-border text-center">
                      <Smile size={32} className="text-primary mx-auto mb-4" />
                      <p className="text-white/80 italic">"{msg}"</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* By the Numbers */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">By the Numbers</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {kathyStats.map((stat, i) => (
                    <div key={i} className="text-center p-6 rounded-card bg-oled-base border border-oled-border">
                      <p className="text-4xl font-bold text-primary">{stat.value}</p>
                      <p className="text-white/70 mt-2">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day in the Life */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Day in the Life</h3>
                <div className="max-w-2xl mx-auto space-y-6">
                  {[
                    { time: 'Morning', activity: 'Checking fan messages and community updates' },
                    { time: 'Afternoon', activity: 'Coordinating with the team and planning content' },
                    { time: 'Evening', activity: 'Research, strategy, and maybe a late-night video call' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-card bg-oled-base border border-oled-border">
                      <Calendar size={20} className="text-primary flex-shrink-0 mt-1" />
                      <div>
                        <span className="text-primary font-semibold">{item.time}</span>
                        <p className="text-white/70 mt-1">{item.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Global Welcome */}
              <div className="mb-12 p-8 rounded-card bg-oled-card border border-oled-border text-center">
                <Globe size={64} className="text-primary mx-auto mb-4" />
                <p className="text-white/70 text-lg">
                  Fans from over 50 countries have welcomed Kathy to the Lee Juhoo Official family.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  {['Korea', 'USA', 'Japan', 'Thailand', 'Philippines', 'Indonesia', 'Brazil', 'Mexico'].map((country, i) => (
                    <span key={i} className="px-3 py-1 rounded-pill bg-primary/20 text-primary text-sm">
                      {country}
                    </span>
                  ))}
                  <span className="px-3 py-1 rounded-pill bg-primary text-black text-sm font-semibold">
                    + 42 more
                  </span>
                </div>
              </div>

              {/* Transition Roadmap */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Transition Roadmap</h3>
                <div className="space-y-4 max-w-2xl mx-auto">
                  {[
                    { phase: 'Phase 1', title: 'Community Foundation', status: 'Complete' },
                    { phase: 'Phase 2', title: 'Fan Engagement Initiatives', status: 'In Progress' },
                    { phase: 'Phase 3', title: 'Exclusive Content Launch', status: 'Coming Soon' },
                    { phase: 'Phase 4', title: 'Global Fan Events', status: 'Planning' },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-card bg-oled-base border border-oled-border flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Route size={20} className="text-primary" />
                        <div>
                          <span className="text-primary text-sm">{item.phase}</span>
                          <p className="text-white font-medium">{item.title}</p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        item.status === 'Complete' ? 'bg-green-500/20 text-green-500' :
                        item.status === 'In Progress' ? 'bg-blue-500/20 text-blue-500' :
                        item.status === 'Coming Soon' ? 'bg-primary/20 text-primary' :
                        'bg-white/20 text-white/70'
                      }`}>{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Gallery */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Personal Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {kathyImages.map((img, i) => (
                    <div key={i} className="group relative aspect-square overflow-hidden rounded-image">
                      <img src={img} alt={`Kathy ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Messages Memorial */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Messages Memorial</h3>
                <div className="space-y-4 max-w-xl mx-auto">
                  {kathyMessages.map((msg, i) => (
                    <div key={i} className="p-4 rounded-card bg-oled-base border border-oled-border">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-primary font-semibold">{msg.author}</span>
                        <span className="text-white/30 text-sm">• {msg.time}</span>
                      </div>
                      <p className="text-white/70">{msg.message}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Role Acceptance Section */}
              <div className="bg-oled-card rounded-card p-8 border border-oled-border text-center">
                <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center">
                  <HeartHandshake size={40} className="text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Accept Role Confirmation</h3>
                <p className="text-white/70 mb-8 max-w-xl mx-auto">
                  To confirm this role appointment, please connect with our team. Kathy will review and officially accept this prestigious position.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {roleAccepted ? (
                    <div className="px-6 py-3 rounded-btn bg-green-500/20 border border-green-500 text-green-500 font-semibold flex items-center justify-center gap-2">
                      <Check size={20} />
                      Role Confirmation Sent
                    </div>
                  ) : (
                    <button
                      onClick={handleRoleAcceptance}
                      className="px-8 py-3 rounded-btn bg-primary text-black font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 min-h-[48px]"
                    >
                      <Send size={18} />
                      Connect with Team
                    </button>
                  )}

                  <Link
                    to="/kathy"
                    className="px-8 py-3 rounded-btn border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors flex items-center justify-center gap-2"
                  >
                    View Full Page
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Close Button */}
              <div className="mt-8 text-center">
                <button
                  onClick={() => setExpandedSection(null)}
                  className="px-6 py-3 rounded-btn bg-oled-base border border-oled-border text-white/70 hover:text-white hover:border-primary transition-colors flex items-center justify-center gap-2 mx-auto"
                >
                  <ChevronDown size={18} className="rotate-180" />
                  Collapse Section
                </button>
              </div>
            </div>
          )}
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

        {/* SECTION 11: Kathy Connection */}
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
                <button
                  onClick={() => toggleSection('kathy')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-btn bg-primary text-black font-semibold hover:bg-primary/90 transition-colors"
                >
                  Learn More About Kathy
                  <ChevronDown size={18} className="rotate-270" />
                </button>
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