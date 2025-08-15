
import { StaticImageData } from "next/image";

import Image1 from "../assets/hero.jpg";

import WoodenWorks from "../assets/woodenworks/woodenworks.jpg";
import ConferenceTable from "../assets/woodenworks/conferencetable.jpg";
import WoodenFlooring from "../assets/woodenworks/woodenflooring.jpg";
import FileStorage from "../assets/woodenworks/filestorage.jpg";
import WorkstationTable from "../assets/woodenworks/workstationtable.jpg";

import PartitionWorks from "../assets/partitionworks/partitionworks.jpg";
import HiluxPartition from "../assets/partitionworks/hiluxpartition.jpg";
import GypsumPartition from "../assets/partitionworks/gypsumpartition.jpg";
import AluminiumPartition from "../assets/partitionworks/aluminiumpartition.jpg";
import GlassPartition from "../assets/partitionworks/glasspartition.jpg";
import HPLToiletPartition from "../assets/partitionworks/hpltoiletdoorpartition.jpg";

import Ceiling from "../assets/ceilling/ceiling.jpg";
import HiluxCeiling from "../assets/ceilling/hiluxcelling.jpg";
import GypsumCeiling from "../assets/ceilling/gypsumcelling.jpg";
import ArmstrongCeiling from "../assets/ceilling/armstrongceillinggrid.jpg";

import PanellingWorks from "../assets/panellingworks/panellingworks.jpg";
import AcpsheetPaneling from "../assets/panellingworks/acpsheetpanelling.jpg";


interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Specification {
  material: string;
  finish: string;
  durability: string;
  maintenance: string;
}

interface SubItem {
  name: string;
  path: string;
  description: string;
  shortDescription?: string;
  image: string | StaticImageData;
  features?: Feature[];
  specifications?: Specification;
  benefits?: string[];
  process?: {
    title: string;
    steps: string[];
  };
}

export interface ServiceItem {
  id: number;
  title: string;
  path: string;
  description: string;
  image: string | StaticImageData;
  heroBackground: StaticImageData;
  ctaBackground: string | StaticImageData;
  subItems: SubItem[];
}


