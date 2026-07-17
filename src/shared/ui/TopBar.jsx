import { Link } from "react-router-dom";
import Icon from "./Icon";
import "./TopBar.css";

// Presentational only — progress and search state are supplied by the page.
export default function TopBar({ search, onSearchChange, progress }) {
  return (
    <header className="topbar">
      <Link to="/" className="topbar-brand">
        Exception Clerk Learning
      </Link>

      <div className="topbar-search">
        <Icon name="search" size={15} />
        <input
          type="search"
          placeholder="Search topics..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Search topics"
        />
      </div>

      <div className="topbar-right">
        <span className="topbar-progress">{progress}% complete</span>
        <div className="topbar-avatar" aria-hidden="true">
          EC
        </div>
      </div>
    </header>
  );
}
