export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  overview: string;
  symptoms: string[];
  causes: string[];
  diagnosis: string[];
  treatmentOptions: string[];
  recovery: string[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: "angioplasty",
    title: "Angioplasty & Stenting",
    shortDescription: "Minimally invasive procedure to restore blood flow through blocked coronary arteries using advanced cath lab technology.",
    icon: "HeartPulse",
    overview:
      "Angioplasty is a life-saving interventional procedure where Dr. Arjun Mehta uses a thin catheter to open narrowed or blocked coronary arteries. At HeartCare Advanced Cardiac Centre, we perform primary angioplasty for heart attacks and elective angioplasty for stable coronary artery disease using drug-eluting stents and intravascular imaging guidance.",
    symptoms: [
      "Severe chest pain or pressure",
      "Pain radiating to arm, jaw, or back",
      "Shortness of breath during minimal exertion",
      "Cold sweats and nausea",
      "Fatigue and dizziness",
    ],
    causes: [
      "Coronary artery atherosclerosis",
      "Plaque rupture causing acute blockage",
      "Diabetes-related vascular damage",
      "Smoking and high cholesterol",
      "Family history of heart disease",
    ],
    diagnosis: [
      "ECG and cardiac enzyme testing",
      "Echocardiography assessment",
      "Coronary angiography in cath lab",
      "Intravascular ultrasound (IVUS) when indicated",
      "Fractional flow reserve (FFR) measurement",
    ],
    treatmentOptions: [
      "Primary PCI for acute heart attack",
      "Elective angioplasty with drug-eluting stents",
      "Rotational atherectomy for calcified lesions",
      "Multi-vessel intervention when appropriate",
      "Post-procedure cardiac rehabilitation",
    ],
    recovery: [
      "Most patients walk within 6–12 hours",
      "Hospital stay typically 1–2 days",
      "Return to desk work in 3–5 days",
      "Full recovery in 2–4 weeks with rehab",
      "Lifelong medication and lifestyle follow-up",
    ],
    faqs: [
      {
        question: "Is angioplasty safer than open-heart surgery?",
        answer: "For most blockages, angioplasty is less invasive with faster recovery. Dr. Mehta evaluates each case individually to recommend the safest approach.",
      },
      {
        question: "How long does the stent last?",
        answer: "Modern drug-eluting stents have excellent long-term patency. With proper medication and lifestyle management, most stents remain open for many years.",
      },
    ],
  },
  {
    slug: "coronary-artery-disease",
    title: "Coronary Artery Disease Treatment",
    shortDescription: "Comprehensive management of heart blockages from early detection to advanced interventional treatment.",
    icon: "Activity",
    overview:
      "Coronary Artery Disease (CAD) occurs when cholesterol plaques narrow the arteries supplying blood to the heart muscle. Dr. Mehta provides a full spectrum of CAD care — from medical management and lifestyle optimization to angiography, angioplasty, and long-term cardiac monitoring.",
    symptoms: [
      "Chest discomfort during physical activity",
      "Angina that resolves with rest",
      "Unexplained fatigue",
      "Heart palpitations",
      "Reduced exercise tolerance",
    ],
    causes: [
      "High LDL cholesterol",
      "Hypertension",
      "Type 2 diabetes",
      "Sedentary lifestyle",
      "Chronic stress and smoking",
    ],
    diagnosis: [
      "Resting and exercise ECG",
      "Stress test (TMT)",
      "2D echocardiography",
      "Coronary CT angiography",
      "Invasive coronary angiography",
    ],
    treatmentOptions: [
      "Evidence-based medical therapy",
      "Lifestyle and dietary counselling",
      "Percutaneous coronary intervention",
      "Risk factor modification programs",
      "Regular cardiac follow-up protocols",
    ],
    recovery: [
      "Medical management shows improvement in 4–8 weeks",
      "Post-angioplasty recovery in 1–2 weeks",
      "Cardiac rehab improves outcomes significantly",
      "Quarterly follow-ups for first year",
      "Annual comprehensive cardiac assessment",
    ],
    faqs: [
      {
        question: "Can CAD be reversed without surgery?",
        answer: "Early-stage CAD can often be managed with medications, diet, and exercise. Advanced blockages may require angioplasty. Dr. Mehta creates personalized treatment plans based on angiography findings.",
      },
    ],
  },
  {
    slug: "heart-failure-management",
    title: "Heart Failure Management",
    shortDescription: "Structured programs to stabilize heart function, reduce hospitalizations, and improve quality of life.",
    icon: "Heart",
    overview:
      "Heart failure requires precise diagnosis and ongoing management. Dr. Mehta specializes in identifying the underlying cause — whether ischemic, valvular, or cardiomyopathic — and implementing guideline-directed medical therapy alongside device therapy evaluation when needed.",
    symptoms: [
      "Breathlessness on lying flat",
      "Swelling in legs and ankles",
      "Persistent cough or wheezing",
      "Rapid weight gain from fluid retention",
      "Reduced appetite and fatigue",
    ],
    causes: [
      "Previous heart attack damage",
      "Uncontrolled hypertension",
      "Valvular heart disease",
      "Cardiomyopathy",
      "Chronic arrhythmias",
    ],
    diagnosis: [
      "BNP/NT-proBNP blood tests",
      "Echocardiography with EF measurement",
      "Chest X-ray and ECG",
      "Cardiac MRI when indicated",
      "Coronary angiography for ischemic evaluation",
    ],
    treatmentOptions: [
      "Guideline-directed medical therapy (GDMT)",
      "Diuretic optimization",
      "Device therapy assessment (ICD/CRT)",
      "Cardiac rehabilitation",
      "Advanced heart failure referral when needed",
    ],
    recovery: [
      "Symptom improvement within 2–6 weeks of optimized therapy",
      "Daily weight and symptom monitoring",
      "Structured follow-up every 4–8 weeks initially",
      "Salt and fluid restriction guidance",
      "Long-term care coordination with family",
    ],
    faqs: [
      {
        question: "Is heart failure the same as a heart attack?",
        answer: "No. A heart attack is an acute event; heart failure is a chronic condition where the heart cannot pump efficiently. A heart attack can lead to heart failure if not treated promptly.",
      },
    ],
  },
  {
    slug: "ecg",
    title: "ECG (Electrocardiogram)",
    shortDescription: "Instant cardiac rhythm analysis using high-resolution digital ECG systems for accurate diagnosis.",
    icon: "Zap",
    overview:
      "An ECG records the electrical activity of your heart and is often the first test performed for chest pain, palpitations, or pre-operative assessment. Our digital 12-lead ECG systems provide instant, high-resolution tracings interpreted by Dr. Mehta with same-visit reporting.",
    symptoms: ["Chest pain", "Palpitations", "Dizziness", "Pre-surgical evaluation", "Routine health check"],
    causes: ["Arrhythmias", "Ischemia", "Electrolyte imbalance", "Medication effects", "Structural heart disease"],
    diagnosis: ["Resting 12-lead ECG", "Serial ECG comparison", "Rhythm strip analysis", "ST-segment evaluation"],
    treatmentOptions: ["Further testing based on findings", "Medication adjustment", "Holter monitoring if needed", "Specialist referral"],
    recovery: ["Non-invasive, no recovery needed", "Results available immediately", "Follow-up based on findings"],
    faqs: [{ question: "Does an ECG hurt?", answer: "No. ECG is completely painless. Electrodes are placed on your chest, arms, and legs for a few minutes." }],
  },
  {
    slug: "echo",
    title: "Echocardiography (2D Echo)",
    shortDescription: "Advanced ultrasound imaging to assess heart structure, valve function, and pumping efficiency.",
    icon: "Scan",
    overview:
      "Echocardiography uses ultrasound waves to create detailed images of your heart chambers, valves, and blood flow. Dr. Mehta performs and interprets echocards to assess ejection fraction, valve disease, congenital defects, and post-procedure outcomes.",
    symptoms: ["Breathlessness", "Heart murmur", "Chest pain", "Leg swelling", "Post-angioplasty follow-up"],
    causes: ["Valvular disease", "Cardiomyopathy", "Post-MI changes", "Congenital defects", "Pericardial disease"],
    diagnosis: ["2D transthoracic echo", "Doppler flow assessment", "Strain imaging", "Contrast echo when needed"],
    treatmentOptions: ["Medical management", "Valve intervention referral", "Surgical planning", "Device therapy evaluation"],
    recovery: ["Non-invasive procedure", "No downtime", "Report within 30 minutes"],
    faqs: [{ question: "How should I prepare for an echo?", answer: "No special preparation needed. Wear comfortable clothing. The test takes 20–30 minutes." }],
  },
  {
    slug: "tmt",
    title: "TMT (Treadmill Stress Test)",
    shortDescription: "Exercise stress testing to evaluate heart function under physical exertion and detect hidden blockages.",
    icon: "TrendingUp",
    overview:
      "The Treadmill Test (TMT) monitors your heart's response to exercise. It helps detect coronary artery disease that may not appear at rest, assess exercise capacity, and guide treatment decisions for patients with chest pain or post-procedure follow-up.",
    symptoms: ["Exercise-induced chest pain", "Unexplained breathlessness", "Pre-operative fitness assessment"],
    causes: ["Coronary blockages", "Arrhythmias under stress", "Poor cardiovascular fitness", "Valvular limitations"],
    diagnosis: ["Bruce protocol TMT", "ST-segment analysis", "Blood pressure response", "Symptom correlation"],
    treatmentOptions: ["Further angiography if positive", "Medical optimization", "Cardiac rehab program", "Risk stratification"],
    recovery: ["Rest 15 minutes post-test", "Resume normal activities same day", "Hydrate well after test"],
    faqs: [{ question: "Who should not do a TMT?", answer: "Patients with uncontrolled angina, recent heart attack, or severe aortic stenosis may need alternative stress testing. Dr. Mehta assesses suitability before the test." }],
  },
  {
    slug: "preventive-cardiology",
    title: "Preventive Cardiology",
    shortDescription: "Proactive heart health programs to prevent disease before symptoms appear — ideal for high-risk individuals.",
    icon: "Shield",
    overview:
      "Prevention is the cornerstone of cardiac care. Dr. Mehta's preventive cardiology program includes comprehensive risk assessment, advanced lipid profiling, coronary calcium scoring guidance, and personalized lifestyle plans for executives, diabetics, and families with genetic heart disease risk.",
    symptoms: ["Often no symptoms — that's why screening matters", "Family history concerns", "High cholesterol", "Pre-diabetes"],
    causes: ["Genetic predisposition", "Metabolic syndrome", "Sedentary lifestyle", "Poor diet", "Chronic stress"],
    diagnosis: ["Advanced lipid panel", "Hs-CRP and Lp(a) testing", "Coronary calcium score referral", "Carotid IMT when indicated", "Comprehensive risk scoring"],
    treatmentOptions: ["Personalized diet plans", "Exercise prescription", "Statin and preventive medications", "Smoking cessation support", "Annual cardiac health reviews"],
    recovery: ["Lifestyle changes show benefits in 8–12 weeks", "Cholesterol improvement in 6–8 weeks", "Long-term commitment to heart health"],
    faqs: [{ question: "At what age should I start preventive cardiology?", answer: "Screening should begin at 30 for those with family history, and by 40 for everyone. Earlier if you have diabetes, obesity, or hypertension." }],
  },
  {
    slug: "hypertension-management",
    title: "Hypertension Management",
    shortDescription: "Expert blood pressure control to protect your heart, kidneys, and brain from long-term damage.",
    icon: "Gauge",
    overview:
      "Hypertension affects nearly 30% of Indian adults and is a leading cause of heart attacks and strokes. Dr. Mehta provides evidence-based BP management with 24-hour ambulatory monitoring, medication optimization, and lifestyle interventions tailored to Rajasthan's dietary patterns.",
    symptoms: ["Headaches (often absent)", "Dizziness", "Nosebleeds (rare)", "Most patients have no symptoms"],
    causes: ["Genetic factors", "High salt intake", "Obesity", "Chronic stress", "Kidney disease", "Sleep apnea"],
    diagnosis: ["Office BP measurement", "24-hour ABPM", "Home BP monitoring protocol", "ECG and echo for end-organ damage", "Renal function tests"],
    treatmentOptions: ["ACE inhibitors / ARBs", "Calcium channel blockers", "Combination therapy", "DASH diet counselling", "Sleep apnea screening"],
    recovery: ["BP improvement within 2–4 weeks of treatment", "Target BP achieved in most patients within 3 months", "Regular monitoring essential"],
    faqs: [{ question: "Can I stop BP medicines once my BP is normal?", answer: "No. Hypertension is usually a lifelong condition. Stopping medication can cause dangerous BP spikes. Always consult Dr. Mehta before any changes." }],
  },
  {
    slug: "arrhythmia-treatment",
    title: "Arrhythmia Treatment",
    shortDescription: "Diagnosis and management of irregular heartbeats including atrial fibrillation and palpitations.",
    icon: "Waves",
    overview:
      "Arrhythmias range from benign palpitations to life-threatening rhythms. Dr. Mehta evaluates each patient with ECG, Holter monitoring, and echocardiography to determine whether medical management, cardioversion, or electrophysiology referral is needed.",
    symptoms: ["Racing heartbeat", "Skipped beats", "Dizziness or fainting", "Chest discomfort", "Fatigue"],
    causes: ["Atrial fibrillation", "Thyroid disorders", "Electrolyte imbalance", "Heart valve disease", "Excessive caffeine or alcohol"],
    diagnosis: ["12-lead ECG", "24–72 hour Holter monitoring", "Event recorder", "Echocardiography", "Thyroid function tests"],
    treatmentOptions: ["Anti-arrhythmic medications", "Rate control strategies", "Anticoagulation for AF", "Cardioversion", "EP study referral"],
    recovery: ["Medication stabilization in 1–2 weeks", "Cardioversion recovery same day", "Ongoing rhythm monitoring"],
    faqs: [{ question: "Are palpitations always dangerous?", answer: "Not always, but they should never be ignored. Dr. Mehta determines whether your palpitations indicate a benign condition or require treatment." }],
  },
  {
    slug: "cholesterol-management",
    title: "Cholesterol Management",
    shortDescription: "Advanced lipid management to reduce heart attack and stroke risk through personalized therapy.",
    icon: "Droplets",
    overview:
      "High cholesterol silently damages arteries over decades. Dr. Mehta uses advanced lipid panels including Lp(a), ApoB, and hs-CRP to create targeted treatment plans combining statins, ezetimibe, PCSK9 inhibitors when needed, and intensive lifestyle modification.",
    symptoms: ["Usually no symptoms until a cardiac event", "Xanthomas in familial hypercholesterolemia", "Family history of early heart attacks"],
    causes: ["Familial hypercholesterolemia", "Poor diet high in saturated fats", "Hypothyroidism", "Diabetes", "Sedentary lifestyle"],
    diagnosis: ["Fasting lipid profile", "Lp(a) and ApoB testing", "Liver function tests", "Coronary risk scoring", "Genetic testing referral for FH"],
    treatmentOptions: ["High-intensity statin therapy", "Ezetimibe add-on", "PCSK9 inhibitor evaluation", "Omega-3 supplementation", "Dietary counselling with dietitian"],
    recovery: ["LDL reduction visible in 4–6 weeks", "Target LDL achieved in 8–12 weeks for most", "Lifelong monitoring required"],
    faqs: [{ question: "Do statins cause permanent side effects?", answer: "Most patients tolerate statins well. Muscle symptoms are usually manageable with dose adjustment or alternative agents. Never stop statins without consulting your cardiologist." }],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
