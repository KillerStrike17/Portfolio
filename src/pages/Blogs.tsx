import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Calendar, Clock, ArrowRight, Loader2, BookOpen, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "../components/SEO";
import JsonLd from "../components/JsonLd";
import { MediumArticles } from "medium-article-api";
import {
  fadeUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem,
} from "../lib/animations";

interface MediumArticle {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: unknown;
  categories: string[];
}

interface MediumResponse {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: MediumArticle[];
}

const Blogs = () => {
  const [mediumData, setMediumData] = useState<MediumResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMediumArticles = async () => {
      try {
        setLoading(true);
        const mediumArticles = MediumArticles();
        const data = await mediumArticles.getData("shubham-agnihotri");
        setMediumData(data as MediumResponse);
      } catch (err) {
        console.error("Error fetching Medium articles:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchMediumArticles();
  }, []);

  const extractFirstImageUrl = (htmlContent: string): string => {
    const imgRegex = /<img.*?src=["'](.*?)["'].*?>/i;
    const match = htmlContent.match(imgRegex);
    return match
      ? match[1]
      : "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop&crop=entropy&auto=format";
  };

  const extractTextFromHtml = (html: string): string => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || "";
    return text.substring(0, 200) + "...";
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  };

  const calculateReadTime = (content: string): string => {
    const wordsPerMinute = 200;
    const text = extractTextFromHtml(content);
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  const fallbackBlogPosts = [
    {
      title: "The Future of AutoML: Democratizing Machine Learning",
      excerpt: "Exploring how automated machine learning is making AI accessible to everyone, regardless of technical background. A deep dive into the tools and techniques shaping the future.",
      date: "March 10, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop&crop=entropy&auto=format",
      url: "https://medium.com/@shubham-agnihotri",
      tags: ["AutoML", "Machine Learning", "AI"],
    },
    {
      title: "Building Scalable MLOps Pipelines in Production",
      excerpt: "A comprehensive guide to implementing robust MLOps practices that scale. From model versioning to automated deployment and monitoring strategies.",
      date: "February 25, 2024",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop&crop=entropy&auto=format",
      url: "https://medium.com/@shubham-agnihotri",
      tags: ["MLOps", "DevOps", "Kubernetes"],
    },
    {
      title: "Ethical AI: Building Responsible Machine Learning Systems",
      excerpt: "Why ethics matter in AI development and how to build systems that are fair, transparent, and accountable. Real-world examples and practical guidelines.",
      date: "February 15, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=300&fit=crop&crop=entropy&auto=format",
      url: "https://medium.com/@shubham-agnihotri",
      tags: ["Ethics", "AI", "Responsibility"],
    },
    {
      title: "Computer Vision in Banking: Real-world Applications",
      excerpt: "How computer vision is transforming the banking industry, from document processing to fraud detection. Case studies and implementation insights.",
      date: "January 30, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop&crop=entropy&auto=format",
      url: "https://medium.com/@shubham-agnihotri",
      tags: ["Computer Vision", "Banking", "FinTech"],
    },
    {
      title: "From Data Scientist to Tech Speaker: My Journey",
      excerpt: "Personal insights on transitioning from pure technical work to public speaking and content creation. Tips for aspiring tech speakers.",
      date: "January 15, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=500&h=300&fit=crop&crop=entropy&auto=format",
      url: "https://medium.com/@shubham-agnihotri",
      tags: ["Career", "Speaking", "Personal Growth"],
    },
    {
      title: "Mastering TensorFlow Extended (TFX) for Production ML",
      excerpt: "A detailed walkthrough of TFX components and how to build end-to-end ML pipelines that are production-ready and scalable.",
      date: "December 20, 2023",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=500&h=300&fit=crop&crop=entropy&auto=format",
      url: "https://medium.com/@shubham-agnihotri",
      tags: ["TensorFlow", "TFX", "Production ML"],
    },
  ];

  const blogPosts = mediumData?.items
    ? mediumData.items.map((item) => ({
        title: item.title,
        excerpt: extractTextFromHtml(item.description),
        date: formatDate(item.pubDate),
        readTime: calculateReadTime(item.content),
        image: extractFirstImageUrl(item.description),
        url: item.link,
        tags: item.categories && item.categories.length > 0 ? item.categories : ["Blog"],
      }))
    : fallbackBlogPosts;

  return (
    <>
      <SEO
        title="Blogs | Shubham Agnihotri - Data Science & AI Insights"
        description="Read Shubham Agnihotri's blogs on data science, machine learning, AI innovations, and technology trends."
        keywords="data science blogs, machine learning articles, AI insights, ML engineer writing, technology trends, Shubham Agnihotri blogs"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          headline: "Shubham Agnihotri's Data Science & Machine Learning Blog",
          description: "Insights, tutorials, and thoughts on data science, machine learning, and AI.",
          author: {
            "@type": "Person",
            name: "Shubham Agnihotri",
            jobTitle: "Senior Data Scientist",
          },
          blogPost: blogPosts.map((blog) => ({
            "@type": "BlogPosting",
            headline: blog.title,
            description: blog.excerpt,
            datePublished: blog.date,
            image: blog.image,
            author: { "@type": "Person", name: "Shubham Agnihotri" },
            keywords: Array.isArray(blog.tags) ? blog.tags.join(", ") : "",
          })),
        }}
      />

      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 mesh-bg opacity-40 dark:opacity-100" />
        <motion.div
          className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-indigo-500/8 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-[350px] h-[350px] bg-cyan-500/8 rounded-full blur-[80px]"
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
            className="mb-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              <BookOpen size={14} />
              Writing & Insights
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
              My{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-20 h-1 mx-auto bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full origin-left mb-4"
            />
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Thoughts, insights, and technical deep-dives on data science, AI, and technology
            </p>
          </motion.div>

          {/* Medium profile banner */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="rounded-2xl glass-card border border-border/40 p-6 mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-5 items-center">
              <div className="flex-shrink-0">
                {mediumData?.feed?.image ? (
                  <img
                    src={mediumData.feed.image}
                    alt="Shubham Agnihotri on Medium"
                    className="w-16 h-16 rounded-full border-2 border-primary/30 object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                    <span className="text-white font-bold font-heading text-lg">SA</span>
                  </div>
                )}
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h2 className="font-heading text-lg font-semibold text-foreground mb-1">
                  {mediumData?.feed?.title || "Stories by Shubham Agnihotri on Medium"}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {mediumData?.feed?.description || "Insights on data science, AI, and technology from a senior data scientist"}
                </p>
              </div>
              <div className="flex gap-3 flex-shrink-0">
                <Button
                  asChild
                  size="sm"
                  className="gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white border-0 hover:shadow-glow-sm cursor-pointer"
                >
                  <a
                    href={mediumData?.feed?.link || "https://medium.com/@shubham-agnihotri"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} />
                    Visit Profile
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="gap-2 border-border/60 hover:border-primary/40 hover:bg-primary/8 cursor-pointer"
                >
                  <a
                    href={`https://medium.com/m/signin?actionUrl=${encodeURIComponent("https://medium.com/@shubham-agnihotri/follow")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <UserPlus size={14} />
                    Follow
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Loading state */}
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col justify-center items-center py-24"
            >
              <div className="relative">
                <div className="w-14 h-14 rounded-full border-2 border-primary/20 animate-pulse" />
                <Loader2 className="absolute inset-2 w-10 h-10 animate-spin text-primary" />
              </div>
              <p className="mt-4 text-muted-foreground text-sm">Loading blog posts...</p>
            </motion.div>
          )}

          {/* Error state */}
          {!loading && error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-8 text-center rounded-2xl border border-destructive/20 bg-destructive/5"
            >
              <p className="font-medium text-destructive mb-4">{error}</p>
              <Button
                variant="outline"
                className="cursor-pointer"
                onClick={() => window.location.reload()}
              >
                Retry
              </Button>
            </motion.div>
          )}

          {/* Featured post */}
          {!loading && !error && blogPosts.length > 0 && (
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="mb-10"
            >
              <a
                href={blogPosts[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="overflow-hidden rounded-2xl glass-card border border-border/40 hover:border-primary/30 hover:shadow-card-hover transition-all duration-400">
                  <div className="md:flex">
                    <div className="md:w-5/12 overflow-hidden">
                      <motion.img
                        src={blogPosts[0].image}
                        alt={blogPosts[0].title}
                        className="w-full h-56 md:h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop";
                        }}
                      />
                    </div>
                    <div className="p-7 md:w-7/12 flex flex-col justify-between">
                      <div>
                        <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 text-white mb-4">
                          Featured Post
                        </div>
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200 leading-snug">
                          {blogPosts[0].title}
                        </h2>
                        <p className="text-muted-foreground mb-5 leading-relaxed line-clamp-3">
                          {blogPosts[0].excerpt}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="flex gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={12} />
                            {blogPosts[0].date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock size={12} />
                            {blogPosts[0].readTime}
                          </span>
                        </div>
                        <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all duration-200">
                          Read Article <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          )}

          {/* Blog grid — scroll-triggered stagger */}
          {!loading && !error && blogPosts.length > 1 && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {blogPosts.slice(1).map((post, index) => (
                <motion.article key={index} variants={staggerItem}>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full"
                  >
                    <div className="h-full overflow-hidden rounded-2xl glass-card border border-border/40 hover:border-primary/30 hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1">
                      <div className="overflow-hidden">
                        <motion.img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-44 object-cover"
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.5 }}
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop";
                          }}
                        />
                      </div>

                      <div className="p-5">
                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {post.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="px-2 py-0.5 text-xs rounded-md bg-primary/10 text-primary font-medium border border-primary/15"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <h3 className="font-heading text-base font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors duration-200 leading-snug">
                          {post.title}
                        </h3>

                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <div className="flex gap-3">
                            <span className="flex items-center gap-1">
                              <Calendar size={11} />
                              {post.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={11} />
                              {post.readTime}
                            </span>
                          </div>
                          <span className="flex items-center gap-1 text-primary font-medium group-hover:gap-1.5 transition-all">
                            Read <ArrowRight size={11} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.article>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Blogs;
