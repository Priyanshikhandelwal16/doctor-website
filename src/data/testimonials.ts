export interface Testimonial {
  id: string;
  name: string;
  age: number;
  location: string;
  condition: string;
  treatment: string;
  quote: string;
  rating: number;
  date: string;
  image: string;
  recoveryStats?: { label: string; before: string; after: string }[];
  videoUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Ramesh Kumar Sharma",
    age: 58,
    location: "Jaipur",
    condition: "Acute Heart Attack (LAD Blockage)",
    treatment: "Emergency Primary Angioplasty",
    quote: "I collapsed at my shop with severe chest pain. My family called HeartCare's emergency line and within 45 minutes, Dr. Mehta had opened my blocked artery. I'm back to running my business. He didn't just save my heart — he saved my family.",
    rating: 5,
    date: "2025-03-10",
    image: "https://ui-avatars.com/api/?name=Ramesh+Sharma&background=0A1628&color=fff&size=128",
    recoveryStats: [
      { label: "Ejection Fraction", before: "35%", after: "55%" },
      { label: "Exercise Capacity", before: "50 meters walk", after: "2 km daily walk" },
      { label: "Return to Work", before: "—", after: "3 weeks" },
    ],
    videoUrl: "#",
  },
  {
    id: "2",
    name: "Priya Agarwal",
    age: 45,
    location: "Ajmer",
    condition: "Triple Vessel Coronary Disease",
    treatment: "Multi-vessel Angioplasty with Drug-Eluting Stents",
    quote: "Three arteries blocked and I was terrified of bypass surgery. Dr. Mehta explained every option patiently. He performed angioplasty on all three vessels over two sessions. His confidence and transparency made all the difference.",
    rating: 5,
    date: "2025-02-22",
    image: "https://ui-avatars.com/api/?name=Priya+Agarwal&background=4A90D9&color=fff&size=128",
    recoveryStats: [
      { label: "Angina Episodes", before: "Daily", after: "Zero in 6 months" },
      { label: "LDL Cholesterol", before: "186 mg/dL", after: "72 mg/dL" },
    ],
  },
  {
    id: "3",
    name: "Col. (Retd.) Vikram Singh",
    age: 67,
    location: "Jaipur",
    condition: "Atrial Fibrillation & Heart Failure",
    treatment: "Medical Management & Device Evaluation",
    quote: "After retirement, my heart started failing me — breathlessness, swelling, constant fatigue. Dr. Mehta restructured my entire medication regimen and enrolled me in cardiac rehab. At 67, I feel 50 again.",
    rating: 5,
    date: "2025-01-15",
    image: "https://ui-avatars.com/api/?name=Vikram+Singh&background=2A9D8F&color=fff&size=128",
    recoveryStats: [
      { label: "Hospital Admissions", before: "3 in 6 months", after: "Zero in 12 months" },
      { label: "Daily Steps", before: "500", after: "6,000+" },
    ],
  },
  {
    id: "4",
    name: "Sunita Devi",
    age: 52,
    location: "Sikar",
    condition: "Uncontrolled Hypertension",
    treatment: "Hypertension Management Program",
    quote: "My BP was 180/110 despite taking medicines from three doctors. Dr. Mehta identified the wrong drug combination and started 24-hour BP monitoring. Within a month, my BP was 128/82. Simple, but life-changing.",
    rating: 5,
    date: "2024-12-08",
    image: "https://ui-avatars.com/api/?name=Sunita+Devi&background=C9A227&color=fff&size=128",
    recoveryStats: [
      { label: "Blood Pressure", before: "180/110", after: "128/82" },
      { label: "Medications", before: "4 drugs", after: "2 drugs" },
    ],
  },
  {
    id: "5",
    name: "Ankit Meena",
    age: 38,
    location: "Jaipur",
    condition: "Preventive Cardiology — High Risk",
    treatment: "Preventive Cardiology Program",
    quote: "My father had a heart attack at 50. Dr. Mehta's preventive program found my cholesterol was dangerously high despite being young and fit-looking. Early intervention probably saved me from the same fate.",
    rating: 5,
    date: "2024-11-20",
    image: "https://ui-avatars.com/api/?name=Ankit+Meena&background=1A3A5C&color=fff&size=128",
    recoveryStats: [
      { label: "LDL Cholesterol", before: "168 mg/dL", after: "89 mg/dL" },
      { label: "Coronary Calcium Score", before: "Moderate risk", after: "Stable on therapy" },
    ],
  },
  {
    id: "6",
    name: "Kamla Bhandari",
    age: 71,
    location: "Jaipur",
    condition: "Severe Aortic Stenosis (Evaluated)",
    treatment: "Comprehensive Evaluation & Referral",
    quote: "Dr. Mehta's thorough echo revealed my valve problem that two other doctors missed. He coordinated my TAVI procedure at a partner centre and managed my follow-up. Having one trusted cardiologist coordinate everything was invaluable.",
    rating: 5,
    date: "2024-10-05",
    image: "https://ui-avatars.com/api/?name=Kamla+Bhandari&background=E63946&color=fff&size=128",
  },
];
