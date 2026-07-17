import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { useGraphState, loadGraph, clearSelection, resetGraph } from "../../graph";
import {
  buildKnowledgeGraph,
  getNodeDetails,
  getMapSummary,
  getRecommendedNext,
} from "../services/mapService";

// Page-level orchestration for the knowledge map: feeds the graph engine,
// tracks search, and resolves the selected node into a detail view model.
export function useKnowledgeMap() {
  const [search, setSearch] = useState("");
  const selectedNodeId = useGraphState((s) => s.selectedNodeId);

  useLayoutEffect(() => {
    loadGraph(buildKnowledgeGraph({ query: search }));
  }, [search]);

  useEffect(() => {
    return () => {
      clearSelection();
      resetGraph();
    };
  }, []);

  const selectedDetails = useMemo(
    () => (selectedNodeId ? getNodeDetails(selectedNodeId) : null),
    [selectedNodeId]
  );

  const summary = useMemo(() => getMapSummary(), []);
  const recommended = useMemo(() => getRecommendedNext(), []);

  return { search, setSearch, selectedDetails, summary, recommended };
}
