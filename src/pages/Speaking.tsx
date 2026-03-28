import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Video, ChevronRight, FileText, Mic } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEO from '../components/SEO';
import AnimatedCounter from '../components/AnimatedCounter';
import {
  fadeUp, staggerContainer, staggerItem, EASE_SPRING,
} from '../lib/animations';

const Speaking = () => {
  const events = [
    {
      id: "cloud8-summit-2026",
      title: "Cloud8 Summit 2026",
      event: "Cloud8 Developer Conference",
      date: "January 16, 2026",
      location: "Amsterdam, Netherlands",
      audience: "1000+ developers",
      topic: "The Graph Awakens: Uniting Neo4j and Google's A2A Protocol",
      description: "A deep dive into combining Neo4j graph databases with Google's Agent-to-Agent (A2A) protocol to build interconnected, intelligent multi-agent systems with graph-powered knowledge.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=300&fit=crop&crop=entropy&auto=format",
      videoUrl: "",
      slidesUrl: "https://docs.google.com/presentation/d/19TYkMa9-LyvhlVZVA_pkKfdvo3HqmGwpkOOK2fvaOmE/edit?usp=sharing",
      type: "Technical Talk",
    },
    {
      id: "devfest-bangalore-2025",
      title: "Devfest Bangalore 2025",
      event: "Google Developer Conference",
      date: "December 6, 2025",
      location: "Bengaluru, India",
      audience: "1600+ developers",
      topic: "The Graph Awakens: Uniting Neo4j and Google's A2A Protocol",
      description: "Exploring how Neo4j and Google's A2A protocol can be combined to build interconnected AI agent systems with graph-powered knowledge.",
      image: "/images/devfest-bengaluru-2025/cover.jpg",
      videoUrl: "",
      slidesUrl: "https://docs.google.com/presentation/d/19TYkMa9-LyvhlVZVA_pkKfdvo3HqmGwpkOOK2fvaOmE/edit?usp=sharing",
      type: "Workshop",
    },
    {
      id: "gitex-global-dubai-2025",
      title: "GITEX Global 2025",
      event: "Gitex Global Conference",
      date: "October 16, 2025",
      location: "Dubai",
      audience: "2,00,000+ delegates",
      topic: "Mastering Google's A2A Protocol: Connecting AI Agents Seamlessly",
      description: "Covering agent cards, capability discovery, message-based communication, task management, and how A2A enables interoperable multi-agent systems.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&h=300&fit=crop&crop=entropy&auto=format",
      videoUrl: "",
      slidesUrl: "https://docs.google.com/presentation/d/15bbvQ0sioVpppUWoSWrD_TZ5j3cs8SM-i4PqicvfzsM/edit?usp=sharing",
      type: "Workshop",
    },
    {
      id: "acd-mumbai-2025",
      title: "AWS Community Day Mumbai 2025",
      event: "AWS Developer Conference",
      date: "October 11, 2025",
      location: "Mumbai, India",
      audience: "500+ developers",
      topic: "Orchestrating Financial Document Intelligence with AWS Bedrock & Step Functions",
      description: "Transforming manual document chaos in fintech into autonomous agentic AI workflows using AWS Bedrock Agents, Step Functions, and Amazon Textract.",
      image: "/images/acd-mumbai-2025/PHOTO-2026-03-22-21-49-39 6.jpg",
      videoUrl: "https://www.youtube.com/watch?v=dM5l7J0a478",
      slidesUrl: "https://docs.google.com/presentation/d/1pCS4o4xWdilztbqMHZLrtPjG885G-YnMdAYo8nXRQvs/edit?usp=sharing",
      type: "Technical Talk",
    },
    {
      id: "cypher-bengaluru-2025",
      title: "AIM Cypher Bengaluru 2025",
      event: "Analytics India Magazine Conference",
      date: "September 18, 2025",
      location: "Bengaluru, India",
      audience: "5000+ developers",
      topic: "Mastering Google's A2A Protocol: Deep Dive",
      description: "In-depth exploration of A2A protocol — agent cards, message-based communication, task execution, and MCP integration with real-world examples.",
      image: "/images/cypher-bengaluru-2025/PHOTO-2026-03-22-21-28-17 36.jpg",
      videoUrl: "",
      slidesUrl: "https://docs.google.com/presentation/d/1B1uxa0tAMKIxNanHQLSnwB3vI6S1RTP0YmYDPgpn1zw/edit?usp=sharing",
      type: "Technical Talk",
    },
    {
      id: "cloud-community-day-bengaluru-2025",
      title: "Google Cloud Community Day Bengaluru 2025",
      event: "Google Developer Conference",
      date: "August 23, 2025",
      location: "Bengaluru, India",
      audience: "1000+ developers",
      topic: "Mastering Google's A2A Protocol: Connecting AI Agents",
      description: "Hands-on session on A2A protocol covering agent cards, HTTPS message communication, task lifecycle management, and multi-agent collaboration demos.",
      image: "/images/cloud-community-day-bengaluru-2025/PHOTO-2026-03-22-21-49-39.jpg",
      videoUrl: "",
      slidesUrl: "https://docs.google.com/presentation/d/1FQtPobhvoI5ZHFyTCCW-rDezRjqRR_TPUrhiWy1dr1g/edit?usp=sharing",
      type: "Technical Talk",
    },
    {
      id: "cloud-community-day-mumbai-2025",
      title: "Google Cloud Community Day Mumbai 2025",
      event: "Google Developer Conference",
      date: "June 14, 2025",
      location: "Mumbai, India",
      audience: "700+ developers",
      topic: "Unlocking Customer Insights: AI-Powered Conversation Intelligence for Banks",
      description: "How banks leverage Google Audio Suite, Vertex AI, Gemini, and Neo4j to build AI-powered conversation intelligence—from transcription to actionable dashboards.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=500&h=300&fit=crop&crop=entropy&auto=format",
      videoUrl: "",
      slidesUrl: "https://docs.google.com/presentation/d/1UKYK8aztWO717Ryt4-1_gKiAe-beUUIChPBtHYlfFkQ/edit?usp=sharing",
      type: "Technical Talk",
    },
    {
      id: "asia-tech-x-singapore-techxlr8-asia-2025",
      title: "TechXLR8 Asia — AsiaTechXSingapore 2025",
      event: "AsiaTechXSingapore 2025",
      date: "May 27, 2025",
      location: "Singapore",
      audience: "40,000+ delegates",
      topic: "AutoML: Democratizing Machine Learning",
      description: "Presentation on automated machine learning tools and techniques to make ML accessible to non-experts.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop&crop=entropy&auto=format",
      videoUrl: "",
      slidesUrl: "",
      type: "Panel Discussion",
    },
    {
      id: "acd-bengaluru-2025",
      title: "AWS Community Day Bengaluru 2025",
      event: "AWS Developer Conference",
      date: "May 23, 2025",
      location: "Bengaluru, India",
      audience: "800+ developers",
      topic: "Building Ethical AI Systems",
      description: "Panel discussion on responsible AI development, bias mitigation, and ethical considerations in machine learning.",
      image: "/images/acd-bengaluru-2025/PHOTO-2026-03-22-21-28-17 25.jpg",
      videoUrl: "",
      slidesUrl: "",
      type: "Panel Discussion",
    },
    {
      id: "techshow-london-2024-panel",
      title: "Tech Show London 2024 — Panel",
      event: "International Tech Conference",
      date: "March 2024",
      location: "London, UK",
      audience: "20,000+ professionals",
      topic: "AI in Enterprise: Challenges & Opportunities",
      description: "Panel discussion with industry leaders on governance, scalability, and real-world AI deployment in enterprise environments.",
      image: "/images/techshow-london-2024-panel/PHOTO-2026-03-22-21-28-17 6.jpg",
      videoUrl: "https://www.youtube.com/watch?v=jx_9SbARV9M",
      slidesUrl: "",
      type: "Panel Discussion",
    },
    {
      id: "techshow-london-2024-solo",
      title: "Tech Show London 2024 — Solo",
      event: "International Tech Conference",
      date: "March 2024",
      location: "London, UK",
      audience: "20,000+ professionals",
      topic: "Gen-AI: Shaping the Future of Industries",
      description: "How Generative AI is transforming software, banking, healthcare, retail, and manufacturing with practical use cases.",
      image: "/images/techshow-london-2024-solo/PHOTO-2026-03-22-21-28-17.jpg",
      videoUrl: "",
      slidesUrl: "https://docs.google.com/presentation/d/1D9mQphyW8I0KJ-5dqPfvtzEFxguv7tEi/edit?usp=sharing",
      type: "Technical Talk",
    },
    {
      id: "acd-mumbai-2024",
      title: "AWS Community Day Mumbai 2024",
      event: "AWS Developer Conference",
      date: "April 6, 2024",
      location: "Mumbai, India",
      audience: "500+ professionals",
      topic: "Finance 2.0 — The Gen AI Blueprint",
      description: "How Gen AI reshapes financial services—conversational banking, RAG chatbots, and personalized financial advisors addressing real customer pain points.",
      image: "/images/acd-mumbai-2024/PHOTO-2026-03-22-21-28-17 11.jpg",
      videoUrl: "https://www.youtube.com/watch?v=XihAhZQZtV4",
      slidesUrl: "https://docs.google.com/presentation/d/1SoGiBi8lzsngTeHyqqkjMrpNHmwWusRj/edit?usp=sharing",
      type: "Technical Talk",
    },
    {
      id: "devfest-mumbai-2023",
      title: "Devfest Mumbai 2023",
      event: "Google Developer Conference",
      date: "December 9, 2023",
      location: "Mumbai, India",
      audience: "600+ professionals",
      topic: "Building Transformers: Code Your Vision",
      description: "Hands-on deep dive into transformer architecture—positional encoding, attention mechanisms, and building an encoder-decoder transformer from scratch.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop&crop=entropy&auto=format",
      videoUrl: "",
      slidesUrl: "https://docs.google.com/presentation/d/18151B3OcBubn7hXE7EBgtyCSbT-F-CduezLfPL9XX04/edit?usp=sharing",
      type: "Technical Talk",
    },
  ];

  const stats = [
    { end: 20, suffix: '+', prefix: '', label: 'Speaking Events' },
    { end: 300000, suffix: '+', prefix: '', label: 'Audience Reached' },
    { end: 4,  suffix: '+', prefix: '', label: 'Countries' },
    { end: 10, suffix: '+', prefix: '', label: 'Tech Topics' },
  ];

  const typeColors: Record<string, string> = {
    "Technical Talk": "from-indigo-600 to-violet-600",
    "Workshop": "from-cyan-600 to-blue-600",
    "Panel Discussion": "from-violet-600 to-pink-600",
  };

  return (
    <>
      <SEO
        title="Speaking | Shubham Agnihotri - Tech Talks & Presentations"
        description="Discover Shubham Agnihotri's speaking engagements, tech talks, and presentations on data science, machine learning, and AI innovations."
        keywords="tech talks, data science presentations, AI conferences, machine learning speaker, Shubham Agnihotri speaking"
      />

      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 mesh-bg opacity-40 dark:opacity-100" />
        <motion.div
          className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-violet-500/8 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-indigo-500/8 rounded-full blur-[80px]"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        />
      </div>

      <div className="px-4 sm:px-6 py-24 min-h-screen">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-14 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              <Mic size={14} />
              Public Speaking
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
              Conference{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Talks
              </span>
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-20 h-1 mx-auto bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full origin-left mb-4"
            />
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Sharing knowledge and insights at conferences, meetups, and workshops worldwide
            </p>
          </motion.div>

          {/* Stats — animated counters */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                className="text-center p-5 rounded-2xl glass-card border border-border/40 hover:border-primary/30 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold font-heading bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  <AnimatedCounter
                    end={stat.end}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2}
                  />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Events grid — whileInView stagger */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {events.map((event) => (
              <motion.div
                key={event.id}
                variants={staggerItem}
                className="group overflow-hidden rounded-2xl glass-card border border-border/40 hover:border-primary/30 hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-44">
                  <motion.img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5, ease: EASE_SPRING }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=300&fit=crop";
                    }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* Type badge */}
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-2.5 py-1 text-xs font-semibold rounded-full text-white bg-gradient-to-r ${
                        typeColors[event.type] || "from-indigo-600 to-violet-600"
                      }`}
                    >
                      {event.type}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      to={`/speaking/${event.id}`}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 text-gray-900 text-sm font-semibold hover:bg-white transition-colors"
                    >
                      View Details
                      <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-heading text-base font-semibold text-foreground mb-1 leading-snug group-hover:text-primary transition-colors duration-200">
                    {event.title}
                  </h3>
                  <p className="text-xs font-medium text-primary mb-3">{event.event}</p>

                  <div className="space-y-1.5 mb-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={11} className="flex-shrink-0" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={11} className="flex-shrink-0" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users size={11} className="flex-shrink-0" />
                      {event.audience}
                    </div>
                  </div>

                  <p className="text-xs font-medium text-foreground/80 mb-2 line-clamp-1">
                    "{event.topic}"
                  </p>

                  <p className="text-xs text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="flex gap-2">
                    {event.videoUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 gap-1.5 cursor-pointer border-border/60 hover:border-primary/40 hover:bg-primary/8 hover:text-primary text-xs"
                        asChild
                      >
                        <a href={event.videoUrl} target="_blank" rel="noopener noreferrer">
                          <Video size={12} />
                          Watch
                        </a>
                      </Button>
                    )}
                    {event.slidesUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 gap-1.5 cursor-pointer border-border/60 hover:border-primary/40 hover:bg-primary/8 hover:text-primary text-xs"
                        asChild
                      >
                        <a href={event.slidesUrl} target="_blank" rel="noopener noreferrer">
                          <FileText size={12} />
                          Slides
                        </a>
                      </Button>
                    )}
                    <Button
                      size="sm"
                      className="flex-1 gap-1.5 cursor-pointer bg-gradient-to-r from-indigo-600 to-violet-600 text-white border-0 text-xs hover:shadow-glow-sm"
                      asChild
                    >
                      <Link to={`/speaking/${event.id}`}>
                        Details
                        <ChevronRight size={12} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: EASE_SPRING }}
            className="mt-16 text-center rounded-2xl glass-card border border-primary/20 p-10 bg-gradient-to-br from-primary/5 to-violet-500/5"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE_SPRING }}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center mx-auto mb-4"
            >
              <Mic size={22} className="text-white" />
            </motion.div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
              Invite Me to Speak
            </h2>
            <p className="mx-auto mb-7 max-w-xl text-muted-foreground text-sm leading-relaxed">
              I'm always excited to share knowledge about data science, AI/ML, and technology at your event. Let's connect!
            </p>
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white border-0 shadow-glow hover:shadow-glow-lg cursor-pointer"
              asChild
            >
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Speaking;
