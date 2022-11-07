<script>
  export let value = "";
  export let className = "";
  export let placeholder = "Write here...";
</script>

<textarea
  bind:value
  class="bg-white py-2.5 px-3 rounded-md text-slate-700 w-full border border-slate-300 outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-500 transition-colors duration-300 overflow-hidden resize-none {className}"
  {placeholder}
  rows="1"
/>
