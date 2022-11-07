<script>
  export let className = "";
  export let onClickEvent = () => {};
</script>

<button
  on:click={onClickEvent}
  class="bg-primary rounded-md p-4 text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors duration-300 {className}"
>
  <slot />
</button>
