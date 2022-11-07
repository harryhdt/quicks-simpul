<script>
  import MdiPersonOutline from "../icons/mdiPersonOutline.svelte";

  export let name = "Harry";
</script>

<div class="flex items-center">
  <div class="py-2 px-3.5 rounded-full bg-primary text-white font-bold mx-2">
    {name[0]}
  </div>
</div>
