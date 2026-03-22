import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Video, ArrowLeft, ChevronLeft, ChevronRight, X, ZoomIn, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '../components/SEO';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/ui/carousel.css';

interface EventImage {
  url: string;
  alt: string;
}

interface Event {
  id: string;
  title: string;
  event: string;
  date: string;
  location: string;
  audience: string;
  topic: string;
  description: string;
  image: string;
  videoUrl: string;
  slidesUrl: string;
  type: string;
  images: EventImage[];
  fullDescription: string;
  highlights: string[];
}

const eventsData: Event[] = [
  {
    id: "cloud8-summit-2026",
    title: "Cloud8 Summit 2026",
    event: "Cloud8 Developer Conference",
    date: "January 16, 2026",
    location: "India",
    audience: "1000+ developers",
    topic: "The Graph Awakens: Uniting Neo4j and Google's A2A Protocol",
    description: "A deep dive into combining Neo4j graph databases with Google's A2A protocol for interconnected multi-agent systems.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=300&fit=crop&crop=entropy&auto=format",
    videoUrl: "",
    slidesUrl: "https://docs.google.com/presentation/d/19TYkMa9-LyvhlVZVA_pkKfdvo3HqmGwpkOOK2fvaOmE/edit?usp=sharing",
    type: "Technical Talk",
    images: [
      { url: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Main stage presentation" },
      { url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Audience engagement" },
      { url: "https://images.unsplash.com/photo-1560523159-4a9692d222f9?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Technical demo" },
      { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Networking session" }
    ],
    fullDescription: "At Cloud8 Summit 2026, I presented 'The Graph Awakens' — a session exploring how Neo4j graph databases and Google's Agent-to-Agent (A2A) protocol can be united to build powerful multi-agent systems with graph-powered knowledge. The talk covered what AI agents are, why graph databases like Neo4j are essential for modeling real-world connected data, and how the A2A protocol enables standardized communication between autonomous agents. I walked through the A2A protocol's core components: Agent Cards for capability discovery, Messages for HTTPS-based inter-agent communication, and Task lifecycle management. The session also included a live demo showing Neo4j's Cypher query language and the Neo4j Sandbox, combined with A2A agents collaborating across services. The audience learned how to architect interconnected agent systems that leverage the power of graph relationships for richer, more contextual AI reasoning.",
    highlights: [
      "Presented to 1000+ developers at a major cloud conference",
      "Demonstrated the synergy between Neo4j graph databases and Google's A2A protocol",
      "Covered agent discovery via Agent Cards, message-based communication, and task execution",
      "Live demo using Neo4j Sandbox with Cypher queries and A2A multi-agent collaboration",
      "Explained practical use cases for graph-powered agent systems in real-world applications"
    ]
  },
  {
    id: "devfest-bangalore-2025",
    title: "Devfest Bangalore 2025",
    event: "Google Developer Conference",
    date: "December 6, 2025",
    location: "Bangalore, India",
    audience: "1600+ developers",
    topic: "The Graph Awakens: Uniting Neo4j and Google's A2A Protocol",
    description: "Exploring Neo4j graph databases and Google's A2A protocol for interconnected AI agent systems.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=300&fit=crop&crop=entropy&auto=format",
    videoUrl: "",
    slidesUrl: "https://docs.google.com/presentation/d/19TYkMa9-LyvhlVZVA_pkKfdvo3HqmGwpkOOK2fvaOmE/edit?usp=sharing",
    type: "Workshop",
    images: [
      { url: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Devfest stage" },
      { url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Audience interaction" },
      { url: "https://images.unsplash.com/photo-1560523159-4a9692d222f9?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Live coding demo" },
      { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Q&A session" }
    ],
    fullDescription: "At Google Devfest Bangalore 2025, I delivered 'The Graph Awakens' — connecting Neo4j graph databases with Google's A2A protocol. The presentation explored how graph databases model real-world connected data far better than traditional relational databases, and how the A2A protocol provides a standardized framework for AI agents to communicate, discover each other's capabilities, and collaborate on tasks. The session covered the full A2A architecture: Agent Cards (agent.json) for capability discovery, HTTPS-based message communication, task lifecycle management (submitted → working → completed), and multi-modal support. I also introduced Neo4j fundamentals including the Cypher query language and demonstrated the Neo4j Sandbox. The talk concluded with a live demo showing multiple A2A agents collaborating using graph-powered knowledge bases.",
    highlights: [
      "Delivered to 1600+ developers at Google's flagship developer event in Bangalore",
      "Explained graph database advantages for modeling complex, interconnected AI knowledge",
      "Walked through the complete A2A protocol architecture with practical examples",
      "Demonstrated Neo4j Cypher queries and sandbox environment",
      "Live multi-agent demo showing A2A communication with graph-powered context"
    ]
  },
  {
    id: "gitex-global-dubai-2025",
    title: "GITEX Global 2025",
    event: "Gitex Global Conference",
    date: "October 16, 2025",
    location: "Dubai",
    audience: "2,00,000+ delegates",
    topic: "Mastering Google's A2A Protocol: Connecting AI Agents Seamlessly",
    description: "Comprehensive session on Google's A2A protocol — agent cards, capability discovery, and multi-agent collaboration.",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&h=300&fit=crop&crop=entropy&auto=format",
    videoUrl: "",
    slidesUrl: "https://docs.google.com/presentation/d/15bbvQ0sioVpppUWoSWrD_TZ5j3cs8SM-i4PqicvfzsM/edit?usp=sharing",
    type: "Workshop",
    images: [
      { url: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "GITEX Global stage" },
      { url: "https://images.unsplash.com/photo-1558403194-611308249627?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Technical presentation" },
      { url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Agent architecture demo" },
      { url: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Audience Q&A" }
    ],
    fullDescription: "At GITEX Global 2025 in Dubai — the world's largest tech conference — I presented 'Mastering Google's A2A Protocol: Connecting AI Agents Seamlessly.' The talk began by defining what AI agents are and contrasting AI workflows (structured, deterministic pipelines) with Agentic workflows (autonomous systems where AI decides next steps). I then deep-dived into the A2A protocol: why it's needed (illustrated with a movie-booking multi-agent scenario), how it replaces fragmented API integrations with standardized HTTPS-based communication, and its core components — Agent Cards for discovery, Messages for communication, and Tasks for execution. The session also covered A2A vs MCP (Model Context Protocol) comparison, helping developers understand when to use each. The presentation was tailored for the massive international audience, emphasizing cross-framework agent interoperability and real-world deployment patterns.",
    highlights: [
      "Presented at the world's largest tech conference with 200,000+ delegates",
      "Contrasted AI workflows vs. Agentic workflows with clear decision frameworks",
      "Deep-dived into A2A protocol: Agent Cards, Messages, Tasks, and execution lifecycle",
      "Compared A2A vs MCP protocols to help developers choose the right approach",
      "Used real-world multi-agent scenarios (movie booking, cab booking) to illustrate concepts"
    ]
  },
  {
    id: "acd-mumbai-2025",
    title: "AWS Community Day Mumbai 2025",
    event: "AWS Developer Conference",
    date: "October 11, 2025",
    location: "Mumbai, India",
    audience: "500+ developers",
    topic: "Orchestrating Financial Document Intelligence: Agentic AI Workflows with AWS Bedrock & Step Functions",
    description: "Transforming manual document chaos in fintech into autonomous agentic AI workflows using AWS services.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop&crop=entropy&auto=format",
    videoUrl: "https://www.youtube.com/watch?v=dM5l7J0a478",
    slidesUrl: "https://docs.google.com/presentation/d/1pCS4o4xWdilztbqMHZLrtPjG885G-YnMdAYo8nXRQvs/edit?usp=sharing",
    type: "Technical Talk",
    images: [
      { url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "AWS Community Day stage" },
      { url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Architecture walkthrough" },
      { url: "https://images.unsplash.com/photo-1560523159-6cd9d6165076?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Live demo" },
      { url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Q&A session" }
    ],
    fullDescription: "At AWS Community Day Mumbai 2025, I co-presented 'Orchestrating Financial Document Intelligence' — addressing the massive problem of manual document processing in financial services. Banks face slow approval cycles, error-prone data entry, compliance gaps, and high operational costs when handling KYC forms, loan agreements, bank statements, and invoices. The talk presented a solution using Agentic AI workflows on AWS: Amazon Bedrock Agents for specialized intelligence (an Extractor agent using Textract for data extraction, and a Validator agent for business logic), AWS Step Functions for workflow orchestration (sequencing, error handling, branching logic), and a complete security layer for data protection and compliance. I demonstrated end-to-end automation of a KYC bundle processing workflow — from document ingestion through S3, intelligent extraction, validation, to automated decision-making and routing. The talk showed how this approach replaces third-party vendors and saves significant operational costs.",
    highlights: [
      "Co-presented with Ekta Shah to 500+ AWS developers in Mumbai",
      "Addressed the  Rs.50Cr+ document processing cost problem in financial services",
      "Demonstrated Agentic architecture: Extractor and Validator agents on AWS Bedrock",
      "Showed AWS Step Functions orchestration with branching logic and error handling",
      "Live demo of automated KYC bundle processing from ingestion to decision-making"
    ]
  },
  {
    id: "cypher-bengaluru-2025",
    title: "AIM Cypher Bengaluru 2025",
    event: "Analytics India Magazine National Developer Conference",
    date: "September 18, 2025",
    location: "Bengaluru, India",
    audience: "5000+ developers",
    topic: "Mastering Google's A2A Protocol: Deep Dive",
    description: "In-depth exploration of Google's A2A protocol, covering agents, agent cards, MCP, and real-world examples.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop&crop=entropy&auto=format",
    videoUrl: "",
    slidesUrl: "https://docs.google.com/presentation/d/1B1uxa0tAMKIxNanHQLSnwB3vI6S1RTP0YmYDPgpn1zw/edit?usp=sharing",
    type: "Technical Talk",
    images: [
      { url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "AIM Cypher keynote stage" },
      { url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Protocol architecture explanation" },
      { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "A2A vs MCP comparison" },
      { url: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Live examples demonstration" }
    ],
    fullDescription: "At AIM Cypher Bengaluru 2025 — one of India's largest analytics and AI conferences with 5000+ developers — I delivered a deep-dive session on Google's A2A protocol. The talk started with a clear distinction between AI workflows (structured pipelines with fixed steps) and Agentic workflows (autonomous systems where AI decides next steps). I then covered the complete A2A protocol stack: why standardized agent communication is needed, Agent Cards (agent.json) for capability discovery, Messages for HTTPS-based communication between agents, and Task execution lifecycle. A significant portion of the talk was dedicated to comparing A2A with Model Context Protocol (MCP) — explaining when to use each, their complementary nature, and architectural differences. The session concluded with real-world examples demonstrating how A2A agents can be composed to solve complex multi-step problems across different frameworks and providers.",
    highlights: [
      "Presented to 5000+ developers at India's premier analytics conference",
      "Distinguished AI workflows vs. Agentic workflows with practical comparisons",
      "Complete A2A protocol deep-dive: Agent Cards, Messages, Tasks, and execution",
      "Detailed comparison of A2A vs MCP with clear decision guidance",
      "Real-world examples of cross-framework multi-agent systems using A2A"
    ]
  },
  {
    id: "cloud-community-day-bengaluru-2025",
    title: "Google Cloud Community Day Bengaluru 2025",
    event: "Google Developer Conference",
    date: "August 23, 2025",
    location: "Bengaluru, India",
    audience: "1000+ developers",
    topic: "Mastering Google's A2A Protocol: Connecting AI Agents",
    description: "Hands-on session on A2A protocol covering agent cards, HTTPS communication, and live agent demos.",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=500&h=300&fit=crop&crop=entropy&auto=format",
    videoUrl: "",
    slidesUrl: "https://docs.google.com/presentation/d/1FQtPobhvoI5ZHFyTCCW-rDezRjqRR_TPUrhiWy1dr1g/edit?usp=sharing",
    type: "Technical Talk",
    images: [
      { url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Cloud Community Day stage" },
      { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "A2A architecture diagram" },
      { url: "https://images.unsplash.com/photo-1558403194-611308249627?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Live coding demo" },
      { url: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Developer networking" }
    ],
    fullDescription: "At Google Cloud Community Day Bengaluru 2025, I presented 'Mastering Google's A2A Protocol' — a focused, hands-on session on connecting AI agents using standardized communication. The talk covered the A2A protocol's motivation (replacing fragmented agent APIs), its core architecture components — Agent Cards for self-describing agent capabilities, HTTPS-based Messages for inter-agent communication (including message structure with roles, parts, and task/context IDs), and the Task lifecycle from submission to completion. I demonstrated using practical scenarios: a multi-agent movie and cab booking system where agents discover each other through Agent Cards, communicate via standardized messages, and coordinate task execution. The session included live coding of an AgentExecutor class showing how to implement agents that conform to the A2A protocol. Developers left with a clear understanding of how to build A2A-compliant agents.",
    highlights: [
      "Presented to 1000+ Google Cloud developers in Bengaluru",
      "Focused on practical implementation of A2A protocol agents",
      "Walked through Agent Card structure (agent.json) with real examples",
      "Live demo of multi-agent communication and task coordination",
      "Showed code implementation of AgentExecutor class for A2A agents"
    ]
  },
  {
    id: "cloud-community-day-mumbai-2025",
    title: "Google Cloud Community Day Mumbai 2025",
    event: "Google Developer Conference",
    date: "June 14, 2025",
    location: "Mumbai, India",
    audience: "700+ developers",
    topic: "Unlocking Customer Insights: AI-Powered Conversation Intelligence for Banks",
    description: "Building an AI-powered conversation intelligence pipeline using Google Audio Suite, Vertex AI, Gemini, and Neo4j.",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=500&h=300&fit=crop&crop=entropy&auto=format",
    videoUrl: "",
    slidesUrl: "https://docs.google.com/presentation/d/1UKYK8aztWO717Ryt4-1_gKiAe-beUUIChPBtHYlfFkQ/edit?usp=sharing",
    type: "Technical Talk",
    images: [
      { url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Community Day presentation" },
      { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Pipeline architecture" },
      { url: "https://images.unsplash.com/photo-1558403194-611308249627?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Data flow demonstration" },
      { url: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Audience interaction" }
    ],
    fullDescription: "At Google Cloud Community Day Mumbai 2025, I presented 'Unlocking Customer Insights' — a comprehensive session on building AI-powered conversation intelligence for the banking industry. The talk opened with staggering industry statistics: banks handle 3.75 million calls per center annually, $1.4 billion in revenue is lost to poor service, and 56% of customers end relationships due to bad experiences. I then presented a complete end-to-end pipeline: Call Ingestion (via Pub/Sub, Kafka), Transcription with speaker diarization (Google Speech-to-Text), Sentiment & Emotion Extraction, Intent & Feature Extraction (using Gemini for data extraction and score calculation), storage in Neo4j graph database (capturing customer, intent, features, sentiments, and agent information), and finally Dashboards & Alerts for real-time monitoring. The talk emphasized how this system enables agent coaching, automated quality evaluation, and actionable customer insights — turning call center operations from a cost center into a strategic advantage for customer retention.",
    highlights: [
      "Presented to 700+ developers at Google Cloud Community Day Mumbai",
      "Showcased real industry data: $1.4B revenue loss from poor banking service",
      "Demonstrated end-to-end pipeline: ingestion → transcription → analysis → dashboards",
      "Used Google Speech-to-Text, Gemini, Vertex AI, and Neo4j in the architecture",
      "Showed how conversation intelligence drives 90% customer retention improvements"
    ]
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
    images: [
      { url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Panel stage at TechXLR8" },
      { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Panel discussion" },
      { url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Audience Q&A" },
      { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Networking" }
    ],
    fullDescription: "At TechXLR8 Asia — part of AsiaTechXSingapore 2025, one of Asia's largest tech conferences with 40,000+ delegates — I served as Moderator for a panel discussion on AI and Agentic Systems in Industry. The panel explored the current state of AI agents, how agentic workflows are transforming enterprise operations, and the practical challenges of deploying autonomous AI systems across industries including finance, healthcare, and logistics. As moderator, I guided the conversation through key topics: the distinction between traditional AI automation and truly agentic systems, the role of emerging protocols like A2A and MCP in enabling agent interoperability, security and governance considerations, and future predictions for autonomous AI in the enterprise. The panel featured industry leaders sharing real-world deployment experiences and lessons learned.",
    highlights: [
      "Moderated panel at Asia's largest tech conference with 40,000+ delegates",
      "Featured industry leaders discussing real-world AI agent deployments",
      "Explored the evolution from AI automation to truly autonomous agentic systems",
      "Discussed security, governance, and enterprise readiness for agentic AI",
      "Covered cross-industry perspectives: finance, healthcare, and logistics"
    ]
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
    type: "Panel Discussion",
    images: [
      { url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "DeveloperXperience Summit stage" },
      { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Panel participants" },
      { url: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Discussion in progress" },
      { url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Post-panel networking" }
    ],
    fullDescription: "At the DeveloperXperience Summit — part of AsiaTechXSingapore 2025 — I participated as a Panelist in a discussion on Developer Experience and AI Innovation. The panel explored how AI-powered tools and agentic systems are fundamentally reshaping the developer experience: from AI-assisted code generation and automated testing to intelligent debugging and autonomous deployment pipelines. I shared insights from my experience at IDFC First Bank on how internal developer tools powered by AI can dramatically reduce development cycles and improve code quality. The discussion also covered emerging protocols and frameworks that enable seamless integration of AI agents into development workflows, and the balance between developer autonomy and AI assistance. Panelists debated the future of software development — whether AI agents will serve as assistants or collaborators — and practical strategies for adopting AI-first development practices.",
    highlights: [
      "Panelist at Asia's premier developer experience summit",
      "Discussed AI-powered development tools and their impact on developer productivity",
      "Shared real-world insights on AI-assisted workflows at IDFC First Bank",
      "Explored the role of emerging protocols in developer tooling integration",
      "Debated the future of AI-human collaboration in software development"
    ]
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
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop&crop=entropy&auto=format",
    videoUrl: "",
    slidesUrl: "",
    type: "Technical Talk",
    images: [
      { url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "AWS Community Day stage" },
      { url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Technical demonstration" },
      { url: "https://images.unsplash.com/photo-1560523159-6cd9d6165076?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Architecture discussion" },
      { url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Developer interaction" }
    ],
    fullDescription: "At AWS Community Day Bengaluru 2025, I participated in a session on building ethical AI systems — addressing responsible AI development, bias mitigation, and ethical considerations in machine learning. Drawing from real-world experience at IDFC First Bank, the talk covered practical approaches to detecting and mitigating bias in ML models, frameworks for ethical decision-making in AI development, and strategies for ensuring fairness and transparency. The session emphasized that building ethical AI is not just a regulatory requirement but a business imperative, and provided actionable guidance for developers to incorporate ethical considerations throughout the AI development lifecycle.",
    highlights: [
      "Presented to 800+ AWS developers and cloud practitioners",
      "Discussed practical approaches to bias detection and mitigation in ML models",
      "Shared frameworks for ethical decision-making in AI development",
      "Addressed fairness, transparency, and accountability in production AI systems",
      "Provided actionable guidance for responsible AI development"
    ]
  },
  {
    id: "techshow-london-2024-panel",
    title: "Tech Show London 2024 — Panel Discussion",
    event: "International Tech Conference",
    date: "March 2024",
    location: "London, UK",
    audience: "20000+ professionals",
    topic: "AI in Enterprise: Challenges & Opportunities",
    description: "Panel discussion with industry leaders on deploying AI in enterprise environments.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop&crop=entropy&auto=format",
    videoUrl: "https://www.youtube.com/watch?v=jx_9SbARV9M",
    slidesUrl: "",
    type: "Panel Discussion",
    images: [
      { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Tech Show London panel" },
      { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Panelists discussion" },
      { url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Audience engagement" },
      { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Post-discussion networking" }
    ],
    fullDescription: "At Tech Show London 2024, I participated in a panel discussion focusing on 'AI in Enterprise: Challenges & Opportunities.' The panel brought together experts from various industries to discuss the practical realities of deploying AI solutions in enterprise environments. Topics included governance frameworks for AI adoption, the challenge of scaling proof-of-concepts to production, managing stakeholder expectations, and ensuring responsible AI deployment. I shared perspectives from my experience in the banking sector, highlighting how financial institutions navigate regulatory requirements while pushing the boundaries of AI innovation. The discussion also covered the skills gap in enterprise AI, strategies for building AI-ready organizations, and predictions for the next wave of enterprise AI transformation.",
    highlights: [
      "Participated in panel at a major international tech conference in London",
      "Discussed enterprise AI governance, scalability, and responsible deployment",
      "Shared banking sector perspectives on AI regulation and innovation",
      "Video recording available on YouTube",
      "Covered organizational readiness and skills gap for AI transformation"
    ]
  },
  {
    id: "techshow-london-2024-solo",
    title: "Tech Show London 2024 — Solo Presentation",
    event: "International Tech Conference",
    date: "March 2024",
    location: "London, UK",
    audience: "20000+ professionals",
    topic: "Gen-AI: Shaping the Future of Industries",
    description: "Comprehensive presentation on how Generative AI is transforming industries — from software, banking, and healthcare to manufacturing and media.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop&crop=entropy&auto=format",
    videoUrl: "",
    slidesUrl: "https://docs.google.com/presentation/d/1D9mQphyW8I0KJ-5dqPfvtzEFxguv7tEi/edit?usp=sharing&ouid=111966055386890027600&rtpof=true&sd=true",
    type: "Technical Talk",
    images: [
      { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Tech Show London presentation" },
      { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Industry use cases" },
      { url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "GenAI modalities overview" },
      { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Q&A session" }
    ],
    fullDescription: "At Tech Show London 2024, I delivered a solo presentation on 'Gen-AI: Shaping the Future of Industries.' The talk started with a clear explanation of what Generative AI is — positioning it within the AI hierarchy from Artificial Intelligence → Machine Learning → Deep Learning/NLP → Generative AI, and highlighting how GenAI uses Large Language Models and Diffusion Models to generate content across multiple modalities: text, images, audio, video, tables, time series, point clouds, X-rays, and more. I then covered why GenAI matters — consumer friendliness, versatility, improved efficiency, near real-time results, faster deployment, and personalization. The core of the talk was a deep industry-by-industry exploration: Software & IT (documentation, code generation, automated testing, intelligent debugging, UI/UX), Media & Entertainment (content creation, misinformation detection, animation, music composition, dubbing), Banking & Finance (conversational banking, personalized advisors, document summarization, agent assessments), Healthcare (personalized agents, drug development, medical imaging), Retail (hyper-personalized marketing, 3D product display, immersive shopping), and Manufacturing (product design, supply chain advisory, event monitoring).",
    highlights: [
      "Presented to 500+ professionals at a major London tech conference",
      "Explained GenAI across the full AI hierarchy with clear positioning",
      "Covered GenAI capabilities across 12+ modalities including text, images, audio, and video",
      "Deep-dived into 6 industries: Software, Media, Banking, Healthcare, Retail, Manufacturing",
      "Provided specific use cases and practical applications for each industry vertical"
    ]
  },
  {
    id: "acd-mumbai-2024",
    title: "AWS Community Day Mumbai 2024",
    event: "AWS Developer Conference",
    date: "April 6, 2024",
    location: "Mumbai, India",
    audience: "500+ professionals",
    topic: "Finance 2.0 — The Gen AI Blueprint",
    description: "How Generative AI is reshaping financial services — from conversational banking and RAG-powered chatbots to personalized financial advisors.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop&crop=entropy&auto=format",
    videoUrl: "https://www.youtube.com/watch?v=XihAhZQZtV4",
    slidesUrl: "https://docs.google.com/presentation/d/1SoGiBi8lzsngTeHyqqkjMrpNHmwWusRj/edit?usp=sharing&ouid=111966055386890027600&rtpof=true&sd=true",
    type: "Technical Talk",
    images: [
      { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "AWS Community Day Mumbai stage" },
      { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Finance 2.0 architecture" },
      { url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Chatbot demonstration" },
      { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Developer Q&A" }
    ],
    fullDescription: "At AWS Community Day Mumbai 2024, I presented 'Finance 2.0 — The Gen AI Blueprint,' exploring how Generative AI is fundamentally transforming the financial services industry. The talk highlighted the key challenges customers face with traditional banking: long hold times, difficulty choosing between financial products (MF vs FD), lack of personalized advisory, financial fraud, and complex document handling. I presented compelling industry data — 95% of customers want instant channel switching, 53% are frustrated when they can't reply to mobile messages, and 1 in 3 customers have switched banks for better mobile experience. The solution presented centered on three GenAI applications: Personalized Financial Agents that understand individual customer needs, Conversational Banking that enables natural language interactions for banking operations, and RAG-powered Chatbots that provide accurate, context-aware responses using retrieval-augmented generation over banking knowledge bases. The session demonstrated how these technologies can dramatically improve customer satisfaction and reduce operational costs.",
    highlights: [
      "Presented to 500+ AWS professionals at AWS Community Day Mumbai",
      "Highlighted critical banking customer experience statistics driving AI adoption",
      "Demonstrated three GenAI solutions: Financial Agents, Conversational Banking, RAG Chatbots",
      "Video recording available on YouTube",
      "Addressed real customer pain points: hold times, fraud, product confusion, document overload"
    ]
  },
  {
    id: "devfest-mumbai-2023",
    title: "Devfest Mumbai 2023",
    event: "Google Developer Conference",
    date: "December 09, 2023",
    location: "Mumbai, India",
    audience: "600+ professionals",
    topic: "Building Transformers: Code Your Vision",
    description: "A hands-on deep dive into the transformer architecture — building a complete encoder-decoder transformer model from scratch.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop&crop=entropy&auto=format",
    videoUrl: "",
    slidesUrl: "https://docs.google.com/presentation/d/18151B3OcBubn7hXE7EBgtyCSbT-F-CduezLfPL9XX04/edit?usp=sharing",
    type: "Technical Talk",
    images: [
      { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Devfest Mumbai stage" },
      { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Transformer architecture diagram" },
      { url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Live coding session" },
      { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=entropy&auto=format", alt: "Post-talk discussions" }
    ],
    fullDescription: "At Devfest Mumbai 2023, I presented 'Building Transformers: Code Your Vision' — a hands-on deep dive into the transformer architecture, building the entire model from scratch. The talk started by explaining why transformers matter: they power everything from RAG and content generation to chatbots, agents, speech-to-speech AI, voice cloning, object detection, 3D modeling, and more — spanning textual, visual, and audio domains. I then walked through each component of the transformer architecture step by step: Positional Encoding (explaining why order matters with practical examples of sentence meaning changes), Scaled Dot-Product Attention (the self-attention mechanism), Attention Head (the fundamental building block), Multi-Head Attention (capturing various features from data simultaneously), Feed-Forward Module with Layer Normalization, and finally the complete Encoder-Decoder Architecture. The session included a link to a companion Jupyter notebook where attendees could follow along and implement each class themselves. The talk concluded with the full model integration and training process.",
    highlights: [
      "Presented to 600+ developers at Google Devfest Mumbai",
      "Built a complete transformer model from scratch — component by component",
      "Covered 7 key classes: Positional Encoding, Scaled Dot-Product, Attention Head, Multi-Head Attention, Feed-Forward, Transformer Block, and full Model",
      "Provided companion Jupyter notebook for hands-on coding",
      "Demonstrated transformer applications across text, vision, and audio domains"
    ]
  }
];

// Custom arrow components for the slider with improved accessibility
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="flex absolute left-4 top-1/2 z-10 justify-center items-center w-10 h-10 text-white rounded-full -translate-y-1/2 bg-black/50 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Previous slide"
      tabIndex={0}
    >
      <ChevronLeft size={20} />
    </button>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="flex absolute right-4 top-1/2 z-10 justify-center items-center w-10 h-10 text-white rounded-full -translate-y-1/2 bg-black/50 hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Next slide"
      tabIndex={0}
    >
      <ChevronRight size={20} />
    </button>
  );
};

const SpeakingDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<Event | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [fullscreenCaption, setFullscreenCaption] = useState<string>('');

  // Handle keyboard navigation for the carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (sliderRef.current) {
        if (e.key === 'ArrowLeft') {
          sliderRef.current.slickPrev();
        } else if (e.key === 'ArrowRight') {
          sliderRef.current.slickNext();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    customPaging: (i: number) => (
      <div
        className={`w-3 h-3 mx-1 rounded-full transition-all ${i === currentSlide ? 'bg-primary scale-110' : 'bg-muted'}`}
        role="button"
        aria-label={`Go to slide ${i + 1}`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && sliderRef.current) {
            sliderRef.current.slickGoTo(i);
          }
        }}
      />
    ),
    dotsClass: "slick-dots custom-dots flex justify-center gap-2 absolute bottom-4",
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        }
      }
    ],
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 10,
    adaptiveHeight: true
  };

  useEffect(() => {
    // Find the event with the matching ID
    const foundEvent = eventsData.find(e => e.id === id);
    if (foundEvent) {
      setEvent(foundEvent);
    } else {
      // If no matching event is found, redirect to the speaking page
      navigate('/speaking');
    }
  }, [id, navigate]);

  if (!event) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-12 h-12 rounded-full border-t-2 border-b-2 animate-spin border-primary"></div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${event.title} | Shubham Agnihotri Speaking`}
        description={event.description}
        keywords={`${event.topic}, ${event.type}, tech talks, speaking event, Shubham Agnihotri`}
      />
      <div className="px-4 py-20 min-h-screen">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/speaking')}
              className="mb-4"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Speaking
            </Button>

            <h1 className="mb-4 text-3xl font-bold md:text-5xl text-foreground">
              {event.title}
            </h1>
            <p className="mb-6 text-xl font-medium text-primary">
              {event.event}
            </p>
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-hidden relative mb-12 rounded-xl border border-border"
          >
            <Slider
              {...sliderSettings}
              className="carousel-slider"
              ref={sliderRef}
              aria-label="Event image carousel"
            >
              {event.images.map((image, index) => (
                <div key={index} className="relative" aria-roledescription="slide" aria-label={`Slide ${index + 1} of ${event.images.length}: ${image.alt}`}>
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-[400px] object-cover cursor-pointer"
                    onClick={() => {
                      setFullscreenImage(image.url);
                      setFullscreenCaption(image.alt);
                    }}
                  />
                  <div className="absolute right-0 bottom-0 left-0 p-4 bg-gradient-to-t to-transparent from-black/70 image-caption">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium text-white">{image.alt}</p>
                      <button
                        className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
                        onClick={() => {
                          setFullscreenImage(image.url);
                          setFullscreenCaption(image.alt);
                        }}
                        aria-label="View fullscreen"
                      >
                        <ZoomIn size={16} />
                      </button>
                    </div>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-white/80">{`Image ${index + 1} of ${event.images.length}`}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            {/* Fullscreen Image Modal */}
            {fullscreenImage && (
              <div className="flex fixed inset-0 z-50 justify-center items-center p-4 bg-black/90">
                <div className="relative w-full max-w-5xl max-h-[90vh]">
                  <button
                    className="absolute right-0 -top-12 p-2 text-white transition-colors hover:text-primary"
                    onClick={() => setFullscreenImage(null)}
                    aria-label="Close fullscreen view"
                  >
                    <X size={24} />
                  </button>
                  <img
                    src={fullscreenImage}
                    alt={fullscreenCaption}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />
                  <div className="mt-4 text-center text-white">
                    <p className="text-lg">{fullscreenCaption}</p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Event Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6 md:col-span-1"
            >
              <div className="p-6 rounded-lg border bg-card border-border">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  Event Details
                </h2>

                <div className="space-y-4 text-muted-foreground">
                  <div className="flex gap-3 items-center">
                    <Calendar size={18} className="text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Date</p>
                      <p>{event.date}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <MapPin size={18} className="text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Location</p>
                      <p>{event.location}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center">
                    <Users size={18} className="text-primary" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Audience</p>
                      <p>{event.audience}</p>
                    </div>
                  </div>

                  {event.videoUrl && (
                    <div className="flex gap-3 items-center">
                      <Video size={18} className="text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Recording</p>
                        <a
                          href={event.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Watch Video
                        </a>
                      </div>
                    </div>
                  )}

                  {event.slidesUrl && (
                    <div className="flex gap-3 items-center">
                      <FileText size={18} className="text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Presentation</p>
                        <a
                          href={event.slidesUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          View Slides
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 rounded-lg border bg-card border-border">
                <h2 className="mb-4 text-xl font-semibold text-foreground">
                  Highlights
                </h2>
                <ul className="space-y-2 text-muted-foreground">
                  {event.highlights.map((highlight, index) => (
                    <li key={index} className="flex gap-2 items-start">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Event Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-2"
            >
              <div className="p-6 rounded-lg border bg-card border-border">
                <div className="mb-6">
                  <h2 className="mb-2 text-2xl font-semibold text-foreground">
                    {event.topic}
                  </h2>
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary text-primary-foreground">
                    {event.type}
                  </span>
                </div>

                <div className="max-w-none prose prose-lg dark:prose-invert">
                  <p>{event.fullDescription}</p>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  {event.videoUrl && (
                    <Button size="lg" asChild>
                      <a href={event.videoUrl} target="_blank" rel="noopener noreferrer">
                        <Video size={18} className="mr-2" />
                        Watch Full Presentation
                      </a>
                    </Button>
                  )}
                  {event.slidesUrl && (
                    <Button size="lg" variant={event.videoUrl ? "outline" : "default"} asChild>
                      <a href={event.slidesUrl} target="_blank" rel="noopener noreferrer">
                        <FileText size={18} className="mr-2" />
                        View Slides
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="py-12 mt-16 text-center rounded-lg border bg-primary/5 border-primary/20"
          >
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              Interested in similar talks for your event?
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
              I'm available for speaking engagements on AI, machine learning, and data science topics.
              Let's connect to discuss how I can add value to your next event!
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

export default SpeakingDetail;
