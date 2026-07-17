export default {
  id: "outbound",
  parentId: "exception-clerk",
  title: "Outbound",
  icon: "arrowUp",
  category: "Process Area",
  level: "Foundational",
  estimatedTime: "10 min",
  lessonsTotal: 3,
  lessonsCompleted: 3,
  description:
    "Everything that happens from an order being released to stock leaving the building on a truck.",
  skills: ["Order fulfillment", "Wave awareness", "Cut-off management"],
  evaluation: { type: "quiz", questions: 5, passScore: 80 },
  whatYouWillLearn: [
    "The stages an order passes through on its way out of the warehouse",
    "Where outbound exceptions typically surface",
    "How picking, packing and shipping connect operationally",
  ],
  content: {
    overview:
      "Outbound covers order release through picking, packing and shipping. Exceptions here tend to be time-sensitive because they directly affect carrier cut-off times and customer delivery promises.",
    responsibilities: [
      "Ensure picked quantities match order requirements",
      "Validate packed cartons before manifest and load",
      "Resolve short-picks and mis-picks before the shipping deadline",
    ],
    processFlow: [
      "Order is released and wave-planned",
      "Pick list is generated and executed on the floor",
      "Picked goods are packed and staged",
      "Carton is manifested and loaded for shipping",
    ],
    realExamples: [
      "A pick confirms 8 units against a 10-unit order line — the clerk traces the shortage to a bin discrepancy and re-triggers a partial pick before cut-off.",
    ],
    commonErrors: [
      "Allowing a short-pick to ship without a documented reason code",
      "Manifesting a carton before packing exceptions are resolved",
    ],
    bestPractices: [
      "Resolve pick exceptions before the wave reaches packing",
      "Use reason codes consistently so shortage trends are visible in reporting",
    ],
    relatedSapTransactions: [
      { code: "VL06O", description: "Outbound delivery monitor" },
      { code: "VT02N", description: "Change shipment" },
    ],
  },
};
