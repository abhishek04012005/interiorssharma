import React from 'react';
import { Metadata } from 'next';
import Project from '@/components/project/Project';

export const metadata: Metadata = {
  title: 'Our Projects | Sharma Interiors',
  description: 'Explore the diverse range of projects by Sharma Interiors, showcasing innovative designs and exceptional craftsmanship.',
};

export default function ProjectsPage() {
  return (
    <main>
        <Project/>
    </main>
  );
}