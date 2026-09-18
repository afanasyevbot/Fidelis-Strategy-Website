export const testimonials = {
  paradise: {
    name: "Paradise Capital",
    attribution: "Paul Niccum · CEO, Paradise Capital",
    text:
      "Before the Buyer Engine, building the buyer list for each deal was a manual process. Now we have a living buyer universe that refreshes itself, continuously expands our buyer coverage, and most importantly builds a curated buyer list for each client from that universe plus targeted searches. Weeks of manual work compressed into minutes. That lets us scale the practice, put the strongest buyers in front of our clients, and keep our attention on serving them.",
  },
  lexi: {
    name: "Linked by Lexi",
    attribution: "Lexi · Founder, Linked by Lexi",
    text:
      "Matthew at Fidelis Strategy built a custom consumer wellness app tailored exactly to my workflow and routines. Instead of having a chaotic process or no way to keep track, he designed something around how I actually operate, which made it far more effective and simple to stick with.",
  },
  grace: {
    name: "Grace Evangelical Church",
    attribution: "Leadership · Grace Evangelical Church",
    text: [
      "Matthew gave his time pro bono to help our small church solve a practical challenge: coordinating volunteers and keeping our members informed. He built a custom member and volunteer portal that gives us one place to manage our member directory, schedule teams, and send church announcements and event reminders.",
      "He also rebuilt our website, moved our staff onto Microsoft 365 Business, and integrated online giving directly into the site. Together, these improvements help us organize the work behind church life and keep our community connected.",
    ],
  },
} as const;

export function testimonialParagraphs(text: string | readonly string[]): string[] {
  return typeof text === "string" ? [text] : [...text];
}
