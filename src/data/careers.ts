export interface JobPosition {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export const jobPositions: JobPosition[] = [
  {
    id: "1",
    title: "Staff Nurse — Cardiac Care",
    department: "Nursing",
    type: "Full-time",
    location: "Jaipur",
    description: "Join our cardiac nursing team providing pre and post-procedure care in our cath lab and recovery units.",
    requirements: [
      "B.Sc Nursing or GNM with valid Rajasthan Nursing Council registration",
      "Minimum 2 years experience in cardiac or ICU nursing",
      "ACLS certification preferred",
      "Compassionate patient care orientation",
    ],
    responsibilities: [
      "Pre and post-angioplasty patient monitoring",
      "Cath lab assistance during procedures",
      "Patient education on medications and lifestyle",
      "Emergency response support",
    ],
  },
  {
    id: "2",
    title: "Cardiac Technologist",
    department: "Diagnostics",
    type: "Full-time",
    location: "Jaipur",
    description: "Operate and maintain our ECG, echo, TMT, and Holter monitoring equipment with precision.",
    requirements: [
      "Diploma or B.Sc in Cardiac Technology",
      "Experience with Philips or GE echo systems",
      "Knowledge of TMT protocols and Holter analysis",
      "Attention to detail and quality reporting",
    ],
    responsibilities: [
      "Perform ECG, 2D echo, and TMT procedures",
      "Holter monitor setup and preliminary analysis",
      "Equipment maintenance and quality checks",
      "Coordinate with cardiologist for urgent cases",
    ],
  },
  {
    id: "3",
    title: "Front Desk & Patient Coordinator",
    department: "Administration",
    type: "Full-time",
    location: "Jaipur",
    description: "Be the first point of contact for patients — managing appointments, inquiries, and ensuring a premium patient experience.",
    requirements: [
      "Graduate with excellent Hindi and English communication",
      "2+ years experience in healthcare front desk",
      "Proficiency in clinic management software",
      "Warm, professional demeanour",
    ],
    responsibilities: [
      "Appointment scheduling and patient check-in",
      "Insurance and billing coordination",
      "Phone and WhatsApp inquiry management",
      "Maintain waiting area and patient flow",
    ],
  },
  {
    id: "4",
    title: "Medical Content Writer (Part-time)",
    department: "Marketing",
    type: "Part-time / Remote",
    location: "Remote",
    description: "Create patient-friendly cardiac health content for our blog, social media, and patient education materials.",
    requirements: [
      "Background in medical writing or life sciences",
      "Ability to translate complex cardiology into simple language",
      "Portfolio of healthcare content",
      "SEO writing knowledge preferred",
    ],
    responsibilities: [
      "Write blog articles reviewed by Dr. Mehta",
      "Create patient education pamphlets",
      "Social media content drafts",
      "FAQ and website content updates",
    ],
  },
];

export const clinicCulture = {
  values: [
    { title: "Clinical Excellence", description: "We pursue the highest standards in every procedure, every diagnosis, every interaction." },
    { title: "Compassionate Care", description: "Patients are scared when they arrive. We treat them with the empathy we'd want for our own families." },
    { title: "Continuous Learning", description: "Medicine evolves daily. Our team participates in regular training, conferences, and skill upgrades." },
    { title: "Team Collaboration", description: "From nurses to technologists to admin — every role is essential to saving lives." },
  ],
  benefits: [
    "Competitive salary with performance incentives",
    "Health insurance for employee and family",
    "Paid training and conference attendance",
    "Modern, NABH-accredited work environment",
    "Career growth in a expanding cardiac centre",
  ],
};
