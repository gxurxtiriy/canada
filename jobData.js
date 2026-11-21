// ============================================================
//  Canada Jobs Portal — 10 Lakh (1,000,000) Job Pages
//  Country: Canada | Schema: JobPosting JSON-LD
// ============================================================

const COUNTRY = {
  name: "Canada",
  sameAs: "https://en.wikipedia.org/wiki/Canada",
  addressCountry: "CA",
};

// ─── ALL COMPANIES (1,000 jobs each = 1,000,000 total) ───────────────────────
const COMPANIES = [
  "Netflix",
  "Delta Airlines",
  "Southwest Airlines",
  "American Airlines",
  "Tesla",
  "Apple",
  "Amazon",
  "Google",
  "Disney",
  "United Airlines",
  "Wayfair",
  "Starbucks",
  "Walmart",
  "American Express",
  "Walgreens",
  "CostCo",
  "Wells Fargo",
  "Aetna",
  "Twitter",
  "PepsiCo",
  "Spirit Airlines",
  "CVS",
  "Hobby Lobby",
  "Home Depot",
  "Target",
  "Yelp",
  "Crocs",
  "Xbox",
  "Dell",
  "Anthem",
  "Sam's Club",
  "LabCorp",
  "TTEC",
  "Polaris",
  "UCHealth",
  "Smith and Wesson",
  "Hulu",
  "NDT",
  "CrunchyRoll",
  "Eddie Bauer",
  "USPC",
  "JetBlue Airlines",
  "UPS",
  "Chewy",
  "Alaska Airlines",
  "Allegiant Air",
  "Avelo Airlines",
  "Breeze Airways",
  "Eastern Airlines",
  "Frontier Airlines",
  "Hawaiian Airlines",
  "Sun Country Airlines",
  "Microsoft",
  "Meta",
  "Uber",
  "Lyft",
  "Airbnb",
  "Shopify",
  "Salesforce",
  "Adobe",
  "Zoom",
  "Slack",
  "Spotify",
  "Twitch",
  "Pinterest",
  "Snap",
  "TikTok",
  "ByteDance",
  "Nvidia",
  "Intel",
  "AMD",
  "Qualcomm",
  "Broadcom",
  "Cisco",
  "Oracle",
  "SAP",
  "IBM",
  "Accenture",
  "Deloitte",
  "PwC",
  "KPMG",
  "EY",
  "McKinsey",
  "BCG",
  "Bain",
  "Goldman Sachs",
  "JPMorgan Chase",
  "Morgan Stanley",
  "Bank of America",
  "Citigroup",
  "HSBC",
  "RBC",
  "TD Bank",
  "Scotiabank",
  "BMO",
  "CIBC",
  "National Bank of Canada",
  "Desjardins",
  "Manulife",
  "Sun Life",
  "Great-West Lifeco",
  "Canada Life",
  "OpenText",
  "Constellation Software",
  "CGI Group",
  "Telus",
  "Bell Canada",
  "Rogers Communications",
  "Shaw Communications",
  "Loblaws",
  "Sobeys",
  "Metro Inc.",
  "Canadian Tire",
  "Tim Hortons",
  "Lululemon",
  "Canadian National Railway",
  "Canadian Pacific Kansas City",
  "Enbridge",
  "Suncor Energy",
  "TC Energy",
  "Pembina Pipeline",
  "Nutrien",
  "Barrick Gold",
  "Agnico Eagle Mines",
  "Teck Resources",
  "Bombardier",
  "Magna International",
  "Linamar",
  "Martinrea",
  "Air Canada",
  "WestJet",
  "Transat A.T.",
  "VIA Rail",
  "Canada Post",
  "Purolator",
  "Fairfax Financial",
  "Power Corporation of Canada",
  "Brookfield Asset Management",
  "George Weston",
  "Empire Company",
  "Restaurant Brands International",
  "Celestica",
  "SNC-Lavalin",
  "Stantec",
  "WSP Global",
  "AtkinsRéalis",
  "CAE",
  "Ritchie Bros. Auctioneers",
  "Toromont Industries",
  "Finning International",
  "Wajax",
  "Ag Growth International",
  "Buhler Industries",
  "ABC Technologies",
  "Deco Automotive",
  "A.P. Plasman",
  "Wyandotte Industries",
  "Henniges Automotive",
  "Nifco",
  "Nexteer Automotive",
  "A123 Systems",
  "Electrovaya",
  "Lithium Americas",
  "Sigma Lithium",
  "Nemaska Lithium",
  "Critical Elements",
  "Sayona Mining",
  "Avalon Advanced Materials",
  "Canada Nickel",
  "FPX Nickel",
  "Sherritt International",
  "Taseko Mines",
  "Copper Mountain Mining",
  "Imperial Metals",
  "Seabridge Gold",
  "Novagold Resources",
  "Osisko Gold Royalties",
  "Franco-Nevada",
  "Wheaton Precious Metals",
  "Royal Gold",
  "Sandstorm Gold",
  "Triple Flag Precious Metals",
  "Osisko Development",
  "B2Gold",
  "Kinross Gold",
  "Yamana Gold",
  "Eldorado Gold",
  "IAMGOLD",
  "Centerra Gold",
  "SSR Mining",
  "Pan American Silver",
  "First Majestic Silver",
  "MAG Silver",
  "Silvercorp Metals",
  "Endeavour Silver",
  "Fortuna Silver Mines",
  "Great Panther Mining",
  "GoGold Resources",
  "Gatos Silver",
  "Hecla Mining",
  "Coeur Mining",
  "Avino Silver & Gold Mines",
  "Excellon Resources",
  "Impact Silver",
  "Bear Creek Mining",
  "Sierra Metals",
  "Amerigo Resources",
  "Los Andes Copper",
  "Marimaca Copper",
  "Solaris Resources",
  "Filo Mining",
  "NGEx Minerals",
  "Josemaria Resources",
  "Candente Copper",
  "Regulus Resources",
  "Alta Copper",
  "Camino Corp",
];

