import React from 'react';
import { Metadata } from 'next';
import Contact from '@/components/contact/Contact';

export const metadata: Metadata = {
  title: 'Contact Us | Sharma Interiors',
  description: 'Get in touch with Sharma Interiors for inquiries, consultations, and quotes.',
};

export default function ProjectsPage() {
  return (
    <main>
        <Contact/>
    </main>
  );
}