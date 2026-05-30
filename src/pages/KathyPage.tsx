import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import MusicPlayer from '../components/MusicPlayer';
import {
  Heart, Mail, MapPin, Calendar, Coffee, Sparkles, Star,
  MessageCircle, Globe, Users, Gift, HeartHandshake, Link2,
  Smile, Map, Route, ChevronRight, Send
} from 'lucide-react';

const kathyImages = [
  '/images/kathy/kathy-1.jpeg',
  '/images/kathy/kathy-2.jpeg',
  '/images/kathy/kathy-3.jpeg',
  '/images/kathy/kathy-4.jpeg',
];

const KathyPage = () => {
  const { t } = useLanguage();
  const [messageForm, setMessageForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const timeline = [
    { year: '2020', event: 'First Message' },
    { year: '2021', event: 'First Meeting' },
    { year: '2022', event: 'Relationship Begins' },
    { year: '2023', event: 'Public Announcement' },
    { year: '2024', event: 'Joining the Team' },
  ];

  const stats = [
    { value: '2+', label: 'Years Together' },
    { value: '10K+', label: 'Messages Read' },
    { value: '50+', label: 'Countries Connected' },
    { value: '∞', label: 'Support Given' },
  ];

  const messages = [
    { author: 'Fan_KR', message: 'Thank you for taking care of him!', time: '1 week ago' },
    { author: 'GlobalFan', message: 'We love you, Kathy! Welcome!', time: '2 weeks ago' },
    { author: 'Jupiter_US', message: 'You two are adorable together!', time: '3 weeks ago' },
  ];

  return (
    <div className="min-h-screen bg-oled-base pb-20">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-oled-base via-oled-base/80 to-oled-base" />
        <div className="absolute inset-0">
          <img
            src={kathyImages[0]}
            alt="Lee Juhoo and Kathy"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{t.kathy.title}</h1>
          <p className="text-xl text-white/70">{t.kathy.subtitle}</p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Section 1: Official Statement */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Official</span>
            <h2 className="text-3xl font-bold text-white mt-2 mb-8">{t.kathy.statement}</h2>
            <div className="p-8 rounded-card bg-oled-card border border-oled-border">
              <p className="text-white/80 text-lg leading-relaxed italic">
                "I am Kathy Hutchison, and I am honored to be a part of the Lee Juhoo Official family.
                Lee Juhoo has touched so many lives, including mine. Now, I want to help bridge the
                connection between him and his fans. Together, we will build something special."
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Who Is Kathy Hutchison */}
        <section className="py-16 bg-oled-elevated">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={kathyImages[1]}
                alt="Kathy Hutchison"
                className="rounded-image w-full aspect-square object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </div>
            <div className="space-y-6">
              <span className="text-primary uppercase tracking-widest text-sm font-medium">Introduction</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{t.kathy.who}</h2>
              <p className="text-white/70 leading-relaxed">
                Kathy Hutchison is a professional manager, digital strategist, and now, the Managing Editor
                & Fans Mobilizer for Lee Juhoo Official. With years of experience in entertainment management
                and fan community building, she brings a unique perspective to supporting Lee Juhoo's career.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-card bg-oled-base border border-oled-border">
                  <MapPin size={20} className="text-primary mb-2" />
                  <p className="text-white font-semibold">Based in Nashville</p>
                  <p className="text-white/50 text-sm">Tennessee, USA</p>
                </div>
                <div className="p-4 rounded-card bg-oled-base border border-oled-border">
                  <Coffee size={20} className="text-primary mb-2" />
                  <p className="text-white font-semibold">Coffee Enthusiast</p>
                  <p className="text-white/50 text-sm">Lover of good conversations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: How They Met */}
        <section className="py-16">
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Love Story</span>
            <h2 className="text-3xl font-bold text-white mt-2">{t.kathy.howTheyMet}</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-white/70 text-lg leading-relaxed text-center">
              It began with a single message among millions. A fan, a comment, a connection —
              sometimes the universe arranges meetings in the most unexpected ways. What started
              as a simple exchange of thoughts grew into something neither of them anticipated.
            </p>
          </div>
        </section>

        {/* Section 4: Relationship Journey */}
        <section className="py-16 bg-oled-elevated">
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Timeline</span>
            <h2 className="text-3xl font-bold text-white mt-2">{t.kathy.journey}</h2>
          </div>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30" />
            {timeline.map((item, i) => (
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
        </section>

        {/* Section 5: It Wasn't Easy */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Honesty</span>
            <h2 className="text-3xl font-bold text-white mt-2 mb-8">{t.kathy.itWasntEasy}</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              Let's be real — long distance, different time zones, busy schedules, and the pressure of
              public attention. It wasn't always easy. There were moments of doubt, challenges to overcome,
              and lessons learned. But their commitment to each other and to making it work has been
              unwavering.
            </p>
          </div>
        </section>

        {/* Section 6: Manager-Wife Dynamic */}
        <section className="py-16 bg-oled-elevated">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6">
              <span className="text-primary uppercase tracking-widest text-sm font-medium">Partnership</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{t.kathy.managerWife}</h2>
              <p className="text-white/70 leading-relaxed">
                Kathy brings her professional expertise in management while maintaining the personal touch
                that only a partner can provide. This unique position allows her to understand both the
                business needs and the personal well-being of Lee Juhoo, ensuring he can focus on his
                craft while she handles the rest.
              </p>
              <p className="text-white/70 leading-relaxed">
                It's not just about managing — it's about supporting, encouraging, and being there through
                every high and low of this journey together.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={kathyImages[2]}
                alt="Manager-Wife Dynamic"
                className="rounded-image w-full aspect-square object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 7: Board Resolution */}
        <section className="py-16">
          <div className="p-8 rounded-card bg-oled-card border border-primary max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-primary" />
              <span className="text-primary uppercase tracking-widest text-sm font-medium">{t.kathy.boardResolution}</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              The Lee Juhoo Official Board has officially appointed Kathy Hutchison as the Managing Editor
              & Fans Mobilizer. This role encompasses managing official communications, coordinating
              fan events, and ensuring the fan community receives the best possible experience.
              This decision was made with full support from the management team and reflects our
              commitment to building a stronger connection between Lee Juhoo and his global fanbase.
            </p>
          </div>
        </section>

        {/* Section 8: About Kathy Deep Dive */}
        <section className="py-16 bg-oled-elevated">
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Background</span>
            <h2 className="text-3xl font-bold text-white mt-2">{t.kathy.aboutDeep}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Professional Background', desc: 'Years of experience in entertainment management and digital marketing.' },
              { title: 'Community Builder', desc: 'Passionate about connecting people and building meaningful communities.' },
              { title: 'Cultural Bridge', desc: 'Fluent in bridging Korean and Western cultures.' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-card bg-oled-base border border-oled-border">
                <Star size={24} className="text-primary mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 9: The Precious Gift */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Appreciation</span>
            <h2 className="text-3xl font-bold text-white mt-2 mb-8">{t.kathy.preciousGift}</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              What Kathy brings to Lee Juhoo's life is invaluable — someone who sees him not just as a star,
              but as a person. Someone who reminds him to stay grounded when the world tries to lift him
              too high. Someone who believes in his dreams and supports his ambitions unconditionally.
            </p>
            <p className="text-primary text-lg mt-6 font-medium italic">
              "The greatest gift is having someone who believes in you, even when the spotlight is bright."
            </p>
          </div>
        </section>

        {/* Section 10: Role Defined */}
        <section className="py-16 bg-oled-elevated">
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Position</span>
            <h2 className="text-3xl font-bold text-white mt-2">{t.kathy.roleDefined}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Managing Editor', desc: 'Overseeing official communications and content' },
              { title: 'Fans Mobilizer', desc: 'Coordinating fan events and community initiatives' },
              { title: 'Partner Support', desc: 'Personal support and well-being assistance' },
              { title: 'Cultural Bridge', desc: 'Connecting Korean and international fan communities' },
            ].map((role, i) => (
              <div key={i} className="p-6 rounded-card bg-oled-base border border-oled-border text-center">
                <HeartHandshake size={32} className="text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{role.title}</h3>
                <p className="text-white/60 text-sm">{role.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 11: Kathy's Vision */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/images/lee/IMG_5130.JPG"
                alt="Vision"
                className="rounded-image w-full aspect-square object-cover"
              />
            </div>
            <div className="space-y-6">
              <span className="text-primary uppercase tracking-widest text-sm font-medium">Future</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{t.kathy.vision}</h2>
              <p className="text-white/70 leading-relaxed">
                "My vision is simple — create a community where fans feel valued, heard, and connected.
                Lee Juhoo has given so much to his fans, and now I want to give back by building a
                platform that celebrates his work while honoring the incredible community that supports him."
              </p>
              <p className="text-white/70 leading-relaxed">
                "Together, we can make this fan site not just a place for news and updates, but a home
                for everyone who shares this journey with us."
              </p>
            </div>
          </div>
        </section>

        {/* Section 12: Nashville-Seoul Bridge */}
        <section className="py-16 bg-oled-elevated">
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Global Connection</span>
            <h2 className="text-3xl font-bold text-white mt-2">{t.kathy.bridge}</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="text-center p-6 rounded-card bg-oled-base border border-oled-border">
              <MapPin size={32} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white">Nashville</h3>
              <p className="text-white/50">Where Kathy is based</p>
            </div>
            <Link2 size={48} className="text-primary" />
            <div className="text-center p-6 rounded-card bg-oled-base border border-oled-border">
              <MapPin size={32} className="text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white">Seoul</h3>
              <p className="text-white/50">Where Lee Juhoo works</p>
            </div>
          </div>
        </section>

        {/* Section 13: Fan Reactions */}
        <section className="py-16">
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Community</span>
            <h2 className="text-3xl font-bold text-white mt-2">{t.kathy.reactions}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Welcome to the family, Kathy! 💕',
              'So happy Lee has someone like you!',
              'Thank you for taking care of him!',
            ].map((msg, i) => (
              <div key={i} className="p-6 rounded-card bg-oled-card border border-oled-border text-center">
                <Smile size={32} className="text-primary mx-auto mb-4" />
                <p className="text-white/80 italic">"{msg}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 14: Media Coverage */}
        <section className="py-16 bg-oled-elevated">
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Press</span>
            <h2 className="text-3xl font-bold text-white mt-2">{t.kathy.coverage}</h2>
          </div>
          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              { source: 'Koreaboo', headline: 'Lee Juhoo\'s Partner Joins Official Fan Site Team' },
              { source: 'Allkpop', headline: 'Kathy Hutchison Appointed as Managing Editor' },
              { source: 'Dispatch', headline: 'Inside Lee Juhoo\'s Support System' },
            ].map((article, i) => (
              <div key={i} className="p-4 rounded-card bg-oled-base border border-oled-border flex items-center justify-between">
                <div>
                  <span className="text-primary text-sm">{article.source}</span>
                  <p className="text-white font-medium mt-1">{article.headline}</p>
                </div>
                <ChevronRight size={20} className="text-white/30" />
              </div>
            ))}
          </div>
        </section>

        {/* Section 15: By the Numbers */}
        <section className="py-16">
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Impact</span>
            <h2 className="text-3xl font-bold text-white mt-2">{t.kathy.numbers}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 rounded-card bg-oled-card border border-oled-border">
                <p className="text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-white/70 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 16: Messages Memorial */}
        <section className="py-16 bg-oled-elevated">
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Appreciation</span>
            <h2 className="text-3xl font-bold text-white mt-2">{t.kathy.messages}</h2>
          </div>
          <div className="space-y-4 max-w-xl mx-auto">
            {messages.map((msg, i) => (
              <div key={i} className="p-4 rounded-card bg-oled-base border border-oled-border">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-primary font-semibold">{msg.author}</span>
                  <span className="text-white/30 text-sm">• {msg.time}</span>
                </div>
                <p className="text-white/70">{msg.message}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 17: Personal Gallery */}
        <section className="py-16">
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Gallery</span>
            <h2 className="text-3xl font-bold text-white mt-2">{t.kathy.gallery}</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {kathyImages.map((img, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-image">
                <img src={img} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
            ))}
          </div>
        </section>

        {/* Section 18: Day in the Life */}
        <section className="py-16 bg-oled-elevated">
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Behind the Scenes</span>
            <h2 className="text-3xl font-bold text-white mt-2">{t.kathy.dayInLife}</h2>
          </div>
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
        </section>

        {/* Section 19: Global Welcome Map */}
        <section className="py-16">
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Worldwide</span>
            <h2 className="text-3xl font-bold text-white mt-2">{t.kathy.welcomeMap}</h2>
          </div>
          <div className="p-8 rounded-card bg-oled-card border border-oled-border text-center">
            <Globe size={64} className="text-primary mx-auto mb-4" />
            <p className="text-white/70 text-lg">
              Fans from over 50 countries have welcomed Kathy to the Lee Juhoo Official family.
              Your support and warm messages mean the world to us.
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
        </section>

        {/* Section 20: Transition Roadmap */}
        <section className="py-16 bg-oled-elevated">
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Plan</span>
            <h2 className="text-3xl font-bold text-white mt-2">{t.kathy.roadmap}</h2>
          </div>
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
        </section>

        {/* Section 21: Contact Kathy */}
        <section className="py-16">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-primary uppercase tracking-widest text-sm font-medium">Connect</span>
              <h2 className="text-3xl font-bold text-white mt-2">{t.kathy.contactKathy}</h2>
              <p className="text-white/70 mt-4">Have a message for Kathy? She'd love to hear from you.</p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-card bg-green-500/20 border border-green-500/50 text-center">
                <p className="text-green-500 font-semibold text-lg">Message sent!</p>
                <p className="text-white/70 mt-2">Kathy will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white/70 text-sm mb-2">Name</label>
                  <input
                    type="text"
                    value={messageForm.name}
                    onChange={(e) => setMessageForm({ ...messageForm, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-input bg-oled-card border border-oled-border text-white focus:border-primary focus:outline-none transition-colors min-h-[44px]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    value={messageForm.email}
                    onChange={(e) => setMessageForm({ ...messageForm, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-input bg-oled-card border border-oled-border text-white focus:border-primary focus:outline-none transition-colors min-h-[44px]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">Message to Kathy</label>
                  <textarea
                    value={messageForm.message}
                    onChange={(e) => setMessageForm({ ...messageForm, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-input bg-oled-card border border-oled-border text-white focus:border-primary focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-btn bg-primary text-black font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <Send size={18} /> Send to Kathy
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Section 22: Board & Transition */}
        <section className="py-16 bg-oled-elevated">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Governance</span>
            <h2 className="text-3xl font-bold text-white mt-2 mb-8">{t.kathy.boardTransition}</h2>
            <p className="text-white/70 leading-relaxed">
              This transition has been approved by the Lee Juhoo Official Board with full transparency
              and proper governance. All decisions regarding Kathy's role and responsibilities have been
              documented and communicated to ensure a smooth integration into the team.
            </p>
          </div>
        </section>

        {/* Section 23: Final Tribute */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Closing</span>
            <h2 className="text-3xl font-bold text-white mt-2 mb-8">{t.kathy.tribute}</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Behind every great artist is someone who believes in them, supports them, and loves them
              for who they are beyond the fame. Kathy Hutchison is that person for Lee Juhoo.
            </p>
            <p className="text-primary text-lg font-medium italic">
              "Together, they are building something beautiful — a partnership, a team, and a community
              that celebrates artistry, authenticity, and connection."
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <img src="/images/lee/IMG_5110.JPG" alt="" className="w-16 h-16 rounded-full object-cover border-2 border-primary" />
              <img src="/images/lee/IMG_5120.JPG" alt="" className="w-16 h-16 rounded-full object-cover border-2 border-primary" />
            </div>
          </div>
        </section>

        {/* Section 24: Navigation Back */}
        <section className="py-16 bg-oled-elevated">
          <div className="text-center">
            <p className="text-white/70 mb-6">Thank you for learning about Kathy.</p>
            <a
              href="/"
              className="px-6 py-3 rounded-btn bg-primary text-black font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
            >
              Return to Lee Juhoo's World <ChevronRight size={18} />
            </a>
          </div>
        </section>
      </div>

      <Footer />
      <MusicPlayer />
    </div>
  );
};

export default KathyPage;