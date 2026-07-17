import TopBar from "../shared/ui/TopBar";
import {
  KnowledgeCanvas,
  NodeDetails,
  ProgressSummary,
  useKnowledgeMap,
} from "../features/knowledge-map";
import "./Home.css";

export default function Home() {
  const { search, setSearch, selectedDetails, summary, recommended } = useKnowledgeMap();

  return (
    <div className="home">
      <TopBar search={search} onSearchChange={setSearch} progress={summary.overallProgress} />
      <div className="home-body">
        <KnowledgeCanvas />
        {selectedDetails ? (
          <NodeDetails details={selectedDetails} />
        ) : (
          <ProgressSummary summary={summary} recommended={recommended} />
        )}
      </div>
    </div>
  );
}
