<script>
  import MdiThunder from "../icons/mdiThunder.svelte";
  export let className = "";
  export let onClickEvent = () => {};
</script>

<button
  on:click={onClickEvent}
  class="bg-primary rounded-full p-4 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm text-center inline-flex items-center transition-colors duration-300 {className}"
>
  <slot>
    <MdiThunder />
  </slot>
</button>
