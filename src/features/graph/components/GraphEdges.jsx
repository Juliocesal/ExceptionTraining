function edgePath(from, to) {
  const midY = (from.y + to.y) / 2;
  return `M ${from.x} ${from.y} C ${from.x} ${midY}, ${to.x} ${midY}, ${to.x} ${to.y}`;
}

export default function GraphEdges({ nodes, edges }) {
  const byId = new Map(nodes.map((node) => [node.id, node]));

  return (
    <svg className="knowledge-graph-edges" viewBox="0 0 100 100" preserveAspectRatio="none">
      {edges.map((edge) => {
        const from = byId.get(edge.source);
        const to = byId.get(edge.target);
        if (!from || !to) return null;
        return (
          <path
            key={edge.id}
            d={edgePath(from.position, to.position)}
            className={`knowledge-graph-edge${edge.active ? " is-active" : ""}`}
            vectorEffect="non-scaling-stroke"
          />
        );
      })}
    </svg>
  );
}
