import Privacy from '@/components/privacy/Privacy';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Sharma Interiors',
  description: 'Our privacy policy outlines how we collect, use, and protect your personal information.',
  keywords: ['privacy policy', 'data protection', 'Sharma Interiors', 'privacy rights', 'data collection'],
};

export default function PrivacyPage() {
  return <Privacy />;
}