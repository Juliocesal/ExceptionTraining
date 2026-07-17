export default {
  id: "picking",
  parentId: "outbound",
  title: "Picking",
  icon: "target",
  category: "Outbound",
  level: "Beginner",
  estimatedTime: "8 min",
  lessonsTotal: 7,
  lessonsCompleted: 2,
  description: "Selecting the correct items and quantities from storage to fulfill an order.",
  skills: ["Pick accuracy", "Short-pick resolution", "Priority management"],
  evaluation: { type: "quiz", questions: 7, passScore: 80 },
  whatYouWillLearn: [
    "How pick lists are generated and prioritized",
    "How to handle a short-pick without missing a shipping deadline",
    "How mis-picks are traced back to their source",
  ],
  content: {
    overview:
      "Picking translates an order into physical action. Because it feeds directly into packing and shipping, exceptions here are the most time-critical the clerk will handle.",
    responsibilities: [
      "Resolve short-picks and location discrepancies in real time",
      "Confirm pick accuracy against the order",
      "Re-trigger picks when a discrepancy is found",
    ],
    processFlow: [
      "Order is wave-planned and pick list generated",
      "Picker travels to the assigned location",
      "Item and quantity are scanned and confirmed",
      "Exceptions are flagged for immediate resolution",
    ],
    realExamples: [
      "A picker scans a location and finds it empty despite system stock showing 15 units — the clerk checks putaway history and finds an unconfirmed transfer.",
    ],
    commonErrors: [
      "Substituting a similar SKU without authorization",
      "Letting a short-pick sit unresolved past the wave deadline",
    ],
    bestPractices: [
      "Treat every short-pick as a signal to check inventory logic, not just re-pick",
      "Prioritize exceptions closest to their shipping cut-off",
    ],
    relatedSapTransactions: [
      { code: "LT04", description: "Create transfer order (pick)" },
      { code: "VL06O", description: "Outbound delivery monitor" },
    ],
  },
};
