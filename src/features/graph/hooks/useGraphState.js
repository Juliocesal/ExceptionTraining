import { useSyncExternalStore } from "react";
import { graphStore } from "../engine/graphStore";

const identity = (state) => state;

export function useGraphState(selector = identity) {
  return useSyncExternalStore(graphStore.subscribe, () =>
    selector(graphStore.getState())
  );
}
