export default {
  id: "receiving",
  parentId: "inbound",
  title: "Receiving",
  icon: "package",
  category: "Inbound",
  level: "Beginner",
  estimatedTime: "8 min",
  lessonsTotal: 8,
  lessonsCompleted: 3,
  description:
    "Verifying and posting incoming goods against purchase orders and advance shipping notices.",
  skills: ["PO matching", "Quantity verification", "Damage handling"],
  evaluation: { type: "quiz", questions: 8, passScore: 80 },
  whatYouWillLearn: [
    "How to match a delivery against its purchase order",
    "How to handle over-, under- and mis-shipments",
    "When to hold a receipt for quality inspection",
  ],
  content: {
    overview:
      "Receiving is the first checkpoint for inventory accuracy. Every quantity or quality issue caught here saves a downstream exception later in putaway, picking, or shipping.",
    responsibilities: [
      "Check received quantities against the purchase order and ASN",
      "Inspect flagged or high-risk supplier lines",
      "Post goods receipt accurately and promptly",
    ],
    processFlow: [
      "Driver checks in and dock door is assigned",
      "Cartons are unloaded and counted",
      "Count is reconciled against the purchase order",
      "Goods receipt is posted in SAP",
      "Putaway task is released",
    ],
    realExamples: [
      "A PO calls for 200 units, but only 180 arrive — the clerk posts a partial receipt and opens a short-shipment case with the supplier.",
      "A carton is damaged in transit — the clerk quarantines the line and routes it to quality inspection instead of posting it as sellable stock.",
    ],
    commonErrors: [
      "Posting the full PO quantity without a physical recount",
      "Missing a lot or expiry date required for traceability",
    ],
    bestPractices: [
      "Always count before you post, never post before you count",
      "Photograph damaged cartons before quarantining them",
    ],
    relatedSapTransactions: [
      { code: "MIGO", description: "Goods movement / receipt posting" },
      { code: "ME23N", description: "Display purchase order" },
    ],
  },
};
