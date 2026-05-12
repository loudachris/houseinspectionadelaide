export type GuideContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  publishedAt: string;
  answer: string;
  body: { heading: string; paras: string[] }[];
  related: string[];
};

export const GUIDE_CONTENT: Record<string, GuideContent> = {
  "how-much-is-a-building-inspection": {
    slug: "how-much-is-a-building-inspection",
    metaTitle: "How Much Is a Building Inspection in Adelaide?",
    metaDescription:
      "Adelaide building inspection costs vary by property and inspector. We don't set prices - we match you with three independent inspectors who each quote your specific property.",
    h1: "How Much Is a Building Inspection in Adelaide?",
    publishedAt: "2026-05-11T00:00:00Z",
    answer:
      "Adelaide building inspection prices vary by inspector, property type, size, age, scope, and turnaround urgency. Different inspectors quote different prices for the same property. The fastest way to know what an inspection actually costs for your Adelaide property is to receive three independent quotes through a matching service and compare them.",
    body: [
      {
        heading: "Why there is no single 'standard price'",
        paras: [
          "Every Adelaide property is different. A 3-bedroom single-storey brick veneer in Morphett Vale takes less time to inspect than a heritage stone villa in Unley. A new-estate slab home in Aldinga is faster than a hill-side custom build in Stirling. Inspectors price the work, not a flat fee.",
          "Inspectors also charge differently for the same scope. A senior inspector with 20+ years and heritage experience charges more than a newer entrant. Both can deliver an AS 4349.1 compliant report. You weigh experience against price when comparing quotes.",
        ],
      },
      {
        heading: "What inspectors look at when pricing your job",
        paras: [
          "Property size: square metreage, number of bedrooms, single vs double storey. Larger properties take longer on site.",
          "Age and construction: pre-war stone requires heritage expertise; mid-century brick veneer is standard scope; modern slab-and-frame is the fastest.",
          "Scope of inspection: pre-purchase building only, building + pest combo, defect-targeted, asbestos, mould. Each scope has different time and standard-of-care implications.",
          "Turnaround urgency: standard 48-hour report vs same-day. Same-day usually attracts a premium.",
          "Inspector experience level: senior inspectors with specialist backgrounds quote differently to generalists.",
          "Travel: some inspectors charge for travel to outer-metro or hills. The matching service routes requests to inspectors who minimise this.",
        ],
      },
      {
        heading: "Why the matching service helps",
        paras: [
          "When you brief us with the property details, we identify three independent licensed Adelaide inspectors suited to your property and timeline. They each provide a quote for your specific job.",
          "Three quotes for the same property typically reveal a real-market range. You see what your property type genuinely costs to inspect, what trade-offs exist (faster vs cheaper, generalist vs specialist), and you make an informed call.",
          "We don't set inspector prices, take commission from inspectors, or push you towards any particular inspector. You choose - and you pay the inspector directly.",
        ],
      },
      {
        heading: "What's typically included in any quote",
        paras: [
          "The inspector's site visit (2-4 hours depending on property), AS 4349.1 compliant report, photographic evidence of every defect, executive summary, recommendations, and standard report turnaround.",
          "Not typically included: lab analysis fees for asbestos sampling (charged by NATA-accredited lab), engineer's certification if structural concerns are flagged (separate engineer), or treatment quotes if termites are found (separate from the inspector).",
        ],
      },
      {
        heading: "How to get quotes for your property",
        paras: [
          "Brief us with the property address, settlement timeline, and inspection type. We match you with three independent licensed Adelaide inspectors inside 24 hours. You compare prices, turnaround, and inspector profiles before booking direct with your chosen inspector.",
        ],
      },
    ],
    related: [
      "building-inspection-cost",
      "pest-and-building-inspection-cost",
      "what-does-a-building-inspection-cover",
    ],
  },

  "building-inspection-cost": {
    slug: "building-inspection-cost",
    metaTitle: "Adelaide Building Inspection Cost (What Drives the Price)",
    metaDescription:
      "Building inspection cost in Adelaide depends on property type, inspector experience, scope, and turnaround. Get three real quotes to see actual prices for your property.",
    h1: "Adelaide Building Inspection Cost (What Drives the Price)",
    publishedAt: "2026-05-11T00:00:00Z",
    answer:
      "Building inspection cost in Adelaide depends on six main factors: property size and type, age and construction, scope of inspection, turnaround urgency, inspector experience, and travel. There is no single market price - inspectors set their own pricing per job. The matching service gives you three independent quotes for your specific property so you can compare actual cost.",
    body: [
      {
        heading: "By property size and type",
        paras: [
          "Smaller units and apartments take less time on site than standalone homes. Inspectors usually quote them lower.",
          "Standalone 3-bedroom single-storey homes are the most common Adelaide inspection - the baseline most inspectors price around.",
          "Larger four-plus bedroom or two-storey homes take longer and inspectors usually reflect that in pricing.",
          "Heritage stone, two-storey, or complex builds require senior or heritage-specialist inspectors who quote at the top of the range.",
          "Acreage and rural-residential properties add inspection time for ancillary buildings, water tanks, septic systems, and retaining walls.",
        ],
      },
      {
        heading: "By inspection scope",
        paras: [
          "Pre-purchase building inspection (AS 4349.1) is the standard scope most quotes are built around.",
          "Combined building and pest (AS 4349.1 + AS 4349.3) is the most common bundle. Combo quotes are usually lower than booking the two inspections separately because the inspector only mobilises once.",
          "Timber pest only (AS 4349.3) and focused termite inspections are usually shorter and quoted lower than full building scope.",
          "Handover or practical completion inspection (AS 4349.0) for new builds. Pricing depends on build size.",
          "Staged construction inspections through a new build (slab, frame, lock-up, fix-out, completion) are usually priced per stage with a multi-stage package.",
          "Defect inspections (AS 4349.7) are scope-driven - the narrower your brief, the shorter the inspection.",
          "Specialist scopes (asbestos, mould) often carry separate lab analysis fees on top of the inspector's quote.",
        ],
      },
      {
        heading: "Add-ons that can affect the quote",
        paras: [
          "Same-day or overnight reports usually carry a premium over the standard 48-hour turnaround.",
          "Weekend or after-hours inspection can attract a premium with some inspectors.",
          "Travel to outer-metro, hills, or Fleurieu coast can attract travel charges from city-based inspectors. The matching service includes regional inspectors who minimise this.",
          "Engineer's report on flagged structural concerns is a separate engagement with a structural engineer, not included in the inspection fee.",
        ],
      },
      {
        heading: "How to compare quotes",
        paras: [
          "When you receive three quotes, compare more than the dollar number. Check the AS standard the inspector works to, what's specifically inspected, report turnaround, inspector licence and insurance currency, whether attending the inspection is included, and whether the inspector takes phone follow-up about the report.",
          "The cheapest quote is not always the right call. The most expensive isn't either. The right inspector for your property is somewhere in the comparison.",
        ],
      },
    ],
    related: [
      "how-much-is-a-building-inspection",
      "pest-and-building-inspection-cost",
      "what-does-a-building-inspection-cover",
    ],
  },

  "pest-and-building-inspection-cost": {
    slug: "pest-and-building-inspection-cost",
    metaTitle: "Building and Pest Inspection Cost Adelaide (What Drives It)",
    metaDescription:
      "Adelaide building and pest combo inspection pricing depends on property and inspector. Combos usually quote lower than separate bookings. Get three real quotes.",
    h1: "How Much Does a Building and Pest Inspection Cost in Adelaide?",
    publishedAt: "2026-05-11T00:00:00Z",
    answer:
      "A combined building and pest inspection (AS 4349.1 + AS 4349.3) in Adelaide is usually quoted lower than booking the two inspections separately, because the inspector only mobilises once. Exact pricing depends on the inspector, property type, size, age, and turnaround urgency. The matching service gives you three independent quotes for your specific property.",
    body: [
      {
        heading: "Combo vs separate booking",
        paras: [
          "When you book the building inspection (AS 4349.1) and the timber pest inspection (AS 4349.3) separately, you book two visits, often a week apart. Inspectors price each visit including their mobilisation and travel time.",
          "A combo bundles both inspections into a single site visit. Same inspector, one trip, one combined report (or two reports if you prefer them separately). Inspectors typically quote the combo lower than the two-separate-bookings total.",
        ],
      },
      {
        heading: "What's covered in the building portion",
        paras: [
          "AS 4349.1 pre-purchase scope: structural elements, roof, walls, ceilings, floors, wet areas, sub-floor, roof void, drainage, site, ancillary buildings. Full report with photographs and executive summary.",
        ],
      },
      {
        heading: "What's covered in the pest portion",
        paras: [
          "AS 4349.3 timber pest scope: active termites (especially Coptotermes acinaciformis which is dominant in Adelaide), timber borer, fungal decay (wet rot, dry rot), and conducive conditions on site.",
          "Moisture meter readings, sound-tap testing of accessible timber elements, mud-tube inspection on external walls, sub-floor and roof void access where available.",
        ],
      },
      {
        heading: "When the combo makes sense",
        paras: [
          "Any pre-1987 Adelaide home with timber framing.",
          "Any property in known termite corridors (Adelaide Hills foothills, established eastern suburbs, properties near reactive clay soils or creeks).",
          "Any property with significant timber sub-floor, decking, pergolas, or boundary fencing made from untreated timber.",
          "Any post-renovation or unusual property where the building condition and pest exposure are both unknowns.",
        ],
      },
      {
        heading: "How to get real combo pricing",
        paras: [
          "Brief us with the property details and request a combo. Three independent Adelaide inspectors will each quote the combo for your property, so you see the real-market range. The matching service is free; you pay the inspector you choose directly.",
        ],
      },
    ],
    related: [
      "how-much-is-a-building-inspection",
      "building-inspection-cost",
      "what-does-a-building-inspection-cover",
    ],
  },

  "what-does-a-building-inspection-cover": {
    slug: "what-does-a-building-inspection-cover",
    metaTitle: "What Does a Building Inspection Cover? (AS 4349.1 Scope)",
    metaDescription:
      "What's covered in an Adelaide building inspection. AS 4349.1 scope: structural, weatherproofing, wet areas, sub-floor, roof void, site, drainage. Full breakdown.",
    h1: "What Does a Building Inspection Cover in Adelaide?",
    publishedAt: "2026-05-11T00:00:00Z",
    answer:
      "An Adelaide AS 4349.1 building inspection covers six main areas: structural elements (foundations, framing, roof structure), weatherproofing (roof, walls, windows, doors), wet areas (bathrooms, kitchens, laundries), sub-floor and roof void (where accessible), drainage and site, and any ancillary buildings. The inspector delivers a written, photographic report within 48 hours.",
    body: [
      {
        heading: "Structural elements",
        paras: [
          "Foundations, footings, slab condition, framing (timber or steel), roof structure (trusses, rafters, battens), and any structural walls. The inspector flags movement, cracking, settlement, and any defects that compromise structural integrity.",
          "Adelaide-specific: reactive clay soils mean seasonal foundation movement is common. Inspectors distinguish between active cracking and historic, settled movement.",
        ],
      },
      {
        heading: "Roof, walls, ceilings, floors",
        paras: [
          "External cladding (brick, weatherboard, render, fibro), roof covering (tile, metal, membrane), internal walls (plaster, lining boards), ceilings, and floor coverings or sub-floor.",
          "Weatherproofing is the priority - any water entry path, signs of past water damage, paint or cover-up over symptoms.",
        ],
      },
      {
        heading: "Wet areas",
        paras: [
          "Bathrooms, kitchens, laundries: tile lippage, grout integrity, waterproofing membrane visibility, silicone sealing, drain falls, leak signs around taps and shower bases.",
          "Adelaide-specific: bathroom retrofits to heritage homes are a common defect source. Sub-floor moisture from leaking wet areas is the most common 'invisible' damage in inspections.",
        ],
      },
      {
        heading: "Sub-floor and roof void",
        paras: [
          "Where accessible. Sub-floor: ventilation, dampness, framing condition, vermin. Roof void: insulation completion, water entry signs, structural integrity of trusses or rafters, sarking condition.",
          "Inaccessible areas are explicitly noted in the report under 'limitations' as required by AS 4349.1.",
        ],
      },
      {
        heading: "Drainage and site",
        paras: [
          "Stormwater drainage, gutter and downpipe function, paths and driveways, retaining walls, site falls (does water drain away from the building or towards it?).",
          "Adelaide reactive clay soils make site drainage critical - poor drainage causes the soil movement that cracks footings.",
        ],
      },
      {
        heading: "Ancillary buildings and fencing",
        paras: [
          "Garages, sheds, granny flats, pergolas, decking, retaining walls, fencing condition. Inspector notes any visible defects but full structural assessment of ancillary buildings is often outside the standard scope.",
        ],
      },
      {
        heading: "What's NOT covered",
        paras: [
          "Full electrical compliance test (separate electrician inspection required), full gas compliance test (separate plumber inspection), pool and pool fencing compliance (separate Pool Safety Inspector), strata documents (separate strata search), legal title issues (separate conveyancer), pest unless combo booking (separate AS 4349.3 inspection), and any inaccessible or concealed area.",
          "Reports explicitly list limitations so you know exactly what was and wasn't inspected.",
        ],
      },
    ],
    related: [
      "what-is-a-building-inspection",
      "what-does-a-building-inspector-do",
      "how-long-does-a-building-inspection-take",
    ],
  },

  "how-long-does-a-building-inspection-take": {
    slug: "how-long-does-a-building-inspection-take",
    metaTitle: "How Long Does a Building Inspection Take in Adelaide?",
    metaDescription:
      "Adelaide building inspections take 2-3 hours on site for a standard home, 3-4 hours for combo, 4+ hours for heritage. Report delivered within 48 hours.",
    h1: "How Long Does a Building Inspection Take?",
    publishedAt: "2026-05-11T00:00:00Z",
    answer:
      "A standard Adelaide pre-purchase building inspection takes 2 to 3 hours on site for a 3-bedroom home. A combined building and pest inspection takes 3 to 4 hours. Heritage stone, two-storey, or larger homes take 4+ hours. The written report is delivered within 48 hours of the site visit.",
    body: [
      {
        heading: "Site visit duration by property type",
        paras: [
          "1-2 bedroom unit or apartment: 1 to 2 hours.",
          "3-bedroom single-storey standalone: 2 to 3 hours.",
          "4-bedroom or two-storey: 3 to 4 hours.",
          "Heritage stone or 5+ bedroom: 4 to 5 hours.",
          "Acreage or rural-residential with ancillary buildings: 4 to 6 hours.",
        ],
      },
      {
        heading: "Combo inspection duration",
        paras: [
          "Building plus timber pest is typically 1 to 1.5 hours longer than building alone. The pest portion includes moisture meter readings, sound-tap testing of accessible timber, and inspection of conducive conditions.",
        ],
      },
      {
        heading: "What takes the time on site",
        paras: [
          "External walk-around with photography (30-45 min).",
          "Roof inspection from ladder or roof access (30-60 min).",
          "Internal room-by-room (60-90 min for a 3-bed home).",
          "Wet areas - bathrooms, kitchen, laundry (20-30 min).",
          "Sub-floor crawl-through where accessible (15-30 min).",
          "Roof void inspection (15-30 min).",
          "Drainage, site, ancillary buildings (15-30 min).",
        ],
      },
      {
        heading: "Report turnaround",
        paras: [
          "Standard turnaround is 48 hours from the site visit. Same-day reports are available from most inspectors and usually carry a premium.",
          "If you're in cooling-off period pressure (SA cooling-off is two clear business days from contract), brief us with the urgency and we route requests to inspectors who can deliver inside 24 hours.",
        ],
      },
      {
        heading: "Can I attend the inspection?",
        paras: [
          "Yes, and we recommend it. Inspectors will walk you through major findings on site so you understand what's in the report before you read it. Plan for the full duration on site so you can ask questions.",
          "If you can't attend in person (interstate or overseas buyer), most inspectors can do a phone or video call walkthrough as part of the service.",
        ],
      },
    ],
    related: [
      "what-does-a-building-inspection-cover",
      "how-much-is-a-building-inspection",
      "what-is-a-building-inspection",
    ],
  },

  "what-is-a-building-inspection": {
    slug: "what-is-a-building-inspection",
    metaTitle: "What Is a Building Inspection? (Adelaide Guide)",
    metaDescription:
      "A building inspection is an independent expert assessment of a property's condition against AS 4349.1. Adelaide guide to what it is, when you need one, and how it works.",
    h1: "What Is a Building Inspection? (Adelaide Guide)",
    publishedAt: "2026-05-11T00:00:00Z",
    answer:
      "A building inspection is an independent expert assessment of a property's condition, conducted against the Australian Standard AS 4349.1. A licensed inspector visits the property, examines structural and building elements, photographs defects, and delivers a written report. In Adelaide, you'd typically get one before signing a property contract or before making final payment on a new build.",
    body: [
      {
        heading: "The Australian Standard: AS 4349.1",
        paras: [
          "AS 4349.1-2007 defines what a pre-purchase residential inspection covers, how it's documented, and the limitations the inspector must declare. It's the framework that gives a building inspection report legal and professional weight.",
          "Reports from licensed inspectors follow it. Cheap or unlicensed 'inspections' often skip it, which matters if you need to use the report in negotiation or dispute.",
        ],
      },
      {
        heading: "Who can conduct one",
        paras: [
          "In South Australia, building inspectors hold a Building Work Contractors Licence (issued by Consumer and Business Services). Some also hold professional memberships with bodies like the Master Inspectors Association or the Association of Building Consultants.",
          "Insurance is critical - look for inspectors with current public liability and professional indemnity insurance. Every inspector in our network meets these minimums.",
        ],
      },
      {
        heading: "When you'd get one",
        paras: [
          "Before signing a property purchase contract (or within cooling-off period if you've already signed).",
          "Before final payment on a new build (handover or practical completion inspection).",
          "When you suspect a specific defect and need documented evidence (defect inspection under AS 4349.7).",
          "Annually on a property you own, especially if termite or movement risk is present.",
        ],
      },
      {
        heading: "What you receive",
        paras: [
          "A written report with executive summary, photographs of every flagged defect, a description of the inspection's scope and limitations, and recommendations for further investigation where needed.",
          "Reports typically run 20-40 pages for a standard pre-purchase inspection. The executive summary is the most important page - it tells you in plain English what's serious and what's minor.",
        ],
      },
      {
        heading: "What it doesn't include",
        paras: [
          "Building inspections aren't a guarantee of property condition - they document what was visible on the day of inspection. They aren't an electrical or gas compliance test, a pool safety inspection, a strata or title search, or a legal opinion.",
          "Inspectors don't make legal recommendations. Whether to negotiate, walk away, or rescind in cooling-off is your decision, made in consultation with your conveyancer.",
        ],
      },
    ],
    related: [
      "what-does-a-building-inspector-do",
      "what-does-a-building-inspection-cover",
      "how-much-is-a-building-inspection",
    ],
  },

  "what-does-a-building-inspector-do": {
    slug: "what-does-a-building-inspector-do",
    metaTitle: "What Does a Building Inspector Do? (Adelaide Role Guide)",
    metaDescription:
      "What a licensed building inspector does in Adelaide: pre-purchase, defect, handover, and pest inspections under AS 4349 standards. Their role, qualifications, and what they look for.",
    h1: "What Does a Building Inspector Do?",
    publishedAt: "2026-05-11T00:00:00Z",
    answer:
      "A building inspector is a licensed professional who assesses a property's condition against Australian Standards (AS 4349.1 for pre-purchase, AS 4349.3 for timber pest, AS 4349.0 for general/handover). They visit the property, identify defects through visual inspection, document findings with photographs, and deliver a written report. They're independent of sellers, agents, and builders.",
    body: [
      {
        heading: "What they do on site",
        paras: [
          "Inspector arrives with tools (ladder, moisture meter, torch, camera) and works through a systematic checklist covering every accessible area: structural elements, roof, walls, wet areas, sub-floor, roof void, drainage, ancillary buildings.",
          "They photograph defects, note locations on a property plan, take measurements where relevant, and use moisture meters or sound-tap testing for hidden conditions (active termites, hidden damp).",
        ],
      },
      {
        heading: "What they do after the site visit",
        paras: [
          "Write a comprehensive report following AS 4349.1 format: executive summary, scope, limitations, defects with photographs, recommendations for further investigation, and any urgent issues flagged separately.",
          "Standard turnaround is 48 hours from inspection to report. Same-day reports usually carry a premium.",
        ],
      },
      {
        heading: "Qualifications",
        paras: [
          "Licensed under SA Building Work Contractors Licence (issued by Consumer and Business Services).",
          "Often hold professional memberships: Master Inspectors Association of Australia, Association of Building Consultants, Institute of Building Inspectors.",
          "Hold professional indemnity insurance and public liability insurance - verified before they enter the matching network.",
          "Many come from trade backgrounds (carpentry, building, structural engineering) before specialising in inspections.",
        ],
      },
      {
        heading: "What they don't do",
        paras: [
          "They don't quote on remediation or do the work themselves - that's a builder or specialist tradesperson's job. Inspectors are inspection-only, which removes the conflict-of-interest of an inspector finding work for themselves.",
          "They don't make legal recommendations or advise on whether to buy or rescind. They document the condition; you and your conveyancer make the call.",
          "They don't have commercial relationships with sellers, agents, or builders. Our network specifically excludes inspectors with those relationships.",
        ],
      },
      {
        heading: "How they're different from builders",
        paras: [
          "A builder builds. An inspector inspects. The skill sets overlap - inspectors usually come from building backgrounds - but the roles are distinct.",
          "Builders often offer 'free inspections' as part of their renovation or extension quote. These are useful but not independent - the builder has a commercial interest in finding work to quote on.",
        ],
      },
    ],
    related: [
      "what-is-a-building-inspection",
      "what-does-a-building-inspection-cover",
      "how-much-is-a-building-inspection",
    ],
  },

  "what-to-look-for-house-inspection": {
    slug: "what-to-look-for-house-inspection",
    metaTitle: "What to Look For in a House Inspection (Adelaide Buyer's Checklist)",
    metaDescription:
      "A buyer's checklist for Adelaide house inspections: structural, water damage, electrical, plumbing, sub-floor, roof, fittings. What to look for and what to ask your inspector.",
    h1: "What to Look For in a House Inspection (Adelaide Buyer's Checklist)",
    publishedAt: "2026-05-11T00:00:00Z",
    answer:
      "When attending an Adelaide house inspection, look for movement cracks (especially diagonal cracks from corners of door and window openings), water damage signs (staining on ceilings, paint blistering, musty smells), wet area condition, sub-floor accessibility and dampness, roof tile condition, electrical and switchboard age, plumbing fittings, and the boundary fencing and retaining walls. Ask your inspector to walk you through anything they've flagged in their preliminary findings.",
    body: [
      {
        heading: "Before the inspection - prepare your questions",
        paras: [
          "Read the contract of sale and note anything declared by the seller (sometimes called Form 1 in SA).",
          "Note your own first-impression concerns from open inspections - the agent's response told you something.",
          "If the property has a history (flood, fire, prior renovations), bring up specific concerns with the inspector before they start.",
        ],
      },
      {
        heading: "Structural - look for these",
        paras: [
          "Diagonal cracks running from corners of door and window openings - these can indicate footing movement, not just cosmetic plaster.",
          "Cracks wider than 3mm or that you can see daylight through.",
          "Sagging ceilings or visible roof rafter deflection.",
          "Doors that don't close cleanly, gaps between doors and frames, sloping floors detected by a marble or spirit level.",
          "External brick or masonry that's leaning, bulging, or has stepped cracking.",
        ],
      },
      {
        heading: "Water damage - the most common 'hidden' issue",
        paras: [
          "Staining on ceilings (yellow, brown, or watermark rings) - even faint stains indicate past water entry.",
          "Paint blistering, peeling, or fresh paint that looks suspicious - sellers sometimes paint over staining before listing.",
          "Musty smells in rooms, sub-floor, or behind closed doors.",
          "Bowed or warped skirting boards, swollen architraves, blown render on lower walls.",
          "Mould visible in corners, around windows, or behind furniture (some sellers move furniture for open inspections - check where it was).",
        ],
      },
      {
        heading: "Wet areas - bathrooms, kitchens, laundries",
        paras: [
          "Tile lippage (tiles not flush) and grout condition.",
          "Silicone seals around shower trays, baths, and at wet/dry edges - missing or perished silicone lets water in.",
          "Floor falls towards drains - water should run to the drain, not pool in corners.",
          "Visible leaks under sinks and around shower waste pipes.",
          "Soft floor underfoot near showers and baths (rotted sub-floor).",
        ],
      },
      {
        heading: "Sub-floor and roof void",
        paras: [
          "Sub-floor access points and ventilation - are vents blocked by garden beds or paving?",
          "Sub-floor moisture, fungal smell, or visible water staining on bearers and joists.",
          "Roof void: insulation completeness, water entry signs at flashings, vermin droppings, condition of trusses or rafters.",
        ],
      },
      {
        heading: "Roof, gutters, downpipes",
        paras: [
          "Roof tile condition: cracked, missing, displaced, or showing moss.",
          "Ridge capping mortar - crumbling mortar is a common source of leaks.",
          "Gutter sag, rust streaks, or downpipes that don't discharge to legal stormwater.",
          "Flashings around chimneys, vents, and where roof meets external walls.",
        ],
      },
      {
        heading: "Electrical, plumbing, gas",
        paras: [
          "Switchboard - modern boards have RCD (safety switch) protection. Old ceramic-fuse boards are a flag for outdated wiring.",
          "Visible cabling - exposed wiring, junction boxes without lids, ageing electrical fittings.",
          "Plumbing - galvanised pipes (likely past end-of-life), aged hot water systems (HWS over 12 years often need replacement), gas point condition.",
          "Note: a full electrical or gas compliance test is separate from a building inspection. If concerns are flagged, get a specialist.",
        ],
      },
      {
        heading: "External - site, drainage, fences",
        paras: [
          "Site drainage - does the land slope away from the building or towards it?",
          "Retaining wall condition - lean, cracks, drainage at base.",
          "Boundary fence condition and ownership (fence disputes are common).",
          "Driveways, paths, and entry steps - cracks, sinking, trip hazards.",
        ],
      },
      {
        heading: "Ask your inspector",
        paras: [
          "What's the most urgent issue on the report? (executive summary highlights)",
          "What would you negotiate on if you were buying this property?",
          "What ongoing maintenance should I budget for in the first 12-24 months?",
          "What's the realistic remediation approach on the major defects?",
          "Is this property a good representative of its type, or are there issues I should walk away from?",
        ],
      },
    ],
    related: [
      "what-does-a-building-inspection-cover",
      "what-does-a-building-inspector-do",
      "what-is-a-building-inspection",
    ],
  },
};
