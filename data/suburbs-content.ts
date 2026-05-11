export type SuburbContent = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  propertyTypes: string;
  localIssues: { title: string; body: string }[];
  notes: string;
  nearby: string[];
};

export const SUBURB_CONTENT: Record<string, SuburbContent> = {
  glenelg: {
    slug: "glenelg",
    name: "Glenelg",
    metaTitle: "Building Inspections Glenelg | Bayside Adelaide, 3 Quotes in 24hrs",
    metaDescription:
      "Independent building inspections Glenelg and bayside Adelaide. Salt damp, coastal corrosion, heritage stone - we match you with the right inspector for your property.",
    intro:
      "Glenelg and the surrounding bay suburbs (Glenelg North, Glenelg South, Glenelg East, Brighton, Somerton Park) carry a specific set of building risks tied to the coastal environment. Salt damp, accelerated weathering, and corrosion of metal fixings are real issues for any Glenelg property older than about 20 years.",
    propertyTypes:
      "Glenelg is a mix of 1900s-1930s bluestone and brick villas (concentrated near the foreshore and esplanade), 1960s-1970s brick veneer along the inland streets, and a heavy concentration of newer apartments and townhouses between Jetty Road and the foreshore. Each carries its own inspection priorities.",
    localIssues: [
      {
        title: "Salt damp",
        body: "Salt-laden moisture wicking up from the ground into masonry walls. Visible as efflorescence (white crystalline staining) on lower courses, blown render, or paint flaking. Common in older Glenelg homes without effective damp-proof courses.",
      },
      {
        title: "Roof and gutter corrosion",
        body: "Salt-spray accelerates corrosion of unprotected metal. Gutter sagging, fascia rust streaks, and roof flashing perished earlier than inland suburbs. Inspectors will note any galvanic corrosion at dissimilar-metal joints.",
      },
      {
        title: "Stone weathering",
        body: "Bluestone and limestone facades on heritage Glenelg homes weather differently to brick. Look for mortar erosion, stone spalling, and movement around window openings.",
      },
      {
        title: "Apartment complex defects",
        body: "Newer Glenelg apartment blocks (especially 2010s mid-rise) have a documented history of waterproofing defects, balustrade compliance issues, and combustible cladding concerns. Pre-purchase strata reports are essential.",
      },
    ],
    notes:
      "Glenelg also covers properties in cooling-off period pressure due to high turnover - we routinely deliver three quotes inside 4 to 6 hours during business days.",
    nearby: ["unley", "mitcham", "seaford"],
  },

  unley: {
    slug: "unley",
    name: "Unley",
    metaTitle: "Building Inspections Unley | Heritage Adelaide, Independent & AS 4349.1",
    metaDescription:
      "Building inspections Unley and surrounding heritage suburbs. Stone villa specialists in our network. Independent inspectors matched in 24 hours.",
    intro:
      "Unley and surrounding suburbs (Parkside, Hyde Park, Malvern, Goodwood, Black Forest, Highgate) are the heart of heritage Adelaide. Sandstone, bluestone, and rendered cottages from the 1880s through 1920s dominate the streetscape. They are beautiful and they are unforgiving when issues are missed.",
    propertyTypes:
      "Predominantly pre-1920s heritage stone villas and cottages with later additions. Many properties have been extensively renovated, often without full council approval, which can mask significant structural and waterproofing issues. Newer infill duplexes and townhouses are scattered through the area.",
    localIssues: [
      {
        title: "Heritage stone movement",
        body: "Reactive clay soils underneath Unley homes cause seasonal foundation movement. Stone walls handle this poorly - cracks open and close with the seasons. Inspectors look for active vs settled cracks.",
      },
      {
        title: "Rising damp in stonework",
        body: "Many Unley villas predate damp-proof courses. Rising damp shows as efflorescence, blown plaster, and rotting skirting boards on internal walls.",
      },
      {
        title: "Bootleg renovations",
        body: "Unley has a long history of additions and renovations without full approval. Inspectors flag structural concerns from non-compliant additions, including illegal under-house excavations for cellars.",
      },
      {
        title: "Roof structure on extensions",
        body: "Extensions to heritage homes frequently have undersized rafters, inadequate tie-downs, or poor flashing to the original roof. Common source of water ingress.",
      },
    ],
    notes:
      "Request a heritage-experienced inspector when briefing us. Not all general inspectors are confident reading 130-year-old stonework.",
    nearby: ["norwood", "mitcham", "north-adelaide"],
  },

  norwood: {
    slug: "norwood",
    name: "Norwood",
    metaTitle: "Building Inspections Norwood | Eastern Suburbs, Adelaide Heritage",
    metaDescription:
      "Independent building inspections Norwood and inner-east Adelaide. Heritage cottage specialists, AS 4349.1 reports. Three quotes inside 24 hours.",
    intro:
      "Norwood and the eastern fringe suburbs (Kensington, Marryatville, Stepney, Maylands, Trinity Gardens) share Unley's heritage character but with a slightly later average build date and a heavy concentration of converted shops, terraces, and semi-detached pairs. Inspection priorities reflect that mix.",
    propertyTypes:
      "1900s-1930s detached cottages, semi-detached pairs, and converted shop-front-with-residence buildings. Many The Parade and surrounding commercial conversions retain mixed-use complications. Newer infill homes and townhouses concentrated in pockets.",
    localIssues: [
      {
        title: "Semi-detached party wall defects",
        body: "Norwood has many 1900s semi-detached pairs. Party walls (shared internal walls) commonly have issues with sound transmission, fire compliance, and moisture migration between properties.",
      },
      {
        title: "Mixed-use conversions",
        body: "Former shopfronts converted to residential have specific issues: high ceilings retained as cold zones, poor insulation, original commercial drainage retained for residential use.",
      },
      {
        title: "Heritage footings",
        body: "Reactive clay soils combined with old stone footings cause seasonal movement. Cracks at door frames and ceiling cornices are the visible symptom.",
      },
      {
        title: "Bathroom and kitchen retrofits",
        body: "Wet-area renovations to heritage homes frequently miss modern waterproofing standards. Subfloor moisture damage from leaking wet areas is the most common 'invisible' defect in Norwood inspections.",
      },
    ],
    notes:
      "If you're buying a converted commercial property, request our inspectors who hold both residential and commercial inspection experience.",
    nearby: ["unley", "campbelltown", "north-adelaide"],
  },

  campbelltown: {
    slug: "campbelltown",
    name: "Campbelltown",
    metaTitle: "Building Inspections Campbelltown SA | Eastern Adelaide, AS 4349.1",
    metaDescription:
      "Building inspections Campbelltown and eastern suburbs Adelaide. Post-war and 1960s-1980s brick veneer specialists. Independent inspectors in 24 hours.",
    intro:
      "Campbelltown (Newton, Paradise, Tranmere, Athelstone, Magill, Hectorville) is established post-war Adelaide. Brick veneer construction dominates, mostly 1950s through 1980s. Property turnover is brisk and the inspection priorities focus on the workmanship and weatherproofing of mid-century construction.",
    propertyTypes:
      "Single-storey 1950s-1980s brick veneer is the workhorse. Larger 1970s-1980s split-level homes are common on the elevated streets. Newer infill detached homes scattered through the area. Some 1920s-1930s villas in the older streets near Magill Road.",
    localIssues: [
      {
        title: "Cavity wall ties (1950s-1970s)",
        body: "Some Campbelltown homes from this era used wall ties that have since corroded. Visible as horizontal cracking at regular intervals on external walls. Structural concern - inspectors will assess.",
      },
      {
        title: "Roof tile condition",
        body: "Original 1960s-1970s concrete and clay roof tiles are now reaching end of life. Visible as crumbling tile edges, moss growth, and broken ridge capping mortar.",
      },
      {
        title: "Sub-floor moisture (timber-floor homes)",
        body: "Older Campbelltown homes with timber sub-floor often have blocked vents, raised garden beds against the building, or leaking external taps causing sub-floor dampness and timber decay.",
      },
      {
        title: "Aluminium window seal failure",
        body: "1970s-1980s aluminium-framed windows often have perished sealing gaskets. Visible as water ingress at window heads or sills during heavy rain.",
      },
    ],
    notes:
      "Campbelltown property is often a strong value proposition for first-home buyers - inspection focus is usually about identifying the cost of upcoming maintenance rather than deal-breaker defects.",
    nearby: ["norwood", "mount-barker", "prospect"],
  },

  "mount-barker": {
    slug: "mount-barker",
    name: "Mount Barker",
    metaTitle: "Building Inspections Mount Barker | Adelaide Hills Specialist Inspectors",
    metaDescription:
      "Building inspections Mount Barker and Adelaide Hills. Termite-corridor specialists, reactive soil expertise. Independent inspectors matched in 24 hours.",
    intro:
      "Mount Barker and the Adelaide Hills (Hahndorf, Littlehampton, Nairne, Bridgewater, Stirling, Aldgate) share a set of building risks specific to elevated, forested, reactive-clay environments. New estates are mixed with heritage stone cottages and 1980s rural blocks. Each demands different inspector expertise.",
    propertyTypes:
      "Mount Barker proper has heavy new-estate growth - 2010s-2020s slab-and-frame project homes. Surrounding hills suburbs are a mix of pre-1900 stone cottages, 1970s-1990s timber-framed rural homes, and modern hillside builds. Hectare-plus lots are common.",
    localIssues: [
      {
        title: "Termite corridors",
        body: "Adelaide Hills foothills are a documented termite corridor. Coptotermes acinaciformis activity is common, especially on properties bordering bushland or with timber-to-ground contact. Annual termite inspection is standard.",
      },
      {
        title: "Reactive soil movement",
        body: "Hills clay soils swing dramatically between wet and dry seasons. Even modern slab-and-frame homes show seasonal cracking. Inspectors will assess footing depth and slab classification.",
      },
      {
        title: "Bushfire compliance (BAL ratings)",
        body: "Hills properties typically sit in Bushfire Attack Level (BAL) zones requiring specific construction details. Inspectors verify BAL-compliant cladding, eaves, and window/door rating.",
      },
      {
        title: "Off-grid utilities",
        body: "Many rural Hills properties have rainwater tanks, septic systems, or solar-only power. Inspectors check tank linings, pump condition, septic field drainage, and solar inverter age.",
      },
    ],
    notes:
      "Bushfire-affected properties require specific certification - request a BAL-experienced inspector for any Hills purchase.",
    nearby: ["stirling", "campbelltown", "victor-harbor"],
  },

  mitcham: {
    slug: "mitcham",
    name: "Mitcham",
    metaTitle: "Building Inspections Mitcham SA | Southern Adelaide, AS 4349.1",
    metaDescription:
      "Independent building inspections Mitcham and inner-south Adelaide. Mid-century brick veneer and heritage stone specialists. Three quotes in 24 hours.",
    intro:
      "Mitcham (Hawthorn, Lower Mitcham, Springfield, Kingswood, Torrens Park, Belair fringe) sits at the foothills transition - established 1920s-1960s suburbia with some elevated streets running up into the hills. Inspection priorities blend inner-suburb heritage with hills-edge soil and bushfire considerations.",
    propertyTypes:
      "1920s-1930s bungalow-style cottages along the lower streets, expanding to 1950s-1970s brick veneer and split-level homes in the elevated areas. Newer infill spread across most streets. Older sub-floor construction is common.",
    localIssues: [
      {
        title: "Slope drainage",
        body: "Elevated Mitcham streets carry surface water and storm flow down the hills. Properties on slope frequently have inadequate stormwater management, leading to sub-floor flooding and footing undermining.",
      },
      {
        title: "Retaining walls",
        body: "Many Mitcham homes have substantial garden retaining walls. Lean, bowing, or cracking retaining walls are a structural concern that's often missed in cosmetic walkthroughs.",
      },
      {
        title: "Heritage roof structure",
        body: "Pre-1940 bungalow roofs were not designed for modern roof loads (tile retrofits, solar panels). Inspectors will look for sagging, undersized rafters, and inadequate tie-downs.",
      },
      {
        title: "Termite proximity",
        body: "Mitcham's hills-edge position means termite activity is more common here than in flat inner-suburb areas. Pest inspection alongside building is strongly recommended.",
      },
    ],
    notes:
      "Hillside Mitcham properties often need both standard building inspection and a structural engineer review of retaining walls - we can match you with inspectors who hold both qualifications.",
    nearby: ["unley", "norwood", "stirling"],
  },

  gawler: {
    slug: "gawler",
    name: "Gawler",
    metaTitle: "Building Inspections Gawler | Northern Adelaide, Heritage & New Build",
    metaDescription:
      "Building inspections Gawler and northern outer Adelaide. Heritage stone and new estate specialists. Independent inspectors matched in 24 hours.",
    intro:
      "Gawler and surrounding outer-north suburbs (Evanston, Hewett, Roseworthy, Willaston, Munno Para) mix Gawler's heritage town centre with vast 2010s-2020s new estates. Inspection priorities differ markedly by build era and exact location.",
    propertyTypes:
      "Heritage Gawler proper has 1880s-1920s stone and brick cottages, many heritage-listed. The surrounding new estates are predominantly 2010s-onward project homes on small lots. Some 1970s-1990s detached homes scattered between.",
    localIssues: [
      {
        title: "Heritage stone in town",
        body: "Older Gawler homes share the same heritage stone issues as Unley/Norwood: salt damp, mortar erosion, lime mortar repointing failures. Heritage-experienced inspectors essential.",
      },
      {
        title: "New estate slab quality",
        body: "Some Gawler new estates have documented issues with slab classifications not matching the reactive clay underneath. Cracking footings and visible slab heave have been reported.",
      },
      {
        title: "Project home defects",
        body: "Volume builders dominate the new estates. Common project-home defects include shower waterproofing, sub-floor sealing on raised slabs, and tile lippage. Handover inspections are critical.",
      },
      {
        title: "Distance from inspector base",
        body: "Some Adelaide-based inspectors charge a travel premium for Gawler. Our network includes northern-based inspectors avoiding that surcharge - we route requests accordingly.",
      },
    ],
    notes:
      "For new-build Gawler properties, request our staged inspection option - 5 stages from slab to handover catches issues early when they're cheap to fix.",
    nearby: ["prospect", "north-adelaide", "campbelltown"],
  },

  "north-adelaide": {
    slug: "north-adelaide",
    name: "North Adelaide",
    metaTitle: "Building Inspections North Adelaide | Heritage Specialist Inspectors",
    metaDescription:
      "Building inspections North Adelaide. Heritage stone, terrace, and apartment specialists. Independent licensed inspectors matched in 24 hours.",
    intro:
      "North Adelaide is heritage Adelaide concentrated. Stone bluestone villas, sandstone terraces, and the city's most preserved 1870s-1910s streetscapes sit alongside newer apartment developments. Inspector expertise must match the property era and type.",
    propertyTypes:
      "Predominantly 1860s-1910s stone-and-iron heritage homes (single and double-storey), 1900s-1920s terrace pairs along Tynte Street and surrounds, and a heavy concentration of converted commercial buildings and newer apartment complexes near the city border.",
    localIssues: [
      {
        title: "Stone wall integrity",
        body: "150-year-old stonework requires specialised assessment. Look for cracked stones, blown mortar joints, render concealing structural cracks, and water-staining indicating long-term wall saturation.",
      },
      {
        title: "Terrace party walls",
        body: "North Adelaide terraces share party walls with neighbours. Shared walls have specific compliance, fire, and moisture-transmission issues that affect both properties.",
      },
      {
        title: "Heritage listed renovations",
        body: "Heritage-listed properties have layered consent requirements. Past renovations without correct heritage approval can create legal complications at purchase. Inspectors flag visible non-compliant work.",
      },
      {
        title: "Apartment building quality",
        body: "Newer North Adelaide apartments share the broader Australian apartment-quality concerns: waterproofing, balustrades, fire compliance, combustible cladding. Strata reports and engineer review are recommended in addition to a building inspection.",
      },
    ],
    notes:
      "For heritage-listed North Adelaide properties, brief us specifically - we have inspectors with heritage register experience who can interpret listings alongside the standard report.",
    nearby: ["prospect", "norwood", "unley"],
  },

  prospect: {
    slug: "prospect",
    name: "Prospect",
    metaTitle: "Building Inspections Prospect | Inner North Adelaide, AS 4349.1",
    metaDescription:
      "Independent building inspections Prospect and inner-north Adelaide. Heritage cottage and mid-century specialists. Three quotes in 24 hours.",
    intro:
      "Prospect (Nailsworth, Sefton Park, Fitzroy, Ovingham, Broadview) is a tight band of inner-north Adelaide that's seen heavy renovation activity in the last decade. The mix of original heritage stock, mid-century brick, and recent renovations creates a specific inspection profile.",
    propertyTypes:
      "1910s-1930s bungalow-style cottages and stone-and-iron villas along the older streets. 1950s-1970s brick veneer scattered through the post-war pockets. A heavy concentration of recently-renovated properties where original details have been retained and modern wet areas added.",
    localIssues: [
      {
        title: "Renovation work-quality",
        body: "Prospect has seen a wave of high-cost renovations. Quality varies wildly. Inspectors look closely at waterproofing of new wet areas, integration of new and old structural elements, and adherence to AS 3500 plumbing.",
      },
      {
        title: "Sub-floor moisture",
        body: "Many Prospect cottages retain timber sub-floors. Garden bed levels raised against external walls during landscaping commonly block sub-floor vents and trap moisture - leading to timber decay and ongoing damp.",
      },
      {
        title: "Heritage extension transitions",
        body: "Original cottage at the front, modern extension at the back is the standard Prospect renovation pattern. The transition between old and new structure is where issues hide.",
      },
      {
        title: "Salt damp",
        body: "Older Prospect homes share heritage salt damp issues - efflorescence on lower walls, blown render, paint flaking on internal walls.",
      },
    ],
    notes:
      "When buying a recently-renovated Prospect property, request that the inspector look closely at the renovation's waterproofing and structural integration - that's where the defects are.",
    nearby: ["north-adelaide", "norwood", "gawler"],
  },

  stirling: {
    slug: "stirling",
    name: "Stirling",
    metaTitle: "Building Inspections Stirling SA | Adelaide Hills, Bushfire-Zone Specialists",
    metaDescription:
      "Building inspections Stirling and surrounding Adelaide Hills. Bushfire-rated, termite-corridor specialist inspectors. Three quotes in 24 hours.",
    intro:
      "Stirling and the upper-hills suburbs (Aldgate, Bridgewater, Crafers, Heathfield, Mylor) sit deep in the Adelaide Hills. The architecture ranges from 1880s English-influenced cottages to 1970s alpine-inspired hill homes to modern luxury custom builds. Bushfire risk and termite pressure dominate inspection priorities.",
    propertyTypes:
      "Pre-1900 heritage stone cottages in Stirling village proper. 1970s-1990s timber-framed hills homes spread across the surrounding bush blocks. Modern (2010s-onwards) BAL-rated custom builds in newer areas. Many properties sit on hectare-plus blocks.",
    localIssues: [
      {
        title: "Bushfire Attack Level (BAL) compliance",
        body: "Stirling properties typically sit in BAL 12.5 to BAL FZ zones requiring specific cladding, eaves, window, and door specifications. Inspector verifies BAL compliance, especially for older retrofits.",
      },
      {
        title: "Active termite presence",
        body: "Hills bushland is prime termite habitat. Annual inspection is standard, but at-risk properties (timber-framed, near bushland, with timber-to-ground contact) need 6-monthly checks.",
      },
      {
        title: "Heritage stone cottages",
        body: "Stirling's 1880s-era stone cottages have specific issues with frost movement (yes, frost in Adelaide Hills), aged lime mortar, and Victorian-era roof structures.",
      },
      {
        title: "Off-grid systems",
        body: "Rainwater tanks, septic, and standalone solar are common. Each needs separate inspection - tank lining, septic field, solar inverter age and condition.",
      },
    ],
    notes:
      "For any Stirling or upper-hills purchase, request a BAL-experienced and termite-expert inspector. The standard pre-purchase scope can miss bushfire and termite specifics.",
    nearby: ["mount-barker", "mitcham", "victor-harbor"],
  },

  seaford: {
    slug: "seaford",
    name: "Seaford",
    metaTitle: "Building Inspections Seaford SA | Southern Coast, Salt-Damp Specialists",
    metaDescription:
      "Building inspections Seaford and southern coastal Adelaide. Salt-damp, coastal corrosion specialist inspectors. Three quotes in 24 hours.",
    intro:
      "Seaford and the southern coastal corridor (Seaford Rise, Seaford Heights, Moana, Maslin Beach, Aldinga) are dominated by new and mid-century coastal homes. Salt-laden air and reactive clay soils combine to create a specific inspection profile.",
    propertyTypes:
      "1980s-1990s brick veneer scattered through the older streets. Heavy concentration of 2000s-2020s project homes in the newer estates. Some original beach shacks and 1960s holiday homes near the foreshore. New 2-bedroom investor-targeted townhouses are increasing.",
    localIssues: [
      {
        title: "Salt damp and salt spray",
        body: "Coastal homes get hammered by salt-laden moisture. Lower brick courses absorb salt, render fails, paint flakes. Metal fittings corrode faster than inland.",
      },
      {
        title: "Slab on reactive clay",
        body: "Seaford reactive clay soils combined with sometimes-inadequate slab classifications produce visible heaving and cracking, particularly in 2000s-2010s estate homes.",
      },
      {
        title: "Roof and gutter corrosion",
        body: "Metal roofing, fascia, and gutters age fast in the coastal environment. Inspectors look for rust streaks, perished flashings, and gutter pin-holing.",
      },
      {
        title: "Window seal failure",
        body: "Aluminium window seals fail faster in coastal locations. Visible as water ingress at window heads/sills, condensation between double-glazing, or fogged glass.",
      },
    ],
    notes:
      "If you're buying a Seaford project home (2010s onwards), request an inspector experienced with volume builder defects - the patterns are predictable but require knowing where to look.",
    nearby: ["aldinga", "morphett-vale", "victor-harbor"],
  },

  "victor-harbor": {
    slug: "victor-harbor",
    name: "Victor Harbor",
    metaTitle: "Building Inspections Victor Harbor | Fleurieu Peninsula, Coastal Specialists",
    metaDescription:
      "Building inspections Victor Harbor and Fleurieu Peninsula. Coastal corrosion and heritage holiday-home specialists. Three quotes in 24 hours.",
    intro:
      "Victor Harbor and the Fleurieu Peninsula (Encounter Bay, Hayborough, Goolwa, Port Elliot) blend retirement coastal homes, heritage seaside cottages, and an increasing flow of permanent residents from metro Adelaide. The coastal environment defines the inspection priorities.",
    propertyTypes:
      "Pre-1940s heritage holiday cottages near the foreshore. 1960s-1990s brick veneer through the established streets. Newer (2010s onwards) project homes in the expanding estates. Some older fibro-cement holiday shacks remain - these need careful asbestos assessment.",
    localIssues: [
      {
        title: "Coastal corrosion",
        body: "Stronger salt-spray than metro coastal suburbs due to exposure. Metal corrosion is accelerated - roofs, gutters, window frames, door hardware all wear faster.",
      },
      {
        title: "Heritage asbestos",
        body: "Older Victor Harbor fibro shacks and beach houses often contain significant asbestos cement. Pre-renovation asbestos inspection is highly recommended.",
      },
      {
        title: "Sub-floor moisture in cliff-edge homes",
        body: "Cliff-side and clifftop properties have specific drainage issues. Storm-water flow over the edge, salt-laden ocean spray, and elevated humidity combine to create sub-floor decay.",
      },
      {
        title: "Holiday rental conversions",
        body: "Many Fleurieu homes have been converted to short-stay rental. Inspectors look for the specific issues short-stay properties accumulate: damaged finishes, sub-standard repairs, ventilation issues.",
      },
    ],
    notes:
      "For coastal Victor Harbor properties, asbestos and salt-damp assessment alongside the standard inspection is worth the extra cost - this is where the latent issues hide.",
    nearby: ["seaford", "aldinga", "stirling"],
  },

  "morphett-vale": {
    slug: "morphett-vale",
    name: "Morphett Vale",
    metaTitle: "Building Inspections Morphett Vale | Southern Adelaide, AS 4349.1",
    metaDescription:
      "Building inspections Morphett Vale and southern Adelaide. Reactive-clay specialist inspectors. Three free quotes inside 24 hours.",
    intro:
      "Morphett Vale and surrounding southern suburbs (Hackham, Reynella, Onkaparinga Hills, Christies Beach, Noarlunga) are established southern Adelaide. Dominated by 1970s-1990s brick veneer with newer infill estates. Reactive clay soils and ageing weatherproofing details dominate the inspection profile.",
    propertyTypes:
      "Predominantly 1970s-1990s single-storey brick veneer on slab. Some 1960s timber-framed homes in older streets. Newer 2010s-2020s project homes in expansion estates. Apartment and townhouse complexes near commercial centres.",
    localIssues: [
      {
        title: "Reactive clay slab movement",
        body: "Morphett Vale soils swing dramatically between wet winter and dry summer. Even modern slab homes show cracking. Look for diagonal cracking at door openings and ceiling cornices.",
      },
      {
        title: "Aged weatherproofing",
        body: "1970s-1990s aluminium windows and external door seals have largely failed. Visible water ingress at window heads, condensation in winter, and energy loss are the symptoms.",
      },
      {
        title: "Roof tile end-of-life",
        body: "Original 1970s-1980s concrete and clay tiles are at end-of-life. Cracking, mossing, dislodged ridge capping, and broken flashing are common. Roof replacement is a substantial future cost to factor.",
      },
      {
        title: "Termite activity",
        body: "Southern Adelaide carries moderate termite risk, increasing on properties with timber sub-floors, decking, or pergolas. Pest inspection alongside building is standard recommendation.",
      },
    ],
    notes:
      "Morphett Vale is often a strong first-home or investor purchase. Inspection focus tends to identify the cost of upcoming maintenance (roof, windows, kitchen, bathroom) more than deal-breaker defects.",
    nearby: ["seaford", "aldinga", "mitcham"],
  },

  aldinga: {
    slug: "aldinga",
    name: "Aldinga",
    metaTitle: "Building Inspections Aldinga | Southern Coastal Adelaide Specialists",
    metaDescription:
      "Building inspections Aldinga and Aldinga Beach. Southern coastal Adelaide specialists. Independent licensed inspectors in 24 hours.",
    intro:
      "Aldinga and Aldinga Beach blend coastal suburb growth, established rural blocks, and an increasing flow of metro relocators. The mix of property types makes for varied inspection priorities - newer slab homes, older country-style builds, and seaside cottages all coexist.",
    propertyTypes:
      "Heavy concentration of 2010s-2020s project homes in the newer estates. Older 1970s-1990s brick veneer scattered through Aldinga proper. Some 1960s-style holiday cottages near the foreshore. Rural-residential acreage with mixed-era dwellings inland.",
    localIssues: [
      {
        title: "Salt-laden coastal air",
        body: "Aldinga Beach properties get strong salt spray. Roofs, gutters, fascia, and external metal fittings age faster than inland. Inspectors note any galvanic corrosion at dissimilar-metal joints.",
      },
      {
        title: "Project-home defects",
        body: "Volume builders dominate the new estates. Common defects: wet area waterproofing, sub-slab dampness, tile lippage, render cracking, garage door alignment. Handover inspections catch these.",
      },
      {
        title: "Acreage utility complexity",
        body: "Rural-residential blocks often have rainwater tanks, septic systems, and standalone solar. Each needs separate condition assessment. Some properties have non-compliant outbuildings.",
      },
      {
        title: "Coastal sub-floor humidity",
        body: "Older Aldinga cottages with timber sub-floors carry coastal humidity damage - fungal decay, timber softening, and accelerated bearer/joist deterioration.",
      },
    ],
    notes:
      "For Aldinga new-estate purchases, ask about staged inspections during the build - five stages from slab to handover catches issues early at lower remediation cost.",
    nearby: ["seaford", "morphett-vale", "victor-harbor"],
  },
};
