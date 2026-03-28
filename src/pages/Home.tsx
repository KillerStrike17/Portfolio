import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Download, Github, Linkedin, Youtube, ArrowRight,
  Building2, Mic, MapPin, Globe,
} from 'lucide-react';
import TypewriterEffect from '../components/TypewriterEffect';
import AnimatedCounter from '../components/AnimatedCounter';
import { Button } from '@/components/ui/button';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { Link } from 'react-router-dom';
import {
  EASE_SPRING, staggerContainer, staggerItem,
  fadeInLeft, fadeInRight, fadeUp,
} from '../lib/animations';

/* ─── Data ─────────────────────────────────────────────────── */
const techRow1 = [
  'Python', 'PyTorch', 'TensorFlow', 'LangChain', 'LlamaIndex',
  'OpenAI GPT-4o', 'HuggingFace', 'AWS Bedrock', 'AWS SageMaker',
  'Kubernetes', 'Docker', 'Apache Airflow', 'MLflow',
];
const techRow2 = [
  'Whisper', 'YOLO v8', 'Neo4j', 'CrewAI', 'FastAPI', 'Streamlit',
  'Azure ML', 'Vertex AI', 'Google Gemini', 'Unsloth', 'DVC',
  'Gradio', 'Deepgram', 'Pytorch Lightning',
];

const stats = [
  { end: 7,   suffix: '+',    prefix: '',  label: 'Years in AI/ML'       },
  { end: 100, suffix: 'Cr+',  prefix: '₹', label: 'Value Delivered'      },
  { end: 500, suffix: '+',    prefix: '',  label: 'Professionals Trained' },
  { end: 20,  suffix: '+',    prefix: '',  label: 'Global Talks'          },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/shubhamagnihotri17',  label: 'LinkedIn', hoverColor: 'hover:text-blue-400'   },
  { icon: Github,   href: 'https://github.com/KillerStrike17',           label: 'GitHub',   hoverColor: 'hover:text-white'      },
  { icon: Youtube,  href: 'https://youtube.com/@beginningofinfinity',    label: 'YouTube',  hoverColor: 'hover:text-red-400'    },
];

/* ─── Character reveal component ────────────────────────────── */
const CharReveal = ({
  text,
  className,
  startDelay = 0,
}: {
  text: string;
  className?: string;
  startDelay?: number;
}) => (
  <span className={`inline-flex ${className}`} aria-label={text}>
    {text.split('').map((char, i) => (
      <span key={i} className="overflow-hidden inline-block">
        <motion.span
          className="inline-block"
          custom={i}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { y: '115%', opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.65,
                delay: startDelay + i * 0.038,
                ease: EASE_SPRING,
              },
            },
          }}
        >
          {char}
        </motion.span>
      </span>
    ))}
  </span>
);

