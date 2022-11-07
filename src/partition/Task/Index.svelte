<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  import { fly, slide } from "svelte/transition";
  import { addTask } from "../../API/Task/Create";
  import { deleteTask } from "../../API/Task/Delete";
  import { updateTask } from "../../API/Task/Update";

  // @ts-nocheck

  import Button from "../../components/Button.svelte";
  import Dropdown from "../../components/Dropdown.svelte";
  import Loading from "../../components/Loading.svelte";
  import MultiSelectSticker from "../../components/MultiSelectSticker.svelte";
  import Stiker from "../../components/Stiker.svelte";
  import MdiBookmarkMultipleOutline from "../../icons/mdiBookmarkMultipleOutline.svelte";
  import MdiBox from "../../icons/mdiBox.svelte";
  import MdiCalendarBlankOutline from "../../icons/mdiCalendarBlankOutline.svelte";
  import MdiCheckBox from "../../icons/mdiCheckBox.svelte";
  import MdiChevronDown from "../../icons/mdiChevronDown.svelte";
  import MdiClockOutline from "../../icons/mdiClockOutline.svelte";
  import MdiDotsHorizontal from "../../icons/mdiDotsHorizontal.svelte";
  import MdiPencilOutline from "../../icons/mdiPencilOutline.svelte";
  import { clickOutside } from "../../lib/clickOutside";
  import dateToValue from "../../lib/dateToValue";
  import timeUnitsBetween from "../../lib/getDaysLeft";
  export let loadingData = false;
  export let allTasks = [];

  let taskArea = null;
  onMount(() => {
    let ivl = setInterval(() => {
      if (!loadingData) {
        taskArea = document.querySelector("#taskArea");
        clearInterval(ivl);
      }
    }, 300);
  });
  let tasks = [];
  $: if (allTasks.length) {
    tasks = [];
    for (let i = 0; i < allTasks.length; i++) {
      tasks[i] = {
        id: allTasks[i].id,
        title: allTasks[i].text,
        text: allTasks[i].text,
        date: allTasks[i].updatedDate,
        expired:
          timeUnitsBetween(new Date(allTasks[i].updatedDate), new Date()) > 0
            ? timeUnitsBetween(new Date(allTasks[i].updatedDate), new Date()) +
              " Days left"
            : "",
        done: false,
        stickers: allTasks[i].tags.map((x) => {
          return stickers.find((y) => y.id == x);
        }),
      };
    }
  }

  const toggleTaskDone = (i) => {
    tasks[i].done = !tasks[i].done;
  };

  let isLoadingAddNewTask = false;
  const addNewTask = async () => {
    isLoadingAddNewTask = true;
    let newTask = await addTask();
    allTasks[allTasks.length] = newTask;
    //
    setTimeout(() => {
      isLoadingAddNewTask = false;
      //
      let i = allTasks.length - 1;
      expandTask[i] = true;
      showOptionsTask[i] = false;
      showStickerMultiSelect[i] = false;
      //
      setTimeout(() => {
        taskArea.scrollBy(0, 9999999);
      }, 300);
    }, 100);
  };

  const deleteTheTask = async (i) => {
    let id = tasks[i].id;
    allTasks = allTasks.filter((_x, j) => i != j);
    await deleteTask(id);
  };

  let expandTask = [];
  let showOptionsTask = [];
  let showStickerMultiSelect = [];
  for (let i = 0; i < tasks.length; i++) {
    expandTask[i] = false;
    showOptionsTask[i] = false;
    showStickerMultiSelect[i] = false;
  }

  const toggleExpandTask = (i) => {
    expandTask[i] = !expandTask[i];
  };
  const toggleShowOptionTask = (i) => {
    showOptionsTask[i] = !showOptionsTask[i];
    if (showOptionsTask[i]) {
      setTimeout(() => {
        document.querySelector("#actionOptionsTask").scrollIntoView();
      }, 200);
    }
  };

  const toggleStickerMultiSelect = (i) => {
    showStickerMultiSelect[i] = !showStickerMultiSelect[i];
    if (showStickerMultiSelect[i]) {
      setTimeout(() => {
        taskArea.scrollBy(0, 325);
      }, 200);
    }
  };

  const closeStickerMultiSelect = (i) => {
    showStickerMultiSelect[i] = false;
  };

  let stickers = [
    {
      id: 1,
      text: "Important ASAP",
      bgColor: "bg-sticker-1",
    },
    {
      id: 2,
      text: "Offline Meeting",
      bgColor: "bg-sticker-2",
    },
    {
      id: 3,
      text: "Virtual Meeting",
      bgColor: "bg-sticker-3",
    },
    {
      id: 4,
      text: "ASAP",
      bgColor: "bg-sticker-4",
    },
    {
      id: 5,
      text: "Client Related",
      bgColor: "bg-sticker-5",
    },
    {
      id: 6,
      text: "Self Task",
      bgColor: "bg-sticker-6",
    },
    {
      id: 7,
      text: "Appointements",
      bgColor: "bg-sticker-7",
    },
    {
      id: 8,
      text: "Court Related",
      bgColor: "bg-sky-300",
    },
  ];

  const toggleStikerToTask = (task_i, sticker_id) => {
    if (tasks[task_i].stickers.map((x) => x.id).includes(sticker_id)) {
      tasks[task_i].stickers = tasks[task_i].stickers.filter(
        (x) => x.id !== sticker_id
      );
    } else {
      tasks[task_i].stickers[tasks[task_i].stickers.length] = stickers.find(
        (x) => x.id === sticker_id
      );
    }
    let tags = tasks[task_i].stickers.map((x) => x.id);
    updateTask(allTasks[task_i].id, {
      tags,
    });
  };
