import { motion } from 'framer-motion';
import { BookOpen, Brain, Code, Gamepad2, Database, Rocket } from 'lucide-react';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import AnimatedCounter from '../components/AnimatedCounter';
import {
  fadeUp, fadeInLeft, fadeInRight,
  staggerContainer, staggerItem,
} from '../lib/animations';

const stats = [
  { end: 7,   prefix: '',  suffix: '+',  label: 'Years Experience' },
  { end: 100, prefix: '₹', suffix: 'Cr+', label: 'Value Generated' },
  { end: 500, prefix: '',  suffix: '+',  label: 'People Trained' },
  { end: 3,   prefix: '',  suffix: '',   label: 'Companies Led' },
];

const About = () => {
  const interests = [
    {
      title: 'Artificial Intelligence',
      description: 'Building scalable AI/ML solutions, working with GenAI, VLMs, and OCR to automate complex workflows.',
      icon: Brain,
      gradient: 'from-indigo-500 to-violet-500',
      glow: 'group-hover:shadow-glow',
    },
    {
      title: 'Quantum Computing',
      description: 'Fascinated by the intersection of AI and QC as tools to shape a better, humane future.',
      icon: Rocket,
      gradient: 'from-violet-500 to-pink-500',
      glow: 'group-hover:shadow-glow-violet',
    },
    {
      title: 'Continuous Learning',
      description: 'Always reading research papers, exploring SOTA networks, and expanding my knowledge base.',
      icon: BookOpen,
      gradient: 'from-cyan-500 to-blue-500',
      glow: 'group-hover:shadow-glow-cyan',
    },
    {
      title: 'Problem Solving',
      description: "Passionate about decoding the world's puzzles, riddles, and mathematical problems.",
      icon: Code,
      gradient: 'from-emerald-500 to-cyan-500',
      glow: 'group-hover:shadow-glow-cyan',
    },
    {
      title: 'Data Architecture',
      description: 'Designing end-to-end data pipelines and implementing robust MLOps practices.',
      icon: Database,
      gradient: 'from-blue-500 to-indigo-500',
      glow: 'group-hover:shadow-glow',
    },
    {
      title: 'Gaming & Sports',
      description: "Playing Football/Badminton, and enjoying Action-Adventure games like Assassin's Creed and The Witcher.",
      icon: Gamepad2,
      gradient: 'from-pink-500 to-rose-500',
      glow: 'group-hover:shadow-glow-violet',
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 mesh-bg opacity-50 dark:opacity-100" />
        <motion.div
          className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
      </div>

      <SEO
        title="About Shubham Agnihotri | Background & Interests"
        description="Learn about Shubham Agnihotri's background, interests, and journey as a Senior Data Scientist and AI enthusiast."
        keywords="about Shubham Agnihotri, data scientist, AI enthusiast, machine learning, quantum computing"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "headline": "About Shubham Agnihotri",
          "description": "Background, interests, and professional philosophy of Shubham Agnihotri.",
          "mainEntity": {
            "@type": "Person",
            "name": "Shubham Agnihotri",
            "jobTitle": "Senior Data Scientist",
            "description": "A passionate data scientist focused on AI and building scalable solutions.",
          },
        }}
      />

      <div className="relative z-10 px-4 sm:px-6 py-24 mx-auto max-w-6xl">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            The Human Behind the Models
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-20 h-1 mx-auto bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full origin-left"
          />
        </motion.div>

        {/* Stats row — animated counters */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="text-center p-5 rounded-2xl glass-card border border-border/40 hover:border-primary/30 transition-all duration-300"
            >
              <div className="text-3xl font-bold font-heading bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                <AnimatedCounter
                  end={stat.end}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2.2}
                />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          {/* Photo */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="w-full lg:w-2/5 flex justify-center"
          >
            <div className="relative group max-w-sm w-full">
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-indigo-500/60 via-violet-500/40 to-cyan-500/60">
                <div className="rounded-2xl overflow-hidden bg-background aspect-square">
                  <img
                    src="https://raw.githubusercontent.com/KillerStrike17/KillerStrike17.github.io/refs/heads/master/assets/Shubham%20Agnihotri.webp"
                    alt="Shubham Agnihotri"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="w-full lg:w-3/5 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            <p className="text-xl md:text-2xl font-semibold font-heading text-foreground leading-snug">
              Hello World! I am Shubham Agnihotri.
            </p>

            <p>
              A naturally curious problem solver with a passion for transforming data into impact.
              Solving puzzles, riddles, and mathematical models are just a few of my core interests. My primary
              motivation is to decipher the world for people by solving day-to-day challenges using advancing
              technologies.
            </p>

            <p>
              To me,{' '}
              <span className="font-semibold text-foreground">Artificial Intelligence</span> and{' '}
              <span className="font-semibold text-foreground">Data Science</span> are the perfect tools to shape
              a better future. I've spent my career applying this philosophy—whether developing cutting-edge OCR
              and VLM systems at IDFC First Bank, pioneering agri-drone tech at S.AgriUdaan, or building digital
              twins at Arcadis.
            </p>

            <p>
              When I'm not swimming in a pool of 1s and 0s, you can find me playing Football or Badminton.
              Action-adventure games like{' '}
              <span className="italic text-foreground">Assassin's Creed</span> and{' '}
              <span className="italic text-foreground">The Witcher</span> are my favorite pastimes.
            </p>
          </motion.div>
        </div>

        {/* Interests grid */}
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="text-center mb-10"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground">
              What{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Drives Me
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className={`group relative p-6 rounded-2xl glass-card border border-border/40 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 cursor-default ${interest.glow}`}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="relative z-10 flex flex-col gap-4">
                  <motion.div
                    className={`inline-flex w-12 h-12 items-center justify-center rounded-xl bg-gradient-to-br ${interest.gradient} shadow-sm`}
                    whileHover={{ scale: 1.12, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  >
                    <interest.icon size={22} className="text-white" />
                  </motion.div>

                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground mb-2">{interest.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{interest.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
