import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import MusicPlayer from '../components/MusicPlayer';
import {
  Heart, Users, Star, Award, Mail, MessageCircle, Image,
  Palette, Calendar, ChevronRight, Send, User, Crown, Zap, Gem
} from 'lucide-react';

const Community = () => {
  const { t } = useLanguage();
  const [messageType, setMessageType] = useState<'general' | 'kathy'>('general');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const fanTiers = [
    { name: t.community.tiers.bronze, icon: <Star />, color: 'from-amber-700/20 to-amber-700/10', border: 'border-amber-700/50', textColor: 'text-amber-700', benefits: ['Basic updates', 'Fan badge', 'Message board access'] },
    { name: t.community.tiers.silver, icon: <Zap />, color: 'from-gray-400/20 to-gray-400/10', border: 'border-gray-400/50', textColor: 'text-gray-400', benefits: ['Early announcements', 'Exclusive content', 'Priority support'] },
    { name: t.community.tiers.gold, icon: <Crown />, color: 'from-primary/20 to-primary/10', border: 'border-primary', textColor: 'text-primary', benefits: ['Fan events', 'Merchandise discounts', 'VIP access'] },
    { name: t.community.tiers.platinum, icon: <Gem />, color: 'from-purple-500/20 to-purple-500/10', border: 'border-purple-500/50', textColor: 'text-purple-500', benefits: ['Meet & greets', 'Behind scenes', 'Personalized items'] },
  ];

  const fanProjects = [
    { title: 'Birthday Project 2024', participants: 1500, status: 'Active' },
    { title: 'Global Fan Letter Campaign', participants: 3200, status: 'Ongoing' },
    { title: 'Charity Drive for Education', participants: 890, status: 'Completed' },
  ];

  const recentMessages = [
    { author: 'JupiterFan_KR', message: 'Can\'t wait for the new drama!', time: '2h ago' },
    { author: 'JunhoLover_US', message: 'He looked amazing at the awards!', time: '5h ago' },
    { author: 'GlobalOTP', message: 'Best actor! Deserved that award!', time: '1d ago' },
  ];

  return (
    <div className="min-h-screen bg-oled-base pb-20">
      <Navigation />
      <Hero />

      <div className="container mx-auto px-4 pt-20">
        {/* Section 1: Welcome */}
        <section className="py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.community.title}</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{t.community.welcome}</p>
        </section>

        {/* Section 2-11: Fan Tiers, Projects, Gallery, Events, etc. */}
        <section className="py-16">
          <div className="text-center mb-12">
            <span className="text-primary uppercase tracking-widest text-sm font-medium">
              {t.community.tiers.title}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Choose Your Fan Level</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fanTiers.map((tier, i) => (
              <div key={i} className={`p-6 rounded-card bg-gradient-to-br ${tier.color} border ${tier.border} hover:scale-105 transition-transform`}>
                <div className={`w-12 h-12 rounded-full bg-current/20 flex items-center justify-center ${tier.textColor} mb-4`}>
                  {tier.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{tier.name}</h3>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, j) => (
                    <li key={j} className="text-white/70 text-sm flex items-center gap-2">
                      <ChevronRight size={14} className="text-primary" /> {benefit}
                    </li>
                  ))}
                </ul>
                <button className={`w-full mt-6 py-2 rounded-btn border ${tier.border} ${tier.textColor} font-semibold hover:bg-current/10 transition-colors`}>
                  Join {tier.name}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Section 12: Fan Projects */}
        <section className="py-16 bg-oled-elevated rounded-card">
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-primary uppercase tracking-widest text-sm font-medium">Featured</span>
                <h2 className="text-2xl font-bold text-white mt-2">{t.community.projects}</h2>
              </div>
              <button className="px-4 py-2 rounded-btn border border-primary text-primary hover:bg-primary/10 transition-colors">
                Start Project
              </button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {fanProjects.map((project, i) => (
                <div key={i} className="p-6 rounded-card bg-oled-card border border-oled-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      project.status === 'Active' ? 'bg-green-500/20 text-green-500' :
                      project.status === 'Ongoing' ? 'bg-blue-500/20 text-blue-500' :
                      'bg-white/20 text-white/70'
                    }`}>{project.status}</span>
                    <span className="text-white/50 text-sm">{project.participants.toLocaleString()} participants</span>
                  </div>
                  <h3 className="text-white font-semibold">{project.title}</h3>
                  <button className="mt-4 text-primary hover:text-primary/80 text-sm flex items-center gap-1">
                    Learn More <ChevronRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 13: Message to the Team (Kathy Mentioned) */}
        <section className="py-16">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-primary uppercase tracking-widest text-sm font-medium">Connect</span>
              <h2 className="text-3xl font-bold text-white mt-2">{t.community.message.title}</h2>
              <p className="text-white/70 mt-4">{t.community.message.description}</p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-card bg-green-500/20 border border-green-500/50 text-center">
                <p className="text-green-500 font-semibold text-lg">Message sent successfully!</p>
                <p className="text-white/70 mt-2">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex gap-4 mb-6">
                  <button
                    type="button"
                    onClick={() => setMessageType('general')}
                    className={`flex-1 py-3 rounded-btn border transition-colors ${
                      messageType === 'general' ? 'bg-primary text-black border-primary' : 'border-oled-border text-white hover:border-primary'
                    }`}
                  >
                    {t.community.message.general}
                  </button>
                  <button
                    type="button"
                    onClick={() => setMessageType('kathy')}
                    className={`flex-1 py-3 rounded-btn border transition-colors ${
                      messageType === 'kathy' ? 'bg-primary text-black border-primary' : 'border-oled-border text-white hover:border-primary'
                    }`}
                  >
                    {t.community.message.toKathy}
                  </button>
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-input bg-oled-card border border-oled-border text-white focus:border-primary focus:outline-none transition-colors min-h-[44px]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-input bg-oled-card border border-oled-border text-white focus:border-primary focus:outline-none transition-colors min-h-[44px]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-input bg-oled-card border border-oled-border text-white focus:border-primary focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-btn bg-primary text-black font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Section 14: Recent Fan Messages */}
        <section className="py-16 bg-oled-elevated rounded-card">
          <div className="p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-primary uppercase tracking-widest text-sm font-medium">Live</span>
                <h2 className="text-2xl font-bold text-white mt-2">Fan Messages</h2>
              </div>
            </div>
            <div className="space-y-4">
              {recentMessages.map((msg, i) => (
                <div key={i} className="p-4 rounded-card bg-oled-card border border-oled-border flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <User size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold">{msg.author}</span>
                      <span className="text-white/30 text-sm">{msg.time}</span>
                    </div>
                    <p className="text-white/70 mt-1">{msg.message}</p>
                  </div>
                  <Heart size={16} className="text-white/30 hover:text-primary cursor-pointer transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 15: Fan Art Gallery Preview */}
        <section className="py-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-primary uppercase tracking-widest text-sm font-medium">Gallery</span>
              <h2 className="text-2xl font-bold text-white mt-2">{t.community.gallery}</h2>
            </div>
            <button className="px-4 py-2 rounded-btn border border-oled-border text-white hover:border-primary transition-colors">
              View All
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['/images/lee/IMG_5110.JPG', '/images/lee/IMG_5115.JPG', '/images/lee/IMG_5120.JPG', '/images/lee/IMG_5125.JPG'].map((img, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-image">
                <img src={img} alt={`Fan art ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Heart size={24} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
      <MusicPlayer />
    </div>
  );
};

export default Community;