import { graphStore, initialCamera } from "./graphStore";

const ZOOM_STEP = 0.15;
const MIN_ZOOM = 0.6;
const MAX_ZOOM = 1.6;

const clampZoom = (zoom) => Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, zoom));

function setCamera(patch) {
  graphStore.setState((state) => ({ camera: { ...state.camera, ...patch } }));
}

// Reusable camera controller. Any component (or command) can drive the
// viewport through these methods; nothing manipulates the camera directly.
export const cameraController = {
  focus(nodeId) {
    const node = graphStore.getState().nodes.find((n) => n.id === nodeId);
    if (!node) return;
    graphStore.setState({ focusedNodeId: nodeId });
    setCamera({ x: 50 - node.position.x, y: 50 - node.position.y });
  },

  center() {
    setCamera({ x: 0, y: 0 });
  },

  fit() {
    setCamera({ ...initialCamera });
  },

  zoomIn() {
    setCamera({ zoom: clampZoom(graphStore.getState().camera.zoom + ZOOM_STEP) });
  },

  zoomOut() {
    setCamera({ zoom: clampZoom(graphStore.getState().camera.zoom - ZOOM_STEP) });
  },

  pan(dx, dy) {
    const { x, y } = graphStore.getState().camera;
    setCamera({ x: x + dx, y: y + dy });
  },

  reset() {
    graphStore.setState({ focusedNodeId: null, camera: { ...initialCamera } });
  },
};
