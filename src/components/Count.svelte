<script lang="ts">
  import { Button } from 'flowbite-svelte';
  import { count } from '../stores';
</script>

<div class="flex flex-row items-center">
  <Button color="blue" size="lg" onclick={() => $count -= 1}>-</Button>
  <span class="w-64 text-center">Current count: <b>{$count}</b></span>
  <Button color="blue" size="lg" onclick={() => $count += 1}>+</Button>
</div>
