// Registers the learning domain's node types with the graph engine.
// Imported once (side effect) from the learning feature's public API.
import { nodeRegistry } from "../../graph";
import ModuleNode from "./ModuleNode";

nodeRegistry.register("module", ModuleNode);
