import { motion } from 'framer-motion';
import { BookOpen, Brain, Code, Gamepad2, Database, Rocket } from 'lucide-react';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';

const About = () => {
  const interests = [
    {
      title: "Artificial Intelligence",
      description: "Building scalable AI/ML solutions, working with GenAI, VLMs, and OCR to automate complex workflows.",
      icon: <Brain className="text-primary" size={24} />
    },
    {
      title: "Quantum Computing",
      description: "Fascinated by the intersection of AI and QC as tools to shape a better, humane future.",
      icon: <Rocket className="text-primary" size={24} />
    },
    {
      title: "Continuous Learning",
      description: "Always reading research papers, exploring SOTA networks, and expanding my knowledge base.",
      icon: <BookOpen className="text-primary" size={24} />
    },
    {
      title: "Problem Solving",
      description: "Passionate about decoding the world's puzzles, riddles, and mathematical problems.",
      icon: <Code className="text-primary" size={24} />
    },
    {
      title: "Data Architecture",
      description: "Designing end-to-end data pipelines and implementing robust MLOps practices.",
      icon: <Database className="text-primary" size={24} />
    },
    {
      title: "Gaming & Sports",
      description: "Playing Football/Badminton, and enjoying Action-Adventure games like Assassin's Creed and The Witcher.",
      icon: <Gamepad2 className="text-primary" size={24} />
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/5 via-background to-secondary/5 z-0">
        <div className="absolute top-1/3 left-0 w-72 h-72 rounded-full blur-[100px] bg-primary/20 opacity-50"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-[120px] bg-secondary/20 opacity-50"></div>
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
            "description": "A passionate data scientist focused on AI and building scalable solutions to real-world problems."
          }
        }}
      />
      
      <div className="relative z-10 px-4 py-20 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold md:text-6xl text-foreground tracking-tight">
            About Me
          </h1>
          <div className="w-24 h-1.5 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full mb-8"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-2xl overflow-hidden aspect-square max-w-md w-full border border-primary/20 bg-background/50 backdrop-blur-sm p-2 shadow-2xl">
                <img 
                  src="https://raw.githubusercontent.com/KillerStrike17/KillerStrike17.github.io/refs/heads/master/assets/Shubham%20Agnihotri.webp" 
                  alt="Shubham Agnihotri Profile" 
                  className="rounded-xl w-full h-full object-cover shadow-inner"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full lg:w-1/2 space-y-6 text-lg text-muted-foreground leading-relaxed"
          >
            <p className="text-2xl text-foreground font-semibold leading-snug">
              Hello World! I'm Shubham Agnihotri, a naturally curious problem solver with a passion for transforming data into impact.
            </p>
            
            <p>
              Solving puzzles, riddles, and mathematical models are just a few of my core interests. My primary motivation is to decipher the world for people by solving day-to-day challenges using advancing technologies. I firmly believe that technological contributions can have a massive and positive impact on society.
            </p>

            <p>
              To me, <strong className="text-foreground">Artificial Intelligence</strong> and <strong className="text-foreground">Data Science</strong> are the perfect tools to shape a better future. By powering modern systems with AI, we can help humans be more humane. I've spent my career applying this philosophy—whether developing cutting-edge OCR and VLM systems at IDFC First Bank, pioneering agri-drone tech at S.AgriUdaan, or building digital twins at Arcadis.
            </p>

            <p>
              When I am not swimming in a pool of 1s and 0s, you can find me playing Football or Badminton. Action-adventure games like <span className="italic">Assassin's Creed</span> and <span className="italic">The Witcher</span> are my favorite pastimes; their storylines and graphics never fail to fascinate me.
            </p>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground inline-block relative">
              What Drives Me
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 w-1/2 h-1 bg-primary/40 rounded-full"></div>
            </h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-2xl border bg-card/50 backdrop-blur-md border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-primary/5"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
                
                <div className="relative z-10 flex flex-col h-full gap-4">
                  <div className="inline-flex w-16 h-16 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 text-primary mb-2 shadow-sm">
                    {interest.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground">
                    {interest.title}
                  </h3>
                  
                  <p className="text-base text-muted-foreground leading-relaxed mt-auto">
                    {interest.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;
