// Single source of truth for the 4D Growth Audit checklist.
// Consumed by the web checklist page (app/growth-audit/checklist/page.tsx)
// and the print page that gets rendered to the downloadable PDF
// (app/growth-audit/checklist/pdf/page.tsx). Edit questions here once.

export type Stage = {
  label: string;
  headline: string;
  questions: string[];
};

export const stages: Stage[] = [
  {
    label: "YOUR CUSTOMER",
    headline: "Do you actually know who you sell to?",
    questions: [
      "Can you name your 5 best customers and the specific situation each was in when they decided to buy?",
      "Do you know the 2-3 signs that tend to show up before a good-fit customer is ready to buy?",
      "Could you describe your ideal customer beyond their size or industry, the actual situation that makes them need you?",
      "Have you talked to a customer in the last 90 days just to ask why they chose you?",
      "Do you know which 20% of customers drive 80% of your revenue, and what they have in common?",
      "If a new inquiry came in tomorrow, could you tell within 30 seconds whether they're a good fit?",
    ],
  },
  {
    label: "YOUR OFFER",
    headline: "Is your offer doing the work it should?",
    questions: [
      "When someone asks what you do, can you answer in one sentence they actually remember?",
      "Is your pricing based on the value you deliver, or just your costs plus a markup?",
      "Do you have one clear main offer, or three half-built ones competing for attention?",
      "Is there a clear reason a customer should choose you over the obvious alternative?",
      "If someone found you online, would they understand what you do the same way you'd explain it in person?",
      "If you raised your prices 30% tomorrow, do you know which customers would still say yes?",
    ],
  },
  {
    label: "YOUR SYSTEMS",
    headline: "Is the business actually built, or still living in your head?",
    questions: [
      "Is there a written, step-by-step process from first contact to paid customer that someone other than you could follow?",
      "How much of your follow-up with leads and customers happens on its own, versus only when you remember to do it by hand?",
      "Whether you run on software, spreadsheets, or paper, do your tools actually fit how you work, or are you constantly working around them and entering things twice?",
      "Is AI built into how you actually work and doing real work in your business, or is it still occasional and off to the side?",
      "Is there one place that shows the real status of every customer and job, or is it scattered across your inbox, spreadsheets, sticky notes, and your head?",
      "Do you have a steady, predictable flow of new customers coming in, or are you starting from scratch every week?",
    ],
  },
  {
    label: "YOUR RESULTS",
    headline: "Do you know what's working, what isn't, and what to kill?",
    questions: [
      "Do you know where your best customers actually come from, not just where you get the most inquiries?",
      "When you lose a sale, do you find out why, or does it just disappear?",
      "What's the one number you check every Monday to know the business is on track?",
      "Can you see the handful of numbers that tell you the business is healthy in one place, or do you rebuild them by hand each time?",
      "Have you stopped doing something in the last quarter because the numbers told you to?",
      "If revenue grew 50% next year, do you know which two parts of the business would break first?",
    ],
  },
];

export type ScoringBand = { label: string; body: string };

export const scoringBands: ScoringBand[] = [
  {
    label: "20–24 yes",
    body: "Your engine is in great shape. You probably don't need outside help, keep iterating.",
  },
  {
    label: "14–19 yes",
    body: "You have most of it. The gaps are usually in Deploy or Drive, execution and measurement. That's where most of our work lives.",
  },
  {
    label: "8–13 yes",
    body: "The strategy is partially clear but the system isn't built. This is the most common profile we see, and the one where 30–90 days of focused work makes the biggest difference.",
  },
  {
    label: "Under 8",
    body: "Start with Discover. Trying to deploy systems before you're clear on the buyer is how most growth budgets get burned.",
  },
];

export const checklistMeta = {
  title: "The 4D Growth Audit",
  subtitle: "24 questions to know if your growth system is actually working",
  totalQuestions: 24,
};
