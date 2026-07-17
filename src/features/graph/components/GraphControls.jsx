import Icon from "../../../shared/ui/Icon";
import { zoomIn, zoomOut, resetGraph } from "../engine/commands";

export default function GraphControls() {
  return (
    <div className="knowledge-graph-controls" role="group" aria-label="Zoom controls">
      <button type="button" onClick={zoomIn} aria-label="Zoom in">
        <Icon name="plus" size={16} />
      </button>
      <button type="button" onClick={zoomOut} aria-label="Zoom out">
        <Icon name="minus" size={16} />
      </button>
      <button type="button" onClick={resetGraph} aria-label="Reset zoom">
        <Icon name="refresh" size={15} />
      </button>
    </div>
  );
}
