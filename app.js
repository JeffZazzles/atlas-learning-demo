"use strict";

const STORAGE_KEY = "atlasLearningDemoState.v1";

const UNITS = [
  {
    id: "math-g4-u01",
    subject: "math",
    title: "Place Value, Rounding, and Multi-Digit Numbers",
    sequence: 1,
    estimatedDays: 6,
    estimatedMinutes: 240,
    priority: "core",
    standards: ["4.NBT.A.1", "4.NBT.A.2", "4.NBT.A.3"],
    skillIds: [
      "math-g4-nbt-place-value-times-ten",
      "math-g4-nbt-read-write-numbers",
      "math-g4-nbt-compare-multi-digit",
      "math-g4-nbt-rounding",
      "math-g4-nbt-explain-place-value"
    ]
  },
  {
    id: "math-g4-u02",
    subject: "math",
    title: "Multi-Digit Operations and Word Problems",
    sequence: 2,
    estimatedDays: 10,
    estimatedMinutes: 400,
    priority: "core",
    standards: ["4.OA.A.1", "4.OA.A.2", "4.OA.A.3", "4.NBT.B.4", "4.NBT.B.5", "4.NBT.B.6"],
    skillIds: [
      "math-g4-oa-multiplicative-comparison",
      "math-g4-oa-word-problem-modeling",
      "math-g4-nbt-add-subtract-algorithm",
      "math-g4-nbt-multiply-multi-digit",
      "math-g4-nbt-divide-multi-digit",
      "math-g4-oa-estimate-reasonableness",
      "math-g4-oa-interpret-remainders"
    ]
  },
  {
    id: "math-g4-u04",
    subject: "math",
    title: "Fraction Equivalence and Comparison",
    sequence: 4,
    estimatedDays: 8,
    estimatedMinutes: 320,
    priority: "core",
    standards: ["4.NF.A.1", "4.NF.A.2"],
    skillIds: [
      "math-g4-nf-equivalent-fractions-visual",
      "math-g4-nf-equivalent-fractions-numeric",
      "math-g4-nf-compare-like-denominators",
      "math-g4-nf-compare-like-numerators",
      "math-g4-nf-compare-unlike-fractions",
      "math-g4-nf-explain-fraction-comparison"
    ]
  },
  {
    id: "ela-g4-u01",
    subject: "ela",
    title: "Close Reading of Literature",
    sequence: 1,
    estimatedDays: 8,
    estimatedMinutes: 320,
    priority: "core",
    standards: ["RL.4.1", "RL.4.2", "RL.4.3", "RL.4.4", "RL.4.5", "RL.4.6", "RL.4.7", "RL.4.9", "RL.4.10", "L.4.4", "L.4.5", "L.4.6"],
    skillIds: [
      "ela-g4-rl-text-evidence",
      "ela-g4-rl-infer-theme",
      "ela-g4-rl-character-setting-event",
      "ela-g4-rl-word-meaning-literary",
      "ela-g4-rl-text-structure-literary",
      "ela-g4-rl-point-of-view",
      "ela-g4-rl-compare-themes",
      "ela-g4-rl-independent-reading-stamina"
    ]
  },
  {
    id: "ela-g4-u02",
    subject: "ela",
    title: "Informational Reading and Academic Vocabulary",
    sequence: 2,
    estimatedDays: 8,
    estimatedMinutes: 320,
    priority: "core",
    standards: ["RI.4.1", "RI.4.2", "RI.4.3", "RI.4.4", "RI.4.5", "RI.4.6", "RI.4.7", "RI.4.8", "RI.4.9", "RI.4.10", "L.4.4", "L.4.5", "L.4.6"],
    skillIds: [
      "ela-g4-ri-text-evidence",
      "ela-g4-ri-main-idea-details",
      "ela-g4-ri-explain-events-procedures-ideas",
      "ela-g4-ri-domain-vocabulary",
      "ela-g4-ri-text-structure",
      "ela-g4-ri-compare-first-secondhand",
      "ela-g4-ri-visual-information",
      "ela-g4-ri-author-claims-evidence",
      "ela-g4-ri-integrate-two-texts"
    ]
  },
  {
    id: "ela-g4-u03",
    subject: "ela",
    title: "Opinion Writing From Evidence",
    sequence: 3,
    estimatedDays: 7,
    estimatedMinutes: 280,
    priority: "core",
    standards: ["W.4.1", "W.4.4", "W.4.5", "W.4.6", "W.4.8", "W.4.9", "L.4.1", "L.4.2", "L.4.3"],
    skillIds: [
      "ela-g4-w-opinion-claim",
      "ela-g4-w-opinion-reasons-evidence",
      "ela-g4-w-opinion-organization",
      "ela-g4-w-linking-words",
      "ela-g4-w-conclusion",
      "ela-g4-w-revise-for-audience",
      "ela-g4-l-sentence-conventions"
    ]
  }
];

const SKILL_OVERRIDES = {
  "math-g4-nbt-place-value-times-ten": {
    title: "Explain ten-times place value relationships",
    type: "conceptual",
    canDo: "I can explain how each place is related to the place next to it.",
    misconception: "Treats adjacent places as increasing by one instead of by ten",
    scaffolds: ["ten times", "place", "value"]
  },
  "math-g4-nbt-compare-multi-digit": {
    title: "Compare multi-digit whole numbers",
    type: "conceptual procedural",
    canDo: "I can compare whole numbers using place value.",
    misconception: "Compares numbers without aligning place value",
    scaffolds: ["greater than", "less than", "equal to"]
  },
  "math-g4-nbt-rounding": {
    title: "Round multi-digit whole numbers",
    type: "procedural application",
    canDo: "I can round whole numbers to any place.",
    misconception: "Changes digits to the left of the rounding place",
    scaffolds: ["nearest", "estimate", "about"]
  },
  "math-g4-oa-word-problem-modeling": {
    title: "Model multi-step word problems",
    type: "application",
    canDo: "I can represent a multi-step word problem with equations and solve it.",
    misconception: "Solves only the first step of a multi-step problem",
    scaffolds: ["unknown", "remaining", "altogether"]
  },
  "math-g4-oa-interpret-remainders": {
    title: "Interpret remainders in context",
    type: "application",
    canDo: "I can decide what a remainder means in a real problem.",
    misconception: "Ignores the remainder or always rounds the same way",
    scaffolds: ["remainder", "left over", "groups"]
  },
  "math-g4-nf-equivalent-fractions-visual": {
    title: "Use visual models for equivalent fractions",
    type: "conceptual",
    canDo: "I can use models to show two fractions are equivalent.",
    misconception: "Changes the numerator or denominator without preserving the same whole",
    scaffolds: ["same whole", "equivalent", "partition"]
  },
  "math-g4-nf-compare-unlike-fractions": {
    title: "Compare fractions with different numerators and denominators",
    type: "conceptual application",
    canDo: "I can compare fractions using models, benchmarks, or equivalent fractions.",
    misconception: "Assumes a larger denominator means a larger fraction",
    scaffolds: ["benchmark", "same whole", "equivalent"]
  },
  "ela-g4-rl-text-evidence": {
    title: "Use text evidence in literary responses",
    type: "reading comprehension",
    canDo: "I can answer questions about a story by using details from the text.",
    misconception: "Answers from memory without citing the text",
    scaffolds: ["evidence", "detail", "infer"]
  },
  "ela-g4-rl-infer-theme": {
    title: "Infer theme from details",
    type: "reading comprehension",
    canDo: "I can infer a theme and support it with story details.",
    misconception: "Chooses a topic instead of a theme statement",
    scaffolds: ["theme", "lesson", "details"]
  },
  "ela-g4-ri-main-idea-details": {
    title: "Determine main idea and supporting details",
    type: "reading comprehension",
    canDo: "I can identify the main idea of an informational text and explain supporting details.",
    misconception: "Chooses a topic instead of a main idea",
    scaffolds: ["main idea", "supporting detail", "summary"]
  },
  "ela-g4-ri-author-claims-evidence": {
    title: "Explain author claims and evidence",
    type: "informational reading",
    canDo: "I can identify an author's claim and the evidence used to support it.",
    misconception: "Treats every fact as evidence for the claim",
    scaffolds: ["claim", "reason", "evidence"]
  },
  "ela-g4-w-opinion-claim": {
    title: "Write a clear opinion claim",
    type: "writing",
    canDo: "I can introduce a topic and state my opinion clearly.",
    misconception: "States a topic without a clear opinion",
    scaffolds: ["opinion", "claim", "I believe"]
  },
  "ela-g4-w-opinion-reasons-evidence": {
    title: "Support an opinion with reasons and evidence",
    type: "writing",
    canDo: "I can support my opinion with reasons and evidence from sources.",
    misconception: "Uses evidence that does not support the opinion",
    scaffolds: ["one reason", "for example", "according to the text"]
  },
  "ela-g4-l-sentence-conventions": {
    title: "Use sentence conventions in final writing",
    type: "language",
    canDo: "I can use complete sentences, capitalization, punctuation, and spelling in my writing.",
    misconception: "Writes fragments or run-ons in extended responses",
    scaffolds: ["complete sentence", "punctuation", "revise"]
  }
};

const SKILLS = UNITS.flatMap((unit) =>
  unit.skillIds.map((id) => ({
    id,
    unitId: unit.id,
    subject: unit.subject,
    standards: unit.standards,
    title: SKILL_OVERRIDES[id]?.title || titleFromId(id),
    type: SKILL_OVERRIDES[id]?.type || (unit.subject === "math" ? "skill" : "literacy skill"),
    canDo: SKILL_OVERRIDES[id]?.canDo || `I can work on ${titleFromId(id).toLowerCase()}.`,
    misconception: SKILL_OVERRIDES[id]?.misconception || "Needs more precise evidence before a specific misconception is assigned",
    scaffolds: SKILL_OVERRIDES[id]?.scaffolds || []
  }))
);

const SKILLS_BY_ID = Object.fromEntries(SKILLS.map((skill) => [skill.id, skill]));
const UNITS_BY_ID = Object.fromEntries(UNITS.map((unit) => [unit.id, unit]));
const DEFAULT_UNIT_IDS = ["math-g4-u01", "math-g4-u02", "math-g4-u04", "ela-g4-u01", "ela-g4-u02", "ela-g4-u03"];
const FOCUS_SKILLS = [
  "math-g4-nbt-place-value-times-ten",
  "math-g4-nbt-compare-multi-digit",
  "math-g4-oa-word-problem-modeling",
  "math-g4-oa-interpret-remainders",
  "math-g4-nf-compare-unlike-fractions",
  "ela-g4-rl-text-evidence",
  "ela-g4-rl-infer-theme",
  "ela-g4-ri-main-idea-details",
  "ela-g4-ri-author-claims-evidence",
  "ela-g4-w-opinion-reasons-evidence"
];

const DIAGNOSTIC_ITEMS = [
  {
    id: "diag-1",
    subject: "math",
    skillId: "math-g4-nbt-place-value-times-ten",
    prompt: "In 55,000, how does the value of the first 5 compare with the value of the second 5?",
    choices: ["It is 5 times as much", "It is 10 times as much", "It is 100 times as much", "They have the same value"],
    answer: 1,
    explanation: "The first 5 is in the ten-thousands place and the second is in the thousands place, so it is 10 times as much.",
    difficulty: 0.55
  },
  {
    id: "diag-2",
    subject: "math",
    skillId: "math-g4-nbt-compare-multi-digit",
    prompt: "Which number is greatest?",
    choices: ["408,921", "480,129", "408,912", "480,092"],
    answer: 1,
    explanation: "480,129 is greater because 480 thousands is more than 408 thousands, and it is greater than 480,092.",
    difficulty: 0.5
  },
  {
    id: "diag-3",
    subject: "math",
    skillId: "math-g4-oa-word-problem-modeling",
    prompt: "A library has 6 shelves with 28 books on each shelf. It donates 35 books. How many books are left?",
    choices: ["133", "168", "203", "73"],
    answer: 0,
    explanation: "6 x 28 = 168 books. 168 - 35 = 133 books left.",
    difficulty: 0.68
  },
  {
    id: "diag-4",
    subject: "math",
    skillId: "math-g4-nf-compare-unlike-fractions",
    prompt: "Which comparison is true?",
    choices: ["1/3 > 1/2", "3/8 > 1/2", "5/6 > 3/4", "2/5 > 4/5"],
    answer: 2,
    explanation: "5/6 is greater than 3/4. You can compare with twelfths: 10/12 > 9/12.",
    difficulty: 0.72
  },
  {
    id: "diag-5",
    subject: "ela",
    skillId: "ela-g4-rl-text-evidence",
    prompt: "A character whispers, checks the hallway, and hides a letter. What is the best inference?",
    choices: ["The character is sleepy", "The character is trying to keep something secret", "The character is lost", "The character wants to cook dinner"],
    answer: 1,
    explanation: "The actions suggest secrecy. The details are evidence for the inference.",
    difficulty: 0.46
  },
  {
    id: "diag-6",
    subject: "ela",
    skillId: "ela-g4-rl-infer-theme",
    prompt: "In a story, a student practices every day after failing a recital and later performs confidently. Which theme fits best?",
    choices: ["Music is always easy", "Practice can help people improve", "Friends should never help", "Recitals happen at school"],
    answer: 1,
    explanation: "A theme is a message. The story shows that practice leads to improvement.",
    difficulty: 0.58
  },
  {
    id: "diag-7",
    subject: "ela",
    skillId: "ela-g4-ri-main-idea-details",
    prompt: "A passage explains how solar panels collect sunlight, turn it into electricity, and help power homes. What is the main idea?",
    choices: ["Homes have roofs", "Solar panels can use sunlight to make electricity", "Electricity is expensive", "The sun is hot"],
    answer: 1,
    explanation: "The whole passage is about how solar panels make and use electricity.",
    difficulty: 0.54
  },
  {
    id: "diag-8",
    subject: "ela",
    skillId: "ela-g4-w-opinion-reasons-evidence",
    prompt: "Which sentence best supports the opinion: Students should read every day?",
    choices: ["I like blue book covers", "Reading daily can improve vocabulary and fluency", "Some books are long", "My friend has a shelf"],
    answer: 1,
    explanation: "This gives a reason connected to the opinion.",
    difficulty: 0.5
  }
];

