import { StaticImageData } from "next/image";
import Image1 from '../assets/hero.jpg';

import WoodenWorks from '../assets/woodenworks/woodenworks.jpg'
import ConferenceTable from '../assets/woodenworks/conferencetable.jpg'
import WoodenFlooring from '../assets/woodenworks/woodenflooring.jpg'
import FileStorage from '../assets/woodenworks/filestorage.jpg'
import WorkstationTable from '../assets/woodenworks/workstationtable.jpg'


import PartitionWorks from '../assets/partitionworks/partitionworks.jpg'
import HiluxPartition from '../assets/partitionworks/hiluxpartition.jpg'
import GypsumPartition from '../assets/partitionworks/gypsumpartition.jpg'
import AluminiumPartition from '../assets/partitionworks/aluminiumpartition.jpg'
import GlassPartition from '../assets/partitionworks/glasspartition.jpg'
import HPLToiletPartition from '../assets/partitionworks/hpltoiletdoorpartition.jpg'

import Ceiling from '../assets/ceilling/ceiling.jpg'
import HiluxCeiling from '../assets/ceilling/hiluxcelling.jpg'
import GypsumCeiling from '../assets/ceilling/gypsumcelling.jpg'
import ArmstrongCeiling from '../assets/ceilling/armstrongceillinggrid.jpg'

import PanellingWorks from '../assets/panellingworks/panellingworks.jpg'
import AcpsheetPaneling from '../assets/panellingworks/acpsheetpanelling.jpg'


export interface ServiceItem {
  id: number;
  title: string;
  path: string;
  description: string;
  image: string | StaticImageData;
  heroBackground: StaticImageData;
  ctaBackground: string | StaticImageData;
  subItems: {
    name: string;
    path: string;
    description: string;
    image: string | StaticImageData;
  }[];
}

export const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Wooden Works',
    path: '/services/wooden-works',
    description: 'Expert craftsmanship in custom wooden furniture and installations.',
    image: Image1,
    heroBackground: WoodenWorks,
    ctaBackground: '/images/cta-background.jpg',
    subItems: [
      {
        name: 'Conference Table',
        path: '/services/wooden-works/conference-table',
        description: `Bespoke conference tables designed for professional environments.
        Bespoke conference tables designed for professional environments.
        Bespoke conference tables designed for professional environments.
        Bespoke conference tables designed for professional environments.
        Bespoke conference tables designed for professional environments.
        Bespoke conference tables designed for professional environments.
        Bespoke conference tables designed for professional environments.
        `,
        image: ConferenceTable,
      },
      {
        name: 'Wooden Flooring',
        path: '/services/wooden-works/wooden-flooring',
        description: 'Premium wooden flooring installations with lasting durability.',
        image: WoodenFlooring
      },
      {
        name: 'File Storage',
        path: '/services/wooden-works/file-storage',
        description: 'Innovative storage solutions with premium quality materials.',
        image: FileStorage
      },
      {
        name: 'Workstation Table',
        path: '/services/wooden-works/workstation-table',
        description: 'Ergonomic workstation solutions for optimal productivity.',
        image: WorkstationTable
      }
    ]
  },
  {
    id: 2,
    title: 'Partitions Works',
    path: '/services/partitions',
    description: 'Versatile partitioning solutions for optimal space utilization.',
    image: '/images/services/partitions.jpg',
    heroBackground: PartitionWorks,
    ctaBackground: '/images/cta-background.jpg',
    subItems: [
      {
        name: 'Hilux Partition',
        path: '/services/partitions/hilux',
        description: 'Modern Hilux partitions for contemporary spaces.',
        image: HiluxPartition
      },
      {
        name: 'Gypsum Partition',
        path: '/services/partitions/gypsum',
        description: 'Professional gypsum partition installations.',
        image: GypsumPartition
      },
      {
        name: 'Aluminium Partition',
        path: '/services/partitions/aluminium',
        description: 'Durable aluminium partition solutions.',
        image: AluminiumPartition
      },
      {
        name: 'Glass Partition',
        path: '/services/partitions/glass',
        description: 'Elegant glass partitions for modern offices.',
        image: GlassPartition
      },
      {
        name: 'HPL Toilet Partition and Door',
        path: '/services/partitions/hpl-toilet',
        description: 'High-quality HPL toilet partitions and doors.',
        image: HPLToiletPartition
      }
    ]
  },
  {
    id: 3,
    title: 'Ceiling Works',
    path: '/services/ceiling',
    description: 'Professional ceiling solutions for enhanced aesthetics.',
    image: '/images/services/ceiling.jpg',
    heroBackground: Ceiling,
    ctaBackground: '/images/cta-background.jpg',
    subItems: [
      {
        name: 'Hilux False Ceiling',
        path: '/services/ceiling/hilux',
        description: 'Modern Hilux false ceiling installations.',
        image: HiluxCeiling
      },
      {
        name: 'Gypsum False Ceiling',
        path: '/services/ceiling/gypsum',
        description: 'Creative gypsum false ceiling designs.',
        image: GypsumCeiling
      },
      {
        name: 'Armstrong Ceiling Grid',
        path: '/services/ceiling/armstrong',
        description: 'Premium Armstrong ceiling grid solutions.',
        image: ArmstrongCeiling
      }
    ]
  },
  {
    id: 4,
    title: 'Paneling Works',
    path: '/services/paneling',
    description: 'Expert paneling solutions for walls and surfaces.',
    image: '/images/services/paneling.jpg',
    heroBackground: PanellingWorks,
    ctaBackground: '/images/cta-background.jpg',
    subItems: [
      {
        name: 'ACP Sheet Paneling',
        path: '/services/paneling/acp-sheet',
        description: 'Professional ACP sheet paneling installations.',
        image: AcpsheetPaneling
      }
    ]
  }
];