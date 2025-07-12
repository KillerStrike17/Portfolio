import { motion } from 'framer-motion';
import { Award, Calendar, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';

const About = () => {
  const achievements = [
    {
      title: "Times Gujarat Icon 2022",
      description: "Recognized for outstanding contribution to technology and innovation",
      year: "2022"
    },
    {
      title: "Hackathon Winner",
      description: "Multiple hackathon victories showcasing technical excellence",
      year: "2021-2023"
    },
    {
      title: "Speaker Recognition",
      description: "Featured speaker at prestigious tech conferences globally",
      year: "2020-2024"
    }
  ];

  const timeline = [
    {
      year: "2023-Present",
      company: "IDFC First Bank",
      role: "Senior Data Scientist",
      location: "Mumbai, India (Hybrid)",
      achievements: [
        "Promoted to lead a 7-member Data Science team, driving AI initiatives across document intelligence, fraud detection, and customer engagement.",
        "Built an in-house OCR and VLM-based system, automating data extraction from 70+ financial documents, replacing third-party vendors, and saving ₹50 Cr annually.",
        "Developed a VAE-based fraud detection framework and a GPT-4o + AWS Polly-powered customer simulation platform, cutting agent training time from 6 months to 1 month.",
        "Automated agent quality evaluation across 150K+ monthly calls using Whisper, Deepgram, and GPT-4o, boosting sales by 20% and earning MD recognition on CNBC."
      ]
    },
    {
      year: "2021-2023",
      company: "S.AgriUdaan",
      role: "CEO",
      location: "Ahmedabad, India",
      achievements: [
        "Founded Gujarat’s first agriculture drone service company, pioneering precision farming with UAV-based pesticide spraying, seed scattering, and data-driven insights.",
        "Designed a farmer-friendly marketplace platform, streamlining access to drone services and analytics, improving decision-making for 4,500+ farmers across 15,000+ acres.",
        "Built and led a 15-member cross-functional team, executing operations across Gujarat, Madhya Pradesh, and Maharashtra with deep expertise in various crop types.",
        "Forged partnerships with major agri-stakeholders including GoI, Adani, McCains, UPL, IFFCO, and earned the Times Gujarat Icon 2022 award for innovation in agriculture."
      ]
    },
    {
      year: "2019-2023",
      company: "Arcadis",
      role: "Data Scientist",
      location: "Bangalore,India (Hybrid)",
      achievements: [
        "Built a low-latency RAG pipeline using GPT-4 and Langchain, achieving sub-3 second response time and 30% accuracy improvement across 1000+ documents.",
        "Led the development of an Azure-powered Digital Twin for water utilities, detecting leaks and saving $1M/year per city while improving efficiency by 20%.",
        "Engineered scalable automation solutions, including a YOLO-based object detection pipeline and Azure OCR workflow, collectively saving over $1.3M and 1.6L+ manual hours.",
        "Chaired the India Chapter of the Data Science Community of Practice, training 500+ professionals through 30+ events, 10 sessions, and 3 hands-on workshops."
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="About Shubham Agnihotri | Background & Achievements"
        description="Learn about Shubham Agnihotri's background, achievements, and journey as a Senior Data Scientist and ML Engineer."
        keywords="about Shubham Agnihotri, data scientist background, ML engineer achievements, tech speaker, Times Gujarat Icon"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "headline": "About Shubham Agnihotri",
          "description": "Background, achievements, and professional journey of Shubham Agnihotri, a Senior Data Scientist at IDFC First Bank.",
          "mainEntity": {
            "@type": "Person",
            "name": "Shubham Agnihotri",
            "jobTitle": "Senior Data Scientist",
            "worksFor": {
              "@type": "Organization",
              "name": "IDFC First Bank"
            },
            "description": "A passionate data scientist and tech enthusiast with over 6+ years of experience in building scalable AI/ML solutions."
          }
        }}
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
            About Me
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
            I'm a passionate data scientist and tech enthusiast with over 6+ years of experience 
            in building scalable AI/ML solutions. Currently driving innovation at IDFC First Bank 
            while actively contributing to the tech community through speaking and content creation.
          </p>
          </motion.div>

          <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="mb-12 text-3xl font-bold text-center text-foreground">Achievements</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="p-6 text-center rounded-lg border transition-shadow duration-300 bg-card border-border hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex justify-center items-center mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {achievement.title}
                </h3>
                <p className="mb-3 text-muted-foreground">
                  {achievement.description}
                </p>
                <span className="font-medium text-primary">{achievement.year}</span>
              </motion.div>
            ))}
          </div>
          </motion.section>

          <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="mb-12 text-3xl font-bold text-center text-foreground">Career Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 z-10 w-4 h-4 rounded-full transform md:left-1/2 bg-primary md:-translate-x-1/2"></div>
                
                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="p-6 rounded-lg border transition-shadow duration-300 bg-card border-border hover:shadow-lg">
                    <div className="flex gap-2 items-center mb-2 font-medium text-primary">
                      <Calendar size={16} />
                      {item.year}
                    </div>
                    <h3 className="mb-1 text-xl font-semibold text-foreground">
                      {item.role}
                    </h3>
                    <h4 className="mb-2 text-lg text-muted-foreground">
                      {item.company}
                    </h4>
                    <div className="flex gap-2 items-center mb-4 text-muted-foreground">
                      <MapPin size={16} />
                      {item.location}
                    </div>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-muted-foreground">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default About;
