import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { projects } from '../data/projects.config';
import {
  fadeUp, staggerContainer, staggerItem, EASE,
} from '../lib/animations';

const Projects = () => {
  const visibleProjects = projects.filter((p) => p.show);
  const categories = ["All", ...Array.from(new Set(visibleProjects.map((p) => p.category)))];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? visibleProjects
      : visibleProjects.filter((p) => p.category === selectedCategory);

  return (
    <>
      <SEO
        title="Projects | Shubham Agnihotri's Portfolio"
        description="Explore Shubham Agnihotri's data science and machine learning projects, showcasing expertise in AI, NLP, and computer vision."
        keywords="data science projects, machine learning portfolio, AI projects, NLP, computer vision, ML engineer projects"
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "headline": "Shubham Agnihotri's Data Science & Machine Learning Projects",
          "description": "A collection of innovative data science and machine learning projects by Shubham Agnihotri.",
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": visibleProjects.map((project, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "SoftwareSourceCode",
                "name": project.title,
                "description": project.description,
                "codeRepository": project.github,
                "programmingLanguage": project.technologies.join(", "),
                "url": project.demo ?? project.github,
              },
            })),
          },
        }}
      />

      {/* Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 mesh-bg opacity-40 dark:opacity-100" />
        <motion.div
          className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-violet-500/8 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-indigo-500/8 rounded-full blur-[80px]"
          animate={{ scale: [1, 1.15, 1] }}
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
            className="mb-14 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
              <Layers size={14} />
              Portfolio Showcase
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
              My{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-20 h-1 mx-auto bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full origin-left mb-4"
            />
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A collection of my work spanning AI/ML, data science, and software development
            </p>
          </motion.div>

          {visibleProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-24 text-center text-muted-foreground"
            >
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
                <Layers size={28} className="text-muted-foreground/50" />
              </div>
              <p className="text-lg font-medium mb-2">No projects to display yet.</p>
              <p className="text-sm opacity-70">
                Set{' '}
                <code className="px-1.5 py-0.5 rounded-md bg-muted text-primary">show: true</code>{' '}
                on any project in{' '}
                <code className="px-1.5 py-0.5 rounded-md bg-muted text-primary">
                  src/data/projects.config.ts
                </code>
              </p>
            </motion.div>
          ) : (
            <>
              {/* Category filter pills */}
              {categories.length > 2 && (
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap gap-2 justify-center mb-12"
                >
                  {categories.map((category) => (
                    <motion.button
                      key={category}
                      variants={staggerItem}
                      onClick={() => setSelectedCategory(category)}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer border ${
                        selectedCategory === category
                          ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white border-transparent shadow-glow-sm'
                          : 'border-border/60 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/8'
                      }`}
                    >
                      {category}
                    </motion.button>
                  ))}
                </motion.div>
              )}

              {/* Project grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                  >
                    {filteredProjects.map((project) => (
                      <motion.div
                        key={project.title}
                        variants={staggerItem}
                        layout
                        className="group overflow-hidden rounded-2xl glass-card border border-border/40 hover:border-primary/30 hover:shadow-card-hover transition-all duration-400 hover:-translate-y-1"
                      >
                        {/* Image */}
                        <div className="relative overflow-hidden h-48">
                          <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.5, ease: EASE }}
                          />
                          {/* Overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Button
                                size="sm"
                                variant="secondary"
                                className="gap-1.5 cursor-pointer bg-white/90 text-gray-900 hover:bg-white"
                              >
                                <Github size={14} />
                                Code
                              </Button>
                            </a>
                            {project.demo && (
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Button
                                  size="sm"
                                  className="gap-1.5 cursor-pointer bg-gradient-to-r from-indigo-600 to-violet-600 text-white border-0"
                                >
                                  <ExternalLink size={14} />
                                  Demo
                                </Button>
                              </a>
                            )}
                          </div>
                          {/* Category badge */}
                          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-background/90 backdrop-blur-sm text-primary border border-primary/20">
                            {project.category}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5">
                          <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200 leading-tight">
                            {project.title}
                          </h3>

                          <p className="text-sm text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
                            {project.description}
                          </p>

                          {/* Tech tags */}
                          <div className="flex flex-wrap gap-1.5 mb-5">
                            {project.technologies.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 text-xs rounded-md bg-muted text-muted-foreground font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="px-2 py-0.5 text-xs rounded-md bg-muted text-muted-foreground font-medium">
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </div>

                          {/* Action buttons */}
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="flex-1 gap-1.5 cursor-pointer border-border/60 hover:border-primary/40 hover:bg-primary/8 hover:text-primary text-xs"
                              asChild
                            >
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github size={13} />
                                Code
                              </a>
                            </Button>
                            {project.demo && (
                              <Button
                                size="sm"
                                className="flex-1 gap-1.5 cursor-pointer bg-gradient-to-r from-indigo-600 to-violet-600 text-white border-0 hover:shadow-glow-sm text-xs"
                                asChild
                              >
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink size={13} />
                                  Demo
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
