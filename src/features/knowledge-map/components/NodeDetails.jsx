import { useNavigate } from "react-router-dom";
import Icon from "../../../shared/ui/Icon";
import CircularProgress from "../../../shared/ui/CircularProgress";
import "./panel.css";

// Presentation-only mapping of module status to display copy.
const STATUS_LABELS = {
  locked: "Locked",
  available: "Not started",
  inProgress: "In progress",
  completed: "Completed",
  mastered: "Mastered",
};

export default function NodeDetails({ details }) {
  const navigate = useNavigate();
  const { module, status, progress, prerequisites, skills } = details;

  return (
    <aside className="context-panel" key={module.id}>
      <div className="context-panel-header">
        <div className="context-panel-icon">
          <Icon name={module.icon} size={20} />
        </div>
        <CircularProgress
          value={progress.percent}
          size={36}
          strokeWidth={3.2}
          complete={progress.complete}
        />
      </div>

      <h2 className="context-panel-title">{module.title}</h2>
      <p className="context-panel-description">{module.description}</p>

      <dl className="context-panel-facts">
        <div>
          <dt>Estimated time</dt>
          <dd>{module.estimatedTime}</dd>
        </div>
        <div>
          <dt>Level</dt>
          <dd>{module.level}</dd>
        </div>
        <div>
          <dt>Category</dt>
          <dd>{module.category}</dd>
        </div>
        <div>
          <dt>Status</dt>
          <dd>{STATUS_LABELS[status] ?? status}</dd>
        </div>
      </dl>

      {prerequisites.length > 0 && (
        <div className="context-panel-section">
          <h4>Prerequisites</h4>
          <ul className="context-panel-prereqs">
            {prerequisites.map((prereq) => (
              <li key={prereq.id} className="context-panel-prereq">
                <span
                  className={`context-panel-prereq-status${prereq.complete ? " is-complete" : ""}`}
                >
                  <Icon name={prereq.complete ? "check" : "lock"} size={10} strokeWidth={2.4} />
                </span>
                {prereq.title}
              </li>
            ))}
          </ul>
        </div>
      )}

      {skills.length > 0 && (
        <div className="context-panel-section">
          <h4>Related skills</h4>
          <div className="context-panel-skills">
            {skills.map((skill) => (
              <span key={skill} className="context-panel-skill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="context-panel-section">
        <h4>What you&rsquo;ll learn</h4>
        <ul>
          {module.whatYouWillLearn.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <button
        type="button"
        className="context-panel-cta"
        onClick={() => navigate(`/topic/${module.id}`)}
      >
        {progress.complete ? "Review module" : "Start Learning"}
        <Icon name="chevronRight" size={16} />
      </button>
    </aside>
  );
}
