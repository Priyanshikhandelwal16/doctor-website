export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

export const blogCategories = [
  "Heart Health",
  "Blood Pressure",
  "Diet & Nutrition",
  "Exercise",
  "Senior Health",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "5-warning-signs-heart-attack",
    title: "5 Warning Signs of a Heart Attack You Should Never Ignore",
    excerpt: "Heart attacks don't always announce themselves dramatically. Learn the subtle and overt signs that could save your life or someone you love.",
    category: "Heart Health",
    author: "Dr. Arjun Mehta",
    date: "2025-05-15",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&h=500&fit=crop",
    content: `Heart disease remains India's leading cause of death, yet many heart attacks are preceded by warning signs that go unrecognized for days or weeks. As an interventional cardiologist who has treated thousands of patients, I want you to know exactly what to watch for.

**1. Chest Discomfort That Comes and Goes**
Not all chest pain is crushing. Some patients describe a dull ache, pressure, or tightness that lasts a few minutes and resolves with rest — only to return during physical activity. This pattern, called stable angina, indicates your heart isn't receiving enough blood during exertion.

**2. Pain Radiating to Unusual Areas**
Heart attack pain frequently travels beyond the chest — to the left arm, jaw, neck, back, or even the upper abdomen. Women especially may experience atypical symptoms like extreme fatigue or nausea without prominent chest pain.

**3. Unexplained Shortness of Breath**
If climbing stairs or walking short distances suddenly leaves you breathless when it didn't before, your heart may be struggling to pump efficiently. This can occur with or without chest pain.

**4. Cold Sweats and Nausea**
Breaking into a cold sweat without fever or exertion, combined with nausea or lightheadedness, is a classic heart attack presentation — particularly in diabetics who may have reduced pain sensation.

**5. Extreme Fatigue Over Days**
A heart attack can brew over days. Persistent, unusual tiredness — especially in women over 50 — warrants cardiac evaluation even without other symptoms.

**What To Do**
If you experience these symptoms, call our 24/7 emergency line immediately: +91 98290 12345. Chew an aspirin 325mg if you're not allergic. Do not wait to see if symptoms resolve. Time is muscle — every minute of delay means more permanent heart damage.`,
  },
  {
    slug: "understanding-blood-pressure-numbers",
    title: "Understanding Your Blood Pressure Numbers: A Complete Guide",
    excerpt: "What do those two numbers really mean? Dr. Mehta breaks down blood pressure readings and when to take action.",
    category: "Blood Pressure",
    author: "Dr. Arjun Mehta",
    date: "2025-05-08",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
    content: `Blood pressure is recorded as two numbers — systolic (top) and diastolic (bottom). Understanding both is essential for protecting your heart, brain, and kidneys.

**Normal Blood Pressure:** Less than 120/80 mmHg
**Elevated:** 120–129 / less than 80
**Stage 1 Hypertension:** 130–139 / 80–89
**Stage 2 Hypertension:** 140/90 or higher

In India, nearly 30% of adults have hypertension, and half are undiagnosed. The silent nature of high BP means organ damage — to heart, kidneys, eyes, and brain — progresses for years before symptoms appear.

**Home Monitoring Tips**
Measure at the same time daily, after 5 minutes of rest, with your arm supported at heart level. Avoid caffeine and exercise for 30 minutes before measuring. Record readings and bring them to your appointment.

**When Medication Is Needed**
Lifestyle changes alone may suffice for elevated BP. Stage 1 hypertension with cardiovascular risk factors, and all Stage 2 hypertension, typically require medication alongside lifestyle modification. Never stop medications without consulting your cardiologist.`,
  },
  {
    slug: "heart-healthy-indian-diet",
    title: "Building a Heart-Healthy Indian Diet Without Giving Up Flavour",
    excerpt: "Practical dietary changes that work with dal, roti, and sabzi — not against them.",
    category: "Diet & Nutrition",
    author: "Dr. Arjun Mehta",
    date: "2025-04-28",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=500&fit=crop",
    content: `One of the most common questions I hear is: "Doctor, can I still eat Indian food?" The answer is absolutely yes — with smart modifications.

**Embrace These**
Whole grains (bajra, jowar, brown rice), all dals and legumes, abundant vegetables, fruits, nuts (almonds, walnuts in moderation), fatty fish twice weekly, and olive or mustard oil in measured quantities.

**Limit These**
Refined flour (maida), deep-fried foods, excessive ghee and butter, processed snacks, sugary beverages, and restaurant food high in trans fats and sodium.

**Practical Swaps**
Replace white rice with brown rice or quinoa 3 days a week. Use air-frying instead of deep-frying for pakoras. Choose grilled tandoori over creamy curries. Reduce salt by using herbs, lemon, and spices for flavour.

**The Rajasthan Factor**
Traditional Rajasthani cuisine can be adapted — bajra roti over missi roti with excessive ghee, ker sangri prepared with minimal oil, and dal baati churma enjoyed occasionally rather than daily. Moderation, not elimination, is the sustainable approach.`,
  },
  {
    slug: "exercise-after-40-heart",
    title: "Safe Exercise After 40: Protecting Your Heart While Staying Active",
    excerpt: "How to build cardiovascular fitness safely in middle age, especially if you have risk factors.",
    category: "Exercise",
    author: "Dr. Arjun Mehta",
    date: "2025-04-20",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&h=500&fit=crop",
    content: `Starting or maintaining exercise after 40 requires a heart-smart approach. Here's my evidence-based framework for patients in Jaipur and beyond.

**Get Cleared First**
If you have diabetes, hypertension, family history of heart disease, or haven't exercised in years, get a cardiac evaluation including ECG and possibly a stress test before starting vigorous activity.

**The 150-Minute Rule**
WHO recommends 150 minutes of moderate aerobic activity weekly — brisk walking, cycling, swimming. That's 30 minutes, 5 days a week. Start with 15 minutes and build gradually.

**Strength Training Matters**
Two sessions weekly of resistance training improves blood pressure, cholesterol, and metabolic health. Bodyweight exercises, resistance bands, or light weights all count.

**Warning Signs During Exercise**
Stop immediately if you experience chest pain, unusual breathlessness, dizziness, or irregular heartbeat. These are not "normal" — they require medical evaluation.

**Jaipur-Specific Tips**
Exercise early morning (6–8 AM) or evening (5–7 PM) to avoid peak heat. Stay hydrated. Walking circuits at Central Park, Jawahar Circle, or Ram Niwas Bagh are excellent options.`,
  },
  {
    slug: "cardiac-care-senior-citizens",
    title: "Cardiac Care for Senior Citizens: What Families Need to Know",
    excerpt: "Age-specific heart health guidance for patients over 65 and the families who care for them.",
    category: "Senior Health",
    author: "Dr. Arjun Mehta",
    date: "2025-04-12",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=500&fit=crop",
    content: `Heart disease presentation changes with age. Symptoms become subtler, multiple conditions overlap, and medication management grows complex. Here's what every family caring for a senior should understand.

**Atypical Presentations**
Elderly patients may not report chest pain. Instead, watch for confusion, sudden weakness, falls, loss of appetite, or new breathlessness. These can be the only signs of a heart attack or heart failure exacerbation.

**Polypharmacy Risks**
Seniors often take 5+ medications. Drug interactions affecting heart rhythm and blood pressure are common. Dr. Mehta reviews complete medication lists at every visit to optimize therapy and eliminate unnecessary drugs.

**Fall Prevention and Cardiac Health**
Blood pressure medications can cause dizziness. Orthostatic hypotension (BP drop on standing) increases fall risk. We adjust medications and recommend slow position changes and home safety modifications.

**Annual Cardiac Assessment**
Every senior should have annual ECG, echocardiography, lipid panel, and blood sugar testing. Those with known heart disease need follow-up every 3–6 months.

**Family's Role**
Help with medication adherence, accompany to appointments, monitor weight daily (for heart failure patients), and know the emergency number: +91 98290 12345.`,
  },
  {
    slug: "cholesterol-myths-debunked",
    title: "7 Cholesterol Myths That Could Be Harming Your Heart",
    excerpt: "Separating fact from fiction about cholesterol, statins, and dietary fat.",
    category: "Heart Health",
    author: "Dr. Arjun Mehta",
    date: "2025-04-05",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&h=500&fit=crop",
    content: `Misinformation about cholesterol costs lives. Let me address the most dangerous myths I encounter in my Jaipur practice.

**Myth 1: "Thin people don't have high cholesterol"**
False. Familial hypercholesterolemia affects people regardless of weight. I've treated thin, active patients with LDL levels above 190.

**Myth 2: "Eggs cause heart disease"**
Current evidence shows moderate egg consumption (1 per day) is safe for most people. Saturated fat and trans fat are bigger concerns.

**Myth 3: "Statins damage your liver permanently"**
Statins are monitored with liver function tests. Significant liver injury is rare (<1%). The cardiovascular benefits far outweigh risks for indicated patients.

**Myth 4: "If I feel fine, my cholesterol doesn't matter"**
High cholesterol is silent. By the time you feel symptoms, significant arterial damage has occurred. Test annually after age 40.

**Myth 5: "Natural remedies can replace statins"**
Garlic, flaxseed, and supplements may provide modest benefit but cannot replace statins when LDL targets require 30–50% reduction.

**Myth 6: "Only LDL matters"**
ApoB, Lp(a), triglycerides, and HDL all contribute to risk. Advanced lipid testing provides a complete picture.

**Myth 7: "Once on statins, always on statins"**
While most patients need lifelong therapy, some with significant lifestyle changes and low baseline risk may reduce or stop under medical supervision.`,
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
