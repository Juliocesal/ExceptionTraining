// Canvas position (percent coordinates) for every node in the knowledge graph.
// Connecting a new module to the graph = add its position here (edges derive
// from the module's parentId).
export const graphLayout = {
  "exception-clerk": { x: 50, y: 44 },
  "inbound": { x: 30, y: 44 },
  "outbound": { x: 70, y: 44 },
  "receiving": { x: 12, y: 20 },
  "putaway": { x: 12, y: 68 },
  "inventory-logic": { x: 30, y: 84 },
  "picking": { x: 88, y: 20 },
  "packing": { x: 88, y: 68 },
  "shipping": { x: 70, y: 84 },
  "sap": { x: -10, y: 10 },
  "or": { x: 60, y: -30 },
};
