export interface ProductSpecification {
  label: string;
  value: string;
}

export interface GateMotorModel {
  model: string;
  capacity: string;
  powerSupply?: string;
  motorSpeed?: string;
  motorOutput: string;
  remoteRange?: string;
  controlMode?: string;
  outputTorque?: string;
  limitSwitch?: string;
  noise?: string;
  dutyCycle?: string;
  operatingSpeed: string;
  tempRange: string;
  batteryBackup?: string;
  maxGateWidth?: string;
}

export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  category: 'Doors' | 'Gates' | 'Windows' | 'Industrial Products';
  tagline: string;
  shortDescription: string;
  overview: string;
  keyFeatures: string[];
  specifications: ProductSpecification[];
  applications: string[];
  hardware?: string[];
  visionLiteOptions?: string[];
  colorShades?: { code: string; name: string; hex: string }[];
  image: string;
  drawingImage?: string;
  fireRating?: string;
  soundRating?: string;
  leadEquivalent?: string;
  gateMotorModels?: GateMotorModel[];
  additionalNotes?: string;
}

export const COLOR_PALETTE = [
  { code: 'RAL3020', name: 'Traffic Red', hex: '#CC1100' },
  { code: 'RAL7011', name: 'Iron Grey', hex: '#52595D' },
  { code: 'RAL7037', name: 'Dusty Grey', hex: '#7D8285' },
  { code: 'RAL7040', name: 'Window Grey', hex: '#989EA4' },
  { code: 'RAL7047', name: 'Telegrey 4', hex: '#CFD0D2' },
  { code: 'RAL9001', name: 'Cream', hex: '#EFEBD9' },
  { code: 'RAL9016', name: 'Traffic White', hex: '#F7F9FB' },
  { code: 'RAL5002', name: 'Ultramarine Blue', hex: '#1E2460' },
  { code: 'RAL5015', name: 'Sky Blue', hex: '#2271B3' },
  { code: 'RAL5012', name: 'Light Blue', hex: '#3B83BD' }
];

