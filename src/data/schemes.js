export const schemes = [
  {
    id: "scheme_001",
    name: "National Scholarship for PwD",
    category: "Education",
    description: "Monthly scholarship for students with disabilities pursuing higher education.",
    eligibility: {
      disabilityTypes: ["visual", "locomotor", "hearing", "intellectual"],
      minAge: 18,
      maxAge: 35,
      maxMonthlyIncome: 25000,
      states: ["all"]
    },
    documents: [
      "UDID Card",
      "Income Certificate",
      "Aadhaar Card",
      "Marksheet (last exam)",
      "Bank Passbook"
    ],
    applyUrl: "https://scholarships.gov.in",
    ministry: "Ministry of Social Justice and Empowerment"
  },
  {
    id: "scheme_002",
    name: "UDID Card Registration",
    category: "Identity",
    description: "Unique Disability ID card for accessing all disability-related benefits.",
    eligibility: {
      disabilityTypes: ["all"],
      minAge: 0,
      maxAge: 120,
      maxMonthlyIncome: null,
      states: ["all"]
    },
    documents: [
      "Aadhaar Card",
      "Medical Certificate from authorized doctor",
      "Passport size photo",
      "Address Proof"
    ],
    applyUrl: "https://www.swavlambancard.gov.in",
    ministry: "Ministry of Social Justice and Empowerment"
  },
  {
    id: "scheme_003",
    name: "Accessible India Campaign (Sugamya Bharat)",
    category: "Infrastructure",
    description: "Support for making public spaces, transport, and digital platforms accessible for PwD.",
    eligibility: {
      disabilityTypes: ["locomotor", "visual"],
      minAge: 18,
      maxAge: 65,
      maxMonthlyIncome: 50000,
      states: ["all"]
    },
    documents: [
      "UDID Card",
      "Aadhaar Card",
      "Disability Certificate"
    ],
    applyUrl: "https://accessibleindia.gov.in",
    ministry: "Ministry of Social Justice and Empowerment"
  },
  {
    id: "scheme_004",
    name: "ADIP Scheme (Assistive Devices)",
    category: "Assistive Technology",
    description: "Free or subsidized assistive devices such as wheelchairs, hearing aids, braille kits, crutches, and tricycles for persons with disabilities.",
    eligibility: {
      disabilityTypes: ["visual", "locomotor", "hearing", "intellectual", "multiple"],
      minAge: 0,
      maxAge: 120,
      maxMonthlyIncome: 20000,
      states: ["all"]
    },
    documents: [
      "UDID Card or Disability Certificate",
      "Income Certificate",
      "Aadhaar Card",
      "Passport size photo",
      "Bank Passbook"
    ],
    applyUrl: "https://alimco.in",
    ministry: "Ministry of Social Justice and Empowerment"
  },
  {
    id: "scheme_005",
    name: "Divyangjan Swavalamban Yojana (NHFDC Loan)",
    category: "Employment & Entrepreneurship",
    description: "Concessional loans for self-employment and entrepreneurship for persons with disabilities at interest rates as low as 5% per annum.",
    eligibility: {
      disabilityTypes: ["all"],
      minAge: 18,
      maxAge: 60,
      maxMonthlyIncome: 25000,
      states: ["all"]
    },
    documents: [
      "UDID Card",
      "Aadhaar Card",
      "PAN Card",
      "Bank Passbook",
      "Business Plan / Project Report",
      "Income Certificate"
    ],
    applyUrl: "https://nhfdc.nic.in",
    ministry: "Ministry of Social Justice and Empowerment"
  },
  {
    id: "scheme_006",
    name: "Indira Gandhi National Disability Pension",
    category: "Pension",
    description: "Monthly pension of ₹300–₹500 for persons with severe disabilities (80%+ disability) living below the poverty line.",
    eligibility: {
      disabilityTypes: ["visual", "locomotor", "hearing", "intellectual", "multiple"],
      minAge: 18,
      maxAge: 79,
      maxMonthlyIncome: 10000,
      states: ["all"]
    },
    documents: [
      "Disability Certificate (80%+ disability)",
      "BPL Card or Income Certificate",
      "Aadhaar Card",
      "Bank Passbook",
      "Passport size photo"
    ],
    applyUrl: "https://nsap.nic.in",
    ministry: "Ministry of Rural Development"
  },
  {
    id: "scheme_007",
    name: "Special Employment Exchange for PwD",
    category: "Employment",
    description: "Job placement assistance, vocational guidance, and employment registration for persons with disabilities through district employment offices.",
    eligibility: {
      disabilityTypes: ["all"],
      minAge: 18,
      maxAge: 45,
      maxMonthlyIncome: null,
      states: ["all"]
    },
    documents: [
      "UDID Card or Disability Certificate",
      "Educational Certificates",
      "Aadhaar Card",
      "Passport size photo",
      "Resume / CV"
    ],
    applyUrl: "https://www.ncs.gov.in",
    ministry: "Ministry of Labour and Employment"
  },
  {
    id: "scheme_008",
    name: "Deendayal Disabled Rehabilitation Scheme (DDRS)",
    category: "Rehabilitation",
    description: "Financial support to NGOs providing rehabilitation services including education, vocational training, and community-based care for PwD.",
    eligibility: {
      disabilityTypes: ["all"],
      minAge: 0,
      maxAge: 120,
      maxMonthlyIncome: null,
      states: ["all"]
    },
    documents: [
      "UDID Card or Disability Certificate",
      "Referral from registered NGO or rehabilitation centre",
      "Aadhaar Card"
    ],
    applyUrl: "https://disabilityaffairs.gov.in",
    ministry: "Ministry of Social Justice and Empowerment"
  },
  {
    id: "scheme_009",
    name: "Tax Exemption under Section 80U (Income Tax)",
    category: "Financial Relief",
    description: "Income tax deduction of ₹75,000 for persons with 40–80% disability and ₹1,25,000 for severe disability (80%+).",
    eligibility: {
      disabilityTypes: ["all"],
      minAge: 18,
      maxAge: 120,
      maxMonthlyIncome: null,
      states: ["all"]
    },
    documents: [
      "Disability Certificate (Form 10-IA)",
      "PAN Card",
      "Aadhaar Card",
      "Income Tax Return documents"
    ],
    applyUrl: "https://incometaxindia.gov.in",
    ministry: "Ministry of Finance"
  },
  {
    id: "scheme_010",
    name: "Skill Development for PwD (PMKVY-PwD)",
    category: "Skill Development",
    description: "Free skill training programs tailored for persons with disabilities under Pradhan Mantri Kaushal Vikas Yojana with placement support.",
    eligibility: {
      disabilityTypes: ["all"],
      minAge: 15,
      maxAge: 45,
      maxMonthlyIncome: 30000,
      states: ["all"]
    },
    documents: [
      "UDID Card or Disability Certificate",
      "Aadhaar Card",
      "Educational Certificate",
      "Passport size photo"
    ],
    applyUrl: "https://pmkvyofficial.org",
    ministry: "Ministry of Skill Development and Entrepreneurship"
  },
  {
    id: "scheme_011",
    name: "Free Bus Pass for PwD (Maharashtra)",
    category: "Transport",
    description: "Free travel on MSRTC and BEST buses for persons with 40%+ disability in Maharashtra.",
    eligibility: {
      disabilityTypes: ["all"],
      minAge: 0,
      maxAge: 120,
      maxMonthlyIncome: null,
      states: ["Maharashtra"]
    },
    documents: [
      "UDID Card or Disability Certificate",
      "Aadhaar Card",
      "Passport size photo",
      "Residence Proof (Maharashtra)"
    ],
    applyUrl: "https://msrtc.maharashtra.gov.in",
    ministry: "Maharashtra State Road Transport Corporation"
  },
  {
    id: "scheme_012",
    name: "Sanjay Gandhi Niradhar Anudan Yojana (Maharashtra)",
    category: "Pension",
    description: "Monthly financial assistance of ₹600–₹900 for destitute and disabled persons in Maharashtra unable to work.",
    eligibility: {
      disabilityTypes: ["all"],
      minAge: 18,
      maxAge: 65,
      maxMonthlyIncome: 21000,
      states: ["Maharashtra"]
    },
    documents: [
      "Disability Certificate (40%+)",
      "Aadhaar Card",
      "Ration Card",
      "Income Certificate",
      "Bank Passbook",
      "Residence Proof (Maharashtra)"
    ],
    applyUrl: "https://aaplesarkar.mahaonline.gov.in",
    ministry: "Social Justice Department, Government of Maharashtra"
  },
  {
    id: "scheme_013",
    name: "Concession in Railway Travel for PwD",
    category: "Transport",
    description: "50–75% concession on Indian Railways tickets for persons with disabilities and one escort across all classes.",
    eligibility: {
      disabilityTypes: ["visual", "locomotor", "hearing", "intellectual", "multiple"],
      minAge: 0,
      maxAge: 120,
      maxMonthlyIncome: null,
      states: ["all"]
    },
    documents: [
      "UDID Card or Disability Certificate",
      "Aadhaar Card",
      "Identity Proof"
    ],
    applyUrl: "https://www.irctc.co.in",
    ministry: "Ministry of Railways"
  },
  {
    id: "scheme_014",
    name: "Pradhan Mantri Awas Yojana Priority for PwD",
    category: "Housing",
    description: "Priority allotment of affordable housing under PMAY for persons with disabilities including ground-floor preference and accessibility features.",
    eligibility: {
      disabilityTypes: ["all"],
      minAge: 18,
      maxAge: 120,
      maxMonthlyIncome: 50000,
      states: ["all"]
    },
    documents: [
      "UDID Card or Disability Certificate",
      "Aadhaar Card",
      "Income Certificate",
      "Bank Passbook",
      "Proof of no existing pucca house"
    ],
    applyUrl: "https://pmaymis.gov.in",
    ministry: "Ministry of Housing and Urban Affairs"
  },
  {
    id: "scheme_015",
    name: "National Fellowship for PwD (UGC)",
    category: "Education",
    description: "Fellowship for PwD students pursuing MPhil and PhD programs — covers fees, monthly stipend of ₹31,000, and contingency allowance.",
    eligibility: {
      disabilityTypes: ["all"],
      minAge: 18,
      maxAge: 35,
      maxMonthlyIncome: null,
      states: ["all"]
    },
    documents: [
      "UDID Card or Disability Certificate (40%+)",
      "Postgraduate Marksheet",
      "University Admission Letter",
      "Aadhaar Card",
      "Bank Passbook",
      "Caste Certificate (if applicable)"
    ],
    applyUrl: "https://ugc.ac.in",
    ministry: "University Grants Commission (UGC)"
  },
  {
    id: "scheme_016",
    name: "Assistance to Disabled Persons for Purchase of Aids (State — Maharashtra)",
    category: "Assistive Technology",
    description: "State-level financial assistance for purchasing assistive devices such as artificial limbs, callipers, and tricycles for Maharashtra residents.",
    eligibility: {
      disabilityTypes: ["locomotor", "visual", "hearing"],
      minAge: 0,
      maxAge: 65,
      maxMonthlyIncome: 15000,
      states: ["Maharashtra"]
    },
    documents: [
      "Disability Certificate",
      "Income Certificate",
      "Aadhaar Card",
      "Prescription from government doctor",
      "Bank Passbook",
      "Residence Proof (Maharashtra)"
    ],
    applyUrl: "https://sjsa.maharashtra.gov.in",
    ministry: "Social Justice Department, Government of Maharashtra"
  },
  {
    id: "scheme_017",
    name: "3% Reservation in Government Jobs for PwD",
    category: "Employment",
    description: "Horizontal reservation of 3% (1% each for blind/low vision, deaf/hard of hearing, locomotor/cerebral palsy) in central government jobs.",
    eligibility: {
      disabilityTypes: ["visual", "locomotor", "hearing"],
      minAge: 18,
      maxAge: 42,
      maxMonthlyIncome: null,
      states: ["all"]
    },
    documents: [
      "UDID Card or Disability Certificate",
      "Aadhaar Card",
      "Educational Certificates",
      "Caste Certificate (if applicable)"
    ],
    applyUrl: "https://www.upsc.gov.in",
    ministry: "Department of Personnel and Training"
  },
  {
    id: "scheme_018",
    name: "Niramaya Health Insurance for PwD",
    category: "Health",
    description: "Health insurance coverage up to ₹1 lakh per year for persons with intellectual disabilities, autism, cerebral palsy, and multiple disabilities at a premium of ₹250–₹500/year.",
    eligibility: {
      disabilityTypes: ["intellectual", "autism", "cerebral_palsy", "multiple"],
      minAge: 0,
      maxAge: 120,
      maxMonthlyIncome: null,
      states: ["all"]
    },
    documents: [
      "Disability Certificate",
      "Aadhaar Card",
      "Passport size photo",
      "Bank Passbook"
    ],
    applyUrl: "https://www.nhfdc.nic.in",
    ministry: "National Trust for Welfare of Persons with Autism, CP, MR & MD"
  },
  {
    id: "scheme_019",
    name: "Legal Guardianship under National Trust Act",
    category: "Legal",
    description: "Legal guardianship support for adults with autism, cerebral palsy, intellectual disabilities to help manage financial and legal decisions.",
    eligibility: {
      disabilityTypes: ["intellectual", "autism", "cerebral_palsy", "multiple"],
      minAge: 18,
      maxAge: 120,
      maxMonthlyIncome: null,
      states: ["all"]
    },
    documents: [
      "Disability Certificate",
      "Aadhaar Card of person with disability",
      "Aadhaar Card of proposed guardian",
      "Relationship Proof",
      "Court affidavit (if applicable)"
    ],
    applyUrl: "https://www.thenationaltrust.gov.in",
    ministry: "Ministry of Social Justice and Empowerment"
  },
  {
    id: "scheme_020",
    name: "Ayushman Bharat PM-JAY for PwD",
    category: "Health",
    description: "Health coverage up to ₹5 lakh per year for secondary and tertiary hospitalisation for eligible PwD families covered under PM-JAY.",
    eligibility: {
      disabilityTypes: ["all"],
      minAge: 0,
      maxAge: 120,
      maxMonthlyIncome: 10000,
      states: ["all"]
    },
    documents: [
      "Aadhaar Card",
      "Ration Card or SECC data proof",
      "UDID Card or Disability Certificate",
      "PM-JAY eligibility letter"
    ],
    applyUrl: "https://pmjay.gov.in",
    ministry: "Ministry of Health and Family Welfare"
  }
]
