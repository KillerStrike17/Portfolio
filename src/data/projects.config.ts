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
  {
    title: "Portfolio",
    description: "Portfolio — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=500&h=300&fit=crop&auto=format",
    technologies: ["TypeScript"],
    github: "https://github.com/KillerStrike17/Portfolio",
    demo: "https://portfolio-nine-opal-ryitllc5q9.vercel.app",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "KillerStrike17",
    description: "KillerStrike17 — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/KillerStrike17",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "A2A-Agent2Agent-Protocol-demo",
    description: "A2A-Agent2Agent-Protocol-demo — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/A2A-Agent2Agent-Protocol-demo",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "CP-Journey",
    description: "This is my hardwork and dedication to get into Google, Facebook, Microsoft, Amazon, Apple and others",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/CP-Journey",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "vlm-from-scratch",
    description: "vlm-from-scratch — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/vlm-from-scratch",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "A2A-Protocol-with-Neo4j",
    description: "A2A-Protocol-with-Neo4j — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/A2A-Protocol-with-Neo4j",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Google-Agent-Development-Kit-Deep-Dive",
    description: "Google-Agent-Development-Kit-Deep-Dive — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/Google-Agent-Development-Kit-Deep-Dive",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "A2A-Agent2Agent-Protocol-Gitex-2025",
    description: "A2A-Agent2Agent-Protocol-Gitex-2025 — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/A2A-Agent2Agent-Protocol-Gitex-2025",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Google-ADK-with-MCP",
    description: "Google-ADK-with-MCP — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/Google-ADK-with-MCP",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "mcp_101",
    description: "mcp_101 — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/mcp_101",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "KillerStrike17.github.io",
    description: "My Site developed from an open source code from github.com/nakulcr7. Forgive me, I am a data scientist not a web developer.. Don't know how to build it from scratch",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["SCSS","Css","Html","Js","PortfolioWebsite"],
    github: "https://github.com/KillerStrike17/KillerStrike17.github.io",
    demo: "https://killer-strike17-github-io.vercel.app",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "hydra_lightning_with_github_actions",
    description: "hydra_lightning_with_github_actions — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/hydra_lightning_with_github_actions",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "PromoGenie",
    description: "Unleashing Creativity, One Banner at a Time!",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/PromoGenie",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "lightning-template-hydra",
    description: "lightning-template-hydra — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/lightning-template-hydra",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Research-paper-Summary",
    description: "Summary of Research papers that i read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/Research-paper-Summary",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "3d-portfolio",
    description: "My 3d Portfolio Site",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&auto=format",
    technologies: ["JavaScript"],
    github: "https://github.com/KillerStrike17/3d-portfolio",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Stable-Diffusion-with-custom-styles",
    description: "Stable-Diffusion-with-custom-styles — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/Stable-Diffusion-with-custom-styles",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "FineTuning_LLMs",
    description: "FineTuning_LLMs — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/FineTuning_LLMs",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Law-RAG",
    description: "Law-RAG — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/Law-RAG",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "LLM-Ops",
    description: "Repo Around everything of LLM Ops",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/LLM-Ops",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "UNet-from-Scratch---Pytorch",
    description: "UNet-from-Scratch---Pytorch — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/UNet-from-Scratch---Pytorch",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "ClipClip",
    description: "ClipClip — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/ClipClip",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Pretrained-Transformers---BERT--ViT-and-GPT",
    description: "Pretrained-Transformers---BERT--ViT-and-GPT — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/Pretrained-Transformers---BERT--ViT-and-GPT",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Transformers-from-scratch",
    description: "Transformers-from-scratch — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/Transformers-from-scratch",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "HuggingFace-AudioTransformers",
    description: "HuggingFace-AudioTransformers — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/HuggingFace-AudioTransformers",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "YOLO-v3-from-Scratch",
    description: "YOLO-v3-from-Scratch — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/YOLO-v3-from-Scratch",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "MLOps-with-ZenML",
    description: "MLOps-with-ZenML — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/MLOps-with-ZenML",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Media.net-Creditcard",
    description: "Media.net-Creditcard — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/Media.net-Creditcard",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "DavidNet-with-Pytorch-Lightning",
    description: "DavidNet-with-Pytorch-Lightning — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/DavidNet-with-Pytorch-Lightning",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Resnet-with-GradCam-Pyotrch",
    description: "Resnet-with-GradCam-Pyotrch — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/Resnet-with-GradCam-Pyotrch",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "DeepLib",
    description: "Deep Learning Library",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/DeepLib",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Readme.md-To-Medium-via-Medium-API",
    description: "Readme.md-To-Medium-via-Medium-API — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/Readme.md-To-Medium-via-Medium-API",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "LLMs-in-Production",
    description: "LLMs-in-Production — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/LLMs-in-Production",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "DeepLake-Langchain",
    description: "DeepLake-Langchain — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/DeepLake-Langchain",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "AI-QR-Code",
    description: "AI-QR-Code — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/AI-QR-Code",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Song-Recommendation-System",
    description: "Song-Recommendation-System — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/Song-Recommendation-System",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Understanding-Github-Repos-with-LLMs",
    description: "Understanding-Github-Repos-with-LLMs — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/Understanding-Github-Repos-with-LLMs",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Video-Summarizer-with-LLMs",
    description: "Video-Summarizer-with-LLMs — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/Video-Summarizer-with-LLMs",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "DavidNet-Cifar10-Dawn-Benchmark",
    description: "DavidNet-Cifar10-Dawn-Benchmark — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/DavidNet-Cifar10-Dawn-Benchmark",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "My-IT-Assistant",
    description: "My-IT-Assistant — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/My-IT-Assistant",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Tabular-Data-with-LLMs",
    description: "Tabular-Data-with-LLMs — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/Tabular-Data-with-LLMs",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "85-Cifar-10-using-depthwise-seperable-and-dilated-kernels",
    description: "85-Cifar-10-using-depthwise-seperable-and-dilated-kernels — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/85-Cifar-10-using-depthwise-seperable-and-dilated-kernels",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "News-Summarization-with-LLM",
    description: "News-Summarization-with-LLM — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/News-Summarization-with-LLM",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "BatchNorm-GroupNorm-and-LayerNom-in-Pytorch",
    description: "BatchNorm-GroupNorm-and-LayerNom-in-Pytorch — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/BatchNorm-GroupNorm-and-LayerNom-in-Pytorch",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "MNIST-99.4-under-8k-parameters",
    description: "MNIST-99.4-under-8k-parameters — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/MNIST-99.4-under-8k-parameters",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "MNIST-Pytorch-99.4-under-10k-parameters",
    description: "MNIST-Pytorch-99.4-under-10k-parameters — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/MNIST-Pytorch-99.4-under-10k-parameters",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Pytorch-101",
    description: "Exploring Pytorch",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/Pytorch-101",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "GraphicalNeuralNetwork",
    description: "GraphicalNeuralNetwork — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/GraphicalNeuralNetwork",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "DeepQuiz-Telegram-Bot",
    description: "DeepQuiz-Telegram-Bot — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/DeepQuiz-Telegram-Bot",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "PyDeNN",
    description: "PyDeN is an Awesome Deep learning Wrapper Library for pytorch",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/PyDeNN",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Killerstrike_old_portfolio_site",
    description: "This is my old Portfolio site",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["CSS"],
    github: "https://github.com/KillerStrike17/Killerstrike_old_portfolio_site",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "EPAi",
    description: "EPAi — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/EPAi",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "EVA-5",
    description: "EVA-5 — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/EVA-5",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Quantum-Machine-Learning-with-Qiskit",
    description: "This repository contains my work done over QML using Qiskit",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook","Ibmq","Qiskit","Qml","Quantum"],
    github: "https://github.com/KillerStrike17/Quantum-Machine-Learning-with-Qiskit",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Awesome-Quantum",
    description: "This Repository contains the work done by me in the field of Quantum",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/Awesome-Quantum",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "10DaysofMLChallenge",
    description: "Won the 10 Days ML Challenge hosted by Tensorflow User Group Mumbai. This Repository consists of the problem statements and their solutions developed by me.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook","ConvolutionalNeuralNetworks","Deeplearning","Keras","Machinelearning"],
    github: "https://github.com/KillerStrike17/10DaysofMLChallenge",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Shubham_Portfolio",
    description: "My Portfolio Website",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/Shubham_Portfolio",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "MyCV",
    description: "MyCV — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/MyCV",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Quantum-Computing",
    description: "Some of my learning while exploring Quantum Computing and merging it with AI",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook","Qiskit","QuantumComputing"],
    github: "https://github.com/KillerStrike17/Quantum-Computing",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "100DaysofML",
    description: "This repository consists of all the project i complete in my 100 days of ML challenge. I am open sourcing them so that the community can benefit from it",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/100DaysofML",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Learn_With_Shubham",
    description: "I like to expand my knowledge by sharing it. This repository consists of the material I use in my blogs, talks or presentation",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook","ArtificialIntelligence","ConvolutionalNeuralNetworks","Machinelearning","Neuralnetwork"],
    github: "https://github.com/KillerStrike17/Learn_With_Shubham",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Deep-Learning-for-Vision-Using-Tensorflow-Keras",
    description: "This repository will guide in applying Deep Learning in Vision. It contains all the work I did in Tensorflow while learning.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/Deep-Learning-for-Vision-Using-Tensorflow-Keras",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Deep-Reinforcement-Learning",
    description: "Deep-Reinforcement-Learning — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/Deep-Reinforcement-Learning",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "AI-Edge-OpenVinoToolkit",
    description: "This repository consists of some of my projects which I did in this toolkit",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/AI-Edge-OpenVinoToolkit",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Competitive_Programming",
    description: "This repository contains the solutions of the problems I solved in CP",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/Competitive_Programming",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "ML-Dictionary",
    description: "This repo contains information of models and keywords used in machine learing",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/ML-Dictionary",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "DeepLearning_for_NLP",
    description: "Applied Deeplearning over NLP",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/DeepLearning_for_NLP",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Intro_with_pytorch",
    description: "Intro_with_pytorch — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/Intro_with_pytorch",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Hacknight-5.0-StayConnected---Devengers",
    description: "Developed a virtual assistant using GANs",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook","AndroidStudio","Azure","Flask","Stargan"],
    github: "https://github.com/KillerStrike17/Hacknight-5.0-StayConnected---Devengers",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "KSP-IPH-2019-table30",
    description: "Runners up in Facial Recognition category of All India Police Hackathon 2019",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/KSP-IPH-2019-table30",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "EVA---Session-10-VGG",
    description: "This repository consists of interpreting the outputs VGG model with GRADcam",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/EVA---Session-10-VGG",
    category: "Other",
    show: false,  // ← flip to true to display on the Projects page
  },
  // ── Add more projects below. Copy a block above, set show: true to display ──
];
