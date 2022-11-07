<script>
  import { fly } from "svelte/transition";
  import Loading from "../../components/Loading.svelte";
  import AllInboxs from "./AllInboxs.svelte";
  import GroupInbox from "./GroupInbox.svelte";
  import PersonInbox from "./PersonInbox.svelte";
  export let loadingData = false;
  let loadingText = "Loading Chats...";
  //
  let state = "all-inboxs";
  let inboxId = 0;
  const changeState = (newState, index) => {
    setLoading(true, "Loading...");
    setTimeout(() => {
      setLoading(false, "Loading Chats...");
      state = newState;
      inboxId = index;
    }, 3000);
  };

  let inboxs = [];

  const setLoading = (cond, text) => {
    loadingData = cond;
    loadingText = text;
  };
</script>

<div>
  {#if loadingData}
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <Loading text={loadingText} />
    </div>
  {:else if state === "all-inboxs"}
    <div in:fly|local={{ x: -16 }}>
      <AllInboxs {changeState} />
    </div>
  {:else if state === "group-inbox"}
    <div in:fly|local={{ x: 16 }}>
      <GroupInbox {changeState} />
    </div>
  {:else if state === "person-inbox"}
    <div in:fly|local={{ x: 16 }}>
      <PersonInbox {changeState} />
    </div>
  {/if}
</div>
