import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, TrendingUp } from 'lucide-react';
import SEO from '../components/SEO';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);

  const experiences = [
    {
      company: "IDFC First Bank",
      role: "Senior Data Scientist",
      period: "2023 - Present",
      location: "Mumbai, India (Hybrid)",
      logo: "🏦",
      description: "Led AI-driven initiatives at a leading bank, including in-house VLM & OCR systems, fraud detection, and agent simulation platforms—collectively saving ₹50 Cr+, boosting sales, and earning executive recognition.",
      achievements: [
        "Promoted to Lead a team of 7 Data Scientists within the Vision Squad (AI Labs), fostering cross-functional partnerships between Product Management, Engineering teams, and key Business Stakeholders.",
        "Leading the development of an in-house AI-based OCR and fine-tuned Vision-Language Models (VLMs) solution, replacing multiple third-party vendors and saving 50 Cr annually. Key usecases include: Automated bank statement parsing across 70+ formats, Aadhar masking for regulatory compliance, Facial recognition and similarity matching, Document classification and data extraction across varied financial documents.",
        "Led the team for a novel fraud detection system using Variational Autoencoders (VAE) for anomaly detection across bank statements, credit card bills, and salary slips, resulting in a patent filing and enhanced underwriting risk control.",
        "Developed a AI-Powered Customer Simulation Platform for training call center verticals using AWS Polly and GPT-4o, enabling agents to test theoretical knowledge, simulate real-life customer conversations & scenarios to enhance their skills. Reduced training time from 6 months to 1 month with real-time performance feedback.",
        "Spearheaded AI-driven agent quality & sales performance scorecard automation for Virtual Relationship Manager (VRM) & Cross-sell (Turbo), evaluating 150K+ monthly calls, increased coverage from 2-3% to 80% with 95% F1 score, enhancing customer experience, boosting sales revenue by 20%, and earning MD recognition on CNBC; scaled the solution to Banker on Call (BOC) and Debt Collection verticals. Built a pipeline with Whisper for language detection, Deepgram & Whisper for transcription, and GPT-4o for feature scoring.",
        "Finetuned Whisper (WER - 5%) & Llama 3.2 for Indic audios & text respectively, used HF Autotrain & Unsloth"

      ],
      technologies: ["Python"," Generative AI"," LLMs","  Pytorch"," Langchain"," LlamaIndex"," HuggingFace"," AWS: Sagemaker"," Bedrock"," Textract"," Lambda"," CrewAI"," SmolAgents"," OpenAI"," Deepgram"," HuggingFace"," Unsloth"," Streamlit"," Kubernetes"," EKS"," Airflow"," Docker"," Pytorch Lightning"," Hydra"," Bitbucket"," MLFLow"," GoCD"," Kibana"," Graphana","Gradio", "DVC"]
    },
    {
      company: "S.AgriUdaan",
      role: "CEO and Founder",
      period: "2021 - 2023",
      location: "Ahmedabad, India",
      logo: "🌱",
      description: "Founded Gujarat’s first agri-drone startup, delivering precision farming services to 4,500+ farmers across 15,000+ acres and earning the Times Gujarat Icon 2022 award.",
      achievements: [
        "Spearheaded the establishment of Gujarats First Agriculture Drone Service Provider Company.", 
        "Led the Design and Implementation of user-friendly marketplace platform for farmers and drone service providers. This marketplace served as a centralized hub for farmers, enabling them to easily connect with our services, access data analytics, and make informed decisions for their farming operations.", 
        "Orchestrated a comprehensive suite of agriculture services utilizing Unmanned Aerial Vehicles(UAVs) for precision spraying of pesticides, insecticides & seed scattering with a team of 15 comprising of Pilots, Developers and SMEs.", 
        "Accumulated over 15,000+ acres satisfying 4500 Farmers using extensive distributor network covering Gujarat, Madhya Pradesh, & Maharashtra, demonstrating expertise in vegetable crops, field crops & horticulture crops.", 
        "Cultivated partnerships with a diverse clientele, including major players such as Government of India (KVK- Krishi Vigyan Kendra), Government of Gujarat & Madhya Pradesh, Adani, McCains, UPL, Unimart, Nurture Farms, Indian Potash Limited (IPL), Sona Seeds, Seedworks, IFFCO, Kalash Seeds and Good Farms.", 
        "Acknowledged as an emerging startup in the transforming agriculture sector through drone technology, receiving the prestigious Times Gujarat Icon 2022 award.", 
        "Ensured compliance with regulatory frameworks and industry standards related to drone technology, prioritizing safety, ethical considerations, and responsible use of technology in agriculture."
      ],
      technologies: ["Python","Flutter","Firebase","GCP","Pixhawk","C","C#","Amazon Quicksight","PowerBI"]
    },
    {
      company: "Arcadis",
      role: "Data Scientist",
      period: "2019 - 2023",
      location: "Bangalore, India (Hydrid)",
      logo: "🏗️",
      description: "Delivered enterprise-scale AI solutions—RAG, Digital Twin, OCR, and Object Detection—saving $2M+ and 1.6L+ hours, while also leading AI upskilling for 500+ professionals.",
      achievements: [
        "Designed and Developed an RAG(Retrieval Augmented Generative) Model for 1000+ documents using OPENAI-ChatGPT4 LLM and Langchain, achieving latency under 3 seconds with accuracy increase of 30%.",
        "Spearheaded product development of an Azure AI & Digital Twin Powered Water Utility platform to identify leaks in the water distribution system with inputs and collaborations from 4 cross-functional stakeholders and teams, saving 30 gallons of water every node, 1M$ per city per year, increased 20% efficiency by reducing search space.",
        "Designed and Developed a Big Data ETL Workflow for a Water Utility Tool, Used by 11 Clients, Worked in cross functional teams, Operates on 4 Billion Data points with 14 features under 5 mins.",
        "Automated a workflow via Fine Tuning Object Detection Model(YOLO), Saved 10,000+ Man hours and 3,00,000+ $.",
        "Designed and Developed an Automation with Azure Cognitive Service - Optical Character Recognition(OCR), saved 1,50,000+ hours of Manual Effort and 1M+$.",
        "Lead Data Science Community of Practice India Chapter, Trained 500+ colleagues on AI, Machine Learning and Python, Organized 30+ Events, Delivered 3 workshops and 10 Sessions." ],
      technologies: ["Python", "Generative AI", "Large Language Models(LLMs)", "TensorFlow", "Pytorch", "Pytorch Geometric", "Azure ML", "Azure OCR", "PowerBI", "Langchain","Selenium", ".Net", "Matlab", "Digital-Twin", "SQL", "PyQT5"]
    }
    
  ];

  return (
    <>
      <SEO 
        title="Experience | Shubham Agnihotri's Professional Journey"
        description="Explore Shubham Agnihotri's professional experience as a Senior Data Scientist at IDFC First Bank and previous roles in data science and ML engineering."
        keywords="data science experience, ML engineer career, IDFC First Bank, professional background, data scientist roles, Shubham Agnihotri career"
      />
    <div className="px-4 py-20 min-h-screen">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-6 text-4xl font-bold md:text-6xl text-foreground">
            Experience
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            My professional journey in data science and machine learning across diverse industries
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/3"
          >
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-card border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex gap-3 items-center">
                    <span className="text-2xl">{exp.logo}</span>
                    <div>
                      <h3 className="font-semibold">{exp.company}</h3>
                      <p className={`text-sm ${
                        activeTab === index ? 'text-primary-foreground/80' : 'text-muted-foreground'
                      }`}>
                        {exp.role}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/3"
          >
            <div className="p-8 rounded-lg border bg-card border-border">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex gap-3 items-center mb-2">
                    <span className="text-3xl">{experiences[activeTab].logo}</span>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {experiences[activeTab].role}
                      </h2>
                      <h3 className="text-xl text-primary">
                        {experiences[activeTab].company}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-muted-foreground">
                    <div className="flex gap-2 items-center">
                      <Calendar size={16} />
                      {experiences[activeTab].period}
                    </div>
                    <div className="flex gap-2 items-center">
                      <MapPin size={16} />
                      {experiences[activeTab].location}
                    </div>
                  </div>
                </div>
              </div>

              <p className="mb-6 text-lg text-muted-foreground">
                {experiences[activeTab].description}
              </p>

              <div className="mb-8">
                <h4 className="flex gap-2 items-center mb-4 text-lg font-semibold text-foreground">
                  <TrendingUp size={20} />
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {experiences[activeTab].achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex gap-3 items-start text-muted-foreground"
                    >
                      <span className="flex-shrink-0 mt-2 w-2 h-2 rounded-full bg-primary"></span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-4 text-lg font-semibold text-foreground">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {experiences[activeTab].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Experience;
