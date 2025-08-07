import WoodenWorks from '@/components/pages/services/wooden-works/WoodenWorks';
import { services } from '@/data/services';

export const metadata = {
  title: 'Wooden Works | Sharma Interiors',
  description: 'Expert craftsmanship in custom wooden furniture and installations.',
};

export default function WoodenWorksPage() {
  const woodenWorksService = services.find(service => service.id === 2);

  if (!woodenWorksService) {
    throw new Error('Wooden Works service not found');
  }

  return <WoodenWorks service={woodenWorksService}  />;
}