export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  vision: string;
  address: {
    post: string;
    taluka: string;
    district: string;
    pin: string;
    state: string;
    country: string;
    fullAddress: string;
  };
  phone: string;
  phoneRaw: string;
  email: string;
  gstin: string;
  workingSectors: string[];
  majorClients: string[];
  strengths: {
    title: string;
    desc: string;
  }[];
}

export const COMPANY_DATA: CompanyInfo = {
  name: "M/s A. S. ENTERPRISES",
  shortName: "A. S. Enterprises",
  tagline: "Industrial Material Suppliers • Industrial Solutions • Engineering Support • Reliable Services",
  description: "A. S. Enterprises is a professionally managed organization engaged in supplying industrial materials and providing engineering support services across various industrial sectors.",
  vision: "To become a trusted industrial solution provider by delivering quality products, professional services, and long-term customer satisfaction.",
  address: {
    post: "At Post Faizpur",
    taluka: "Tal - Yawal",
    district: "Dist - Jalgaon",
    pin: "425503",
    state: "Maharashtra",
    country: "India",
    fullAddress: "At Post Faizpur, Tal - Yawal, Dist - Jalgaon, Pin - 425503, Maharashtra, India"
  },
  phone: "9168986246",
  phoneRaw: "+919168986246",
  email: "anasshaikh2177@gmail.com",
  gstin: "27ETGPS6246K1ZZ",
  workingSectors: [
    "Power Plants",
    "Infrastructure Projects",
    "Industrial Establishments",
    "Fabrication Works",
    "Engineering Maintenance Requirements"
  ],
  majorClients: [
    "Maharashtra State Power Generation Company Limited",
    "Bharat Heavy Electrical Limited (BHEL)",
    "National Thermal Power Corporation (NTPC)",
    "T.H.D.C (Govt. UP)",
    "Power Mech Project Limited",
    "Alpha Power Engineering Services Pvt Ltd"
  ],
  strengths: [
    {
      title: "Quality Industrial Products",
      desc: "Products manufactured and selected to withstand severe industrial operating conditions."
    },
    {
      title: "Reliable Engineering Services",
      desc: "Comprehensive engineering, maintenance, and technical execution for industrial facilities."
    },
    {
      title: "Timely Project Execution",
      desc: "Strict adherence to project schedules, installation timelines, and plant shutdowns."
    },
    {
      title: "Experienced Workforce",
      desc: "Skilled manpower, fabricators, and technicians equipped for demanding field environments."
    },
    {
      title: "Professional Customer Support",
      desc: "Dedicated technical consultation, custom specification sizing, and after-sales support."
    },
    {
      title: "Competitive Pricing",
      desc: "Optimized procurement and transparent cost management for industrial and government projects."
    }
  ]
};

export const FAQ_ITEMS = [
  {
    question: "Do you provide customized industrial products?",
    answer: "Yes, several products in our catalogue—including hollow metal pressed steel doors, automatic gates, fire-resistant windows, and shaft doors—can be customized in sizes, frame profiles, and finishes as per project specifications."
  },
  {
    question: "Do you provide engineering support and maintenance?",
    answer: "Yes. Engineering support services form a core business activity, including rolling shutter repair and maintenance, weighbridge repair, mechanical works, fabrication, and civil works."
  },
  {
    question: "Do you supply industrial doors with fire resistance certifications?",
    answer: "Yes. Our fire-resistant doors, emergency exit fire doors, sliding fire doors, and fire windows are tested and certified for up to 2-hour (120-minute) fire resistance with high-density rockwool insulation."
  },
  {
    question: "Do you provide skilled and unskilled manpower for projects?",
    answer: "Yes, we provide skilled and unskilled manpower supply tailored to meet the operational demands of industrial plants, shutdowns, and infrastructure projects."
  },
  {
    question: "Do you supply automatic entrance gates and gate automation kits?",
    answer: "Yes. We offer heavy-duty automatic sliding gates (capacities from 600 kg up to 5000 kg) and automatic swing gates (from 150 kg up to 450 kg per wing) with complete motor drive kits and access control options."
  },
  {
    question: "What organizations and sectors have you served?",
    answer: "Our client experience includes major organizations such as Maharashtra State Power Generation Company Limited, Bharat Heavy Electrical Limited (BHEL), National Thermal Power Corporation (NTPC), T.H.D.C (Govt. UP), Power Mech Project Limited, and Alpha Power Engineering Services Pvt Ltd."
  }
];

export const PROCUREMENT_FAQ_ITEMS = [
  {
    question: "How do we initiate an industrial material procurement or request a quotation?",
    answer: "You can submit your technical specifications, Bill of Quantities (BOQ), or architectural schedules directly through our website quotation desk, via email at anasshaikh2177@gmail.com, or by calling our engineering line at +91 9168986246. Our estimating team reviews the technical parameters and provides a comprehensive commercial quote within 24 to 48 business hours."
  },
  {
    question: "What are the typical manufacturing and delivery lead times for specialized doors and gates?",
    answer: "Standard inventory items and select industrial materials are prepared for dispatch within short turnaround windows. For custom-fabricated Hollow Metal Pressed Steel Doors, fire-rated assemblies, clean room doors, and automated gate systems, delivery timelines typically range according to quantity, frame profile specifications, and powder coating requirements. Specific dispatch milestones are formalized and coordinated upon order confirmation."
  },
  {
    question: "How are logistics and transit arranged for industrial and power project sites?",
    answer: "We organize insured and protected freight transportation directly to customer project premises, power plants, manufacturing facilities, or construction sites across Maharashtra and throughout India. Products are packaged with protective corner wrapping and weather-resistant industrial shrouds to prevent surface scratching or transit distortion."
  },
  {
    question: "Can deliveries be staggered or aligned with on-site installation schedules and shutdowns?",
    answer: "Yes. For infrastructure projects, facility turnarounds, and planned plant shutdowns, we coordinate phase-wise dispatches. Deliveries can be sequenced to align with masonry frame readiness, structural erection schedules, or emergency maintenance windows to prevent site congestion."
  },
  {
    question: "What tax documentation and commercial compliance accompany shipments?",
    answer: "Every procurement dispatch is accompanied by official GST tax invoices (GSTIN: 27ETGPS6246K1ZZ), packing lists, delivery challans, and relevant technical specification sheets. E-way bills are generated in full compliance with commercial tax norms for seamless inter-state and intra-state transport."
  },
  {
    question: "Do you accommodate custom dimensions and project-specific engineering variations?",
    answer: "Yes. A significant portion of our door and access portfolio is customized. We fabricate to exact wall opening dimensions, custom frame profiles (55x57 up to 143x57), single or double rabbet configurations, specific infill cores (Rockwool 96 kg/cc or Honeycomb), hardware preparation, and standard RAL color shades as required by your project engineering consultants."
  }
];
