import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Linkedin, Github, Youtube, MessageSquare, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send');
      toast({
        title: 'Message Sent!',
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      toast({
        title: 'Failed to send',
        description: err.message || 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shubham.agnihotri1997@gmail.com',
      href: 'mailto:shubham.agnihotri1997@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, India',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/shubhamagnihotri17',
      gradient: 'from-blue-500 to-blue-600',
      description: 'Connect professionally',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/KillerStrike17',
      gradient: 'from-gray-600 to-gray-800',
      description: 'Check out my code',
    },
    {
      icon: Youtube,
      label: 'YouTube',
      href: 'https://youtube.com/@beginningofinfinity',
      gradient: 'from-red-500 to-red-600',
      description: 'Watch my content',
    },
  ];

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-border/60 bg-background/60 backdrop-blur-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200 text-sm';

  return (
    <>
      <SEO
        title="Contact | Get in Touch with Shubham Agnihotri"
        description="Contact Shubham Agnihotri for speaking engagements, collaboration opportunities, or to discuss data science and machine learning projects."
        keywords="contact Shubham Agnihotri, hire data scientist, speaking engagement, collaboration, ML consultant"
      />

      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 mesh-bg opacity-40 dark:opacity-100" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-indigo-500/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] bg-violet-500/8 rounded-full blur-[80px]" />
      </div>

      <div className="px-4 sm:px-6 py-24 min-h-screen">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              <MessageSquare size={14} />
              Let's Connect
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
              Get In{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Let's connect! Whether you want to discuss opportunities, collaborations, or just say hello.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-5">
            {/* ── Contact form ── */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="rounded-2xl glass-card border border-border/40 p-7 shadow-card">
                <h2 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Send size={18} className="text-primary" />
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block mb-1.5 text-xs font-semibold text-foreground/80 uppercase tracking-wide">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-1.5 text-xs font-semibold text-foreground/80 uppercase tracking-wide">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-1.5 text-xs font-semibold text-foreground/80 uppercase tracking-wide">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={inputClass}
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-1.5 text-xs font-semibold text-foreground/80 uppercase tracking-wide">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell me more about your project or question..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white border-0 shadow-glow hover:shadow-glow-lg transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* ── Right panel ── */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="lg:col-span-2 space-y-5"
            >
              {/* Contact info */}
              <div className="rounded-2xl glass-card border border-border/40 p-6 shadow-card">
                <h2 className="font-heading text-lg font-bold text-foreground mb-5 flex items-center gap-2">
                  <Mail size={16} className="text-primary" />
                  Contact Info
                </h2>
                <div className="space-y-5">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <item.icon size={16} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm text-foreground hover:text-primary transition-colors duration-200"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="rounded-2xl glass-card border border-border/40 p-6 shadow-card">
                <h2 className="font-heading text-lg font-bold text-foreground mb-5">
                  Find Me Online
                </h2>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-all duration-200 group cursor-pointer"
                      whileHover={{ x: 2 }}
                    >
                      <div
                        className={`w-9 h-9 rounded-lg bg-gradient-to-br ${social.gradient} flex items-center justify-center flex-shrink-0 shadow-sm`}
                      >
                        <social.icon size={16} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">{social.label}</p>
                        <p className="text-xs text-muted-foreground">{social.description}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability card */}
              <div className="rounded-2xl border border-primary/20 p-5 bg-gradient-to-br from-primary/8 via-violet-500/5 to-accent/8">
                <div className="flex items-center gap-2 mb-3">
                  <Zap size={16} className="text-primary" />
                  <h3 className="font-heading font-semibold text-foreground">Let's Collaborate!</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Open to speaking engagements, consulting opportunities, and interesting AI projects.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  Available for new projects
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
