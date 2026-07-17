export default {
  id: "exception-clerk",
  parentId: null,
  title: "Exception Clerk",
  icon: "user",
  category: "Role",
  level: "Overview",
  estimatedTime: "10 min",
  lessonsTotal: 4,
  lessonsCompleted: 4,
  description:
    "El Exception Clerk desempeña un papel fundamental al garantizar la continuidad de las operaciones del almacén mediante la identificación y resolución de discrepancias que impactan los procesos de Inbound y Outbound.",
  skills: [
  "Gestión de excepciones",
  "Análisis de causa raíz",
  "Navegación en SAP",
  "Criterio para escalamiento"
],
  evaluation: { type: "quiz", questions: 6, passScore: 80 },
  whatYouWillLearn: [
    "How the Exception Clerk role fits into the wider warehouse operation",
    "When to escalate versus resolve independently",
    "The systems and transactions used day to day",
  ],
  content: {
    overview:
      "The Exception Clerk sits at the intersection of Inbound and Outbound operations, handling the discrepancies — damaged goods, quantity mismatches, mis-picks, missing documentation — that would otherwise stall the warehouse. This role requires working knowledge of both flows and the judgment to know when to fix an issue directly versus escalate it to a supervisor.",
    responsibilities: [
      "Identify and log exceptions raised during receiving, putaway, picking, packing and shipping",
      "Investigate root cause using SAP transaction history and physical stock checks",
      "Correct system records to match physical reality, or flag for supervisor review",
      "Communicate recurring issues to process owners to prevent repeat exceptions",
    ],
    processFlow: [
      "Exception is raised (system alert, scan mismatch, or manual report)",
      "Exception Clerk reviews the associated order and transaction history",
      "Physical verification is performed at the location in question",
      "Correction is applied in SAP, or the case is escalated with supporting evidence",
      "Resolution is logged for trend reporting",
    ],
    realExamples: [
      "A putaway confirmation shows 50 units at location A-12-03, but a cycle count finds only 42 — the clerk reconciles the variance and updates the bin record.",
      "An outbound pick list references a SKU that has zero available inventory despite system stock showing 20 units — the clerk traces it to an un-posted goods movement.",
    ],
    commonErrors: [
      "Correcting system quantities without a physical recount",
      "Closing an exception without documenting root cause, causing repeat issues",
      "Escalating routine variances that fall within tolerance",
    ],
    bestPractices: [
      "Always verify physically before adjusting a system record",
      "Document root cause, not just the fix, for every exception",
      "Batch similar exceptions to identify systemic issues early",
    ],
    relatedSapTransactions: [
      { code: "LX03", description: "Warehouse stock overview" },
      { code: "MB52", description: "List of warehouse stocks on hand" },
    ],
  },
};
