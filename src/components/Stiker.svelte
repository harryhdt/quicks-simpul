<script>
  export let bgColor = "bg-slate-100";
  export let selected = true;
  export let onClickEvent = () => {};
</script>

<button
  on:click={onClickEvent}
  class="w-full text-sm text-left py-1.5 px-2.5 rounded-md {bgColor} font-semibold hover:bg-opacity-80 focus:ring-2 focus:ring-blue-600 transition-all duration-300 {selected
    ? 'ring-2 ring-blue-600'
    : ''}"
>
  <slot />
</button>
