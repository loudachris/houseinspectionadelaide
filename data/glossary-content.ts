export type GlossaryEntry = {
  slug: string;
  term: string;
  category: "structural" | "roof" | "wet-areas" | "sub-floor" | "pest" | "standards" | "process";
  short: string;
  body: string[];
  relatedSlugs?: string[];
  relatedServices?: string[];
};

export const GLOSSARY: Record<string, GlossaryEntry> = {
  "salt-damp": {
    slug: "salt-damp",
    term: "Salt damp",
    category: "structural",
    short:
      "Salt-laden moisture wicking up from the ground into masonry walls. Visible as white crystalline efflorescence on lower courses, blown render, or paint flaking on internal walls.",
    body: [
      "Salt damp is one of the most common defects in heritage Adelaide homes. The salts come from the soil; the moisture comes from inadequate or failed damp-proof courses (DPCs).",
      "Pre-1940s Adelaide homes were often built without a working DPC. Modern injection systems and chemical DPC treatments can address the issue, but the cost can be substantial and the underlying salts take years to fully leach out of affected masonry.",
      "Inspectors will look for efflorescence on lower brick courses, blown render at the base of walls, flaking paint on internal walls (especially behind furniture), and rotten skirting boards.",
    ],
    relatedSlugs: ["rising-damp", "efflorescence", "reactive-clay"],
    relatedServices: ["pre-purchase-building-inspection"],
  },
  "rising-damp": {
    slug: "rising-damp",
    term: "Rising damp",
    category: "structural",
    short:
      "Moisture rising vertically through masonry walls from the ground, in the absence of a working damp-proof course.",
    body: [
      "Rising damp differs from salt damp only in emphasis. Rising damp focuses on the water mechanism; salt damp focuses on the salts that water carries. The two terms are often used interchangeably in Adelaide inspections.",
      "Symptoms: tide-mark stains, blown plaster, swollen architraves, rotten skirting boards, musty smell at the base of walls.",
      "Treatment options include chemical DPC injection, physical DPC retrofit, or in some cases just improving sub-floor ventilation and drainage. Always get specialist advice before committing to a major DPC retrofit.",
    ],
    relatedSlugs: ["salt-damp", "damp-proof-course"],
  },
  "reactive-clay": {
    slug: "reactive-clay",
    term: "Reactive clay",
    category: "structural",
    short:
      "Clay soil that swells when wet and shrinks when dry. Common across Adelaide, causes seasonal footing movement and cracking.",
    body: [
      "Reactive clay soils are widespread in Adelaide, particularly in the suburbs east of the city, the foothills, and parts of the Adelaide Plains. The soil's volume changes dramatically between wet winter and dry summer.",
      "When the soil dries, the ground around your footings shrinks. The footings move with the soil, creating tension in the structure above. When the soil rewets, it expands - lifting the footings back, but rarely uniformly.",
      "The result is seasonal cracking. Inspectors will distinguish between active cracking (which moves with the seasons) and historic, settled cracking. Modern slab classifications (M / H1 / H2 / E for extreme) reflect site reactivity and dictate footing design.",
    ],
    relatedSlugs: ["slab-heave", "stepped-cracking", "footing-movement"],
    relatedServices: ["pre-purchase-building-inspection"],
  },
  "slab-heave": {
    slug: "slab-heave",
    term: "Slab heave",
    category: "structural",
    short:
      "Upward movement of a concrete slab caused by expanding reactive clay underneath. Often visible as raised floors, cracked tiles, jammed doors.",
    body: [
      "Slab heave occurs when reactive clay soil underneath a concrete slab absorbs water and expands. The slab moves with it. Heave can be uniform (whole slab rises evenly - less damaging) or differential (parts of the slab rise while others don't - very damaging).",
      "Common causes of localised heave: leaking under-slab plumbing, downpipes discharging next to footings, garden beds with heavy watering against the building.",
      "Inspectors will look for raised floor surfaces, cracked floor tiles, doors that won't close, gaps opening at skirting boards, and any patterns suggesting the slab has moved unevenly.",
    ],
    relatedSlugs: ["reactive-clay", "footing-movement"],
  },
  "stepped-cracking": {
    slug: "stepped-cracking",
    term: "Stepped cracking",
    category: "structural",
    short:
      "Cracks that step diagonally through brick mortar joints, following the path of least resistance. Common indicator of foundation movement.",
    body: [
      "When a brick wall is subjected to tension or settlement, the cracks tend to follow the mortar joints rather than break through the bricks themselves. The result is a stepped pattern, like a staircase.",
      "Stepped cracks are often more significant than straight horizontal cracks. They typically indicate movement at the footings rather than just shrinkage of the brickwork itself.",
      "Width matters: cracks under 1mm are usually cosmetic. Cracks 1-3mm warrant monitoring. Cracks over 3mm or visible from inside through the wall need engineer assessment.",
    ],
    relatedSlugs: ["reactive-clay", "footing-movement"],
  },
  spalling: {
    slug: "spalling",
    term: "Spalling",
    category: "structural",
    short:
      "Surface flaking or crumbling of brick, stone, or concrete. Usually caused by moisture penetration and freeze-thaw cycles or salt action.",
    body: [
      "Spalling in Adelaide is most commonly caused by salt damp working its way up through masonry, then drying and crystallising near the surface. The salt crystal growth physically pushes the surface material off.",
      "Spalled brick or stone has lost protective surface. Without intervention (cleaning, repointing, sometimes replacement), the underlying material continues to deteriorate.",
      "Inspectors will note spalled bricks at the base of walls, blown render, and any internal surfaces showing surface failure.",
    ],
    relatedSlugs: ["salt-damp", "efflorescence"],
  },
  efflorescence: {
    slug: "efflorescence",
    term: "Efflorescence",
    category: "structural",
    short:
      "White crystalline deposits that appear on masonry as moisture brings salts to the surface and they crystallise there.",
    body: [
      "Efflorescence is a symptom, not a cause. It tells you moisture is moving through the masonry and bringing salts with it. The salts crystallise as the water evaporates at the surface.",
      "Common locations: lower brick courses, around windows, on internal walls where DPC has failed, on chimneys.",
      "Brushing efflorescence off doesn't solve the underlying moisture problem. The salts will keep returning until the moisture source is addressed.",
    ],
    relatedSlugs: ["salt-damp", "rising-damp"],
  },
  "footing-movement": {
    slug: "footing-movement",
    term: "Footing movement",
    category: "structural",
    short:
      "Movement of the building's foundations, usually caused by reactive soil, water entry near footings, or undersized original footings.",
    body: [
      "Footing movement is the most common structural concern in Adelaide inspections. The reactive clay soils, ageing footings on heritage homes, and sub-standard drainage all contribute.",
      "Inspectors distinguish between active movement (continuing now, cracks growing) and historic settled movement (happened years ago, has stabilised). Active movement needs an engineer's assessment.",
      "Repair options range from improved drainage (cheap) through underpinning (very expensive, often $30,000+). The diagnosis matters because the wrong fix wastes money.",
    ],
    relatedSlugs: ["reactive-clay", "stepped-cracking", "slab-heave"],
  },
  "wall-ties": {
    slug: "wall-ties",
    term: "Cavity wall ties",
    category: "structural",
    short:
      "Metal connectors holding the inner and outer leaves of a cavity wall together. Can corrode and fail, especially in coastal or older homes.",
    body: [
      "Cavity wall construction (1920s-1970s in Adelaide) uses two leaves of brick separated by an air cavity. Metal wall ties span the cavity to keep both leaves stable.",
      "Older or coastal homes can have corroded wall ties. As ties fail, the outer leaf can bulge outward, develop horizontal cracks at regular intervals (matching the tie spacing), or in extreme cases collapse.",
      "Inspectors look for horizontal cracking at consistent intervals (typically 450mm or 600mm spacing), external wall bulging, or visible signs of internal tie corrosion.",
    ],
    relatedSlugs: ["spalling", "footing-movement"],
  },
  "ridge-capping": {
    slug: "ridge-capping",
    term: "Ridge capping",
    category: "roof",
    short:
      "The mortared or mechanical cap at the apex of a tile roof, sealing the top edge against weather.",
    body: [
      "Ridge capping in Adelaide is typically mortar-bedded - a strip of mortar laid over the apex tiles. Modern systems use mechanical ridge caps with screws, which last longer.",
      "Mortar capping degrades over 20-30 years. Crumbling capping mortar is a primary cause of roof leaks. Look for visible cracks, missing chunks, or moss growth indicating saturation.",
      "Re-pointing or rebedding the ridge is a standard maintenance item. Replacing the entire ridge capping with modern mechanical fixings is a larger investment but lasts much longer.",
    ],
    relatedSlugs: ["flashings", "tile-lippage"],
  },
  flashings: {
    slug: "flashings",
    term: "Flashings",
    category: "roof",
    short:
      "Metal or membrane strips that seal joints in the roof where it meets walls, chimneys, vents, or other penetrations.",
    body: [
      "Flashings are the second most common roof leak source after ridge capping. Anywhere the roof meets something else - chimney, vent, valley, wall - is a potential entry point for water.",
      "Adelaide roofs often have galvanised or zincalume flashings. Coastal properties get accelerated corrosion. Older flashings can perish, lift, or develop pinholes.",
      "Inspectors will check flashings at every penetration, around the chimney base, where roof slopes meet vertical walls, and in valleys (where two roof slopes converge).",
    ],
    relatedSlugs: ["ridge-capping"],
  },
  sarking: {
    slug: "sarking",
    term: "Sarking",
    category: "roof",
    short:
      "A foil or membrane installed under roof tiles or metal sheeting, providing a secondary water barrier and condensation control.",
    body: [
      "Modern Adelaide homes (post-2000s) typically have sarking installed under the roof covering. Older homes may have no sarking at all, or perished sarking that no longer functions.",
      "Sarking acts as a backup if the primary roof covering fails. It also reduces condensation in the roof void by separating warm internal air from cold roof surfaces.",
      "Inspectors check sarking continuity in the roof void where accessible, looking for tears, gaps, or missing coverage at the eaves.",
    ],
    relatedSlugs: ["ridge-capping", "flashings"],
  },
  "tile-lippage": {
    slug: "tile-lippage",
    term: "Tile lippage",
    category: "wet-areas",
    short:
      "Uneven height between adjacent tiles. A workmanship defect that can indicate poor installation or substrate movement.",
    body: [
      "Tile lippage is the height difference where two tiles meet. Small amounts (under 1mm) are within tolerance. Large lippage indicates poor installation, uneven substrate, or movement after laying.",
      "In bathrooms, lippage can create a trip hazard and is a sign the tiler didn't take care. In kitchens or floors, it's both a finish defect and a maintenance issue (lippage edges chip easily).",
      "Inspectors will note lippage but typically leave assessment of whether it's a defect requiring remediation to the conveyancer and buyer to negotiate.",
    ],
    relatedSlugs: ["waterproofing-membrane", "silicone-bead"],
  },
  "waterproofing-membrane": {
    slug: "waterproofing-membrane",
    term: "Waterproofing membrane",
    category: "wet-areas",
    short:
      "Liquid-applied or sheet membrane installed before tiling in wet areas, designed to stop water reaching the substrate.",
    body: [
      "All Australian wet areas built after 1988 require a continuous waterproofing membrane under tiles. The membrane goes up the walls in shower zones and across the entire floor.",
      "Failed waterproofing is the most common cause of sub-floor moisture damage in Adelaide homes. By the time visible damage appears (rotten skirting in the room behind, soft floors, sub-floor mould), the leak has often been active for months or years.",
      "Inspectors cannot see the membrane directly (it's under the tiles), so they look for indicators: visible water staining, sub-floor moisture, soft floors near showers, water marks on adjacent walls.",
    ],
    relatedSlugs: ["silicone-bead", "tile-lippage"],
    relatedServices: ["pre-purchase-building-inspection"],
  },
  "silicone-bead": {
    slug: "silicone-bead",
    term: "Silicone bead",
    category: "wet-areas",
    short:
      "Flexible sealant applied at the junction of tiles and bath/shower trays/walls. Critical secondary water barrier.",
    body: [
      "The silicone bead is the visible part of the wet area waterproofing system. It seals the moveable joint between tiles and fixtures (where movement would crack a rigid grout).",
      "Silicone perishes over 5-10 years. Old silicone shrinks, develops mould, and pulls away from surfaces. Once it's failed, water enters the joint, reaches the substrate, and the waterproofing membrane is your only line of defence.",
      "Replacing silicone is a 20-minute DIY job and one of the cheapest wet-area maintenance items. Inspectors will flag missing or perished silicone as a maintenance defect.",
    ],
    relatedSlugs: ["waterproofing-membrane"],
  },
  "sub-floor-ventilation": {
    slug: "sub-floor-ventilation",
    term: "Sub-floor ventilation",
    category: "sub-floor",
    short:
      "Air circulation under timber-framed floors. Inadequate ventilation causes timber decay, fungal growth, and termite-friendly conditions.",
    body: [
      "Homes with raised timber sub-floors (bearer + joist + stumps construction) need cross-ventilation to keep the sub-floor dry. Vents in the external walls allow air to flow under the floor.",
      "Common problems: vents blocked by garden beds, paving laid against the building, internal renovations that have removed cross-flow, or simply too few vents for the floor area.",
      "Inadequate ventilation creates the conditions termites love: dampness, decaying timber. It also leads to fungal decay of bearers and joists. Improving sub-floor ventilation is usually a cheaper fix than dealing with the consequences.",
    ],
    relatedSlugs: ["bearers-joists", "conducive-conditions"],
  },
  "bearers-joists": {
    slug: "bearers-joists",
    term: "Bearers and joists",
    category: "sub-floor",
    short:
      "The horizontal timber members supporting a raised timber floor. Bearers sit on stumps/piers; joists sit on bearers; floorboards sit on joists.",
    body: [
      "Bearers run perpendicular to joists. Bearers carry the joists; joists carry the floorboards or sheet flooring. Together they form the structural floor system.",
      "Failure modes: termite damage (especially Coptotermes acinaciformis in Adelaide), fungal decay from sub-floor moisture, splitting from overloading, sagging from undersized members or excessive spans.",
      "Inspectors crawl the sub-floor where accessible to inspect bearer and joist condition. Inaccessible sub-floor areas are explicitly noted as 'limitations' in the report.",
    ],
    relatedSlugs: ["sub-floor-ventilation", "coptotermes-acinaciformis"],
  },
  stumps: {
    slug: "stumps",
    term: "Stumps / piers",
    category: "sub-floor",
    short:
      "Vertical posts (timber, concrete, or brick) supporting bearers under a raised timber floor.",
    body: [
      "Stumps transfer the floor load to the ground. Timber stumps are common in older Adelaide homes; concrete stumps were used from the 1950s onwards; brick piers are typical in heritage homes.",
      "Failure modes: timber stumps rot at ground level (the most common failure point), settle into soft soil, get attacked by termites. Concrete stumps can crack or tilt. Brick piers can fail if mortar erodes.",
      "Restumping is one of the most disruptive repairs - it lifts and re-supports the floor. Costs can run from a few thousand for partial replacement up to $30,000+ for a full restump on a large home.",
    ],
    relatedSlugs: ["bearers-joists", "footing-movement"],
  },
  "coptotermes-acinaciformis": {
    slug: "coptotermes-acinaciformis",
    term: "Coptotermes acinaciformis",
    category: "pest",
    short:
      "The dominant subterranean termite species in metropolitan Adelaide. Highly destructive, builds large underground colonies.",
    body: [
      "Coptotermes acinaciformis is responsible for the majority of structural termite damage in South Australian homes. They build underground colonies that can number in the millions and tunnel underground to find timber food sources.",
      "Their preferred food is softwoods (pine framing) but they readily attack hardwoods too. They're often invisible from the surface - they tunnel up through timber from inside, leaving outer surfaces intact.",
      "Annual AS 4349.3 timber pest inspections are recommended for any Adelaide home with timber framing, decking, or sub-floor, particularly properties bordering bushland or with reactive clay soils.",
    ],
    relatedSlugs: ["mud-tubes", "frass", "termite-barrier"],
    relatedServices: ["pest-inspection", "termite-inspection"],
  },
  "mud-tubes": {
    slug: "mud-tubes",
    term: "Mud tubes",
    category: "pest",
    short:
      "Pencil-thin earthen tunnels built by subterranean termites to bridge from soil to timber while staying protected from air and predators.",
    body: [
      "Mud tubes are the most visible sign of subterranean termite activity. They appear on brick piers, foundation walls, external wall surfaces, or anywhere termites need to travel above ground.",
      "Active mud tubes contain workers; if you break one and termites are present, the colony is still active. Empty or dried-out tubes can indicate previous activity that's moved on.",
      "If you find mud tubes, don't disturb them further. Photograph them, note location, and book a pest inspection. Disturbing tubes causes termites to retreat and rebuild elsewhere - making treatment harder.",
    ],
    relatedSlugs: ["coptotermes-acinaciformis", "termite-barrier"],
  },
  frass: {
    slug: "frass",
    term: "Frass",
    category: "pest",
    short:
      "Sand-like termite excreta or borer dust. The visible accumulation of timber pellets indicates active timber pest activity.",
    body: [
      "Different timber pests produce different frass. Drywood termites push pellets out of small holes in timber. Timber borers produce powdery dust at the base of attacked timber.",
      "Frass piles below skirting boards, around door frames, or under furniture indicate active pest activity. The colour can hint at timber species being attacked.",
      "Subterranean termites (Coptotermes) don't typically produce visible frass - they keep waste inside their galleries. So frass usually points to drywood termites or borers, not the more destructive Coptotermes.",
    ],
    relatedSlugs: ["coptotermes-acinaciformis", "borer-flight-holes"],
  },
  alates: {
    slug: "alates",
    term: "Alates (winged termites)",
    category: "pest",
    short:
      "Reproductive flying termites that swarm to start new colonies. Their presence near your home signals an established colony nearby.",
    body: [
      "Alates emerge from established colonies, fly briefly, drop their wings, mate, and start new colonies. They look superficially like flying ants but have straight (not bent) antennae and four equal-sized wings.",
      "Alate swarms in Adelaide are most common in late spring and early summer (October to December), particularly on warm humid evenings after rain.",
      "Finding shed wings on windowsills, around external lights, or inside light fittings is a strong signal that a colony is established near your property. Book a pest inspection promptly.",
    ],
    relatedSlugs: ["coptotermes-acinaciformis", "mud-tubes"],
  },
  "borer-flight-holes": {
    slug: "borer-flight-holes",
    term: "Borer flight holes",
    category: "pest",
    short:
      "Small (1-2mm) round holes in timber where adult borers have emerged. Indicates either active or historic borer activity.",
    body: [
      "Different borer species create different hole sizes. Powderpost beetles create the smallest holes; common house borer creates 2-3mm holes; deathwatch and longhorn species are larger.",
      "Active vs historic borer matters. Active activity (frass present, fresh-looking holes) needs treatment. Historic activity (old weathered holes, no frass) may not need anything.",
      "Inspectors will tap timber, look for fresh frass below holes, and assess whether activity is current. Older Adelaide hardwood flooring often shows historic borer activity that's been dormant for decades.",
    ],
    relatedSlugs: ["frass", "coptotermes-acinaciformis"],
  },
  "conducive-conditions": {
    slug: "conducive-conditions",
    term: "Conducive conditions",
    category: "pest",
    short:
      "Site or building conditions that attract or sustain timber pests. Things like timber-to-ground contact, blocked vents, dampness, dense vegetation.",
    body: [
      "Termites need moisture and timber. Conducive conditions are anything on your property that provides both: timber sleepers in garden beds against the house, leaking taps near footings, decking with poor air gap, sub-floor ventilation blocked by raised garden beds, mulch piled against external walls.",
      "Reducing conducive conditions is the cheapest and most effective form of termite prevention. Often free if it's just moving garden beds back from walls, clearing sub-floor vents, or fixing leaking taps.",
      "Inspectors will list conducive conditions in the AS 4349.3 timber pest report, even when no active termites are found. They're the early warning system.",
    ],
    relatedSlugs: ["coptotermes-acinaciformis", "sub-floor-ventilation"],
  },
  "termite-barrier": {
    slug: "termite-barrier",
    term: "Termite barrier",
    category: "pest",
    short:
      "Chemical or physical barrier installed around a building to prevent termite entry. Required on new builds under AS 3660.",
    body: [
      "Modern Australian new builds must include a termite management system under AS 3660.1. Common systems: chemical soil treatment under and around the slab, physical barriers (mesh, granular), or chemically-treated timber framing.",
      "Existing homes can be retrofitted with chemical or bait-based systems. Effectiveness depends on installation quality and ongoing monitoring.",
      "Inspectors will note the presence or absence of a termite barrier, its age (chemical barriers degrade over 5-10 years), and whether the property has a current termite management plan.",
    ],
    relatedSlugs: ["coptotermes-acinaciformis", "as-4349-3"],
  },
  "as-4349-0": {
    slug: "as-4349-0",
    term: "AS 4349.0",
    category: "standards",
    short:
      "The Australian Standard for general building inspections. Covers handover, defect, and progress inspections outside of pre-purchase scope.",
    body: [
      "AS 4349.0-2007 is the parent standard for building inspections. It defines the general principles, format, and limitations that all sub-standards (4349.1, 4349.3, 4349.7) build on.",
      "If your inspection isn't a pre-purchase, timber pest, or specific-purpose type, it's typically conducted under AS 4349.0. Examples: handover inspections, progress inspections during a build, general condition assessments.",
      "Reports under AS 4349.0 follow the same format requirements: executive summary, scope, limitations, defects with photographs, recommendations.",
    ],
    relatedSlugs: ["as-4349-1", "as-4349-3", "as-4349-7"],
    relatedServices: ["handover-inspection", "staged-building-inspections"],
  },
  "as-4349-1": {
    slug: "as-4349-1",
    term: "AS 4349.1",
    category: "standards",
    short:
      "The Australian Standard for pre-purchase residential inspections. Defines scope, format, and limitations for the most common inspection type.",
    body: [
      "AS 4349.1-2007 (Inspections of Buildings, Part 1: Pre-Purchase Inspections - Residential Buildings) is the standard most Adelaide pre-purchase inspections are conducted to.",
      "It defines six areas of inspection: building interior, building exterior, roof exterior, roof space, sub-floor space, and site (within 30 metres of the building). It also defines what must be in the report: scope, limitations, defects, photographs, executive summary.",
      "Reports that don't reference AS 4349.1 may be substandard. If you need to use the report in negotiation or dispute, AS 4349.1 compliance is what gives it weight.",
    ],
    relatedSlugs: ["as-4349-0", "as-4349-3", "as-4349-7"],
    relatedServices: ["pre-purchase-building-inspection"],
  },
  "as-4349-3": {
    slug: "as-4349-3",
    term: "AS 4349.3",
    category: "standards",
    short:
      "The Australian Standard for timber pest inspections. Covers termites, borers, fungal decay, and conducive conditions.",
    body: [
      "AS 4349.3-2010 (Inspections of Buildings, Part 3: Timber Pest Inspections) is the standard for the pest portion of a building + pest combo, or a standalone pest inspection.",
      "Scope covers three categories: subterranean termites, drywood termites and borers, and wood-decay fungi. Plus an assessment of conducive conditions.",
      "Note: AS 4349.3 is condition assessment of an existing building. It's different from AS 3660 (termite management for new construction).",
    ],
    relatedSlugs: ["as-4349-0", "as-4349-1", "coptotermes-acinaciformis"],
    relatedServices: ["pest-inspection", "termite-inspection", "building-and-pest-inspection"],
  },
  "as-4349-7": {
    slug: "as-4349-7",
    term: "AS 4349.7",
    category: "standards",
    short:
      "The Australian Standard for inspections conducted for reasons other than pre-purchase. Covers defect, dispute, and warranty inspections.",
    body: [
      "AS 4349.7-2013 covers inspections that don't fit the pre-purchase mould. Common use cases: defect inspections after a building dispute, warranty claims under the SA Building Indemnity scheme, second-opinion inspections.",
      "Reports under AS 4349.7 are more targeted than AS 4349.1. The scope is defined by the client's brief, not a broad property condition assessment.",
      "If you're in a builder dispute or making a warranty claim, AS 4349.7 reports carry weight in dispute resolution forums and SACAT tribunal proceedings.",
    ],
    relatedSlugs: ["as-4349-0", "as-4349-1"],
    relatedServices: ["defect-inspection"],
  },
  "pre-purchase-inspection": {
    slug: "pre-purchase-inspection",
    term: "Pre-purchase inspection",
    category: "process",
    short:
      "An AS 4349.1 compliant inspection of a property before you commit to buying. The standard due diligence step in any Adelaide property purchase.",
    body: [
      "Pre-purchase inspections are typically arranged after an offer is made (during cooling-off) but before settlement. They give the buyer documented evidence of property condition to negotiate, request remediation, or rescind.",
      "Scope is broad: six areas (interior, exterior, roof, sub-floor, roof void, site) covering structural, weatherproofing, wet areas, drainage, ancillary buildings. Inspector spends 2-4 hours on site and delivers a written report within 48 hours.",
      "Most pre-purchase inspections in Adelaide are bundled with a timber pest inspection (AS 4349.3) as a 'building and pest' combo - one site visit, two reports, typically priced lower than separate bookings.",
    ],
    relatedSlugs: ["as-4349-1", "vendor-report", "practical-completion"],
    relatedServices: ["pre-purchase-building-inspection", "building-and-pest-inspection"],
  },
  "vendor-report": {
    slug: "vendor-report",
    term: "Vendor report",
    category: "process",
    short:
      "A pre-sale building inspection report commissioned by the seller and provided to prospective buyers.",
    body: [
      "Some Adelaide sellers commission their own pre-sale inspection and provide the report to buyers. This is increasingly common in tight markets where sellers want to short-circuit buyer due diligence delays.",
      "Vendor reports can be useful but should not replace a buyer-engaged independent inspection. The vendor's inspector was paid by the seller, which creates a potential conflict of interest, even if the inspector is generally reputable.",
      "Best practice: review the vendor report carefully, then commission your own independent inspection. The two reports together give you a much stronger position than relying on either alone.",
    ],
    relatedSlugs: ["pre-purchase-inspection", "as-4349-1"],
  },
  "practical-completion": {
    slug: "practical-completion",
    term: "Practical completion",
    category: "process",
    short:
      "The handover stage of a new build, when the builder declares the project complete and the owner is asked to make final payment.",
    body: [
      "Practical completion is the contractually-defined point where the build is essentially done - all major work complete, all systems functional, the owner can take possession. The builder typically requires final payment at this milestone.",
      "Independent handover inspection at practical completion is the most important inspection in a new build. It identifies defects the builder must remediate during the statutory warranty period.",
      "Once you sign off on practical completion and release final payment, the builder's motivation to fix issues drops significantly. The defect list from a handover inspection is your leverage.",
    ],
    relatedSlugs: ["as-4349-0", "statutory-warranty"],
    relatedServices: ["handover-inspection", "staged-building-inspections"],
  },
  "statutory-warranty": {
    slug: "statutory-warranty",
    term: "Statutory warranty (SA Building Indemnity)",
    category: "process",
    short:
      "Legally-mandated warranties on new building work in South Australia, providing protection for structural and general defects.",
    body: [
      "South Australian residential building work has statutory warranty protection under the Building Work Contractors Act and the SA Building Indemnity scheme. Structural defects: 5 years. General defects: 2 years (or sometimes more depending on the work).",
      "If the builder fails to remediate covered defects within the warranty period, you can claim through SA Building Indemnity Insurance (which the builder is required to hold).",
      "An AS 4349.7 defect inspection report supports warranty claims. The more clearly documented the defect and its cause, the smoother the claim process.",
    ],
    relatedSlugs: ["practical-completion", "as-4349-7"],
    relatedServices: ["handover-inspection", "defect-inspection"],
  },
  "cooling-off-period": {
    slug: "cooling-off-period",
    term: "Cooling-off period",
    category: "process",
    short:
      "Two clear business days from contract signing during which a residential property buyer can rescind without penalty (subject to a small forfeit).",
    body: [
      "South Australian cooling-off is set by the Land and Business (Sale and Conveyancing) Act. Two clear business days from receipt of the signed contract - weekends and SA public holidays don't count.",
      "Rescission must be in writing, before the deadline. A small portion of the deposit (typically $100) is forfeited; the balance is refunded.",
      "Cooling-off doesn't apply to auction purchases (you waive it by bidding) or to purchases where you've waived it in writing. For everything else, it's a critical buffer to confirm finance, get a building inspection, and review the Form 1 vendor's statement.",
    ],
    relatedSlugs: ["pre-purchase-inspection", "form-1"],
  },
  "form-1": {
    slug: "form-1",
    term: "Form 1 (vendor's statement)",
    category: "process",
    short:
      "South Australian statutory vendor disclosure document. Sellers must serve a Form 1 on buyers, detailing material facts about the property.",
    body: [
      "Form 1 is the SA equivalent of the Section 32 statement in other states. It contains required disclosures: title information, planning and zoning, encumbrances, body corporate (if strata), notices issued against the property.",
      "Cooling-off doesn't start until you've received a complete Form 1. Sellers who provide an incomplete Form 1 expose themselves to extended buyer rescission rights.",
      "Your conveyancer reviews the Form 1 in detail. The building inspection report is a separate document but they work together to give you complete due diligence on the property.",
    ],
    relatedSlugs: ["cooling-off-period", "pre-purchase-inspection"],
  },
  "bal-rating": {
    slug: "bal-rating",
    term: "BAL rating",
    category: "process",
    short:
      "Bushfire Attack Level rating assigned to properties in bushfire-prone areas. Drives construction requirements under AS 3959.",
    body: [
      "BAL ratings range from BAL-LOW (negligible risk) through BAL-12.5, 19, 29, 40, and BAL-FZ (Flame Zone - highest risk). Adelaide Hills properties commonly sit in BAL-12.5 to BAL-40.",
      "Higher BAL ratings drive stricter construction requirements: ember guards on roofs, fire-resistant cladding, BAL-rated windows and doors, defensible spaces.",
      "For Hills purchases, inspectors verify whether existing construction complies with the property's BAL rating. Non-compliant retrofits or extensions can create insurance and resale problems.",
    ],
    relatedSlugs: ["heritage-register"],
    relatedServices: ["pre-purchase-building-inspection"],
  },
  "heritage-register": {
    slug: "heritage-register",
    term: "Heritage register",
    category: "process",
    short:
      "Government listing of heritage-significant properties. Heritage listing brings restrictions on alterations and additional approval requirements.",
    body: [
      "South Australia maintains state and local heritage registers. Properties on either list have layered consent requirements for alterations - including some interior work in heritage-listed homes.",
      "Past renovations on heritage properties were sometimes done without correct heritage approval. This creates legal complications at purchase: the new owner can be required to remediate non-compliant work at their cost.",
      "When buying a heritage-listed Adelaide property, request a heritage-experienced inspector. They can interpret the heritage register listings alongside the standard pre-purchase report.",
    ],
    relatedSlugs: ["pre-purchase-inspection"],
  },
  "strata-report": {
    slug: "strata-report",
    term: "Strata report",
    category: "process",
    short:
      "A review of body corporate records, finances, and meeting minutes for a property under strata title. Separate from a building inspection.",
    body: [
      "Strata reports are typically commissioned through your conveyancer, not your building inspector. They cover body corporate finances, sinking fund balances, special levies, ongoing disputes, and proposed major works.",
      "When buying an Adelaide apartment or townhouse under strata, a strata report is essential alongside the building inspection. The strata report tells you about the building you're buying into financially; the building inspection tells you about your specific unit's physical condition.",
      "Older strata complexes can have very low sinking funds against very high upcoming maintenance needs. The strata report surfaces this risk.",
    ],
    relatedSlugs: ["pre-purchase-inspection"],
  },
  rcd: {
    slug: "rcd",
    term: "RCD (Residual Current Device)",
    category: "process",
    short:
      "Safety switch that cuts power instantly if it detects current leaking to earth. Required on most circuits in modern Australian homes.",
    body: [
      "RCD protection is mandated on power and lighting circuits in new homes under AS/NZS 3000 (the Wiring Rules). Older Adelaide homes may have an RCD only on power circuits, or no RCD at all (just old ceramic-fuse switchboards).",
      "Inspectors will note switchboard age and visible RCD protection. If the switchboard is old (no RCDs, ceramic fuses), it's a flag for upcoming electrical upgrade costs - typically $1,500-$3,000 for a switchboard replacement.",
      "Note: a building inspection is not a full electrical compliance test. If the inspector flags concerns, engage a licensed electrician for a Wiring Rules compliance test.",
    ],
    relatedSlugs: [],
  },
  "damp-proof-course": {
    slug: "damp-proof-course",
    term: "Damp-proof course (DPC)",
    category: "structural",
    short:
      "An impermeable layer in masonry walls that prevents moisture rising from the ground. Pre-1940s homes often lack a working DPC.",
    body: [
      "A working DPC sits a few courses up from ground level, breaking the capillary path that allows water to wick upward through masonry. Modern DPCs are bitumen, polythene, or chemical injection. Older homes used slate, bituminised felt, or lead - all of which can fail over time.",
      "Failed DPCs cause rising damp and salt damp. Symptoms appear as tide-mark stains on lower walls, blown plaster internally, efflorescence externally.",
      "Retrofit options: chemical injection DPC (common, moderately effective), physical insertion (highly effective but very expensive), or in some cases sufficient improvement of sub-floor ventilation and drainage to make the DPC issue moot.",
    ],
    relatedSlugs: ["salt-damp", "rising-damp"],
  },
};
