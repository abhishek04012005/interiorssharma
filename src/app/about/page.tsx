import React from 'react';
import { Metadata } from 'next';
import About from '@/components/aboutus/About';

export const metadata: Metadata = {
  title: 'About Us | Sharma Interiors',
  description: 'Learn about Sharma Interiors - A leading interior design firm with over 15 years of experience in transforming spaces.',
};

export default function AboutPage() {
  return (
    <main>
        <About/>
    </main>
  );
}