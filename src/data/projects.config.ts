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
    title: "Portfolio",
    description: "Portfolio — a public GitHub project.",
    image: "https://raw.githubusercontent.com/KillerStrike17/Portfolio/main/Assets/images/acd-bengaluru-2025/PHOTO-2026-03-22-21-28-17%2025.jpg",
    technologies: ["TypeScript"],
    github: "https://github.com/KillerStrike17/Portfolio",
    demo: "https://portfolio-nine-opal-ryitllc5q9.vercel.app",
    category: "Web Development",
    show: true,  // ← flip to true to display on the Projects page
  },
  {
    title: "KillerStrike17",
    description: "KillerStrike17 — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/KillerStrike17",
    category: "Personal",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "A2A-Agent2Agent-Protocol-demo",
    description: "A2A-Agent2Agent-Protocol-demo — a public GitHub project.",
    image: "/Assets/projects/a2a_demo_1774681602193.png",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/A2A-Agent2Agent-Protocol-demo",
    category: "AI/ML",
    show: true,  // ← flip to true to display on the Projects page
  },
  {
    title: "CP-Journey",
    description: "This is my hardwork and dedication to get into Google, Facebook, Microsoft, Amazon, Apple and others",
    image: "/Assets/projects/cp_journey_1774681616367.png",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/CP-Journey",
    category: "Competitive Programming",
    show: true,  // ← flip to true to display on the Projects page
  },
  {
    title: "vlm-from-scratch",
    description: "vlm-from-scratch — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/vlm-from-scratch",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "A2A-Protocol-with-Neo4j",
    description: "A2A-Protocol-with-Neo4j — a public GitHub project.",
    image: "/Assets/projects/a2a_neo4j_1774681635320.png",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/A2A-Protocol-with-Neo4j",
    category: "AI/ML",
    show: true,  // ← flip to true to display on the Projects page
  },
  {
    title: "Google-Agent-Development-Kit-Deep-Dive",
    description: "Google-Agent-Development-Kit-Deep-Dive — a public GitHub project.",
    image: "/Assets/projects/google_adk_1774681651705.png",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/Google-Agent-Development-Kit-Deep-Dive",
    category: "AI/ML",
    show: true,  // ← flip to true to display on the Projects page
  },
  {
    title: "A2A-Agent2Agent-Protocol-Gitex-2025",
    description: "A2A-Agent2Agent-Protocol-Gitex-2025 — a public GitHub project.",
    image: "/Assets/projects/a2a_gitex_1774681670021.png",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/A2A-Agent2Agent-Protocol-Gitex-2025",
    category: "AI/ML",
    show: true,  // ← flip to true to display on the Projects page
  },
  {
    title: "Google-ADK-with-MCP",
    description: "Google-ADK-with-MCP — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/Google-ADK-with-MCP",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "mcp_101",
    description: "mcp_101 — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/mcp_101",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "KillerStrike17.github.io",
    description: "My Site developed from an open source code from github.com/nakulcr7. Forgive me, I am a data scientist not a web developer.. Don't know how to build it from scratch",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["SCSS","Css","Html","Js","PortfolioWebsite"],
    github: "https://github.com/KillerStrike17/KillerStrike17.github.io",
    demo: "https://killer-strike17-github-io.vercel.app",
    category: "Web Development",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "hydra_lightning_with_github_actions",
    description: "hydra_lightning_with_github_actions — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/hydra_lightning_with_github_actions",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "PromoGenie",
    description: "Unleashing Creativity, One Banner at a Time!",
    image: "https://raw.githubusercontent.com/KillerStrike17/PromoGenie/main/Assets/Architecture/Architecture%20Diagram.png",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/PromoGenie",
    category: "AI/ML",
    show: true,  // ← flip to true to display on the Projects page
  },
  {
    title: "lightning-template-hydra",
    description: "lightning-template-hydra — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/lightning-template-hydra",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Research-paper-Summary",
    description: "Summary of Research papers that i read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/Research-paper-Summary",
    category: "Research",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "3d-portfolio",
    description: "My 3d Portfolio Site",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop&auto=format",
    technologies: ["JavaScript"],
    github: "https://github.com/KillerStrike17/3d-portfolio",
    category: "Web Development",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Stable-Diffusion-with-custom-styles",
    description: "Stable-Diffusion-with-custom-styles — a public GitHub project.",
    image: "/Assets/projects/stable_diffusion_1774681699283.png",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/Stable-Diffusion-with-custom-styles",
    category: "AI/ML",
    show: true,  // ← flip to true to display on the Projects page
  },
  {
    title: "FineTuning_LLMs",
    description: "FineTuning_LLMs — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/FineTuning_LLMs",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Law-RAG",
    description: "Law-RAG — a public GitHub project.",
    image: "/Assets/projects/law_rag_1774681718457.png",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/Law-RAG",
    category: "AI/ML",
    show: true,  // ← flip to true to display on the Projects page
  },
  {
    title: "LLM-Ops",
    description: "Repo Around everything of LLM Ops",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/LLM-Ops",
    category: "MLOps",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "UNet-from-Scratch---Pytorch",
    description: "UNet-from-Scratch---Pytorch — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/UNet-from-Scratch---Pytorch",
    category: "Computer Vision",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "ClipClip",
    description: "ClipClip — a public GitHub project.",
    image: "https://raw.githubusercontent.com/KillerStrike17/ClipClip/main/Assets/cat.jpg",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/ClipClip",
    category: "AI/ML",
    show: true,  // ← flip to true to display on the Projects page
  },
  {
    title: "Pretrained-Transformers---BERT--ViT-and-GPT",
    description: "Pretrained-Transformers---BERT--ViT-and-GPT — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/Pretrained-Transformers---BERT--ViT-and-GPT",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Transformers-from-scratch",
    description: "Transformers-from-scratch — a public GitHub project.",
    image: "/Assets/projects/transformers_1774696999894.png",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/Transformers-from-scratch",
    category: "AI/ML",
    show: true,  // ← flip to true to display on the Projects page
  },
  {
    title: "HuggingFace-AudioTransformers",
    description: "HuggingFace-AudioTransformers — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/HuggingFace-AudioTransformers",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "YOLO-v3-from-Scratch",
    description: "YOLO-v3-from-Scratch — a public GitHub project.",
    image: "https://raw.githubusercontent.com/KillerStrike17/YOLO-v3-from-Scratch/main/image.png",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/YOLO-v3-from-Scratch",
    category: "Computer Vision",
    show: true,  // ← flip to true to display on the Projects page
  },
  {
    title: "MLOps-with-ZenML",
    description: "MLOps-with-ZenML — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/MLOps-with-ZenML",
    category: "MLOps",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Media.net-Creditcard",
    description: "Media.net-Creditcard — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/Media.net-Creditcard",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "DavidNet-with-Pytorch-Lightning",
    description: "DavidNet-with-Pytorch-Lightning — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/DavidNet-with-Pytorch-Lightning",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Resnet-with-GradCam-Pyotrch",
    description: "Resnet-with-GradCam-Pyotrch — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/Resnet-with-GradCam-Pyotrch",
    category: "Computer Vision",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "DeepLib",
    description: "Deep Learning Library",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/DeepLib",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Readme.md-To-Medium-via-Medium-API",
    description: "Readme.md-To-Medium-via-Medium-API — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/Readme.md-To-Medium-via-Medium-API",
    category: "Tools",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "LLMs-in-Production",
    description: "LLMs-in-Production — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/LLMs-in-Production",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "DeepLake-Langchain",
    description: "DeepLake-Langchain — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/DeepLake-Langchain",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "AI-QR-Code",
    description: "AI-QR-Code — a public GitHub project.",
    image: "https://raw.githubusercontent.com/KillerStrike17/AI-QR-Code/main/Output/Angel.png",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/AI-QR-Code",
    category: "AI/ML",
    show: true,  // ← flip to true to display on the Projects page
  },
  {
    title: "Song-Recommendation-System",
    description: "Song-Recommendation-System — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/Song-Recommendation-System",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Understanding-Github-Repos-with-LLMs",
    description: "Understanding-Github-Repos-with-LLMs — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/Understanding-Github-Repos-with-LLMs",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Video-Summarizer-with-LLMs",
    description: "Video-Summarizer-with-LLMs — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/Video-Summarizer-with-LLMs",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "DavidNet-Cifar10-Dawn-Benchmark",
    description: "DavidNet-Cifar10-Dawn-Benchmark — a public GitHub project.",
    image: "/Assets/projects/dawn_benchmark_1774697017688.png",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/DavidNet-Cifar10-Dawn-Benchmark",
    category: "AI/ML",
    show: true,  // ← flip to true to display on the Projects page
  },
  {
    title: "My-IT-Assistant",
    description: "My-IT-Assistant — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/My-IT-Assistant",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Tabular-Data-with-LLMs",
    description: "Tabular-Data-with-LLMs — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/Tabular-Data-with-LLMs",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "85-Cifar-10-using-depthwise-seperable-and-dilated-kernels",
    description: "85-Cifar-10-using-depthwise-seperable-and-dilated-kernels — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/85-Cifar-10-using-depthwise-seperable-and-dilated-kernels",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "News-Summarization-with-LLM",
    description: "News-Summarization-with-LLM — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/News-Summarization-with-LLM",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "BatchNorm-GroupNorm-and-LayerNom-in-Pytorch",
    description: "BatchNorm-GroupNorm-and-LayerNom-in-Pytorch — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/BatchNorm-GroupNorm-and-LayerNom-in-Pytorch",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "MNIST-99.4-under-8k-parameters",
    description: "MNIST-99.4-under-8k-parameters — a public GitHub project.",
    image: "/Assets/projects/mnist_8k_1774697035347.png",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/MNIST-99.4-under-8k-parameters",
    category: "AI/ML",
    show: true,  // ← flip to true to display on the Projects page
  },
  {
    title: "MNIST-Pytorch-99.4-under-10k-parameters",
    description: "MNIST-Pytorch-99.4-under-10k-parameters — a public GitHub project.",
    image: "https://raw.githubusercontent.com/KillerStrike17/MNIST-Pytorch-99.4-under-10k-parameters/main/Assets/Backprop_v1.PNG",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/MNIST-Pytorch-99.4-under-10k-parameters",
    category: "AI/ML",
    show: true,  // ← flip to true to display on the Projects page
  },
  {
    title: "Pytorch-101",
    description: "Exploring Pytorch",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/Pytorch-101",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "GraphicalNeuralNetwork",
    description: "GraphicalNeuralNetwork — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/GraphicalNeuralNetwork",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "DeepQuiz-Telegram-Bot",
    description: "DeepQuiz-Telegram-Bot — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/DeepQuiz-Telegram-Bot",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "PyDeNN",
    description: "PyDeN is an Awesome Deep learning Wrapper Library for pytorch",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/PyDeNN",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Killerstrike_old_portfolio_site",
    description: "This is my old Portfolio site",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["CSS"],
    github: "https://github.com/KillerStrike17/Killerstrike_old_portfolio_site",
    category: "Web Development",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "EPAi",
    description: "EPAi — a public GitHub project.",
    image: "https://raw.githubusercontent.com/KillerStrike17/EPAi/master/02.%20Object%20Mutability%20and%20Interning/Assets/output_result_format.png",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/EPAi",
    category: "AI/ML",
    show: true,  // ← flip to true to display on the Projects page
  },
  {
    title: "EVA-5",
    description: "EVA-5 — a public GitHub project.",
    image: "https://raw.githubusercontent.com/KillerStrike17/EVA-5/master/04.%20Architecture%20Basics/Assets/Model_1_Architecture.jpg",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/EVA-5",
    category: "AI/ML",
    show: true,  // ← flip to true to display on the Projects page
  },
  {
    title: "Quantum-Machine-Learning-with-Qiskit",
    description: "This repository contains my work done over QML using Qiskit",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook","Ibmq","Qiskit","Qml","Quantum"],
    github: "https://github.com/KillerStrike17/Quantum-Machine-Learning-with-Qiskit",
    category: "Quantum Computing",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Awesome-Quantum",
    description: "This Repository contains the work done by me in the field of Quantum",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/Awesome-Quantum",
    category: "Quantum Computing",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "10DaysofMLChallenge",
    description: "Won the 10 Days ML Challenge hosted by Tensorflow User Group Mumbai. This Repository consists of the problem statements and their solutions developed by me.",
    image: "https://raw.githubusercontent.com/KillerStrike17/10DaysofMLChallenge/master/Day5/Assets/GradCAM_output.png",
    technologies: ["Jupyter Notebook","ConvolutionalNeuralNetworks","Deeplearning","Keras","Machinelearning"],
    github: "https://github.com/KillerStrike17/10DaysofMLChallenge",
    category: "AI/ML",
    show: true,  // ← flip to true to display on the Projects page
  },
  {
    title: "Shubham_Portfolio",
    description: "My Portfolio Website",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/Shubham_Portfolio",
    category: "Web Development",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "MyCV",
    description: "MyCV — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/MyCV",
    category: "Personal",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Quantum-Computing",
    description: "Some of my learning while exploring Quantum Computing and merging it with AI",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook","Qiskit","QuantumComputing"],
    github: "https://github.com/KillerStrike17/Quantum-Computing",
    category: "Quantum Computing",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "100DaysofML",
    description: "This repository consists of all the project i complete in my 100 days of ML challenge. I am open sourcing them so that the community can benefit from it",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/100DaysofML",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Learn_With_Shubham",
    description: "I like to expand my knowledge by sharing it. This repository consists of the material I use in my blogs, talks or presentation",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook","ArtificialIntelligence","ConvolutionalNeuralNetworks","Machinelearning","Neuralnetwork"],
    github: "https://github.com/KillerStrike17/Learn_With_Shubham",
    category: "Education",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Deep-Learning-for-Vision-Using-Tensorflow-Keras",
    description: "This repository will guide in applying Deep Learning in Vision. It contains all the work I did in Tensorflow while learning.",
    image: "https://raw.githubusercontent.com/KillerStrike17/Deep-Learning-for-Vision-Using-Tensorflow-Keras/master/10.%20LR%20Finder/Assets/gradcamoutput.png",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/Deep-Learning-for-Vision-Using-Tensorflow-Keras",
    category: "Computer Vision",
    show: true,  // ← flip to true to display on the Projects page
  },
  {
    title: "Deep-Reinforcement-Learning",
    description: "Deep-Reinforcement-Learning — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/Deep-Reinforcement-Learning",
    category: "Reinforcement Learning",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "AI-Edge-OpenVinoToolkit",
    description: "This repository consists of some of my projects which I did in this toolkit",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop&auto=format",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/AI-Edge-OpenVinoToolkit",
    category: "Edge AI",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Competitive_Programming",
    description: "This repository contains the solutions of the problems I solved in CP",
    image: "/Assets/projects/competitive_programming_1774697053239.png",
    technologies: ["Python"],
    github: "https://github.com/KillerStrike17/Competitive_Programming",
    category: "Competitive Programming",
    show: true,  // ← flip to true to display on the Projects page
  },
  {
    title: "ML-Dictionary",
    description: "This repo contains information of models and keywords used in machine learing",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/ML-Dictionary",
    category: "Education",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "DeepLearning_for_NLP",
    description: "Applied Deeplearning over NLP",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/DeepLearning_for_NLP",
    category: "NLP",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Intro_with_pytorch",
    description: "Intro_with_pytorch — a public GitHub project.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/Intro_with_pytorch",
    category: "AI/ML",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "Hacknight-5.0-StayConnected---Devengers",
    description: "Developed a virtual assistant using GANs",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook","AndroidStudio","Azure","Flask","Stargan"],
    github: "https://github.com/KillerStrike17/Hacknight-5.0-StayConnected---Devengers",
    category: "Hackathon",
    show: false,  // ← flip to true to display on the Projects page
  },
  {
    title: "KSP-IPH-2019-table30",
    description: "Runners up in Facial Recognition category of All India Police Hackathon 2019",
    image: "https://raw.githubusercontent.com/KillerStrike17/KSP-IPH-2019-table30/master/Results_Images/Face_recognition_Web_scraped_dataset/bum.jpg",
    technologies: ["GitHub"],
    github: "https://github.com/KillerStrike17/KSP-IPH-2019-table30",
    category: "Hackathon",
    show: true,  // ← flip to true to display on the Projects page
  },
  {
    title: "EVA---Session-10-VGG",
    description: "This repository consists of interpreting the outputs VGG model with GRADcam",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop&auto=format",
    technologies: ["Jupyter Notebook"],
    github: "https://github.com/KillerStrike17/EVA---Session-10-VGG",
    category: "Computer Vision",
    show: false,  // ← flip to true to display on the Projects page
  },
  // ── Add more projects below. Copy a block above, set show: true to display ──
];
