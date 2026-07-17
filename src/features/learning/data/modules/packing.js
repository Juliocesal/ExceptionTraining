export default {
  id: "packing",
  parentId: "outbound",
  title: "Packing",
  icon: "clipboard",
  category: "Outbound",
  level: "Beginner",
  estimatedTime: "6 min",
  lessonsTotal: 5,
  lessonsCompleted: 0,
  description: "Consolidating picked items into cartons and preparing them for manifest.",
  skills: ["Carton validation", "Weight checks", "Packing standards"],
  evaluation: { type: "quiz", questions: 5, passScore: 80 },
  whatYouWillLearn: [
    "How to validate a carton against its pick before sealing it",
    "How packing exceptions differ from picking exceptions",
    "What information a carton needs before it can be manifested",
  ],
  content: {
    overview:
      "Packing is the last checkpoint before a carton is sealed and manifested. Catching an exception here is far cheaper than a customer-reported shortage after delivery.",
    responsibilities: [
      "Validate carton contents against the pick confirmation",
      "Apply correct packing materials for fragile or hazardous items",
      "Flag unresolved discrepancies before sealing",
    ],
    processFlow: [
      "Picked tote arrives at the pack station",
      "Contents are verified against the order",
      "Carton is packed, weighed and labeled",
      "Carton is staged for manifest",
    ],
    realExamples: [
      "A carton weight check flags an unexpected variance — the packer opens the carton and finds an extra unit that belongs to a different order.",
    ],
    commonErrors: [
      "Sealing a carton without resolving a flagged quantity mismatch",
      "Using the wrong packing material for a fragile item, causing damage claims",
    ],
    bestPractices: [
      "Use weight checks as a quick sanity check before sealing",
      "Escalate mismatches immediately rather than packing around them",
    ],
    relatedSapTransactions: [
      { code: "VL02N", description: "Change outbound delivery" },
      { code: "VT02N", description: "Change shipment" },
    ],
  },
};