</script>

<div class="h-full">
  {#if loadingData}
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <Loading text="Loading Task..." />
    </div>
  {:else}
    <div class="h-full" in:fly|local={{ x: -16 }}>
      <div class="flex items-center justify-between">
        <Dropdown label="My Tasks">
          <div slot="actions">
            <button
              class="w-full text-left py-2 px-3 rounded-t-md border-b border-slate-200 hover:bg-slate-100 transition-colors duration-300"
              >Personal Errands</button
            >
            <button
              class="w-full text-left py-2 px-3 rounded-b-md hover:bg-slate-100 transition-colors duration-300"
              >Urgent To-Do</button
            >
          </div>
        </Dropdown>
        <Button
          className="py-2 font-semibold flex items-center space-x-2"
          onClickEvent={addNewTask}
        >
          {#if isLoadingAddNewTask}
            <Loading text="" className="w-4 h-4 !text-white -mb-[2px]" />
          {/if}
          <span>New Task</span>
        </Button>
      </div>
      <div
        id="taskArea"
        class="overflow-auto h-full max-h-[calc(600px-42px-32px-8px)] min-h-[(400px-42px-32px-8px)] w-full mt-4 scroll-smooth"
      >
        {#each tasks as task, i}
          <div
            transition:fly|local={{ y: -8 }}
            class="pb-2 {i !== tasks.length - 1
              ? 'border-b border-slate-300 mb-2'
              : ''}"
          >
            <div class="flex items-center space-x-2 relative">
              <button
                on:click={() => toggleTaskDone(i)}
                class="hover:bg-slate-100 transition-colors duration-300"
              >
                {#if task.done}
                  <MdiCheckBox />
                {:else}
                  <MdiBox />
                {/if}
              </button>
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <h3
                class="font-bold max-w-[336px] cursor-pointer {task.done
                  ? 'line-through text-slate-500'
                  : ''}"
                on:click={() => toggleExpandTask(i)}
              >
                {task.title}
              </h3>
              <span class="text-sm text-indicator-3 !ml-auto">
                <span class={task.done ? "hidden" : ""}>{task.expired}</span>
              </span>
              <span class="text-sm"
                >{new Date(task.date).toLocaleDateString()}</span
              >
              <button
                on:click={() => toggleExpandTask(i)}
                class="mt-1 p-[2px] hover:bg-slate-100 transition-all duration-300"
              >
                <MdiChevronDown
                  className="transform {expandTask[i]
                    ? 'rotate-180'
                    : ''} transition-transform duration-300"
                />
              </button>
              <button
                on:click={() => toggleShowOptionTask(i)}
                use:clickOutside
                on:click_outside={() => (showOptionsTask[i] = false)}
                class="mt-1 p-[2px] hover:bg-slate-100 transition-colors duration-300"
              >
                <MdiDotsHorizontal />
              </button>
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              {#if showOptionsTask[i]}
                <div
                  id="actionOptionsTask"
                  transition:fly|local={{ y: -8, duration: 200 }}
                  class="rounded-md border border-slate-200 flex flex-col items-start w-28 absolute top-8 right-0 bg-white z-20 shadow-lg"
                >
                  <button
                    on:click={() => deleteTheTask(i)}
                    class="w-full flex items-center space-x-2 text-left py-2 px-3 rounded-b-md text-indicator-3 hover:bg-slate-100 transition-colors duration-300"
                  >
                    <span>Delete</span>
                  </button>
                </div>
              {/if}
            </div>
            {#if expandTask[i]}
              <div transition:slide|local class="pl-7 space-y-4 pt-4 pb-2">
                <div class="flex items-center space-x-2">
                  <button
                    class="p-1 hover:bg-slate-100 transition-colors duration-300"
                  >
                    <MdiClockOutline
                      className="text-primary w-5 h-5 min-w-[20px]"
                    />
                  </button>
                  <div class="relative">
                    <button
                      class="absolute right-2.5 top-2.5 p-1 hover:bg-slate-100 transition-colors duration-300"
                    >
                      <MdiCalendarBlankOutline className="w-5 h-5" />
                    </button>
                    <input
                      id="inputDate1"
                      type="date"
                      value={dateToValue(task.date)}
                      on:change={async (e) => {
                        allTasks[i].updatedDate = new Date(
                          e.target.value
                        ).toLocaleDateString();
                        // let updatedTask = await updateTask(task.id, {  });
                        // allTasks[i] = updatedTask;
                        alert(
                          "Date changed for preview only, not affect to real data."
                        );
                      }}
                      class="bg-white py-2.5 pl-3 pr-12 rounded-md text-slate-700 w-full border border-slate-300 outline-none focus:ring-2 focus:ring-slate-200 focus:border-slate-500 transition-colors duration-300"
                    />
                  </div>
                </div>
                <div class="flex items-start space-x-2">
                  <button
                    on:click={(e) => {
                      e.target.parentNode.querySelector("input").focus();
                    }}
                    class="p-1 hover:bg-slate-100 transition-colors duration-300 -mt-px"
                  >
                    <MdiPencilOutline
                      className="text-primary w-5 h-5 min-w-[20px] pointer-events-none"
                    />
                  </button>
                  <input
                    class="w-full outline-none border-0 focus:border-b border-slate-300"
                    value={task.text}
                    on:blur={(e) => {
                      allTasks[i].text = e.target.value;
                      updateTask(task.id, { text: e.target.value });
                    }}
                  />
                </div>
                <div
                  class="stickers bg-slate-100 rounded-md p-2 flex space-x-2 -ml-1.5 relative"
                >
                  <button
                    on:click={() => toggleStickerMultiSelect(i)}
                    use:clickOutside
                    on:click_outside={() => closeStickerMultiSelect(i)}
                    class="p-1 hover:bg-slate-100 transition-colors duration-300"
                  >
                    <MdiBookmarkMultipleOutline
                      className="text-primary w-5 h-5 min-w-[20px]"
                    />
                  </button>
                  <div class="flex flex-wrap items-center -m-1">
                    {#each task.stickers as sticker}
                      <div class="p-1">
                        <Stiker selected={false} bgColor={sticker.bgColor}
                          >{sticker.text}</Stiker
                        >
                      </div>
                    {/each}
                  </div>
                  {#if showStickerMultiSelect[i]}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <MultiSelectSticker>
                      <div
                        on:click={() => toggleStickerMultiSelect(i)}
                        class="w-full space-y-2"
                        slot="options"
                      >
                        {#each stickers as sticker}
                          <Stiker
                            onClickEvent={() =>
                              toggleStikerToTask(i, sticker.id)}
                            selected={task.stickers
                              .map((x) => x.id)
                              .includes(sticker.id)}
                            bgColor={sticker.bgColor}>{sticker.text}</Stiker
                          >
                        {/each}
                      </div>
                    </MultiSelectSticker>
                  {/if}
                </div>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>
