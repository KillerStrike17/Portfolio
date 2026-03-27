// ============================================================
// PROJECT CONFIG — your single source of truth
// To show a project on the Portfolio, set  show: true
// To hide it, set  show: false  (it stays here, just not rendered)
// ============================================================

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo?: string;
  category: string;
  /** Set to true to display this project on the Projects page */
  show: boolean;
}

export const projects: Project[] = [
  {
    title: "PromoGenie",
    description: "AI-powered promotional content generator using advanced NLP models to create engaging marketing copy automatically.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop&crop=entropy&auto=format",
    technologies: ["Python", "OpenAI GPT", "React", "FastAPI", "Docker"],
    github: "https://github.com/shubhamagnihotri/promogenie",
    demo: "https://promogenie.demo.com",
    category: "AI/ML",
    show: false,
  },
  {
    title: "Bud-E",
    description: "Intelligent chatbot for customer service automation with sentiment analysis and real-time response generation.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop&crop=entropy&auto=format",
    technologies: ["Python", "TensorFlow", "BERT", "Flask", "MongoDB"],
    github: "https://github.com/shubhamagnihotri/bud-e",
    demo: "https://bud-e.demo.com",
    category: "AI/ML",
    show: false,
  },
  {
    title: "AutoML Pipeline",
    description: "End-to-end automated machine learning pipeline with model selection, hyperparameter tuning, and deployment automation.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop&crop=entropy&auto=format",
    technologies: ["Python", "Scikit-learn", "MLflow", "Kubernetes", "AWS"],
    github: "https://github.com/shubhamagnihotri/automl-pipeline",
    demo: "https://automl.demo.com",
    category: "MLOps",
    show: false,
  },
  {
    title: "Self-Driving Car",
    description: "Computer vision-based autonomous vehicle navigation system using deep learning and sensor fusion techniques.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop&crop=entropy&auto=format",
    technologies: ["Python", "OpenCV", "TensorFlow", "ROS", "C++"],
    github: "https://github.com/shubhamagnihotri/self-driving-car",
    demo: "https://selfdriving.demo.com",
    category: "Computer Vision",
    show: false,
  },
  {
    title: "Banking Analytics Dashboard",
    description: "Real-time analytics dashboard for banking operations with fraud detection and customer insights visualization.",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=300&fit=crop&crop=entropy&auto=format",
    technologies: ["React", "D3.js", "Python", "PostgreSQL", "Redis"],
    github: "https://github.com/shubhamagnihotri/banking-dashboard",
    demo: "https://banking-analytics.demo.com",
    category: "Analytics",
    show: false,
  },
  {
    title: "Agricultural Prediction System",
    description: "Machine learning system for crop yield prediction and agricultural risk assessment using weather and soil data.",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&h=300&fit=crop&crop=entropy&auto=format",
    technologies: ["Python", "Random Forest", "React", "IoT", "MongoDB"],
    github: "https://github.com/shubhamagnihotri/agri-prediction",
    demo: "https://agri-predict.demo.com",
    category: "AI/ML",
    show: false,
  },
  // ── Add more projects below. Copy a block above, set show: true to display ──
];
