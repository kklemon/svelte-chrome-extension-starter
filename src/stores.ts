import { persistentStore } from "./storage";

// Shared stores can be imported in every component across the extension
// and will have their state synchronized transparently.
export const count = persistentStore("count", 10);
export const app = persistentStore("app", {
  modalOpen: false,
});
