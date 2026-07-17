export default {
  id: "sap",
  parentId: "exception-clerk",
  title: "SAP",
  icon: "layers",
  category: "System",
  level: "Beginner",
  estimatedTime: "7 min",
  lessonsTotal: 6,
  lessonsCompleted: 0,
  description: "Core SAP transactions and logic used by the Exception Clerk.",
  skills: ["SAP navigation", "Transaction interpretation", "Exception troubleshooting"],
  evaluation: { type: "quiz", questions: 6, passScore: 80 },
  whatYouWillLearn: [
    "The main SAP transactions used in exception handling",
    "How to interpret transaction outputs and stock data",
    "When to use SAP records to confirm a warehouse exception",
  ],
  content: {
    overview:
      "SAP is the system of record for warehouse movements, inventory visibility and transaction history. Understanding the core transactions helps the clerk investigate issues without guessing.",
    responsibilities: [
      "Navigate the key SAP transactions used in daily exception handling",
      "Read and interpret stock and movement information",
      "Use SAP data to support a warehouse investigation",
    ],
    processFlow: [
      "An exception is raised in the warehouse process",
      "The clerk opens the relevant SAP transaction",
      "The system data is reviewed against the physical situation",
      "The issue is corrected or escalated based on the evidence",
    ],
    realExamples: [
      "A stock discrepancy is traced through SAP history to an unposted goods movement.",
    ],
    commonErrors: [
      "Working from memory instead of transaction history",
      "Using the wrong transaction for the task at hand",
    ],
    bestPractices: [
      "Confirm the exact transaction before acting on a discrepancy",
      "Document the SAP evidence used to resolve the exception",
    ],
    relatedSapTransactions: [
      { code: "MB52", description: "List of warehouse stocks on hand" },
      { code: "LX03", description: "Warehouse stock overview" },
    ],
  },
};
