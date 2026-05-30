import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import MusicPlayer from '../components/MusicPlayer';
import {
  Mail, Phone, MapPin, Send, ChevronRight, HelpCircle,
  FileText, Briefcase, Camera, Calendar, Scale, Users
} from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const departments = [
    {
      id: 'general',
      icon: <Mail />,
      title: t.contact.departments.general,
      email: 'contact@leejuhoo.com',
      description: 'General inquiries and questions'
    },
    {
      id: 'business',
      icon: <Briefcase />,
      title: t.contact.departments.business,
      email: 'business@leejuhoo.com',
      description: 'Business partnerships and collaborations'
    },
    {
      id: 'media',
      icon: <Camera />,
      title: t.contact.departments.media,
      email: 'press@leejuhoo.com',
      description: 'Media inquiries and interview requests'
    },
    {
      id: 'events',
      icon: <Calendar />,
      title: 'Events',
      email: 'events@leejuhoo.com',
      description: 'Event appearances and fan meetings'
    },
    {
      id: 'legal',
      icon: <Scale />,
      title: 'Legal',
      email: 'legal@leejuhoo.com',
      description: 'Legal matters and rights inquiries'
    },
    {
      id: 'kathy',
      icon: <Users />,
      title: `${t.contact.departments.kathy}`,
      email: 'kathy.hutchison@leejuhoo.com',
      description: t.contact.kathyNote,
      role: t.contact.kathyRole
    },
  ];

  const faqs = [
    {
      question: 'How can I meet Lee Juhoo?',
      answer: 'We occasionally hold fan meetings and events. Follow our official social media for announcements about upcoming events.'
    },
    {
      question: 'How do I join the fan club?',
      answer: 'Visit our Community page to sign up for our fan tier system and get exclusive benefits.'
    },
    {
      question: 'Can I use Lee Juhoo\'s photos for my fan project?',
      answer: 'For fan projects, please reach out to us through the contact form. We\'ll try our best to support your efforts.'
    },
    {
      question: 'How can I send a gift or letter to Lee Juhoo?',
      answer: 'You can send messages through our Community page. Please note that physical gifts cannot be accepted.'
    },
  ];

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-oled-base pb-20">
      <Navigation />
      <Hero />

      <div className="container mx-auto px-4 pt-20">
        {/* Section 1: Welcome */}
        <section className="py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.contact.title}</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Have a question or want to get in touch? We're here to help.
          </p>
        </section>

        {/* Section 2-8: Department Contacts */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, i) => (
              <div
                key={i}
                className={`p-6 rounded-card bg-oled-card border ${
                  dept.id === 'kathy' ? 'border-primary' : 'border-oled-border'
                } hover:border-primary transition-colors`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  dept.id === 'kathy' ? 'bg-primary/20 text-primary' : 'bg-oled-muted text-white/70'
                }`}>
                  {dept.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{dept.title}</h3>
                {dept.role && (
                  <span className="text-primary text-sm">{dept.role}</span>
                )}
                <p className="text-white/50 text-sm mb-4">{dept.description}</p>
                <a
                  href={`mailto:${dept.email}`}
                  className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2 text-sm"
                >
                  <Mail size={14} /> {dept.email}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Section 9: Contact Form */}
        <section className="py-16 bg-oled-elevated rounded-card">
          <div className="p-8">
            <div className="text-center mb-12">
              <span className="text-primary uppercase tracking-widest text-sm font-medium">Get in Touch</span>
              <h2 className="text-3xl font-bold text-white mt-2">Send Us a Message</h2>
              <p className="text-white/70 mt-4">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            {submitted ? (
              <div className="max-w-xl mx-auto p-8 rounded-card bg-green-500/20 border border-green-500/50 text-center">
                <p className="text-green-500 font-semibold text-lg">Message sent successfully!</p>
                <p className="text-white/70 mt-2">Thank you for reaching out. We'll respond within 2-3 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-input bg-oled-card border border-oled-border text-white focus:border-primary focus:outline-none transition-colors min-h-[44px]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-input bg-oled-card border border-oled-border text-white focus:border-primary focus:outline-none transition-colors min-h-[44px]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">Subject *</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-input bg-oled-card border border-oled-border text-white focus:border-primary focus:outline-none transition-colors min-h-[44px]"
                    required
                  >
                    <option value="general">General Inquiry</option>
                    <option value="business">Business</option>
                    <option value="media">Media</option>
                    <option value="events">Events</option>
                    <option value="legal">Legal</option>
                    <option value="fan">Fan Message</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white/70 text-sm mb-2">Message *</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
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

        {/* Section 10: FAQ + Team Directory */}
        <section className="py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* FAQ */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <HelpCircle className="text-primary" />
                <h2 className="text-2xl font-bold text-white">{t.contact.faq}</h2>
              </div>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="rounded-card bg-oled-card border border-oled-border overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                      className="w-full p-4 flex items-center justify-between text-left"
                    >
                      <span className="text-white font-medium pr-4">{faq.question}</span>
                      <ChevronRight
                        size={20}
                        className={`text-white/50 transition-transform ${expandedFaq === i ? 'rotate-90' : ''}`}
                      />
                    </button>
                    {expandedFaq === i && (
                      <div className="px-4 pb-4 text-white/70">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Team Directory */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Users className="text-primary" />
                <h2 className="text-2xl font-bold text-white">{t.contact.directory}</h2>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'General Team', role: 'Support', email: 'contact@leejuhoo.com' },
                  { name: 'Business Team', role: 'Partnerships', email: 'business@leejuhoo.com' },
                  { name: 'Media Team', role: 'Press', email: 'press@leejuhoo.com' },
                  { name: 'Events Team', role: 'Appearances', email: 'events@leejuhoo.com' },
                  { name: 'Kathy Hutchison', role: t.contact.kathyRole, email: 'kathy.hutchison@leejuhoo.com', highlight: true },
                ].map((member, i) => (
                  <div
                    key={i}
                    className={`p-4 rounded-card flex items-center gap-4 ${
                      member.highlight ? 'bg-primary/10 border border-primary' : 'bg-oled-card border border-oled-border'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      member.highlight ? 'bg-primary/20 text-primary' : 'bg-oled-muted text-white/70'
                    }`}>
                      <Users size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold ${member.highlight ? 'text-primary' : 'text-white'}`}>{member.name}</h3>
                      <p className="text-white/50 text-sm">{member.role}</p>
                    </div>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-white/70 hover:text-primary transition-colors text-sm"
                    >
                      {member.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <MusicPlayer />
    </div>
  );
};

export default Contact;