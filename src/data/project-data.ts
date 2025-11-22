// This is just for listing pages - each project still defines its own full data
export interface ProjectListing {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: "Web" | "Mobile" | "UI/UX";
  tags: string[];
  featured?: boolean;
  year: string;
  role: string;
  // Dynamic button configuration
  primaryButton: {
    label: string;
    url: string;
  };
  secondaryButton: {
    label: string;
    url: string;
  };
}

// Project registry for listing pages only
export const projectRegistry: Record<string, ProjectListing> = {
  'e-commerce-platform': {
    slug: "e-commerce-platform",
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with seamless checkout, inventory management, and personalized recommendations.",
    image: "https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzYyNzUxNTA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "Web",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    featured: true,
    year: "2024",
    role: "Front-End Developer",
    primaryButton: {
      label: "Visit Website",
      url: "#"
    },
    secondaryButton: {
      label: "Know More",
      url: "/projects/e-commerce-platform"
    }
  },
  'sreenarayanaguru-open-university': {
    slug: "sreenarayanaguru-open-university",
    title: "Sreenarayanaguru Open University (SGOU)",
    description: "Official website for Kerala's first state open university, providing comprehensive distance education services and academic resources",
    image: "images/sgou_feature.webp",
    category: "Web",
    tags: ["Bootstrap 5", "Material Design Bootstrap (MDB)", "JavaScript", "CSS3", "HTML5"],
    featured: true,
    year: "2024",
    role: "Front-End Developer",
    primaryButton: {
      label: "Visit Website",
      url: "https://erp.sgou.ac.in/login-candidate"
    },
    secondaryButton: {
      label: "Know More",
      url: "/projects/sreenarayanaguru-open-university"
    }
  },
   'wayanad-township-portal': {
    slug: "wayanad-township-portal",
    title: "Wayanad Township Portal",
    description: "A comprehensive relief and rehabilitation platform for communities affected by the Meppadi landslide, featuring donation management and township planning.",
    image: "images/wayanad_feature.webp",
    category: "Web",
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "PostgreSQL", "Stripe", "Razorpay", "Admin Dashboard"],
    featured: true,
    year: "2024",
    role: "Full-Stack Developer",
    primaryButton: {
      label: "Visit Portal",
      url: "https://wayanadtownship.in"
    },
    secondaryButton: {
      label: "Know More",
      url: "/projects/wayanad-township-portal"
    }
  }

};

// Helper functions
export const getProjectListing = (slug: string): ProjectListing | undefined => {
  return projectRegistry[slug];
};

export const getFeaturedProjects = (): ProjectListing[] => {
  return Object.values(projectRegistry).filter(project => project.featured);
};

export const getProjectsByCategory = (category: string): ProjectListing[] => {
  const projects = Object.values(projectRegistry);
  if (category === "All") return projects;
  return projects.filter(project => project.category === category);
};

export const getAllProjectSlugs = (): string[] => {
  return Object.keys(projectRegistry);
};