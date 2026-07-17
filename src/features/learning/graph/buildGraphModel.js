// Adapter: translates learning modules into the graph engine's neutral
// model ({ nodes, edges }). This is the only place the two domains meet.
import { modules, getModuleById } from "../data";
import { graphLayout } from "../data/graphLayout";
import {
  ModuleStatus,
  isComplete,
  getModuleProgress,
  getModuleStatus,
} from "../services/progress";

export function buildGraphModel({ query = "" } = {}) {
  const q = query.trim().toLowerCase();

  const nodes = modules.map((module) => {
    const status = getModuleStatus(module);
    return {
      id: module.id,
      type: "module",
      position: graphLayout[module.id] ?? { x: 50, y: 50 },
      data: {
        title: module.title,
        icon: module.icon,
        lessonsCompleted: module.lessonsCompleted,
        lessonsTotal: module.lessonsTotal,
        progress: getModuleProgress(module).percent,
        status,
        locked: status === ModuleStatus.LOCKED,
        complete: status === ModuleStatus.COMPLETED || status === ModuleStatus.MASTERED,
        dimmed: q.length > 0 && !module.title.toLowerCase().includes(q),
      },
    };
  });

  // Edges derive from prerequisites (one edge per prerequisite), so a module
  // with multiple prerequisites simply renders multiple connections.
  const edges = modules.flatMap((module) =>
    module.prerequisites
      .map((prereqId) => getModuleById(prereqId))
      .filter(Boolean)
      .map((prereq) => ({
        id: `${prereq.id}-${module.id}`,
        source: prereq.id,
        target: module.id,
        active: isComplete(prereq),
      }))
  );

  return { nodes, edges };
}