const JOBS_PER_COMPANY = 1000;
const TOTAL_JOBS = COMPANIES.length * JOBS_PER_COMPANY;

// ─── CANADIAN CITIES / LOCATIONS ─────────────────────────────────────────────
const CA_CITIES = [
  "Toronto",
  "Montreal",
  "Vancouver",
  "Calgary",
  "Edmonton",
  "Ottawa",
  "Winnipeg",
  "Quebec City",
  "Hamilton",
  "Kitchener",
  "London",
  "Victoria",
  "Halifax",
  "Oshawa",
  "Windsor",
  "Saskatoon",
  "Regina",
  "St. John's",
  "Kelowna",
  "Barrie",
  "Sherbrooke",
  "Guelph",
  "Kingston",
  "Moncton",
  "Thunder Bay",
  "Saint John",
  "Peterborough",
  "Red Deer",
  "Lethbridge",
  "Nanaimo",
  "Kamloops",
  "Belleville",
  "Chilliwack",
  "Fredericton",
  "Sarnia",
  "Drummondville",
  "Prince George",
  "Sault Ste. Marie",
  "Medicine Hat",
  "Granby",
  "Brantford",
  "Airdrie",
  "Trois-Rivières",
  "Saint-Jean-sur-Richelieu",
  "Pickering",
  "Newmarket",
  "Maple Ridge",
  "Grande Prairie",
  "Spruce Grove",
  "St. Albert",
];

// ─── SALARY RANGES (in CAD per month) ────────────────────────────────────────
const SALARY_RANGES = [
  { min: 3000, max: 4500 },
  { min: 4500, max: 6000 },
  { min: 6000, max: 8000 },
  { min: 8000, max: 10000 },
  { min: 10000, max: 15000 },
  { min: 15000, max: 20000 },
  { min: 20000, max: 30000 },
  { min: 3000, max: 5000 },
  { min: 5000, max: 7000 },
  { min: 7000, max: 9000 },
];

