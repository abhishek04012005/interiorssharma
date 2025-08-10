import Tos from '@/components/termsofservice/Tos';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Sharma Interiors',
  description: 'Terms and conditions for using Sharma Interiors services. Read our service agreement, payment terms, and policies.',
};

export default function TermsOfServicePage() {
  return (
    <main>
      <Tos/>
    </main>
  );
}