export const services: ServiceItem[] = [
  {
    id: 1,
    title: "Wooden Works",
    path: "/services/wooden-works",
    description: "Expert craftsmanship in custom wooden furniture and installations.",
    image: Image1,
    heroBackground: WoodenWorks,
    ctaBackground: "/images/cta-background.jpg",
    subItems: [
      {
        name: "Conference Table",
        path: "/services/wooden-works/conference-table",
        description: "Bespoke conference tables designed for professional environments.",
        shortDescription: "Transform your meeting space with our custom conference tables.",
        image: ConferenceTable,
        features: [
          { icon: "quality", title: "Premium Materials", description: "Made from high-quality wood and finishes" },
          { icon: "customize", title: "Custom Design", description: "Tailored to your specific requirements" },
        ],
        specifications: {
          material: "Premium hardwood and engineered wood",
          finish: "Multiple finish options available",
          durability: "Built for long-term use",
          maintenance: "Easy to clean and maintain",
        },
        benefits: ["Enhanced meeting space aesthetics", "Improved collaboration", "Professional appearance", "Durable construction"],
        process: {
          title: "Installation Process",
          steps: ["Initial consultation", "Design approval", "Material selection", "Manufacturing", "Installation"],
        },
      },
      {
        name: "Wooden Flooring",
        path: "/services/wooden-works/wooden-flooring",
        description: "Premium wooden flooring installations with lasting durability.",
        image: WoodenFlooring,
        specifications: {
          material: "Engineered wood and hardwood options",
          finish: "UV-cured coating",
          durability: "High traffic resistance",
          maintenance: "Regular cleaning and periodic maintenance",
        },
        benefits: ["Warm, elegant look", "Noise dampening", "Easy to maintain"],
      },
      {
        name: "File Storage",
        path: "/services/wooden-works/file-storage",
        description: "Custom wooden file storage units for organized workspaces.",
        image: FileStorage,
        specifications: {
          material: "Engineered plywood with laminate/veneer",
          finish: "Matte or high-gloss",
          durability: "Scratch and moisture resistant",
          maintenance: "Wipe with soft cloth, avoid abrasives",
        },
        features: [
          { icon: "storage", title: "Optimized Storage", description: "Configurable shelves and drawers" },
          { icon: "lock", title: "Secure", description: "Optional locks and cable management" },
        ],
      },
      {
        name: "Workstation Table",
        path: "/services/wooden-works/workstation-table",
        description: "Ergonomic workstation tables tailored to your team’s workflow.",
        image: WorkstationTable,
        specifications: {
          material: "Engineered wood + edge-banding",
          finish: "Laminate with PVC edging",
          durability: "Daily office-use grade",
          maintenance: "Dry wipe, mild cleaner",
        },
        features: [
          { icon: "ergonomic", title: "Ergonomics", description: "Comfortable heights and cable cutouts" },
          { icon: "modular", title: "Modular", description: "Expandable for teams" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Partitions Works",
    path: "/services/partitions",
    description: "Versatile partitioning solutions for optimal space utilization.",
    image: PartitionWorks,
    heroBackground: PartitionWorks,
    ctaBackground: "/images/cta-background.jpg",
    subItems: [
      {
        name: "Hilux Partition",
        path: "/services/partitions/hilux",
        description: "Modern Hilux partitions for contemporary spaces.",
        image: HiluxPartition,
        specifications: {
          material: "High-quality Hilux panels",
          finish: "Smooth, modern finish",
          durability: "Resistant to wear and tear",
          maintenance: "Easy to clean and maintain",
        },
      },
      {
        name: "Gypsum Partition",
        path: "/services/partitions/gypsum",
        description: "Professional gypsum partition installations.",
        image: GypsumPartition,
        specifications: {
          material: "Premium gypsum boards",
          finish: "Smooth surface finish",
          durability: "Long-lasting performance",
          maintenance: "Low maintenance required",
        },
      },
      {
        name: "Aluminium Partition",
        path: "/services/partitions/aluminium",
        description: "Sleek aluminium-framed partitions for durable zoning.",
        image: AluminiumPartition,
        specifications: {
          material: "Aluminium frames + glass/board infill",
          finish: "Anodized/powder-coated",
          durability: "High structural stability",
          maintenance: "Low upkeep; wipe clean",
        },
      },
      {
        name: "Glass Partition",
        path: "/services/partitions/glass",
        description: "Transparent glass partitions for open, vibrant spaces.",
        image: GlassPartition,
        specifications: {
          material: "Tempered/laminated glass",
          finish: "Clear/frosted/tinted options",
          durability: "Impact and scratch resistant",
          maintenance: "Glass cleaner; microfiber wipe",
        },
      },
      {
        name: "HPL Toilet Partition",
        path: "/services/partitions/hpl-toilet",
        description: "HPL toilet partitions with moisture and vandal resistance.",
        image: HPLToiletPartition,
        specifications: {
          material: "High-pressure laminate (HPL)",
          finish: "Textured or smooth",
          durability: "Moisture and stain resistant",
          maintenance: "Sanitize with non-abrasive cleaner",
        },
      },
    ],
  },
  {
    id: 3,
    title: "Ceiling Works",
    path: "/services/ceilings",
    description: "Professional ceiling solutions for enhanced aesthetics.",
    image: Ceiling,
    heroBackground: Ceiling,
    ctaBackground: "/images/cta-background.jpg",
    subItems: [
      {
        name: "Hilux False Ceiling",
        path: "/services/ceilings/hilux",
        description: "Modern Hilux false ceiling installations.",
        image: HiluxCeiling,
        specifications: {
          material: "Premium Hilux panels",
          finish: "Contemporary finish options",
          durability: "Built to last",
          maintenance: "Minimal maintenance needed",
        },
      },
      {
        name: "Gypsum False Ceiling",
        path: "/services/ceilings/gypsum",
        description: "Creative gypsum false ceiling designs.",
        image: GypsumCeiling,
        specifications: {
          material: "High-grade gypsum boards",
          finish: "Smooth, seamless finish",
          durability: "Durable construction",
          maintenance: "Easy maintenance",
        },
      },
      {
        name: "Armstrong Ceiling Grid",
        path: "/services/ceilings/armstrong-grid",
        description: "Acoustic Armstrong ceiling grids for clean, modular layouts.",
        image: ArmstrongCeiling,
        specifications: {
          material: "Metal T-grids + acoustic tiles",
          finish: "Powder-coated / textured tiles",
          durability: "Long-life, replaceable tiles",
          maintenance: "Spot replace; dust/vacuum tiles",
        },
      },
    ],
  },
  {
    id: 4,
    title: "Paneling Works",
    path: "/services/paneling",
    description: "Expert paneling solutions for walls and surfaces.",
    image: PanellingWorks,
    heroBackground: PanellingWorks,
    ctaBackground: "/images/cta-background.jpg",
    subItems: [
      {
        name: "ACP Sheet Paneling",
        path: "/services/paneling/acp-sheet",
        description: "Professional ACP sheet paneling installations.",
        image: AcpsheetPaneling,
        specifications: {
          material: "High-quality ACP sheets",
          finish: "Premium finish options",
          durability: "Weather-resistant",
          maintenance: "Low maintenance required",
        },
        features: [
          { icon: "quality", title: "Superior Quality", description: "Premium ACP materials used" },
          { icon: "durability", title: "Weather Resistant", description: "Built to withstand various weather conditions" },
        ],
        benefits: ["Modern facade look", "Quick installation", "Cost-effective upkeep"],
      },
    ],
  },
];

export type { SubItem, Feature, Specification };