const PRACTICE_ITEMS = [
  {
    id: "p-1",
    skillId: "math-g4-nbt-place-value-times-ten",
    prompt: "In 72,222, how many times greater is the value of the 7 than the value of the first 2?",
    choices: ["3.5 times", "10 times", "35 times", "100 times"],
    answer: 2,
    hint: "Compare 70,000 with 2,000.",
    explanation: "70,000 divided by 2,000 is 35.",
    misconception: "place_value_ratio"
  },
  {
    id: "p-2",
    skillId: "math-g4-nbt-compare-multi-digit",
    prompt: "Put these in order from least to greatest: 305,210; 350,201; 305,120.",
    choices: ["305,120; 305,210; 350,201", "305,210; 305,120; 350,201", "350,201; 305,120; 305,210", "305,120; 350,201; 305,210"],
    answer: 0,
    hint: "Compare the thousands first, then the hundreds and tens.",
    explanation: "305,120 is less than 305,210, and both are less than 350,201.",
    misconception: "digit_order"
  },
  {
    id: "p-3",
    skillId: "math-g4-oa-word-problem-modeling",
    prompt: "A class packs 7 boxes with 24 pencils each. They give 39 pencils to another class. Which expression finds the pencils left?",
    choices: ["7 + 24 - 39", "7 x 24 - 39", "39 - 7 x 24", "7 x (24 - 39)"],
    answer: 1,
    hint: "First find the total pencils, then subtract the pencils given away.",
    explanation: "7 x 24 gives the total. Subtract 39 after that.",
    misconception: "operation_order_context"
  },
  {
    id: "p-4",
    skillId: "math-g4-oa-interpret-remainders",
    prompt: "Thirty students ride in vans. Each van holds 8 students. How many vans are needed?",
    choices: ["3", "3 remainder 6", "4", "5"],
    answer: 2,
    hint: "The remaining students still need a van.",
    explanation: "30 divided by 8 is 3 remainder 6, so 4 vans are needed.",
    misconception: "remainder_context"
  },
  {
    id: "p-5",
    skillId: "math-g4-nf-compare-unlike-fractions",
    prompt: "Which fraction is greater: 3/4 or 5/8?",
    choices: ["3/4", "5/8", "They are equal", "Cannot compare"],
    answer: 0,
    hint: "Use eighths: 3/4 equals 6/8.",
    explanation: "3/4 equals 6/8, and 6/8 is greater than 5/8.",
    misconception: "denominator_size"
  },
  {
    id: "p-6",
    skillId: "math-g4-nf-compare-unlike-fractions",
    prompt: "A student says 1/6 is greater than 1/4 because 6 is greater than 4. What should you say?",
    choices: ["Correct, because 6 is larger", "Incorrect, sixths are smaller parts than fourths", "Correct, because both have numerator 1", "Incorrect, because the fractions are equal"],
    answer: 1,
    hint: "Think about equal-sized wholes cut into more pieces.",
    explanation: "When the whole is the same, sixths are smaller pieces than fourths.",
    misconception: "larger_denominator_larger_fraction"
  },
  {
    id: "p-7",
    skillId: "ela-g4-rl-text-evidence",
    prompt: "Which detail best supports the inference that Lina is nervous?",
    choices: ["Lina's hands shook as she opened the envelope", "The envelope was white", "The room had two windows", "It was Tuesday"],
    answer: 0,
    hint: "Choose the detail that shows a feeling through action.",
    explanation: "Shaking hands are evidence that Lina may be nervous.",
    misconception: "weak_evidence"
  },
  {
    id: "p-8",
    skillId: "ela-g4-rl-infer-theme",
    prompt: "A character refuses help, struggles, then learns to ask teammates for ideas. Which theme is best?",
    choices: ["Teams always win trophies", "Asking for help can make us stronger", "Ideas are never useful", "Games are hard"],
    answer: 1,
    hint: "Look for the message the character learns.",
    explanation: "The character changes by learning that help can be valuable.",
    misconception: "topic_instead_theme"
  },
  {
    id: "p-9",
    skillId: "ela-g4-ri-main-idea-details",
    prompt: "Which is a supporting detail for the main idea: Bees help plants grow?",
    choices: ["Bees can be yellow and black", "Bees move pollen from flower to flower", "Some people are afraid of bees", "Honey can taste sweet"],
    answer: 1,
    hint: "Pick the detail that explains how bees help plants.",
    explanation: "Moving pollen helps plants make seeds and fruit.",
    misconception: "interesting_not_supporting"
  },
  {
    id: "p-10",
    skillId: "ela-g4-ri-author-claims-evidence",
    prompt: "An author claims school gardens are useful. Which evidence best supports the claim?",
    choices: ["A garden can help students observe plant life cycles", "Many schools have doors", "Some vegetables are green", "Gardens are outside"],
    answer: 0,
    hint: "Evidence should directly support the claim.",
    explanation: "Observing plant life cycles is a useful educational purpose.",
    misconception: "fact_without_claim_link"
  },
  {
    id: "p-11",
    skillId: "ela-g4-w-opinion-reasons-evidence",
    prompt: "Which evidence best supports this opinion: Field trips help students learn?",
    choices: ["Some buses are blue", "Museums often let students see artifacts they studied in class", "Students wear shoes on trips", "Lunch can be packed in a bag"],
    answer: 1,
    hint: "Look for evidence that connects the trip to learning.",
    explanation: "Seeing artifacts from class connects a field trip to learning.",
    misconception: "irrelevant_evidence"
  },
  {
    id: "p-12",
    skillId: "ela-g4-l-sentence-conventions",
    prompt: "Which sentence is complete and correctly punctuated?",
    choices: ["Because the rain stopped.", "The rain stopped, so we played outside.", "we played outside", "The rain stopped so"],
    answer: 1,
    hint: "A complete sentence has a complete thought and correct capitalization and punctuation.",
    explanation: "The sentence has a complete thought, capitalization, and punctuation.",
    misconception: "fragment"
  }
];

const OPEN_RESPONSE_PROMPTS = [
  {
    id: "open-1",
    skillId: "ela-g4-w-opinion-reasons-evidence",
    prompt: "Write 4-5 sentences explaining whether Grade 4 students should have a daily independent reading block. Include one reason and one piece of evidence.",
    sample: "Students should have a daily independent reading block because it helps them build stamina. When students read every day, they meet more words and practice understanding longer texts. This can improve vocabulary and fluency. A reading block also helps students choose books that match their interests."
  },
  {
    id: "open-2",
    skillId: "math-g4-nf-compare-unlike-fractions",
    prompt: "Explain why 3/4 is greater than 5/8. Use a model, benchmark, or equivalent fraction in your explanation.",
    sample: "3/4 is greater than 5/8 because 3/4 is the same as 6/8. If the whole is the same, 6 eighths is greater than 5 eighths. So 3/4 is greater."
  }
];

const LESSONS = {
  "math-g4-nf-compare-unlike-fractions": {
    title: "Fraction Detective: Compare Fair Shares",
    minutes: 12,
    xp: 120,
    setting: "You are helping plan snack trays for a Grade 4 reading celebration. Each tray must compare fair shares from the same-sized whole.",
    objective: "Compare fractions by using the same whole, benchmarks, or equivalent fractions.",
    steps: [
      {
        label: "See it",
        title: "Same whole, different-sized pieces",
        body: "A denominator tells how many equal pieces the whole is split into. More pieces usually means each piece is smaller, but the numerator tells how many pieces you have.",
        visual: "fractions"
      },
      {
        label: "Try it",
        title: "Use a common denominator",
        body: "To compare 3/4 and 5/8, rename 3/4 as 6/8. Now both fractions use eighths, so 6/8 is greater than 5/8.",
        equation: "3/4 = 6/8, and 6/8 > 5/8"
      },
      {
        label: "Watch for",
        title: "The denominator trap",
        body: "A larger denominator does not automatically make a larger fraction. If the whole is the same, sixths are smaller pieces than fourths.",
        misconception: "Do not compare only the bottom numbers."
      }
    ],
    vocabulary: ["same whole", "benchmark", "equivalent", "numerator", "denominator"],
    quickCheck: {
      prompt: "Which strategy proves that 2/3 is greater than 3/6?",
      choices: ["Compare only 3 and 6", "Rename 2/3 as 4/6", "Choose 3/6 because 6 is bigger", "They cannot be compared"],
      answer: 1,
      feedback: "Yes. 2/3 equals 4/6, and 4/6 is greater than 3/6."
    }
  },
  "math-g4-oa-word-problem-modeling": {
    title: "Operation Lab: Build the Equation",
    minutes: 10,
    xp: 100,
    setting: "A student council is packing supplies for classrooms. Your job is to turn the story into a clear model before solving.",
    objective: "Represent a multi-step word problem with an equation and check whether the answer makes sense.",
    steps: [
      {
        label: "Read",
        title: "Find the action",
        body: "Underline what is happening before choosing operations: equal groups, combining, comparing, giving away, or finding what is left.",
        equation: "groups x amount - change = left"
      },
      {
        label: "Model",
        title: "Use one equation",
        body: "If 7 boxes have 24 pencils each and 39 are given away, the model is 7 x 24 - 39.",
        equation: "7 x 24 - 39 = 129"
      },
      {
        label: "Check",
        title: "Estimate first",
        body: "7 x 24 is close to 7 x 25, or 175. After subtracting about 40, an answer near 135 makes sense.",
        misconception: "Solving the first step is not the same as answering the question."
      }
    ],
    vocabulary: ["equation", "unknown", "remaining", "estimate"],
    quickCheck: {
      prompt: "A club has 5 bags with 18 markers each. It gives away 22 markers. Which model fits?",
      choices: ["5 + 18 - 22", "5 x 18 - 22", "22 - 5 x 18", "5 x (18 - 22)"],
      answer: 1,
      feedback: "Correct. First find all markers with 5 x 18, then subtract 22."
    }
  },
  "math-g4-nbt-place-value-times-ten": {
    title: "Number Tower: Ten Times Bigger",
    minutes: 8,
    xp: 80,
    setting: "You are stacking place-value blocks to build large numbers. Each move left makes the value ten times as large.",
    objective: "Explain how place value changes when a digit moves one place left or right.",
    steps: [
      {
        label: "Notice",
        title: "A digit gets its value from its place",
        body: "In 55,000, the first 5 means 50,000. The second 5 means 5,000.",
        equation: "50,000 = 10 x 5,000"
      },
      {
        label: "Build",
        title: "Move left, multiply by 10",
        body: "Thousands become ten-thousands. Ten-thousands become hundred-thousands.",
        visual: "place"
      },
      {
        label: "Explain",
        title: "Use value, not just digit names",
        body: "A strong answer names the place and compares the values.",
        misconception: "Do not say the two 5s are equal just because the digit is the same."
      }
    ],
    vocabulary: ["digit", "place", "value", "ten times"],
    quickCheck: {
      prompt: "In 440,000, how does the first 4 compare with the second 4?",
      choices: ["Same value", "10 times as much", "100 times as much", "4 times as much"],
      answer: 1,
      feedback: "Yes. 400,000 is ten times 40,000."
    }
  },
  "ela-g4-rl-text-evidence": {
    title: "Evidence Quest: Prove the Inference",
    minutes: 10,
    xp: 100,
    setting: "You are a story investigator. Your answer is only strong when the text detail proves it.",
    objective: "Use details from a literary text to support an inference.",
    passage: "Lina stood outside the music room with her violin case pressed against her chest. She took a deep breath, wiped her palms on her skirt, and peeked through the small window before opening the door.",
    steps: [
      {
        label: "Infer",
        title: "Read actions as clues",
        body: "The text does not say Lina is nervous, but her actions give clues: deep breath, wiping palms, and peeking through the window."
      },
      {
        label: "Select",
        title: "Pick evidence that proves the idea",
        body: "A strong detail is connected to the inference. 'Her violin case' is interesting, but 'wiped her palms' better supports nervousness."
      },
      {
        label: "Respond",
        title: "Answer plus evidence",
        body: "Use a pattern: I infer ___ because the text says ___."
      }
    ],
    vocabulary: ["infer", "evidence", "detail", "support"],
    quickCheck: {
      prompt: "Which detail best supports the inference that Lina is nervous?",
      choices: ["She has a violin case", "She wiped her palms on her skirt", "The door has a window", "She is outside a room"],
      answer: 1,
      feedback: "Yes. Wiping her palms is an action that supports nervousness."
    }
  },
  "ela-g4-ri-main-idea-details": {
    title: "Main Idea Builder: Solar Power",
    minutes: 10,
    xp: 100,
    setting: "You are organizing a science article so another student can understand it quickly.",
    objective: "Identify a main idea and choose details that support it.",
    passage: "Solar panels collect energy from sunlight. That energy can be changed into electricity for homes, schools, and small devices. Some schools use solar panels to lower energy costs and teach students about renewable power.",
    steps: [
      {
        label: "Topic",
        title: "Name what the text is mostly about",
        body: "The topic is solar panels. A topic is usually a phrase, not a full idea."
      },
      {
        label: "Main idea",
        title: "Say the important point",
        body: "The main idea is that solar panels use sunlight to make useful electricity."
      },
      {
        label: "Details",
        title: "Choose support",
        body: "Details about collecting sunlight, powering buildings, and lowering energy costs all support the main idea."
      }
    ],
    vocabulary: ["topic", "main idea", "supporting detail", "summary"],
    quickCheck: {
      prompt: "Which detail best supports the main idea that solar panels make useful electricity?",
      choices: ["Panels collect sunlight", "Some roofs are flat", "Schools have classrooms", "The word solar has five letters"],
      answer: 0,
      feedback: "Correct. Collecting sunlight explains how panels make electricity."
    }
  },
  "ela-g4-w-opinion-reasons-evidence": {
    title: "Opinion Workshop: Build a Strong Paragraph",
    minutes: 14,
    xp: 140,
    setting: "You are writing to the school principal about whether Grade 4 should have daily independent reading time.",
    objective: "State an opinion and support it with reasons and evidence.",
    steps: [
      {
        label: "Claim",
        title: "Start with a clear opinion",
        body: "A claim tells what you believe. Example: Grade 4 students should have a daily independent reading block."
      },
      {
        label: "Reason",
        title: "Explain why",
        body: "A reason connects to the claim. Example: Daily reading helps students build vocabulary and stamina."
      },
      {
        label: "Evidence",
        title: "Prove it",
        body: "Evidence can come from a text, class data, or an observation. Example: Students meet new words when they read different genres."
      }
    ],
    vocabulary: ["opinion", "claim", "reason", "evidence", "conclusion"],
    quickCheck: {
      prompt: "Which sentence is the strongest evidence for daily reading?",
      choices: ["Some books have covers", "Reading every day exposes students to more words", "I like chairs", "The library has a clock"],
      answer: 1,
      feedback: "Yes. This evidence connects directly to learning from daily reading."
    }
  }
};

const DEMO_STUDENTS = [
  {
    id: "maya",
    name: "Maya Chen",
    initials: "MC",
    profile: "Fast conceptual learner; fraction comparison needs targeted evidence.",
    languageLoad: "medium",
    goal: "Move from secure to mastered in fraction comparison and cite evidence more consistently.",
    activeMinutes: 74,
    learningVelocity: 0.42,
    focusRhythm: "Best in 18 minute sprints",
    diagnosticComplete: false
  },
  {
    id: "leo",
    name: "Leo Martinez",
    initials: "LM",
    profile: "Strong reader; slows down on multi-step math language.",
    languageLoad: "low",
    goal: "Model multi-step word problems with fewer teacher prompts.",
    activeMinutes: 69,
    learningVelocity: 0.31,
    focusRhythm: "Steady 25 minute sessions",
    diagnosticComplete: true
  },
  {
    id: "aisha",
    name: "Aisha Rahman",
    initials: "AR",
    profile: "Careful worker; writing evidence and revision are high leverage.",
    languageLoad: "medium",
    goal: "Use stronger evidence in opinion writing.",
    activeMinutes: 81,
    learningVelocity: 0.28,
    focusRhythm: "Benefits from checklist breaks",
    diagnosticComplete: true
  },
  {
    id: "ethan",
    name: "Ethan Wu",
    initials: "EW",
    profile: "Advanced math; needs more transfer and explanation tasks.",
    languageLoad: "low",
    goal: "Unlock enrichment while strengthening written explanations.",
    activeMinutes: 62,
    learningVelocity: 0.55,
    focusRhythm: "Short warmup, then challenge work",
    diagnosticComplete: true
  },
  {
    id: "sofia",
    name: "Sofia Rossi",
    initials: "SR",
    profile: "Strong effort; retention drops after a delay without spaced review.",
    languageLoad: "medium",
    goal: "Stabilize retention in place value and informational reading.",
    activeMinutes: 77,
    learningVelocity: 0.24,
    focusRhythm: "Needs retrieval practice at start",
    diagnosticComplete: true
  },
  {
    id: "jun",
    name: "Jun Park",
    initials: "JP",
    profile: "Quick answers, sometimes low independence due to hint overuse.",
    languageLoad: "low",
    goal: "Raise independent accuracy before advancing.",
    activeMinutes: 58,
    learningVelocity: 0.37,
    focusRhythm: "Works best with hint delay",
    diagnosticComplete: true
  }
];

function createInitialState() {
  return {
    portal: "login",
    activeView: "overview",
    previousAdminView: "planner",
    previewFromAdmin: false,
    selectedStudentId: "maya",
    selectedUnitIds: DEFAULT_UNIT_IDS.slice(),
    scheduleConfig: {
      startDate: "2026-08-24",
      endDate: "2026-12-18",
      mathMinutes: 240,
      elaMinutes: 260,
      reviewBuffer: 18
    },
    studentMode: "mission",
    studentAnswer: null,
    diagnosticCursor: 0,
    diagnosticAnswers: [],
    lessonAnswer: null,
    lessonFeedback: null,
    completedLessons: {},
    learningFeedbackText: "",
    learningFeedbackType: "confused",
    studentNotice: "",
    helpRequestOpen: false,
    helpRequestText: "",
    equippedPowerUp: "fraction_lens",
    dailyChallengeAnswer: null,
    dailyChallengeFeedback: null,
    practiceAnswer: null,
    practiceCursorBySkill: {},
    activePracticeSkillId: "math-g4-nf-compare-unlike-fractions",
    hintVisible: false,
    lastFeedback: null,
    openResponseText: "",
    openResponsePromptIndex: 0,
    teacherAiOutput: null,
    studentAiOutputBySkill: {},
    aiSettings: defaultAiSettings(),
    students: DEMO_STUDENTS.map((student, index) => ({
      ...student,
      mastery: seedMastery(index),
      attempts: [],
      misconceptions: seedMisconceptions(index)
    })),
    reviewQueue: [
      {
        id: "review-1",
        studentId: "aisha",
        skillId: "ela-g4-w-opinion-reasons-evidence",
        type: "writing",
        status: "pending",
        submittedAt: "2026-09-08",
        evidence: "Students should read daily because reading helps vocabulary. The article says students meet new words when they read different books.",
        recommendation: "Accept as secure evidence; ask for a stronger conclusion next time."
      },
      {
        id: "review-2",
        studentId: "ethan",
        skillId: "math-g4-nf-compare-unlike-fractions",
        type: "explanation",
        status: "pending",
        submittedAt: "2026-09-09",
        evidence: "3/4 is 6/8, and 6/8 is bigger than 5/8 because the wholes are the same.",
        recommendation: "Strong conceptual evidence; mark transfer as met."
      }
    ],
    notifications: [
      {
        id: "note-1",
        type: "student_feedback",
        studentId: "jun",
        skillId: "math-g4-nbt-compare-multi-digit",
        title: "Hint use check-in",
        message: "Jun is using hints quickly and may need a no-hint warmup.",
        status: "unread",
        priority: "medium",
        createdAt: "2026-09-09"
      }
    ]
  };
}

