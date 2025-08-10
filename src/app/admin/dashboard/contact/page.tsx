import { Metadata } from 'next';
import Dashboard from '../../../../admin/ContactUsDashboard/contactusdashboard';

export const metadata: Metadata = {
  title: 'Contact Dashboard - Sharma Interiors',
  description: 'Contact management dashboard',
};

export default function DashboardPage() {
  return (
    <main>
      <Dashboard />
    </main>
  );
}