<script>
  import { fly } from "svelte/transition";
  import MdiChevronDown from "../icons/mdiChevronDown.svelte";
  import { clickOutside } from "../lib/clickOutside";

  export let label = "Dropdown";

  let isOpen = false;

  const toggleDropdown = () => (isOpen = !isOpen);
</script>

<div class="relative">
  <button
    on:click={toggleDropdown}
    use:clickOutside
    on:click_outside={() => (isOpen = false)}
    class="flex items-center justify-between w-32 py-2 px-3 rounded-md bg-white border border-slate-300 hover:bg-slate-100 transition-colors duration-300"
  >
    <span>{label}</span>
    <div
      class="transform {isOpen
        ? '-rotate-180'
        : ''} transition-transform duration-200"
    >
      <MdiChevronDown />
    </div>
  </button>
  {#if isOpen}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      transition:fly|local={{ y: -8, duration: 200 }}
      class="rounded-md border border-slate-200 flex flex-col items-start w-40 absolute top-12 left-0 bg-white z-20 shadow-lg"
    >
      <slot name="actions" />
    </div>
  {/if}
</div>
