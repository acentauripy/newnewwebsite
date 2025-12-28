// ─────────────────────────────────────────────────────────────────────────────
// JOB TYPES
// ─────────────────────────────────────────────────────────────────────────────

export interface JobOpening {
  id: string;
  title: string;
  salaryRange: string;
  location: string;
  type: string;
  area: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  href: string;
}