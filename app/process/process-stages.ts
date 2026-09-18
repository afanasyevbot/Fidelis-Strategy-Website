export type ProcessStageId = "discover" | "design" | "deploy" | "drive";

export type ProcessStage = {
  id: ProcessStageId;
  num: string;
  label: string;
  heading: string;
  body: string;
  yourPart: string;
  takesShape: string;
  closingLine?: string;
};

export const processStages: ProcessStage[] = [
  {
    id: "discover",
    num: "01",
    label: "Discover",
    heading: "Find what's worth changing.",
    body:
      "Before recommending changes, I learn how your business works. We look at your goals, day-to-day tasks, customers, tools, and where time or opportunities get lost. Industry research and conversations with your team help identify what deserves attention.",
    yourPart:
      "Share how the work happens, what you want to achieve, and examples that help us understand the situation.",
    takesShape: "A clearer view of your priorities and the opportunities worth pursuing.",
  },
  {
    id: "design",
    num: "02",
    label: "Design",
    heading: "Turn the opportunity into a plan.",
    body:
      "The findings become a tailored growth and systems plan: what to improve, which systems could support it, and how implementation could proceed. We compare approaches and agree on the scope and responsibilities before building.",
    yourPart: "Review the recommendations, set priorities, and help choose the right direction.",
    takesShape: "A practical plan connecting your business goals to implementation.",
  },
  {
    id: "deploy",
    num: "03",
    label: "Deploy",
    heading: "Build it. Test it. Put it to work.",
    body:
      "I build or connect the agreed solution, then work with you to test it against real tasks. Your feedback shapes the details as we refine the workflow and introduce it to the people who will use it.",
    yourPart: "Try the solution, review the output, and tell me what needs to work differently.",
    takesShape: "The agreed solution, tested and introduced with your team.",
  },
  {
    id: "drive",
    num: "04",
    label: "Drive",
    heading: "Keep making it work better.",
    body:
      "The first release gives us something to learn from. As your team uses the system, we adjust the workflow, refine features, and identify the next useful improvement. Continued work is agreed around your needs.",
    yourPart: "Share what is working, what is getting in the way, and what has changed.",
    takesShape: "Continued refinement guided by how the system is actually used.",
    closingLine: "Built around your business. Refined as it evolves.",
  },
];
