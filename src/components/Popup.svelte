<script lang="ts">
    import Intro from "./Intro.svelte";
</script>

<div id="container">
    <div class="p-4">
        <Intro title="Popup Page" />
    </div>
</div>

<style lang="postcss">
    #container {
        @apply w-[600px] h-[800px] text-lg;
    }
</style>
