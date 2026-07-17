import Icon from "../../../shared/ui/Icon";
import CircularProgress from "../../../shared/ui/CircularProgress";
import { selectNode, hoverNode } from "../../graph";
import "./ModuleNode.css";

// Learning-owned node type. Renders purely from node.data supplied by the
// adapter; talks back to the graph only through commands.
export default function ModuleNode({ node, selected, style }) {
  const { title, icon, lessonsCompleted, lessonsTotal, progress, locked, complete, dimmed } =
    node.data;

  const classes = ["node-card"];
  if (selected) classes.push("is-selected");
  if (locked) classes.push("is-locked");
  if (complete) classes.push("is-complete");
  if (dimmed) classes.push("is-dimmed");

  return (
    <button
      type="button"
      className={classes.join(" ")}
      style={style}
      onClick={() => !locked && selectNode(node.id)}
      onMouseEnter={() => hoverNode(node.id)}
      onMouseLeave={() => hoverNode(null)}
      disabled={locked}
      aria-pressed={selected}
      aria-label={`${title}${locked ? " (locked)" : ""}`}
      title={locked ? "Complete the parent module to unlock" : undefined}
    >
      <div className="node-card-top">
        <span className="node-card-icon">
          <Icon name={locked ? "lock" : icon} size={18} />
        </span>
        {complete ? (
          <span className="node-card-check">
            <Icon name="check" size={12} strokeWidth={2.4} />
          </span>
        ) : (
          !locked && <CircularProgress value={progress} size={28} strokeWidth={3} complete={complete} />
        )}
      </div>

      <div className="node-card-title">{title}</div>
      <div className="node-card-meta">
        {lessonsCompleted} / {lessonsTotal} Lessons
      </div>
    </button>
  );
}