function defaultAiSettings() {
  return {
    enabled: true,
    demoMode: true,
    activeProvider: "openai",
    maxInputTokens: 900,
    studentMaxOutputTokens: 120,
    teacherMaxOutputTokens: 260,
    temperature: 0.2,
    providers: {
      openai: {
        label: "ChatGPT",
        apiKey: "",
        baseUrl: "https://api.openai.com/v1",
        model: "gpt-4.1-mini",
        status: "ready"
      },
      gemini: {
        label: "Gemini",
        apiKey: "",
        baseUrl: "https://generativelanguage.googleapis.com/v1beta",
        model: "gemini-1.5-flash",
        status: "ready"
      },
      deepseek: {
        label: "DeepSeek",
        apiKey: "",
        baseUrl: "https://api.deepseek.com",
        model: "deepseek-chat",
        status: "ready"
      },
      kimi: {
        label: "Kimi",
        apiKey: "",
        baseUrl: "https://api.moonshot.cn/v1",
        model: "moonshot-v1-8k",
        status: "ready"
      },
      custom: {
        label: "Custom OpenAI-compatible",
        apiKey: "",
        baseUrl: "",
        model: "",
        status: "later"
      }
    }
  };
}

function seedMastery(studentIndex) {
  const mastery = {};
  SKILLS.forEach((skill, skillIndex) => {
    const base =
      0.48 +
      ((studentIndex * 11 + skillIndex * 7) % 42) / 100 +
      (skill.subject === "math" && studentIndex === 3 ? 0.11 : 0) +
      (skill.subject === "ela" && studentIndex === 1 ? 0.08 : 0);
    let score = clamp(base, 0.32, 0.94);
    if (studentIndex === 0 && skill.id === "math-g4-nf-compare-unlike-fractions") score = 0.54;
    if (studentIndex === 0 && skill.id === "math-g4-nbt-place-value-times-ten") score = 0.82;
    if (studentIndex === 0 && skill.id === "ela-g4-rl-text-evidence") score = 0.78;
    if (studentIndex === 2 && skill.id === "ela-g4-w-opinion-reasons-evidence") score = 0.59;
    if (studentIndex === 5 && skill.id === "math-g4-nbt-compare-multi-digit") score = 0.73;
    mastery[skill.id] = {
      score: round2(score),
      confidence: round2(clamp(score - 0.06 + ((skillIndex % 5) * 0.03), 0.35, 0.91)),
      independentAccuracy: round2(clamp(score - 0.08 + ((studentIndex + skillIndex) % 4) * 0.03, 0.28, 0.95)),
      evidenceAccuracy: round2(clamp(score + 0.03, 0.34, 0.97)),
      conceptual: round2(clamp(score - 0.03 + (skill.type.includes("conceptual") ? 0.06 : 0), 0.3, 0.95)),
      retention: round2(clamp(score - 0.09 + ((skillIndex + 2) % 3) * 0.04, 0.25, 0.9)),
      transfer: round2(clamp(score - 0.1 + (skill.type.includes("application") ? 0.06 : 0), 0.24, 0.9)),
      hintRate: round2(clamp(0.36 - score / 4 + (studentIndex === 5 ? 0.12 : 0), 0.02, 0.48)),
      attempts: 5 + ((studentIndex + skillIndex) % 8),
      status: statusFromScore(score)
    };
  });
  return mastery;
}

function seedMisconceptions(studentIndex) {
  const data = {};
  if (studentIndex === 0) data["larger_denominator_larger_fraction"] = 3;
  if (studentIndex === 1) data["operation_order_context"] = 2;
  if (studentIndex === 2) data["irrelevant_evidence"] = 3;
  if (studentIndex === 4) data["weak_retention"] = 2;
  if (studentIndex === 5) data["hint_dependency"] = 4;
  return data;
}

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createInitialState();
    const parsed = JSON.parse(raw);
    const fresh = createInitialState();
    return {
      ...fresh,
      ...parsed,
      aiSettings: mergeAiSettings(fresh.aiSettings, parsed.aiSettings),
      students: Array.isArray(parsed.students) ? parsed.students : fresh.students
    };
  } catch (error) {
    return createInitialState();
  }
}

