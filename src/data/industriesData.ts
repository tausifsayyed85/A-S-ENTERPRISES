export interface IndustryItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  relevantProducts: string[];
  relevantServices: string[];
  icon: string;
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: 'power-plants',
    name: 'Power Plants',
    tagline: 'High-Temperature & High-Pressure Utility Support',
    description: 'Serving thermal and hydro power generation facilities with heavy industrial materials, high-pressure valves, hydraulic systems, chillers, and specialized engineering maintenance support during continuous running and plant shutdowns.',
    relevantProducts: [
      'Industrial Valves (High-pressure steam/water)',
      'Hydraulic Pumps, Cylinders & Oil Coolers',
      'Circulating Chillers',
      'Weighbridges & Weighing Equipment',
      'Fire Resistant Doors (2-Hour Rating)'
    ],
    relevantServices: [
      'Mechanical Works & Overhauls',
      'Fabrication Works (Piping & structural)',
      'Skilled & Unskilled Manpower Supply',
      'Weighbridge Repair & Maintenance'
    ],
    icon: 'Zap'
  },
  {
    id: 'infrastructure-projects',
    name: 'Infrastructure Projects',
    tagline: 'Heavy Fabrication & Project Execution',
    description: 'Providing comprehensive material supply, heavy structural steel fabrication, civil support, logistics vehicles, and access systems for major infrastructure corridors and transport terminals.',
    relevantProducts: [
      'Automatic Sliding & Swing Gates',
      'Weighbridges & Weighing Equipment',
      'Rolling Shutters',
      'Emergency Exit Fire Doors'
    ],
    relevantServices: [
      'Fabrication Works',
      'Civil Works & Foundations',
      'Vehicle Suppliers',
      'Manpower Supply'
    ],
    icon: 'Landmark'
  },
  {
    id: 'industrial-establishments',
    name: 'Industrial Establishments',
    tagline: 'Factory Flooring & Core Plant Support',
    description: 'Equipping manufacturing units and heavy industrial factories with dependable materials, perimeter gate automation, robust fire doors, and ongoing equipment maintenance.',
    relevantProducts: [
      'Hollow Metal Pressed Steel Doors',
      'Sliding Fire Resistant Doors',
      'Industrial Valves & Hydraulics',
      'Rolling Shutters (Manual/Motorized)'
    ],
    relevantServices: [
      'Rolling Shutter Repair & Maintenance',
      'Mechanical Works',
      'Fabrication & Maintenance'
    ],
    icon: 'Factory'
  },
  {
    id: 'fabrication-engineering',
    name: 'Fabrication & Engineering',
    tagline: 'Structural Steel & Precision Assembly',
    description: 'Supporting engineering workshops and fabrication yards with skilled welders, fitters, raw materials, heavy-duty hydraulic presses, and structural components.',
    relevantProducts: [
      'Hydraulic Cylinders & Pumps',
      'HMPS Pressed Steel Frames',
      'Industrial Rolling Shutters'
    ],
    relevantServices: [
      'Custom Structural Fabrication',
      'Skilled Manpower Supply',
      'Mechanical Maintenance'
    ],
    icon: 'Cpu'
  },
  {
    id: 'hospitals-healthcare',
    name: 'Hospitals & Healthcare',
    tagline: 'Radiation Shielding & Fire Safety',
    description: 'Supplying specialized medical-grade doors including radiation shielding lead-lined doors, lead glass observation windows for CT/X-ray rooms, clean room doors, and 2-hour certified emergency fire exit doors.',
    relevantProducts: [
      'Lead Line Doors (2 mm Lead Core)',
      'Lead Glass Observation Windows (8 mm Lead Glass)',
      'Clean Room Doors (Airtight & Anti-bacterial)',
      'Emergency Exit Fire Doors with Panic Bars',
      'Acoustic Steel Doors (STC 48)'
    ],
    relevantServices: [
      'Civil & Architectural Modifications',
      'Specialized Access Hardware Fitting'
    ],
    icon: 'HeartPulse'
  },
  {
    id: 'pharmaceutical-facilities',
    name: 'Pharmaceutical Facilities',
    tagline: 'Sterile Environments & Air Pressure Containment',
    description: 'Custom solutions for sterile labs, formulation zones, and clean rooms requiring dust-proof, airtight hollow metal doors with PUF or resin honeycomb infills and flush glazed vision lites.',
    relevantProducts: [
      'Clean Room Doors with Drop Bottom Seals',
      'Airtight Perimeter Sealed Doors',
      'Fire Resistant Steel Doors',
      'Shaft Doors for Clean Utility Ducts'
    ],
    relevantServices: [
      'Airtight Partition Framing Support',
      'Preventive Maintenance on Seals & Closers'
    ],
    icon: 'FlaskConical'
  },
  {
    id: 'commercial-buildings',
    name: 'Commercial Buildings',
    tagline: 'Architectural Safety & Riser Management',
    description: 'Providing commercial office towers, corporate parks, and shopping complexes with certified fire doors, shaft doors for HVAC risers, acoustic conference doors, and automated entrance gates.',
    relevantProducts: [
      'Fire Resistant Doors (Entry & Emergency Exit)',
      'Shaft Doors (HVAC & Electrical Risers)',
      'Acoustic Steel Doors (STC 48)',
      'Automatic Sliding & Swing Gates'
    ],
    relevantServices: [
      'Door Hardware Overhaul & Routine Audits',
      'Rolling Shutter Servicing'
    ],
    icon: 'Building'
  },
  {
    id: 'warehouses-logistics',
    name: 'Warehouses & Logistics',
    tagline: 'High-Volume Loading & Fire Compartmentalization',
    description: 'Equipping distribution centers, storage godowns, and cargo hubs with heavy-duty sliding fire doors for compartment isolation, automated access gates, and weighbridge scales.',
    relevantProducts: [
      'Sliding Fire Resistant Doors (Up to 120 Mins)',
      'Rolling Shutters (Motorized & Gear Type)',
      'Weighbridges & Weighing Equipment',
      'Automatic Sliding Perimeter Gates'
    ],
    relevantServices: [
      'Rolling Shutter Repair & Rapid Breakdown Care',
      'Weighbridge Calibration & Deck Repair'
    ],
    icon: 'Warehouse'
  },
  {
    id: 'educational-institutions',
    name: 'Educational Institutions',
    tagline: 'Auditorium Acoustics & Safe Egress',
    description: 'Supplying university campuses, engineering colleges, and schools with certified emergency exit fire doors, auditorium acoustic doors, and perimeter automated gates.',
    relevantProducts: [
      'Emergency Exit Fire Doors with Panic Bars',
      'Acoustic Steel Doors (Auditoriums & Studios)',
      'Automatic Sliding Campus Gates',
      'Fire Resistant Windows'
    ],
    relevantServices: [
      'Gate Automation Maintenance',
      'Civil & Structural Repair'
    ],
    icon: 'GraduationCap'
  },
  {
    id: 'data-centers',
    name: 'Data Centers',
    tagline: 'Server Room Security & Compartmentalization',
    description: 'Delivering high-integrity fire-resistant barriers, acoustic containment doors, and sealed riser shaft doors designed to protect high-density server halls and electrical switchrooms.',
    relevantProducts: [
      '2-Hour Fire Resistant Steel Doors',
      'Sliding Fire Doors for Battery Rooms',
      'Shaft Doors for Cable Risers',
      'Fire Resistant Windows'
    ],
    relevantServices: [
      'Precision Mechanical & Partition Support'
    ],
    icon: 'Server'
  },
  {
    id: 'hotels-hospitality',
    name: 'Hotels & Hospitality',
    tagline: 'Guest Comfort & Architectural Safety',
    description: 'Providing hotels and resorts with aesthetic hollow metal steel doors, acoustic partition doors for conference halls, and fire safety systems meeting hospitality codes.',
    relevantProducts: [
      'Hollow Metal Pressed Steel Doors',
      'Acoustic Steel Doors (STC 48)',
      'Shaft Doors for Utility Risers',
      'Fire Resistant Doors'
    ],
    relevantServices: [
      'Periodic Maintenance of Access Hardware'
    ],
    icon: 'Hotel'
  },
  {
    id: 'residential-projects',
    name: 'Residential Projects',
    tagline: 'High-Rise Fire Safety & Automated Gates',
    description: 'Supplying apartment complexes and gated residential communities with fire-rated staircase exit doors, utility shaft covers, and automated perimeter sliding/swing gates.',
    relevantProducts: [
      'Fire Resistant Doors for Stairwell Enclosures',
      'Automatic Sliding & Swing Gates',
      'Shaft Doors for Electrical & Plumbing Risers',
      'Hollow Metal Steel Doors'
    ],
    relevantServices: [
      'Gate Motor Installation & Support',
      'Rolling Shutter Maintenance'
    ],
    icon: 'Home'
  }
];
