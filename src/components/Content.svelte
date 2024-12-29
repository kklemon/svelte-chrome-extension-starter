<script lang="ts">
  import { Modal } from "flowbite-svelte";
  import Count from "./Count.svelte";
  import { app as appState } from "../stores";
  import Intro from "./Intro.svelte";
</script>

<div id="container">
  <div class="fixed shadow-lg rounded-lg p-8 right-8 bottom-8 z-50 bg-white">
    <Count />
  </div>

  <Modal
    bind:open={$appState.modalOpen}
    size="lg"
    classDialog="max-w-4/5"
    classBody="grow p-8 overflow-scroll"
    classBackdrop="backdrop-blur-sm"
  >
    <Intro title="Content Page" />
  </Modal>
</div>

<style lang="postcss">
  #container {
    @apply overflow-hidden;
  }
</style>
