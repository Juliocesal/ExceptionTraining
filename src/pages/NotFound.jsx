import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Page not found</h1>
      <p>The route you requested doesn&rsquo;t exist in this knowledge graph.</p>
      <Link to="/">Back to the graph</Link>
    </div>
  );
}
