import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Youtube, ArrowRight, ChevronDown, Building2, Cpu } from 'lucide-react';
import TypewriterEffect from '../components/TypewriterEffect';
import { Button } from '@/components/ui/button';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { Link } from 'react-router-dom';

const stats = [
  { value: '5+', label: 'Years in AI/ML' },
  { value: '₹50Cr+', label: 'Value Delivered' },
  { value: '500+', label: 'Professionals Trained' },
  { value: '15K+', label: 'Acres Impacted' },
];

const Home = () => {
  const roles = [
    "Senior Data Scientist",
    "ML Engineer",
    "Public Speaker",
    "Content Creator",
    "AI Innovator",
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/shubhamagnihotri17",
      label: "LinkedIn",
      hoverClass: "hover:border-blue-500/40 hover:text-blue-400",
    },
    {
      icon: Github,
      href: "https://github.com/KillerStrike17",
      label: "GitHub",
      hoverClass: "hover:border-white/30 hover:text-white",
    },
    {
      icon: Youtube,
      href: "https://youtube.com/@beginningofinfinity",
      label: "YouTube",
      hoverClass: "hover:border-red-500/40 hover:text-red-400",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <SEO
        title="Shubham Agnihotri | Senior Data Scientist & ML Engineer"
        description="Shubham Agnihotri is a Senior Data Scientist at IDFC First Bank, driving innovation through data science, machine learning, and AI."
        keywords="data science, machine learning, AI, ML engineer, public speaker, content creator, IDFC First Bank"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Shubham Agnihotri",
          "jobTitle": "Senior Data Scientist",
          "description": "Driving innovation through data science at IDFC First Bank.",
          "sameAs": [
            "https://linkedin.com/in/shubhamagnihotri17",
            "https://github.com/KillerStrike17",
            "https://youtube.com/@beginningofinfinity",
          ],
          "worksFor": { "@type": "Organization", "name": "IDFC First Bank" },
          "knowsAbout": ["Data Science", "Machine Learning", "Artificial Intelligence", "Public Speaking"],
        }}
      />

      {/* ── Background ── */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Mesh grid */}
        <div className="absolute inset-0 mesh-bg opacity-60 dark:opacity-100" />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[100px] animate-pulse-slow" />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/12 rounded-full blur-[120px] animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-violet-500/8 dark:bg-violet-500/10 rounded-full blur-[80px] animate-float-slow"
        />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-24"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* ── Left: Text ── */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            {/* Status badge */}
            <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-7">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="font-heading text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] mb-5"
            >
              <span className="text-foreground">Shubham</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Agnihotri
              </span>
            </motion.h1>

            {/* Typewriter roles */}
            <motion.div variants={item} className="text-xl md:text-2xl text-muted-foreground mb-6 h-9">
              <TypewriterEffect words={roles} />
            </motion.div>

            {/* Description */}
            <motion.p variants={item} className="text-muted-foreground text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Driving innovation through data science at{' '}
              <span className="text-foreground font-medium">IDFC First Bank</span>. Transforming
              raw data into{' '}
              <span className="text-foreground font-medium">real-world impact</span> with AI & ML.
            </motion.p>

            {/* Stats */}
            <motion.div variants={item} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center lg:text-left px-3 py-3 rounded-xl glass-card"
                >
                  <div className="text-xl font-bold font-heading bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <a
                href="https://drive.google.com/file/d/1GjgEwdGMQ-2YRdl4_YQy_CPSmALFEvvt/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white border-0 shadow-glow hover:shadow-glow-lg transition-all duration-300 cursor-pointer"
                >
                  <Download size={18} />
                  Download Resume
                </Button>
              </a>
              <Link to="/projects">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-border/70 hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-all duration-300 cursor-pointer"
                >
                  View My Work
                  <ArrowRight size={18} />
                </Button>
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div variants={item} className="flex gap-3 justify-center lg:justify-start">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 glass-card text-muted-foreground transition-all duration-300 cursor-pointer text-sm ${link.hoverClass}`}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <link.icon size={16} />
                  <span className="hidden sm:inline font-medium">{link.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Profile photo ── */}
          <motion.div variants={item} className="relative flex-shrink-0">
            {/* Spinning gradient ring */}
            <div className="absolute -inset-[3px] rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 animate-spin-slow opacity-80 blur-[1px]" />
            {/* Glow halo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl scale-125" />

            {/* Photo */}
            <div className="relative w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-[3px] bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500">
              <div className="w-full h-full rounded-full overflow-hidden bg-background">
                <img
                  src="https://raw.githubusercontent.com/KillerStrike17/KillerStrike17.github.io/refs/heads/master/assets/Shubham%20Agnihotri.webp"
                  alt="Shubham Agnihotri"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>

            {/* Floating badge – company */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 -right-6 glass-card rounded-xl px-3 py-2 shadow-card"
            >
              <div className="flex items-center gap-2 text-xs">
                <Building2 size={14} className="text-primary flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">Senior DS</div>
                  <div className="text-muted-foreground">IDFC First Bank</div>
                </div>
              </div>
            </motion.div>

            {/* Floating badge – status */}
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-2 -left-6 glass-card rounded-xl px-3 py-2 shadow-card"
            >
              <div className="flex items-center gap-2 text-xs">
                <Cpu size={14} className="text-cyan-400 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-foreground">AI / ML Expert</div>
                  <div className="text-muted-foreground">5+ Years</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          variants={item}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-muted-foreground/60"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={14} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
