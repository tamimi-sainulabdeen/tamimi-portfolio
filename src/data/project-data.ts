// This is just for listing pages - each project still defines its own full data
export interface ProjectListing {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: "Web" | "Mobile" | "UI/UX";
  tags: string[];
  featured?: boolean;
  confidential?: boolean; 
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

    'karmasri-portal': {
    slug: "karmasri-portal",
    title: "KARMASRI Portal",
    description: "Confidential government platform for Kerala cadre All India Services officers",
    image: "/images/karmasri_project/karmasri_banner.webp",
    category: "Web",
    tags: ["Next.js","React.js", "Tailwind CSS", "JavaScript", "TypeScript", "REST API", "Authentication"],
    featured: true,
    year: "2024",
    role: "Frontend Developer",
    confidential: true, // Add this
    primaryButton: {
      label: "Visit Website",
      url: "#"
    },
    secondaryButton: {
      label: "Know More",
      url: "/projects/karmasri-portal"
    }
  },
    'wayanad-township-portal': {
    slug: "wayanad-township-portal",
    title: "Wayanad Township Portal",
    description: "A comprehensive relief and rehabilitation platform for communities affected by the Meppadi landslide, featuring donation management and township planning.",
    image: "images/wayanad_feature_1.webp",
    category: "Web",
    tags: ["Next.js", "JavaScript", "Tailwind CSS", "TypeScript", "Google Sign-In", "Dashboards"],
    featured: true,
    year: "2024",
    role: "Frontend Developer",
    primaryButton: {
      label: "Visit Website",
      url: "https://wayanadtownship.kerala.gov.in/"
    },
    secondaryButton: {
      label: "Know More",
      url: "/projects/wayanad-township-portal"
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
    role: "UI Designer",
    primaryButton: {
      label: "Visit Website",
      url: "https://erp.sgou.ac.in/login-candidate"
    },
    secondaryButton: {
      label: "Know More",
      url: "/projects/sreenarayanaguru-open-university"
    }
  },


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