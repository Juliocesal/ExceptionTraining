export default {
  id: "inbound",
  parentId: "exception-clerk",
  title: "Inbound",
  icon: "arrowDown",
  category: "Process Area",
  level: "Foundational",
  estimatedTime: "10 min",
  lessonsTotal: 3,
  lessonsCompleted: 3,
  description:
    "Everything that happens from a delivery arriving at the dock to stock becoming available in the warehouse.",
  skills: ["Goods receipt", "ASN reconciliation", "Inventory accuracy"],
  evaluation: { type: "quiz", questions: 5, passScore: 80 },
  whatYouWillLearn: [
    "The stages goods pass through before becoming sellable inventory",
    "Where exceptions are most likely to originate on the inbound side",
    "How receiving, putaway and inventory logic connect",
  ],
  content: {
    overview:
      "Inbound covers every step between a truck arriving at the dock and stock being confirmed and available in the warehouse management system. It is the area where the majority of quantity and quality exceptions originate, making it foundational knowledge for the Exception Clerk role.",
    responsibilities: [
      "Own the accuracy of goods receipt against purchase orders and ASNs",
      "Ensure putaway confirmations match physical bin locations",
      "Maintain inventory integrity from dock to storage",
    ],
    processFlow: [
      "Advance shipping notice (ASN) received and reviewed",
      "Truck arrives and is checked in at the dock door",
      "Goods are received and counted against the purchase order",
      "Putaway task is generated and executed",
      "Stock becomes available in the system",
    ],
    realExamples: [
      "A shipment arrives with 3 fewer cartons than the ASN indicates — the discrepancy is logged before receipt is posted, preventing a downstream stock-out exception.",
    ],
    commonErrors: [
      "Posting a goods receipt before physically verifying carton count",
      "Skipping quality inspection on flagged supplier lines",
    ],
    bestPractices: [
      "Reconcile ASN, purchase order, and physical count before posting",
      "Flag supplier-level discrepancy trends to procurement",
    ],
    relatedSapTransactions: [
      { code: "VL31N", description: "Create inbound delivery" },
      { code: "MIGO", description: "Goods movement / receipt posting" },
    ],
  },
};
