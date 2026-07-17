// Knowledge-map product layer public API.
// Connects the graph engine, the learning domain and the progress system.
// Importing it also registers the learning node types with the graph engine.
import "../learning";

export { default as KnowledgeCanvas } from "./components/KnowledgeCanvas";
export { default as NodeDetails } from "./components/NodeDetails";
export { default as ProgressSummary } from "./components/ProgressSummary";
export { useKnowledgeMap } from "./hooks/useKnowledgeMap";
export {
  buildKnowledgeGraph,
  getNodeDetails,
  getMapSummary,
  getRecommendedNext,
} from "./services/mapService";
