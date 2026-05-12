export type ServiceContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  priceFrom: number;
  priceTo: number;
  standard: string;
  duration: string;
  turnaround: string;
  whoFor: string[];
  whatsCovered: { title: string; body: string }[];
  asStandard: { code: string; title: string; body: string };
  whyMatter: string[];
  faq: { q: string; a: string }[];
  related: string[];
};

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "pre-purchase-building-inspection": {
    slug: "pre-purchase-building-inspection",
    metaTitle: "Pre-Purchase Building Inspection Adelaide | AS 4349.1 Compliant",
    metaDescription:
      "Independent Adelaide pre-purchase building inspection. AS 4349.1 compliant report inside 48 hours. Get matched with 3 licensed inspectors within 24 hours.",
    h1: "Pre-Purchase Building Inspection Adelaide",
    intro:
      "Before you sign, every system on the property gets inspected against the Australian Standard for residential pre-purchase. We match you with three independent licensed Adelaide inspectors inside 24 hours, you compare quotes, you choose.",
    priceFrom: 400,
    priceTo: 650,
    standard: "AS 4349.1-2007",
    duration: "2 to 3 hours on site",
    turnaround: "48 hours from inspection to written report",
    whoFor: [
      "Buyers under cooling-off pressure",
      "Anyone making an offer on an Adelaide property",
      "Auction-day bidders needing pre-auction certainty",
      "Out-of-town buyers who cannot inspect in person",
    ],
    whatsCovered: [
      {
        title: "Structural elements",
        body: "Foundations, footings, framing, roof structure, retaining walls. Movement, cracking, settlement, and any major structural defects.",
      },
      {
        title: "Roof, walls, ceilings, floors",
        body: "External and internal cladding, ceiling integrity, floor levels, weatherproofing, water damage, paintwork over the symptoms.",
      },
      {
        title: "Wet areas",
        body: "Bathrooms, kitchens, laundries, wet area waterproofing, plumbing leaks, drainage, gutter and downpipe issues.",
      },
      {
        title: "Electrical and gas (visible)",
        body: "Visible wiring condition, switchboard, smoke alarms, gas points. Note: not a full electrical or gas compliance test.",
      },
      {
        title: "Sub-floor and roof void",
        body: "Where accessible, sub-floor ventilation, dampness, framing condition. Roof void insulation, signs of water entry, vermin.",
      },
      {
        title: "Site, drainage, ancillary",
        body: "Site drainage, retaining walls, paths, driveways, ancillary buildings, fencing condition.",
      },
    ],
    asStandard: {
      code: "AS 4349.1-2007",
      title: "Australian Standard for Pre-Purchase Residential Inspections",
      body: "Defines scope, format, photographic evidence, executive summary, and the limitations every inspector must declare. If a report doesn't reference AS 4349.1, it isn't compliant - that matters if you need to use the report in negotiation, settlement, or dispute.",
    },
    whyMatter: [
      "Adelaide has a high mix of pre-1970 brick-veneer and stone homes - reactive clay soils mean footing movement is common.",
      "Past renovations and 'cosmetic' fixes hide major issues. Fresh paint over expanding cracks. New floor coverings over damp slabs. We find the underlying issue.",
      "An AS 4349.1 report gives you written, photographic, dated evidence to negotiate the price, request remediation, or rescind in cooling-off.",
    ],
    faq: [
      {
        q: "How much does a pre-purchase inspection cost in Adelaide?",
        a: "Pricing varies by inspector, property type, size, age, and turnaround urgency. We don't set prices - inspectors do. The matching service connects you with three independent inspectors who each quote your specific property. The matching service is free; you pay the inspector you choose directly.",
      },
      {
        q: "Can I attend the inspection?",
        a: "Yes, and we recommend it. Inspectors will walk you through major findings on site so you understand what's in the report before you read it.",
      },
      {
        q: "What if the inspector finds major defects?",
        a: "You have written, photographic evidence to negotiate the price, request remediation, or rescind in cooling-off (SA cooling-off is two clear business days from contract). Inspectors don't make legal recommendations - that's your conveyancer.",
      },
    ],
    related: ["building-and-pest-inspection", "pest-inspection", "defect-inspection"],
  },

  "building-and-pest-inspection": {
    slug: "building-and-pest-inspection",
    metaTitle: "Building and Pest Inspection Adelaide | Combined Report, AS 4349.1 + .3",
    metaDescription:
      "Combined building and timber pest inspection Adelaide. One visit, two reports. Independent licensed inspectors matched in 24 hours.",
    h1: "Building and Pest Inspection Adelaide",
    intro:
      "Two reports, one site visit, one combined invoice. Pre-purchase building (AS 4349.1) plus timber pest (AS 4349.3). The most common combo for pre-1987 Adelaide homes, where timber framing carries real termite and borer risk.",
    priceFrom: 550,
    priceTo: 900,
    standard: "AS 4349.1 + AS 4349.3",
    duration: "3 to 4 hours on site",
    turnaround: "48 hours from inspection to combined report",
    whoFor: [
      "Buyers of any pre-1987 Adelaide home",
      "Anyone buying a property with timber framing, weatherboards, or significant timber decking",
      "Buyers in known termite corridors (Adelaide Hills foothills, established eastern suburbs)",
      "Buyers wanting the strongest possible due diligence",
    ],
    whatsCovered: [
      {
        title: "Full pre-purchase building scope",
        body: "Everything in the standard pre-purchase inspection: structural, weatherproofing, wet areas, sub-floor, roof void, drainage.",
      },
      {
        title: "Termite activity check",
        body: "Active subterranean termite detection including Coptotermes acinaciformis (the destructive species common in South Australia). Mud tubes, frass, sound testing of timber elements.",
      },
      {
        title: "Timber borer evidence",
        body: "Borer holes in joinery, framing, and floorboards. Active vs historic borer activity assessment.",
      },
      {
        title: "Fungal decay and damp",
        body: "Wet rot, dry rot, fungal decay in sub-floor, behind wet areas, on weatherboards.",
      },
      {
        title: "Conducive conditions",
        body: "Conditions that invite termites: timber-to-ground contact, leaking taps near footings, blocked sub-floor vents, garden beds against weatherboards.",
      },
      {
        title: "Termite management history",
        body: "Where evidence exists, any prior termite treatments, current chemical or physical barriers.",
      },
    ],
    asStandard: {
      code: "AS 4349.1-2007 + AS 4349.3-2010",
      title: "Building + Timber Pest Inspection Standards",
      body: "AS 4349.1 covers the building condition. AS 4349.3 covers timber pest. Combined reports clearly delineate findings under each standard so you can use them separately in negotiation or insurance.",
    },
    whyMatter: [
      "Adelaide's subterranean termite species can destroy a timber frame in 12 to 18 months once established. Treatment and structural remediation costs are substantial.",
      "Most home insurance excludes termite damage. The only protection is detection before damage spreads, then ongoing monitoring.",
      "Combo bookings usually quote lower than two separate bookings because the inspector only mobilises once.",
    ],
    faq: [
      {
        q: "Do I need a pest inspection on a modern slab-and-steel home?",
        a: "Lower risk but still worth it. Steel framing rules out most termite damage but timber sub-floors, decking, and pergolas can still harbour activity, and borer can attack timber doors, windows, and architraves.",
      },
      {
        q: "What's the difference between this and a termite inspection?",
        a: "A standalone termite inspection focuses on active termite detection only. A timber pest inspection (AS 4349.3) covers termites, borer, and fungal decay - the full timber pest scope.",
      },
      {
        q: "Can I get the combo if the seller's already done a building inspection?",
        a: "Yes. Vendor reports from the seller's chosen inspector are common but a buyer-engaged independent report is the standard recommendation. The negotiation leverage of having your own report is significant.",
      },
    ],
    related: ["pre-purchase-building-inspection", "pest-inspection", "termite-inspection"],
  },

  "pest-inspection": {
    slug: "pest-inspection",
    metaTitle: "Timber Pest Inspection Adelaide | Termites, Borer, Decay, AS 4349.3",
    metaDescription:
      "Standalone timber pest inspection Adelaide. Termite, borer, and fungal decay assessment. AS 4349.3 compliant. Licensed independent inspectors matched in 24 hours.",
    h1: "Timber Pest Inspection Adelaide",
    intro:
      "Termites, timber borers, and fungal decay - the three timber pest categories under AS 4349.3. Adelaide's reactive clay soils and subterranean termite populations make this a critical inspection for any home with significant timber.",
    priceFrom: 200,
    priceTo: 400,
    standard: "AS 4349.3-2010",
    duration: "1.5 to 2 hours on site",
    turnaround: "48 hours from inspection to report",
    whoFor: [
      "Owners of pre-1987 Adelaide homes",
      "Anyone with visible termite mud-tubes, frass, or unexplained timber damage",
      "Annual or biannual termite monitoring on at-risk properties",
      "Pre-purchase buyers of homes with timber framing or sub-floors",
    ],
    whatsCovered: [
      {
        title: "Active termite detection",
        body: "Visual inspection of all accessible timber elements. Moisture meter readings, sound-tap testing, mud-tube tracing.",
      },
      {
        title: "Timber borer assessment",
        body: "Identification of borer activity in flooring, joinery, structural timber, and any timber building elements.",
      },
      {
        title: "Fungal decay (wet rot, dry rot)",
        body: "Wet timber, fungal staining, hyphae, fruiting bodies. Common in sub-floor areas with poor ventilation.",
      },
      {
        title: "Conducive conditions",
        body: "Termite-attractive conditions on site: timber-to-ground contact, sub-floor ventilation issues, leaks, dense vegetation against external walls.",
      },
      {
        title: "Sub-floor and roof void access",
        body: "Where accessible, sub-floor crawl-through and roof void inspection. Major activity hides in these spaces.",
      },
      {
        title: "Recommendation and risk rating",
        body: "Plain-English risk rating, recommended next steps (further investigation, treatment, ongoing monitoring).",
      },
    ],
    asStandard: {
      code: "AS 4349.3-2010",
      title: "Australian Standard for Timber Pest Inspections",
      body: "Defines the scope, methodology, and limitations of a timber pest inspection. Not the same as AS 3660 (termite management for new buildings) - 4349.3 is condition assessment of an existing building.",
    },
    whyMatter: [
      "Coptotermes acinaciformis is the dominant subterranean termite species in metro Adelaide. Highly destructive, often hidden from view.",
      "Most home insurance policies specifically exclude termite damage. Detection is the only defence.",
      "Annual inspection is the AS 3660-recommended frequency for at-risk Adelaide properties.",
    ],
    faq: [
      {
        q: "How is this different from pest control?",
        a: "Pest control treats the problem. A timber pest inspection identifies and reports on it. Inspectors in our network are licensed inspectors, not treatment companies - so the report is independent of any treatment quote.",
      },
      {
        q: "How often should I get a pest inspection?",
        a: "AS 3660 recommends annual termite inspection for at-risk properties. Higher-risk Adelaide suburbs (foothills, established eastern, anywhere with reactive clay soils and old timber sub-floors) benefit from annual checks.",
      },
      {
        q: "What if termites are found?",
        a: "Don't disturb the activity - termites retreat and become harder to treat. The report includes recommended next steps (specialist treatment quote, ongoing monitoring, management plan).",
      },
    ],
    related: ["building-and-pest-inspection", "termite-inspection", "pre-purchase-building-inspection"],
  },

  "termite-inspection": {
    slug: "termite-inspection",
    metaTitle: "Termite Inspection Adelaide | Active Detection, Same Day Report",
    metaDescription:
      "Adelaide termite inspection focused on active subterranean termite detection. AS 4349.3 compliant. Independent licensed inspectors matched in 24 hours.",
    h1: "Termite Inspection Adelaide",
    intro:
      "A focused inspection on active subterranean termite detection in your Adelaide property. Suitable for annual monitoring, post-renovation re-checks, or any unexplained timber damage. AS 4349.3 compliant report.",
    priceFrom: 200,
    priceTo: 350,
    standard: "AS 4349.3-2010",
    duration: "1 to 1.5 hours on site",
    turnaround: "Often same-day or next-day report",
    whoFor: [
      "Adelaide homeowners on annual termite monitoring",
      "Anyone who has spotted mud-tubes, frass, or unexplained timber damage",
      "Owners in known termite corridors (Adelaide Hills foothills, established eastern suburbs, properties near creeks or reactive clay soils)",
      "Anyone planning renovations that disturb timber framing",
    ],
    whatsCovered: [
      {
        title: "Active termite signs",
        body: "Mud-tubes (subterranean entry points), frass (drywood termite pellets), winged alates, audible sound when tapping timber.",
      },
      {
        title: "Sub-floor and external timber",
        body: "Sub-floor crawl-through where accessible, external weatherboards, sleepers, retaining walls, fence posts.",
      },
      {
        title: "Roof void and high timber",
        body: "Roof void inspection, exposed rafters, eaves linings, ceiling roses.",
      },
      {
        title: "Garden and conducive conditions",
        body: "Timber-to-ground contact, leaking taps, blocked vents, dense vegetation near footings - the conditions that attract termites.",
      },
      {
        title: "Risk rating and recommendations",
        body: "Clear risk rating, location-tagged photographs, recommended next steps.",
      },
    ],
    asStandard: {
      code: "AS 4349.3-2010",
      title: "Australian Standard for Timber Pest Inspections",
      body: "Termite inspections within the AS 4349.3 framework. Independent inspectors deliver a written report - separate from any treatment quote.",
    },
    whyMatter: [
      "Coptotermes acinaciformis - the most destructive Adelaide termite species - tunnels underground and emerges within timber structures, often undetected until significant damage.",
      "Once established, a colony can destroy structural timber in 12 to 18 months.",
      "Insurance excludes termite damage. Annual inspection is the only practical protection.",
    ],
    faq: [
      {
        q: "What's the difference between termite and timber pest inspection?",
        a: "Termite inspection focuses specifically on active termites. Timber pest inspection (AS 4349.3) covers termites + borer + fungal decay. Both follow the same standard; scope differs.",
      },
      {
        q: "Can the same inspector do treatment if termites are found?",
        a: "Inspectors in our network are inspection-only - not treatment companies. We can refer you to a separate licensed termite management specialist if needed. This separation prevents the conflict-of-interest of an inspector finding work for themselves.",
      },
      {
        q: "How quickly can I get an inspection?",
        a: "If termites are suspected, urgent inspections are usually inside 48 hours. Our matching service typically turns around quotes inside 24 hours.",
      },
    ],
    related: ["pest-inspection", "building-and-pest-inspection", "pre-purchase-building-inspection"],
  },

  "handover-inspection": {
    slug: "handover-inspection",
    metaTitle: "Handover Inspection Adelaide | New Build Defect List, AS 4349.0",
    metaDescription:
      "Practical completion handover inspection Adelaide. Catch new-build defects before final payment. AS 4349.0 compliant. Licensed independent inspectors in 24 hours.",
    h1: "Handover Inspection Adelaide",
    intro:
      "Your last defence before final payment to the builder. An independent handover (practical completion) inspection on your new Adelaide build captures every defect the builder must remediate under the statutory warranty period.",
    priceFrom: 450,
    priceTo: 700,
    standard: "AS 4349.0",
    duration: "3 to 4 hours on site",
    turnaround: "48 hours from inspection to defect list",
    whoFor: [
      "Buyers of new Adelaide builds approaching practical completion",
      "Owner-builders preparing for occupancy certificate",
      "Anyone receiving a building contract handover",
      "Project home, custom build, or duplex/townhouse owners",
    ],
    whatsCovered: [
      {
        title: "Workmanship defects",
        body: "Paintwork, joinery alignment, tile lippage, grout finish, plaster cracks, skirting and architrave finish, window and door alignment.",
      },
      {
        title: "Functional checks",
        body: "Doors and windows operating cleanly, drawers and cupboards aligned, locks engaging, appliance fitment, plumbing leaks, drain function.",
      },
      {
        title: "Wet area compliance",
        body: "Tiling falls to drains, silicone integrity, waterproofing completion, taps and showers functional, hot water flow.",
      },
      {
        title: "Roof void, sub-floor, electrical",
        body: "Visible roof void condition, insulation completion, sub-floor ventilation, exposed wiring, smoke alarm fitment.",
      },
      {
        title: "External finishes",
        body: "Render, cladding, brick courses, gutter and downpipe install, driveway and path levels, fencing completion.",
      },
      {
        title: "Defect list for the builder",
        body: "Photographic, location-tagged defect list. Builder remediates before you sign off on practical completion and release final payment.",
      },
    ],
    asStandard: {
      code: "AS 4349.0",
      title: "Australian Standard for General Building Inspections",
      body: "AS 4349.0 covers general building inspections - the standard for handover, defect, and progress inspections that don't fall under the pre-purchase scope.",
    },
    whyMatter: [
      "South Australian statutory warranty for new builds is 5 years structural, 2 years general. Defects identified before practical completion are easier to enforce.",
      "Once you've signed off on practical completion and made final payment, the builder's incentive to fix issues drops dramatically.",
      "Defect lists from independent inspectors carry more weight than your own observations when negotiating with the builder.",
    ],
    faq: [
      {
        q: "When should I book a handover inspection?",
        a: "5 to 7 days before your scheduled practical completion meeting with the builder. This gives the builder time to remediate before final payment.",
      },
      {
        q: "What if the builder disagrees with the defect list?",
        a: "AS 4349.0 reports give photographic evidence and standard-aligned descriptions. Most builders accept the list. For disputes, the report supports HBCF (Home Building Compensation Fund) or QBCC-equivalent SA dispute processes.",
      },
      {
        q: "Can I do staged inspections through the build instead?",
        a: "Yes - see our staged building inspections service. Frame stage, lock-up, fixing, and practical completion is a five-stage option that catches issues earlier.",
      },
    ],
    related: ["staged-building-inspections", "defect-inspection", "pre-purchase-building-inspection"],
  },

  "staged-building-inspections": {
    slug: "staged-building-inspections",
    metaTitle: "Staged Building Inspections Adelaide | Slab Frame Lock-Up Fix-Out Handover",
    metaDescription:
      "Independent staged building inspections through your Adelaide build: slab, frame, lock-up, fixing, completion. Catch defects when they're cheap to fix.",
    h1: "Staged Building Inspections Adelaide",
    intro:
      "Independent eyes at every critical construction stage of your Adelaide build. Slab, frame, lock-up, fix-out, and practical completion - five inspection points where defects are cheap to fix and expensive to ignore.",
    priceFrom: 1500,
    priceTo: 2500,
    standard: "AS 4349.0",
    duration: "1.5 to 2 hours per stage",
    turnaround: "48 hours per stage report",
    whoFor: [
      "First-time new-build owners",
      "Custom builds where defects are easier to hide",
      "Project home builds where you suspect the builder is rushing",
      "Owner-builders engaging trades on a stage basis",
    ],
    whatsCovered: [
      {
        title: "Stage 1 - Slab / Footings",
        body: "Reinforcement, slab thickness, vapour barrier, set-out, levels, drainage cut-ins. Once the slab is poured, mistakes are very expensive.",
      },
      {
        title: "Stage 2 - Frame",
        body: "Frame to engineer's specifications, bracing, tie-downs, structural timber grade, window and door framing, roof truss install.",
      },
      {
        title: "Stage 3 - Lock-up (pre-line)",
        body: "Cladding, roof complete, windows installed, plumbing rough-in, electrical rough-in, insulation before plaster goes on.",
      },
      {
        title: "Stage 4 - Fix-out",
        body: "Joinery, kitchen, doors, internal trim, wet area tiling, paint preparation. Catches workmanship before final coats.",
      },
      {
        title: "Stage 5 - Practical completion",
        body: "Full handover inspection. Defect list for builder remediation before final payment.",
      },
    ],
    asStandard: {
      code: "AS 4349.0",
      title: "General Building Inspection Standard",
      body: "Each stage report is AS 4349.0 compliant. Reports can be used in builder negotiations, statutory warranty claims, and dispute resolution.",
    },
    whyMatter: [
      "The earlier a defect is identified, the cheaper it is to fix. A frame issue caught at stage 2 is a small remediation. The same issue caught at handover can be tens of thousands of dollars and weeks of delay.",
      "Many new-build defects are hidden by subsequent stages. A slab issue is invisible once the frame goes up. A plumbing rough-in error is invisible once the plaster goes on.",
      "Independent staged inspections give you written, photographic evidence at each stage - which the builder must address before progress payments are released.",
    ],
    faq: [
      {
        q: "Does staging slow down the build?",
        a: "No, if scheduled in advance. Inspectors attend within 24 to 48 hours of stage completion. Builders accustomed to staged inspections plan around them.",
      },
      {
        q: "Do I have to do all five stages?",
        a: "No. The most common combinations are slab + frame + handover (3-stage) or all five (5-stage). The bigger the build cost, the more stages typically make sense.",
      },
      {
        q: "What if the builder refuses to allow independent inspections?",
        a: "Most building contracts allow independent inspections. If your contract is unclear, your conveyancer can clarify before signing. A builder refusing reasonable independent inspection is a warning sign.",
      },
    ],
    related: ["handover-inspection", "defect-inspection", "pre-purchase-building-inspection"],
  },

  "defect-inspection": {
    slug: "defect-inspection",
    metaTitle: "Defect Inspection Adelaide | Targeted Report, AS 4349.7",
    metaDescription:
      "Adelaide defect inspection targeting specific known issues. AS 4349.7 compliant. Use for builder disputes, body corp issues, insurance claims, and second opinions.",
    h1: "Defect Inspection Adelaide",
    intro:
      "When you already know there is a problem - cracks getting worse, persistent dampness, builder dispute - a targeted defect inspection focuses on the specific issues and provides written, photographic evidence you can use in negotiation, claim, or dispute.",
    priceFrom: 350,
    priceTo: 800,
    standard: "AS 4349.7-2013",
    duration: "1 to 3 hours, scope-dependent",
    turnaround: "48 to 72 hours from inspection",
    whoFor: [
      "Owners in builder dispute or warranty claim",
      "Body corporates with recurring building defects",
      "Tenants documenting condition for end-of-lease or maintenance escalation",
      "Anyone needing a second opinion on a contested report",
    ],
    whatsCovered: [
      {
        title: "Scope defined by you",
        body: "You brief the inspector on the specific issue(s). Inspector confirms scope before attending.",
      },
      {
        title: "Forensic-style assessment",
        body: "Detailed photography, moisture readings, crack measurements, drone or borescope where needed.",
      },
      {
        title: "Cause analysis",
        body: "Best-effort identification of likely cause - movement, water ingress, workmanship, design, settlement.",
      },
      {
        title: "Remediation outline",
        body: "Indicative remediation approach (not a quote - that's a builder's job). Costs where realistically estimable.",
      },
      {
        title: "Written, photographic report",
        body: "Standalone document you can attach to a builder warranty claim, body corp meeting, insurance claim, or legal brief.",
      },
    ],
    asStandard: {
      code: "AS 4349.7-2013",
      title: "Inspections for Reasons Other Than Pre-Purchase",
      body: "AS 4349.7 covers inspections for purposes other than pre-purchase - the exact framework for defect, warranty, and dispute inspections.",
    },
    whyMatter: [
      "Builder warranty claims and insurance disputes hinge on documented evidence. An informal email is not evidence; an AS 4349.7 report is.",
      "Body corporates frequently underestimate the scale of building defects. An independent inspector report supports the levy or sinking fund decision.",
      "A second-opinion defect inspection costs less than the legal fees of a contested claim.",
    ],
    faq: [
      {
        q: "How is this different from a pre-purchase inspection?",
        a: "Pre-purchase is broad - every system, every surface, AS 4349.1. Defect is narrow - the specific issue(s) you brief the inspector on, AS 4349.7. Defect is usually cheaper but covers less.",
      },
      {
        q: "Will the report support a legal claim?",
        a: "Reports are written to AS 4349.7 standard and include photographic evidence. They support legal claims, but the inspector is not a legal expert - your solicitor advises on the legal merits.",
      },
      {
        q: "Can the inspector appear as an expert witness?",
        a: "Some inspectors in our network are qualified expert witnesses for SACAT and tribunal matters. Specify this need when requesting quotes and we'll match accordingly.",
      },
    ],
    related: ["handover-inspection", "pre-purchase-building-inspection", "staged-building-inspections"],
  },

  "asbestos-inspection": {
    slug: "asbestos-inspection",
    metaTitle: "Asbestos Inspection Adelaide | NATA-Accredited Sampling, Pre-1987 Homes",
    metaDescription:
      "Adelaide asbestos inspection and sampling. NATA-accredited lab analysis. Pre-1987 homes and pre-renovation testing. Independent licensed inspectors in 24 hours.",
    h1: "Asbestos Inspection Adelaide",
    intro:
      "Any Adelaide home built before 1987 likely contains asbestos somewhere. Roof sheeting, eaves, internal walls, vinyl floor backings, fences, sheds. An independent asbestos inspection identifies suspect materials and arranges NATA-accredited lab sampling where needed.",
    priceFrom: 400,
    priceTo: 800,
    standard: "Visual identification + NATA-accredited lab analysis",
    duration: "1.5 to 2 hours on site",
    turnaround: "Visual report in 48 hours; lab results 3 to 5 business days",
    whoFor: [
      "Owners planning renovations to a pre-1987 home",
      "Buyers of pre-1987 properties wanting asbestos register",
      "Body corporates with old asbestos cement cladding",
      "Anyone disturbed by suspect material during a DIY job",
    ],
    whatsCovered: [
      {
        title: "Visual identification",
        body: "Inspector walks the property identifying probable asbestos-containing materials: cement sheets, vinyl floors, internal lining boards, roof sheeting, eaves, mastic, lagging.",
      },
      {
        title: "Sample collection",
        body: "Where confirmation is needed, samples collected with proper PPE and lab-grade containment. Sent to NATA-accredited Adelaide laboratory.",
      },
      {
        title: "Asbestos register",
        body: "Photographic, location-tagged register of suspect materials. Useful for renovations, property records, body corp documentation.",
      },
      {
        title: "Risk assessment",
        body: "Friable vs bonded, accessible vs encapsulated, condition rating. Recommendations on management vs removal.",
      },
      {
        title: "Removal contractor referral",
        body: "If removal is needed, referral to SA EPA-licensed Class A or B asbestos removers. Inspectors don't do removal - that separation prevents the conflict-of-interest of an inspector finding work for themselves.",
      },
    ],
    asStandard: {
      code: "WHS Regulations 2012 (SA) + NATA accreditation",
      title: "Asbestos Inspection Framework",
      body: "Asbestos inspection follows SA Work Health and Safety regulations. Lab analysis must be by a NATA-accredited laboratory to be legally defensible.",
    },
    whyMatter: [
      "South Australia banned asbestos cement production in 1987 but bans on installation continued through 2003. Any pre-2004 home may contain some asbestos.",
      "Renovating, drilling, or sanding asbestos materials releases respirable fibres. Mesothelioma takes 20 to 40 years to develop.",
      "Disturbing asbestos without identification can trigger SA EPA fines and force full-property remediation.",
    ],
    faq: [
      {
        q: "Will my home definitely have asbestos?",
        a: "Any home built before 1987 should be assumed to contain asbestos until tested. Many post-1987 homes have residual asbestos from renovations.",
      },
      {
        q: "Does lab analysis cost extra?",
        a: "Yes. Lab fees are charged per sample by the NATA-accredited laboratory and are separate from the inspector's fee. The inspector quote usually includes a sample allowance - additional samples are itemised separately.",
      },
      {
        q: "Can I just leave asbestos alone?",
        a: "Bonded asbestos in good condition is generally safe if left undisturbed. Problems start with renovation, water damage, drilling, or weathering. An asbestos register lets you make informed decisions.",
      },
    ],
    related: ["pre-purchase-building-inspection", "defect-inspection", "mould-inspection"],
  },

  "mould-inspection": {
    slug: "mould-inspection",
    metaTitle: "Mould Inspection Adelaide | Air Sampling, Moisture Readings, Remediation Scope",
    metaDescription:
      "Adelaide mould inspection: visual, moisture readings, optional air sampling. Independent licensed inspectors. Pre-purchase, post-flood, ongoing damp issues.",
    h1: "Mould Inspection Adelaide",
    intro:
      "Visible mould is the tip of the problem. An independent mould inspection assesses the visible mould, identifies the moisture source feeding it, and where needed arranges air sampling to detect non-visible mould species.",
    priceFrom: 350,
    priceTo: 700,
    standard: "AS 4849.1 + AIOH guidelines",
    duration: "1.5 to 2 hours on site",
    turnaround: "48 hours visual; lab results 5 to 7 business days",
    whoFor: [
      "Buyers of homes with visible damp, mould, or condensation patterns",
      "Owners with persistent health symptoms in specific rooms",
      "Post-flood or post-leak properties",
      "Rental tenants documenting habitability concerns",
    ],
    whatsCovered: [
      {
        title: "Visual assessment",
        body: "Walkthrough of every room, sub-floor where accessible, roof void. Photographs and location-tags of visible mould.",
      },
      {
        title: "Moisture mapping",
        body: "Pin-type and pinless moisture meters used on walls, floors, ceilings, around wet areas and external walls. Maps the moisture source.",
      },
      {
        title: "Air sampling (optional add-on)",
        body: "Calibrated air samples sent to NATA-accredited lab for spore counts and species identification. Detects mould you can't see.",
      },
      {
        title: "Source diagnosis",
        body: "Best-effort identification of moisture cause: leaking plumbing, rising damp, condensation, sub-floor ventilation, weatherproofing failure.",
      },
      {
        title: "Remediation scope",
        body: "Indicative remediation steps, urgency rating, separation of cosmetic vs structural concerns. Referrals to specialist remediation companies if needed.",
      },
    ],
    asStandard: {
      code: "AS 4849.1 + AIOH guidelines",
      title: "Mould Assessment Framework",
      body: "Mould inspection follows Australian Institute of Occupational Hygienists (AIOH) guidelines for mould assessment in residential properties.",
    },
    whyMatter: [
      "Mould has measurable impacts on respiratory health, especially for asthmatics and immunocompromised occupants.",
      "Visible mould signals the moisture problem. Without finding the source, surface cleaning doesn't solve the issue and mould returns within weeks.",
      "Pre-purchase mould assessment is often missed in standard inspections - request it specifically if you see staining, smell mustiness, or know of past flooding.",
    ],
    faq: [
      {
        q: "Do I need air sampling or just visual?",
        a: "Visual assessment is enough for most cases of visible mould. Air sampling is recommended when (a) occupants report health symptoms with no obvious mould source, (b) post-remediation verification, (c) high-stakes property purchase decisions.",
      },
      {
        q: "Is the inspector also the remediation company?",
        a: "No. Inspectors in our network are inspection-only. Remediation referrals are to separate licensed remediation companies. This prevents the conflict-of-interest of an inspector finding work for themselves.",
      },
      {
        q: "Will mould affect my insurance?",
        a: "Most home insurance policies have specific exclusions for mould and rising damp unless caused by a covered event (e.g. sudden burst pipe). An inspection report supports any insurance claim or dispute.",
      },
    ],
    related: ["pre-purchase-building-inspection", "asbestos-inspection", "defect-inspection"],
  },
};
