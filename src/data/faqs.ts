export interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const faqCategories = [
  "General Cardiology",
  "Appointments & Consultation",
  "Procedures & Treatment",
  "Costs & Insurance",
  "Emergency Care",
  "Preventive Health",
  "Post-Treatment Care",
];

export const faqs: FAQ[] = [
  {
    id: "1",
    category: "General Cardiology",
    question: "When should I see a cardiologist instead of a general physician?",
    answer: "You should consult a cardiologist if you experience chest pain, breathlessness, palpitations, unexplained fatigue, dizziness, or fainting. Additionally, if you have diabetes, hypertension, high cholesterol, or a family history of heart disease, a preventive cardiology consultation is strongly recommended even without symptoms.",
  },
  {
    id: "2",
    category: "General Cardiology",
    question: "What is the difference between a cardiologist and an interventional cardiologist?",
    answer: "A cardiologist diagnoses and manages heart conditions medically. An interventional cardiologist like Dr. Arjun Mehta has additional specialized training to perform catheter-based procedures such as angioplasty, stenting, and coronary angiography — minimally invasive treatments that can save lives during heart attacks.",
  },
  {
    id: "3",
    category: "General Cardiology",
    question: "How do I know if my chest pain is heart-related?",
    answer: "Heart-related chest pain often feels like pressure, tightness, or squeezing in the centre of the chest. It may radiate to the left arm, jaw, or back and can be accompanied by sweating, nausea, or breathlessness. However, not all heart pain is typical. Any unexplained chest discomfort warrants immediate evaluation — call our emergency line at +91 98290 12345.",
  },
  {
    id: "4",
    category: "General Cardiology",
    question: "Can heart disease be detected before symptoms appear?",
    answer: "Yes. Preventive screening including lipid profiles, ECG, echocardiography, and coronary calcium scoring can identify risk years before symptoms develop. Dr. Mehta's preventive cardiology program is designed specifically for high-risk individuals and those with family history.",
  },
  {
    id: "5",
    category: "General Cardiology",
    question: "Is heart disease hereditary?",
    answer: "Family history significantly increases your risk, especially if a first-degree relative had a heart attack before age 55 (men) or 65 (women). Genetic conditions like familial hypercholesterolemia require early screening. Dr. Mehta recommends cardiac evaluation starting at age 30 for those with family history.",
  },
  {
    id: "6",
    category: "Appointments & Consultation",
    question: "How do I book an appointment with Dr. Arjun Mehta?",
    answer: "You can book online through our website's appointment page, call +91 141 256 7890, or WhatsApp us at +91 98290 12345. Online booking allows you to choose consultation type, date, and time slot instantly with confirmation sent via SMS and email.",
  },
  {
    id: "7",
    category: "Appointments & Consultation",
    question: "What documents should I bring for my first visit?",
    answer: "Please bring all previous medical records, current medication list, recent blood test reports, ECG/echo reports if available, insurance card, and a valid ID proof. If you have prior angiography CDs or reports, those are extremely helpful.",
  },
  {
    id: "8",
    category: "Appointments & Consultation",
    question: "How long does a consultation with Dr. Mehta typically last?",
    answer: "Initial consultations are scheduled for 30–45 minutes to allow thorough history taking, examination, and report review. Follow-up visits are typically 15–20 minutes. Dr. Mehta believes in unhurried consultations where every question is answered.",
  },
  {
    id: "9",
    category: "Appointments & Consultation",
    question: "Do you offer teleconsultation?",
    answer: "Yes. Video consultations are available for follow-up visits, report discussions, and medication reviews. First-time consultations for chest pain or acute symptoms require an in-person visit for proper examination and testing.",
  },
  {
    id: "10",
    category: "Appointments & Consultation",
    question: "What are the consultation fees?",
    answer: "Initial consultation: ₹1,500. Follow-up consultation: ₹1,000. Preventive cardiac health check package: ₹4,500 (includes ECG, echo, and consultation). Emergency consultations are prioritized regardless of prior appointment status.",
  },
  {
    id: "11",
    category: "Procedures & Treatment",
    question: "What is angioplasty and how long does it take?",
    answer: "Angioplasty is a minimally invasive procedure where a balloon and stent are used to open a blocked coronary artery. The procedure typically takes 45–90 minutes. Most patients are walking within hours and discharged in 1–2 days.",
  },
  {
    id: "12",
    category: "Procedures & Treatment",
    question: "Is angioplasty painful?",
    answer: "Angioplasty is performed under local anaesthesia with mild sedation. You remain awake but comfortable. A small catheter is inserted through the wrist or groin — you may feel pressure but not sharp pain. Our team ensures maximum comfort throughout.",
  },
  {
    id: "13",
    category: "Procedures & Treatment",
    question: "How long do stents last?",
    answer: "Modern drug-eluting stents have restenosis rates below 5% at one year. With adherence to blood thinners and lifestyle changes, most stents remain open for 10–15+ years. Regular follow-up with Dr. Mehta ensures long-term success.",
  },
  {
    id: "14",
    category: "Procedures & Treatment",
    question: "Can all blockages be treated with angioplasty?",
    answer: "Not all blockages require or are suitable for angioplasty. Some may be managed with medications alone, while complex multi-vessel disease may need surgical bypass. Dr. Mehta uses angiography and intravascular imaging to recommend the safest, most effective approach.",
  },
  {
    id: "15",
    category: "Procedures & Treatment",
    question: "What is a coronary angiography?",
    answer: "Coronary angiography is a diagnostic procedure where contrast dye is injected into coronary arteries through a catheter, allowing direct visualization of blockages on X-ray. It is the gold standard for evaluating coronary artery disease and planning treatment.",
  },
  {
    id: "16",
    category: "Procedures & Treatment",
    question: "Do I need to stop blood thinners before a procedure?",
    answer: "This depends on the specific medication and procedure type. Never stop blood thinners on your own. Dr. Mehta's team provides detailed pre-procedure instructions tailored to your medications, typically involving coordinated management with your prescribing physician.",
  },
  {
    id: "17",
    category: "Costs & Insurance",
    question: "Does HeartCare accept health insurance?",
    answer: "Yes. We are empanelled with major insurance providers including Star Health, HDFC Ergo, ICICI Lombard, New India Assurance, CGHS, and ESI. Our billing team assists with cashless claims and pre-authorization.",
  },
  {
    id: "18",
    category: "Costs & Insurance",
    question: "What is the approximate cost of angioplasty?",
    answer: "Angioplasty costs vary based on number of stents, stent type, and hospital stay. A single-vessel angioplasty typically ranges from ₹1.5–2.5 lakhs. We provide transparent cost estimates before any procedure with no hidden charges.",
  },
  {
    id: "19",
    category: "Costs & Insurance",
    question: "Are EMI or payment plans available?",
    answer: "Yes. We partner with leading healthcare financing providers offering 0% EMI for 3–6 months on procedures above ₹50,000. Our front desk team can guide you through the application process.",
  },
  {
    id: "20",
    category: "Emergency Care",
    question: "What should I do if I think I'm having a heart attack?",
    answer: "Call our 24/7 emergency line immediately at +91 98290 12345. Chew an aspirin 325mg if not allergic. Do not drive yourself. Our team activates the cardiac emergency protocol to prepare the cath lab before you arrive, saving critical time.",
  },
  {
    id: "21",
    category: "Emergency Care",
    question: "Does HeartCare have 24/7 emergency cardiac care?",
    answer: "Yes. Our emergency cardiac response team is available 24/7. Primary angioplasty for heart attacks can be performed around the clock in our advanced cath lab with Dr. Mehta or his trained interventional team.",
  },
  {
    id: "22",
    category: "Emergency Care",
    question: "What is door-to-balloon time and why does it matter?",
    answer: "Door-to-balloon time is the interval from hospital arrival to opening the blocked artery via angioplasty. Every minute counts — our centre maintains a door-to-balloon time under 60 minutes, significantly improving survival and heart muscle preservation.",
  },
  {
    id: "23",
    category: "Preventive Health",
    question: "What cardiac tests should I get annually?",
    answer: "For adults over 40: fasting lipid profile, blood sugar, blood pressure check, ECG, and BMI assessment. For high-risk individuals: add echocardiography and coronary calcium scoring. Dr. Mehta's preventive packages are customized to your risk profile.",
  },
  {
    id: "24",
    category: "Preventive Health",
    question: "Can lifestyle changes really prevent heart attacks?",
    answer: "Absolutely. Studies show that 80% of premature heart attacks are preventable through diet, exercise, smoking cessation, and blood pressure/cholesterol control. Dr. Mehta's preventive program combines medical management with practical lifestyle guidance tailored for Indian patients.",
  },
  {
    id: "25",
    category: "Preventive Health",
    question: "Is a heart-healthy diet compatible with Indian food?",
    answer: "Yes. Dr. Mehta's dietary recommendations work with Indian cuisine — emphasizing whole grains, dals, vegetables, controlled ghee/oil usage, and reduced refined carbohydrates. Our in-house dietitian provides Rajasthan-specific meal plans.",
  },
  {
    id: "26",
    category: "Post-Treatment Care",
    question: "How long must I take blood thinners after angioplasty?",
    answer: "Dual antiplatelet therapy (aspirin + P2Y12 inhibitor) is typically required for 6–12 months minimum after stenting. Stopping early risks stent clotting, which can be fatal. Dr. Mehta provides a clear medication timeline and monitors adherence.",
  },
  {
    id: "27",
    category: "Post-Treatment Care",
    question: "When can I return to work after angioplasty?",
    answer: "Desk workers can usually return within 3–5 days. Physical labour may require 2–4 weeks. Dr. Mehta provides a personalized return-to-work certificate based on your procedure, occupation, and recovery progress.",
  },
  {
    id: "28",
    category: "Post-Treatment Care",
    question: "Can I exercise after heart treatment?",
    answer: "Yes, and you should. Cardiac rehabilitation begins 1–2 weeks post-procedure with supervised walking programs progressing to structured exercise. Regular physical activity is one of the most important factors for long-term heart health.",
  },
  {
    id: "29",
    category: "Post-Treatment Care",
    question: "How often should I follow up after angioplasty?",
    answer: "Follow-up schedule: 2 weeks, 6 weeks, 3 months, 6 months, then annually. Each visit includes clinical assessment, medication review, and repeat testing (ECG, echo, lipids) as needed.",
  },
  {
    id: "30",
    category: "General Cardiology",
    question: "What is the success rate of procedures at HeartCare?",
    answer: "Dr. Mehta maintains a 98.7% procedural success rate across 15,000+ angioplasties. Our NABH-accredited centre follows international safety protocols with continuous quality monitoring and peer review.",
  },
  {
    id: "31",
    category: "Appointments & Consultation",
    question: "Can I get a second opinion from Dr. Mehta?",
    answer: "Yes. Dr. Mehta welcomes second opinion consultations. Bring all prior reports, angiography CDs, and treatment plans. He will provide an independent, honest assessment of your options without pressure to proceed with any specific treatment.",
  },
  {
    id: "32",
    category: "Procedures & Treatment",
    question: "What technology does HeartCare use for cardiac procedures?",
    answer: "Our cath lab features biplane fluoroscopy, intravascular ultrasound (IVUS), rotational atherectomy, and premium drug-eluting stents from leading global manufacturers. Digital ECG, advanced echo machines, and automated TMT systems support comprehensive diagnostics.",
  },
];
