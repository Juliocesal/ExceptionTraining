// Application service for the knowledge map. Assembles view models from the
// learning domain and prepares the model consumed by the graph engine.
// No business rules live here — those stay in learning/services/progress.js.
import {
  modules,
  ModuleStatus,
  buildGraphModel,
  getModuleById,
  getModuleStatus,
  getModuleProgress,
  getPrerequisites,
  getLearningStats,
  isComplete,
} from "../../learning";

export function buildKnowledgeGraph({ query = "" } = {}) {
  return buildGraphModel({ query });
}

export function getNodeDetails(moduleId) {
  const module = getModuleById(moduleId);
  if (!module) return null;

  return {
    module,
    status: getModuleStatus(module),
    progress: getModuleProgress(module),
    prerequisites: getPrerequisites(module).map((prereq) => ({
      id: prereq.id,
      title: prereq.title,
      complete: isComplete(prereq),
    })),
    skills: module.skills,
  };
}

export function getMapSummary() {
  return getLearningStats();
}

// The module a user should pick up next: an in-progress module first,
// otherwise the first unlocked module they haven't started.
export function getRecommendedNext() {
  const firstWithStatus = (status) =>
    modules.find((module) => getModuleStatus(module) === status) ?? null;
  return firstWithStatus(ModuleStatus.IN_PROGRESS) ?? firstWithStatus(ModuleStatus.AVAILABLE);
}