// ─── JOB TITLE TEMPLATES ─────────────────────────────────────────────────────
const TITLE_TEMPLATES = [
  "{company} Remote Jobs (Work From Home) {salMin} To {salMax} CAD",
  "{company} Customer Support Jobs Work From Home Canada",
  "{company} Data Entry Jobs Only - {salMin} To {salMax}/ Monthly",
  "{company} Work From Home Jobs - {salMin} To {salMax} CAD Monthly Salary",
  "{company} Remote Customer Service Representative (Canada)",
  "{company} Virtual Assistant Jobs Canada {salMin}-{salMax}",
  "{company} Online Jobs Canada - No Experience Required",
  "{company} Data Analyst Work From Home Jobs {salMin} To {salMax}",
  "{company} Remote Software Engineer Jobs Canada 2025",
  "{company} Chat Support Agent Work From Home {salMin} To {salMax}",
  "{company} Social Media Manager Remote Jobs Canada",
  "{company} Content Moderator Jobs Work From Home {salMin}",
  "{company} Remote Accounting Jobs Canada - {salMin} To {salMax}",
  "{company} Night Shift Work From Home Jobs {salMin} To {salMax}",
  "{company} Part Time Remote Jobs Canada {salMin} Monthly",
  "{company} Email Support Jobs Work From Home {salMin} To {salMax}",
  "{company} Remote Marketing Jobs Canada {salMin} To {salMax}",
  "{company} Technical Support Specialist Work From Home",
  "{company} HR Remote Jobs Canada {salMin} To {salMax} Monthly",
  "{company} Project Manager Work From Home Canada {salMin}",
  "{company} Remote QA Tester Jobs Canada {salMin} To {salMax}",
  "{company} Graphic Designer Work From Home {salMin} To {salMax}",
  "{company} Video Editor Remote Jobs Canada {salMin} Monthly",
  "{company} Remote Sales Representative Canada {salMin} To {salMax}",
  "{company} Transcriptionist Jobs Work From Home Canada",
  "{company} Remote Business Analyst Jobs Canada {salMin} To {salMax}",
  "{company} UI/UX Designer Work From Home Canada {salMin}",
  "{company} Remote Product Manager Jobs Canada {salMin} To {salMax}",
  "{company} Work From Home Admin Assistant Jobs Canada",
  "{company} Remote Copywriter Jobs Canada {salMin} To {salMax}",
  "{company} Telehealth Nurse Jobs Work From Home Canada",
  "{company} Remote Financial Analyst Jobs Canada {salMin} To {salMax}",
  "{company} Online Tutor Jobs Canada {salMin} To {salMax} Monthly",
  "{company} Remote IT Support Jobs Canada No Experience",
  "{company} Work From Home SEO Specialist Jobs Canada {salMin}",
  "{company} Remote Legal Assistant Jobs Canada {salMin} To {salMax}",
  "{company} Digital Marketing Specialist Work From Home {salMin}",
  "{company} Remote Bookkeeper Jobs Canada {salMin} To {salMax}",
  "{company} Customer Success Manager Work From Home Canada",
  "{company} Remote Operations Analyst Jobs Canada {salMin} To {salMax}",
];

// ─── JOB DESCRIPTIONS ────────────────────────────────────────────────────────
const DESCRIPTIONS = [
  `Join our growing remote team! We are looking for talented individuals based in Canada to work with {company}. This is a fully remote position with competitive pay.

**What You'll Do:**
- Handle customer inquiries via email, chat, and phone
- Process data accurately and efficiently
- Coordinate with team members across different time zones
- Meet daily and weekly performance targets
- Provide excellent service to our global customers

**Requirements:**
- Strong English and/or French communication skills (written and verbal)
- Stable internet connection (minimum 10 Mbps)
- Dedicated workspace at home
- Computer or laptop (Windows 10 or Mac OS)
- Available to work full-time (40 hours/week)

**Benefits:**
- 100% Work From Home
- Health insurance (Provincial Health Insurance)
- 15 days paid vacation
- Paid sick leave
- Internet allowance
- Equipment provided
- Career growth opportunities

Apply now and start your remote career with {company}!`,

  `{company} is hiring remote workers from Canada! No prior experience needed — full training provided. Start earning {salMin} to {salMax} CAD per month from the comfort of your home.

**Position Highlights:**
- Permanent work-from-home setup
- Fixed dayshift / midshift / nightshift schedules available
- Weekends off (depending on account)
- Permanent contract after probation period
- Fast-track promotion for top performers

**Day-to-Day Tasks:**
- Respond to customer concerns promptly
- Document interactions in company CRM
- Escalate complex issues to senior agents
- Maintain quality scores above 95%
- Attend virtual team meetings and training

**Minimum Qualifications:**
- At least 18 years old
- High school diploma or equivalent
- Basic computer literacy
- Willing to work shifting schedules
- Has own laptop/desktop and reliable internet

**Compensation Package:**
- Basic Pay: {salMin} - {salMax} CAD/month
- Language allowance
- Performance incentives
- Health insurance from Day 1
- Life insurance`,

  `We are expanding our Canada-based remote workforce at {company}! This is your chance to join a world-class company and build a rewarding career — all from home.

**About the Role:**
As part of our global team, you'll support operations, customers, or business functions depending on your department. Roles available in customer service, data operations, tech support, finance, HR, and more.

**Core Responsibilities:**
- Execute assigned tasks with accuracy and efficiency
- Communicate professionally with internal and external stakeholders
- Follow company processes and quality guidelines
- Continuously improve skills through training and feedback
- Represent {company} values in every interaction

**Who We're Looking For:**
- Canadian residents with right to work in Canada
- Self-motivated and reliable individuals
- Good internet connection and home office setup
- Fluent in English or French (bilingual preferred)
- Comfortable with digital tools and remote collaboration

**What {company} Offers:**
- Salary: {salMin} to {salMax} CAD per month
- Remote work allowance
- 15 days annual leave
- Registered Retirement Savings Plan (RRSP)
- Training opportunities
- Flexible working hours`,
];

