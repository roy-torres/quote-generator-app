export type Quote = {
  id: string;
  text: string;
  theme: string;
  source?: "evanston";
};

/**
 * Training lines written for this page, plus short lines taken from the
 * Life Time Evanston club page.
 */
const quotes: Quote[] = [
  {
    id: "shoes",
    text: "Put your shoes on. The debate can happen on the way.",
    theme: "Starting",
  },
  {
    id: "next-rep",
    text: "You do not need a new plan. You need the next rep.",
    theme: "Consistency",
  },
  {
    id: "rest",
    text: "Rest is part of the work. Skipping it is how strong people get smaller.",
    theme: "Recovery",
  },
  {
    id: "honest-session",
    text: "One honest session beats a perfect plan you never start.",
    theme: "Starting",
  },
  {
    id: "floor",
    text: "Leave the floor a little more capable than you found it.",
    theme: "Training",
  },
  {
    id: "pace",
    text: "Speed is a skill. Patience is how you keep it.",
    theme: "Pace",
  },
  {
    id: "return",
    text: "Soreness fades. The habit of returning does not.",
    theme: "Consistency",
  },
  {
    id: "breath",
    text: "Breathe through the hard part. That is the part you came for.",
    theme: "Effort",
  },
  {
    id: "today",
    text: "Train the day you have, not the day you imagined.",
    theme: "Training",
  },
  {
    id: "quiet",
    text: "Strength is quiet. It looks like coming back tomorrow.",
    theme: "Strength",
  },
  {
    id: "warmup",
    text: "Warm up like you mean to stay.",
    theme: "Preparation",
  },
  {
    id: "mirror",
    text: "The mirror is a poor coach. The work is a better one.",
    theme: "Focus",
  },
  {
    id: "easy-days",
    text: "Make the easy days count so the hard days have somewhere to land.",
    theme: "Consistency",
  },
  {
    id: "recovery",
    text: "Recovery is not a pause in progress. It is the progress.",
    theme: "Recovery",
  },
  {
    id: "promises",
    text: "Keep your promises small enough to keep, and keep them.",
    theme: "Discipline",
  },
  {
    id: "form",
    text: "Form first. Load second. Ego never.",
    theme: "Training",
  },
  {
    id: "short",
    text: "A short session still moves the line.",
    theme: "Consistency",
  },
  {
    id: "range",
    text: "Range you own is stronger than weight you borrow.",
    theme: "Strength",
  },
  {
    id: "tuesdays",
    text: "Build the habit on ordinary Tuesdays.",
    theme: "Consistency",
  },
  {
    id: "spot",
    text: "Ask for a spot when the work gets honest.",
    theme: "Focus",
  },
  {
    id: "ordinary-weeks",
    text: "Progress hides in the weeks that feel ordinary.",
    theme: "Patience",
  },
  {
    id: "cooldown",
    text: "Cool down. You earned the right to leave calmly.",
    theme: "Recovery",
  },
  {
    id: "own-it",
    text: "Choose a weight you can own, then own it.",
    theme: "Strength",
  },
  {
    id: "missed-day",
    text: "Missed a day. Return on the next one without a speech.",
    theme: "Starting",
  },
  {
    id: "attention",
    text: "The clock does not care. Your attention does.",
    theme: "Focus",
  },
  {
    id: "last-rep",
    text: "Finish the last rep with the same care as the first.",
    theme: "Discipline",
  },
  {
    id: "awkward",
    text: "If it feels awkward, you are probably learning. Stay with it.",
    theme: "Patience",
  },
  {
    id: "water",
    text: "Drink water before you need the reminder.",
    theme: "Recovery",
  },
  {
    id: "belong",
    text: "You belong here.",
    theme: "Belonging",
    source: "evanston",
  },
  {
    id: "healthy-life",
    text: "Make healthy your way of life. One membership. So many ways to move, play, recover and live.",
    theme: "Health",
    source: "evanston",
  },
  {
    id: "intention",
    text: "Recover with intention.",
    theme: "Recovery",
    source: "evanston",
  },
  {
    id: "crush-goals",
    text: "Build strength. Gain confidence. Crush your goals.",
    theme: "Strength",
    source: "evanston",
  },
  {
    id: "precision",
    text: "Precision meets power.",
    theme: "Strength",
    source: "evanston",
  },
  {
    id: "kitchen",
    text: "Real change happens in the kitchen.",
    theme: "Nutrition",
    source: "evanston",
  },
  {
    id: "amplified",
    text: "Your goals, amplified.",
    theme: "Training",
    source: "evanston",
  },
  {
    id: "not-a-session",
    text: "Dynamic Personal Training is not a session. It's a system that surrounds you.",
    theme: "Training",
    source: "evanston",
  },
  {
    id: "on-the-bike",
    text: "Feel the music, embrace the burn, leave everything on that bike.",
    theme: "Effort",
    source: "evanston",
  },
  {
    id: "after-training",
    text: "Because what you do after training matters just as much as the training itself.",
    theme: "Recovery",
    source: "evanston",
  },
  {
    id: "find-energy",
    text: "Find your energy.",
    theme: "Energy",
    source: "evanston",
  },
  {
    id: "journey",
    text: "Your journey starts here.",
    theme: "Starting",
    source: "evanston",
  },
  {
    id: "first-step",
    text: "Take the first step.",
    theme: "Starting",
    source: "evanston",
  },
  {
    id: "happy-kids",
    text: "Everything they love to do, all under one roof. Happy kids, healthy habits.",
    theme: "Family",
    source: "evanston",
  },
  {
    id: "vitality",
    text: "A community of vitality—this is active aging with fitness, social events and fun.",
    theme: "Community",
    source: "evanston",
  },
];

export function pickQuote(avoidId?: string | null): Quote {
  const pool = avoidId ? quotes.filter((quote) => quote.id !== avoidId) : quotes;
  const source = pool.length > 0 ? pool : quotes;
  const index = Math.floor(Math.random() * source.length);
  return source[index];
}
