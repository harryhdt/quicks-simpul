<script>
  import { fly } from "svelte/transition";
  import CircleButton from "../components/CircleButton.svelte";
  import MdiBookOpenOutline from "../icons/mdiBookOpenOutline.svelte";
  import MdiForumOutline from "../icons/mdiForumOutline.svelte";
  import MdiThunder from "../icons/mdiThunder.svelte";
  import { clickOutside } from "../lib/clickOutside";
  import Inbox from "./Inbox/Index.svelte";
  import Task from "./Task/Index.svelte";
  import { getAllTasks } from "../API/Task/Read";

  let showListQuicks = false;
  const toggleShowQuicks = () => {
    showListQuicks = !showListQuicks;
    if (!showListQuicks) {
      showState = false;
      state = null;
    }
  };

  let loadingData = false;
  let state = null;
  let showState = false;
  //
  let tasks = [];
  let chatLists = [];
  //
  const toggleShowState = async (part) => {
    if (part !== state) {
      showState = true;
      state = part;
      loadingData = true;
      if (state === "task") {
        tasks = await getAllTasks();
      } else {
      }
      loadingData = false;
    } else {
      showState = false;
      state = null;
      loadingData = false;
    }
  };

  const closeAllQuick = () => {
    showState = false;
    state = null;
    showListQuicks = false;
  };
</script>

<div class="text-slate-600" use:clickOutside on:click_outside={closeAllQuick}>
  <div id="list-quicks" class="fixed bottom-6 right-6 flex items-end space-x-6">
    {#if showListQuicks}
      <div class="text-center space-y-2" transition:fly={{ x: 80 }}>
        <span class="font-bold text-white block {showState ? 'hidden' : ''}"
          >Task</span
        >
        <CircleButton
          onClickEvent={() => toggleShowState("task")}
          className={state === "task"
            ? "bg-indicator-1 hover:bg-white focus:ring-indicator-1 text-white hover:text-indicator-1"
            : "bg-white hover:bg-slate-100 focus:ring-indicator-1 text-indicator-1"}
        >
          <MdiBookOpenOutline />
        </CircleButton>
      </div>
      <div class="text-center space-y-2" transition:fly={{ x: 80 }}>
        <span class="font-bold text-white block {showState ? 'hidden' : ''}"
          >Inbox</span
        >
        <CircleButton
          onClickEvent={() => toggleShowState("inbox")}
          className={state === "inbox"
            ? "bg-indicator-2 hover:bg-white focus:ring-indicator-2 text-white hover:text-indicator-2"
            : "bg-white hover:bg-slate-100 focus:ring-indicator-2 text-indicator-2"}
        >
          <MdiForumOutline />
        </CircleButton>
      </div>
    {/if}
    <CircleButton className="z-20" onClickEvent={toggleShowQuicks}>
      <MdiThunder />
    </CircleButton>
  </div>

  {#if showState}
    <div
      transition:fly={{ y: 30 }}
      id="boxQuick"
      class="p-4 bg-white fixed z-30 right-6 bottom-24 w-5/12 max-w-3xl min-w-[640px] h-5/6 max-h-[600px] min-h-[400px] border-2 border-slate-200 rounded-md"
    >
      {#if state === "task"}
        <Task allTasks={tasks} {loadingData} />
      {:else}
        <Inbox {loadingData} />
      {/if}
    </div>
  {/if}
</div>
