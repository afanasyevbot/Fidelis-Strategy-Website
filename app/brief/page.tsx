import type { Metadata } from "next";
import { BriefWizard } from "@/components/brief-wizard";

export const metadata: Metadata = {
  title: "First System Brief",
  description:
    "A high-level one-pager on the custom AI system that takes the work still done by hand. About 24 hours. No call. No 24 questions.",
  alternates: { canonical: "/brief" },
};

export default function BriefPage() {
  return <BriefWizard />;
}
