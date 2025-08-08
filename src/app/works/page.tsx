import React from 'react';
import { Metadata } from 'next';
import Work from '@/components/work/Work';

export const metadata: Metadata = {
  title: 'Our Works | Sharma Interiors',
  description: 'Explore the diverse range of works by Sharma Interiors, showcasing innovative designs and exceptional craftsmanship.',
};

export default function ProjectsPage() {
  return (
    <main>
        <Work/>
    </main>
  );
}