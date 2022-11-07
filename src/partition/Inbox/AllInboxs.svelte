<script>
  import GroupIcon from "../../components/GroupIcon.svelte";
  import PersonIcon from "../../components/PersonIcon.svelte";
  import SearchInput from "../../components/SearchInput.svelte";

  export let changeState = (a, b) => {};
</script>

<div class="space-y-2">
  <SearchInput placeholder="Search" />
  <div
    class="-mx-4 overflow-auto h-[calc(83%-42px-32px-8px)] max-h-[calc(600px-42px-32px-8px)] min-h-[(400px-42px-32px-8px)]"
  >
    <div id="inbox-1" class="relative group-inbox">
      <button
        on:click={() => changeState("group-inbox", 1)}
        class="w-full flex items-start relative p-4 hover:bg-slate-100 focus:bg-slate-200 transition-colors duration-300"
      >
        <div class="left mr-4">
          <GroupIcon />
        </div>
        <div
          class="mid flex flex-col items-start text-left w-full max-w-[100%-200px]"
        >
          <span class="font-semibold text-primary text-lg"
            >109220-Naturalization</span
          >
          <span class="font-semibold text-slate-700">Cameron Phillips :</span>
          <span class="">Please check this out!</span>
        </div>
        <div class="right ml-auto self-center pt-4">
          <div class="w-[10px] h-[10px] rounded-full bg-indicator-3" />
        </div>
        <span class="absolute top-4 right-4 text-sm text-slate-600"
          >02/06/2021 10:45</span
        >
      </button>
      <hr class="mx-4 border-0 h-px bg-slate-200" />
    </div>
    <div id="inbox-2" class="relative group-inbox">
      <button
        on:click={() => changeState("group-inbox", 1)}
        class="w-full flex items-start relative p-4 hover:bg-slate-100 focus:bg-slate-200 transition-colors duration-300"
      >
        <div class="left mr-4">
          <GroupIcon />
        </div>
        <div
          class="mid flex flex-col items-start text-left w-full max-w-[calc(100%-200px)]"
        >
          <span class="font-semibold text-primary text-lg"
            >Jeanette Moraima Guanma Chamba (Hutto I-589) [Follow Up Hutto Brief
            Service]</span
          >
          <span class="font-semibold text-slate-700">Ellen :</span>
          <span class="">Hey please read.</span>
        </div>
        <div class="right ml-auto self-center pt-4" />
        <span class="absolute top-4 right-4 text-sm text-slate-600"
          >05/06/2021 07:45</span
        >
      </button>
      <hr class="mx-4 border-0 h-px bg-slate-200" />
    </div>
    <div id="inbox-3" class="relative group-inbox">
      <button
        on:click={() => changeState("group-inbox", 1)}
        class="w-full flex items-start relative p-4 hover:bg-slate-100 focus:bg-slate-200 transition-colors duration-300"
      >
        <div class="left mr-4">
          <GroupIcon />
        </div>
        <div
          class="mid flex flex-col items-start text-left w-full max-w-[100%-200px]"
        >
          <span class="font-semibold text-primary text-lg"
            >8405-Diana Salazar Munguia</span
          >
          <span class="font-semibold text-slate-700">Cameron Phillips :</span>
          <span class=""
            >I Understand your initial concerns and thats very valid, elizabeth.
            But you are so cute.</span
          >
        </div>
        <div class="right ml-auto self-center pt-4" />
        <span class="absolute top-4 right-4 text-sm text-slate-600"
          >02/09/2021 10:45</span
        >
      </button>
      <hr class="mx-4 border-0 h-px bg-slate-200" />
    </div>
    <div id="inbox-4" class="relative personal-inbox">
      <button
        on:click={() => changeState("person-inbox", 1)}
        class="w-full flex items-start relative p-4 hover:bg-slate-100 focus:bg-slate-200 transition-colors duration-300"
      >
        <div class="left mr-4">
          <PersonIcon />
        </div>
        <div
          class="mid flex flex-col items-start text-left w-full max-w-[100%-200px]"
        >
          <span class="font-semibold text-primary text-lg"
            >FastVisa Support</span
          >
          <span class="">Hey there! Welcome to your inbox.</span>
        </div>
        <div class="right ml-auto self-center pt-4" />
        <span class="absolute top-4 right-4 text-sm text-slate-600"
          >02/06/2021 07:45</span
        >
      </button>
    </div>
  </div>
</div>
