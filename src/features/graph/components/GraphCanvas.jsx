import { useEffect, useRef, useState } from "react";
import { useGraphState } from "../hooks/useGraphState";
import { nodeRegistry } from "../registry/nodeRegistry";
import GraphEdges from "./GraphEdges";
import GraphControls from "./GraphControls";
import { panGraph } from "../engine/commands";
import "./GraphCanvas.css";

// Pure renderer: draws whatever graph model is in the store, resolving node
// components through the registry. Knows nothing about the domain behind nodes.
export default function GraphCanvas() {
  const nodes = useGraphState((s) => s.nodes);
  const edges = useGraphState((s) => s.edges);
  const camera = useGraphState((s) => s.camera);
  const selectedNodeId = useGraphState((s) => s.selectedNodeId);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  const handleMouseDown = (event) => {
    dragStartRef.current = { x: event.clientX, y: event.clientY };
    setIsDragging(true);  
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const dx = event.clientX - dragStartRef.current.x;
    const dy = event.clientY - dragStartRef.current.y;
    dragStartRef.current = { x: event.clientX, y: event.clientY };
    panGraph(dx * 0.08, dy * 0.08);
  };

  return (
    <div className="knowledge-graph">
      <div
        className={`knowledge-graph-canvas${isDragging ? " is-dragging" : ""}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        style={{ transform: `translate(${camera.x}%, ${camera.y}%) scale(${camera.zoom})` }}
      >
        <GraphEdges nodes={nodes} edges={edges} />

        {nodes.map((node) => {
          const NodeComponent = nodeRegistry.get(node.type);
          if (!NodeComponent) return null;
          return (
            <NodeComponent
              key={node.id}
              node={node}
              selected={node.id === selectedNodeId}
              style={{ left: `${node.position.x}%`, top: `${node.position.y}%` }}
            />
          );
        })}
      </div>

      <GraphControls />
    </div>
  );
}
