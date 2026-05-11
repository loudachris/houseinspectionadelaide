export const SITE = {
  name: "House Inspection Adelaide",
  shortName: "HIA",
  domain: "houseinspectionadelaide.com.au",
  url: "https://houseinspectionadelaide.com.au",
  phone: "0403 454 199",
  phoneHref: "tel:+61403454199",
  email: "chris@loudachris.com.au",
  address: {
    street: "21-22 Greenhill Road",
    suburb: "Wayville",
    state: "SA",
    postcode: "5034",
    country: "AU",
  },
  region: {
    name: "Adelaide",
    state: "South Australia",
    stateCode: "AU-SA",
    coords: { lat: -34.9285, lng: 138.6007 },
  },
  social: {},
  defaultOgImage: "/og-default.png",
} as const;

export const SUBURBS = [
  { slug: "glenelg", name: "Glenelg", region: "Bayside" },
  { slug: "unley", name: "Unley", region: "Inner South" },
  { slug: "norwood", name: "Norwood", region: "Eastern" },
  { slug: "campbelltown", name: "Campbelltown", region: "Eastern" },
  { slug: "mount-barker", name: "Mount Barker", region: "Adelaide Hills" },
  { slug: "mitcham", name: "Mitcham", region: "Inner South" },
  { slug: "gawler", name: "Gawler", region: "Northern Outer" },
  { slug: "north-adelaide", name: "North Adelaide", region: "City Fringe" },
  { slug: "prospect", name: "Prospect", region: "Inner North" },
  { slug: "stirling", name: "Stirling", region: "Adelaide Hills" },
  { slug: "seaford", name: "Seaford", region: "Southern Coast" },
  { slug: "victor-harbor", name: "Victor Harbor", region: "Fleurieu Peninsula" },
  { slug: "morphett-vale", name: "Morphett Vale", region: "Southern" },
  { slug: "aldinga", name: "Aldinga", region: "Southern Coast" },
] as const;

export type Suburb = (typeof SUBURBS)[number];

export const SERVICES = [
  {
    slug: "pre-purchase-building-inspection",
    name: "Pre-Purchase Building Inspection",
    short: "Pre-Purchase Inspection",
    blurb: "Before you sign. Every system, every surface.",
    icon: "home",
    standard: "AS 4349.1-2007",
    popular: true,
  },
  {
    slug: "building-and-pest-inspection",
    name: "Building and Pest Combo",
    short: "Building + Pest Combo",
    blurb: "Two reports, one visit. Save $150 to $250.",
    icon: "bug",
    standard: "AS 4349.1 + AS 4349.3",
    popular: false,
  },
  {
    slug: "pest-inspection",
    name: "Timber Pest Inspection",
    short: "Pest Inspection",
    blurb: "Termites, borers, fungal decay. Standalone or combo.",
    icon: "bug",
    standard: "AS 4349.3",
    popular: false,
  },
  {
    slug: "termite-inspection",
    name: "Termite Inspection",
    short: "Termite Inspection",
    blurb: "Active termite detection in Adelaide hotspots.",
    icon: "bug",
    standard: "AS 4349.3",
    popular: false,
  },
  {
    slug: "handover-inspection",
    name: "Handover Inspection",
    short: "Handover Inspection",
    blurb: "New builds. Catch defects before final payment.",
    icon: "hammer",
    standard: "AS 4349.0",
    popular: false,
  },
  {
    slug: "staged-building-inspections",
    name: "Staged Construction Inspections",
    short: "Staged Inspections",
    blurb: "Slab, frame, lock-up, fixing, completion.",
    icon: "layers",
    standard: "AS 4349.0",
    popular: false,
  },
  {
    slug: "defect-inspection",
    name: "Defect Inspection",
    short: "Defect Inspection",
    blurb: "Targeted reporting on known issues.",
    icon: "list",
    standard: "AS 4349.7",
    popular: false,
  },
  {
    slug: "asbestos-inspection",
    name: "Asbestos Inspection",
    short: "Asbestos Inspection",
    blurb: "Pre-1987 homes. Identification and testing.",
    icon: "flask",
    standard: "NATA-accredited sampling",
    popular: false,
  },
  {
    slug: "mould-inspection",
    name: "Mould Inspection",
    short: "Mould Inspection",
    blurb: "Air sampling, moisture readings, remediation scope.",
    icon: "drop",
    standard: "AS 4849.1",
    popular: false,
  },
] as const;

export type Service = (typeof SERVICES)[number];

export const FAQ_GUIDES = [
  {
    slug: "how-much-is-a-building-inspection",
    title: "How Much Is a Building Inspection in Adelaide?",
    short: "Building inspection cost",
  },
  {
    slug: "building-inspection-cost",
    title: "Building Inspection Cost Adelaide (Full Breakdown)",
    short: "Cost breakdown",
  },
  {
    slug: "pest-and-building-inspection-cost",
    title: "How Much Does a Building & Pest Inspection Cost?",
    short: "Pest + building cost",
  },
  {
    slug: "what-does-a-building-inspection-cover",
    title: "What Does a Building Inspection Cover?",
    short: "What's covered",
  },
  {
    slug: "how-long-does-a-building-inspection-take",
    title: "How Long Does a Building Inspection Take?",
    short: "Duration",
  },
  {
    slug: "what-is-a-building-inspection",
    title: "What Is a Building Inspection? (Adelaide Guide)",
    short: "Definition",
  },
  {
    slug: "what-does-a-building-inspector-do",
    title: "What Does a Building Inspector Do?",
    short: "Inspector role",
  },
  {
    slug: "what-to-look-for-house-inspection",
    title: "What to Look For in a House Inspection",
    short: "Buyer checklist",
  },
] as const;
