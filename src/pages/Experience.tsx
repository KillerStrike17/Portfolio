import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, TrendingUp, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import {
  fadeUp, fadeInLeft, staggerContainer, staggerItem, staggerItemLeft, EASE,
} from '../lib/animations';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "IDFC First Bank",
      role: "Senior Data Scientist",
      period: "2023 – Present",
      location: "Mumbai, India (Hybrid)",
      gradient: "from-indigo-500 to-violet-500",
      accentColor: "indigo",
      description:
        "Led AI-driven initiatives at a leading bank, including in-house VLM & OCR systems, fraud detection, and agent simulation platforms—collectively saving ₹50 Cr+, boosting sales, and earning executive recognition.",
      achievements: [
        "Promoted to Lead a team of 7 Data Scientists within the Vision Squad (AI Labs), fostering cross-functional partnerships between Product Management, Engineering, and key Business Stakeholders.",
        "Leading development of an in-house AI-based OCR and fine-tuned VLM solution, replacing multiple third-party vendors and saving 50 Cr annually across 70+ bank statement formats, Aadhar masking, facial recognition, and document classification.",
        "Led a novel fraud detection system using Variational Autoencoders (VAE) for anomaly detection across bank statements, credit card bills, and salary slips—resulting in a patent filing.",
        "Developed an AI-Powered Customer Simulation Platform for training call center agents using AWS Polly and GPT-4o, reducing training time from 6 months to 1 month with real-time feedback.",
        "Spearheaded AI-driven sales scorecard automation for VRM & Cross-sell, evaluating 150K+ monthly calls, increased coverage from 2–3% to 80% with 95% F1 score, boosting sales revenue by 20% and earning MD recognition on CNBC.",
        "Finetuned Whisper (WER 5%) & Llama 3.2 for Indic audios & text using HF Autotrain & Unsloth.",
      ],
      technologies: ["Python", "Generative AI", "LLMs", "PyTorch", "Langchain", "LlamaIndex", "HuggingFace", "AWS Sagemaker", "Bedrock", "Textract", "Lambda", "CrewAI", "SmolAgents", "OpenAI", "Deepgram", "Unsloth", "Streamlit", "Kubernetes", "EKS", "Airflow", "Docker", "MLFlow", "GoCD", "Kibana", "Grafana", "Gradio", "DVC"],
    },
    {
      company: "S.AgriUdaan",
      role: "CEO & Founder",
      period: "2021 – 2023",
      location: "Ahmedabad, India",
      gradient: "from-emerald-500 to-cyan-500",
      accentColor: "emerald",
      description:
        "Founded Gujarat's first agri-drone startup, delivering precision farming services to 4,500+ farmers across 15,000+ acres and earning the Times Gujarat Icon 2022 award.",
      achievements: [
        "Spearheaded establishment of Gujarat's First Agriculture Drone Service Provider Company.",
        "Led design and implementation of a user-friendly marketplace platform for farmers and drone service providers.",
        "Orchestrated a comprehensive suite of agriculture services utilizing UAVs for precision spraying and seed scattering with a team of 15 Pilots, Developers and SMEs.",
        "Accumulated 15,000+ acres satisfying 4,500 farmers across Gujarat, Madhya Pradesh, & Maharashtra.",
        "Cultivated partnerships with KVK, Government of India, Adani, McCains, UPL, IFFCO, and more.",
        "Received the prestigious Times Gujarat Icon 2022 award for emerging agri-tech startup.",
      ],
      technologies: ["Python", "Flutter", "Firebase", "GCP", "Pixhawk", "C", "C#", "Amazon Quicksight", "PowerBI"],
    },
    {
      company: "Arcadis",
      role: "Data Scientist",
      period: "2019 – 2023",
      location: "Bangalore, India (Hybrid)",
      gradient: "from-blue-500 to-indigo-500",
      accentColor: "blue",
      description:
        "Delivered enterprise-scale AI solutions—RAG, Digital Twin, OCR, and Object Detection—saving $2M+ and 160,000+ hours, while leading AI upskilling for 500+ professionals.",
      achievements: [
        "Designed a RAG Model for 1000+ documents using ChatGPT-4 & Langchain, achieving <3s latency with 30% accuracy improvement.",
        "Led an Azure AI & Digital Twin powered water utility platform, saving 1M$/city/year and increasing efficiency by 20%.",
        "Designed a Big Data ETL Workflow used by 11 clients operating on 4 billion data points in under 5 minutes.",
        "Automated workflows via fine-tuned YOLO object detection, saving 10,000+ man-hours and $300,000+.",
        "Developed Azure Cognitive OCR automation saving 150,000+ manual hours and $1M+.",
        "Led Data Science Community of Practice India Chapter, trained 500+ colleagues across 30+ events.",
      ],
      technologies: ["Python", "Generative AI", "LLMs", "TensorFlow", "PyTorch", "Pytorch Geometric", "Azure ML", "Azure OCR", "PowerBI", "Langchain", "Selenium", ".Net", "Matlab", "Digital-Twin", "SQL", "PyQT5"],
    },
  ];

  const active = experiences[activeTab];

  return (
    <>
      <SEO
        title="Experience | Shubham Agnihotri's Professional Journey"
        description="Explore Shubham Agnihotri's professional experience as a Senior Data Scientist at IDFC First Bank and previous roles in data science and ML engineering."
        keywords="data science experience, ML engineer career, IDFC First Bank, professional background, Shubham Agnihotri career"
      />

      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 mesh-bg opacity-40 dark:opacity-100" />
        <motion.div
          className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/8 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/8 rounded-full blur-[80px]"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
      </div>

      <div className="px-4 sm:px-6 py-24 min-h-screen">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-14 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              <TrendingUp size={14} />
              Professional Journey
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
              My{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-20 h-1 mx-auto bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full origin-left"
            />
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground mt-4">
              A journey through data science and machine learning across diverse industries
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* ── Left: Timeline company list ── */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              className="lg:w-72 flex-shrink-0"
            >
              <div className="relative space-y-0 pl-4">
                {/* Animated vertical line */}
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
                  className="absolute left-0 top-5 bottom-5 w-px bg-gradient-to-b from-indigo-500/60 via-violet-500/40 to-cyan-500/60 origin-top"
                />

                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: EASE }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      animate={{
                        scale: activeTab === index ? 1.2 : 1,
                        boxShadow: activeTab === index ? '0 0 12px rgba(99,102,241,0.6)' : 'none',
                      }}
                      className={`absolute -left-[13px] top-6 w-3.5 h-3.5 rounded-full border-2 transition-colors duration-300 z-10 ${
                        activeTab === index
                          ? `bg-gradient-to-br ${exp.gradient} border-transparent`
                          : 'border-border bg-background hover:border-primary/50'
                      }`}
                    />

                    <button
                      onClick={() => setActiveTab(index)}
                      className={`w-full text-left ml-4 mb-3 p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                        activeTab === index
                          ? 'bg-primary/10 border border-primary/25 shadow-glow-sm'
                          : 'hover:bg-muted border border-transparent'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-heading font-semibold text-foreground text-sm leading-tight">
                            {exp.company}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-0.5">{exp.role}</p>
                          <p className="text-xs text-muted-foreground/70 mt-1">{exp.period}</p>
                        </div>
                        {activeTab === index && (
                          <motion.div
                            initial={{ opacity: 0, x: -4 }}
                            animate={{ opacity: 1, x: 0 }}
                          >
                            <ChevronRight size={14} className="text-primary flex-shrink-0" />
                          </motion.div>
                        )}
                      </div>
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ── Right: Detail card ── */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="rounded-2xl glass-card border border-border/50 p-6 md:p-8 shadow-card"
                >
                  {/* Company header */}
                  <div className="mb-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <div
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${active.gradient} mb-3`}
                        >
                          {active.period}
                        </div>
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-tight">
                          {active.role}
                        </h2>
                        <h3
                          className={`font-heading text-lg font-semibold mt-1 bg-gradient-to-r ${active.gradient} bg-clip-text text-transparent`}
                        >
                          {active.company}
                        </h3>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-primary" />
                        {active.period}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-primary" />
                        {active.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-base mb-6 leading-relaxed border-l-2 border-primary/40 pl-4 italic">
                    {active.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-7">
                    <h4 className="flex items-center gap-2 font-heading text-base font-semibold text-foreground mb-4">
                      <TrendingUp size={16} className="text-primary" />
                      Key Achievements
                    </h4>
                    <motion.ul
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      className="space-y-3"
                    >
                      {active.achievements.map((achievement, index) => (
                        <motion.li
                          key={index}
                          variants={staggerItemLeft}
                          className="flex gap-3 items-start text-sm text-muted-foreground leading-relaxed"
                        >
                          <span
                            className={`flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br ${active.gradient}`}
                          />
                          {achievement}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-heading text-base font-semibold text-foreground mb-3">
                      Technologies & Tools
                    </h4>
                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      className="flex flex-wrap gap-2"
                    >
                      {active.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          variants={staggerItem}
                          className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/8 text-primary border border-primary/20 hover:bg-primary/15 transition-colors duration-200"
                        >
                          {tech.trim()}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