export const PRODUCTS_DATA: ProductItem[] = [
  // 1. Hollow Metal Pressed Steel Doors
  {
    id: 'hollow-metal-steel-doors',
    name: 'Hollow Metal Pressed Steel Doors',
    slug: 'hollow-metal-pressed-steel-doors',
    category: 'Doors',
    tagline: 'Strength. Security. Long-Lasting.',
    shortDescription: 'Fabricated from high-grade Galvanized Iron (GI) sheets engineered for superior robustness and high-traffic environments.',
    overview: 'Our Hollow Metal Pressed Steel Doors are engineered for exceptional performance in demanding environments. Fabricated from high-quality galvanized iron (GI) sheets, these doors offer superior robustness, corrosion resistance, and long-term durability, making them an ideal choice for high-traffic and high-security areas.',
    keyFeatures: [
      'Constructed from Galvanized Iron Sheets – Ensures strength and long-lasting structural integrity.',
      'Pressed Steel Design – Provides a clean, modern look with enhanced rigidity.',
      'Corrosion Resistant Finish – Suitable for both indoor and semi-exposed installations.',
      'Customizable Sizes & Finishes – Available to meet your project’s exact specifications.'
    ],
    specifications: [
      { label: 'Door Shutter MOC', value: '0.80 ~ 1.0 mm GI Sheet' },
      { label: 'Shutter Thickness', value: '46 mm' },
      { label: 'Infill Insulation', value: 'Resin bonded honey-comb core' },
      { label: 'Pad Plates', value: '3 mm predrilled and tapped' },
      { label: 'Door Frame Profiles', value: '55x57, 80x57, 100x57, 125x57 or 143x57' },
      { label: 'Rabbets', value: 'Single rabbet or double rabbet' },
      { label: 'Door Frame MOC', value: '1.2 mm GI sheets' },
      { label: 'Finish', value: 'Pure polyester powder coating finish' }
    ],
    applications: [
      'Industrial Buildings',
      'Commercial Projects',
      'Hospitals & Healthcare Facilities',
      'Hotels & Hospitality Sectors'
    ],
    hardware: [
      'S.S. BB Hinges',
      'Flush Bolt',
      'Mortice Deadlock',
      'Door Handle',
      'Vision Lite',
      'Louvers',
      'Door Closer',
      'Drop Bottom Seal',
      'Mortice Sash Lock & Lever Handle'
    ],
    visionLiteOptions: [
      'No View Glass',
      'Rectangular View Glass (200 x 300 mm)',
      'Square View Glass (300 x 300 mm)',
      'Narrow View Glass (150 x 600 mm)'
    ],
    colorShades: [
      { code: 'RAL8017', name: 'Chocolate Brown', hex: '#45322E' },
      { code: 'RAL7011', name: 'Iron Grey', hex: '#52595D' },
      { code: 'RAL7037', name: 'Dusty Grey', hex: '#7D8285' },
      { code: 'RAL7040', name: 'Window Grey', hex: '#989EA4' },
      { code: 'RAL7047', name: 'Telegrey 4', hex: '#CFD0D2' },
      { code: 'RAL9001', name: 'Cream', hex: '#EFEBD9' },
      { code: 'RAL9016', name: 'Traffic White', hex: '#F7F9FB' }
    ],
    image: '/images/product_fire_steel_door.jpg'
  },

  // 2. Fire Resistant Doors (Entry)
  {
    id: 'fire-resistant-steel-doors',
    name: 'Fire Resistant Steel Doors',
    slug: 'fire-resistant-doors',
    category: 'Doors',
    tagline: 'Reliable Protection. Swift Evacuation.',
    fireRating: 'Up to 2 Hours Tested & Certified',
    shortDescription: 'Constructed with 1.2 mm GI sheet and 96 kg/cc Rockwool infill to offer up to 2-hour certified protection in fire-sensitive environments.',
    overview: 'Our Fire-Resistant Steel Doors are designed to offer reliable protection and durability in fire-sensitive environments. Constructed from high-grade steel, these doors provide a robust barrier against fire and heat, helping to contain fire spread and protect lives and property with certified fire ratings.',
    keyFeatures: [
      'Fire Resistance up to 2 Hours – Tested and certified for performance in high-temperature conditions.',
      'High-Strength Steel Construction – Withstands warping, cracking, and other fire-related damage.',
      'Customizable Finish & Sizes – Available in a variety of powder-coated finishes and configurations.',
      'Thermal & Acoustic Insulation Options – High-density Rockwool insulation for enhanced safety.'
    ],
    specifications: [
      { label: 'Fire Rating', value: 'Up to 2 Hours (120 Minutes)' },
      { label: 'Door Shutter MOC', value: '1.2 mm GI sheet' },
      { label: 'Shutter Thickness', value: '46 mm' },
      { label: 'Infill Insulation', value: 'Rockwool 96 kg / cc' },
      { label: 'Pad Plates', value: '3 mm predrilled and tapped' },
      { label: 'Door Frame Profiles', value: '100x57, 125x57 or 143x57' },
      { label: 'Rabbets', value: 'Single rabbet or double rabbet' },
      { label: 'Door Frame MOC', value: '1.5 mm GI sheets' },
      { label: 'Finish', value: 'Pure polyester powder coating finish' }
    ],
    applications: [
      'Office Buildings',
      'Shopping Malls',
      'Warehouses',
      'Hospitals & Medical Facilities',
      'Schools & Universities',
      'Residential Apartments'
    ],
    hardware: [
      'S.S. BB Hinges',
      'Mortice Deadlock',
      'Flush Bolt',
      'Door Handle',
      'Vision Lite',
      'Intumescent Seal',
      'Door Closer'
    ],
    visionLiteOptions: [
      'No View Glass',
      'Standard View Glass (200 x 300 mm)',
      'Square View Glass (300 x 300 mm)',
      'Narrow View Glass (150 x 600 mm)'
    ],
    colorShades: [
      { code: 'RAL3020', name: 'Traffic Red', hex: '#CC1100' },
      { code: 'RAL7011', name: 'Iron Grey', hex: '#52595D' },
      { code: 'RAL7037', name: 'Dusty Grey', hex: '#7D8285' },
      { code: 'RAL7040', name: 'Window Grey', hex: '#989EA4' },
      { code: 'RAL7047', name: 'Telegrey 4', hex: '#CFD0D2' },
      { code: 'RAL9001', name: 'Cream', hex: '#EFEBD9' },
      { code: 'RAL9016', name: 'Traffic White', hex: '#F7F9FB' }
    ],
    image: '/images/product_fire_steel_door.jpg'
  },

  // 3. Emergency Exit Fire Doors
  {
    id: 'emergency-exit-fire-doors',
    name: 'Emergency Exit Fire Doors',
    slug: 'emergency-exit-fire-doors',
    category: 'Doors',
    tagline: 'Reliable Protection. Swift Evacuation.',
    fireRating: '2-Hour Fire Resistance Rating',
    shortDescription: 'Engineered with heavy-duty panic bars and door closers to ensure swift, fail-safe egress in critical evacuation events.',
    overview: 'Our Emergency Exit Fire Door is engineered to provide maximum safety, durability, and functionality in critical situations. Made with high-quality hollow metal steel, this door is your first line of defence in emergencies, certified for up to 2 hours of fire resistance.',
    keyFeatures: [
      '2-Hour Fire Resistance Rating – Certified protection against fire spread for up to 2 hours.',
      'Durable Hollow Metal Construction – Built to withstand heat, pressure, and frequent usage.',
      'Advanced Exit Hardware: Panic Bars for rapid egress under distress.',
      'Trim Locks for secure access control from the exterior.',
      'Heavy-Duty Door Closers to ensure smooth, reliable self-closing.',
      'Optional View Panels – Tempered fire-rated glass for visibility without compromising safety.'
    ],
    specifications: [
      { label: 'Fire Rating', value: '2 Hours Certified' },
      { label: 'Door Shutter MOC', value: '1.2 mm GI sheet' },
      { label: 'Shutter Thickness', value: '46 mm' },
      { label: 'Infill Insulation', value: 'Rockwool 96 kg / cc' },
      { label: 'Pad Plates', value: '3 mm predrilled and tapped' },
      { label: 'Door Frame Profiles', value: '100x57, 125x57 or 143x57' },
      { label: 'Rabbets', value: 'Single rabbet or double rabbet' },
      { label: 'Door Frame MOC', value: '1.5 mm GI sheets' },
      { label: 'Finish', value: 'Pure polyester powder coating finish' }
    ],
    applications: [
      'Commercial Buildings',
      'Hospitals & Healthcare Facilities',
      'Educational Institutions',
      'Industrial Plants',
      'High-Rise Residential Complexes'
    ],
    hardware: [
      'Panic Exit Devices (Panic Bar)',
      'Trim Lock',
      'S.S. BB Hinges',
      'Heavy-Duty Door Closer',
      'Intumescent Seal',
      'Vision Lite'
    ],
    visionLiteOptions: [
      'No View Glass',
      'Standard View Glass (200 x 300 mm)',
      'Square View Glass (300 x 300 mm)',
      'Narrow View Glass (150 x 600 mm)'
    ],
    colorShades: [
      { code: 'RAL3020', name: 'Safety Red', hex: '#CC1100' },
      { code: 'RAL7011', name: 'Iron Grey', hex: '#52595D' },
      { code: 'RAL7037', name: 'Dusty Grey', hex: '#7D8285' },
      { code: 'RAL7040', name: 'Window Grey', hex: '#989EA4' },
      { code: 'RAL7047', name: 'Telegrey 4', hex: '#CFD0D2' },
      { code: 'RAL9001', name: 'Cream', hex: '#EFEBD9' },
      { code: 'RAL9016', name: 'Traffic White', hex: '#F7F9FB' }
    ],
    image: '/images/product_fire_steel_door.jpg'
  },

  // 4. Sliding Fire Resistant Doors
  {
    id: 'sliding-fire-resistant-doors',
    name: 'Sliding Fire Resistant Doors',
    slug: 'sliding-fire-resistant-doors',
    category: 'Doors',
    tagline: 'Protecting Spaces with Precision.',
    fireRating: 'Up to 120 Minutes Fire Resistance',
    shortDescription: 'Space-saving sliding configuration for wide openings, tested and certified for fire ratings up to 120 minutes with fail-safe closure.',
    overview: 'HMPS Sliding Fire-Resistant Doors are specially designed for areas that demand high-performance fire protection without compromising on space efficiency or operational ease. Ideal for industrial, commercial, and institutional settings, these doors offer both safety and convenience where every second counts.',
    keyFeatures: [
      'Certified Fire Resistance: Tested and certified for fire ratings of up to 120 minutes.',
      'Space-Saving Design: Sliding mechanism allows for efficient use of space, perfect for wide openings.',
      'Heavy-Duty Construction: Manufactured with high-grade HMPS for maximum durability.',
      'Smooth Sliding System: Precision tracks and rollers ensure effortless and quiet operation.',
      'Automatic & Manual Options: Available with motorized or manual systems based on application needs.',
      'Fail-Safe Mechanism: Integrated counterweight or fusible link systems ensure door closure during fire.'
    ],
    specifications: [
      { label: 'Fire Rating', value: 'Up to 120 Minutes' },
      { label: 'Door Shutter MOC', value: '1.2 mm GI sheet' },
      { label: 'Shutter Thickness', value: '46 mm' },
      { label: 'Infill Insulation', value: 'Rockwool 96 kg / cc' },
      { label: 'Borderframe', value: '50 x 50 x 3 mm C type, all four sides' },
      { label: 'Top Rail', value: '3 mm C type track at top' },
      { label: 'Wall Mounting', value: 'Zinc coated MS brackets & spacers' },
      { label: 'Top Cover', value: '0.8 mm GI sheet' },
      { label: 'Side Covers', value: '1.2 mm GI sheet, C profile' }
    ],
    applications: [
      'Warehouses & Industrial Plants',
      'Hospitals & Healthcare Facilities',
      'Commercial Complexes & Malls',
      'Airports & Transport Terminals',
      'Data Centers',
      'Basement Car Parks',
      'High-Risk Zones Requiring Compartmentalization'
    ],
    hardware: [
      'Top Guide Track',
      'Track Holder Bracket',
      'Hanger Roller Assembly',
      'Door Bottom Guide',
      'Floor Lock',
      'Recessed Door Handle',
      'Vision Lite'
    ],
    image: '/images/product_fire_steel_door.jpg'
  },

  // 5. Clean Room Doors
  {
    id: 'clean-room-doors',
    name: 'Clean Room Doors',
    slug: 'clean-room-doors',
    category: 'Doors',
    tagline: 'Precision-Built for Hygienic Environments',
    shortDescription: 'Airtight, dust-proof, and anti-bacterial GI steel doors engineered for strict environmental control in pharmaceutical and laboratory zones.',
    overview: 'Our Clean Room Doors, crafted from high-quality galvanized iron (GI) sheets, are specially designed to meet the rigorous standards of sterile and controlled environments. These hollow metal steel doors offer airtight sealing, anti-bacterial properties, and dust-proof performance—ensuring uncompromised hygiene and safety.',
    keyFeatures: [
      'Clean Room Compatible – Designed to maintain strict environmental controls and air pressure differential.',
      'Anti-Corrosive Construction – Long-lasting performance in sterile and moisture-prone areas.',
      'Dust-Proof & Airtight Design – Prevents contamination and supports controlled air pressure zones.',
      'Anti-Bacterial Surface Finish – Helps reduce microbial growth and maintain clinical hygiene.'
    ],
    specifications: [
      { label: 'Door Shutter MOC', value: '0.80 ~ 1.0 mm GI sheet' },
      { label: 'Shutter Thickness', value: '46 mm' },
      { label: 'Infill Options', value: 'Resin bonded honey-comb core or Polyurethane Foam (PUF)' },
      { label: 'Pad Plates', value: '3 mm predrilled and taped' },
      { label: 'Door Frame Profiles', value: '55x57, 80x57, 100x57' },
      { label: 'Rabbets', value: 'Single rabbet' },
      { label: 'Door Frame MOC', value: '1.2 mm GI sheets' },
      { label: 'Finish', value: 'Pure polyester powder coating finish' }
    ],
    applications: [
      'Pharmaceutical Facilities',
      'Hospitals & Healthcare Units',
      'Laboratories & Research Centers',
      'Food Processing Plants',
      'Dairy and Beverage Industry'
    ],
    hardware: [
      'S.S. BB Hinges',
      'Mortice Deadlock',
      'Door Handle',
      'Door Closer',
      'Flush Bolt',
      'Drop Bottom Seal',
      'Perimeter Silicone/Neoprene Seal',
      'Mortice Sash Lock & Lever Handle'
    ],
    visionLiteOptions: [
      'Standard View Glass (300 x 600 DGU Double Glazed Flush)',
      'Half Glazed 150 Shutters'
    ],
    colorShades: [
      { code: 'RAL5002', name: 'Cleanroom Blue', hex: '#1E2460' },
      { code: 'RAL5015', name: 'Sky Blue', hex: '#2271B3' },
      { code: 'RAL5012', name: 'Light Blue', hex: '#3B83BD' },
      { code: 'RAL7037', name: 'Dusty Grey', hex: '#7D8285' },
      { code: 'RAL7040', name: 'Window Grey', hex: '#989EA4' },
      { code: 'RAL7047', name: 'Telegrey 4', hex: '#CFD0D2' },
      { code: 'RAL9001', name: 'Cream', hex: '#EFEBD9' },
      { code: 'RAL9016', name: 'Pure White', hex: '#F7F9FB' }
    ],
    image: '/images/product_cleanroom_door.jpg'
  },

  // 6. Lead Line Doors
  {
    id: 'lead-line-doors',
    name: 'Lead Line Doors',
    slug: 'lead-line-doors',
    category: 'Doors',
    tagline: 'Radiation Protection. Seamless Safety.',
    leadEquivalent: '2 mm Lead Core Shielding',
    shortDescription: 'Internally lined with high-quality lead sheet (typically 2 mm) for superior protection against X-ray and diagnostic radiation leakage.',
    overview: 'Our Lead-Lined Doors are specifically engineered for medical environments where radiation shielding is critical. These doors are internally lined with high-quality lead sheets, offering superior protection against radiation leakage while maintaining a sleek, hygienic exterior suitable for hospital settings.',
    keyFeatures: [
      'Integrated Lead Core – Available in various thicknesses (typically 2 mm) as per shielding requirements.',
      'Seamless Finish – Wrapped in powder-coated or stainless-steel sheeting for easy cleaning and sterile environments.',
      'Radiation Shielding Compliance – Designed to meet national and international X-ray shielding standards.',
      'Optional Lead-Lined Vision Panels – Equipped with X-ray-safe lead glass for clear visibility without compromising protection.',
      'Durable Hardware Options – Compatible with heavy-duty hinges, lead-lined door frames, and automatic door closers.'
    ],
    specifications: [
      { label: 'Lead Core Thickness', value: 'Typically 2 mm (Customizable as per room shielding calculation)' },
      { label: 'Door Shutter MOC', value: '0.80 ~ 1.0 mm GI sheet' },
      { label: 'Shutter Thickness', value: '46 mm' },
      { label: 'Infill Insulation', value: 'Rock wool insulation + Lead sheet barrier' },
      { label: 'Pad Plates', value: '3 mm predrilled and taped' },
      { label: 'Door Frame Profiles', value: '55x57, 80x57, 100x57 or 125' },
      { label: 'Rabbets', value: 'Single rabbet, "Z" profile' },
      { label: 'Door Frame MOC', value: '1.2 mm GI sheets with internal lead lining' },
      { label: 'Finish', value: 'Pure polyester powder coating finish' }
    ],
    applications: [
      'Hospitals and Diagnostic Imaging',
      'X-Ray Rooms & CT Scan Suites',
      'Radiology & Nuclear Medicine Departments',
      'Dental Clinics & Fluoroscopy Suites',
      'Radiation Research Laboratories'
    ],
    hardware: [
      'Heavy Duty S.S. BB Hinges',
      'Mortice Deadlock & Handle',
      'Door Closer',
      'Flush Bolt',
      'Drop Bottom Seal',
      'Perimeter Lead Overlap Seal',
      'Lead-Lined Vision Lite Frame'
    ],
    image: '/images/product_cleanroom_door.jpg'
  },

  // 7. Lead Glass Observation Windows
  {
    id: 'lead-glass-window',
    name: 'Lead Glass Observation Windows',
    slug: 'lead-glass-window',
    category: 'Windows',
    tagline: 'Radiation Protection with Clear Visibility',
    leadEquivalent: '8 mm Lead Glass = 2 mm Lead Equivalent',
    shortDescription: '8 mm thick specialized radiation-shielding lead glass encased in HMPS pressed steel frame for diagnostic imaging control rooms.',
    overview: 'Our Lead Glass Observation Window is specially designed to provide effective radiation protection in diagnostic imaging environments such as CT scan and X-ray rooms. The window features an 8 mm thick lead glass panel, equivalent to 2 mm lead shielding, ensuring operator safety without compromising visual clarity.',
    keyFeatures: [
      'High-Quality Lead Glass: 8 mm thick, providing radiation-shielding equivalent to 2 mm lead.',
      'Clear Optical Visibility: Provides visual clarity for monitoring clinical procedures during scanning.',
      'HMPS Frame: Robust, powder-coated pressed steel frame for long-lasting structural performance.',
      'Easy Integration: Designed for seamless installation into lead-lined masonry or drywall partitions.',
      'Radiation Safety Compliant: Meets standard diagnostic room protection requirements.',
      'Custom Sizes Available: Tailored dimensions available for specific control room openings.'
    ],
    specifications: [
      { label: 'Glass Specification', value: '8 mm Lead Glass' },
      { label: 'Shielding Equivalence', value: 'Equivalent to 2 mm Pb (Lead)' },
      { label: 'Frame Construction', value: 'HMPS (Hollow Metal Pressed Steel) Frame' },
      { label: 'Frame MOC', value: '1.5 mm GI sheet with lead lining overlap' },
      { label: 'Finish', value: 'Pure polyester powder coating finish' },
      { label: 'Sizing', value: 'Custom dimensions fabricated to architectural requirement' }
    ],
    applications: [
      'Hospitals and Diagnostic Imaging',
      'CT Scan Control Rooms',
      'X-Ray & Fluoroscopy Control Booths',
      'MRI & Radiology Observation Suites',
      'Nuclear Medicine Departments',
      'Research & Scientific Radiation Labs'
    ],
    image: '/images/product_cleanroom_door.jpg'
  },

  // 8. Shaft Doors
  {
    id: 'shaft-doors',
    name: 'Shaft Doors',
    slug: 'shaft-doors',
    category: 'Doors',
    tagline: 'Reliable Protection. Swift Evacuation.',
    shortDescription: 'Precision-engineered pressed steel access doors for HVAC, electrical risers, plumbing shafts, and utility service points.',
    overview: 'At HMPS, safety and durability are critical in high-rise and commercial buildings. Our shaft doors are engineered with precision to provide reliable access to service shafts while maintaining the highest safety and fire resistance standards. Whether designing new infrastructure or retrofitting an existing one, Shaft Doors are the trusted solution.',
    keyFeatures: [
      'Robust Construction: Made from high-quality galvanized or stainless steel for long-lasting performance.',
      'Fire-Rated Options: Available with certified fire resistance ratings as per project requirements.',
      'Custom Sizes: Manufactured to suit various shaft openings and riser dimensions.',
      'Smooth Operation: Equipped with high-performance hinges and locking mechanisms.',
      'Aesthetic Finishes: Powder-coated finishes to blend seamlessly with interior corridors.',
      'Safety Locks: Concealed and LN key locking systems to prevent unauthorized access.',
      'Weather & Corrosion Resistant: Ideal for both indoor risers and service utility applications.'
    ],
    specifications: [
      { label: 'Door Shutter MOC', value: '0.8 / 1.2 mm GI sheet' },
      { label: 'Shutter Thickness', value: '46 mm' },
      { label: 'Infill Insulation', value: 'Honeycomb core or Rockwool 96 kg / cc' },
      { label: 'Pad Plates', value: '3 mm predrilled and taped' },
      { label: 'Door Frame Profiles', value: '80x57, 100x57, 125x57' },
      { label: 'Rabbets', value: 'Single rabbet' },
      { label: 'Door Frame MOC', value: '1.2 or 1.5 mm GI sheets' },
      { label: 'Finish', value: 'Pure polyester powder coating finish' }
    ],
    applications: [
      'HVAC Shafts & Duct Access',
      'Electrical & Plumbing Risers',
      'Firefighting Shafts & Hydrant Access',
      'Maintenance & Service Shafts',
      'High-Rise Residential & Commercial Buildings',
      'Hospitals, Malls, Airports, and Industrial Facilities'
    ],
    hardware: [
      'S.S. BB Hinges',
      'LN Key Lock / Triangular Key Access',
      'Concealed Door Handle',
      'Flush Bolt',
      'Optional Intumescent Seal',
      'Optional Louvers for ventilation',
      'Optional View Glass'
    ],
    image: '/images/product_fire_steel_door.jpg'
  },

  // 9. Acoustic Steel Doors
  {
    id: 'acoustic-steel-doors',
    name: 'Acoustic Steel Doors',
    slug: 'acoustic-steel-doors',
    category: 'Doors',
    tagline: 'Superior Soundproofing. Unmatched Durability.',
    soundRating: 'STC 48 Rated',
    shortDescription: 'STC 48 Rated sound insulation steel doors with multi-layer perimeter acoustic seals and automatic drop bottom seals.',
    overview: 'In today’s demanding environments where noise control and privacy are paramount, our Acoustic Steel Doors (STC 48 Rated) offer the perfect solution. Designed with advanced sound insulation technology, these doors combine high acoustic performance with robust security and aesthetic appeal. Tested and rated to ASTM standards for acoustic performance.',
    keyFeatures: [
      'STC 48 Sound Rating: Engineered for high-level sound insulation, effectively blocking noise transmission between rooms.',
      'Premium Acoustic Seals: Multi-layer perimeter seals and drop bottom seal ensure optimal sound attenuation and air tightness.',
      'Durable Steel Construction: Heavy-duty steel sheets with reinforced core designed for long-lasting structural integrity.',
      'Powder Coated Finish: Durable, corrosion-resistant, and available in a range of colors to match interior design.',
      'Integrated Dead Lock & Handle Sets: Secure locking system with robust hardware for safety and ease of use.',
      'Acoustic Vision Panel Options: Acoustically rated vision panels available for visibility without compromising soundproofing.'
    ],
    specifications: [
      { label: 'Sound Rating', value: 'STC 48 (ASTM Standard Tested)' },
      { label: 'Door Shutter MOC', value: '0.80 ~ 1.0 mm GI sheet' },
      { label: 'Shutter Thickness', value: '46 mm' },
      { label: 'Infill Insulation', value: 'Multi-layered proprietary acoustic material' },
      { label: 'Pad Plates', value: '3 mm predrilled and taped' },
      { label: 'Door Frame Profiles', value: '80x57, 100x57, 125x57' },
      { label: 'Rabbets', value: 'Single rabbet' },
      { label: 'Door Frame MOC', value: '1.2 mm GI sheets' },
      { label: 'Finish', value: 'Pure polyester powder coating finish' }
    ],
    applications: [
      'Corporate Offices & Executive Conference Rooms',
      'Theaters, Auditoriums, and Performance Venues',
      'Hospitals, Audiology & Diagnostic Laboratories',
      'Hotels & Premium Commercial Establishments',
      'Industrial Plant Control Rooms & Machine Enclosures'
    ],
    hardware: [
      'Heavy-Duty S.S. BB Hinges',
      'Drop Bottom Acoustic Seal',
      'Multi-Layer Perimeter Seal',
      'Mortice Sash Lock & Lever Handle',
      'Heavy-Duty Door Closer',
      'Acoustic Vision Lite Glass'
    ],
    image: '/images/product_acoustic_steel_door.jpg'
  },

  // 10. Automatic Sliding Gates
  {
    id: 'automatic-sliding-gates',
    name: 'Automatic Sliding Gates',
    slug: 'automatic-sliding-gates',
    category: 'Gates',
    tagline: 'Heavy-Duty Automation for Perimeter Security',
    shortDescription: 'Fabricated from high-strength MS tubes with automated rack drive systems supporting gate weights from 600 kg up to 5000 kg.',
    overview: 'Our Automatic Sliding Gate is engineered using high-quality MS (Mild Steel) tubes, ensuring exceptional strength, durability, and longevity. Coated with anti-corrosive primer and finished with high-grade paint, it is suitable for all weather conditions. Driven by industrial-grade motor kits with safety photocells, flashing lamps, and remote control access.',
    keyFeatures: [
      'Heavy-Duty Construction: Fabricated with precision from MS tubes for unmatched strength and stability.',
      'Smooth Sliding Mechanism: Heavy-duty bottom wheels (3", 4", 5") and precision ground tracks ensure quiet operation.',
      'Dual Operation Modes: Remote controlled access + manual push switch / emergency key release.',
      'Safety Sensors: Infrared photocell sensors trigger automatic reverse upon obstacle detection.',
      'All-Weather Finish: Anti-corrosive primer and spray finish withstands sun, heavy rain, and dust.',
      'Access Integration: Fully compatible with RFID cards, biometric readers, and wireless numeric keypads.'
    ],
    specifications: [
      { label: 'Gate Construction', value: 'High-strength MS (Mild Steel) hollow tubes & ISMC sections' },
      { label: 'Gate Weight Capacity', value: '600 kg up to 5000 kg (Model specific)' },
      { label: 'Drive Mechanism', value: 'Galvanized steel rack & pinion motor opener' },
      { label: 'Power Supply', value: '220V / 380V, 50 Hz' },
      { label: 'Speed of Operation', value: '12 ~ 13 m/min' },
      { label: 'Safety Systems', value: 'Infrared photocell obstacle sensor + flashing warning light' },
      { label: 'Duty Cycle', value: 'S2 15 min to S2 25 min' },
      { label: 'Operating Temp', value: '(-)20°C to (+)50°C' }
    ],
    applications: [
      'Industrial Plants & Warehouses',
      'Power Plants & Utility Substations',
      'Commercial Complexes & IT Parks',
      'Educational Institutions & Campuses',
      'Hospitals & Healthcare Facilities',
      'Residential Societies & Gated Communities'
    ],
    hardware: [
      'Sliding Gate Opener Motor',
      'Galvanized Steel Rack',
      'Magnetic Limit Switch',
      'Infrared Photocell Sensors',
      'Flashing Warning Lamp',
      'Push Button Switch',
      'Bottom Wheel (3", 4", 5")',
      'Nylon Guide Roller (2", 3")',
      'Wall / Floor Mounted Gate Post'
    ],
    gateMotorModels: [
      {
        model: 'SD1006',
        capacity: '600 kg',
        powerSupply: '220V, 50Hz',
        motorSpeed: '55 RPM',
        motorOutput: '200 W',
        remoteRange: '30 m',
        controlMode: 'Single button',
        outputTorque: '16 N·m',
        limitSwitch: 'Magnetic',
        noise: '< 58 dB',
        dutyCycle: 'S2, 15 Min',
        operatingSpeed: '13 m/min',
        tempRange: '(-)20°C to (+)50°C'
      },
      {
        model: 'SD1010',
        capacity: '1000 kg',
        powerSupply: '220V, 50Hz',
        motorSpeed: '50 RPM',
        motorOutput: '350 W',
        remoteRange: '30 m',
        controlMode: 'Single button',
        outputTorque: '25 N·m',
        limitSwitch: 'Magnetic',
        noise: '< 58 dB',
        dutyCycle: 'S2, 15 Min',
        operatingSpeed: '12 m/min',
        tempRange: '(-)20°C to (+)50°C'
      },
      {
        model: 'SD1015',
        capacity: '1500 kg',
        powerSupply: '220V, 50Hz',
        motorSpeed: '42 RPM',
        motorOutput: '500 W',
        remoteRange: '30 m',
        controlMode: 'Single button',
        outputTorque: '32 N·m',
        limitSwitch: 'Magnetic',
        noise: '< 60 dB',
        dutyCycle: 'S2, 15 Min',
        operatingSpeed: '12 m/min',
        tempRange: '(-)20°C to (+)50°C'
      },
      {
        model: 'SD1020',
        capacity: '2000 kg',
        powerSupply: '380V, 50Hz',
        motorSpeed: '42 RPM',
        motorOutput: '750 W',
        remoteRange: '30 m',
        controlMode: 'Three buttons',
        outputTorque: '45 N·m',
        limitSwitch: 'Magnetic',
        noise: '< 60 dB',
        dutyCycle: 'S2, 15 Min',
        operatingSpeed: '12 m/min',
        tempRange: '(-)20°C to (+)50°C'
      },
      {
        model: 'SD1030',
        capacity: '3000 kg',
        powerSupply: '380V, 50Hz',
        motorSpeed: '52 RPM',
        motorOutput: '1000 W',
        remoteRange: '30 m',
        controlMode: 'Three buttons',
        outputTorque: '55 N·m',
        limitSwitch: 'Magnetic',
        noise: '< 60 dB',
        dutyCycle: 'S2, 15 Min',
        operatingSpeed: '12 m/min',
        tempRange: '(-)20°C to (+)50°C'
      },
      {
        model: 'SD1050',
        capacity: '5000 kg',
        powerSupply: '380V, 50Hz',
        motorSpeed: '42 RPM',
        motorOutput: '1000 W',
        remoteRange: '30 m',
        controlMode: 'Three buttons',
        outputTorque: '85 N·m',
        limitSwitch: 'Magnetic',
        noise: '< 60 dB',
        dutyCycle: 'S2, 25 Min',
        operatingSpeed: '12 m/min',
        tempRange: '(-)20°C to (+)50°C'
      }
    ],
    image: '/images/product_automatic_sliding_gate.jpg'
  },

  // 11. Automatic Swing Gates
  {
    id: 'automatic-swing-gates',
    name: 'Automatic Swing Gates',
    slug: 'automatic-swing-gates',
    category: 'Gates',
    tagline: 'Precision Swing Automation with Heavy Load Endurance',
    shortDescription: 'Fabricated from MS square tubes and ISMC sections with electromechanical swing actuators supporting up to 450 kg and 6.0 m per wing.',
    overview: 'Custom-engineered Swing Type Main Gates combining durability, security, and architectural presence. Fitted with precision ball bearing pivots or heavy-duty hinges for seamless, low-friction operation. Powered by safe low-voltage DC motors with integrated battery backup and anti-crush safety clutches.',
    keyFeatures: [
      'Robust Construction: Fabricated using MS square tubes, ISMC sections, and MS sheets for superior rigidity.',
      'Smooth Operation: Fitted with ball bearing pivots or ball bearing hinges for effortless low-friction swing.',
      'Manual & Automatic Modes: Fully automated push-button/remote action plus manual mechanical key release.',
      'Safety Clutch: Hi-AMP auto-stop obstacle detection prevents impact damage.',
      'Rechargeable Battery Backup: Provides 42 hours / 30~50 cycle gate operation during utility power failure.',
      'Weather-Resistant Housing: IP54 protected drive enclosures designed for harsh outdoor environments.'
    ],
    specifications: [
      { label: 'Construction MOC', value: 'MS square tubes, ISMC structural sections & MS sheet' },
      { label: 'Wing Weight Capacity', value: '150 kg up to 450 kg per wing' },
      { label: 'Wing Width Capacity', value: '3.0 m up to 6.0 m per wing' },
      { label: 'Operating Voltage', value: 'DC 18V / DC 24V (Safe low voltage)' },
      { label: 'Opening Speed', value: '90° in 10 ~ 12 seconds' },
      { label: 'Manual Operation', value: 'Special key mechanical release' },
      { label: 'Safety Protection', value: 'Hi-AMP auto-stop obstacle sensor' },
      { label: 'Environmental Temp', value: '0°C to +50°C' }
    ],
    applications: [
      'Industrial Plants & Warehouses',
      'Schools & Educational Institutions',
      'Hospitals & Healthcare Facilities',
      'Commercial Buildings & Corporate Entrances',
      'Residential Societies & Private Farmhouses'
    ],
    hardware: [
      'Dual Electromechanical Swing Actuators',
      'Central Control Box with Logic Card',
      'Ball Bearing Pivot Set',
      'Ball Bearing Hinge Set',
      'Post Light & Flashing Warning Lamp',
      'Manual Override Release Key',
      'Access Control Card / Biometric Interface'
    ],
    gateMotorModels: [
      {
        model: 'SS2003',
        capacity: '150 kg per wing',
        maxGateWidth: '3.0 m per wing',
        powerSupply: 'DC 18V',
        motorOutput: '12 W',
        operatingSpeed: '90° in 10~12 sec',
        batteryBackup: '12 Volt, 7 AH (42 hrs / 30-50 cycles)',
        tempRange: '0°C to +50°C'
      },
      {
        model: 'SS2005',
        capacity: '250 kg per wing',
        maxGateWidth: '4.0 m per wing',
        powerSupply: 'DC 18V',
        motorOutput: '18 W',
        operatingSpeed: '90° in 10~12 sec',
        batteryBackup: '12 Volt, 7 AH (42 hrs / 30-50 cycles)',
        tempRange: '0°C to +50°C'
      },
      {
        model: 'SS2007',
        capacity: '350 kg per wing',
        maxGateWidth: '5.0 m per wing',
        powerSupply: 'DC 24V',
        motorOutput: '30 W',
        operatingSpeed: '90° in 10~12 sec',
        batteryBackup: 'Optional Inverter Support',
        tempRange: '0°C to +50°C'
      },
      {
        model: 'SS2009',
        capacity: '450 kg per wing',
        maxGateWidth: '6.0 m per wing',
        powerSupply: 'DC 24V',
        motorOutput: '30 W',
        operatingSpeed: '90° in 10~12 sec',
        batteryBackup: 'Optional Inverter Support',
        tempRange: '0°C to +50°C'
      }
    ],
    image: '/images/product_automatic_sliding_gate.jpg'
  },

  // 12. Fire Resistant Windows
  {
    id: 'fire-resistant-windows',
    name: 'Fire Resistant Windows',
    slug: 'fire-resistant-windows',
    category: 'Windows',
    tagline: 'Certified 2-Hour Fire Protection with Sleek Architecture',
    fireRating: '2-Hour Fire Rated Glass & Steel Frame',
    shortDescription: 'Constructed from hollow pressed steel with 2-hour fire-rated glass to prevent smoke and flame spread in critical compartment barriers.',
    overview: 'Our Fire-Resistant Steel Windows offer robust protection with a sleek, industrial aesthetic. Fabricated from high-quality hollow metal pressed steel and paired with 2-hour fire-rated glass, these windows are available in openable and fixed configurations, delivering both safety and functionality for high-risk environments.',
    keyFeatures: [
      'Fire Resistance: Certified 2-hour fire-rated glass and steel frame to prevent fire and smoke penetration.',
      'Durable Construction: Manufactured from corrosion-resistant hollow pressed steel for longevity and structural integrity.',
      'Design Flexibility: Available in fixed and operable types (top-hung, side-hung, or pivot) suited for architectural needs.',
      'Seamless Aesthetics: Clean lines and customizable finishes to blend with both modern and industrial facades.',
      'Enhanced Safety: Designed to contain fire spread and ensure life safety along escape stairwells.',
      'Low Maintenance: Pure polyester powder-coated finish resists weathering and requires minimal upkeep.'
    ],
    specifications: [
      { label: 'Fire Rating', value: 'Certified 2 Hours (Glass and Steel Assembly)' },
      { label: 'Window Shutter MOC', value: '1.2 mm GI sheet' },
      { label: 'Shutter Thickness', value: '46 mm' },
      { label: 'Infill Insulation', value: 'Rockwool 96 kg / cc' },
      { label: 'Pad Plates', value: '3 mm predrilled and taped' },
      { label: 'Window Frame Profiles', value: '60x57, 100x57, 143x57' },
      { label: 'Rabbets', value: 'Single rabbet or double rabbet' },
      { label: 'Door Frame MOC', value: '1.5 mm GI sheets' },
      { label: 'Finish', value: 'Pure polyester powder coating finish' }
    ],
    applications: [
      'Hospitals & Healthcare Facilities',
      'Industrial Plants & Warehouses',
      'Schools & Educational Institutions',
      'Commercial Office Buildings',
      'Stairwells, Escape Routes & Fire Compartments',
      'Data Centers & Electrical Substation Control Rooms'
    ],
    colorShades: [
      { code: 'RAL3020', name: 'Safety Red', hex: '#CC1100' },
      { code: 'RAL7011', name: 'Iron Grey', hex: '#52595D' },
      { code: 'RAL7037', name: 'Dusty Grey', hex: '#7D8285' },
      { code: 'RAL7040', name: 'Window Grey', hex: '#989EA4' },
      { code: 'RAL7047', name: 'Telegrey 4', hex: '#CFD0D2' },
      { code: 'RAL9001', name: 'Cream', hex: '#EFEBD9' },
      { code: 'RAL9016', name: 'Traffic White', hex: '#F7F9FB' }
    ],
    image: '/images/product_fire_steel_door.jpg'
  },

  // 13. Hydraulic Pumps, Cylinders & Oil Coolers
  {
    id: 'hydraulic-systems',
    name: 'Hydraulic Pumps, Cylinders & Oil Coolers',
    slug: 'hydraulic-pumps-cylinders-oil-coolers',
    category: 'Industrial Products',
    tagline: 'High-Pressure Industrial Fluid Power Systems',
    shortDescription: 'Industrial hydraulic cylinders, gear/piston pumps, and high-efficiency oil coolers for heavy machinery and power generation.',
    overview: 'We supply high-performance hydraulic pumps, double-acting hydraulic cylinders, and industrial heat exchangers/oil coolers designed for demanding power plant equipment, heavy industrial presses, material handling plants, and fabrication machinery.',
    keyFeatures: [
      'High operating pressure tolerances suited for continuous heavy industrial cycles.',
      'Precision-honed hydraulic cylinder barrels with high-grade sealing kits.',
      'High-efficiency air and water-cooled oil coolers for temperature regulation.',
      'Custom configurations available as per project machinery requirements.'
    ],
    specifications: [
      { label: 'Product Range', value: 'Piston Pumps, Vane Pumps, Hydraulic Cylinders, Air/Water Oil Coolers' },
      { label: 'Working Pressure', value: 'Configurable as per project engineering requirements' },
      { label: 'Compatibility', value: 'Standard industrial mineral oils and fire-resistant hydraulic fluids' },
      { label: 'Mounting Types', value: 'Flange, foot, clevis, or trunnion mounting available' },
      { label: 'Material Grade', value: 'High-tensile forged steel and heavy-gauge copper/aluminum matrix' }
    ],
    applications: [
      'Thermal Power Plants & Turbine Auxiliaries',
      'Hydraulic Presses & Metal Forming Equipment',
      'Infrastructure Material Handling Cranes',
      'Industrial Manufacturing Facilities'
    ],
    image: '/images/product_hydraulic_valves.jpg'
  },

  // 14. Industrial Valves
  {
    id: 'industrial-valves',
    name: 'Industrial Valves',
    slug: 'industrial-valves',
    category: 'Industrial Products',
    tagline: 'Fluid Control & Pressure Regulation',
    shortDescription: 'Comprehensive range of industrial gate, globe, ball, check, and butterfly valves for steam, water, and chemical pipelines.',
    overview: 'Supplying industrial-grade valves engineered to control flow, pressure, and isolation across high-pressure steam lines, cooling water circuits, and chemical process piping in power plants and infrastructure facilities.',
    keyFeatures: [
      'Cast steel and stainless steel body construction for corrosion resistance.',
      'High temperature and pressure compliance for utility steam piping.',
      'Manual handwheel, gear-operated, pneumatic, and motorized actuator configurations.',
      'Tight shut-off leakage class standards.'
    ],
    specifications: [
      { label: 'Valve Types', value: 'Gate, Globe, Check, Ball, Butterfly, Pressure Relief Valves' },
      { label: 'Body MOC', value: 'Cast Steel (WCB), Forged Steel, Stainless Steel (SS304/SS316)' },
      { label: 'Pressure Class', value: '150#, 300#, 600# and custom project ratings' },
      { label: 'End Connections', value: 'Flanged, Butt-weld, Socket-weld, Threaded' },
      { label: 'Operation', value: 'Manual Handwheel, Bevel Gear, Electrical / Pneumatic Actuation' }
    ],
    applications: [
      'Thermal Power Generation Piping',
      'Industrial Cooling & Process Water',
      'Chemical & Petrochemical Systems',
      'Infrastructure Water Management'
    ],
    image: '/images/product_hydraulic_valves.jpg'
  },

  // 15. Rolling Shutters
  {
    id: 'rolling-shutters',
    name: 'Rolling Shutters (Manual, Motorized & Gear Type)',
    slug: 'rolling-shutters',
    category: 'Industrial Products',
    tagline: 'Heavy Industrial Access & Security Barriers',
    shortDescription: 'High-strength steel rolling shutters available in manual pull-push, mechanical gear-operated, and electric motorized variants.',
    overview: 'Robust industrial rolling shutters engineered from interlocking cold-rolled steel slats. Designed for large factory entrances, commercial storage godowns, and warehouse loading docks with smooth spring-assisted or motorized elevation.',
    keyFeatures: [
      'Cold-rolled heavy-gauge galvanized steel slats for impact resistance.',
      'Available in Manual (pull/push), Mechanical Gear box, and Electric Motorized drives.',
      'Weather-sealed guide channels to prevent dust and water ingress.',
      'Heavy-duty central and side locking provisions.'
    ],
    specifications: [
      { label: 'Slat Material', value: 'Galvanized steel / Cold-rolled high-tensile steel' },
      { label: 'Operation Modes', value: 'Manual spring-operated, Mechanical gear reduction, Motorized with push-button' },
      { label: 'Guide Channels', value: 'Heavy MS / GI formed channels with safety stops' },
      { label: 'Sizing', value: 'Fabricated to exact project opening dimensions' },
      { label: 'Surface Finish', value: 'Red oxide primer, enamel paint, or galvanized finish' }
    ],
    applications: [
      'Industrial Factory Sheds & Fabrication Bays',
      'Logistics Warehouses & Distribution Centers',
      'Commercial Showrooms & Storage Facilities',
      'Power Plant Substation Enclosures'
    ],
    image: '/images/product_automatic_sliding_gate.jpg'
  },

  // 16. Weighbridges & Weighing Equipment
  {
    id: 'weighbridges-equipment',
    name: 'Weighbridges & Weighing Equipment',
    slug: 'weighbridges-and-weighing-equipment',
    category: 'Industrial Products',
    tagline: 'Precision Weight Measurement & Heavy Vehicle Platforms',
    shortDescription: 'Pit-type and pitless heavy vehicle weighbridges with digital load cells, weight indicators, and computerized printout systems.',
    overview: 'Supplying heavy-duty industrial weighbridges and platform weighing systems for trucks, dumpers, and bulk cargo material handling. Engineered with rugged steel structural platforms and high-accuracy digital load cells.',
    keyFeatures: [
      'Heavy structural steel deck fabricated to withstand repetitive axle loading.',
      'Hermetically sealed IP68 digital load cells for all-weather outdoor operation.',
      'Pit-mounted or Pitless surface configurations.',
      'Computerized weight indicator integration for automated ticketing.'
    ],
    specifications: [
      { label: 'Platform Capacity', value: 'Custom tonnages as per project requirements (up to 100+ MT)' },
      { label: 'Deck Type', value: 'Heavy structural steel girder / concrete deck composite' },
      { label: 'Configuration', value: 'Pit Type or Surface Pitless Type' },
      { label: 'Load Cell Type', value: 'Digital compression type stainless steel load cells' },
      { label: 'Indicator / Display', value: 'Microprocessor-based digital terminal with RS-232 / USB output' }
    ],
    applications: [
      'Power Plant Coal & Ash Handling Terminals',
      'Mining & Quarry Transport Yards',
      'Infrastructure Project Sites',
      'Heavy Industrial Manufacturing Facilities'
    ],
    image: '/images/product_industrial_weighbridge.jpg'
  },

  // 17. Fire Extinguishers
  {
    id: 'fire-extinguishers',
    name: 'Fire Extinguishers',
    slug: 'fire-extinguishers',
    category: 'Industrial Products',
    tagline: 'Rapid Fire Suppression for Industrial Assets',
    shortDescription: 'Full array of industrial fire extinguishers including ABC Dry Powder, CO2, Mechanical Foam, and Clean Agent extinguishers.',
    overview: 'Providing industrial-certified fire suppression cylinders and equipment designed to tackle Class A, B, C, and electrical fire hazards across power generating units, manufacturing plants, and electrical transformer yards.',
    keyFeatures: [
      'High-pressure seamless/welded steel cylinders with safety release valves.',
      'Effective discharge ranges and discharge nozzles.',
      'Complete with wall mounting brackets and inspection tags.',
      'Suited for severe industrial, high-temperature, and electrical environments.'
    ],
    specifications: [
      { label: 'Extinguisher Types', value: 'ABC Dry Chemical Powder (MAP), Carbon Dioxide (CO2), Foam (AFFF), Water' },
      { label: 'Capacity Options', value: '1 kg, 2 kg, 4 kg, 6 kg, 9 kg portable, 25 kg / 50 kg trolley-mounted' },
      { label: 'Cylinder Body', value: 'Deep-drawn steel / Seamless manganese steel body' },
      { label: 'Operating Pressure', value: '15 bar (Powder) / 50-60 bar (CO2)' },
      { label: 'Standard Compliance', value: 'Built to industrial safety norms' }
    ],
    applications: [
      'Thermal Power Plants & Switchyards',
      'Electrical Control Rooms & Transformer Yards',
      'Chemical Storage & Industrial Warehouses',
      'Commercial & Public Infrastructure Buildings'
    ],
    image: '/images/product_fire_steel_door.jpg'
  },

  // 18. Circulating Chillers
  {
    id: 'circulating-chillers',
    name: 'Circulating Chillers',
    slug: 'circulating-chillers',
    category: 'Industrial Products',
    tagline: 'Controlled Temperature Refrigeration & Fluid Recirculation',
    shortDescription: 'Industrial closed-loop circulating chillers for precision cooling of machinery, process jackets, and laboratory instruments.',
    overview: 'We supply high-reliability closed-circuit industrial water/glycol circulating chillers. Built to maintain exact fluid temperatures for machine cooling, lasers, plastic moulding, turbine lubrication circuits, and testing laboratories.',
    keyFeatures: [
      'Hermetic scroll compressors with energy-efficient refrigerant circuits.',
      'Digital PID temperature controller with micro-precision stability.',
      'Stainless steel circulating pumps and insulated fluid reservoir.',
      'Comprehensive safety alarms for low liquid level, high pressure, and freeze prevention.'
    ],
    specifications: [
      { label: 'Cooling Capacity', value: 'Available according to project temperature and kW load requirements' },
      { label: 'Fluid Temperature Range', value: '+5°C to +35°C (Custom low-temperature models available)' },
      { label: 'Condenser Type', value: 'Air-cooled finned copper tube or Water-cooled shell & tube' },
      { label: 'Pump MOC', value: 'Stainless Steel SS304/SS316' },
      { label: 'Refrigerant', value: 'Eco-friendly R134a / R410A' }
    ],
    applications: [
      'Industrial Machinery & Laser Cutting Units',
      'Plastic Injection Moulding & Extrusion',
      'Power Plant Laboratory Analytical Instruments',
      'Chemical Process Reactor Jackets'
    ],
    image: '/images/hero_industrial_facility.jpg'
  }
];
