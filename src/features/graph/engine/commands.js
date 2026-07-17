// Command layer — the public API of the graph. Features and components
// interact with the graph exclusively through these commands.
import { graphStore } from "./graphStore";
import { cameraController } from "./cameraController";

export function loadGraph({ nodes, edges }) {
  graphStore.setState({ nodes, edges });
}

export function selectNode(nodeId) {
  graphStore.setState({ selectedNodeId: nodeId });
}

export function clearSelection() {
  graphStore.setState({ selectedNodeId: null });
}

export function hoverNode(nodeId) {
  graphStore.setState({ hoveredNodeId: nodeId });
}

export function toggleNodeExpanded(nodeId) {
  graphStore.setState((state) => ({
    expandedNodeIds: state.expandedNodeIds.includes(nodeId)
      ? state.expandedNodeIds.filter((id) => id !== nodeId)
      : [...state.expandedNodeIds, nodeId],
  }));
}

export function focusNode(nodeId) {
  selectNode(nodeId);
  cameraController.focus(nodeId);
}

export function centerGraph() {
  cameraController.center();
}

export function fitGraph() {
  cameraController.fit();
}

export function zoomIn() {
  cameraController.zoomIn();
}

export function zoomOut() {
  cameraController.zoomOut();
}

export function panGraph(dx, dy) {
  cameraController.pan(dx, dy);
}

export function resetGraph() {
  cameraController.reset();
}
