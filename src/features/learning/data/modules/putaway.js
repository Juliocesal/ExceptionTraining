export default {
  id: "putaway",
  parentId: "inbound",
  title: "Putaway",
  icon: "truck",
  category: "Inbound",
  level: "Beginner",
  estimatedTime: "7 min",
  lessonsTotal: 6,
  lessonsCompleted: 6,
  description: "Moving received stock from the dock into its confirmed storage location.",
  skills: ["Location confirmation", "Bin management", "Discrepancy reporting"],
  evaluation: { type: "quiz", questions: 6, passScore: 80 },
  whatYouWillLearn: [
    "How putaway tasks are generated and assigned",
    "How to resolve a bin discrepancy at confirmation",
    "How location strategy affects downstream picking",
  ],
  content: {
    overview:
      "Putaway confirms stock into a physical bin location. A confirmed putaway that doesn't match reality is one of the most common root causes of later picking exceptions.",
    responsibilities: [
      "Confirm putaway tasks against the actual physical location used",
      "Report bin capacity or condition issues",
      "Reconcile discrepancies between system and physical location",
    ],
    processFlow: [
      "System generates a putaway task after goods receipt",
      "Operator transports goods to the suggested location",
      "Location is scanned and confirmed",
      "System updates stock location record",
    ],
    realExamples: [
      "An operator can't fit stock into the suggested bin and uses an overflow location without confirming the change — the clerk corrects the location record after a cycle count flags the mismatch.",
    ],
    commonErrors: [
      "Confirming a putaway task without scanning the actual location used",
      "Ignoring bin capacity warnings",
    ],
    bestPractices: [
      "Always scan the location actually used, even under time pressure",
      "Escalate recurring capacity issues rather than repeatedly overriding them",
    ],
    relatedSapTransactions: [
      { code: "LT04", description: "Create transfer order" },
      { code: "LT12", description: "Confirm transfer order" },
    ],
  },
};
