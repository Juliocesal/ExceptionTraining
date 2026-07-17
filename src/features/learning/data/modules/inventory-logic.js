export default {
  id: "inventory-logic",
  parentId: "inbound",
  title: "Inventory Logic",
  icon: "list",
  category: "Inbound",
  level: "Intermediate",
  estimatedTime: "9 min",
  lessonsTotal: 5,
  lessonsCompleted: 0,
  description:
    "How the warehouse management system tracks stock quantity, location and status behind the scenes.",
  skills: ["Stock status interpretation", "Cycle count support", "Variance analysis"],
  evaluation: { type: "quiz", questions: 5, passScore: 80 },
  whatYouWillLearn: [
    "The difference between available, allocated and blocked stock",
    "How cycle counts reconcile system and physical inventory",
    "How to read a stock overview to diagnose an exception",
  ],
  content: {
    overview:
      "Inventory logic is the model the system uses to represent stock — quantity, location, status and ownership. Understanding it is what lets an Exception Clerk diagnose why a number on screen doesn't match what's on the shelf.",
    responsibilities: [
      "Interpret stock status categories correctly during investigation",
      "Support cycle count reconciliation",
      "Identify system-level causes of recurring discrepancies",
    ],
    processFlow: [
      "Stock movement is posted (receipt, transfer, pick, adjustment)",
      "System updates quantity and status at the affected location",
      "Cycle counts periodically validate system against physical stock",
      "Variances are investigated and adjusted",
    ],
    realExamples: [
      "Available stock shows zero even though a bin is physically full — investigation shows the stock is sitting in a blocked quality-inspection status.",
    ],
    commonErrors: [
      "Treating blocked or allocated stock as available",
      "Adjusting quantity without identifying which status bucket is wrong",
    ],
    bestPractices: [
      "Check stock status before assuming a quantity error",
      "Use cycle count data to spot systemic patterns, not just one-off fixes",
    ],
    relatedSapTransactions: [
      { code: "MB52", description: "List of warehouse stocks on hand" },
      { code: "LX03", description: "Warehouse stock overview" },
    ],
  },
};
