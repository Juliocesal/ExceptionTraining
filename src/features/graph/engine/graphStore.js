// Minimal dependency-free external store, compatible with useSyncExternalStore.
function createStore(initialState) {
  let state = initialState;
  const listeners = new Set();

  return {
    getState: () => state,
    setState(update) {
      const partial = typeof update === "function" ? update(state) : update;
      state = { ...state, ...partial };
      listeners.forEach((listener) => listener());
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

export const initialCamera = { x: 0, y: 0, zoom: 1 };

// All graph state lives here: graph model, selection, focus, hover,
// expansion and camera. Components never own graph state locally.
export const graphStore = createStore({
  nodes: [],
  edges: [],
  selectedNodeId: null,
  hoveredNodeId: null,
  focusedNodeId: null,
  expandedNodeIds: [],
  camera: initialCamera,
});
