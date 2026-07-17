// Node type registry. Features register their node components here;
// the renderer resolves components dynamically — no switch statements.
const registry = new Map();

export const nodeRegistry = {
  register(type, Component) {
    registry.set(type, Component);
  },
  get(type) {
    return registry.get(type) ?? null;
  },
  has(type) {
    return registry.has(type);
  },
  types() {
    return [...registry.keys()];
  },
};
