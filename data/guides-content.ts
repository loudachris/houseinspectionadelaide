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

  "first-home-buyer-inspection": {
    slug: "first-home-buyer-inspection",
    metaTitle: "First Home Buyer's Guide to Building Inspections (Adelaide)",
    metaDescription:
      "First home buyer's guide to building inspections in Adelaide. What to expect, what to ask, how to read the report, how cooling-off works in SA.",
    h1: "First Home Buyer's Guide to Building Inspections",
    publishedAt: "2026-05-12T00:00:00Z",
    answer:
      "First-home buyers should book an AS 4349.1 pre-purchase building inspection during cooling-off (two clear business days from contract in SA). The inspector visits the property for 2-3 hours, photographs every defect, and delivers a written report within 48 hours. Cost varies by inspector and property. The report is your tool to negotiate the price, request remediation, or rescind in cooling-off.",
    body: [
      {
        heading: "Why a building inspection is non-negotiable for first home buyers",
        paras: [
          "First home buyers often have the smallest budget margin and the highest emotional investment. Both make a building inspection more important, not less. A defect that adds $30,000 to the post-purchase budget might be acceptable for an investor but devastating for a first home buyer with little contingency.",
          "The inspection is also the cheapest insurance you'll buy on the property. Skipping it to save the inspection fee is a false economy - undetected major defects cost orders of magnitude more.",
        ],
      },
      {
        heading: "When to book it",
        paras: [
          "Most first home buyers book during cooling-off, after their offer has been accepted. SA cooling-off is two clear business days from contract receipt - tight, but workable for most inspectors.",
          "If you're at auction (where cooling-off doesn't apply), book the inspection before you bid. Pre-auction inspections cost the same but require committing before you know if you'll win.",
          "Briefing the inspector in advance helps. Mention any specific concerns, the property's age, your timeline urgency, and any first-home-buyer schemes you're using (some have inspection requirements).",
        ],
      },
      {
        heading: "What to look for in your inspector",
        paras: [
          "Active SA Building Work Contractors Licence. Current public liability and professional indemnity insurance. AS 4349.1 compliant reporting. No commercial relationship with the seller or selling agent.",
          "The matching service handles all of this verification before forwarding leads. You compare quotes from three independent inspectors without doing the vetting yourself.",
        ],
      },
      {
        heading: "What the report will tell you",
        paras: [
          "Executive summary on page 1 (read this first). Major structural defects flagged separately from minor cosmetic issues. Photographs of every defect with location tags. Recommendations for further investigation (e.g. engineer review of structural concerns, electrical compliance test).",
          "The report doesn't tell you whether to buy or not - that's your decision. It gives you the documented evidence to negotiate intelligently or walk away with cause.",
        ],
      },
      {
        heading: "Common first-home-buyer mistakes",
        paras: [
          "Skipping the inspection to 'save the money'. The cheapest mistake you can make is also the most expensive.",
          "Relying on the seller's vendor report. Vendor reports can be useful but should never replace a buyer-engaged independent inspection.",
          "Booking the inspection too late in cooling-off. Aim for inspection within the first 48 hours of cooling-off so you have time to negotiate or rescind.",
          "Reading only the executive summary. Skim the whole report - the executive summary highlights, but the body is where the specific issues live.",
        ],
      },
      {
        heading: "What happens after the report",
        paras: [
          "If the report is clean: proceed with finance and settlement.",
          "If major defects are found: negotiate with the seller for price reduction or remediation. The report is your evidence.",
          "If the defects are deal-breakers: rescind in cooling-off (in writing, before the deadline). SA cooling-off forfeit is small.",
          "Your conveyancer handles the legal side. The building inspector documents the condition; your conveyancer advises on the legal next step.",
        ],
      },
    ],
    related: [
      "what-is-a-building-inspection",
      "cooling-off-period-sa",
      "negotiating-after-a-building-inspection",
    ],
  },

  "investor-inspection-guide": {
    slug: "investor-inspection-guide",
    metaTitle: "Investor's Guide to Adelaide Property Inspections",
    metaDescription:
      "Investor's guide to building inspections in Adelaide. Pre-purchase due diligence, ongoing rental property inspections, tax-deductible inspection costs, and depreciation schedules.",
    h1: "Investor's Guide to Adelaide Property Inspections",
    publishedAt: "2026-05-12T00:00:00Z",
    answer:
      "Property investors in Adelaide should arrange an AS 4349.1 pre-purchase inspection on every property, regardless of size or yield. The cost is generally tax-deductible against rental income. Beyond pre-purchase, investors typically arrange annual pest inspections on at-risk properties and condition reports between tenancies. A depreciation schedule (separate from the building inspection) maximises tax deductions on the property's structure and fittings.",
    body: [
      {
        heading: "Pre-purchase: the floor, not the ceiling, of investor due diligence",
        paras: [
          "A pre-purchase inspection identifies condition issues that affect immediate yield (urgent repairs you'll have to fund) and long-term value (structural concerns affecting capital growth). For investors, both matter.",
          "Beyond AS 4349.1, investors should consider: combo (building + pest) for any timber-framed property, defect inspection if the property has known issues you want priced in, and a strata report if it's a unit or townhouse.",
        ],
      },
      {
        heading: "Tax-deductibility",
        paras: [
          "Building inspection costs incurred while purchasing an investment property are generally not immediately deductible - they form part of the cost base for capital gains purposes. Building inspection costs incurred during ownership (e.g. annual termite monitoring, defect investigations) are typically deductible against rental income in the year incurred.",
          "Always confirm with your accountant. We're not tax advisers - rules change and individual circumstances vary.",
        ],
      },
      {
        heading: "Depreciation schedules",
        paras: [
          "A depreciation schedule is separate from a building inspection. It's a tax document prepared by a quantity surveyor (not a building inspector) that itemises the value of construction and fittings for tax depreciation purposes.",
          "For an investor, both documents matter. The building inspection tells you about the property's physical condition. The depreciation schedule tells you what you can claim against rental income each year.",
        ],
      },
      {
        heading: "Ongoing inspections during ownership",
        paras: [
          "Annual or biennial termite inspections on properties at risk (timber framing, Hills locations, established eastern suburbs). The cost is small; the protection is significant.",
          "Condition reports between tenancies. Documenting condition before each new tenant protects your bond claim if disputes arise.",
          "Defect inspections if the property has experienced events (storm damage, tenant damage, builder warranty period).",
        ],
      },
      {
        heading: "Investor-specific considerations",
        paras: [
          "Strata properties: arrange a strata report through your conveyancer alongside the AS 4349.1 building inspection. The strata report reveals body corporate finances and upcoming levies that affect long-term ROI.",
          "Heritage properties: heritage register listings restrict alterations. Confirm what you can and can't do before purchase, particularly if planning renovation-led capital growth strategies.",
          "Older homes: factor major maintenance items (roof replacement, restumping, electrical upgrades) into your offer price. The inspection report quantifies these.",
        ],
      },
    ],
    related: [
      "what-does-a-building-inspection-cover",
      "apartment-inspection-strata",
      "heritage-home-inspection",
    ],
  },

  "heritage-home-inspection": {
    slug: "heritage-home-inspection",
    metaTitle: "Heritage Home Inspection Adelaide (Stone Villas & Pre-1940 Buyers)",
    metaDescription:
      "Heritage stone villa inspection guide for Adelaide buyers. Salt damp, footing movement, lime mortar, heritage register implications. Request heritage-experienced inspectors.",
    h1: "Heritage Home Inspection Guide",
    publishedAt: "2026-05-12T00:00:00Z",
    answer:
      "Adelaide's pre-1940 heritage stone and brick homes need an inspector experienced with heritage construction - the issues differ from modern brick veneer. Salt damp, footing movement on reactive clay, lime mortar erosion, and heritage register implications all matter. Request a heritage-experienced inspector when briefing the matching service. Heritage inspections take longer (4+ hours typically) and reports require interpretation by someone who reads 130-year-old stonework regularly.",
    body: [
      {
        heading: "Why heritage homes need specialist inspection",
        paras: [
          "A general pre-purchase inspector can miss heritage-specific issues or misinterpret normal heritage behaviour as defects. Stone walls move differently to brick veneer. Original lime mortar is supposed to be slightly soft - it's what prevents catastrophic cracking. Hairline cracks in heritage walls are often historic and stable.",
          "Conversely, modern issues retrofitted into heritage homes (bathrooms in a former bedroom, new wet areas above sub-floor timber) are major defect sources that need careful assessment.",
        ],
      },
      {
        heading: "The big six heritage-specific issues",
        paras: [
          "Salt damp: salt-laden moisture wicking up through masonry. Visible as efflorescence on lower bricks, blown plaster internally, rotting skirting. Pre-1940s homes often have failed or non-existent DPCs.",
          "Footing movement: reactive clay + ageing stone footings = seasonal movement. Active vs historic distinction is critical.",
          "Lime mortar erosion: lime mortar weathers over 100+ years. Repointing is normal maintenance, not a defect - but the inspector should note its state.",
          "Stone weathering: bluestone and limestone spall when salt damp is active. Stone replacement is expensive and specialist work.",
          "Heritage roof structures: pre-1940 roofs weren't designed for solar panels, tile retrofits, or other modern loads. Sagging, undersized rafters, inadequate tie-downs.",
          "Bootleg renovations: heritage homes often have extensions or modifications without correct heritage approval. Creates legal risk at purchase.",
        ],
      },
      {
        heading: "Heritage register implications",
        paras: [
          "Properties on the SA state heritage register or local heritage register have layered consent requirements. Some interior alterations need approval. Past renovations done without correct approval may need to be reversed at new-owner cost.",
          "Before purchasing a heritage-listed Adelaide property, verify the listing scope via PlanSA (or your conveyancer) and confirm what restrictions apply.",
        ],
      },
      {
        heading: "What to brief the matching service",
        paras: [
          "Mention 'heritage stone' or 'pre-1940 brick' in the property type field. We route specifically to heritage-experienced inspectors.",
          "Note any specific concerns from open inspections (visible cracks, dampness, recent renovations).",
          "Note if the property is heritage-listed - inspectors with heritage-listed property experience are a sub-set of the heritage-experienced inspector pool.",
        ],
      },
      {
        heading: "What to expect from the report",
        paras: [
          "Longer than a typical AS 4349.1 report - 30-40 pages is normal for heritage stone. More photographs, more interpretation, often more recommendations for engineer assessment.",
          "Clear distinction between active and historic defects. This matters because heritage homes always have some historic damage; what counts is whether it's still moving.",
          "Specific recommendations on conservation-quality remediation. Standard repair approaches can damage heritage fabric. Inspectors familiar with heritage will note where specialist trades are needed.",
        ],
      },
    ],
    related: [
      "what-does-a-building-inspection-cover",
      "investor-inspection-guide",
      "how-to-read-an-inspection-report",
    ],
  },

  "apartment-inspection-strata": {
    slug: "apartment-inspection-strata",
    metaTitle: "Adelaide Apartment & Strata Inspection Guide",
    metaDescription:
      "Inspection guide for buying Adelaide apartments, units, and townhouses under strata title. What's covered by building inspection vs strata report, common defects, key questions.",
    h1: "Adelaide Apartment & Strata Inspection Guide",
    publishedAt: "2026-05-12T00:00:00Z",
    answer:
      "Buying an Adelaide apartment, unit, or townhouse needs two documents: an AS 4349.1 building inspection covering your specific unit, plus a separate strata report covering the body corporate finances, sinking fund, special levies, and ongoing disputes. The building inspection tells you about the physical unit; the strata report tells you about the building you're buying into financially.",
    body: [
      {
        heading: "What the building inspection covers in a strata property",
        paras: [
          "An AS 4349.1 inspection of an apartment or unit covers the interior of your specific lot - all rooms, wet areas, finishes, visible plumbing and electrical, balcony or courtyard if it's part of your lot. The inspector also walks accessible common areas where they have visual access (lobby, lifts, external walls, roof from ground level).",
          "What it doesn't cover: common property structural elements you can't see (slab between floors, party walls, the roof structure), body corporate documents, financial position of the strata.",
        ],
      },
      {
        heading: "What the strata report covers (separate document)",
        paras: [
          "Body corporate finances: current balance, sinking fund, special levies passed or pending, regular levies and trend.",
          "Disputes: ongoing builder disputes (defects in newer complexes), insurance claims, water ingress investigations, problems with shared infrastructure.",
          "Insurance: building insurance currency, sum insured adequacy, any exclusions or recent claims.",
          "Major works pending: roof replacement, lift upgrades, facade repairs, plumbing upgrades.",
        ],
      },
      {
        heading: "Common apartment defects to watch",
        paras: [
          "Waterproofing failure in wet areas - particularly common in 2010s mid-rise apartments. Visible water staining on adjacent walls or ceilings is a strong signal.",
          "Balcony waterproofing - balconies are notorious. Look for staining at the underside of the balcony (visible from below) or where the balcony meets the wall.",
          "Sound transmission - thin walls and ceilings between units. Brick walls are quieter than plasterboard. Visible cracks at the wall-to-ceiling junction can indicate inadequate party wall construction.",
          "Combustible cladding concerns - some 2010s Adelaide builds used cladding now considered unsafe. The strata report should disclose any rectification orders.",
          "Window seals failing on aluminium-framed buildings, particularly coastal apartments.",
        ],
      },
      {
        heading: "Building inspection considerations specific to strata",
        paras: [
          "Inspectors with strata experience know what to look for at the interface between your lot and common property. Brief the matching service that it's a strata purchase and we route accordingly.",
          "Some inspectors include accessible common-area observations in the report (visible structural issues, common-area waterproofing, lift condition). These are observations, not formal common-property inspection.",
          "If the building is large or complex, an engineer's structural assessment of the building (separate from your unit inspection) is sometimes warranted.",
        ],
      },
      {
        heading: "Questions to ask before buying",
        paras: [
          "What's the current sinking fund balance and how has it trended?",
          "Are any special levies pending or recently passed?",
          "Is the building involved in any builder dispute or insurance claim?",
          "What major maintenance is scheduled in the next 5 years?",
          "Is there current rectification order on the building?",
        ],
      },
    ],
    related: [
      "what-does-a-building-inspection-cover",
      "investor-inspection-guide",
      "first-home-buyer-inspection",
    ],
  },

  "pre-auction-inspection": {
    slug: "pre-auction-inspection",
    metaTitle: "Pre-Auction Building Inspection Adelaide (Bid With Confidence)",
    metaDescription:
      "Pre-auction building inspection guide for Adelaide buyers. Why cooling-off doesn't apply at auction, how to budget for pre-auction inspection costs, what to expect.",
    h1: "Pre-Auction Building Inspection",
    publishedAt: "2026-05-12T00:00:00Z",
    answer:
      "When you bid at an Adelaide auction, you waive cooling-off rights. A pre-auction building inspection is the only way to know what you're buying before you commit. Pre-auction inspections cost the same as standard pre-purchase but you commit before knowing if you'll win the auction. Most serious bidders inspect 2-3 properties they're considering, accepting that some inspection costs won't lead to a purchase.",
    body: [
      {
        heading: "Why cooling-off doesn't apply at auction",
        paras: [
          "South Australian cooling-off (two clear business days) applies to private treaty sales but not to auction purchases. The moment your winning bid is accepted, you're committed - subject only to standard contract conditions and the deposit clearing.",
          "This makes pre-auction due diligence non-negotiable. If you find major defects after the auction, you have no automatic right to rescind.",
        ],
      },
      {
        heading: "When to book a pre-auction inspection",
        paras: [
          "5 to 10 days before the auction date is the sweet spot. This gives the inspector time to attend, deliver a report, and give you time to read it carefully before bidding.",
          "Don't book too early. Properties can have last-minute issues (storm damage, broken pipes, vacate damage) that your earlier inspection won't catch.",
          "Don't book too late. Reports rushed under 48-hour pressure can miss things; you also lose the ability to ask follow-up questions of the inspector.",
        ],
      },
      {
        heading: "How to budget for inspection costs across multiple properties",
        paras: [
          "Serious auction bidders typically inspect 2-3 properties they're considering. Plan for the inspection cost on each, knowing some won't lead to a purchase.",
          "Some inspectors offer a small discount when bidders inspect multiple properties through them in the same period. Worth asking when comparing quotes.",
          "If you're using a buyer's agent, they typically have inspector relationships. The matching service still works alongside a buyer's agent - they choose, you inspect independently.",
        ],
      },
      {
        heading: "What to do with the report before auction",
        paras: [
          "Read the executive summary first. Note major defects. Then read the body of the report. Then write your maximum bid based on what you've learned.",
          "If the report identifies major defects that change your valuation, adjust your bid accordingly. Don't bid yesterday's price on today's information.",
          "Bring a written summary of any concerns to the auction. If the agent has misrepresented condition, having the inspection report cited in your bid limit calculation matters.",
        ],
      },
      {
        heading: "Other pre-auction considerations",
        paras: [
          "Vendor reports are sometimes provided pre-auction. Review them but commission your own independent inspection - vendor reports favour the seller.",
          "Strata reports for apartment auctions should also be commissioned pre-auction. These come from your conveyancer, not the building inspector.",
          "Form 1 (vendor's statement) must be available before auction. Read it carefully - it discloses material facts about the property.",
        ],
      },
    ],
    related: [
      "what-is-a-building-inspection",
      "cooling-off-period-sa",
      "first-home-buyer-inspection",
    ],
  },

  "cooling-off-period-sa": {
    slug: "cooling-off-period-sa",
    metaTitle: "SA Cooling-Off Period Explained (Two Clear Business Days)",
    metaDescription:
      "South Australia residential property cooling-off period: two clear business days from contract receipt. How weekends and SA public holidays affect the deadline.",
    h1: "South Australian Cooling-Off Period Explained",
    publishedAt: "2026-05-12T00:00:00Z",
    answer:
      "South Australian residential property cooling-off is two clear business days from the day you receive the signed contract (Form 1). Weekends and SA public holidays don't count. Rescission must be in writing before the deadline ends. Cooling-off doesn't apply at auction (you waive it by bidding) or if you've explicitly waived it in writing.",
    body: [
      {
        heading: "What 'two clear business days' actually means",
        paras: [
          "The day you receive the contract doesn't count. Then two full business days must pass. Weekends don't count. SA public holidays don't count.",
          "Example: contract received Thursday. Friday is day 1. Monday is day 2 (assuming no public holiday). You must rescind before end of business Monday.",
          "Example with weekend: contract received Friday. Monday is day 1. Tuesday is day 2. Wednesday is the deadline.",
          "Example with public holiday: contract received Thursday before a long weekend. Friday is day 1. Tuesday after the long weekend is day 2. Wednesday is the deadline.",
        ],
      },
      {
        heading: "How to rescind",
        paras: [
          "Rescission must be in writing. Email is generally accepted but a written letter is the safer route.",
          "Address the rescission to the seller (via the selling agent if necessary). Note the property address, the date of the contract, and that you're rescinding under SA cooling-off provisions.",
          "Your conveyancer should draft the rescission letter. Don't try to DIY this - a poorly-worded rescission could be contested.",
          "Get a confirmation of receipt. Email read receipts, certified mail, or in-person delivery with witness.",
        ],
      },
      {
        heading: "What you forfeit",
        paras: [
          "SA cooling-off forfeit is a small portion of the deposit (typically $100 or 0.2% of purchase price, whichever is greater). The balance of the deposit is refunded.",
          "Compared to the cost of being locked into an unsuitable purchase, the forfeit is negligible. Don't let it influence the decision.",
        ],
      },
      {
        heading: "When cooling-off doesn't apply",
        paras: [
          "Auction purchases - you waive cooling-off by bidding.",
          "If you explicitly waive cooling-off in writing (sometimes requested by sellers in tight markets - don't sign this without conveyancer advice).",
          "Some commercial purchases and business sales.",
          "If you've already signed a contract that confirms you've taken advice from your conveyancer.",
        ],
      },
      {
        heading: "Using cooling-off for inspections",
        paras: [
          "Most buyers use cooling-off to confirm finance, get a building inspection, and review the Form 1. Two clear business days is tight - book inspections immediately.",
          "Many inspectors in the matching network offer same-day or next-day reports during cooling-off (sometimes at a premium). Brief us with the urgency and we route accordingly.",
          "Read the building inspection report immediately on receipt. If major defects are found, you have hours, not days, to make a decision.",
        ],
      },
    ],
    related: [
      "first-home-buyer-inspection",
      "pre-auction-inspection",
      "negotiating-after-a-building-inspection",
    ],
  },

  "can-the-seller-hide-defects": {
    slug: "can-the-seller-hide-defects",
    metaTitle: "Can the Seller Hide Defects? (Adelaide Property Law)",
    metaDescription:
      "Can Adelaide sellers legally hide property defects? Form 1 disclosure rules, common cover-ups, what a building inspection detects, and your remedies if defects are hidden.",
    h1: "Can the Seller Hide Defects?",
    publishedAt: "2026-05-12T00:00:00Z",
    answer:
      "South Australian sellers are required to disclose material facts about the property in the Form 1 vendor's statement. Sellers can't legally hide structural defects, easements, or other material matters - but the practical reality is that minor and visible defects are often covered up cosmetically. A pre-purchase building inspection is your defence against both intentional concealment and routine cosmetic cover-ups.",
    body: [
      {
        heading: "What sellers must legally disclose (Form 1)",
        paras: [
          "Form 1 (the SA vendor's statement) requires disclosure of: title information, planning and zoning, encumbrances, body corporate details (strata), notices issued against the property, and material facts that would affect a buyer's decision.",
          "Failure to disclose material facts can trigger extended cooling-off rights or, in extreme cases, the buyer's right to rescind even after settlement.",
        ],
      },
      {
        heading: "Common cosmetic cover-ups inspectors find",
        paras: [
          "Fresh paint over water staining on ceilings. The inspector looks for paint colour mismatches, brushwork that doesn't match the rest of the room, and feels for hidden ceiling sagging.",
          "Furniture strategically placed to cover damaged floors, mouldy corners, or cracked walls. Inspectors check behind furniture during their walk-through.",
          "New floor coverings hiding sub-floor moisture damage. Soft underfoot near walls is a strong signal.",
          "Repointed brickwork concealing older salt damp or cracking. Mortar colour and texture differences flag recent work.",
          "Cleaned and freshly-grouted bathrooms hiding waterproofing failure. The inspector uses a moisture meter behind the room to detect sub-floor moisture.",
        ],
      },
      {
        heading: "What a building inspection detects vs misses",
        paras: [
          "AS 4349.1 inspections are non-invasive. The inspector can't lift carpets, open walls, or move large furniture. So genuinely well-hidden defects can be missed.",
          "What's typically caught: visible water staining or cover-ups, fresh paintwork that looks recent, sub-floor moisture detected via moisture meter, visible movement cracking even when freshly filled.",
          "What's harder to catch: defects concealed behind permanent fixtures, sub-slab plumbing issues, asbestos in walls without sampling, electrical issues that need compliance testing.",
        ],
      },
      {
        heading: "If you discover hidden defects post-settlement",
        paras: [
          "Document everything with dates, photographs, and any evidence the issue pre-dated your purchase. A post-settlement defect inspection (AS 4349.7) helps.",
          "Speak to your conveyancer immediately. There are legal remedies for non-disclosure under SA law, but they're time-sensitive and fact-specific.",
          "If the seller's vendor report or Form 1 was incomplete or misleading, there may be grounds for compensation. If you commissioned your own inspection that missed the defect, your remedies are more limited.",
        ],
      },
      {
        heading: "How to maximise your protection",
        paras: [
          "Always commission your own independent inspection. Don't rely solely on the vendor's report.",
          "Use the matching service to compare three inspectors - choose based on attention to detail, not just price.",
          "Brief the inspector on any specific concerns you noticed at open inspections. They can focus on those areas.",
          "Attend the inspection in person if possible. The inspector will walk you through any concerns on site, before you read the formal report.",
        ],
      },
    ],
    related: [
      "what-does-a-building-inspection-cover",
      "what-if-the-inspector-misses-something",
      "negotiating-after-a-building-inspection",
    ],
  },

  "what-if-the-inspector-misses-something": {
    slug: "what-if-the-inspector-misses-something",
    metaTitle: "What If the Inspector Misses Something? (Adelaide Inspector Recourse)",
    metaDescription:
      "What if an Adelaide building inspector misses a defect? Inspector professional indemnity, AS 4349.1 limitations, dispute paths, and when claims succeed or fail.",
    h1: "What If the Inspector Misses Something?",
    publishedAt: "2026-05-12T00:00:00Z",
    answer:
      "If an Adelaide building inspector misses a defect that was visible on the day of inspection, they may be liable under professional indemnity insurance. AS 4349.1 reports document what was visible and accessible - the standard explicitly excludes hidden defects. Successful claims against inspectors are rare and typically only succeed where the inspector clearly missed something they should have seen. Document everything and consult your solicitor first.",
    body: [
      {
        heading: "The AS 4349.1 limitations clause matters",
        paras: [
          "Every AS 4349.1 report includes an explicit limitations section. The inspector states what was inaccessible (sub-floor with restricted access, roof void with no manhole, areas behind permanent fixtures or vegetation).",
          "If a defect was in an area declared inaccessible, the inspector hasn't 'missed' it - they explicitly noted they couldn't inspect it. Read the limitations carefully when you receive the report.",
        ],
      },
      {
        heading: "What constitutes a 'missed' defect",
        paras: [
          "Genuine miss: defect was visible from accessible areas on inspection day, AS 4349.1 scope clearly required it to be inspected, but the inspector didn't note it in the report.",
          "Not a miss: defect was hidden, in inaccessible areas, or became apparent only after the inspection (e.g. storm damage, ongoing deterioration).",
          "Not a miss: defect was noted but you didn't read the report carefully. Inspectors are professionals; their job is in the report, not in interpreting it for you.",
        ],
      },
      {
        heading: "Inspector professional indemnity insurance",
        paras: [
          "Every inspector in our network holds current professional indemnity insurance. If a genuine miss is established, the insurer indemnifies the inspector for the legitimate loss.",
          "Coverage varies. Insurance excludes deliberate misconduct, work outside the inspector's licence, and inspections that don't meet AS 4349.1 scope.",
        ],
      },
      {
        heading: "How to pursue a claim",
        paras: [
          "1. Read the report carefully, including limitations. Confirm the defect was within scope and not noted.",
          "2. Document everything: photographs, dates, the original report, evidence the defect existed at inspection date.",
          "3. Get a second AS 4349.7 inspection from a different inspector. Their assessment is independent corroboration.",
          "4. Speak to your solicitor before contacting the original inspector. The legal route depends on the size of the loss and the documentation strength.",
          "5. If informal resolution fails, the SACAT tribunal handles consumer building disputes. SACAT proceedings need expert witness evidence (often from the second inspector).",
        ],
      },
      {
        heading: "Realistic expectations",
        paras: [
          "Most defects discovered post-settlement are not inspector misses - they're conditions that have developed since the inspection, defects in inaccessible areas, or items that were noted in the report but overlooked by the buyer.",
          "True misses are rare and time-consuming to pursue. The realistic recovery is typically the remediation cost, less any contributory factor (e.g. you should have read the report more carefully).",
          "The best defence is comparing three quotes and choosing an experienced inspector, not after-the-fact remedies.",
        ],
      },
    ],
    related: [
      "what-does-a-building-inspector-do",
      "can-the-seller-hide-defects",
      "how-to-read-an-inspection-report",
    ],
  },

  "how-to-read-an-inspection-report": {
    slug: "how-to-read-an-inspection-report",
    metaTitle: "How to Read an Adelaide Building Inspection Report",
    metaDescription:
      "How to read an AS 4349.1 building inspection report: executive summary, defect categories, severity ratings, photographs, and recommendations. Practical guide for Adelaide buyers.",
    h1: "How to Read a Building Inspection Report",
    publishedAt: "2026-05-12T00:00:00Z",
    answer:
      "Read the executive summary first - it's the most important page. Then scan the defect log looking for major defects, urgent items, and structural concerns. Review every photograph. Finally read the limitations section to understand what wasn't inspected. The inspector's role is to document; your role is to decide. The report gives you the evidence to decide intelligently.",
    body: [
      {
        heading: "Page 1: executive summary",
        paras: [
          "The executive summary is page 1 for a reason. It's the inspector's plain-English overview of the most important findings. If you only read one page, this is it.",
          "Look for: number of urgent defects, number of major defects, headline opinion on overall property condition, any specific recommendations for further investigation.",
          "If the executive summary mentions urgent or major structural defects, the rest of the report needs careful reading.",
        ],
      },
      {
        heading: "Page 2: scope and limitations",
        paras: [
          "Scope tells you what was inspected (the six AS 4349.1 areas, where accessible). Limitations tells you what wasn't.",
          "Common limitations: inaccessible sub-floor, no roof access, areas behind permanent fixtures, vegetation obscuring external walls, occupant possessions blocking access.",
          "Items in limitations are NOT covered by the report. If you're concerned about an inaccessible area, arrange a follow-up inspection after the obstacles are removed.",
        ],
      },
      {
        heading: "The defect log",
        paras: [
          "Each defect is numbered, photographed, location-tagged, and severity-rated.",
          "Severity ratings vary by inspector but typically: URGENT (safety / immediate action), MAJOR (substantial defect, negotiation-worthy), MINOR (cosmetic or maintenance), MAINTENANCE (routine ageing, plan for it).",
          "Read every defect, even the minor ones. Sometimes minor defects in clusters indicate a bigger underlying issue.",
        ],
      },
      {
        heading: "How to use the photographs",
        paras: [
          "Photographs are evidence. They show what the inspector saw on the day. Match each photo to its defect number in the text.",
          "If you can't immediately see what the photo is showing, the inspector should have annotated it. If they haven't, ask them to clarify.",
          "Save the report. Years from now, if you need to revisit the property's condition history, those photographs are dated, time-stamped evidence.",
        ],
      },
      {
        heading: "Recommendations and further investigation",
        paras: [
          "The inspector flags items needing further investigation: structural engineer assessment, electrical compliance test, asbestos sampling, plumber inspection of waste lines.",
          "Each recommendation is there because the inspector identified something they don't have the scope to fully assess. Don't ignore them.",
          "Recommendations are also a budget line. Factor the cost of recommended follow-up work into your offer or rescission decision.",
        ],
      },
      {
        heading: "What to ask the inspector",
        paras: [
          "What's the single biggest issue on this report?",
          "If you were buying this property at the offered price, what would you negotiate on?",
          "Of the items recommended for further investigation, which are most urgent?",
          "Are there any conditions that suggest the property needs an engineer's review?",
          "What ongoing maintenance should I budget for in the next 12-24 months?",
        ],
      },
    ],
    related: [
      "what-does-a-building-inspection-cover",
      "negotiating-after-a-building-inspection",
      "what-if-the-inspector-misses-something",
    ],
  },

  "negotiating-after-a-building-inspection": {
    slug: "negotiating-after-a-building-inspection",
    metaTitle: "Negotiating After a Building Inspection (Adelaide Buyer's Guide)",
    metaDescription:
      "How to use your Adelaide building inspection report to negotiate price reductions, request remediation, or rescind in cooling-off. Practical scripts and tactics.",
    h1: "Negotiating After a Building Inspection",
    publishedAt: "2026-05-12T00:00:00Z",
    answer:
      "Use the inspection report's executive summary and major defect list to drive negotiation. Three paths: (1) price reduction equal to the remediation cost of major defects, (2) request the seller remediate before settlement, (3) rescind in cooling-off if defects are deal-breakers. Make the request in writing through your conveyancer, attaching the report. Most reasonable sellers accept some negotiation; some refuse - then you decide if the price as-stands is acceptable.",
    body: [
      {
        heading: "Three negotiation paths",
        paras: [
          "Price reduction: the cleanest option. You offer to proceed at a reduced price reflecting the cost of remediating the major defects. The seller does no work; the buyer absorbs remediation responsibility.",
          "Remediation by seller: the seller fixes specified defects before settlement. Works best when the seller has the contractors or time to do the work, and when the defects are well-defined.",
          "Rescission in cooling-off: if the defects are too significant or the seller is unreasonable, you exit the contract. Small forfeit applies (see /guides/cooling-off-period-sa).",
        ],
      },
      {
        heading: "How to use the inspection report in negotiation",
        paras: [
          "Lead with the executive summary. It's the inspector's plain-English assessment, easier for the seller to engage with than a 40-page report.",
          "Cite specific photographs and defect numbers from the report. Specificity makes the case stronger than 'the inspection identified issues'.",
          "Attach indicative remediation costs from a tradie quote (separate from the inspector). If you can put a number on it, the seller can respond to the number.",
          "Go through your conveyancer. Buyer-to-seller direct negotiation can become emotional; conveyancer-to-conveyancer keeps it professional.",
        ],
      },
      {
        heading: "What a reasonable negotiation looks like",
        paras: [
          "Major structural defects (footing movement, roof structure issues): typically negotiate the remediation cost as a price reduction, often $5,000-$30,000 range depending on severity.",
          "Major weatherproofing failures (roof, wet areas, salt damp): similar negotiation, often $3,000-$20,000.",
          "Minor defects and maintenance items: typically not worth negotiating individually. Bundle them as 'general maintenance allowance' if there are many.",
          "Specialist concerns (asbestos, electrical, plumbing): negotiate on the basis of likely specialist remediation cost.",
        ],
      },
      {
        heading: "How sellers typically respond",
        paras: [
          "Engaged seller: accepts some negotiation, often around 50-70% of the buyer's initial requested reduction. Common middle-ground outcome.",
          "Unreasonable seller: refuses any reduction and threatens to relist. Your call - is the price as-stands acceptable given the defects?",
          "Surprised seller: didn't know about the defects (or claims not to). Education-led negotiation works here - the report becomes a teaching tool.",
          "Distressed seller: needs to sell urgently, accepts substantial reduction. Lucky for buyer.",
        ],
      },
      {
        heading: "When to walk away",
        paras: [
          "Major structural defects with unclear cost - footing movement requiring underpinning is the classic example. Cost can run $30,000-$80,000+. Walking is usually the right call.",
          "Multiple major defects compounding - if the inspector identifies 3+ major issues, the total remediation cost can exceed the buyer's contingency.",
          "Seller refuses any negotiation and the report identifies clear major defects. The seller's signalling that they won't fix issues post-settlement either.",
          "Heritage or specialist properties where remediation cost is unknowable without specialist quotes you don't have time to arrange.",
        ],
      },
      {
        heading: "The buyer's mindset",
        paras: [
          "Don't be emotionally invested. Sellers can read panic; it weakens your position.",
          "Have a maximum walk-away price calculated. If the seller won't move to that price, rescind.",
          "Remember: there are other properties. The Adelaide market has options. Walking from one bad deal preserves capital for the next.",
        ],
      },
    ],
    related: [
      "how-to-read-an-inspection-report",
      "cooling-off-period-sa",
      "can-the-seller-hide-defects",
    ],
  },
};
