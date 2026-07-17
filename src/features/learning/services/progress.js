// Progress and prerequisite rules for learning modules.
// Currently backed by static module data; swap the data source here when
// user-specific progress arrives — nothing else needs to change.
import { modules, getModuleById } from "../data";

export const ModuleStatus = {
  LOCKED: "locked",
  AVAILABLE: "available",
  IN_PROGRESS: "inProgress",
  COMPLETED: "completed",
  MASTERED: "mastered",
};

export function isComplete(module) {
  return module.lessonsTotal > 0 && module.lessonsCompleted >= module.lessonsTotal;
}

export function getPrerequisites(module) {
  return (module.prerequisites ?? []).map(getModuleById).filter(Boolean);
}

// A module is locked until every prerequisite is complete.
// Unlocking cascades automatically as progress data changes.
export function isLocked(module) {
  return getPrerequisites(module).some((prereq) => !isComplete(prereq));
}

// Placeholder until per-user attempt data exists (user profiles / Supabase).
function hasPassedEvaluation(module) {
  return Boolean(module.evaluation?.passed);
}

export function getModuleStatus(module) {
  if (isLocked(module)) return ModuleStatus.LOCKED;
  if (isComplete(module)) {
    return hasPassedEvaluation(module) ? ModuleStatus.MASTERED : ModuleStatus.COMPLETED;
  }
  if (module.lessonsCompleted > 0) return ModuleStatus.IN_PROGRESS;
  return ModuleStatus.AVAILABLE;
}

export function getModuleProgress(module) {
  const percent = module.lessonsTotal
    ? Math.round((module.lessonsCompleted / module.lessonsTotal) * 100)
    : 0;
  return { percent, complete: isComplete(module) };
}

export function getOverallProgress() {
  const total = modules.reduce((sum, m) => sum + m.lessonsTotal, 0);
  const completed = modules.reduce((sum, m) => sum + m.lessonsCompleted, 0);
  return total === 0 ? 0 : Math.round((completed / total) * 100);
}

export function getLearningStats() {
  return {
    overallProgress: getOverallProgress(),
    completedModules: modules.filter(isComplete).length,
    totalModules: modules.length,
  };
}
