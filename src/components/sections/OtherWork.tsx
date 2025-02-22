"use client"
import { useState } from 'react';

interface OtherWorkItem {
  title: string;
  description: string;
  technologies: string[];
  zipFileUrl: string;
}

const OtherWork = () => {
  const [works] = useState<OtherWorkItem[]>([
    {
      title: "Legacy Project 1",
      description: "Personal finance tracker with budget planning and expense analytics features",
      technologies: ["React", "TypeScript", "Chart.js", "Firebase"],
      zipFileUrl: "/files/legacy-project1.zip"
    },
    {
      title: "Legacy Project 2",
      description: "Social media dashboard for content creators with analytics and post scheduling",
      technologies: ["Next.js", "MongoDB", "TailwindCSS", "OAuth"],
      zipFileUrl: "/files/legacy-project2.zip"
    },
    {
      title: "Legacy Project 3",
      description: "Real-time collaborative code editor with syntax highlighting and version control",
      technologies: ["Vue.js", "Socket.io", "Express", "PostgreSQL"],
      zipFileUrl: "/files/legacy-project3.zip"
    }
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {works.map((work, index) => (
          <div 
            key={index}
            className="bg-neutral-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl w-full max-w-sm"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white">{work.title}</h3>
              <p className="text-gray-300 mb-4">{work.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {work.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 bg-neutral-800 rounded-full text-sm text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={work.zipFileUrl}
                download
                className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
              >
                Download Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherWork;