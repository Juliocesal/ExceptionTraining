import Icon from "../../../shared/ui/Icon";
import { selectNode } from "../../graph";
import "./panel.css";

// Shown in the side panel when no node is selected. Purely presentational —
// the summary and recommendation view models come from the map service.
export default function ProgressSummary({ summary, recommended }) {
  return (
    <aside className="context-panel">
      <div className="context-panel-empty">
        <div className="context-panel-empty-icon">
          <Icon name="layers" size={20} />
        </div>
        <h3>Explore the graph</h3>
        <p>Select any module to see its details, or continue where you left off.</p>

        {recommended && (
          <button
            type="button"
            className="context-panel-continue"
            onClick={() => selectNode(recommended.id)}
          >
            <span className="context-panel-continue-text">
              <span className="context-panel-continue-label">Continue learning</span>
              <span className="context-panel-continue-title">{recommended.title}</span>
            </span>
            <Icon name="chevronRight" size={16} className="context-panel-continue-icon" />
          </button>
        )}

        <div className="context-panel-stat">
          <span className="context-panel-stat-label">Overall progress</span>
          <span className="context-panel-stat-value">{summary.overallProgress}%</span>
        </div>
        <div className="context-panel-stat">
          <span className="context-panel-stat-label">Modules completed</span>
          <span className="context-panel-stat-value">
            {summary.completedModules} / {summary.totalModules}
          </span>
        </div>
      </div>
    </aside>
  );
}
