<script lang="ts">
  import { Button } from "flowbite-svelte";
  import Count from "./Count.svelte";
  import { app as appState } from "../stores";

  const { title }: { title: string } = $props();
</script>

<div class="leading-7 p-4">
  <h1>{title}</h1>
  <p>
    Thank you for using the <code>svelte-chrome-extension-starter</code> project template.
    Below is an overview of the template’s features and instructions on how to use them.
  </p>

  <h2>Tailwind CSS</h2>
  <p>
    You can use any Tailwind CSS classes and features, such as 
    <span class="inline-block animate-[spin_10s_linear_infinite]">animations</span>
    or
    <span
      class="inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text font-bold text-transparent"
      >gradients</span>
    ,
    throughout your extension’s HTML code. The template uses a single global stylesheet
    located at <code>src/style.css</code>.
  </p>

  <h3>Content DOM tree encapsulation</h3>
  <p>
    The provided content script in <code>src/content/index.ts</code> creates a 
    <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM">shadow DOM</a> 
    that serves as the target for the root content component. This approach isolates any 
    extension-specific DOM elements from the hosting page, effectively preventing interference 
    between the page’s CSS and the extension’s styles.
  </p>
  <p>
    You may want to change this behavior in cases where using an isolated shadow DOM is not suitable,
    for example, when you want to insert HTML directly into the hosting page.
  </p>

  <h2>Sharing state across page with stores</h2>
  <p>
    <code>src/storage.ts</code> implements a 
    <a href="https://svelte.dev/docs/svelte/stores">Svelte store</a>
    that uses <code>chrome.storage.local</code> to persist and synchronize its state.
    By defining a store globally, its value is seamlessly shared and synchronized among all
    extension pages, enabling shared state and easy communication between different pages.
  </p>

  <h3>Example</h3>
  <p>
    <code>src/stores.ts</code> declares a <code>count</code> store. Updating its
    value will be immediately reflected in any other page. Open any website to see
    this in action in the bottom-right corner of the page as part of a content script.
  </p>
  <div class="my-4">
    <Count />
  </div>

  <h2>Flowbite Svelte UI Component Library</h2>
  <p>
    <a href="https://flowbite-svelte.com/">Flowbite Svelte</a> is an official Flowbite component
    library for Svelte, preconfigured in this project template. You should be able to use
    most (if not all) of the library’s components throughout your extension pages. 
    For example, the button below is a 
    <a href="https://flowbite-svelte.com/docs/components/buttons"
      ><code>&lt;Button &sol;&gt;</code></a>
    component, and clicking it will toggle a 
    <a href="https://flowbite-svelte.com/docs/components/modal"
      ><code>&lt;Modal &sol;&gt;</code></a>
    component within the active tab.
  </p>
  <Button color="blue" size="lg" onclick={() => $appState.modalOpen = !$appState.modalOpen}>
    {$appState.modalOpen ? "Close" : "Open"} Modal
  </Button>
</div>