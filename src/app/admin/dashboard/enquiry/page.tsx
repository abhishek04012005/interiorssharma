import { Metadata } from 'next';
import Dashboard from '../../../../admin/QuotationDashboard/quotationdashboard';

export const metadata: Metadata = {
  title: 'Quotation Dashboard - Sharma Interiors',
  description: 'Quotation management dashboard',
};

export default function DashboardPage() {
  return (
    <main>
      <Dashboard />
    </main>
  );
}