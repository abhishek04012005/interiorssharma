import { services } from '@/data/services';
import Subservices from '@/components/pages/services/wooden-works/subservices/Subservices';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Cabinets & Storage Solutions | Sharma Interiors',
  description: 'Premium custom cabinet solutions and innovative storage designs for your space.',
};

export default function CabinetsPage() {
  // Find wooden works service
  const woodenWorks = services.find(service => service.id === 2);
  
  if (!woodenWorks) {
    notFound();
  }

  // Find cabinets subservice
  const cabinetsService = woodenWorks.subItems.find(
    item => item.path === '/services/partitions/gypsum'
  );

  if (!cabinetsService) {
    notFound();
  }

  return (
    <Subservices
      parentService={woodenWorks}
      subItem={{
        ...cabinetsService,
        image:
          typeof cabinetsService.image === 'string'
            ? cabinetsService.image
            : cabinetsService.image.src,
      }}
    />
  );
}