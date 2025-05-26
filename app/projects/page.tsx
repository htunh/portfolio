"use client";

import { useEffect, useState } from 'react';

interface Project {
  id: number;
  name: string;
  html_url: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("https://api.github.com/users/htunh/repos");
      const data = await res.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {projects.map((project) => (
          <div key={project.id} className="p-4 border rounded-lg shadow-md">
            <a href={project.html_url} className="text-blue-500">
              <h2 className="text-xl font-semibold">{project.name}</h2>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}