// ─── JOB TYPES ───────────────────────────────────────────────────────────────
const JOB_TYPES = [
  "FULL_TIME",
  "PART_TIME",
  "CONTRACTOR",
  "TEMPORARY",
  "FULL_TIME",
  "FULL_TIME",
  "FULL_TIME",
  "FULL_TIME",
  "PART_TIME",
  "FULL_TIME",
];

// ─── GENERATE A SINGLE JOB ───────────────────────────────────────────────────
function getJob(id) {
  if (id < 1 || id > TOTAL_JOBS) return null;

  const companyIndex = Math.floor((id - 1) / JOBS_PER_COMPANY);
  const jobIndexInCompany = (id - 1) % JOBS_PER_COMPANY;
  const company = COMPANIES[companyIndex];

  const salaryRange = SALARY_RANGES[jobIndexInCompany % SALARY_RANGES.length];
  const salMin = salaryRange.min.toLocaleString();
  const salMax = salaryRange.max.toLocaleString();

  const titleTemplate = TITLE_TEMPLATES[jobIndexInCompany % TITLE_TEMPLATES.length];
  const title = titleTemplate
    .replace(/{company}/g, company)
    .replace(/{salMin}/g, salMin)
    .replace(/{salMax}/g, salMax);

  const city = CA_CITIES[jobIndexInCompany % CA_CITIES.length];
  const isRemote = jobIndexInCompany % 3 !== 0;

  const descTemplate = DESCRIPTIONS[jobIndexInCompany % DESCRIPTIONS.length];
  const description = descTemplate
    .replace(/{company}/g, company)
    .replace(/{salMin}/g, salMin)
    .replace(/{salMax}/g, salMax);

  const jobType = JOB_TYPES[jobIndexInCompany % JOB_TYPES.length];

  // ─── FIXED DATES (after March 2027) ──────────────────────────────────────
  const datePosted = "2026-11-15";
  const validThrough = "2027-03-31";

  return {
    id,
    title,
    company,
    salary: `C$${salMin} - C$${salMax}/month`,
    salaryMin: salaryRange.min,
    salaryMax: salaryRange.max,
    city,
    location: `${city}, Canada`,
    isRemote,
    description,
    jobType,
    datePosted,
    validThrough,
    country: COUNTRY,
    schema: {
      "@context": "https://schema.org/",
      "@type": "JobPosting",
      title: title,
      description: description,
      datePosted: datePosted,
      validThrough: validThrough,
      employmentType: jobType,
      hiringOrganization: {
        "@type": "Organization",
        name: company,
        sameAs: `https://${company.toLowerCase().replace(/[^a-z0-9]/g, "")}.com`,
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: city,
          addressRegion: "Canada",
          addressCountry: "CA",
        },
      },
      applicantLocationRequirements: [
        {
          "@type": "Country",
          name: "Canada",
          sameAs: "https://en.wikipedia.org/wiki/Canada",
        },
      ],
      jobLocationType: isRemote ? "TELECOMMUTE" : undefined,
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "CAD",
        value: {
          "@type": "QuantitativeValue",
          minValue: salaryRange.min,
          maxValue: salaryRange.max,
          unitText: "MONTH",
        },
      },
      directApply: true,
      industry: "Information Technology",
      occupationalCategory: "15-1252.00",
    },
  };
}

module.exports = { TOTAL_JOBS, COMPANIES, JOBS_PER_COMPANY, COUNTRY, getJob };
