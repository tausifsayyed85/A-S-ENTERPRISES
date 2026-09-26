export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tag: string;
}

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Heavy Structural Fabrication & Welding Bay',
    category: 'Fabrication',
    image: '/images/service_fabrication_works.jpg',
    description: 'Precision welding, girder fabrication, and assembly of heavy industrial steel components under strict safety oversight.',
    tag: 'Fabrication Works'
  },
  {
    id: 'gal-2',
    title: 'Commercial Weighbridge Installation',
    category: 'Industrial Products',
    image: '/images/product_industrial_weighbridge.jpg',
    description: 'Heavy vehicle truck platform scale with hermetically sealed digital load cells for bulk logistics and power plant yards.',
    tag: 'Weighing Systems'
  },
  {
    id: 'gal-3',
    title: 'High-Pressure Hydraulic Pumps & Industrial Valves',
    category: 'Industrial Products',
    image: '/images/product_hydraulic_valves.jpg',
    description: 'Utility steam valves, cast steel gate valves, and hydraulic power pack systems undergoing engineering pressure verification.',
    tag: 'Flow Control & Fluid Power'
  },
  {
    id: 'gal-4',
    title: 'STC 48 Rated Acoustic Steel Door Installation',
    category: 'Door Systems',
    image: '/images/product_acoustic_steel_door.jpg',
    description: 'Acoustic containment door with multi-layer perimeter silicone seals and automatic drop bottom sound barriers for plant control suites.',
    tag: 'Acoustic Solutions'
  },
  {
    id: 'gal-5',
    title: 'Automated Industrial Sliding Perimeter Gate',
    category: 'Gate Systems',
    image: '/images/product_automatic_sliding_gate.jpg',
    description: 'Automated mild steel sliding gate driven by heavy-duty rack-and-pinion motor opener with obstacle detection photocells.',
    tag: 'Gate Automation'
  },
  {
    id: 'gal-6',
    title: 'Clean Room GI Steel Door & Vision Lite',
    category: 'Door Systems',
    image: '/images/product_cleanroom_door.jpg',
    description: 'Airtight, anti-bacterial powder-coated hollow metal steel door installed in pharmaceutical and laboratory environment.',
    tag: 'Healthcare & Pharma'
  },
  {
    id: 'gal-7',
    title: 'Fire Resistant Steel Door with Panic Exit Hardware',
    category: 'Door Systems',
    image: '/images/product_fire_steel_door.jpg',
    description: 'Certified 2-hour fire-resistant entry and emergency exit hollow metal pressed steel door with rockwool 96 kg/cc core.',
    tag: 'Fire Safety'
  },
  {
    id: 'gal-8',
    title: 'Power Generation & Industrial Facility Infrastructure',
    category: 'Industrial Sites',
    image: '/images/hero_industrial_facility.jpg',
    description: 'Power plant thermal utilities and heavy industrial establishments supported with materials and engineering services.',
    tag: 'Critical Utilities'
  }
];
