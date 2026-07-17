import { useParams, Link } from "react-router-dom";
import Icon from "../shared/ui/Icon";
import { getModuleById, getModuleProgress } from "../features/learning";
import "./Topic.css";

function Section({ title, children }) {
  return (
    <section className="topic-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function Topic() {
  const { id } = useParams();
  const module = getModuleById(id);

  if (!module) {
    return (
      <div className="topic-page">
        <div className="topic-content">
          <h1 className="topic-title">Module not found</h1>
          <p className="topic-description">This module doesn&rsquo;t exist in the knowledge graph.</p>
          <Link to="/" className="topic-back-link">
            <Icon name="chevronRight" size={13} className="topic-back-icon" />
            Back to graph
          </Link>
        </div>
      </div>
    );
  }

  const { content } = module;
  const { percent: progress, complete } = getModuleProgress(module);
  const parent = module.parentId ? getModuleById(module.parentId) : null;

  return (
    <div className="topic-page">
      <div className="topic-content">
        <nav className="topic-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {parent && (
            <>
              <Icon name="chevronRight" size={13} />
              <Link to="/">{parent.title}</Link>
            </>
          )}
          <Icon name="chevronRight" size={13} />
          <span aria-current="page">{module.title}</span>
        </nav>

        <div className="topic-icon">
          <Icon name={module.icon} size={22} />
        </div>

        <h1 className="topic-title">{module.title}</h1>
        <p className="topic-description">{module.description}</p>

        <div className="topic-meta">
          <span className="topic-meta-item">
            <Icon name="clock" size={14} />
            {module.estimatedTime}
          </span>
          <span className="topic-meta-item">
            <Icon name="layers" size={14} />
            {module.level}
          </span>
          <span className="topic-meta-item">{module.category}</span>
        </div>

        <div className="topic-progress">
          <div className="topic-progress-bar">
            <div
              className={`topic-progress-fill${complete ? " is-complete" : ""}`}
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="topic-progress-label">
            {module.lessonsCompleted} / {module.lessonsTotal} lessons &middot; {progress}%
          </span>
        </div>

        <Section title="Overview">
          <p>{content.overview}</p>
        </Section>

        <Section title="Responsibilities">
          <ul>
            {content.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title="Process Flow">
          <ol className="topic-flow">
            {content.processFlow.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </Section>

        <Section title="Real Examples">
          <ul>
            {content.realExamples.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title="Common Errors">
          <ul>
            {content.commonErrors.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title="Best Practices">
          <ul>
            {content.bestPractices.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Section>

        <Section title="Related SAP Transactions">
          <div className="topic-transactions">
            {content.relatedSapTransactions.map((tx) => (
              <div className="topic-transaction" key={tx.code}>
                <span className="topic-transaction-code">{tx.code}</span>
                <span className="topic-transaction-desc">{tx.description}</span>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
