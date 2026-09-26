export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  scope: string[];
  sectors: string[];
  icon: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'rolling-shutter-repair',
    title: 'Rolling Shutter Repair & Maintenance',
    shortDesc: 'Comprehensive overhaul, spring tensioning, motor drive replacement, and emergency breakdown repair for industrial shutters.',
    description: 'Provide professional repair and maintenance support for rolling shutter systems across industrial sheds, warehouses, and commercial establishments. Our experienced technicians service manual, motorized, and mechanical gear-type systems to ensure seamless and safe operations.',
    scope: [
      'Spring balancing, alignment, and replacement of broken springs',
      'Motor drive repair, gear box replacement, and electrical control testing',
      'Straightening or replacement of damaged steel interlocking slats',
      'Guide track lubrication, alignment, and bottom lock servicing',
      'Preventive maintenance contracts for logistics and industrial bays'
    ],
    sectors: ['Warehouses', 'Industrial Plants', 'Commercial Centers', 'Fabrication Yards'],
    icon: 'DoorClosed'
  },
  {
    id: 'weighbridge-repair',
    title: 'Weighbridge Repair & Maintenance',
    shortDesc: 'Load cell testing, calibration assistance, structural deck repair, and indicator maintenance for truck scales.',
    description: 'Support repair and maintenance requirements for weighbridge systems. We assist heavy industrial sites, power plant terminals, and transport yards with load cell health checks, junction box troubleshooting, structural platform reinforcement, and routine calibration maintenance.',
    scope: [
      'Digital and analog load cell diagnostic testing and replacement',
      'Junction box waterproofing, wiring continuity, and earthing checks',
      'Structural steel platform crack repair, rust treatment, and leveling',
      'Weight indicator terminal troubleshooting and communication interfacing',
      'Assistance with periodic calibration and verification requirements'
    ],
    sectors: ['Power Plants', 'Quarry & Mining Terminals', 'Logistics Parks', 'Infrastructure Yards'],
    icon: 'Scale'
  },
  {
    id: 'manpower-supply',
    title: 'Skilled & Unskilled Manpower Supply',
    shortDesc: 'Vetted, safety-trained technical workers, certified welders, fitters, riggers, and general support labor for industrial projects.',
    description: 'Provide manpower support according to industrial and project requirements. We deploy experienced technical crews and dependable workforces for plant turnarounds, ongoing fabrication operations, civil maintenance, and machinery erection assignments.',
    scope: [
      'Certified high-pressure welders (TIG, MIG, Arc welding)',
      'Mechanical fitters, pipe fitters, and structural fabricators',
      'Industrial electricians, instrumentation technicians, and rigging specialists',
      'Semi-skilled equipment operators and machine tenders',
      'Trained unskilled labor for material handling, cleanups, and civil support'
    ],
    sectors: ['Power Plants', 'Heavy Fabrication', 'Infrastructure Projects', 'Industrial Turnarounds'],
    icon: 'Users'
  },
  {
    id: 'vehicle-suppliers',
    title: 'Vehicle Suppliers',
    shortDesc: 'Industrial utility vehicles, transport trucks, and material shifting fleets for on-site infrastructure and plant logistics.',
    description: 'Vehicle supply support for industrial and project requirements. We arrange dependable logistics and operational utility vehicles to facilitate personnel transport, equipment haulage, and site material movement across project environments.',
    scope: [
      'Project site utility vehicles and personnel transport carriers',
      'Heavy-duty material transport trucks and flatbed vehicles',
      'Custom vehicle provisioning based on long-term or project-term schedules',
      'Drivers and operators compliant with industrial safety regulations'
    ],
    sectors: ['Infrastructure Sites', 'Power Plant Projects', 'Construction Corridors'],
    icon: 'Truck'
  },
  {
    id: 'fabrication-works',
    title: 'Fabrication Works',
    shortDesc: 'Custom heavy structural steel fabrication, industrial ducting, piping spools, machine frames, and gates.',
    description: 'Industrial fabrication support tailored to engineering drawings and technical specifications. We handle heavy structural steelwork, pipe fabrication, hopper chutes, industrial walkways, platforms, and custom equipment enclosures with rigorous dimensional precision.',
    scope: [
      'Heavy structural steel column, truss, and gantry girder fabrication',
      'Carbon steel and stainless steel pipe spools and manifold headers',
      'Industrial storage tanks, silos, hoppers, and chute fabrications',
      'Safety railings, cat ladders, industrial staircases, and grating platforms',
      'On-site fit-up, tacking, and full-penetration welding per welding procedures'
    ],
    sectors: ['Thermal Power Plants', 'Industrial Establishments', 'Infrastructure Structures'],
    icon: 'Hammer'
  },
  {
    id: 'mechanical-works',
    title: 'Mechanical Works',
    shortDesc: 'Equipment erection, alignment, pump and valve overhaul, piping installation, and preventive mechanical maintenance.',
    description: 'Mechanical engineering and maintenance support for rotating machinery, static equipment, and utility piping across industrial complexes. Our crews execute precision alignments, valve repacking, pump rebuilds, and overhaul activities with high safety compliance.',
    scope: [
      'Centrifugal and positive displacement pump overhaul and seal replacement',
      'Industrial valve servicing, seat lapping, gasket renewal, and actuator fitting',
      'Shaft alignment, coupling balancing, and bearing maintenance',
      'Process and utility piping erection, hydrostatic testing, and insulation support',
      'Plant shutdown mechanical maintenance and technical support'
    ],
    sectors: ['Power Generation', 'Industrial Establishments', 'Manufacturing Plants'],
    icon: 'Wrench'
  },
  {
    id: 'civil-works',
    title: 'Civil Works',
    shortDesc: 'Equipment foundations, industrial flooring, trenching, road works, and structural plant modifications.',
    description: 'Civil work support for industrial and infrastructure requirements. We execute reinforced concrete machinery foundations, transformer plinths, industrial drainage trenches, warehouse flooring, and boundary infrastructure tailored to industrial loading standards.',
    scope: [
      'Heavy equipment RCC foundations, pedestal casting, and grouting',
      'Industrial tremix flooring, epoxy coatings, and wear-resistant screeds',
      'Cable trenches, drainage ducts, and valve pit construction',
      'Structural retrofitting, masonry partitions, and plant plastering/finishes',
      'Perimeter walls, gate foundation beams, and approach roads'
    ],
    sectors: ['Infrastructure Projects', 'Power Plants', 'Industrial Estates'],
    icon: 'Building2'
  }
];
