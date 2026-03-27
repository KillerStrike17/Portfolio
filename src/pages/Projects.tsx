import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import { projects } from '../data/projects.config';

const Projects = () => {
  // Only projects with show: true are rendered
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
      <div className="px-4 py-20 min-h-screen">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <h1 className="mb-6 text-4xl font-bold md:text-6xl text-foreground">
              Projects
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              A collection of my work spanning AI/ML, data science, and software development
            </p>
          </motion.div>

          {visibleProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 text-center text-muted-foreground"
            >
              <p className="text-lg">No projects to display yet.</p>
              <p className="mt-2 text-sm opacity-70">
                Set <code className="px-1 py-0.5 rounded bg-secondary">show: true</code> on any
                project in <code className="px-1 py-0.5 rounded bg-secondary">src/data/projects.config.ts</code> to show it here.
              </p>
            </motion.div>
          ) : (
            <>
              {/* Category filter — only shown when there are multiple categories */}
              {categories.length > 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex flex-wrap gap-4 justify-center mb-12"
                >
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-2 rounded-full transition-all duration-300 ${
                        selectedCategory === category
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground hover:bg-primary/10'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </motion.div>
              )}

              <motion.div
                layout
                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="overflow-hidden rounded-lg border transition-all duration-300 group bg-card border-border hover:shadow-xl"
                    whileHover={{ y: -5 }}
                  >
                    <div className="overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="flex absolute inset-0 gap-4 justify-center items-center opacity-0 transition-opacity duration-300 bg-black/60 group-hover:opacity-100">
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github size={16} className="mr-2" />
                            Code
                          </a>
                        </Button>
                        {project.demo && (
                          <Button size="sm" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={16} className="mr-2" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-xl font-semibold text-foreground">
                          {project.title}
                        </h3>
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                          {project.category}
                        </span>
                      </div>

                      <p className="mb-4 text-muted-foreground line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github size={16} className="mr-2" />
                            Code
                          </a>
                        </Button>
                        {project.demo && (
                          <Button size="sm" className="flex-1" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={16} className="mr-2" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
