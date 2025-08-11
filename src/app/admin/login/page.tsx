import AdminLogin from '../../../admin/adminLogin/adminlogin';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Login - Sharma Interiors',
  description: 'Admin login page',
};

export default function LoginPage() {
  return <AdminLogin />;
}