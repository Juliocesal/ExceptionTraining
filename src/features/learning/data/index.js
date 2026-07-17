// Module registry. Adding a new module = create its file in ./modules
// and add it to the list below. Nothing else in the codebase changes.
import exceptionClerk from "./modules/exception-clerk";
import inbound from "./modules/inbound";
import outbound from "./modules/outbound";
import receiving from "./modules/receiving";
import putaway from "./modules/putaway";
import inventoryLogic from "./modules/inventory-logic";
import picking from "./modules/picking";
import packing from "./modules/packing";
import shipping from "./modules/shipping";
import sap from "./modules/sap";
import or from "./modules/or";

const rawModules = [
  exceptionClerk,
  inbound,
  outbound,
  receiving,
  putaway,
  inventoryLogic,
  picking,
  packing,
  shipping,
  sap,
  or,
];

// Backward-compatible normalization. Older modules only define parentId and
// level; newer fields (prerequisites, skills, difficulty, evaluation, content
// resources) receive safe defaults so every consumer can rely on the full shape.
function normalizeModule(raw) {
  return {
    difficulty: raw.level,
    skills: [],
    evaluation: null,
    ...raw,
    prerequisites: raw.prerequisites ?? (raw.parentId ? [raw.parentId] : []),
    content: {
      resources: { videos: [], documents: [], exercises: [], quizzes: [] },
      ...raw.content,
    },
  };
}

export const modules = rawModules.map(normalizeModule);

const byId = new Map(modules.map((module) => [module.id, module]));

export function getModuleById(id) {
  return byId.get(id);
}
