
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
        description:
          "Our bespoke conference tables are crafted to elevate professional environments, combining timeless design with modern functionality. Whether for boardrooms, client meetings, or collaborative spaces, each table is engineered to reflect your brand's identity while offering comfort, durability, and seamless integration with technology.",
        shortDescription:
          "Transform your meeting space with our custom conference tables designed for impact and collaboration.",
        image: ConferenceTable,
        features: [
          {
            icon: "quality",
            title: "Premium Materials",
            description:
              "Constructed using high-grade hardwoods, engineered wood, and precision finishes for a luxurious feel and lasting strength.",
          },
          {
            icon: "customize",
            title: "Custom Design",
            description:
              "Tailored dimensions, shapes, and finishes to suit your space, branding, and functional needs—including cable management and tech ports.",
          },
          {
            icon: "tech",
            title: "Tech Integration",
            description:
              "Optional built-in power sockets, USB hubs, and wireless charging pads for modern meeting requirements.",
          },
        ],
        specifications: {
          material: "Premium hardwood and engineered wood with metal reinforcements",
          finish: "Matte, gloss, or textured laminates; veneer options available",
          durability: "Designed for daily use in high-traffic corporate settings",
          maintenance: "Scratch-resistant surfaces; easy to clean with mild cleaners",
        },
        benefits: [
          "Enhances the professionalism of your meeting space",
          "Supports better collaboration and team engagement",
          "Customizable to match brand aesthetics",
          "Durable construction ensures long-term value",
          "Integrates seamlessly with modern office tech",
        ],
        process: {
          title: "Installation Process",
          steps: [
            "Initial consultation to understand space and needs",
            "Design proposal with 3D visualization",
            "Material and finish selection",
            "Precision manufacturing and quality checks",
            "On-site delivery and installation",
          ],
        },
      },
      {
        name: "Wooden Flooring",
        path: "/services/wooden-works/wooden-flooring",
        description:
          "Our premium wooden flooring solutions bring warmth, elegance, and durability to any space. Ideal for offices, retail, and residential interiors, each installation is customized to suit your aesthetic preferences and functional demands, offering a timeless look with modern performance.",
        shortDescription:
          "Elevate your interiors with durable, elegant wooden flooring tailored to your space.",
        image: WoodenFlooring,
        features: [
          {
            icon: "eco",
            title: "Eco-Friendly Options",
            description: "Sustainably sourced wood and low-VOC finishes available",
          },
          {
            icon: "durability",
            title: "Long-Lasting",
            description: "Engineered for longevity with minimal maintenance",
          },
          {
            icon: "finish",
            title: "Premium Finish",
            description: "UV-cured coatings for enhanced protection and shine",
          },
        ],
        specifications: {
          material: "Engineered wood, solid hardwood, and hybrid composite options",
          finish: "UV-cured coating with anti-scratch and anti-fade properties",
          durability: "Resistant to heavy foot traffic, moisture, and wear",
          maintenance: "Regular sweeping and occasional polishing; easy upkeep",
        },
        benefits: [
          "Adds a warm, natural aesthetic to interiors",
          "Improves acoustic insulation and reduces noise",
          "Durable under daily use and foot traffic",
          "Easy to clean and maintain over time",
          "Increases property value and visual appeal",
        ],
        process: {
          title: "Installation Process",
          steps: [
            "Site inspection and measurement",
            "Material selection and finish approval",
            "Surface preparation and leveling",
            "Precision cutting and laying",
            "Final polish and client walkthrough",
          ],
        },
      },
      {
        name: "File Storage",
        path: "/services/wooden-works/file-storage",
        description:
          "Our custom wooden file storage units are designed to optimize workspace organization while enhancing visual appeal. From compact cabinets to full-wall storage systems, each unit is built for efficiency, security, and style—perfect for offices, studios, and home workspaces.",
        shortDescription:
          "Organize your workspace with stylish, secure, and customizable file storage solutions.",
        image: FileStorage,
        features: [
          {
            icon: "storage",
            title: "Optimized Storage",
            description:
              "Configurable shelves, drawers, and compartments to suit files, stationery, and tech accessories.",
          },
          {
            icon: "lock",
            title: "Secure",
            description:
              "Optional locking systems, cable management slots, and fire-resistant materials for added safety.",
          },
          {
            icon: "modular",
            title: "Modular Design",
            description:
              "Expandable units that can grow with your team or space requirements.",
          },
        ],
        specifications: {
          material: "Engineered plywood with high-pressure laminate or natural veneer",
          finish: "Matte, textured, or high-gloss finishes with edge protection",
          durability: "Scratch, moisture, and impact resistant surfaces",
          maintenance: "Wipe with soft cloth; avoid harsh chemicals or abrasives",
        },
        benefits: [
          "Keeps workspace clutter-free and organized",
          "Improves document security and accessibility",
          "Customizable to match interior themes",
          "Durable and low-maintenance construction",
          "Supports efficient workflow and space utilization",
        ],
        process: {
          title: "Installation Process",
          steps: [
            "Requirement analysis and space planning",
            "Design mockups and customization options",
            "Material selection and finish confirmation",
            "Manufacturing and quality testing",
            "Delivery and professional installation",
          ],
        },
      },
      {
        name: "Workstation Table",
        path: "/services/wooden-works/workstation-table",
        description:
          "Our ergonomic workstation tables are designed to support productivity, comfort, and collaboration. Whether for individual desks or team pods, each table is crafted with precision to meet the demands of modern work environments—balancing form, function, and flexibility.",
        shortDescription:
          "Boost productivity with ergonomic, modular workstation tables built for modern teams.",
        image: WorkstationTable,
        features: [
          {
            icon: "ergonomic",
            title: "Ergonomic Design",
            description:
              "Comfortable working heights, rounded edges, and cable cutouts for a clutter-free experience.",
          },
          {
            icon: "modular",
            title: "Modular Layouts",
            description:
              "Expandable configurations for teams, including shared desks and privacy panels.",
          },
          {
            icon: "tech",
            title: "Tech-Friendly",
            description:
              "Built-in cable trays, monitor stands, and optional power modules for seamless tech integration.",
          },
        ],
        specifications: {
          material: "Engineered wood with edge-banding and metal frame options",
          finish: "Laminate surfaces with PVC edging; anti-glare and anti-scratch",
          durability: "Built for daily office use with reinforced joints",
          maintenance: "Dry wipe with microfiber cloth; use mild cleaner for stains",
        },
        benefits: [
          "Boosts employee comfort and productivity",
          "Adapts to various team sizes and workflows",
          "Minimizes visual clutter with smart cable management",
          "Durable and easy to maintain",
          "Enhances the overall look and feel of the workspace",
        ],
        process: {
          title: "Installation Process",
          steps: [
            "Workspace analysis and layout planning",
            "Design customization and approval",
            "Material and accessory selection",
            "Manufacturing and modular assembly",
            "On-site setup and ergonomic testing",
          ],
        },
      },
    ],

  },
  {
    id: 2,
    title: "Partitions Works",
    path: "/services/partitions",
    description:
      "Our partitioning solutions are designed to optimize space, enhance privacy, and elevate aesthetics across commercial, residential, and institutional environments. From sleek glass dividers to robust HPL toilet partitions, we offer tailored installations that balance form and function.",
    image: PartitionWorks,
    heroBackground: PartitionWorks,
    ctaBackground: "/images/cta-background.jpg",
    subItems: [
      {
        name: "Hilux Partition",
        path: "/services/partitions/hilux",
        description:
          "Hilux partitions offer a modern, fire-resistant solution for interior zoning. Ideal for offices, clinics, and educational spaces, these partitions combine strength with a clean aesthetic.",
        shortDescription:
          "Fire-resistant Hilux partitions for safe, stylish space division.",
        image: HiluxPartition,
        features: [
          {
            icon: "fireproof",
            title: "Fire Resistance",
            description: "Made from calcium silicate boards for enhanced safety.",
          },
          {
            icon: "acoustic",
            title: "Sound Insulation",
            description: "Reduces noise transfer between zones.",
          },
          {
            icon: "durability",
            title: "Long-Lasting",
            description: "Resistant to wear, moisture, and impact.",
          },
        ],
        specifications: {
          material: "High-quality Hilux calcium silicate panels",
          finish: "Smooth, paint-ready surface",
          durability: "Fire-resistant, termite-proof, and moisture-tolerant",
          maintenance: "Easy to clean; supports repainting and refinishing",
        },
        benefits: [
          "Improves fire safety in enclosed areas",
          "Supports acoustic privacy",
          "Durable and low-maintenance",
          "Ideal for institutional and commercial use",
        ],
        process: {
          title: "Installation Process",
          steps: [
            "Site measurement and layout planning",
            "Framework setup with metal studs",
            "Panel mounting and alignment",
            "Finishing and edge sealing",
            "Final inspection and client handover",
          ],
        },
      },
      {
        name: "Gypsum Partition",
        path: "/services/partitions/gypsum",
        description:
          "Gypsum partitions are lightweight, cost-effective, and ideal for quick interior transformations. They offer smooth finishes and excellent fire resistance, making them perfect for offices, homes, and retail spaces.",
        shortDescription:
          "Lightweight gypsum partitions for fast, elegant space division.",
        image: GypsumPartition,
        features: [
          {
            icon: "lightweight",
            title: "Lightweight Build",
            description: "Easy to install and modify without structural load.",
          },
          {
            icon: "finish",
            title: "Smooth Finish",
            description: "Ready for paint, wallpaper, or texture coats.",
          },
          {
            icon: "fireproof",
            title: "Fire Retardant",
            description: "Offers basic fire resistance for enclosed areas.",
          },
        ],
        specifications: {
          material: "Premium gypsum boards with metal framing",
          finish: "Smooth surface; compatible with paint and wallpaper",
          durability: "Moderate wear resistance; suitable for dry zones",
          maintenance: "Low maintenance; occasional patching if damaged",
        },
        benefits: [
          "Quick and cost-effective installation",
          "Visually clean and adaptable surface",
          "Ideal for temporary or semi-permanent partitions",
          "Supports fire safety and acoustic control",
        ],
        process: {
          title: "Installation Process",
          steps: [
            "Space planning and design approval",
            "Metal framework setup",
            "Board fixing and joint treatment",
            "Surface finishing and painting",
            "Final quality check",
          ],
        },
      },
      {
        name: "Aluminium Partition",
        path: "/services/partitions/aluminium",
        description:
          "Aluminium partitions offer a sleek, modern look with high structural integrity. Ideal for corporate offices and industrial setups, they combine metal framing with glass or board infill for versatile zoning.",
        shortDescription:
          "Durable aluminium partitions for sleek, professional interiors.",
        image: AluminiumPartition,
        features: [
          {
            icon: "durability",
            title: "High Strength",
            description: "Aluminium frames offer excellent structural stability.",
          },
          {
            icon: "modular",
            title: "Modular Design",
            description: "Easily reconfigurable for evolving workspace needs.",
          },
          {
            icon: "finish",
            title: "Premium Finish",
            description: "Anodized or powder-coated for long-lasting aesthetics.",
          },
        ],
        specifications: {
          material: "Aluminium frames with glass or board infill",
          finish: "Anodized or powder-coated in multiple shades",
          durability: "Corrosion-resistant and structurally stable",
          maintenance: "Minimal upkeep; wipe clean with soft cloth",
        },
        benefits: [
          "Modern and professional appearance",
          "Long-term durability with minimal maintenance",
          "Customizable for open or closed layouts",
          "Ideal for high-traffic commercial zones",
        ],
        process: {
          title: "Installation Process",
          steps: [
            "Design and layout planning",
            "Frame fabrication and finish selection",
            "On-site assembly and infill placement",
            "Edge sealing and hardware fitting",
            "Final walkthrough and adjustments",
          ],
        },
      },
      {
        name: "Glass Partition",
        path: "/services/partitions/glass",
        description:
          "Glass partitions create open, vibrant environments while maintaining acoustic separation. Perfect for modern offices, studios, and showrooms, they offer transparency, elegance, and flexibility.",
        shortDescription:
          "Elegant glass partitions for open, collaborative workspaces.",
        image: GlassPartition,
        features: [
          {
            icon: "transparency",
            title: "Visual Openness",
            description: "Maintains line of sight while defining zones.",
          },
          {
            icon: "acoustic",
            title: "Sound Control",
            description: "Tempered glass options reduce noise transmission.",
          },
          {
            icon: "customize",
            title: "Custom Finishes",
            description: "Clear, frosted, tinted, or printed glass available.",
          },
        ],
        specifications: {
          material: "Tempered or laminated safety glass",
          finish: "Clear, frosted, tinted, or graphic film options",
          durability: "Impact-resistant and scratch-proof",
          maintenance: "Clean with glass cleaner and microfiber cloth",
        },
        benefits: [
          "Enhances natural light and openness",
          "Supports acoustic privacy",
          "Modern and minimal aesthetic",
          "Customizable to brand or design themes",
        ],
        process: {
          title: "Installation Process",
          steps: [
            "Site survey and design finalization",
            "Glass cutting and edge polishing",
            "Frame or channel installation",
            "Glass mounting and sealing",
            "Final cleaning and safety check",
          ],
        },
      },
      {
        name: "HPL Toilet Partition",
        path: "/services/partitions/hpl-toilet",
        description:
          "HPL toilet partitions are built for high-moisture environments like public restrooms, gyms, and institutions. They offer vandal resistance, hygiene, and long-term durability with minimal upkeep.",
        shortDescription:
          "Robust HPL toilet partitions for hygienic, high-traffic washrooms.",
        image: HPLToiletPartition,
        features: [
          {
            icon: "hygiene",
            title: "Hygienic Surface",
            description: "Non-porous and easy to sanitize.",
          },
          {
            icon: "durability",
            title: "Vandal Resistant",
            description: "Scratch-proof and impact-resistant HPL panels.",
          },
          {
            icon: "moisture",
            title: "Moisture Proof",
            description: "Ideal for wet zones and humid environments.",
          },
        ],
        specifications: {
          material: "High-pressure laminate (HPL) with stainless steel hardware",
          finish: "Textured or smooth laminate in multiple colors",
          durability: "Moisture, stain, and impact resistant",
          maintenance: "Sanitize with non-abrasive cleaner; wipe dry",
        },
        benefits: [
          "Maintains hygiene in public washrooms",
          "Resistant to damage and graffiti",
          "Quick to install and easy to clean",
          "Customizable for branding or color themes",
        ],
        process: {
          title: "Installation Process",
          steps: [
            "Restroom layout planning and measurements",
            "Panel cutting and hardware selection",
            "Mounting with stainless steel brackets",
            "Door fitting and lock installation",
            "Final inspection and cleaning",
          ],
        },
      },
    ],
  },

  {
    id: 3,
    title: "Ceiling Works",
    path: "/services/ceilings",
    description:
      "Our ceiling solutions are crafted to elevate interiors with style, acoustic comfort, and structural integrity. Whether you're designing a modern workspace, a cozy home, or a commercial venue, our range of false ceilings and grid systems offer tailored aesthetics and performance.",
    image: Ceiling,
    heroBackground: Ceiling,
    ctaBackground: "/images/cta-background.jpg",
    subItems: [
      {
        name: "Hilux False Ceiling",
        path: "/services/ceilings/hilux",
        description:
          "Hilux false ceilings offer a fire-resistant, sleek solution for modern interiors. Ideal for offices, clinics, and educational spaces, they combine safety with a refined finish.",
        shortDescription:
          "Fire-resistant Hilux ceilings for safe, stylish overhead design.",
        image: HiluxCeiling,
        features: [
          {
            icon: "fireproof",
            title: "Fire Resistance",
            description: "Calcium silicate panels ensure enhanced safety.",
          },
          {
            icon: "finish",
            title: "Refined Finish",
            description: "Smooth surface ready for paint or texture.",
          },
          {
            icon: "durability",
            title: "Long-Lasting",
            description: "Moisture and termite resistant for extended life.",
          },
        ],
        specifications: {
          material: "Premium Hilux calcium silicate panels",
          finish: "Contemporary matte or textured options",
          durability: "Fire-resistant, moisture-tolerant, and termite-proof",
          maintenance: "Minimal upkeep; supports repainting and cleaning",
        },
        benefits: [
          "Improves fire safety in enclosed interiors",
          "Supports clean, modern aesthetics",
          "Durable and low-maintenance",
          "Ideal for institutional and commercial ceilings",
        ],
        process: {
          title: "Installation Process",
          steps: [
            "Ceiling layout planning and measurements",
            "Metal grid framework setup",
            "Panel mounting and alignment",
            "Joint finishing and surface treatment",
            "Final inspection and cleanup",
          ],
        },
      },
      {
        name: "Gypsum False Ceiling",
        path: "/services/ceilings/gypsum",
        description:
          "Gypsum false ceilings offer versatile design possibilities with smooth finishes and acoustic benefits. Perfect for homes, offices, and retail spaces, they bring elegance and functionality together.",
        shortDescription:
          "Elegant gypsum ceilings for seamless, creative interiors.",
        image: GypsumCeiling,
        features: [
          {
            icon: "design",
            title: "Design Flexibility",
            description: "Supports curves, recesses, and layered profiles.",
          },
          {
            icon: "acoustic",
            title: "Sound Absorption",
            description: "Reduces echo and improves room acoustics.",
          },
          {
            icon: "finish",
            title: "Smooth Finish",
            description: "Seamless surface ready for paint or wallpaper.",
          },
        ],
        specifications: {
          material: "High-grade gypsum boards with metal framing",
          finish: "Smooth, seamless surface",
          durability: "Durable in dry zones; supports lighting integration",
          maintenance: "Easy to clean; occasional patching if damaged",
        },
        benefits: [
          "Visually elegant and customizable",
          "Improves acoustic comfort",
          "Supports ambient and recessed lighting",
          "Quick installation with minimal disruption",
        ],
        process: {
          title: "Installation Process",
          steps: [
            "Design finalization and lighting plan",
            "Framework setup with metal channels",
            "Board fixing and joint treatment",
            "Surface finishing and painting",
            "Final quality check and client handover",
          ],
        },
      },
      {
        name: "Armstrong Ceiling Grid",
        path: "/services/ceilings/armstrong-grid",
        description:
          "Armstrong ceiling grids offer modular, acoustic-friendly solutions for commercial and institutional spaces. With easy tile replacement and clean aesthetics, they’re ideal for high-traffic environments.",
        shortDescription:
          "Modular Armstrong grids for clean, acoustic ceiling layouts.",
        image: ArmstrongCeiling,
        features: [
          {
            icon: "acoustic",
            title: "Acoustic Comfort",
            description: "Reduces ambient noise with sound-absorbing tiles.",
          },
          {
            icon: "modular",
            title: "Modular System",
            description: "Tiles can be replaced individually without disruption.",
          },
          {
            icon: "maintenance",
            title: "Low Maintenance",
            description: "Dust-resistant and easy to clean or replace.",
          },
        ],
        specifications: {
          material: "Metal T-grid framework with acoustic ceiling tiles",
          finish: "Powder-coated grid; textured or plain tiles",
          durability: "Long-life tiles with replaceable modules",
          maintenance: "Spot replace tiles; vacuum or dust regularly",
        },
        benefits: [
          "Ideal for offices, hospitals, and institutions",
          "Supports lighting and HVAC integration",
          "Clean, professional appearance",
          "Quick access to overhead utilities",
        ],
        process: {
          title: "Installation Process",
          steps: [
            "Ceiling grid layout planning",
            "T-grid framework installation",
            "Tile placement and alignment",
            "Lighting and HVAC integration",
            "Final inspection and adjustments",
          ],
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
        description:
          "Our ACP (Aluminium Composite Panel) sheet paneling service offers a sleek, modern solution for exterior and interior cladding. Known for its lightweight structure and high durability, ACP paneling enhances the architectural appeal of commercial and residential buildings. With a variety of finishes and colors, it provides a contemporary look while ensuring long-term performance in diverse weather conditions.",
        shortDescription:
          "Upgrade your facade with durable, stylish ACP sheet paneling designed for modern architecture.",
        image: AcpsheetPaneling,
        features: [
          {
            icon: "quality",
            title: "Superior Quality",
            description:
              "We use premium-grade ACP sheets with high tensile strength and excellent surface finish for lasting performance.",
          },
          {
            icon: "durability",
            title: "Weather Resistant",
            description:
              "Engineered to withstand heat, rain, and UV exposure—ideal for Indian climate conditions.",
          },
          {
            icon: "lightweight",
            title: "Lightweight Structure",
            description:
              "Easy to transport and install without compromising on strength or rigidity.",
          },
          {
            icon: "design",
            title: "Design Versatility",
            description:
              "Available in metallic, matte, wood, and stone textures to suit varied architectural styles.",
          },
        ],
        specifications: {
          material: "High-quality aluminium composite panels with polyethylene core",
          finish: "Glossy, matte, brushed, and textured finishes available",
          durability: "Weather-resistant, corrosion-proof, and impact-resistant",
          maintenance: "Requires minimal upkeep—just occasional cleaning with mild detergent",
        },
        benefits: [
          "Modern and professional exterior appearance",
          "Quick and hassle-free installation process",
          "Low maintenance and long-lasting durability",
          "Cost-effective alternative to traditional cladding",
          "Improves thermal insulation and energy efficiency",
        ],
        process: {
          title: "Installation Process",
          steps: [
            "Site inspection and measurement",
            "Design consultation and finish selection",
            "Surface preparation and framework setup",
            "Precision cutting and panel placement",
            "Final sealing and quality assurance",
          ],
        },
      },
    ]

  },
];

export type { SubItem, Feature, Specification };