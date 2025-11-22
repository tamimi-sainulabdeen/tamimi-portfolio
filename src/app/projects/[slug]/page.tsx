import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import { getAllProjectSlugs, getProjectListing } from '@/data/project-data';

// Map slugs to their dynamic imports
const caseStudyImports = {
  'e-commerce-platform': () => import('@/components/case-studies/e-commerce-platform'),
  'sreenarayanaguru-open-university': () => import('@/components/case-studies/sreenarayanaguru-open-university')
} as const;

// Generate static params for all projects
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each project
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectListing(slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} - Case Study`,
    description: project.description,
  };
}

export default async function ProjectCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Get the dynamic import function for this slug
  const importFunction = caseStudyImports[slug as keyof typeof caseStudyImports];

  if (!importFunction) {
    notFound();
  }

  // Use dynamic import with the mapped function
  const CaseStudyComponent = dynamic(importFunction, {
    loading: () => <CaseStudySkeleton />,
  });

  return <CaseStudyComponent />;
}

function CaseStudySkeleton() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="h-16 bg-gray-200 rounded mb-6"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-20"></div>
        </div>
      </div>
    </div>
  );
}