import { writable, type Writable } from "svelte/store";

const storage = chrome.storage.local;

/**
 * Creates a persistent Svelte store backed by Chrome's local storage.
 * @template T The type of the store's value
 * @param key The key to use in Chrome's storage
 * @param initialValue The initial value of the store
 * @returns A writable Svelte store
 */
export function persistentStore<T>(key: string, initialValue: T): Writable<T> {
  const store = writable(initialValue);
  // Ensure each value is updated exactly once in store and in chrome storage
  const storeValueQueue: T[] = [];
  const chromeValueQueue: T[] = [];

  function watchStore() {
    store.subscribe((value) => {
      if (chromeValueQueue.length > 0 && value === chromeValueQueue[0]) {
        chromeValueQueue.shift();
        return;
      }

      storeValueQueue.push(value);
      storage.set({ [key]: value });
    });
  }

  function watchChrome() {
    storage.onChanged.addListener((changes) => {
      if (!Object.hasOwn(changes, key)) return;

      const value = changes[key].newValue as T;
      if (storeValueQueue.length > 0 && value === storeValueQueue[0]) {
        storeValueQueue.shift();
        return;
      }

      chromeValueQueue.push(value);
      store.set(value);
    });
  }

  // Initialize the store with the value from Chrome storage
  storage.get(key).then((result) => {
    const value = Object.hasOwn(result, key) ? result[key] : initialValue;
    chromeValueQueue.push(value);
    store.set(value);
    watchStore();
    watchChrome();
  });

  return store;
}