/* ═══════════════════════════════════════════════════════════ */
const Home = () => {
  const bentoRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  /* Parallax transforms for background orbs */
  const orbY1 = useTransform(scrollY, [0, 600], [0, -130]);
  const orbY2 = useTransform(scrollY, [0, 600], [0, 90]);
  const orbScale3 = useTransform(scrollY, [0, 400], [1, 1.3]);

  const roles = [
    'Senior Data Scientist',
    'ML Engineer',
    'Public Speaker',
    'Content Creator',
    'AI Innovator',
  ];

  const scrollToBento = () => {
    bentoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="overflow-x-hidden">
      <SEO
        title="Shubham Agnihotri | Senior Data Scientist & ML Engineer"
        description="Shubham Agnihotri is a Senior Data Scientist at IDFC First Bank, driving innovation through data science, machine learning, and AI."
        keywords="data science, machine learning, AI, ML engineer, public speaker, content creator, IDFC First Bank"
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Shubham Agnihotri',
          jobTitle: 'Senior Data Scientist',
          description: 'Driving innovation through data science at IDFC First Bank.',
          sameAs: [
            'https://linkedin.com/in/shubhamagnihotri17',
            'https://github.com/KillerStrike17',
            'https://youtube.com/@beginningofinfinity',
          ],
          worksFor: { '@type': 'Organization', name: 'IDFC First Bank' },
          knowsAbout: ['Data Science', 'Machine Learning', 'Artificial Intelligence', 'Public Speaking'],
        }}
      />

      {/* ══════════════════════════════════════════════════════
          § 1  HERO — cinematic full-viewport
      ══════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-4 text-center"
      >
        {/* ── Parallax background ── */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 mesh-bg opacity-50 dark:opacity-100" />

          <motion.div
            style={{ y: orbY1 }}
            animate={{ x: [0, 40, -20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[110px]"
          />
          <motion.div
            style={{ y: orbY2 }}
            animate={{ x: [0, -30, 20, 0], y: [0, 40, -20, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
            className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/12 rounded-full blur-[100px]"
          />
          <motion.div
            style={{ scale: orbScale3 }}
            animate={{ scale: [1, 1.25, 0.88, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-violet-500/8 dark:bg-violet-500/12 rounded-full blur-[80px]"
          />

          {/* Floating micro-particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-indigo-400/40"
              style={{
                left: `${15 + i * 14}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{
                y: [-8, 8, -8],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.4,
              }}
            />
          ))}
        </div>

        {/* ── Badge ── */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE_SPRING }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Opportunities
          </div>
        </motion.div>

        {/* ── Giant char-reveal name ── */}
        <div className="mb-5">
          <h1
            className="font-heading font-black leading-[0.95] tracking-tighter select-none"
            style={{ fontSize: 'clamp(3.5rem, 13vw, 11rem)' }}
          >
            <CharReveal
              text="SHUBHAM"
              className="block text-foreground"
              startDelay={0.18}
            />
            <CharReveal
              text="AGNIHOTRI"
              className="block hero-gradient-name"
              startDelay={0.52}
            />
          </h1>
        </div>

        {/* ── Animated gradient divider ── */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: EASE_SPRING }}
          className="w-full max-w-sm h-px mb-6 origin-center"
          style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--primary)/0.7), transparent)' }}
        />

        {/* ── Typewriter role ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mb-5 h-9 text-xl md:text-2xl text-muted-foreground"
        >
          <TypewriterEffect words={roles} />
        </motion.div>

        {/* ── Description ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 1.15, ease: EASE_SPRING }}
          className="max-w-xl mx-auto text-muted-foreground text-base md:text-lg leading-relaxed mb-9"
        >
          Driving innovation through data science at{' '}
          <span className="text-foreground font-semibold">IDFC First Bank</span>. Transforming
          raw data into{' '}
          <span className="text-foreground font-semibold">real-world impact</span> with AI & ML.
        </motion.p>

        {/* ── CTAs ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.28, ease: EASE_SPRING }}
          className="flex flex-wrap gap-3 justify-center mb-7"
        >
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

        {/* ── Social icons ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.38 }}
          className="flex gap-3 justify-center mb-16"
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1.42 + i * 0.08, ease: EASE_SPRING }}
              className={`w-10 h-10 rounded-full glass-card border border-border/60 flex items-center justify-center text-muted-foreground ${link.hoverColor} hover:border-primary/40 transition-all duration-200 cursor-pointer`}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.92 }}
            >
              <link.icon size={16} />
            </motion.a>
          ))}
        </motion.div>

        {/* ── Scroll indicator ── */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          onClick={scrollToBento}
          aria-label="Scroll to content"
          className="flex flex-col items-center gap-2.5 text-muted-foreground/50 hover:text-primary transition-colors duration-300 cursor-pointer group"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">Explore</span>
          <div className="w-[26px] h-[42px] rounded-full border-2 border-current flex justify-center pt-2 group-hover:border-primary transition-colors duration-300">
            <motion.div
              className="w-[5px] h-[5px] rounded-full bg-current"
              animate={{ y: [0, 18, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.button>
      </section>

      {/* ══════════════════════════════════════════════════════
          § 2  BENTO GRID — scroll target
      ══════════════════════════════════════════════════════ */}
      <section
        ref={bentoRef}
        className="py-20 px-4 sm:px-6 scroll-mt-16"
        id="about"
      >
        <div className="mx-auto max-w-6xl">
          {/* Label */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="text-center text-[11px] uppercase tracking-[0.3em] text-muted-foreground/60 font-semibold mb-10"
          >
            Who I Am
          </motion.p>

          {/* ── Top row: Photo + (Bio + Stats) ── */}
          <div className="flex flex-col lg:flex-row gap-4 mb-4">

            {/* Photo card */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="relative overflow-hidden rounded-2xl bento-card min-h-[340px] lg:w-72 xl:w-80 flex-shrink-0 group"
            >
              <img
                src="https://raw.githubusercontent.com/KillerStrike17/KillerStrike17.github.io/refs/heads/master/assets/Shubham%20Agnihotri.webp"
                alt="Shubham Agnihotri"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-heading text-xl font-bold text-white leading-tight">
                  Shubham Agnihotri
                </h3>
                <div className="flex items-center gap-1.5 text-white/65 text-xs mt-1 mb-3">
                  <MapPin size={11} />
                  Mumbai, India
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['AI/ML', 'Speaker', 'Founder'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/12 text-white/90 border border-white/15 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Bio + Stats stacked */}
            <div className="flex-1 flex flex-col gap-4">

              {/* Bio card */}
              <motion.div
                variants={fadeInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="flex-1 bento-card rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-primary mb-3">About Me</p>
                  <p className="font-heading text-xl md:text-2xl font-bold text-foreground leading-snug mb-3">
                    Hello World! I am Shubham Agnihotri.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A naturally curious problem solver, passionate about transforming data into real-world impact through AI & ML.
                    From building in-house OCR & VLM systems at IDFC First Bank to pioneering
                    agri-drone tech as a Founder — I believe technology is the greatest equaliser.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2.5 mt-5">
                  <a
                    href="https://drive.google.com/file/d/1GjgEwdGMQ-2YRdl4_YQy_CPSmALFEvvt/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      className="gap-1.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white border-0 shadow-glow-sm hover:shadow-glow transition-all cursor-pointer text-xs"
                    >
                      <Download size={13} />
                      Resume
                    </Button>
                  </a>
                  <Link to="/about">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1.5 border-border/60 hover:border-primary/40 hover:text-primary cursor-pointer text-xs"
                    >
                      Full Story <ArrowRight size={13} />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Stats: 2×2 grid with animated counters */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="grid grid-cols-2 gap-4"
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={staggerItem}
                    className="bento-card rounded-2xl p-4 flex flex-col gap-1 group"
                  >
                    <AnimatedCounter
                      end={stat.end}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      duration={2}
                      className="font-heading text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent leading-none group-hover:from-indigo-300 group-hover:to-cyan-300 transition-all"
                    />
                    <span className="text-xs text-muted-foreground font-medium">{stat.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* ── Bottom row: Company · Speaking · Social ── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {/* Company */}
            <motion.div
              variants={staggerItem}
              className="bento-card rounded-2xl p-5 group overflow-hidden relative"
            >
              <div className="absolute -top-8 -right-8 w-28 h-28 bg-indigo-500/8 rounded-full blur-2xl" />
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center mb-4 shadow-glow-sm group-hover:shadow-glow transition-all flex-shrink-0">
                <Building2 size={18} className="text-white" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Current Role</p>
              <h4 className="font-heading text-base font-bold text-foreground leading-tight">
                Senior Data Scientist
              </h4>
              <p className="text-sm font-semibold text-primary mt-0.5">IDFC First Bank</p>
              <p className="text-xs text-muted-foreground mt-1">2023 – Present · Mumbai</p>
              <Link
                to="/experience"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary mt-3 transition-colors font-medium group-hover:gap-1.5"
              >
                View career <ArrowRight size={11} />
              </Link>
            </motion.div>

            {/* Speaking */}
            <motion.div
              variants={staggerItem}
              className="bento-card rounded-2xl p-5 group overflow-hidden relative"
            >
              <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-violet-500/8 rounded-full blur-2xl" />
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-pink-500 flex items-center justify-center mb-4 transition-all">
                <Mic size={18} className="text-white" />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Public Speaker</p>
              <h4 className="font-heading text-2xl font-black bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                20+ Talks
              </h4>
              <p className="text-xs text-muted-foreground mt-1">4 countries · 300,000+ audience</p>
              <p className="text-xs text-muted-foreground">GITEX, TechShow London, DevFest…</p>
              <Link
                to="/speaking"
                className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary mt-3 transition-colors font-medium group-hover:gap-1.5"
              >
                All talks <ArrowRight size={11} />
              </Link>
            </motion.div>

            {/* Social */}
            <motion.div
              variants={staggerItem}
              className="bento-card rounded-2xl p-5"
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">Connect</p>
              <div className="space-y-3">
                {[
                  { icon: Linkedin, label: 'LinkedIn',  sub: '/in/shubhamagnihotri17', href: 'https://linkedin.com/in/shubhamagnihotri17',     color: 'from-blue-500 to-blue-600'  },
                  { icon: Github,   label: 'GitHub',    sub: '/KillerStrike17',        href: 'https://github.com/KillerStrike17',              color: 'from-gray-600 to-gray-800'  },
                  { icon: Youtube,  label: 'YouTube',   sub: '@beginningofinfinity',   href: 'https://youtube.com/@beginningofinfinity',       color: 'from-red-500 to-red-600'    },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group/row cursor-pointer"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${s.color} flex items-center justify-center flex-shrink-0`}>
                      <s.icon size={14} className="text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-foreground group-hover/row:text-primary transition-colors leading-none">{s.label}</p>
                      <p className="text-[10px] text-muted-foreground truncate mt-0.5">{s.sub}</p>
                    </div>
                    <ArrowRight size={11} className="ml-auto text-muted-foreground opacity-0 group-hover/row:opacity-100 transition-opacity flex-shrink-0" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          § 3  TECH STACK MARQUEE
      ══════════════════════════════════════════════════════ */}
      <section className="py-14 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center text-[10px] uppercase tracking-[0.35em] text-muted-foreground/50 font-semibold mb-7"
          >
            Powering Solutions With
          </motion.p>

          {/* Row 1 — forward */}
          <div className="flex overflow-hidden mb-3" aria-hidden="true">
            <div className="marquee-inner gap-3">
              {[...techRow1, ...techRow1].map((tech, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 px-4 py-2 rounded-full text-xs font-medium glass-card border border-border/50 text-muted-foreground whitespace-nowrap hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Row 2 — reverse */}
          <div className="flex overflow-hidden" aria-hidden="true">
            <div className="marquee-inner-reverse gap-3">
              {[...techRow2, ...techRow2].map((tech, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 px-4 py-2 rounded-full text-xs font-medium glass-card border border-border/50 text-muted-foreground whitespace-nowrap hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════
          § 4  FINAL CTA SECTION
      ══════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE_SPRING }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-violet-500/8 to-cyan-500/10 blur-2xl" />

          <div className="relative bento-card rounded-3xl border border-primary/20 px-8 py-14 md:px-16 overflow-hidden">
            <div className="absolute top-0 left-0 w-48 h-48 bg-indigo-500/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-cyan-500/8 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: EASE_SPRING }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide mb-7"
              >
                <Globe size={12} />
                Open to Opportunities
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: EASE_SPRING }}
                className="font-heading font-black text-foreground mb-4 leading-[1.05]"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
              >
                Ready to build something{' '}
                <span className="hero-gradient-name">incredible?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: EASE_SPRING }}
                className="text-muted-foreground text-base md:text-lg mb-9 max-w-xl mx-auto leading-relaxed"
              >
                I'm open to exciting AI/ML projects, speaking engagements,
                and collaboration opportunities. Let's create impact together.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: EASE_SPRING }}
                className="flex flex-wrap gap-4 justify-center"
              >
                <Link to="/projects">
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 border-border/70 hover:border-primary/40 hover:text-primary hover:bg-primary/8 cursor-pointer transition-all"
                  >
                    Explore Projects
                    <ArrowRight size={18} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white border-0 shadow-glow hover:shadow-glow-lg transition-all cursor-pointer"
                  >
                    Let's Connect
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
