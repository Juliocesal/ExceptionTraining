export default {
  id: "shipping",
  parentId: "outbound",
  title: "Shipping",
  icon: "ship",
  category: "Outbound",
  level: "Intermediate",
  estimatedTime: "7 min",
  lessonsTotal: 6,
  lessonsCompleted: 0,
  description: "Manifesting, loading and dispatching completed cartons to the carrier.",
  skills: ["Manifest reconciliation", "Load confirmation", "Carrier coordination"],
  evaluation: { type: "quiz", questions: 6, passScore: 80 },
  whatYouWillLearn: [
    "How manifest and load sequencing works",
    "How to handle a carrier cut-off conflict",
    "What documentation must accompany a shipment",
  ],
  content: {
    overview:
      "Shipping is the final handoff to the carrier. Exceptions here are almost always time-critical, since a missed cut-off delays an entire order rather than a single line.",
    responsibilities: [
      "Ensure manifested cartons match what is physically loaded",
      "Resolve documentation gaps before dispatch",
      "Coordinate with carriers on cut-off conflicts",
    ],
    processFlow: [
      "Cartons are staged by carrier and route",
      "Manifest is generated and reviewed",
      "Cartons are loaded and load is confirmed",
      "Shipment departs and tracking is activated",
    ],
    realExamples: [
      "A carton is staged for the wrong carrier lane — the clerk catches the mismatch during load confirmation and reroutes it before departure.",
    ],
    commonErrors: [
      "Loading a carton before its manifest documentation is complete",
      "Missing a carrier cut-off due to an unresolved packing exception",
    ],
    bestPractices: [
      "Reconcile manifest against physical load count before departure",
      "Communicate at-risk cut-offs to the supervisor as early as possible",
    ],
    relatedSapTransactions: [
      { code: "VT02N", description: "Change shipment" },
      { code: "VL06O", description: "Outbound delivery monitor" },
    ],
  },
};
