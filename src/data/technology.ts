export interface Technology {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  overview: string;
  features: string[];
  benefits: string[];
  usedFor: string[];
}

export const technologies: Technology[] = [
  {
    id: "cath-lab",
    title: "Advanced Biplane Cath Lab",
    shortDescription: "State-of-the-art catheterization laboratory for angiography, angioplasty, and emergency primary PCI.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=500&fit=crop",
    overview:
      "Our biplane cath lab represents the gold standard in interventional cardiology infrastructure. Equipped with dual X-ray sources for simultaneous imaging from two angles, it enables Dr. Mehta to navigate complex coronary anatomy with precision during angioplasty, stenting, and emergency heart attack interventions.",
    features: [
      "Biplane fluoroscopy with low-radiation protocols",
      "Intravascular ultrasound (IVUS) integration",
      "Rotational atherectomy capability",
      "Real-time hemodynamic monitoring",
      "24/7 emergency activation protocol",
    ],
    benefits: [
      "Reduced procedure time and radiation exposure",
      "Higher success rates for complex lesions",
      "Door-to-balloon time under 60 minutes",
      "Immediate intervention for heart attacks",
    ],
    usedFor: ["Coronary angiography", "Angioplasty & stenting", "Primary PCI", "Right heart catheterization"],
  },
  {
    id: "digital-ecg",
    title: "Digital 12-Lead ECG Systems",
    shortDescription: "High-resolution electrocardiography with instant analysis and digital archiving.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=500&fit=crop",
    overview:
      "Our digital ECG systems capture cardiac electrical activity with exceptional clarity across all 12 leads. Automated analysis algorithms flag abnormalities instantly, while Dr. Mehta provides expert interpretation for every tracing — ensuring no subtle ischemic changes are missed.",
    features: [
      "12-lead simultaneous acquisition",
      "High-resolution digital tracings",
      "Automated rhythm analysis",
      "Serial comparison with prior ECGs",
      "Instant print and digital report",
    ],
    benefits: [
      "Same-visit diagnosis for rhythm disorders",
      "Early detection of ischemic changes",
      "Non-invasive and painless",
      "Results in under 5 minutes",
    ],
    usedFor: ["Chest pain evaluation", "Arrhythmia detection", "Pre-operative assessment", "Routine screening"],
  },
  {
    id: "cardiac-monitoring",
    title: "Continuous Cardiac Monitoring",
    shortDescription: "Holter monitoring and ambulatory BP systems for 24–72 hour heart rhythm and pressure tracking.",
    image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=800&h=500&fit=crop",
    overview:
      "Many cardiac conditions manifest intermittently — missed by a single office visit. Our continuous monitoring suite includes 24–72 hour Holter monitors, event recorders, and 24-hour ambulatory blood pressure monitors to capture the complete picture of your heart's behaviour in daily life.",
    features: [
      "Lightweight wireless Holter devices",
      "24-hour ambulatory BP monitoring (ABPM)",
      "Event recorder for symptomatic episodes",
      "Cloud-based report generation",
      "Correlation with patient symptom diary",
    ],
    benefits: [
      "Detects intermittent arrhythmias",
      "Identifies nocturnal BP patterns",
      "Guides medication timing optimization",
      "Reduces unnecessary hospital admissions",
    ],
    usedFor: ["Palpitation workup", "AF detection", "Hypertension management", "Post-stroke evaluation"],
  },
  {
    id: "echocardiography",
    title: "Advanced Echocardiography",
    shortDescription: "Premium ultrasound systems with strain imaging, Doppler, and 3D reconstruction capabilities.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&h=500&fit=crop",
    overview:
      "Echocardiography is the most versatile cardiac imaging tool. Our advanced systems provide 2D, Doppler, colour flow mapping, tissue Doppler, and speckle-tracking strain imaging — allowing Dr. Mehta to assess heart structure, valve function, ejection fraction, and diastolic function with exceptional accuracy.",
    features: [
      "High-frequency transducer arrays",
      "Tissue Doppler and strain imaging",
      "Colour Doppler flow mapping",
      "Contrast echocardiography",
      "Pediatric and adult protocols",
    ],
    benefits: [
      "No radiation exposure",
      "Real-time dynamic assessment",
      "Valve disease quantification",
      "EF measurement for heart failure",
    ],
    usedFor: ["Heart failure assessment", "Valve evaluation", "Congenital screening", "Post-procedure follow-up"],
  },
  {
    id: "stress-testing",
    title: "Automated Stress Testing (TMT)",
    shortDescription: "Computerized treadmill stress testing with continuous ECG and BP monitoring.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop",
    overview:
      "Exercise stress testing reveals cardiac abnormalities that only appear under physical exertion. Our automated TMT system uses the Bruce protocol with continuous 12-lead ECG monitoring, automatic BP recording, and ST-segment analysis — providing objective data on exercise capacity and ischemic burden.",
    features: [
      "Bruce and modified Bruce protocols",
      "Continuous 12-lead ECG monitoring",
      "Automated BP at each stage",
      "ST-segment trend analysis",
      "Emergency stop and defibrillator standby",
    ],
    benefits: [
      "Detects hidden coronary blockages",
      "Assesses functional capacity objectively",
      "Risk stratification for chest pain",
      "Monitors post-treatment improvement",
    ],
    usedFor: ["CAD screening", "Pre-operative fitness", "Exercise prescription", "Post-angioplasty follow-up"],
  },
];
