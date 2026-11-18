// Editable, customer-facing labor price menu for WizBang.
// Prices in USD; parts/materials, ammunition, range fees and specialty machining
// are extra unless explicitly included. Confirm scope before beginning work.

export type MenuItem = {
  name: string;
  price: string;
  note?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
};

export type FeaturedPackage = {
  name: string;
  price: string;
  description: string;
  includes: string;
};

export const pricingCategories: MenuCategory[] = [
  {
    id: "cleaning",
    title: "Cleaning & Diagnostics",
    subtitle: "Inspection, deep cleaning and troubleshooting.",
    items: [
      { name: "Basic handgun cleaning", price: "$50", note: "Routine field-strip cleaning and lubrication." },
      { name: "Detailed handgun cleaning", price: "$85", note: "More thorough cleaning and inspection." },
      { name: "Full ultrasonic cleaning", price: "From $125", note: "Complete disassembly and cleaning of suitable components, followed by drying and lubrication." },
      { name: "Ultrasonic add-on to a full teardown", price: "+$50", note: "For a qualifying tuning or disassembly package." },
      { name: "Rifle / AR deep cleaning", price: "From $100" },
      { name: "Shotgun deep cleaning", price: "From $100" },
      { name: "Initial diagnostic inspection", price: "$65", note: "Assessment before a repair estimate." },
      { name: "Malfunction diagnosis & troubleshooting", price: "From $100" },
      { name: "Complete reliability service", price: "From $175", note: "Inspection, cleaning, troubleshooting and appropriate function checks." },
      { name: "Safety & function inspection", price: "$50" },
      { name: "Range function testing", price: "From $50", note: "Range fees and ammunition are separate." },
      { name: "Rust removal / restoration evaluation", price: "From $75", note: "Condition-dependent; major restoration quoted separately." },
    ],
  },
  {
    id: "trigger-parts",
    title: "Trigger & Parts Work",
    subtitle: "Compatible upgrades, replacements and fitting.",
    items: [
      { name: "Standard striker-fired trigger replacement", price: "From $100" },
      { name: "Complex trigger replacement", price: "From $150" },
      { name: "Basic trigger tuning", price: "From $150", note: "Subject to inspection and appropriate safety limits." },
      { name: "Spring kit installation", price: "From $50" },
      { name: "Recoil spring replacement", price: "$35" },
      { name: "Mainspring replacement", price: "From $40" },
      { name: "Extended firing pin installation", price: "From $40" },
      { name: "Guide rod replacement", price: "From $35" },
      { name: "Magazine release replacement", price: "$40" },
      { name: "Magazine release fitting", price: "From $50" },
      { name: "Small parts installation", price: "From $35", note: "Multiple small items may be bundled into a single quote." },
    ],
  },
  {
    id: "1911-2011",
    title: "1911 / 2011 Custom Work",
    subtitle: "Detailed fitting, action work and complete custom packages.",
    items: [
      { name: "Trigger replacement, fitting & tuning", price: "From $175" },
      { name: "Full 1911 / 2011 trigger job", price: "From $200", note: "Complexity and existing parts determine the final quote." },
      { name: "Thumb safety replacement & fitting", price: "From $125" },
      { name: "Ambidextrous safety fitting", price: "From $150" },
      { name: "Grip safety fitting", price: "From $100" },
      { name: "Hammer replacement & fitting", price: "From $125" },
      { name: "Action smoothing & internal polishing", price: "From $150" },
      { name: "Slide & frame contact-surface polishing", price: "From $100" },
      { name: "Disconnector ramp work", price: "From $75", note: "Only when inspection indicates it is appropriate." },
      { name: "Feed ramp inspection & polishing", price: "From $65", note: "Only where suitable for the firearm." },
      { name: "Barrel / bushing fitting", price: "From $125" },
      { name: "Magwell installation & fitting", price: "From $75" },
      { name: "Grip panel installation", price: "$25" },
      { name: "Grip fitting / modification", price: "From $50" },
      { name: "Spring selection & calibration", price: "From $75" },
      { name: "Complete teardown & inspection", price: "From $100" },
      { name: "Specialty machining", price: "Custom quote" },
    ],
  },
  {
    id: "stippling",
    title: "Hand Stippling",
    subtitle: "Functional grip texture and custom cosmetic detailing.",
    items: [
      { name: "Single stippled accent / index point", price: "$30" },
      { name: "Both index points", price: "$50" },
      { name: "Trigger guard stippling", price: "$35" },
      { name: "Front strap stippling", price: "$45" },
      { name: "Backstrap stippling", price: "$45" },
      { name: "Grip side panels only", price: "From $120" },
      { name: "Basic hand stippling", price: "From $150", note: "Standard pattern, subject to grip size and preparation." },
      { name: "Full 360° grip stippling", price: "From $200" },
      { name: "Advanced decorative stippling", price: "From $225" },
      { name: "Single trigger guard undercut", price: "From $45" },
      { name: "Double undercut", price: "From $75" },
      { name: "Finger groove removal", price: "From $50" },
      { name: "Grip reduction / reshaping", price: "From $75" },
      { name: "Factory texture removal", price: "From $35" },
      { name: "Custom stippling borders", price: "From $30", note: "Add-on to grip stippling work." },
      { name: "Custom logo or intricate pattern", price: "Custom quote" },
      { name: "Magazine baseplate stippling", price: "$25 each" },
    ],
  },
  {
    id: "optics-sights",
    title: "Optics & Sights",
    subtitle: "Mounting, installation, alignment and zeroing.",
    items: [
      { name: "Pistol optic installation", price: "From $50", note: "For an existing compatible optic cut or mount." },
      { name: "Optic plate installation", price: "$35" },
      { name: "Iron sight replacement", price: "From $60" },
      { name: "Sight adjustment", price: "$25" },
      { name: "Stripped optic screw extraction", price: "From $50" },
      { name: "Scope mounting & leveling", price: "From $75" },
      { name: "Bore sighting", price: "$35" },
      { name: "Range zeroing", price: "From $75", note: "Ammunition and range fees extra." },
      { name: "Weapon light / accessory installation", price: "$25" },
      { name: "Existing mounting hardware inspection", price: "$25" },
      { name: "Slide milling / nonstandard mounts", price: "Custom quote" },
    ],
  },
];

