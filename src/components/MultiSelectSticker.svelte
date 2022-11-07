<script>
  import { fly } from "svelte/transition";
</script>

<div
  transition:fly|local={{ y: -8, duration: 200 }}
  class="rounded-md border border-slate-200 flex flex-col items-start w-60 absolute p-2 top-12 left-0 bg-white z-20 shadow-lg"
>
  <slot name="options" />
</div>
