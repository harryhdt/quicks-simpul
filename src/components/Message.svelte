<script>
  import { fly } from "svelte/transition";
  import MdiDotsHorizontal from "../icons/mdiDotsHorizontal.svelte";
  import { clickOutside } from "../lib/clickOutside";

  export let name = "Person";
  export let personIndex = 0;
  export let text = "Message";
  export let time = "00:01";
  export let replied = false;
  export let textReplied = "";
  export let repliedFrom = "";
  export let eventSetReplyChat = (a, b) => {};

  let bgColors = [
    "bg-chats-1-1",
    "bg-chats-2-1",
    "bg-chats-3-1",
    "bg-primary-accent-3",
  ];
  let nameColors = [
    "text-chats-1-2",
    "text-chats-2-2",
    "text-chats-3-2",
    "text-primary-accent-1",
  ];

  let bgColor = bgColors[1];
  let nameColor = nameColors[1];
  if (personIndex === 0) {
    bgColor = bgColors[1];
    nameColor = nameColors[1];
  } else {
    if (personIndex % 3 === 0) {
      bgColor = bgColors[3];
      nameColor = nameColors[3];
    } else if (personIndex % 2 === 0) {
      bgColor = bgColors[0];
      nameColor = nameColors[0];
    } else {
      bgColor = bgColors[2];
      nameColor = nameColors[2];
    }
  }

  let showMessageOptions = false;
  const toggleOptions = (e) => {
    showMessageOptions = !showMessageOptions;
    if (showMessageOptions) {
      setTimeout(() => {
        document.querySelector("#actionOptionsMessage").scrollIntoView();
      }, 300);
    }
  };
  const closeMessageOptions = () => (showMessageOptions = false);
</script>

<div class="relative">
  <div class="{personIndex !== 0 ? 'text-left' : 'text-right'} mb-1">
    <span class="{nameColor} font-bold">{name}</span>
    {#if replied}
      <div
        class="py-1 px-2 rounded-md bg-slate-100 border border-slate-200 text-left"
      >
        <b>{repliedFrom} : </b>
        {textReplied}
      </div>
    {/if}
  </div>
  <div
    class="flex items-start {personIndex === 0 ? 'justify-end' : ''} relative"
  >
    <button
      on:click={toggleOptions}
      use:clickOutside
      on:click_outside={closeMessageOptions}
      class="p-1 hover:bg-slate-100 transition-colors duration-300 {personIndex !==
      0
        ? 'order-2'
        : 'order-1'}"
    >
      <MdiDotsHorizontal />
    </button>
    {#if showMessageOptions}
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        id="actionOptionsMessage"
        transition:fly|local={{ y: -8, duration: 200 }}
        on:click={toggleOptions}
        class="rounded-md border border-slate-200 flex flex-col items-start w-28 absolute top-8 {personIndex ===
        0
          ? 'left-0'
          : 'right-0'} bg-white z-20 shadow-lg"
      >
        {#if personIndex === 0}
          <button
            class="w-full text-left py-2 px-3 rounded-t-md border-b border-slate-200 text-primary hover:bg-slate-100 transition-colors duration-300"
            >Edit</button
          >
          <button
            class="w-full text-left py-2 px-3 rounded-b-md text-indicator-3 hover:bg-slate-100 transition-colors duration-300"
            >Delete</button
          >
        {:else}
          <button
            class="w-full text-left py-2 px-3 rounded-t-md border-b border-slate-200 text-primary hover:bg-slate-100 transition-colors duration-300"
            >Share</button
          >
          <button
            on:click={() => {
              eventSetReplyChat(true, 1);
              setTimeout(() => {
                showMessageOptions = false;
              }, 50);
            }}
            class="w-full text-left py-2 px-3 rounded-b-md text-primary hover:bg-slate-100 transition-colors duration-300"
            >Reply</button
          >
        {/if}
      </div>
    {/if}
    <div
      class="py-1 px-2 rounded-md {bgColor} min-w-[160px] {personIndex !== 0
        ? 'order-1'
        : 'order-2'}"
    >
      {text}
      <span class="text-sm mt-2 block">
        {time}
      </span>
    </div>
  </div>
</div>
