<script>
  import MdiMagnify from "../icons/mdiMagnify.svelte";

  export let value = "";
  export let className = "";
  export let placeholder = "Write here...";
  export let onSearchEvent = () => {};
</script>

<form on:submit|preventDefault={onSearchEvent} class="relative group">
  <button
    on:click={onSearchEvent}
    class="rounded-md absolute right-16 group-focus-within:right-4 top-[3px] text-slate-400 hover:bg-slate-200 focus:bg-slate-100 transition-all duration-300 p-2"
  >
    <MdiMagnify />
  </button>
  <input
    type="text"
    bind:value
    class="bg-white py-2.5 pl-20 pr-28 rounded-md text-slate-700 w-full border border-slate-300 outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-500 focus-within:pl-3 focus-within:pr-16 transition-all duration-300 {className}"
    {placeholder}
  />
</form>