export const signatureTuningPackage: FeaturedPackage = {
  name: "1911 Custom Tuning",
  price: "$550",
  description: "Complete custom tuning labor package.",
  includes: "Full teardown, compatible trigger and thumb safety fitting, approved spring and guide rod work, action smoothing when appropriate, reassembly and safety checks. Compatible optic mounting when applicable.",
};

export const signatureUltrasonicPackage: FeaturedPackage = {
  name: "1911 Custom Tuning + Ultrasonic",
  price: "$600",
  description: "Our complete tuning package with a full ultrasonic deep clean.",
  includes: "All 1911 Custom Tuning labor plus ultrasonic cleaning of compatible components, drying and lubrication.",
};

export const featuredPackages: FeaturedPackage[] = [
  {
    name: "The WizBang Refresh",
    price: "$85",
    description: "A detailed clean and inspection.",
    includes: "Detailed cleaning, lubrication, inspection and function checks.",
  },
  {
    name: "The Deep Clean",
    price: "From $125",
    description: "Full ultrasonic cleaning.",
    includes: "Disassembly, ultrasonic cleaning of suitable components, drying, lubrication and reassembly.",
  },
  {
    name: "The Grip Package",
    price: "From $250",
    description: "Grip texture and a trigger installation.",
    includes: "Basic hand stippling and installation of a compatible replacement trigger. Customer-supplied or separately purchased parts.",
  },
  {
    name: "The Reliability Package",
    price: "From $175",
    description: "Troubleshoot and evaluate functional concerns.",
    includes: "Diagnosis, cleaning, inspection and appropriate function validation. Parts and live-fire expenses extra.",
  },
  signatureTuningPackage,
  signatureUltrasonicPackage,
];
