<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import Button from "../../components/Button.svelte";
  import Loading from "../../components/Loading.svelte";
  import Message from "../../components/Message.svelte";
  import TextInput from "../../components/TextInput.svelte";
  import MdiArrowLeft from "../../icons/mdiArrowLeft.svelte";
  import MdiClose from "../../icons/mdiClose.svelte";
  export let changeState = (a, b) => {};

  const sendNewMessage = () => {};
  // @ts-ignore
  const heightOfBox = document.querySelector("#boxQuick").offsetHeight;

  let hasNewMessage = true;
  let showButtonToNewMessage = false;

  let chatArea = null;
  let newMessageArea = null;
  let newMessageHeight = 0;
  let scrollToNewMessage = () => {};

  let connectingToOther = false;

  onMount(() => {
    chatArea = document.querySelector("#chat-area");
    newMessageArea = document.querySelector("[data-date='New Message']");
    newMessageHeight = hasNewMessage ? newMessageArea.scrollHeight : 0;
    scrollToNewMessage = () => newMessageArea.scrollIntoView();
    chatArea.scrollTo(0, chatArea.scrollHeight);
    //
    showButtonToNewMessage =
      // @ts-ignore
      chatArea.offsetHeight - newMessageHeight + 30 > chatArea.scrollTop;
    // @ts-ignore
    chatArea.onscroll = () => {
      showButtonToNewMessage =
        chatArea.offsetHeight - newMessageHeight + 30 > chatArea.scrollTop;
    };

    //
    connectingToOther = true;
    setTimeout(() => {
      connectingToOther = false;
    }, 3000);
  });
</script>

<div class="-m-4 relative">
  <div
    class="flex items-center justify-start relative border-b border-slate-200 p-4"
  >
    <button
      class="p-2 hover:bg-primary-accent-3 text-primary-accent-1 mr-4 transition-colors duration-300 -ml-2"
      on:click={() => changeState("all-inboxs", 0)}
    >
      <MdiArrowLeft />
    </button>
    <div>
      <h3 class="text-lg text-primary font-semibold">FastVisa Support</h3>
    </div>
    <button
      class="ml-auto p-2 hover:bg-indicator-3 hover:text-white transition-colors duration-300"
      on:click={() => document.body.click()}
    >
      <MdiClose />
    </button>
  </div>
  <div
    style="height: calc({heightOfBox}px - 85px - 78px);"
    class="overflow-hidden p-4"
  >
    <div
      id="chat-area"
      class="relative h-full overflow-auto space-y-8 scroll-smooth"
    >
      <div data-date="Yesterday" class="flex flex-col space-y-4">
        <div class="relative text-center">
          <div class="bg-white px-4 relative inline-block">Yesterday</div>
          <hr class="border-0 h-px bg-slate-300 -mt-2.5" />
        </div>
        <div data-message-type="other" class="pr-24">
          <Message
            name="FastVisa Support"
            text="No worries, It will be completed ASAP. I've asked him yesterday."
            time="19:32"
            personIndex={3}
          />
        </div>
        <div data-message-type="own" class="ml-auto pl-24">
          <Message
            name="You"
            text="No worries, It will be completed ASAP. I've asked him yesterday."
            time="19:32"
          />
        </div>
        <div data-message-type="other" class="pr-24">
          <Message
            name="Obaidullah Sumarkhill"
            text="No worries, It will be completed ASAP. I've asked him yesterday."
            time="19:32"
            personIndex={3}
          />
        </div>
      </div>
      <div data-date="Today" class="flex flex-col space-y-4">
        <div class="relative text-center">
          <div class="bg-white px-4 relative inline-block">
            Today June 08, 2022
          </div>
          <hr class="border-0 h-px bg-slate-300 -mt-2.5" />
        </div>
        <div data-message-type="other" class="pr-24">
          <Message
            name="FastVisa Support"
            text="No worries, It will be completed ASAP. I've asked him yesterday."
            time="19:32"
            personIndex={3}
          />
        </div>
        <div data-message-type="own" class="ml-auto pl-24">
          <Message
            name="You"
            text="No worries, It will be completed ASAP. I've asked him yesterday."
            time="19:32"
          />
        </div>
        <div data-message-type="other" class="pr-24">
          <Message
            name="FastVisa Support"
            text="No worries, It will be completed ASAP. I've asked him yesterday."
            time="19:32"
            personIndex={3}
          />
        </div>
      </div>
      <div data-date="New Message" class="flex flex-col space-y-4">
        <div class="relative text-center">
          <div class="bg-white px-4 relative inline-block">New Message</div>
          <hr class="border-0 h-px bg-slate-300 -mt-2.5" />
        </div>
        <div data-message-type="other" class="pr-24">
          <Message
            name="FastVisa Support"
            text="No worries, It will be completed ASAP. I've asked him yesterday."
            time="19:32"
            personIndex={3}
          />
        </div>
      </div>
      {#if showButtonToNewMessage}
        <div class="sticky bottom-0 pb-2 text-center">
          <Button
            onClickEvent={scrollToNewMessage}
            className="bg-sticker-1 text-primary font-medium py-1.5 hover:bg-blue-200 shadow-md"
            >New Message</Button
          >
        </div>
      {/if}
      {#if connectingToOther}
        <div transition:fly|local={{ y: 12 }} class="sticky bottom-0 pb-2">
          <div
            class="bg-sticker-1 py-1.5 hover:bg-blue-200 shadow-md flex items-center space-x-4 rounded-md"
          >
            <Loading className="text-primary w-6 h-6 mt-2 ml-4" text="" />
            <span class="font-semibold">
              Please wait while we connect you with one of our team...
            </span>
          </div>
        </div>
      {/if}
    </div>
  </div>
  <div class="p-4">
    <form
      on:submit|preventDefault={sendNewMessage}
      class="flex items-center space-x-2"
    >
      <TextInput placeholder="Type a new message" />
      <Button className="py-2.5"><span class="font-semibold">Send</span></Button
      >
    </form>
  </div>
</div>
