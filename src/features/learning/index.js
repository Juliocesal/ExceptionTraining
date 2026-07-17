// Learning engine public API. Importing this module also registers the
// learning node types with the graph engine.
import "./graph/registerNodeTypes";

export { modules, getModuleById } from "./data";
export { buildGraphModel } from "./graph/buildGraphModel";
export {
  ModuleStatus,
  isComplete,
  isLocked,
  getPrerequisites,
  getModuleStatus,
  getModuleProgress,
  getOverallProgress,
  getLearningStats,
} from "./services/progress";
