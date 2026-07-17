import { GraphCanvas } from "../../graph";

// Product-level canvas. Today it renders the engine's canvas directly;
// map-specific chrome (legends, filters, plant switcher) mounts here later
// without touching the graph engine.
export default function KnowledgeCanvas() {
  return <GraphCanvas />;
}
