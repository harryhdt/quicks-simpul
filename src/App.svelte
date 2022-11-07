<script>
  import MdiMagnify from "./icons/mdiMagnify.svelte";
  import Quick from "./partition/Quick.svelte";

  console.log("READY !!!");
</script>

<main class="font-lato flex items-start min-h-screen">
  <div class="min-h-screen bg-slate-500 border-r border-slate-600 w-80" />
  <div class="bg-slate-600 min-h-screen w-full">
    <div class="bg-slate-300 p-4 w-full">
      <MdiMagnify className="text-slate-700" />
    </div>
    <Quick />
  </div>
</main>