function mergeAiSettings(defaults, saved) {
  if (!saved) return defaults;
  return {
    ...defaults,
    ...saved,
    providers: {
      ...defaults.providers,
      ...(saved.providers || {}),
      openai: { ...defaults.providers.openai, ...(saved.providers?.openai || {}) },
      gemini: { ...defaults.providers.gemini, ...(saved.providers?.gemini || {}) },
      deepseek: { ...defaults.providers.deepseek, ...(saved.providers?.deepseek || {}) },
      kimi: { ...defaults.providers.kimi, ...(saved.providers?.kimi || {}) },
      custom: { ...defaults.providers.custom, ...(saved.providers?.custom || {}) }
    }
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setState(patch) {
  state = { ...state, ...patch };
  saveState();
  render();
}

function titleFromId(id) {
  return id
    .split("-")
    .slice(3)
    .join(" ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function round2(value) {
  return Math.round(value * 100) / 100;
}

function percent(value) {
  return `${Math.round((value || 0) * 100)}%`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function statusFromScore(score) {
  if (score >= 0.88) return "mastered";
  if (score >= 0.76) return "secure";
  if (score >= 0.58) return "practicing";
  if (score >= 0.45) return "learning";
  return "intervention";
}

function statusLabel(status) {
  return status.replaceAll("_", " ");
}

function kidStatusLabel(status) {
  const labels = {
    mastered: "Mastered",
    secure: "Ready",
    practicing: "Practicing",
    learning: "Learning",
    intervention: "Need help",
    needs_review: "Review",
    enrichment: "Bonus",
    diagnosing: "Checking",
    not_started: "New"
  };
  return labels[status] || statusLabel(status);
}

function selectedStudent() {
  return state.students.find((student) => student.id === state.selectedStudentId) || state.students[0];
}

function selectedUnits() {
  return state.selectedUnitIds.map((id) => UNITS_BY_ID[id]).filter(Boolean);
}

function selectedSkills() {
  const ids = selectedUnits().flatMap((unit) => unit.skillIds);
  return ids.map((id) => SKILLS_BY_ID[id]).filter(Boolean);
}

function updateStudent(studentId, updater) {
  state.students = state.students.map((student) => (student.id === studentId ? updater({ ...student }) : student));
  saveState();
}

function addSchoolDays(dateValue, days) {
  const date = new Date(`${dateValue}T12:00:00`);
  let added = 0;
  while (added < days) {
    date.setDate(date.getDate() + 1);
    const day = date.getDay();
    if (day !== 0 && day !== 6) added += 1;
  }
  return toDateInput(date);
}

function toDateInput(date) {
  return date.toISOString().slice(0, 10);
}

function formatDate(dateValue) {
  const date = new Date(`${dateValue}T12:00:00`);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function generateSchedule() {
  const bySubject = { math: [], ela: [] };
  selectedUnits().forEach((unit) => bySubject[unit.subject].push(unit));
  Object.values(bySubject).forEach((units) => units.sort((a, b) => a.sequence - b.sequence));

  const result = [];
  Object.entries(bySubject).forEach(([subject, units]) => {
    let cursor = state.scheduleConfig.startDate;
    const weeklyMinutes = subject === "math" ? Number(state.scheduleConfig.mathMinutes) : Number(state.scheduleConfig.elaMinutes);
    const dailyMinutes = Math.max(20, weeklyMinutes / 5);
    units.forEach((unit) => {
      const adjustedMinutes = Math.round(unit.estimatedMinutes * (1 + Number(state.scheduleConfig.reviewBuffer) / 100));
      const days = Math.max(2, Math.ceil(adjustedMinutes / dailyMinutes));
      const start = cursor;
      const end = addSchoolDays(start, days - 1);
      result.push({
        unitId: unit.id,
        subject,
        title: unit.title,
        start,
        end,
        days,
        adjustedMinutes,
        checkpoint: addSchoolDays(end, 1)
      });
      cursor = addSchoolDays(end, 2);
    });
  });

  return result.sort((a, b) => a.start.localeCompare(b.start) || a.subject.localeCompare(b.subject));
}

function averageMastery(student, skillIds = selectedSkills().map((skill) => skill.id)) {
  const values = skillIds.map((id) => student.mastery[id]?.score).filter((value) => typeof value === "number");
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function readiness(student, skillId) {
  const mastery = student.mastery[skillId];
  if (!mastery) return { ready: false, reasons: ["No evidence yet"] };
  const reasons = [];
  if (mastery.independentAccuracy >= 0.84) reasons.push("independent accuracy met");
  if (mastery.conceptual >= 0.75) reasons.push("conceptual evidence met");
  if (mastery.transfer >= 0.72) reasons.push("transfer evidence met");
  if (mastery.retention >= 0.7) reasons.push("retention check met");
  if (mastery.confidence >= 0.68) reasons.push("evidence confidence sufficient");
  return {
    ready: reasons.length >= 4 && mastery.score >= 0.78,
    reasons
  };
}

function recommendedSkill(student, subject) {
  const candidates = selectedSkills()
    .filter((skill) => !subject || skill.subject === subject)
    .map((skill) => ({ skill, mastery: student.mastery[skill.id] }))
    .filter((entry) => entry.mastery && entry.mastery.status !== "mastered");
  candidates.sort((a, b) => {
    const aPriority = a.mastery.status === "intervention" ? -1 : 0;
    const bPriority = b.mastery.status === "intervention" ? -1 : 0;
    return aPriority - bPriority || a.mastery.score - b.mastery.score;
  });
  return candidates[0]?.skill || selectedSkills().find((skill) => !subject || skill.subject === subject);
}

function practiceItemForSkill(skillId) {
  const items = PRACTICE_ITEMS.filter((item) => item.skillId === skillId);
  if (items.length) {
    const index = state.practiceCursorBySkill?.[skillId] || 0;
    return items[index % items.length];
  }
  return PRACTICE_ITEMS[0];
}

function classStats() {
  const skillIds = selectedSkills().map((skill) => skill.id);
  const averages = state.students.map((student) => averageMastery(student, skillIds));
  const classAverage = averages.reduce((sum, value) => sum + value, 0) / averages.length;
  let interventions = 0;
  let ready = 0;
  state.students.forEach((student) => {
    selectedSkills().forEach((skill) => {
      const mastery = student.mastery[skill.id];
      if (mastery?.status === "intervention" || mastery?.status === "learning") interventions += 1;
      if (readiness(student, skill.id).ready) ready += 1;
    });
  });
  return {
    classAverage,
    interventions,
    ready,
    validation: state.reviewQueue.filter((item) => item.status === "pending").length
  };
}

function unreadNotificationCount() {
  return (state.notifications || []).filter((item) => item.status !== "read").length;
}

function render() {
  renderChrome();
  const app = document.querySelector("#app");
  if (state.portal === "login") {
    app.innerHTML = renderLogin();
  } else if (state.portal === "student") {
    app.innerHTML = renderStudentLab();
  } else if (state.portal === "system") {
    app.innerHTML = renderSystemAdmin();
  } else {
    const viewMap = {
      overview: renderAdminOverview,
      planner: renderPlanner,
      dashboard: renderDashboard,
      notifications: renderNotifications,
      reports: renderReports,
      script: renderScript
    };
    const adminView = viewMap[state.activeView] ? state.activeView : "overview";
    app.innerHTML = viewMap[adminView]();
  }
  bindChrome();
  bindViewEvents();
}

function renderChrome() {
  const nav = document.querySelector("#mainNav");
  const actions = document.querySelector("#headerActions");

  if (state.portal === "login") {
    nav.innerHTML = "";
    nav.classList.add("is-hidden");
    actions.innerHTML = `
      <button class="ghost system-link" data-action="login-system" type="button">System</button>
      <button class="icon-button" id="resetDemo" type="button" aria-label="Reset demo state" title="Reset demo state">Reset</button>
    `;
    return;
  }

  nav.classList.remove("is-hidden");
  nav.classList.remove("student-nav");
  if (state.portal === "student") {
    nav.classList.add("student-nav");
    const studentTabs = [
      ["mission", "Today"],
      ["lesson", "Learn"],
      ["practice", "Practice Arena"],
      ["progress", "My Progress"],
      ["diagnostic", "Level Check"]
    ];
    nav.innerHTML = studentTabs
      .map(([mode, label]) => `<button class="tab ${state.studentMode === mode ? "is-active" : ""}" data-student-mode="${mode}" type="button">${label}</button>`)
      .join("");
    actions.innerHTML = state.previewFromAdmin
      ? `
        <span class="signed-in">Previewing as ${escapeHtml(selectedStudent().name)}</span>
        <button class="secondary" data-action="return-admin-preview" type="button">Back to admin</button>
        <button class="icon-button" id="resetDemo" type="button" aria-label="Reset demo state" title="Reset demo state">Reset</button>
      `
      : `
        <span class="signed-in">Signed in as ${escapeHtml(selectedStudent().name)}</span>
        <button class="icon-button" data-action="logout" type="button">Log out</button>
        <button class="icon-button" id="resetDemo" type="button" aria-label="Reset demo state" title="Reset demo state">Reset</button>
      `;
    return;
  }

  if (state.portal === "system") {
    nav.innerHTML = `<button class="tab is-active" data-view="system" type="button">System Admin</button>`;
    actions.innerHTML = `
      <span class="signed-in">IT / System Admin</span>
      <button class="secondary" data-action="login-admin" type="button">Admin portal</button>
      <button class="icon-button" data-action="logout" type="button">Log out</button>
      <button class="icon-button" id="resetDemo" type="button" aria-label="Reset demo state" title="Reset demo state">Reset</button>
    `;
    return;
  }

  const adminTabs = [
    ["overview", "Overview"],
    ["planner", "Setup"],
    ["dashboard", "Monitor"],
    ["notifications", `Inbox${unreadNotificationCount() ? ` (${unreadNotificationCount()})` : ""}`],
    ["reports", "Reports"],
    ["script", "Walkthrough"]
  ];
  const adminActive = adminTabs.some(([view]) => view === state.activeView) ? state.activeView : "overview";
  nav.innerHTML = adminTabs
    .map(([view, label]) => `<button class="tab ${adminActive === view ? "is-active" : ""}" data-view="${view}" type="button">${label}</button>`)
    .join("");
  actions.innerHTML = `
    <label class="student-picker">
      <span>Report student</span>
      <select id="studentSelect" aria-label="Current student">${studentOptions()}</select>
    </label>
    <button class="icon-button" data-action="logout" type="button">Log out</button>
    <button class="icon-button" id="resetDemo" type="button" aria-label="Reset demo state" title="Reset demo state">Reset</button>
  `;
}

function studentOptions() {
  return state.students
    .map((student) => `<option value="${student.id}" ${student.id === state.selectedStudentId ? "selected" : ""}>${escapeHtml(student.name)}</option>`)
    .join("");
}

function renderLogin() {
  return `
    <section class="login-view">
      <div class="login-copy">
        <p class="eyebrow">Atlas Learning</p>
        <h2>Choose your portal</h2>
        <p>Students go straight into learning. Teachers and admins see planning, class evidence, validation queues, and reports.</p>
      </div>
      <div class="portal-grid">
        <article class="portal-card">
          <div class="portal-icon">A</div>
          <h3>Admin / Teacher Portal</h3>
          <p>Manage units, schedules, class mastery, alerts, student feedback, validation, and parent-ready reports.</p>
          <div class="tag-row">
            <span class="tag blue">Planner</span>
            <span class="tag green">Dashboard</span>
            <span class="tag amber">Reports</span>
          </div>
          <button class="primary" type="button" data-action="login-admin">Enter admin portal</button>
        </article>
        <article class="portal-card student">
          <div class="portal-icon">L</div>
          <h3>Student Portal</h3>
          <p>Learn through short interactive lessons, complete quick checks, practice adaptively, and send feedback to the teacher.</p>
          <div class="tag-row">
            <span class="tag green">Learn</span>
            <span class="tag blue">Practice</span>
            <span class="tag amber">Progress</span>
          </div>
          <button class="primary" type="button" data-action="login-student">Enter student portal</button>
        </article>
      </div>
    </section>
  `;
}

function renderSystemAdmin() {
  const settings = state.aiSettings || defaultAiSettings();
  const provider = settings.providers[settings.activeProvider] || settings.providers.openai;
  return `
    ${renderHeader(
      "System Admin",
      "Hidden operations console for AI provider settings, token budgets, and platform-wide tuning. In production, API keys should live in a backend vault or proxy, not browser storage.",
      `<button class="primary" type="button" data-action="test-ai-config">Test AI config</button>`
    )}

    <section class="grid four">
      ${metricCard("AI mode", settings.demoMode ? "Demo" : "Live API", settings.demoMode ? "Offline structured simulation" : "Provider calls enabled")}
      ${metricCard("Provider", provider.label, settings.activeProvider)}
      ${metricCard("Student tokens", `${settings.studentMaxOutputTokens}`, "Max output tokens per hint")}
      ${metricCard("Teacher tokens", `${settings.teacherMaxOutputTokens}`, "Max output tokens per summary")}
    </section>

    <section class="grid two" style="margin-top: 18px;">
      <div class="surface">
        <div class="toolbar">
          <div>
            <h3>AI Gateway</h3>
            <p class="small-note">These options define the compact payload each portal sends to the AI layer.</p>
          </div>
        </div>
        <div class="field-grid" style="grid-template-columns: repeat(2, minmax(0, 1fr));">
          <label class="field">
            <span>Active provider</span>
            <select data-ai-setting="activeProvider">
              ${Object.entries(settings.providers)
                .map(([key, item]) => `<option value="${key}" ${settings.activeProvider === key ? "selected" : ""}>${escapeHtml(item.label)}</option>`)
                .join("")}
            </select>
          </label>
          <label class="field">
            <span>Temperature</span>
            <input data-ai-setting="temperature" type="number" min="0" max="1" step="0.1" value="${escapeHtml(settings.temperature)}">
          </label>
          <label class="field">
            <span>Max input tokens</span>
            <input data-ai-setting="maxInputTokens" type="number" min="200" value="${escapeHtml(settings.maxInputTokens)}">
          </label>
          <label class="field">
            <span>Student output tokens</span>
            <input data-ai-setting="studentMaxOutputTokens" type="number" min="40" value="${escapeHtml(settings.studentMaxOutputTokens)}">
          </label>
          <label class="field">
            <span>Teacher output tokens</span>
            <input data-ai-setting="teacherMaxOutputTokens" type="number" min="80" value="${escapeHtml(settings.teacherMaxOutputTokens)}">
          </label>
          <label class="check-field">
            <input data-ai-setting="demoMode" type="checkbox" ${settings.demoMode ? "checked" : ""}>
            <span>Use offline demo mode</span>
          </label>
        </div>
      </div>

      <div class="surface">
        <div class="toolbar">
          <div>
            <h3>${escapeHtml(provider.label)} Settings</h3>
            <p class="small-note">Configure now, route through a secure backend later.</p>
          </div>
        </div>
        <div class="field-grid" style="grid-template-columns: 1fr;">
          <label class="field">
            <span>API key</span>
            <input data-ai-provider-field="apiKey" type="password" value="${escapeHtml(provider.apiKey)}" placeholder="Paste key for local demo only">
          </label>
          <label class="field">
            <span>Base URL</span>
            <input data-ai-provider-field="baseUrl" type="text" value="${escapeHtml(provider.baseUrl)}">
          </label>
          <label class="field">
            <span>Model</span>
            <input data-ai-provider-field="model" type="text" value="${escapeHtml(provider.model)}">
          </label>
        </div>
      </div>
    </section>

    <section class="grid two" style="margin-top: 18px;">
      <div class="surface">
        <h3>Token-Optimal Payload</h3>
        <pre class="code-sample">${escapeHtml(JSON.stringify(sampleAiPayload(), null, 2))}</pre>
      </div>
      <div class="surface">
        <h3>AI Feature Flags</h3>
        <div class="skill-list">
          ${systemFlag("Student AI Coach", "Short, skill-bound hints from current lesson/practice context.")}
          ${systemFlag("Teacher Action Plan", "Batch summary from compact mastery metrics and review queue.")}
          ${systemFlag("Open Response Pre-Score", "Structured rubric assist for writing and math explanations.")}
          ${systemFlag("Provider Extensibility", "ChatGPT, Gemini, DeepSeek, Kimi, and custom OpenAI-compatible config.")}
        </div>
        ${state.aiConfigTest ? `<div class="feedback good">${escapeHtml(state.aiConfigTest)}</div>` : ""}
      </div>
    </section>
  `;
}

function systemFlag(title, body) {
  return `
    <article class="alert-row">
      <div>
        <h4>${escapeHtml(title)}</h4>
        <p>${escapeHtml(body)}</p>
      </div>
      <span class="tag green">on</span>
    </article>
  `;
}

function sampleAiPayload() {
  return {
    task: "student_hint",
    grade: 4,
    skillId: "math-g4-nf-compare-unlike-fractions",
    languageLoad: "medium",
    itemId: "p-5",
    misconception: "denominator_size",
    responseFormat: "json",
    maxOutputTokens: state.aiSettings?.studentMaxOutputTokens || 120
  };
}

function renderHeader(title, body, actions = "") {
  return `
    <section class="view-header">
      <div>
        <p class="eyebrow">Atlas demo</p>
        <h2>${escapeHtml(title)}</h2>
        <p>${escapeHtml(body)}</p>
      </div>
      <div class="button-row">${actions}</div>
    </section>
  `;
}

function renderPlanner() {
  const schedule = generateSchedule();
  const mathCount = selectedUnits().filter((unit) => unit.subject === "math").length;
  const elaCount = selectedUnits().filter((unit) => unit.subject === "ela").length;
  const selectedMinutes = selectedUnits().reduce((sum, unit) => sum + unit.estimatedMinutes, 0);
  const actions = `
    <button class="secondary" type="button" data-action="select-demo-units">Recommended set</button>
    <button class="primary" type="button" data-action="open-student-mission">Preview student portal</button>
  `;

  return `
    ${renderHeader(
      "Teacher Planner",
      "Select the Grade 4 Math and ELA units for a class, then review the baseline schedule generated from estimated minutes, weekly time, and reteach buffer.",
      actions
    )}

    <section class="grid four">
      ${metricCard("Selected units", `${state.selectedUnitIds.length}`, `${mathCount} Math and ${elaCount} ELA`)}
      ${metricCard("Baseline time", `${Math.round(selectedMinutes / 60)}h`, "Before reteach and review buffer")}
      ${metricCard("Review buffer", `${state.scheduleConfig.reviewBuffer}%`, "Reserved for reteach and retrieval")}
      ${metricCard("Class avg mastery", percent(classStats().classAverage), "Seeded demo classroom")}
    </section>

    <section class="grid two" style="margin-top: 18px;">
      <div class="surface">
        <div class="toolbar">
          <div>
            <h3>Unit Selection</h3>
            <p class="small-note">Units are intentionally short so the system can compress, expand, or assign individual review without breaking the class plan.</p>
          </div>
        </div>
        <div class="unit-list">
          ${UNITS.map(renderUnitCard).join("")}
        </div>
      </div>

      <div class="surface">
        <div class="toolbar">
          <div>
            <h3>Baseline Schedule</h3>
            <p class="small-note">The demo scheduler preserves prerequisite order by subject and adds review time automatically.</p>
          </div>
        </div>
        <div class="field-grid">
          ${renderConfigField("Start", "startDate", "date")}
          ${renderConfigField("End", "endDate", "date")}
          ${renderConfigField("Math min/wk", "mathMinutes", "number")}
          ${renderConfigField("ELA min/wk", "elaMinutes", "number")}
        </div>
        <div class="field-grid" style="grid-template-columns: minmax(180px, 1fr); margin-top: 12px;">
          ${renderConfigField("Review buffer %", "reviewBuffer", "number")}
        </div>
        <div class="schedule-list" style="margin-top: 18px;">
          ${schedule.length ? schedule.map(renderScheduleItem).join("") : `<div class="empty-state">Select at least one unit to generate a schedule.</div>`}
        </div>
      </div>
    </section>
  `;
}

function renderConfigField(label, key, type) {
  return `
    <label class="field">
      <span>${escapeHtml(label)}</span>
      <input data-schedule-field="${key}" type="${type}" value="${escapeHtml(state.scheduleConfig[key])}" ${type === "number" ? "min='0'" : ""}>
    </label>
  `;
}

function renderUnitCard(unit) {
  const checked = state.selectedUnitIds.includes(unit.id);
  const subjectLabel = unit.subject === "math" ? "Math" : "ELA";
  return `
    <label class="unit-card ${unit.subject}">
      <input type="checkbox" data-unit-id="${unit.id}" ${checked ? "checked" : ""} aria-label="Select ${escapeHtml(unit.title)}">
      <div>
        <div class="unit-title">
          <span class="tag ${unit.subject}">${subjectLabel}</span>
          <strong>${escapeHtml(unit.title)}</strong>
        </div>
        <p>${unit.skillIds.length} skills, ${unit.estimatedDays} baseline days, ${unit.estimatedMinutes} estimated minutes.</p>
        <div class="tag-row" style="margin-top: 9px;">
          ${unit.standards.slice(0, 5).map((standard) => `<span class="tag">${escapeHtml(standard)}</span>`).join("")}
          ${unit.standards.length > 5 ? `<span class="tag">+${unit.standards.length - 5}</span>` : ""}
        </div>
      </div>
      <div class="tag-row">
        <span class="tag ${unit.priority === "core" ? "green" : "blue"}">${escapeHtml(unit.priority)}</span>
      </div>
    </label>
  `;
}

function renderScheduleItem(item) {
  const unit = UNITS_BY_ID[item.unitId];
  const subjectClass = item.subject === "math" ? "math" : "ela";
  return `
    <article class="schedule-item">
      <div class="date-box">${formatDate(item.start)}<br>to ${formatDate(item.end)}</div>
      <div>
        <div class="unit-title">
          <span class="tag ${subjectClass}">${item.subject === "math" ? "Math" : "ELA"}</span>
          <strong>${escapeHtml(item.title)}</strong>
        </div>
        <p>${item.days} school days, ${item.adjustedMinutes} minutes with reteach buffer. Checkpoint: ${formatDate(item.checkpoint)}.</p>
      </div>
      <div class="tag-row">
        ${unit.standards.slice(0, 3).map((standard) => `<span class="tag">${escapeHtml(standard)}</span>`).join("")}
      </div>
    </article>
  `;
}

function metricCard(label, value, note, tone = "") {
  const compact = String(value).length > 14 ? " compact" : "";
  return `
    <article class="metric-card">
      <p class="eyebrow">${escapeHtml(label)}</p>
      <div class="metric-value${compact}">${escapeHtml(value)}</div>
      <p>${escapeHtml(note)}</p>
      ${tone ? `<div class="progress-bar" style="margin-top: 12px;"><div class="progress-fill ${tone}" style="width: ${escapeHtml(value)};"></div></div>` : ""}
    </article>
  `;
}

function renderAdminOverview() {
  const stats = classStats();
  const schedule = generateSchedule();
  const nextUnit = schedule[0];
  const unread = unreadNotificationCount();
  const pendingReview = state.reviewQueue.filter((item) => item.status === "pending").length;
  const lowestSkill = selectedSkills()
    .map((skill) => ({
      skill,
      avg: state.students.reduce((sum, student) => sum + (student.mastery[skill.id]?.score || 0), 0) / state.students.length
    }))
    .sort((a, b) => a.avg - b.avg)[0];

  return `
    ${renderHeader(
      "Overview",
      "A teacher/admin command center: what needs attention, what is scheduled, and where to go next.",
      `<button class="primary" type="button" data-action="open-dashboard">Monitor class</button>`
    )}
    <section class="grid four">
      ${metricCard("Class mastery", percent(stats.classAverage), "Across selected Grade 4 skills")}
      ${metricCard("Unread inbox", `${unread}`, "Student help and feedback")}
      ${metricCard("Review queue", `${pendingReview}`, "Evidence awaiting validation")}
      ${metricCard("Selected units", `${state.selectedUnitIds.length}`, "Current class scope")}
    </section>

    <section class="grid two" style="margin-top: 18px;">
      <div class="surface">
        <div class="toolbar">
          <div>
            <h3>Next Best Actions</h3>
            <p class="small-note">A short worklist keeps the adult portal from becoming a wall of data.</p>
          </div>
        </div>
        <div class="admin-action-list">
          ${adminAction("Check inbox", `${unread} unread student notification${unread === 1 ? "" : "s"}`, "notifications", unread ? "red" : "green")}
          ${adminAction("Validate evidence", `${pendingReview} open response${pendingReview === 1 ? "" : "s"} awaiting review`, "dashboard", pendingReview ? "amber" : "green")}
          ${adminAction("Plan reteach", lowestSkill ? `${lowestSkill.skill.title} is the lowest class-average skill at ${percent(lowestSkill.avg)}` : "No selected skills yet", "dashboard", "blue")}
          ${adminAction("Review schedule", nextUnit ? `Next unit starts ${formatDate(nextUnit.start)}: ${nextUnit.title}` : "Select units to build a schedule", "planner", "blue")}
        </div>
      </div>

      <div class="surface">
        <div class="toolbar">
          <div>
            <h3>Class Snapshot</h3>
            <p class="small-note">Enough context to choose the right adult workflow.</p>
          </div>
        </div>
        <div class="skill-list">
          ${state.students.slice(0, 4).map((student) => `
            <article class="skill-row">
              <div>
                <strong>${escapeHtml(student.name)}</strong>
                <p>${escapeHtml(student.goal)}</p>
              </div>
              <div>
                <span class="tag ${averageMastery(student) >= 0.76 ? "green" : averageMastery(student) >= 0.58 ? "amber" : "red"}">${percent(averageMastery(student))}</span>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function adminAction(title, body, view, tone) {
  return `
    <article class="admin-action ${tone}">
      <div>
        <h4>${escapeHtml(title)}</h4>
        <p>${escapeHtml(body)}</p>
      </div>
      <button class="ghost" type="button" data-action="go-admin-view" data-view="${view}">Open</button>
    </article>
  `;
}

function renderStudentLab() {
  const student = selectedStudent();
  return `
    <div class="student-portal">
      ${renderStudentHero(student)}
      ${state.studentNotice ? `<div class="feedback good student-notice">${escapeHtml(state.studentNotice)}</div>` : ""}
      <section class="mission-layout">
        <div>
          ${renderStudentMode(student)}
        </div>
        <aside class="student-side-panel">
          ${renderBadgeShelf(student)}
          <div class="surface game-card">
            <h3>Skill Powers</h3>
            ${renderStudentSignalPanel(student)}
          </div>
        </aside>
      </section>
    </div>
  `;
}

function renderStudentHero(student) {
  const stats = studentGameStats(student);
  return `
    <section class="student-hero game-hero">
      <div class="avatar game-avatar">${escapeHtml(student.initials)}</div>
      <div>
        <p class="eyebrow">Your learning quest</p>
        <h2>Ready, ${escapeHtml(student.name.split(" ")[0])}?</h2>
        <p class="small-note">${escapeHtml(student.profile)}</p>
        <div class="level-track">
          <div class="level-fill" style="width: ${stats.levelProgress}%;"></div>
        </div>
        <p class="small-note">Level ${stats.level} · ${stats.xp} XP · ${stats.nextLevelXp} XP to next level</p>
      </div>
      <div class="game-stat-stack">
        <div><strong>${stats.streak}</strong><span>day streak</span></div>
        <div><strong>${stats.badges.length}</strong><span>badges</span></div>
        <div><strong>${student.activeMinutes}</strong><span>minutes</span></div>
      </div>
    </section>
  `;
}

function studentGameStats(student) {
  const completed = Object.entries(state.completedLessons || {}).filter(([key]) => key.startsWith(`${student.id}:`));
  const secureSkills = selectedSkills().filter((skill) => ["secure", "mastered"].includes(student.mastery[skill.id]?.status)).length;
  const xp = student.activeMinutes * 2 + student.attempts.length * 15 + completed.reduce((sum, [, item]) => sum + (item.xp || 60), 0) + secureSkills * 20;
  const level = Math.max(1, Math.floor(xp / 250) + 1);
  const progress = xp % 250;
  const badges = studentBadges(student, completed, secureSkills);
  return {
    xp,
    level,
    levelProgress: Math.round((progress / 250) * 100),
    nextLevelXp: 250 - progress,
    streak: Math.max(2, Math.min(7, 2 + Math.floor(student.activeMinutes / 25))),
    badges
  };
}

function studentBadges(student, completed, secureSkills) {
  const badges = [];
  if (completed.some(([key]) => key.includes("math-g4-nf-compare"))) badges.push({ title: "Fraction Scout", detail: "Finished a fraction quest" });
  if (student.attempts.length >= 1) badges.push({ title: "Practice Pro", detail: "Tried adaptive practice" });
  if (secureSkills >= 5) badges.push({ title: "Skill Builder", detail: "Built 5 secure skills" });
  if ((state.reviewQueue || []).some((item) => item.studentId === student.id)) badges.push({ title: "Evidence Finder", detail: "Submitted thinking" });
  if (!badges.length) badges.push({ title: "Quest Starter", detail: "Begin today's first quest" });
  return badges.slice(0, 4);
}

function renderBadgeShelf(student) {
  const stats = studentGameStats(student);
  return `
    <section class="surface badge-shelf">
      <div class="toolbar">
        <div>
          <h3>Badge Shelf</h3>
          <p class="small-note">Earn badges by learning, practicing, and explaining your thinking.</p>
        </div>
      </div>
      <div class="badge-grid">
        ${stats.badges.map((badge) => `
          <article class="badge-card">
            <div class="badge-medal">${escapeHtml(badge.title.slice(0, 1))}</div>
            <strong>${escapeHtml(badge.title)}</strong>
            <p>${escapeHtml(badge.detail)}</p>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function studentModeButton(mode, label) {
  return `<button class="secondary-tab ${state.studentMode === mode ? "is-active" : ""}" type="button" data-student-mode="${mode}">${escapeHtml(label)}</button>`;
}

function renderStudentMode(student) {
  if (state.studentMode === "lesson") return renderLesson(student);
  if (state.studentMode === "diagnostic") return renderDiagnostic(student);
  if (state.studentMode === "practice") return renderPractice(student);
  if (state.studentMode === "progress") return renderStudentProgress(student);
  return renderMission(student);
}

function renderMission(student) {
  const mathSkill = recommendedSkill(student, "math");
  const elaSkill = recommendedSkill(student, "ela");
  return `
    <section class="learn-hero-panel">
      <div>
        <p class="eyebrow">Today's main quest</p>
        <h2>${escapeHtml(nextLessonTitle(student))}</h2>
        <p>${escapeHtml(nextLessonDescription(student))}</p>
        <div class="button-row" style="margin-top: 16px;">
          <button class="primary" type="button" data-action="learn-skill" data-skill-id="${escapeHtml(nextLessonSkillId(student))}">Start lesson</button>
          <button class="ghost" type="button" data-action="open-help-request">Ask teacher</button>
        </div>
      </div>
      <div class="learn-score">
        <span>${student.activeMinutes}</span>
        <p>focused minutes this week</p>
      </div>
    </section>
    ${state.helpRequestOpen ? renderHelpRequestPanel(student) : ""}
    <section class="quest-map">
      ${renderQuestStep("1", "Learn", "Unlock the idea", isLessonComplete(student.id, mathSkill.id) || isLessonComplete(student.id, elaSkill.id) ? "done" : "active")}
      ${renderQuestStep("2", "Practice", "Win 3 checks", student.attempts.length ? "done" : "active")}
      ${renderQuestStep("3", "Explain", "Show your thinking", state.reviewQueue.some((item) => item.studentId === student.id) ? "done" : "active")}
      ${renderQuestStep("4", "Level up", "Ready to advance", averageMastery(student) >= 0.76 ? "done" : "locked")}
    </section>
    <div class="grid two">
      ${renderDailyChallenge(student)}
      ${renderPowerUps()}
    </div>
    <div class="grid two">
      ${renderMissionCard(student, mathSkill, "math")}
      ${renderMissionCard(student, elaSkill, "ela")}
    </div>
    <div class="surface game-card" style="margin-top: 18px;">
      <div class="toolbar">
        <div>
          <h3>Quest Library</h3>
          <p class="small-note">Pick a quest when you want a new lesson, challenge, or practice path.</p>
        </div>
      </div>
      <div class="content-grid">
        ${Object.entries(LESSONS).map(([skillId, lesson]) => renderContentTile(skillId, lesson, student)).join("")}
      </div>
    </div>
  `;
}

function renderHelpRequestPanel(student) {
  const skill = SKILLS_BY_ID[nextLessonSkillId(student)];
  return `
    <section class="surface help-request-panel">
      <div class="toolbar">
        <div>
          <h3>Ask Your Teacher</h3>
          <p class="small-note">Write one quick note. Your teacher will see it in their inbox.</p>
        </div>
        <span class="tag ${skill.subject}">${skill.subject === "math" ? "Math" : "ELA"}</span>
      </div>
      <label class="field">
        <span>What do you need help with?</span>
        <textarea data-help-request placeholder="Example: I do not understand why 1/6 is smaller than 1/4.">${escapeHtml(state.helpRequestText)}</textarea>
      </label>
      <div class="button-row" style="margin-top: 12px;">
        <button class="primary" type="button" data-action="send-help-request" data-skill-id="${skill.id}">Send to teacher</button>
        <button class="ghost" type="button" data-action="close-help-request">Cancel</button>
      </div>
    </section>
  `;
}

function dailyChallenge() {
  return {
    skillId: "math-g4-nf-compare-unlike-fractions",
    title: "Daily Challenge",
    prompt: "Which is larger: 2/3 or 3/6?",
    choices: ["2/3", "3/6", "They are equal", "Need more information"],
    answer: 0,
    reward: "40 XP boost",
    feedback: "Nice. 2/3 is the same as 4/6, and 4/6 is greater than 3/6."
  };
}

function renderDailyChallenge(student) {
  const challenge = dailyChallenge();
  const selected = state.dailyChallengeAnswer;
  const answered = Boolean(state.dailyChallengeFeedback);
  return `
    <section class="surface game-card daily-challenge">
      <div class="toolbar">
        <div>
          <p class="eyebrow">Bonus quest</p>
          <h3>${escapeHtml(challenge.title)}</h3>
          <p class="small-note">Beat one quick puzzle before your lesson.</p>
        </div>
        <span class="tag green">${escapeHtml(challenge.reward)}</span>
      </div>
      <div class="question-box game-question">
        <h3>${escapeHtml(challenge.prompt)}</h3>
        <div class="choice-grid">
          ${challenge.choices.map((choice, index) => {
            const classes = ["choice"];
            if (selected === index) classes.push("is-selected");
            if (answered && index === challenge.answer) classes.push("is-correct");
            if (answered && selected === index && index !== challenge.answer) classes.push("is-wrong");
            return `<button class="${classes.join(" ")}" type="button" data-action="select-daily-answer" data-answer-index="${index}">${escapeHtml(choice)}</button>`;
          }).join("")}
        </div>
        ${state.dailyChallengeFeedback ? `<div class="feedback ${state.dailyChallengeFeedback.correct ? "good" : "warn"}">${escapeHtml(state.dailyChallengeFeedback.message)}</div>` : ""}
        <div class="button-row" style="margin-top: 12px;">
          <button class="primary" type="button" data-action="submit-daily-challenge">Check challenge</button>
        </div>
      </div>
    </section>
  `;
}

function renderPowerUps() {
  const powerUps = [
    {
      id: "fraction_lens",
      title: "Fraction Lens",
      body: "Highlights same-whole and benchmark clues."
    },
    {
      id: "evidence_finder",
      title: "Evidence Finder",
      body: "Reminds you to prove answers with text details."
    },
    {
      id: "focus_boost",
      title: "Focus Boost",
      body: "Breaks work into short rounds."
    }
  ];
  return `
    <section class="surface game-card powerup-panel">
      <div class="toolbar">
        <div>
          <p class="eyebrow">Choose a power-up</p>
          <h3>Learning Tools</h3>
          <p class="small-note">Equip one helper before you start.</p>
        </div>
      </div>
      <div class="powerup-grid">
        ${powerUps.map((item) => `
          <article class="powerup-card ${state.equippedPowerUp === item.id ? "equipped" : ""}">
            <strong>${escapeHtml(item.title)}</strong>
            <p>${escapeHtml(item.body)}</p>
            <button class="ghost" type="button" data-action="equip-powerup" data-powerup-id="${item.id}">${state.equippedPowerUp === item.id ? "Equipped" : "Equip"}</button>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderQuestStep(number, title, subtitle, status) {
  return `
    <article class="quest-step ${status}">
      <div class="quest-number">${escapeHtml(number)}</div>
      <div>
        <strong>${escapeHtml(title)}</strong>
        <p>${escapeHtml(subtitle)}</p>
      </div>
    </article>
  `;
}

function renderContentTile(skillId, lesson, student) {
  const skill = SKILLS_BY_ID[skillId];
  const mastery = student.mastery[skillId]?.score || 0;
  const completed = isLessonComplete(student.id, skillId);
  return `
    <article class="content-tile">
      <div class="unit-title">
        <span class="tag ${skill.subject}">${skill.subject === "math" ? "Math" : "ELA"}</span>
        <span class="tag ${completed ? "green" : "blue"}">${completed ? "learned" : `${lesson.minutes} min`}</span>
      </div>
      <h4>${escapeHtml(lesson.title)}</h4>
      <p>${escapeHtml(lesson.objective)}</p>
      <div class="progress-bar" style="margin-top: 10px;">
        <div class="progress-fill ${mastery >= 0.76 ? "green" : mastery >= 0.58 ? "amber" : "red"}" style="width: ${Math.round(mastery * 100)}%;"></div>
      </div>
      <div class="button-row" style="margin-top: 12px;">
        <button class="primary" type="button" data-action="learn-skill" data-skill-id="${skillId}">Learn</button>
        <button class="ghost" type="button" data-action="practice-skill" data-skill-id="${skillId}">Practice</button>
      </div>
    </article>
  `;
}

function nextLessonSkillId(student) {
  const recommended = [recommendedSkill(student, "math"), recommendedSkill(student, "ela")]
    .filter(Boolean)
    .find((skill) => LESSONS[skill.id]);
  return recommended?.id || Object.keys(LESSONS)[0];
}

function nextLessonTitle(student) {
  return LESSONS[nextLessonSkillId(student)]?.title || "Start today's lesson";
}

function nextLessonDescription(student) {
  const lesson = LESSONS[nextLessonSkillId(student)];
  return lesson ? lesson.objective : "Choose a short lesson, try the check, and send feedback if something feels confusing.";
}

function lessonCompletionKey(studentId, skillId) {
  return `${studentId}:${skillId}`;
}

function isLessonComplete(studentId, skillId) {
  return Boolean(state.completedLessons?.[lessonCompletionKey(studentId, skillId)]);
}

function renderMissionCard(student, skill, subject) {
  const mastery = student.mastery[skill.id];
  const unit = UNITS_BY_ID[skill.unitId];
  const tone = mastery.score >= 0.76 ? "green" : mastery.score >= 0.58 ? "amber" : "red";
  return `
    <article class="surface">
      <div class="unit-title">
        <span class="tag ${subject}">${subject === "math" ? "Math mission" : "ELA mission"}</span>
        <span class="status-pill status-${mastery.status}">${kidStatusLabel(mastery.status)}</span>
      </div>
      <h3>${escapeHtml(skill.title)}</h3>
      <p class="small-note">${escapeHtml(skill.canDo)}</p>
      <div class="progress-bar" style="margin: 14px 0 8px;">
        <div class="progress-fill ${tone}" style="width: ${Math.round(mastery.score * 100)}%;"></div>
      </div>
      <p class="small-note">${percent(mastery.score)} quest power in ${escapeHtml(unit.title)}.</p>
      <div class="button-row" style="margin-top: 14px;">
        <button class="primary" type="button" data-action="learn-skill" data-skill-id="${skill.id}">Learn</button>
        <button class="primary" type="button" data-action="practice-skill" data-skill-id="${skill.id}">Practice</button>
        <button class="ghost" type="button" data-action="show-progress">Map</button>
      </div>
    </article>
  `;
}

function renderStudentSignalPanel(student) {
  const skill = SKILLS_BY_ID[state.activePracticeSkillId] || recommendedSkill(student, "math");
  const mastery = student.mastery[skill.id];
  const ready = readiness(student, skill.id);
  return `
    <div class="skill-list">
      <div class="skill-row">
        <div>
          <h4>${escapeHtml(skill.title)}</h4>
          <p>${escapeHtml(skill.canDo)}</p>
        </div>
        <span class="status-pill status-${mastery.status}">${kidStatusLabel(mastery.status)}</span>
      </div>
      ${signalRow("Quest power", mastery.score)}
      ${signalRow("Confidence meter", mastery.confidence)}
      ${signalRow("Strong answers", mastery.evidenceAccuracy)}
      ${signalRow("No-hint wins", mastery.independentAccuracy)}
      ${signalRow("Memory power", mastery.retention)}
      ${signalRow("Try-it-anywhere power", mastery.transfer)}
      <div class="alert-row">
        <div>
          <h4>Ready to level up</h4>
          <p>${ready.ready ? "Yes. You can explain it and try it in new problems." : "Keep building a few more powers."}</p>
        </div>
        <span class="tag ${ready.ready ? "green" : "amber"}">${ready.reasons.length}/5 powers</span>
      </div>
    </div>
  `;
}

function signalRow(label, value) {
  const tone = value >= 0.76 ? "green" : value >= 0.58 ? "amber" : "red";
  return `
    <div>
      <div class="toolbar" style="margin-bottom: 6px;">
        <p class="small-note" style="font-weight: 800;">${escapeHtml(label)}</p>
        <strong>${percent(value)}</strong>
      </div>
      <div class="progress-bar"><div class="progress-fill ${tone}" style="width: ${Math.round(value * 100)}%;"></div></div>
    </div>
  `;
}

function renderLesson(student) {
  const skillId = LESSONS[state.activePracticeSkillId] ? state.activePracticeSkillId : nextLessonSkillId(student);
  const lesson = LESSONS[skillId];
  const skill = SKILLS_BY_ID[skillId];
  const mastery = student.mastery[skillId];
  const selected = state.lessonAnswer;
  const answered = state.lessonFeedback?.skillId === skillId;

  return `
    <section class="lesson-player">
      <div class="lesson-main">
        <div class="lesson-stage">
          <div class="toolbar">
            <div>
              <p class="eyebrow">${escapeHtml(UNITS_BY_ID[skill.unitId].title)}</p>
              <h2>${escapeHtml(lesson.title)}</h2>
              <p>${escapeHtml(lesson.setting)}</p>
            </div>
            <span class="tag green">${lesson.xp} XP</span>
          </div>

          ${lesson.passage ? `<blockquote class="passage">${escapeHtml(lesson.passage)}</blockquote>` : ""}

          <div class="lesson-objective">
            <strong>Goal</strong>
            <p>${escapeHtml(lesson.objective)}</p>
          </div>

          <div class="lesson-steps">
            ${lesson.steps.map((step, index) => renderLessonStep(step, index)).join("")}
          </div>

          <div class="quick-check">
            <div class="toolbar">
              <div>
                <p class="eyebrow">Quick check</p>
                <h3>${escapeHtml(lesson.quickCheck.prompt)}</h3>
              </div>
              <span class="tag ${answered ? "green" : "blue"}">${answered ? "checked" : "try it"}</span>
            </div>
            <div class="choice-grid">
              ${lesson.quickCheck.choices
                .map((choice, index) => {
                  const classes = ["choice"];
                  if (selected === index) classes.push("is-selected");
                  if (answered && index === lesson.quickCheck.answer) classes.push("is-correct");
                  if (answered && selected === index && index !== lesson.quickCheck.answer) classes.push("is-wrong");
                  return `<button class="${classes.join(" ")}" type="button" data-action="select-lesson-answer" data-answer-index="${index}">${escapeHtml(choice)}</button>`;
                })
                .join("")}
            </div>
            ${answered ? `<div class="feedback ${state.lessonFeedback.correct ? "good" : "warn"}">${escapeHtml(state.lessonFeedback.message)}</div>` : ""}
            <div class="button-row" style="margin-top: 14px;">
              <button class="primary" type="button" data-action="submit-lesson-check" data-skill-id="${skillId}">Check and earn XP</button>
              <button class="secondary" type="button" data-action="practice-skill" data-skill-id="${skillId}">Practice this skill</button>
            </div>
          </div>
        </div>
      </div>

      <aside class="lesson-side">
        <div class="surface">
          <h3>Learning Tools</h3>
          <div class="vocab-list">
            ${lesson.vocabulary.map((word) => `<span class="tag">${escapeHtml(word)}</span>`).join("")}
          </div>
          ${renderLessonVisual(lesson)}
          <div style="margin-top: 16px;">
            <p class="eyebrow">Quest power</p>
            <div class="progress-bar"><div class="progress-fill ${mastery.score >= 0.76 ? "green" : mastery.score >= 0.58 ? "amber" : "red"}" style="width: ${Math.round(mastery.score * 100)}%;"></div></div>
            <p class="small-note" style="margin-top: 8px;">${percent(mastery.score)} quest power. Quick checks help the lesson choose your next step.</p>
          </div>
        </div>
        ${renderAICoachCard(skillId)}
        ${renderLearningFeedbackCard(skillId)}
      </aside>
    </section>
  `;
}

function renderAICoachCard(skillId) {
  const skill = SKILLS_BY_ID[skillId];
  const provider = currentAiProvider();
  const result = state.studentAiOutputBySkill?.[skillId];
  return `
    <div class="surface">
      <div class="toolbar">
        <div>
          <h3>AI Coach</h3>
          <p class="small-note">Short help tied to this skill only.</p>
        </div>
        <span class="tag blue">${escapeHtml(provider.label)}</span>
      </div>
      <button class="primary" type="button" data-action="student-ai-coach" data-skill-id="${skillId}">Get a short hint</button>
      ${
        result
          ? `<div class="ai-result compact" style="margin-top: 12px;">
              <p><strong>${escapeHtml(skill.title)}</strong></p>
              <p>${escapeHtml(result.feedback)}</p>
              <p class="small-note">The coach used this quest and your latest practice to choose a short hint.</p>
            </div>`
          : `<p class="small-note" style="margin-top: 10px;">The coach will not solve the problem for you; it gives the next useful nudge.</p>`
      }
    </div>
  `;
}

function renderLessonStep(step, index) {
  return `
    <article class="lesson-step">
      <div class="step-number">${index + 1}</div>
      <div>
        <span class="tag blue">${escapeHtml(step.label)}</span>
        <h3>${escapeHtml(step.title)}</h3>
        <p>${escapeHtml(step.body)}</p>
        ${step.equation ? `<div class="equation">${escapeHtml(step.equation)}</div>` : ""}
        ${step.misconception ? `<div class="feedback warn">${escapeHtml(step.misconception)}</div>` : ""}
        ${step.visual ? renderMiniVisual(step.visual) : ""}
      </div>
    </article>
  `;
}

function renderMiniVisual(type) {
  if (type === "fractions") {
    return `
      <div class="fraction-bars" aria-label="Fraction model">
        <div class="fraction-row"><span>3/4</span><div class="bar quarters"><i></i><i></i><i></i><i class="empty"></i></div></div>
        <div class="fraction-row"><span>5/8</span><div class="bar eighths"><i></i><i></i><i></i><i></i><i></i><i class="empty"></i><i class="empty"></i><i class="empty"></i></div></div>
      </div>
    `;
  }
  if (type === "place") {
    return `
      <div class="place-grid" aria-label="Place value model">
        <span>Hundred thousands</span><span>Ten thousands</span><span>Thousands</span>
        <strong>10x</strong><strong>10x</strong><strong>1x</strong>
      </div>
    `;
  }
  return "";
}

function renderLessonVisual(lesson) {
  const visualStep = lesson.steps.find((step) => step.visual);
  if (!visualStep) {
    return `<div class="coach-note">Coach note: try the quick check first. If it feels hard, send feedback before practice.</div>`;
  }
  return `<div style="margin-top: 16px;">${renderMiniVisual(visualStep.visual)}</div>`;
}

function renderLearningFeedbackCard(skillId) {
  return `
    <div class="surface">
      <h3>Tell Your Teacher</h3>
      <p class="small-note">Send a private note so your teacher knows how the lesson feels.</p>
      <label class="field" style="margin-top: 12px;">
        <span>What should your teacher know?</span>
        <select data-learning-feedback-type>
          <option value="confused" ${state.learningFeedbackType === "confused" ? "selected" : ""}>I am confused</option>
          <option value="need_example" ${state.learningFeedbackType === "need_example" ? "selected" : ""}>I need another example</option>
          <option value="too_easy" ${state.learningFeedbackType === "too_easy" ? "selected" : ""}>This feels too easy</option>
          <option value="proud" ${state.learningFeedbackType === "proud" ? "selected" : ""}>I want to show my work</option>
        </select>
      </label>
      <textarea data-learning-feedback placeholder="Write a note to your teacher...">${escapeHtml(state.learningFeedbackText)}</textarea>
      <div class="button-row" style="margin-top: 12px;">
        <button class="primary" type="button" data-action="send-learning-feedback" data-skill-id="${skillId}">Send feedback</button>
      </div>
    </div>
  `;
}

function renderDiagnostic(student) {
  if (student.diagnosticComplete) {
    return `
      <div class="surface">
        <div class="toolbar">
          <div>
            <h3>Level Check Complete</h3>
            <p class="small-note">Your starting path is ready. Your teacher can still adjust it if something looks off.</p>
          </div>
          <button class="ghost" type="button" data-action="retake-diagnostic">Try again</button>
        </div>
        <div class="grid three">
          ${metricCard("Ready skills", percent(averageMastery(student, ["math-g4-nbt-place-value-times-ten", "ela-g4-rl-text-evidence"])), "Skills that help you start strong")}
          ${metricCard("Path confidence", percent(averageMastery(student, FOCUS_SKILLS.slice(0, 6)) - 0.04), "How sure the path is right now")}
          ${metricCard("Start here", recommendedSkill(student).title, "Your next useful quest")}
        </div>
      </div>
    `;
  }

  const item = DIAGNOSTIC_ITEMS[state.diagnosticCursor] || DIAGNOSTIC_ITEMS[0];
  const selected = state.studentAnswer;
  return `
    <div class="surface">
      <div class="toolbar">
        <div>
          <h3>Level Check</h3>
          <p class="small-note">Question ${state.diagnosticCursor + 1} of ${DIAGNOSTIC_ITEMS.length}. Try your best so the app can pick a good starting quest.</p>
        </div>
        <span class="tag ${item.subject}">${item.subject === "math" ? "Math" : "ELA"}</span>
      </div>
      <div class="question-box">
        <p class="eyebrow">${escapeHtml(SKILLS_BY_ID[item.skillId].title)}</p>
        <h3>${escapeHtml(item.prompt)}</h3>
        <div class="choice-grid">
          ${item.choices
            .map((choice, index) => `<button class="choice ${selected === index ? "is-selected" : ""}" type="button" data-action="select-diagnostic-answer" data-answer-index="${index}">${escapeHtml(choice)}</button>`)
            .join("")}
        </div>
        <div class="button-row" style="margin-top: 16px;">
          <button class="primary" type="button" data-action="submit-diagnostic-answer">Submit answer</button>
          <button class="ghost" type="button" data-action="skip-diagnostic">Skip</button>
        </div>
      </div>
    </div>
  `;
}

function renderPractice(student) {
  const skill = SKILLS_BY_ID[state.activePracticeSkillId] || recommendedSkill(student);
  const item = practiceItemForSkill(skill.id);
  const selected = state.practiceAnswer;
  const isAnswered = state.lastFeedback && state.lastFeedback.itemId === item.id;
  return `
    <div class="grid two">
      <div class="surface">
        <div class="toolbar">
          <div>
            <p class="eyebrow">${escapeHtml(UNITS_BY_ID[skill.unitId].title)}</p>
            <h3>${escapeHtml(skill.title)}</h3>
            <p class="small-note">${escapeHtml(skill.canDo)}</p>
          </div>
          <span class="tag ${skill.subject}">${skill.subject === "math" ? "Math" : "ELA"}</span>
        </div>
        <div class="question-box">
          <h3>${escapeHtml(item.prompt)}</h3>
          <div class="choice-grid">
            ${item.choices
              .map((choice, index) => {
                const classes = ["choice"];
                if (selected === index) classes.push("is-selected");
                if (isAnswered && index === item.answer) classes.push("is-correct");
                if (isAnswered && selected === index && index !== item.answer) classes.push("is-wrong");
                return `<button class="${classes.join(" ")}" type="button" data-action="select-practice-answer" data-answer-index="${index}">${escapeHtml(choice)}</button>`;
              })
              .join("")}
          </div>
          ${state.hintVisible ? `<div class="feedback warn"><strong>Hint:</strong> ${escapeHtml(item.hint)}</div>` : ""}
          ${state.studentAiOutputBySkill?.[skill.id] ? `<div class="feedback good"><strong>AI Coach:</strong> ${escapeHtml(state.studentAiOutputBySkill[skill.id].feedback)}</div>` : ""}
          ${state.lastFeedback && state.lastFeedback.itemId === item.id ? `<div class="feedback ${state.lastFeedback.correct ? "good" : "warn"}">${escapeHtml(state.lastFeedback.message)}</div>` : ""}
          <div class="button-row" style="margin-top: 16px;">
            <button class="ghost" type="button" data-action="show-hint">Hint</button>
            <button class="secondary" type="button" data-action="student-ai-coach" data-skill-id="${skill.id}">AI Coach</button>
            <button class="primary" type="button" data-action="submit-practice-answer">Check</button>
            <button class="secondary" type="button" data-action="next-practice">Next</button>
          </div>
        </div>
      </div>
      <div class="surface">
        <div class="toolbar">
          <div>
            <h3>Show Your Thinking</h3>
            <p class="small-note">Write one short response so your teacher can see how you solved it.</p>
          </div>
        </div>
        ${renderOpenResponse()}
      </div>
    </div>
  `;
}

function renderOpenResponse() {
  const prompt = OPEN_RESPONSE_PROMPTS[state.openResponsePromptIndex % OPEN_RESPONSE_PROMPTS.length];
  return `
    <div class="question-box">
      <p class="eyebrow">${escapeHtml(SKILLS_BY_ID[prompt.skillId].title)}</p>
      <h3>${escapeHtml(prompt.prompt)}</h3>
      <textarea data-open-response placeholder="Type a short answer and explain your thinking...">${escapeHtml(state.openResponseText)}</textarea>
      <div class="button-row" style="margin-top: 12px;">
        <button class="primary" type="button" data-action="submit-open-response" data-skill-id="${prompt.skillId}">Send to teacher</button>
        <button class="ghost" type="button" data-action="use-sample-response">Use sample</button>
        <button class="secondary" type="button" data-action="switch-open-prompt">Switch prompt</button>
      </div>
    </div>
  `;
}

function renderStudentProgress(student) {
  const skills = selectedSkills();
  return `
    <div class="surface">
      <div class="toolbar">
        <div>
          <h3>My Quest Map</h3>
          <p class="small-note">See which quests are ready, which need practice, and where to go next.</p>
        </div>
      </div>
      <div class="skill-list">
        ${skills.map((skill) => renderProgressSkill(student, skill)).join("")}
      </div>
    </div>
  `;
}

function renderProgressSkill(student, skill) {
  const mastery = student.mastery[skill.id];
  const tone = mastery.score >= 0.76 ? "green" : mastery.score >= 0.58 ? "amber" : "red";
  return `
    <article class="skill-row">
      <div>
        <div class="unit-title">
          <span class="tag ${skill.subject}">${skill.subject === "math" ? "Math" : "ELA"}</span>
          <strong>${escapeHtml(skill.title)}</strong>
        </div>
        <p>${escapeHtml(skill.canDo)}</p>
        <div class="progress-bar" style="margin-top: 10px;"><div class="progress-fill ${tone}" style="width: ${Math.round(mastery.score * 100)}%;"></div></div>
      </div>
      <div>
        <span class="status-pill status-${mastery.status}">${kidStatusLabel(mastery.status)}</span>
        <p class="small-note" style="margin-top: 8px;">${percent(mastery.score)} power</p>
      </div>
    </article>
  `;
}

function renderDashboard() {
  const stats = classStats();
  return `
    ${renderHeader(
      "Teacher Dashboard",
      "A compact operating view for mastery, misconceptions, teacher validation, and student pacing decisions.",
      `<button class="primary" type="button" data-action="open-reports">Open report</button>`
    )}
    <section class="grid four">
      ${metricCard("Class mastery", percent(stats.classAverage), "Average across selected unit skills")}
      ${metricCard("Intervention signals", `${stats.interventions}`, "Skills below secure or in active learning")}
      ${metricCard("Ready signals", `${stats.ready}`, "Skill-level readiness-to-advance flags")}
      ${metricCard("Validation queue", `${stats.validation}`, "Open responses awaiting teacher review")}
    </section>

    <section class="surface" style="margin-top: 18px;">
      ${renderTeacherAiPanel()}
    </section>

    <section class="grid two" style="margin-top: 18px;">
      <div class="surface">
        <div class="toolbar">
          <div>
            <h3>Skill Heatmap</h3>
            <p class="small-note">The teacher sees a class pattern first, then drills into the evidence for any student.</p>
          </div>
        </div>
        ${renderHeatmap()}
      </div>
      <div class="surface">
        <div class="toolbar">
          <div>
            <h3>Alerts</h3>
            <p class="small-note">Alerts are recommendations for attention, not automatic grades.</p>
          </div>
        </div>
        <div class="skill-list">
          ${renderAlerts()}
        </div>
      </div>
    </section>

    <section class="surface" style="margin-top: 18px;">
      <div class="toolbar">
        <div>
          <h3>Teacher Validation Queue</h3>
          <p class="small-note">Open writing, explanations, recordings, and project artifacts stay reviewable by a human.</p>
        </div>
      </div>
      <div class="skill-list">
        ${renderReviewQueue()}
      </div>
    </section>
  `;
}

function renderTeacherAiPanel() {
  const provider = currentAiProvider();
  return `
    <div class="toolbar">
      <div>
        <h3>AI Teaching Assistant</h3>
        <p class="small-note">Uses compact class metrics, misconception counts, and review queue items. No full student history is sent.</p>
      </div>
      <div class="button-row">
        <span class="tag blue">${escapeHtml(provider.label)} · ${escapeHtml(provider.model || "model not set")}</span>
        <button class="primary" type="button" data-action="generate-teacher-ai">Generate action plan</button>
      </div>
    </div>
    ${
      state.teacherAiOutput
        ? `<div class="ai-result">
            <div class="tag-row">
              <span class="tag green">structured JSON</span>
              <span class="tag amber">${escapeHtml(state.aiSettings.demoMode ? "demo mode" : "live-ready")}</span>
            </div>
            <h4>${escapeHtml(state.teacherAiOutput.title)}</h4>
            <ul class="clean-list">
              ${state.teacherAiOutput.actions.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
            <p class="small-note">Token budget: ${state.teacherAiOutput.tokenBudget} output tokens. Payload: ${state.teacherAiOutput.payloadSummary}.</p>
          </div>`
        : `<div class="empty-state">Generate an AI action plan for small groups, reteach priorities, and teacher validation focus.</div>`
    }
  `;
}

function renderHeatmap() {
  const focus = FOCUS_SKILLS.filter((id) => SKILLS_BY_ID[id]);
  return `
    <div class="heatmap-wrap">
      <table>
        <thead>
          <tr>
            <th>Student</th>
            ${focus.map((id) => `<th>${escapeHtml(shortSkillName(SKILLS_BY_ID[id].title))}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${state.students
            .map(
              (student) => `
                <tr>
                  <td>
                    <button class="ghost" type="button" data-action="select-student-dashboard" data-student-id="${student.id}">${escapeHtml(student.name)}</button>
                  </td>
                  ${focus.map((id) => renderHeatCell(student.mastery[id]?.score || 0)).join("")}
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function shortSkillName(title) {
  return title
    .replace("multi-digit ", "")
    .replace("with different numerators and denominators", "")
    .replace("in literary responses", "")
    .replace("and supporting details", "")
    .replace("Support an opinion with", "Opinion")
    .slice(0, 24);
}

function renderHeatCell(score) {
  const cls = score >= 0.76 ? "heat-high" : score >= 0.58 ? "heat-mid" : "heat-low";
  return `<td><div class="heat-cell ${cls}">${percent(score)}</div></td>`;
}

function renderAlerts() {
  const alerts = [];
  state.students.forEach((student) => {
    Object.entries(student.misconceptions || {}).forEach(([key, count]) => {
      if (count >= 2) {
        alerts.push({
          student,
          key,
          count,
          message: alertMessage(key)
        });
      }
    });
  });

  selectedSkills().forEach((skill) => {
    const struggling = state.students.filter((student) => {
      const mastery = student.mastery[skill.id];
      return mastery && mastery.score < 0.58;
    });
    if (struggling.length >= 2) {
      alerts.push({
        student: null,
        key: skill.id,
        count: struggling.length,
        message: `${struggling.length} students need reteach for ${skill.title}.`
      });
    }
  });

  if (!alerts.length) {
    return `<div class="empty-state">No urgent alerts. The class is ready for normal progress monitoring.</div>`;
  }

  return alerts
    .slice(0, 8)
    .map(
      (alert) => `
        <article class="alert-row">
          <div>
            <h4>${escapeHtml(alert.student ? alert.student.name : "Class pattern")}</h4>
            <p>${escapeHtml(alert.message)}</p>
          </div>
          <span class="tag ${alert.count >= 4 ? "red" : "amber"}">${alert.count} signals</span>
        </article>
      `
    )
    .join("");
}

function alertMessage(key) {
  const messages = {
    larger_denominator_larger_fraction: "Persistent fraction misconception: larger denominator treated as larger fraction.",
    operation_order_context: "Multi-step word problems: student is choosing operations before modeling the situation.",
    irrelevant_evidence: "Opinion writing: evidence is present but not always connected to the claim.",
    weak_retention: "Retention drop detected after delayed review. Schedule retrieval practice.",
    hint_dependency: "High hint dependence. Add a hint delay and independence target.",
    place_value_ratio: "Place value relationship needs a ratio model.",
    weak_evidence: "Text evidence is interesting but not specific enough to support the answer."
  };
  return messages[key] || `Repeated misconception signal: ${key.replaceAll("_", " ")}.`;
}

function renderReviewQueue() {
  const queue = state.reviewQueue;
  if (!queue.length) return `<div class="empty-state">No review items yet. Student open responses will appear here.</div>`;
  return queue
    .map((item) => {
      const student = state.students.find((entry) => entry.id === item.studentId);
      const skill = SKILLS_BY_ID[item.skillId];
      return `
        <article class="queue-row">
          <div>
            <div class="unit-title">
              <span class="tag ${skill.subject}">${skill.subject === "math" ? "Math" : "ELA"}</span>
              <strong>${escapeHtml(student?.name || "Student")} - ${escapeHtml(skill.title)}</strong>
              <span class="status-pill status-${item.status === "pending" ? "practicing" : "secure"}">${escapeHtml(item.status)}</span>
            </div>
            <p>${escapeHtml(item.evidence)}</p>
            <p class="small-note" style="margin-top: 8px;">Recommendation: ${escapeHtml(item.recommendation)}</p>
            ${item.aiScore ? `<p class="small-note" style="margin-top: 8px;"><strong>AI pre-score:</strong> ${escapeHtml(item.aiScore)}</p>` : ""}
          </div>
          <div class="button-row">
            <button class="secondary" type="button" data-action="ai-score-review" data-review-id="${item.id}">AI pre-score</button>
            <button class="primary" type="button" data-action="review-accept" data-review-id="${item.id}">Accept</button>
            <button class="ghost" type="button" data-action="review-revision" data-review-id="${item.id}">Revise</button>
            <button class="secondary" type="button" data-action="review-override" data-review-id="${item.id}">Override</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderNotifications() {
  const notifications = (state.notifications || []).slice().sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
  const unread = unreadNotificationCount();
  return `
    ${renderHeader(
      "Notification Center",
      "Student help requests and learning feedback arrive here for teacher triage before they become formal evaluation evidence.",
      `<button class="primary" type="button" data-action="open-dashboard">Open dashboard</button>`
    )}
    <section class="grid four">
      ${metricCard("Unread", `${unread}`, "Needs teacher attention")}
      ${metricCard("Total", `${notifications.length}`, "All current notifications")}
      ${metricCard("Help requests", `${notifications.filter((item) => item.type === "help_request").length}`, "Student-initiated asks")}
      ${metricCard("Learning feedback", `${notifications.filter((item) => item.type === "student_feedback").length}`, "Student learning notes")}
    </section>
    <section class="surface" style="margin-top: 18px;">
      <div class="toolbar">
        <div>
          <h3>Inbox</h3>
          <p class="small-note">Notifications are separate from the validation queue, so teachers can respond without accidentally grading a student artifact.</p>
        </div>
      </div>
      <div class="skill-list">
        ${
          notifications.length
            ? notifications.map(renderNotificationRow).join("")
            : `<div class="empty-state">No notifications yet. Student help requests will appear here.</div>`
        }
      </div>
    </section>
  `;
}

function renderNotificationRow(item) {
  const student = state.students.find((entry) => entry.id === item.studentId);
  const skill = SKILLS_BY_ID[item.skillId];
  const unread = item.status !== "read";
  return `
    <article class="notification-row ${unread ? "unread" : ""}">
      <div>
        <div class="unit-title">
          <span class="tag ${item.type === "help_request" ? "red" : "blue"}">${item.type === "help_request" ? "help request" : "feedback"}</span>
          <strong>${escapeHtml(item.title)}</strong>
          <span class="status-pill status-${unread ? "practicing" : "secure"}">${unread ? "unread" : "read"}</span>
        </div>
        <p>${escapeHtml(item.message)}</p>
        <p class="small-note" style="margin-top: 8px;">
          ${escapeHtml(student?.name || "Student")} · ${escapeHtml(skill?.title || "General")} · ${escapeHtml(formatDate(item.createdAt))}
        </p>
      </div>
      <div class="button-row">
        <button class="primary" type="button" data-action="select-student-dashboard" data-student-id="${escapeHtml(item.studentId)}">Open report</button>
        <button class="ghost" type="button" data-action="mark-notification-read" data-notification-id="${escapeHtml(item.id)}">Mark read</button>
      </div>
    </article>
  `;
}

function renderReports() {
  const student = selectedStudent();
  const mastered = selectedSkills().filter((skill) => ["mastered", "secure"].includes(student.mastery[skill.id]?.status));
  const developing = selectedSkills().filter((skill) => ["learning", "practicing", "intervention"].includes(student.mastery[skill.id]?.status));
  const bestSkills = selectedSkills()
    .slice()
    .sort((a, b) => (student.mastery[b.id]?.score || 0) - (student.mastery[a.id]?.score || 0))
    .slice(0, 4);
  const focusSkills = selectedSkills()
    .slice()
    .sort((a, b) => (student.mastery[a.id]?.score || 0) - (student.mastery[b.id]?.score || 0))
    .slice(0, 4);

  return `
    ${renderHeader(
      "Student Progress Report",
      "A parent/admin-ready report that separates mastery, evidence, teacher notes, and next steps.",
      `<button class="ghost" type="button" data-action="print-report">Print</button>`
    )}
    <section class="report-sheet">
      <div class="report-header">
        <div>
          <p class="eyebrow">Atlas Learning report</p>
          <h2>${escapeHtml(student.name)}</h2>
          <p>${escapeHtml(student.profile)}</p>
        </div>
        <div class="tag-row">
          <span class="tag blue">Grade 4</span>
          <span class="tag green">${percent(averageMastery(student))} average mastery</span>
          <span class="tag amber">Language load: ${escapeHtml(student.languageLoad)}</span>
        </div>
      </div>

      <div class="grid three">
        ${metricCard("Mastered or secure", `${mastered.length}`, "Skills with reliable positive evidence")}
        ${metricCard("Developing", `${developing.length}`, "Skills still receiving practice or review")}
        ${metricCard("Active minutes", `${student.activeMinutes}`, "This week")}
      </div>

      <div class="grid two" style="margin-top: 20px;">
        <div>
          <h3>Strongest Evidence</h3>
          <div class="skill-list">
            ${bestSkills.map((skill) => reportSkillLine(student, skill)).join("")}
          </div>
        </div>
        <div>
          <h3>Recommended Next Steps</h3>
          <div class="skill-list">
            ${focusSkills.map((skill) => reportSkillLine(student, skill)).join("")}
          </div>
        </div>
      </div>

      <div class="surface flush" style="margin-top: 20px;">
        <h3>Teacher Note</h3>
        <p>${escapeHtml(student.goal)}</p>
        <p class="small-note">Progression decision uses independent accuracy, conceptual evidence, transfer, retention, confidence, and teacher validation when needed.</p>
      </div>
    </section>
  `;
}

function reportSkillLine(student, skill) {
  const mastery = student.mastery[skill.id];
  return `
    <article class="skill-row">
      <div>
        <strong>${escapeHtml(skill.title)}</strong>
        <p>${escapeHtml(skill.canDo)}</p>
      </div>
      <div>
        <span class="status-pill status-${mastery.status}">${statusLabel(mastery.status)}</span>
        <p class="small-note" style="margin-top: 8px;">${percent(mastery.score)}</p>
      </div>
    </article>
  `;
}

function renderScript() {
  const steps = [
    {
      title: "Open the Teacher Planner",
      body: "Show how a teacher selects Grade 4 Math and ELA units and sees standards, skill counts, estimated minutes, and pacing.",
      action: "script-planner",
      button: "Planner"
    },
    {
      title: "Generate the schedule",
      body: "Change weekly minutes or review buffer to show that pacing is explainable and editable.",
      action: "script-planner",
      button: "Schedule"
    },
    {
      title: "Run Maya's diagnostic",
      body: "Switch to Learn and answer a few placement questions. The system updates mastery and confidence, not just a score.",
      action: "script-diagnostic",
      button: "Diagnostic"
    },
    {
      title: "Learn a weak skill",
      body: "Open a gamified mini lesson for fraction comparison. Show context, vocabulary, visual models, a quick check, and feedback to the teacher.",
      action: "script-practice",
      button: "Learn"
    },
    {
      title: "Submit open evidence",
      body: "Use the open response prompt to send writing or explanation evidence into the teacher validation queue.",
      action: "script-practice",
      button: "Open evidence"
    },
    {
      title: "Review teacher dashboard",
      body: "Show heatmap, alerts, intervention signals, and validation queue. Emphasize teacher control over recommendations.",
      action: "script-dashboard",
      button: "Dashboard"
    },
    {
      title: "Open the report",
      body: "Show a parent/admin-friendly summary with mastered skills, next steps, teacher note, and evidence-based progression.",
      action: "script-report",
      button: "Report"
    }
  ];

  return `
    ${renderHeader(
      "Demo Script",
      "Use this story when showing the prototype to a school leader or teacher: planning, placement, adaptive work, teacher validation, and report.",
      `<button class="secondary" type="button" data-action="script-planner">Start walkthrough</button>`
    )}
    <section class="surface">
      ${steps
        .map(
          (step, index) => `
            <article class="script-step">
              <div class="step-number">${index + 1}</div>
              <div>
                <h3>${escapeHtml(step.title)}</h3>
                <p class="small-note">${escapeHtml(step.body)}</p>
              </div>
              <button class="primary" type="button" data-action="${step.action}">${escapeHtml(step.button)}</button>
            </article>
          `
        )
        .join("")}
    </section>
  `;
}

function bindChrome() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.onclick = () => {
      if (tab.dataset.studentMode) {
        setState({ studentMode: tab.dataset.studentMode });
      } else {
        setState({ activeView: tab.dataset.view });
      }
    };
  });
  const studentSelect = document.querySelector("#studentSelect");
  if (studentSelect) {
    studentSelect.onchange = (event) => {
      setState({
        selectedStudentId: event.target.value,
        studentAnswer: null,
        lessonAnswer: null,
        lessonFeedback: null,
        practiceAnswer: null,
        lastFeedback: null,
        learningFeedbackText: "",
        hintVisible: false
      });
    };
  }
  const reset = document.querySelector("#resetDemo");
  if (reset) {
    reset.onclick = () => {
      localStorage.removeItem(STORAGE_KEY);
      state = createInitialState();
      render();
    };
  }
}

function bindViewEvents() {
  document.querySelectorAll("[data-unit-id]").forEach((checkbox) => {
    checkbox.onchange = () => {
      const unitId = checkbox.dataset.unitId;
      const selected = new Set(state.selectedUnitIds);
      if (checkbox.checked) selected.add(unitId);
      else selected.delete(unitId);
      setState({ selectedUnitIds: Array.from(selected) });
    };
  });

  document.querySelectorAll("[data-schedule-field]").forEach((input) => {
    input.onchange = () => {
      const key = input.dataset.scheduleField;
      setState({ scheduleConfig: { ...state.scheduleConfig, [key]: input.value } });
    };
  });

  document.querySelectorAll("[data-student-mode]").forEach((button) => {
    button.onclick = () => setState({ studentMode: button.dataset.studentMode });
  });

  const openResponse = document.querySelector("[data-open-response]");
  if (openResponse) {
    openResponse.oninput = (event) => {
      state.openResponseText = event.target.value;
      saveState();
    };
  }

  const learningFeedback = document.querySelector("[data-learning-feedback]");
  if (learningFeedback) {
    learningFeedback.oninput = (event) => {
      state.learningFeedbackText = event.target.value;
      saveState();
    };
  }

  const learningFeedbackType = document.querySelector("[data-learning-feedback-type]");
  if (learningFeedbackType) {
    learningFeedbackType.onchange = (event) => {
      state.learningFeedbackType = event.target.value;
      saveState();
    };
  }

  const helpRequest = document.querySelector("[data-help-request]");
  if (helpRequest) {
    helpRequest.oninput = (event) => {
      state.helpRequestText = event.target.value;
      saveState();
    };
  }

  document.querySelectorAll("[data-ai-setting]").forEach((input) => {
    input.onchange = () => updateAiSetting(input.dataset.aiSetting, input.type === "checkbox" ? input.checked : input.value);
  });

  document.querySelectorAll("[data-ai-provider-field]").forEach((input) => {
    input.onchange = () => updateAiProviderField(input.dataset.aiProviderField, input.value);
  });

  document.querySelectorAll("[data-action]").forEach((button) => {
    button.onclick = () => handleAction(button.dataset.action, button);
  });
}

function handleAction(action, target) {
  const handlers = {
    "login-admin": () => setState({ portal: "admin", activeView: "overview", previewFromAdmin: false }),
    "login-student": () => setState({ portal: "student", activeView: "student", studentMode: "mission", studentNotice: "", previewFromAdmin: false }),
    "login-system": () => setState({ portal: "system", activeView: "system", previewFromAdmin: false }),
    logout: () => setState({ portal: "login", activeView: "overview", studentNotice: "", previewFromAdmin: false }),
    "return-admin-preview": () => setState({ portal: "admin", activeView: state.previousAdminView || "overview", previewFromAdmin: false, studentNotice: "" }),
    "select-demo-units": () => setState({ selectedUnitIds: DEFAULT_UNIT_IDS.slice() }),
    "open-student-mission": () => setState({ portal: "student", activeView: "student", studentMode: "mission", studentNotice: "", previewFromAdmin: true, previousAdminView: state.activeView || "overview" }),
    "go-admin-view": () => setState({ portal: "admin", activeView: target.dataset.view || "overview" }),
    "open-dashboard": () => setState({ portal: "admin", activeView: "dashboard" }),
    "open-reports": () => setState({ portal: "admin", activeView: "reports" }),
    "show-progress": () => setState({ studentMode: "progress" }),
    "learn-skill": () =>
      setState({
        portal: "student",
        activeView: "student",
        studentMode: "lesson",
        activePracticeSkillId: target.dataset.skillId,
        lessonAnswer: null,
        lessonFeedback: null
      }),
    "select-lesson-answer": () => setState({ lessonAnswer: Number(target.dataset.answerIndex), lessonFeedback: null }),
    "submit-lesson-check": () => submitLessonCheck(target.dataset.skillId),
    "send-learning-feedback": () => sendLearningFeedback(target.dataset.skillId),
    "open-help-request": () => setState({ helpRequestOpen: true, helpRequestText: "", studentNotice: "" }),
    "close-help-request": () => setState({ helpRequestOpen: false, helpRequestText: "" }),
    "send-help-request": () => sendHelpRequest(target.dataset.skillId),
    "select-daily-answer": () => setState({ dailyChallengeAnswer: Number(target.dataset.answerIndex), dailyChallengeFeedback: null }),
    "submit-daily-challenge": submitDailyChallenge,
    "equip-powerup": () => setState({ equippedPowerUp: target.dataset.powerupId, studentNotice: `${target.closest(".powerup-card")?.querySelector("strong")?.textContent || "Power-up"} equipped.` }),
    "send-quick-feedback": () => sendLearningFeedback(nextLessonSkillId(selectedStudent()), "I need help getting started with this lesson."),
    "student-ai-coach": () => generateStudentAiCoach(target.dataset.skillId),
    "practice-skill": () =>
      setState({
        portal: "student",
        activeView: "student",
        studentMode: "practice",
        activePracticeSkillId: target.dataset.skillId,
        practiceAnswer: null,
        lastFeedback: null,
        hintVisible: false
      }),
    "select-diagnostic-answer": () => setState({ studentAnswer: Number(target.dataset.answerIndex) }),
    "submit-diagnostic-answer": submitDiagnosticAnswer,
    "skip-diagnostic": () => advanceDiagnostic(false, true),
    "retake-diagnostic": retakeDiagnostic,
    "select-practice-answer": () => setState({ practiceAnswer: Number(target.dataset.answerIndex), lastFeedback: null }),
    "submit-practice-answer": submitPracticeAnswer,
    "show-hint": () => setState({ hintVisible: true }),
    "next-practice": nextPractice,
    "submit-open-response": () => submitOpenResponse(target.dataset.skillId),
    "use-sample-response": useSampleResponse,
    "switch-open-prompt": () => setState({ openResponsePromptIndex: state.openResponsePromptIndex + 1, openResponseText: "" }),
    "review-accept": () => updateReview(target.dataset.reviewId, "accepted"),
    "review-revision": () => updateReview(target.dataset.reviewId, "needs_revision"),
    "review-override": () => updateReview(target.dataset.reviewId, "override_applied"),
    "ai-score-review": () => aiScoreReview(target.dataset.reviewId),
    "mark-notification-read": () => markNotificationRead(target.dataset.notificationId),
    "generate-teacher-ai": generateTeacherAiPlan,
    "test-ai-config": testAiConfig,
    "select-student-dashboard": () => setState({ portal: "admin", selectedStudentId: target.dataset.studentId, activeView: "reports" }),
    "print-report": () => window.print(),
    "script-planner": () => setState({ portal: "admin", activeView: "planner" }),
    "script-diagnostic": () => setState({ portal: "student", activeView: "student", studentMode: "diagnostic", selectedStudentId: "maya" }),
    "script-practice": () => setState({ portal: "student", activeView: "student", studentMode: "lesson", selectedStudentId: "maya", activePracticeSkillId: "math-g4-nf-compare-unlike-fractions" }),
    "script-dashboard": () => setState({ portal: "admin", activeView: "dashboard" }),
    "script-report": () => setState({ portal: "admin", activeView: "reports", selectedStudentId: "maya" })
  };
  handlers[action]?.();
}

function submitDiagnosticAnswer() {
  if (state.studentAnswer === null || Number.isNaN(state.studentAnswer)) return;
  const item = DIAGNOSTIC_ITEMS[state.diagnosticCursor] || DIAGNOSTIC_ITEMS[0];
  const correct = state.studentAnswer === item.answer;
  updateMasteryFromEvidence(selectedStudent().id, item.skillId, correct, {
    confidenceDelta: 0.06,
    source: "diagnostic",
    misconception: correct ? null : "diagnostic_gap"
  });
  advanceDiagnostic(correct, false);
}

function advanceDiagnostic(correct, skipped) {
  const item = DIAGNOSTIC_ITEMS[state.diagnosticCursor] || DIAGNOSTIC_ITEMS[0];
  const answers = state.diagnosticAnswers.concat({
    itemId: item.id,
    skillId: item.skillId,
    correct,
    skipped,
    studentId: state.selectedStudentId
  });
  const next = state.diagnosticCursor + 1;
  if (next >= DIAGNOSTIC_ITEMS.length) {
    updateStudent(state.selectedStudentId, (student) => {
      student.diagnosticComplete = true;
      return student;
    });
    const student = selectedStudent();
    const nextSkill = recommendedSkill(student, "math");
    setState({
      diagnosticAnswers: answers,
      diagnosticCursor: 0,
      studentAnswer: null,
      studentMode: "mission",
      activePracticeSkillId: nextSkill.id,
      lastFeedback: {
        itemId: "diagnostic",
        correct: true,
        message: "Level check complete. Your starting path is ready."
      }
    });
  } else {
    setState({ diagnosticAnswers: answers, diagnosticCursor: next, studentAnswer: null });
  }
}

function retakeDiagnostic() {
  updateStudent(state.selectedStudentId, (student) => {
    student.diagnosticComplete = false;
    return student;
  });
  setState({ diagnosticCursor: 0, diagnosticAnswers: [], studentAnswer: null });
}

function currentAiProvider() {
  const settings = state.aiSettings || defaultAiSettings();
  return settings.providers[settings.activeProvider] || settings.providers.openai;
}

function updateAiSetting(key, rawValue) {
  const numericFields = new Set(["maxInputTokens", "studentMaxOutputTokens", "teacherMaxOutputTokens", "temperature"]);
  const value = numericFields.has(key) ? Number(rawValue) : rawValue;
  state.aiSettings = {
    ...(state.aiSettings || defaultAiSettings()),
    [key]: value
  };
  saveState();
  render();
}

function updateAiProviderField(field, value) {
  const settings = state.aiSettings || defaultAiSettings();
  const active = settings.activeProvider;
  state.aiSettings = {
    ...settings,
    providers: {
      ...settings.providers,
      [active]: {
        ...settings.providers[active],
        [field]: value
      }
    }
  };
  saveState();
  render();
}

function generateStudentAiCoach(skillId) {
  const student = selectedStudent();
  const skill = SKILLS_BY_ID[skillId] || SKILLS_BY_ID[nextLessonSkillId(student)];
  const mastery = student.mastery[skill.id];
  const lesson = LESSONS[skill.id];
  const misconception = skill.misconception || "needs_targeted_strategy";
  const feedback = aiStudentFeedback(skill, mastery, lesson, misconception, student);
  state.studentAiOutputBySkill = {
    ...(state.studentAiOutputBySkill || {}),
    [skill.id]: {
      feedback,
      provider: currentAiProvider().label,
      tokenBudget: state.aiSettings?.studentMaxOutputTokens || 120,
      createdAt: new Date().toISOString()
    }
  };
  saveState();
  render();
}

function aiStudentFeedback(skill, mastery, lesson, misconception, student) {
  if (skill.subject === "math" && skill.id.includes("nf-compare")) {
    return "Use the same whole first. Rename one fraction so both use the same denominator, then compare the top numbers. Try saying: 3/4 is 6/8, so 6 eighths is greater than 5 eighths.";
  }
  if (skill.subject === "math" && skill.id.includes("word-problem")) {
    return "Before solving, write what happens in the story: equal groups first, then the change. Build the equation before calculating.";
  }
  if (skill.subject === "ela" && skill.id.includes("evidence")) {
    return "Pick the detail that proves your answer, not just a detail that sounds interesting. Use this frame: I think ___ because the text says ___.";
  }
  if (skill.subject === "ela" && skill.id.includes("opinion")) {
    return "Your claim needs a reason and proof. Try: I believe ___ because ___. For example, the text says ___.";
  }
  return `${student.name.split(" ")[0]}, focus on one strategy from the lesson: ${lesson?.objective || skill.canDo}. Then try one independent practice item without hints.`;
}

function generateTeacherAiPlan() {
  const stats = classStats();
  const lowSkill = selectedSkills()
    .map((skill) => ({
      skill,
      avg: state.students.reduce((sum, student) => sum + (student.mastery[skill.id]?.score || 0), 0) / state.students.length
    }))
    .sort((a, b) => a.avg - b.avg)[0];
  const feedbackItems = state.reviewQueue.filter((item) => item.status === "pending" && item.type === "student_feedback").length;
  state.teacherAiOutput = {
    title: "Tomorrow's AI-assisted teaching plan",
    actions: [
      `Run a 12-minute small group on ${lowSkill.skill.title}; class average is ${percent(lowSkill.avg)}.`,
      `Prioritize ${stats.validation} validation queue items before advancement decisions.`,
      feedbackItems ? `Respond to ${feedbackItems} student learning feedback note${feedbackItems === 1 ? "" : "s"} before independent practice.` : "No student feedback notes are currently blocking progress.",
      "Keep mastery decisions deterministic: AI suggests groups and comments, while the mastery engine applies thresholds."
    ],
    tokenBudget: state.aiSettings?.teacherMaxOutputTokens || 260,
    payloadSummary: "class skill averages, pending review counts, top misconception tags"
  };
  saveState();
  render();
}

function aiScoreReview(reviewId) {
  const review = state.reviewQueue.find((item) => item.id === reviewId);
  if (!review) return;
  const skill = SKILLS_BY_ID[review.skillId];
  const score = review.evidence.length > 180 ? "secure evidence: rubric 3/4" : "developing evidence: rubric 2/4";
  state.reviewQueue = state.reviewQueue.map((item) =>
    item.id === reviewId
      ? {
          ...item,
          aiScore: `${score}; ${skill.subject === "ela" ? "check claim-evidence link" : "check conceptual explanation"}`,
          recommendation: `${item.recommendation} AI assist: ${score}. Teacher validation still required.`
        }
      : item
  );
  saveState();
  render();
}

function testAiConfig() {
  const provider = currentAiProvider();
  const mode = state.aiSettings.demoMode ? "offline demo mode" : "live API mode";
  const keyStatus = provider.apiKey ? "API key present" : "no API key saved";
  setState({
    aiConfigTest: `${provider.label} ${provider.model || "model"} is selected in ${mode}; ${keyStatus}.`
  });
}

function submitLessonCheck(skillId) {
  if (state.lessonAnswer === null || Number.isNaN(state.lessonAnswer)) return;
  const lesson = LESSONS[skillId];
  if (!lesson) return;
  const correct = state.lessonAnswer === lesson.quickCheck.answer;
  const student = selectedStudent();
  updateMasteryFromEvidence(student.id, skillId, correct, {
    confidenceDelta: correct ? 0.04 : 0.02,
    source: "lesson_quick_check",
    misconception: correct ? null : "lesson_check_gap",
    usedHint: false
  });
  state.completedLessons = {
    ...(state.completedLessons || {}),
    [lessonCompletionKey(student.id, skillId)]: {
      completedAt: new Date().toISOString(),
      correct,
      xp: correct ? lesson.xp : Math.round(lesson.xp / 2)
    }
  };
  setState({
    lessonFeedback: {
      skillId,
      correct,
      message: correct ? `${lesson.quickCheck.feedback} You earned ${lesson.xp} XP.` : `Good try. Review the lesson steps, then try practice. ${lesson.quickCheck.feedback}`
    }
  });
}

function sendLearningFeedback(skillId, quickMessage = "") {
  const student = selectedStudent();
  const skill = SKILLS_BY_ID[skillId] || SKILLS_BY_ID[nextLessonSkillId(student)];
  const feedbackType = state.learningFeedbackType;
  const typeLabel = {
    confused: "I am confused",
    need_example: "I need another example",
    too_easy: "This feels too easy",
    proud: "I want to show my work"
  }[feedbackType] || "Learning feedback";
  const text = quickMessage || state.learningFeedbackText.trim() || typeLabel;
  const item = {
    id: `feedback-${Date.now()}`,
    studentId: student.id,
    skillId: skill.id,
    type: "student_feedback",
    status: "pending",
    submittedAt: toDateInput(new Date()),
    evidence: `${typeLabel}: ${text}`,
    recommendation: feedbackRecommendation(state.learningFeedbackType, skill)
  };
  state.reviewQueue = [item].concat(state.reviewQueue);
  addNotification({
    type: "student_feedback",
    studentId: student.id,
    skillId: skill.id,
    title: `${student.name} sent learning feedback`,
    message: `${typeLabel}: ${text}`,
    priority: feedbackType === "confused" || feedbackType === "need_example" ? "medium" : "low"
  });
  saveState();
  setState({
    learningFeedbackText: "",
    learningFeedbackType: "confused",
    portal: "student",
    activeView: "student",
    studentNotice: "Your note was sent to your teacher."
  });
}

function sendHelpRequest(skillId) {
  const student = selectedStudent();
  const skill = SKILLS_BY_ID[skillId] || SKILLS_BY_ID[nextLessonSkillId(student)];
  const text = state.helpRequestText.trim();
  if (!text) return;
  addNotification({
    type: "help_request",
    studentId: student.id,
    skillId: skill.id,
    title: `${student.name} needs help`,
    message: text,
    priority: "high"
  });
  setState({
    helpRequestOpen: false,
    helpRequestText: "",
    studentNotice: "Your help request was sent to your teacher."
  });
}

function submitDailyChallenge() {
  if (state.dailyChallengeAnswer === null || Number.isNaN(state.dailyChallengeAnswer)) return;
  const challenge = dailyChallenge();
  const correct = state.dailyChallengeAnswer === challenge.answer;
  updateMasteryFromEvidence(selectedStudent().id, challenge.skillId, correct, {
    confidenceDelta: correct ? 0.03 : 0.01,
    source: "daily_challenge",
    misconception: correct ? null : "daily_challenge_gap",
    usedHint: false
  });
  setState({
    dailyChallengeFeedback: {
      correct,
      message: correct ? `${challenge.feedback} Bonus complete.` : "Good try. Use the Fraction Lens and compare with sixths."
    }
  });
}

function addNotification(notification) {
  const item = {
    id: `note-${Date.now()}`,
    status: "unread",
    createdAt: toDateInput(new Date()),
    ...notification
  };
  state.notifications = [item].concat(state.notifications || []);
  saveState();
}

function markNotificationRead(notificationId) {
  state.notifications = (state.notifications || []).map((item) => (item.id === notificationId ? { ...item, status: "read" } : item));
  saveState();
  render();
}

function feedbackRecommendation(type, skill) {
  const recommendations = {
    confused: `Check in during ${skill.title}; student reports confusion from the lesson flow.`,
    need_example: `Assign another worked example for ${skill.title} before independent practice.`,
    too_easy: `Consider enrichment or a transfer task for ${skill.title}.`,
    proud: `Review student work and consider adding portfolio evidence for ${skill.title}.`
  };
  return recommendations[type] || `Review learning feedback for ${skill.title}.`;
}

function submitPracticeAnswer() {
  if (state.practiceAnswer === null || Number.isNaN(state.practiceAnswer)) return;
  const item = practiceItemForSkill(state.activePracticeSkillId);
  const correct = state.practiceAnswer === item.answer;
  updateMasteryFromEvidence(selectedStudent().id, item.skillId, correct, {
    confidenceDelta: correct ? 0.05 : 0.01,
    source: "practice",
    misconception: correct ? null : item.misconception,
    usedHint: state.hintVisible
  });
  const message = correct ? item.explanation : `Not yet. ${item.hint} ${item.explanation}`;
  setState({
    lastFeedback: {
      itemId: item.id,
      correct,
      message
    }
  });
}

function nextPractice() {
  const student = selectedStudent();
  const active = SKILLS_BY_ID[state.activePracticeSkillId] || recommendedSkill(student);
  const ready = readiness(student, active.id);
  const next = ready.ready ? recommendedSkill(student, active.subject) : active;
  const currentCursor = state.practiceCursorBySkill?.[active.id] || 0;
  setState({
    activePracticeSkillId: next.id,
    practiceCursorBySkill: {
      ...(state.practiceCursorBySkill || {}),
      [active.id]: currentCursor + 1
    },
    practiceAnswer: null,
    lastFeedback: null,
    hintVisible: false
  });
}

function updateMasteryFromEvidence(studentId, skillId, correct, options = {}) {
  updateStudent(studentId, (student) => {
    const current = student.mastery[skillId] || {
      score: 0.42,
      confidence: 0.35,
      independentAccuracy: 0.4,
      evidenceAccuracy: 0.4,
      conceptual: 0.4,
      retention: 0.4,
      transfer: 0.4,
      hintRate: 0.25,
      attempts: 0,
      status: "learning"
    };
    const usedHint = Boolean(options.usedHint);
    const scoreDelta = correct ? (usedHint ? 0.04 : 0.07) : -0.035;
    const independentDelta = correct ? (usedHint ? 0.01 : 0.055) : -0.025;
    const evidenceDelta = correct ? 0.055 : -0.03;
    const transferDelta = correct && options.source !== "diagnostic" ? 0.035 : correct ? 0.015 : -0.02;

    const next = {
      ...current,
      score: round2(clamp(current.score + scoreDelta, 0.2, 0.98)),
      confidence: round2(clamp(current.confidence + (options.confidenceDelta || 0.03), 0.2, 0.98)),
      independentAccuracy: round2(clamp(current.independentAccuracy + independentDelta, 0.1, 0.99)),
      evidenceAccuracy: round2(clamp(current.evidenceAccuracy + evidenceDelta, 0.1, 0.99)),
      conceptual: round2(clamp(current.conceptual + (correct ? 0.035 : -0.015), 0.1, 0.99)),
      retention: round2(clamp(current.retention + (correct ? 0.015 : -0.01), 0.1, 0.99)),
      transfer: round2(clamp(current.transfer + transferDelta, 0.1, 0.99)),
      hintRate: round2(clamp(current.hintRate + (usedHint ? 0.04 : correct ? -0.02 : 0.01), 0, 0.7)),
      attempts: current.attempts + 1
    };
    next.status = readiness({ ...student, mastery: { ...student.mastery, [skillId]: next } }, skillId).ready ? "mastered" : statusFromScore(next.score);
    student.mastery[skillId] = next;

    if (options.misconception) {
      student.misconceptions[options.misconception] = (student.misconceptions[options.misconception] || 0) + 1;
    }

    student.attempts = student.attempts.concat({
      skillId,
      correct,
      source: options.source || "practice",
      usedHint,
      at: new Date().toISOString()
    });

    student.activeMinutes += correct ? 3 : 4;
    student.learningVelocity = round2(clamp(student.learningVelocity + (correct ? 0.015 : -0.005), 0.08, 0.85));
    return student;
  });
}

function submitOpenResponse(skillId) {
  const text = state.openResponseText.trim();
  if (!text) return;
  const student = selectedStudent();
  const skill = SKILLS_BY_ID[skillId];
  const item = {
    id: `review-${Date.now()}`,
    studentId: student.id,
    skillId,
    type: skill.subject === "math" ? "explanation" : "writing",
    status: "pending",
    submittedAt: toDateInput(new Date()),
    evidence: text,
    recommendation: text.length > 180 ? "Likely strong evidence; check claim, reasoning, and precision." : "Review for completeness and evidence quality."
  };
  state.reviewQueue = [item].concat(state.reviewQueue);
  updateMasteryFromEvidence(student.id, skillId, true, {
    confidenceDelta: 0.04,
    source: "open_response",
    usedHint: false
  });
  setState({
    openResponseText: "",
    portal: "student",
    activeView: "student",
    studentMode: "practice",
    studentNotice: "Your work was submitted for teacher review."
  });
}

function useSampleResponse() {
  const prompt = OPEN_RESPONSE_PROMPTS[state.openResponsePromptIndex % OPEN_RESPONSE_PROMPTS.length];
  setState({ openResponseText: prompt.sample });
}

function updateReview(reviewId, status) {
  const review = state.reviewQueue.find((item) => item.id === reviewId);
  if (!review) return;
  state.reviewQueue = state.reviewQueue.map((item) => (item.id === reviewId ? { ...item, status } : item));
  if (status === "accepted" || status === "override_applied") {
    updateMasteryFromEvidence(review.studentId, review.skillId, true, {
      confidenceDelta: 0.08,
      source: "teacher_validation",
      usedHint: false
    });
  } else {
    updateMasteryFromEvidence(review.studentId, review.skillId, false, {
      confidenceDelta: 0.03,
      source: "teacher_validation",
      misconception: "revision_needed"
    });
  }
  saveState();
  render();
}

document.addEventListener("DOMContentLoaded", () => {
  bindChrome();
  render();
});
