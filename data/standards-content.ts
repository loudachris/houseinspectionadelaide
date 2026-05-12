export type StandardContent = {
  slug: string;
  code: string;
  fullCode: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  scope: string[];
  whatItDefines: { title: string; body: string }[];
  whoUsesIt: string[];
  reportRequirements: string[];
  limitations: string;
  relatedServices: string[];
  relatedStandards: string[];
};

export const STANDARDS: Record<string, StandardContent> = {
  "as-4349-0": {
    slug: "as-4349-0",
    code: "AS 4349.0",
    fullCode: "AS 4349.0-2007",
    title: "General Inspection of Buildings",
    metaTitle: "AS 4349.0 Explained | General Building Inspection Standard (Adelaide)",
    metaDescription:
      "AS 4349.0-2007 is the parent Australian Standard for building inspections. Covers handover, defect, progress, and general condition inspections.",
    shortDescription:
      "The parent standard for Australian building inspections. Defines the general principles, format, and limitations that all sub-standards build on. Covers handover, defect, progress, and general condition inspections.",
    scope: [
      "General-purpose building inspections not covered by 4349.1 (pre-purchase) or 4349.3 (timber pest)",
      "Handover / practical completion inspections on new builds",
      "Staged construction inspections through a build",
      "General condition assessments outside of a property transaction",
    ],
    whatItDefines: [
      {
        title: "Inspector qualifications",
        body: "Defines minimum qualifications, licensing, and insurance requirements for inspectors operating under the standard.",
      },
      {
        title: "Report format",
        body: "Required sections: executive summary, scope, methodology, limitations, defects with photographs, recommendations.",
      },
      {
        title: "Limitations disclosure",
        body: "Every report must explicitly state what wasn't inspected and why (inaccessibility, weather, vegetation, occupant possessions blocking access).",
      },
      {
        title: "Photographic evidence",
        body: "Defects must be documented with location-tagged photographs sufficient to identify and locate the issue on a follow-up visit.",
      },
    ],
    whoUsesIt: [
      "Buyers and owners commissioning general condition inspections",
      "New-build owners arranging handover or staged inspections",
      "Body corporates assessing common property condition",
      "Investors auditing property condition outside of a purchase context",
    ],
    reportRequirements: [
      "Property identification (address, type, age)",
      "Inspection date and weather conditions",
      "Inspector licence number and insurance details",
      "Defined scope of inspection",
      "Explicit limitations and inaccessible areas",
      "Defects with photographs, severity rating, and location",
      "Recommendations for further investigation where needed",
      "Executive summary in plain English",
    ],
    limitations:
      "AS 4349.0 is a visual inspection standard. It does not include destructive investigation (no opening up of walls or ceilings), electrical or gas compliance testing, structural engineering certification, or environmental hazard testing beyond visible observation.",
    relatedServices: ["handover-inspection", "staged-building-inspections"],
    relatedStandards: ["as-4349-1", "as-4349-3", "as-4349-7"],
  },

  "as-4349-1": {
    slug: "as-4349-1",
    code: "AS 4349.1",
    fullCode: "AS 4349.1-2007",
    title: "Pre-Purchase Inspections - Residential Buildings",
    metaTitle: "AS 4349.1 Explained | Pre-Purchase Inspection Standard (Adelaide)",
    metaDescription:
      "AS 4349.1-2007 is the Australian Standard for pre-purchase residential inspections. Defines scope, format, and limitations for the most common inspection type in Adelaide.",
    shortDescription:
      "The Australian Standard for pre-purchase residential inspections. Defines the six areas of inspection (interior, exterior, roof, sub-floor, roof void, site), the report format, and the limitations every inspector must declare. This is the standard most Adelaide pre-purchase inspections are conducted to.",
    scope: [
      "Residential building interior - all accessible rooms, fixtures, finishes",
      "Residential building exterior - cladding, windows, doors, paint",
      "Roof exterior - tile/sheet condition, ridge capping, flashings, gutters",
      "Roof space (where accessible) - insulation, framing, water entry signs",
      "Sub-floor space (where accessible) - ventilation, framing, dampness",
      "Site - drainage, paths, retaining walls, ancillary buildings within 30m",
    ],
    whatItDefines: [
      {
        title: "Six areas of inspection",
        body: "Building interior, building exterior, roof exterior, roof space, sub-floor space, and site. Each area has defined sub-elements that must be visually inspected.",
      },
      {
        title: "Major vs minor defect categorisation",
        body: "Major defects: structural, weatherproofing, safety, or significant cost. Minor defects: cosmetic, maintenance, or minor functional issues.",
      },
      {
        title: "Format and structure of the report",
        body: "Executive summary on page 1. Scope, methodology, limitations explicitly stated. Defect log with photographs, location tags, and severity ratings.",
      },
      {
        title: "Time limits on report validity",
        body: "AS 4349.1 reports describe condition on the day of inspection only. They do not guarantee future condition. Reports older than 30 days should be questioned in any negotiation.",
      },
    ],
    whoUsesIt: [
      "Property buyers under cooling-off pressure",
      "Anyone considering an offer on an Adelaide residential property",
      "Auction-day buyers needing pre-auction certainty",
      "Out-of-town buyers who can't inspect personally",
      "Investors evaluating residential portfolio additions",
    ],
    reportRequirements: [
      "Property description and full address",
      "Inspection date, weather, building occupancy",
      "Inspector licence number, insurance currency",
      "All six AS 4349.1 areas explicitly addressed (or noted as inaccessible)",
      "Major defects flagged separately from minor",
      "Photographic evidence of every flagged defect",
      "Maintenance recommendations within 12-24 month horizon",
      "Plain-English executive summary",
    ],
    limitations:
      "AS 4349.1 is non-invasive visual inspection. The inspector cannot lift carpets, move furniture, open walls, or access areas behind permanent fixtures. Reports must explicitly state these limitations. The inspection is not a guarantee of property condition - it documents what was visible on the inspection day.",
    relatedServices: ["pre-purchase-building-inspection", "building-and-pest-inspection"],
    relatedStandards: ["as-4349-0", "as-4349-3", "as-4349-7"],
  },

  "as-4349-3": {
    slug: "as-4349-3",
    code: "AS 4349.3",
    fullCode: "AS 4349.3-2010",
    title: "Timber Pest Inspections",
    metaTitle: "AS 4349.3 Explained | Timber Pest Inspection Standard (Adelaide)",
    metaDescription:
      "AS 4349.3-2010 is the Australian Standard for timber pest inspections. Covers termites, borers, fungal decay, and conducive conditions.",
    shortDescription:
      "The Australian Standard for timber pest inspections. Covers three categories: subterranean termites (especially Coptotermes acinaciformis in Adelaide), timber borer activity, and fungal decay - plus assessment of conducive conditions on site.",
    scope: [
      "Subterranean termite activity and evidence",
      "Drywood termite activity (rare in metro Adelaide but possible)",
      "Timber borer activity (current and historic)",
      "Wood-decay fungi (wet rot, dry rot)",
      "Conducive conditions on site that attract or sustain timber pests",
    ],
    whatItDefines: [
      {
        title: "Three timber pest categories",
        body: "Termites, borers, and fungal decay - the trio of biological threats to structural timber. Each category has different detection methods and recommended actions.",
      },
      {
        title: "Active vs historic activity",
        body: "Reports must distinguish between current/active pest activity and historic/dormant signs. This affects treatment urgency.",
      },
      {
        title: "Conducive conditions assessment",
        body: "Site conditions that attract or sustain timber pests: timber-to-ground contact, sub-floor moisture, blocked vents, vegetation against external walls, sleepers in garden beds.",
      },
      {
        title: "Risk rating and recommended action",
        body: "Each finding is rated for severity. Recommendations distinguish between further investigation, treatment, conducive-condition correction, and ongoing monitoring.",
      },
    ],
    whoUsesIt: [
      "Pre-purchase buyers of any pre-1987 home (typical combo with AS 4349.1)",
      "Adelaide Hills, established eastern suburb, and termite-corridor property buyers",
      "Owners arranging annual termite monitoring",
      "Anyone with suspected mud-tubes, frass, or unexplained timber damage",
    ],
    reportRequirements: [
      "Property identification",
      "Inspection date and weather (affects termite behaviour)",
      "Inspector licence, insurance, and timber pest qualifications",
      "All accessible timber elements visually inspected (or noted as inaccessible)",
      "Moisture meter readings on suspect timber",
      "Photographic evidence of any activity or conducive conditions",
      "Active vs historic activity clearly distinguished",
      "Risk rating and clear recommended next steps",
    ],
    limitations:
      "AS 4349.3 is non-invasive visual inspection. The inspector cannot break through wall surfaces, lift carpets, or destructively test timber. Some timber pest activity is concealed and may not be detected. AS 4349.3 is condition assessment, not a guarantee of future pest-free status.",
    relatedServices: ["pest-inspection", "termite-inspection", "building-and-pest-inspection"],
    relatedStandards: ["as-4349-0", "as-4349-1", "as-4349-7"],
  },

  "as-4349-7": {
    slug: "as-4349-7",
    code: "AS 4349.7",
    fullCode: "AS 4349.7-2013",
    title: "Inspections for Reasons Other Than Pre-Purchase",
    metaTitle: "AS 4349.7 Explained | Defect Inspection Standard (Adelaide)",
    metaDescription:
      "AS 4349.7-2013 is the Australian Standard for inspections other than pre-purchase. Covers defect, dispute, warranty, and second-opinion inspections.",
    shortDescription:
      "The Australian Standard for inspections conducted for purposes other than pre-purchase. Covers defect inspections, dispute documentation, warranty claims, and second-opinion inspections. Scope is defined by the client's brief, not a broad property assessment.",
    scope: [
      "Targeted defect inspections on known issues",
      "Builder dispute documentation",
      "Statutory warranty claim support (SA Building Indemnity scheme)",
      "Body corporate / strata defect investigations",
      "Insurance claim documentation",
      "Second-opinion inspections on contested reports",
    ],
    whatItDefines: [
      {
        title: "Brief-defined scope",
        body: "Unlike AS 4349.1 (broad pre-purchase scope), AS 4349.7 lets the client define the scope. The inspector confirms scope before attending.",
      },
      {
        title: "Forensic-style documentation",
        body: "Reports are designed to support disputes, claims, and tribunal proceedings. Photographic evidence, crack measurements, moisture readings, and cause analysis are more detailed than typical AS 4349.1 reports.",
      },
      {
        title: "Cause analysis",
        body: "Best-effort identification of likely cause: movement, water ingress, workmanship, design, settlement. This supports warranty and insurance claims.",
      },
      {
        title: "Suitability for legal proceedings",
        body: "Reports are written to support SACAT tribunal proceedings and other dispute resolution forums. Some inspectors are qualified expert witnesses.",
      },
    ],
    whoUsesIt: [
      "Owners in builder dispute or warranty claim",
      "Body corporates investigating recurring building defects",
      "Tenants documenting habitability concerns",
      "Anyone needing forensic documentation of a building issue",
    ],
    reportRequirements: [
      "Defined client brief (the specific issue investigated)",
      "Property identification",
      "Inspection date and conditions",
      "Inspector licence, insurance, and forensic experience details",
      "Detailed examination of the brief-defined defect",
      "Cause analysis where determinable",
      "Indicative remediation outline (not a quote)",
      "Suitability statement (e.g. 'suitable for use in SACAT proceedings')",
    ],
    limitations:
      "AS 4349.7 is non-invasive visual inspection unless the brief specifies otherwise. Cause analysis is best-effort - some causes can only be confirmed through destructive investigation by other specialists. Inspectors are not legal experts; legal advice on the merits of a claim is the role of your solicitor.",
    relatedServices: ["defect-inspection"],
    relatedStandards: ["as-4349-0", "as-4349-1", "as-4349-3"],
  },
};
