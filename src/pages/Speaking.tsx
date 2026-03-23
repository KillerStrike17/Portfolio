import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Video, ChevronRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SEO from '../components/SEO';

const Speaking = () => {
  const events = [
    {
      id: "cloud8-summit-2026",
      title: "Cloud8 Summit 2026",
      event: "Cloud8 Developer Conference",
      date: "January 16, 2026",
      location: "India",
      audience: "1000+ developers",
      topic: "The Graph Awakens: Uniting Neo4j and Google's A2A Protocol",
      description: "A deep dive into combining Neo4j graph databases with Google's Agent-to-Agent (A2A) protocol to build interconnected, intelligent multi-agent systems with graph-powered knowledge.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=300&fit=crop&crop=entropy&auto=format",
      videoUrl: "",
      slidesUrl: "https://docs.google.com/presentation/d/19TYkMa9-LyvhlVZVA_pkKfdvo3HqmGwpkOOK2fvaOmE/edit?usp=sharing",
      type: "Technical Talk"
    },
    {
      id: "devfest-bangalore-2025",
      title: "Devfest Bangalore 2025",
      event: "Google Developer Conference",
      date: "December 6, 2025",
      location: "Bengaluru, India",
      audience: "1600+ developers",
      topic: "The Graph Awakens: Uniting Neo4j and Google's A2A Protocol",
      description: "Exploring how Neo4j graph databases and Google's A2A protocol can be combined to build interconnected AI agent systems with graph-powered knowledge and seamless agent-to-agent communication.",
      image: "/images/devfest-bengaluru-2025/cover.jpg",
      videoUrl: "",
      slidesUrl: "https://docs.google.com/presentation/d/19TYkMa9-LyvhlVZVA_pkKfdvo3HqmGwpkOOK2fvaOmE/edit?usp=sharing",
      type: "Workshop"
    },
    {
      id: "gitex-global-dubai-2025",
      title: "GITEX Global 2025",
      event: "Gitex Global Conference",
      date: "October 16, 2025",
      location: "Dubai",
      audience: "2,00,000+ delegates",
      topic: "Mastering Google's A2A Protocol: Connecting AI Agents Seamlessly",
      description: "A comprehensive session on Google's Agent-to-Agent (A2A) protocol — covering agent cards, capability discovery, message-based communication, task management, and how A2A enables interoperable multi-agent systems.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&h=300&fit=crop&crop=entropy&auto=format",
      videoUrl: "",
      slidesUrl: "https://docs.google.com/presentation/d/15bbvQ0sioVpppUWoSWrD_TZ5j3cs8SM-i4PqicvfzsM/edit?usp=sharing",
      type: "Workshop"
    },
    {
      id: "acd-mumbai-2025",
      title: "AWS Community Day Mumbai 2025",
      event: "AWS Developer Conference",
      date: "October 11, 2025",
      location: "Mumbai, India",
      audience: "500+ developers",
      topic: "Orchestrating Financial Document Intelligence: Agentic AI Workflows with AWS Bedrock & Step Functions",
      description: "How to transform manual document chaos in fintech (KYC, loans) into autonomous agentic AI workflows using AWS Bedrock Agents, Step Functions, and Amazon Textract for intelligent extraction, validation, and routing.",
      image: "/images/acd-mumbai-2025/PHOTO-2026-03-22-21-49-39 6.jpg",
      videoUrl: "https://www.youtube.com/watch?v=dM5l7J0a478",
      slidesUrl: "https://docs.google.com/presentation/d/1pCS4o4xWdilztbqMHZLrtPjG885G-YnMdAYo8nXRQvs/edit?usp=sharing",
      type: "Technical Talk"
    },
    {
      id: "cypher-bengaluru-2025",
      title: "AIM Cypher Bengaluru 2025",
      event: "Analytics India Magazine National Developer Conference",
      date: "September 18, 2025",
      location: "Bengaluru, India",
      audience: "5000+ developers",
      topic: "Mastering Google's A2A Protocol: Deep Dive",
      description: "An in-depth exploration of Google's A2A protocol — covering agents vs. agentic workflows, agent cards, message-based communication, task execution, Model Context Protocol (MCP), and A2A vs MCP comparison with real-world examples.",
      image: "/images/cypher-bengaluru-2025/PHOTO-2026-03-22-21-28-17 36.jpg",
      videoUrl: "",
      slidesUrl: "https://docs.google.com/presentation/d/1B1uxa0tAMKIxNanHQLSnwB3vI6S1RTP0YmYDPgpn1zw/edit?usp=sharing",
      type: "Technical Talk"
    },
    {
      id: "cloud-community-day-bengaluru-2025",
      title: "Google Cloud Community Day Bengaluru 2025",
      event: "Google Developer Conference",
      date: "August 23, 2025",
      location: "Bengaluru, India",
      audience: "1000+ developers",
      topic: "Mastering Google's A2A Protocol: Connecting AI Agents",
      description: "A hands-on session on Google's A2A protocol covering agent cards, capability discovery, HTTPS-based message communication, task lifecycle management, and live demos of multi-agent collaboration.",
      image: "/images/cloud-community-day-bengaluru-2025/PHOTO-2026-03-22-21-49-39.jpg",
      videoUrl: "",
      slidesUrl: "https://docs.google.com/presentation/d/1FQtPobhvoI5ZHFyTCCW-rDezRjqRR_TPUrhiWy1dr1g/edit?usp=sharing",
      type: "Technical Talk"
    },
    {
      id: "cloud-community-day-mumbai-2025",
      title: "Google Cloud Community Day Mumbai 2025",
      event: "Google Developer Conference",
      date: "June 14, 2025",
      location: "Mumbai, India",
      audience: "700+ developers",
      topic: "Unlocking Customer Insights: AI-Powered Conversation Intelligence for Banks",
      description: "How banks can leverage Google Audio Suite, Vertex AI, Gemini, and Neo4j to build an AI-powered conversation intelligence pipeline — from call ingestion and transcription to sentiment analysis, agent scoring, and actionable dashboards.",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=500&h=300&fit=crop&crop=entropy&auto=format",
      videoUrl: "",
      slidesUrl: "https://docs.google.com/presentation/d/1UKYK8aztWO717Ryt4-1_gKiAe-beUUIChPBtHYlfFkQ/edit?usp=sharing",
      type: "Technical Talk"
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
      type: "Panel Discussion"
    },
    {
      id: "asia-tech-x-singapore-developerxperience-summit-2025",
      title: "DeveloperXperience Summit — AsiaTechXSingapore 2025",
      event: "AsiaTechXSingapore 2025",
      date: "May 27, 2025",
      location: "Singapore",
      audience: "40,000+ delegates",
      topic: "AutoML: Democratizing Machine Learning",
      description: "Presentation on automated machine learning tools and techniques to make ML accessible to non-experts.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop&crop=entropy&auto=format",
      videoUrl: "",
      slidesUrl: "",
      type: "Panel Discussion"
    },
    {
      id: "acd-bengaluru-2025",
      title: "AWS Community Day Bengaluru 2025",
      event: "AWS Developer Conference",
      date: "May 23, 2025",
      location: "Bengaluru, India",
      audience: "800+ developers",
      topic: "Building Ethical AI Systems",
      description: "Panel discussion on responsible AI development, bias mitigation, and the importance of ethical considerations in machine learning.",
      image: "/images/acd-bengaluru-2025/PHOTO-2026-03-22-21-28-17 25.jpg",
      videoUrl: "",
      slidesUrl: "",
      type: "Technical Talk"
    },
    {
      id: "techshow-london-2024-panel",
      title: "Tech Show London 2024 — Panel Discussion",
      event: "International Tech Conference",
      date: "March 2024",
      location: "London, UK",
      audience: "20000+ professionals",
      topic: "AI in Enterprise: Challenges & Opportunities",
      description: "Panel discussion with industry leaders on the challenges and opportunities of deploying AI in enterprise environments, covering governance, scalability, and real-world impact.",
      image: "/images/techshow-london-2024-panel/PHOTO-2026-03-22-21-28-17 6.jpg",
      videoUrl: "https://www.youtube.com/watch?v=jx_9SbARV9M",
      slidesUrl: "",
      type: "Panel Discussion"
    },
    {
      id: "techshow-london-2024-solo",
      title: "Tech Show London 2024 — Solo Presentation",
      event: "International Tech Conference",
      date: "March 2024",
      location: "London, UK",
      audience: "20000+ professionals",
      topic: "Gen-AI: Shaping the Future of Industries",
      description: "Comprehensive presentation on how Generative AI is transforming industries — from software & IT, banking & finance, healthcare, and retail to manufacturing and media, with practical use cases across each sector.",
      image: "/images/techshow-london-2024-solo/PHOTO-2026-03-22-21-28-17.jpg",
      videoUrl: "",
      slidesUrl: "https://docs.google.com/presentation/d/1D9mQphyW8I0KJ-5dqPfvtzEFxguv7tEi/edit?usp=sharing&ouid=111966055386890027600&rtpof=true&sd=true",
      type: "Technical Talk"
    },
    {
      id: "acd-mumbai-2024",
      title: "AWS Community Day Mumbai 2024",
      event: "AWS Developer Conference",
      date: "April 6, 2024",
      location: "Mumbai, India",
      audience: "500+ professionals",
      topic: "Finance 2.0 — The Gen AI Blueprint",
      description: "Exploring how Generative AI is reshaping the financial services industry — from conversational banking and RAG-powered chatbots to personalized financial advisors, addressing real customer pain points like long hold times, fraud, and document overload.",
      image: "/images/acd-mumbai-2024/PHOTO-2026-03-22-21-28-17 11.jpg",
      videoUrl: "https://www.youtube.com/watch?v=XihAhZQZtV4",
      slidesUrl: "https://docs.google.com/presentation/d/1SoGiBi8lzsngTeHyqqkjMrpNHmwWusRj/edit?usp=sharing&ouid=111966055386890027600&rtpof=true&sd=true",
      type: "Technical Talk"
    },
    {
      id: "devfest-mumbai-2023",
      title: "Devfest Mumbai 2023",
      event: "Google Developer Conference",
      date: "December 09, 2023",
      location: "Mumbai, India",
      audience: "600+ professionals",
      topic: "Building Transformers: Code Your Vision",
      description: "A hands-on deep dive into the transformer architecture — from positional encoding and scaled dot-product attention to multi-head attention, feed-forward modules, and building a complete encoder-decoder transformer model from scratch.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop&crop=entropy&auto=format",
      videoUrl: "",
      slidesUrl: "https://docs.google.com/presentation/d/18151B3OcBubn7hXE7EBgtyCSbT-F-CduezLfPL9XX04/edit?usp=sharing",
      type: "Technical Talk"
    }
  ];

  const stats = [
    { number: "20+", label: "Speaking Events" },
    { number: "10,000+", label: "Audience Reached" },
    { number: "4+", label: "Countries" },
    { number: "10+", label: "Tech Topics" }
  ];

  return (
    <>
      <SEO
        title="Speaking | Shubham Agnihotri - Tech Talks & Presentations"
        description="Discover Shubham Agnihotri's speaking engagements, tech talks, and presentations on data science, machine learning, and AI innovations."
        keywords="tech talks, data science presentations, AI conferences, machine learning speaker, Shubham Agnihotri speaking"
      />
      <div className="px-4 py-20 min-h-screen">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-6xl text-foreground">
              Speaking
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              Sharing knowledge and insights at conferences, meetups, and workshops worldwide
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-8 mb-16 md:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-3xl font-bold md:text-4xl text-primary">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="overflow-hidden rounded-lg border transition-all duration-300 group bg-card border-border hover:shadow-xl"
                whileHover={{ y: -5 }}
              >
                <div className="overflow-hidden relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary text-primary-foreground">
                      {event.type}
                    </span>
                  </div>
                  <div className="flex absolute inset-0 justify-center items-center opacity-0 transition-opacity duration-300 bg-black/60 group-hover:opacity-100">
                    <Button variant="secondary" asChild>
                      <Link to={`/speaking/${event.id}`}>
                        More details
                        <ChevronRight size={16} className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">
                    {event.title}
                  </h3>
                  <p className="mb-3 font-medium text-primary">
                    {event.event}
                  </p>

                  <div className="mb-4 space-y-2 text-sm text-muted-foreground">
                    <div className="flex gap-2 items-center">
                      <Calendar size={14} />
                      {event.date}
                    </div>
                    <div className="flex gap-2 items-center">
                      <MapPin size={14} />
                      {event.location}
                    </div>
                    <div className="flex gap-2 items-center">
                      <Users size={14} />
                      {event.audience}
                    </div>
                  </div>

                  <h4 className="mb-2 font-semibold text-foreground">
                    "{event.topic}"
                  </h4>

                  <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
                    {event.description}
                  </p>

                  <div className="flex gap-2">
                    {event.videoUrl && (
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={event.videoUrl} target="_blank" rel="noopener noreferrer">
                          <Video size={16} className="mr-2" />
                          Watch
                        </a>
                      </Button>
                    )}
                    {event.slidesUrl && (
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={event.slidesUrl} target="_blank" rel="noopener noreferrer">
                          <FileText size={16} className="mr-2" />
                          Slides
                        </a>
                      </Button>
                    )}
                    <Button variant="default" size="sm" className="flex-1" asChild>
                      <Link to={`/speaking/${event.id}`}>
                        Details
                        <ChevronRight size={16} className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="py-12 mt-16 text-center rounded-lg border bg-primary/5 border-primary/20"
          >
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              Interested in having me speak at your event?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
              I'm always excited to share knowledge about data science, AI/ML, and technology.
              Let's connect to discuss speaking opportunities!
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Speaking;
