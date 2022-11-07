<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import Button from "../../components/Button.svelte";
  import Message from "../../components/Message.svelte";
  import TextInput from "../../components/TextInput.svelte";
  import MdiArrowLeft from "../../icons/mdiArrowLeft.svelte";
  import MdiClose from "../../icons/mdiClose.svelte";
  export let changeState = (a, b) => {};

  const sendNewMessage = () => {
    showReplyChat = false;
    chatArea.focus();
    chatArea.scrollTo(0, chatArea.scrollHeight);
  };
  // @ts-ignore
  const heightOfBox = document.querySelector("#boxQuick").offsetHeight;

  let hasNewMessage = true;
  let showButtonToNewMessage = false;

  let chatArea = null;
  let newMessageArea = null;
  let newMessageHeight = 0;
  let scrollToNewMessage = () => {};
  let replyChat = null;
  let replyChatHeight = 0;
  let showReplyChat = false;
  let eventSetReplyChat = (cond, chatId) => {
    showReplyChat = cond;
    //
    if (cond) {
      setTimeout(() => {
        replyChat = document.querySelector("#replyChat");
        // @ts-ignore
        replyChat.style.height = "";
        // @ts-ignore
        replyChatHeight = replyChat.offsetHeight;
      }, 1);
    } else {
      replyChat.style.height = "0px";
    }
  };

  onMount(() => {
    chatArea = document.querySelector("#chat-area");
    newMessageArea = document.querySelector("[data-date='New Message']");
    newMessageHeight = hasNewMessage ? newMessageArea.scrollHeight : 0;
    scrollToNewMessage = () => newMessageArea.scrollIntoView();
    chatArea.scrollTo(0, chatArea.scrollHeight);
    //
    showButtonToNewMessage =
      // @ts-ignore
      chatArea.offsetHeight - newMessageHeight + 320 > chatArea.scrollTop;
    // @ts-ignore
    chatArea.onscroll = () => {
      showButtonToNewMessage =
        chatArea.offsetHeight - newMessageHeight + 320 > chatArea.scrollTop;
    };
    //
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
      <h3 class="text-lg text-primary font-semibold">
        I-589 - AMARKHILL Obaidullah [Affirmative Filling with ZHN]
      </h3>
      <span class="text-slate-600 text-sm">3 Participants</span>
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
      class="relative h-full overflow-auto space-y-8 scroll-smooth outline-none"
    >
      <div data-date="Yesterday" class="flex flex-col space-y-4">
        <div class="relative text-center">
          <div class="bg-white px-4 relative inline-block">Yesterday</div>
          <hr class="border-0 h-px bg-slate-300 -mt-2.5" />
        </div>
        <div data-message-type="other" class="pr-24">
          <Message
            name="Mary Hilda"
            text="No worries, It will be completed ASAP. I've asked him yesterday."
            time="19:32"
            personIndex={1}
            {eventSetReplyChat}
          />
        </div>
        <div data-message-type="other" class="pr-24">
          <Message
            name="Obaidullah Sumarkhill"
            text="No worries, It will be completed ASAP. I've asked him yesterday."
            time="19:32"
            replied={true}
            repliedFrom="Mary Hilda"
            textReplied="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            minus laboriosam ad ut, facilis placeat? Quisquam tempora animi
            repellendus accusamus quis, praesentium tempore consectetur. Illo
            nihil eveniet laudantium iste rem?"
            personIndex={2}
            {eventSetReplyChat}
          />
        </div>
        <div data-message-type="own" class="ml-auto pl-24">
          <Message
            name="You"
            text="No worries, It will be completed ASAP. I've asked him yesterday."
            time="19:32"
            replied={true}
            repliedFrom="Mary Hilda"
            textReplied="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            minus laboriosam ad ut, facilis placeat? Quisquam tempora animi
            repellendus accusamus quis, praesentium tempore consectetur. Illo
            nihil eveniet laudantium iste rem?"
          />
        </div>
        <div data-message-type="other" class="pr-24">
          <Message
            name="Obaidullah Sumarkhill"
            text="No worries, It will be completed ASAP. I've asked him yesterday."
            time="19:32"
            personIndex={2}
            {eventSetReplyChat}
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
            name="Mary Hilda"
            text="No worries, It will be completed ASAP. I've asked him yesterday."
            time="19:32"
            personIndex={1}
            {eventSetReplyChat}
          />
        </div>
        <div data-message-type="other" class="pr-24">
          <Message
            name="Obaidullah Sumarkhill"
            text="No worries, It will be completed ASAP. I've asked him yesterday."
            time="19:32"
            personIndex={2}
            {eventSetReplyChat}
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
            name="Mary Hilda"
            text="No worries, It will be completed ASAP. I've asked him yesterday."
            time="19:32"
            personIndex={1}
            {eventSetReplyChat}
          />
        </div>
        <div data-message-type="other" class="pr-24">
          <Message
            name="Obaidullah Sumarkhill"
            text="No worries, It will be completed ASAP. I've asked him yesterday."
            time="19:32"
            personIndex={2}
            {eventSetReplyChat}
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
            name="Mary Hilda"
            text="No worries, It will be completed ASAP. I've asked him yesterday."
            time="19:32"
            personIndex={1}
            {eventSetReplyChat}
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
    </div>
  </div>
  <div class="p-4">
    <form
      on:submit|preventDefault={sendNewMessage}
      class="flex items-center relative"
    >
      {#if showReplyChat}
        <div
          transition:fly|local={{ y: 8 }}
          id="replyChat"
          class="absolute bg-slate-100 rounded-t-md border border-slate-300 border-b-0 p-2 w-[calc(100%-75px)] shadow-2xl"
          style="top: -{replyChatHeight - 4}px;height:0px"
        >
          <button
            type="button"
            on:click={() => (showReplyChat = false)}
            class="absolute top-2 right-2 hover:bg-indicator-3 hover:text-white"
          >
            <MdiClose className="w-4 h-4" />
          </button>
          <b>Replying to Mary Hilda</b>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
            minus laboriosam ad ut, facilis placeat? Quisquam tempora animi
            repellendus accusamus quis, praesentium tempore consectetur. Illo
            nihil eveniet laudantium iste rem?
          </p>
        </div>
      {/if}
      <TextInput placeholder="Type a new message" className="z-20" />
      <Button className="py-2.5 ml-2"
        ><span class="font-semibold">Send</span></Button
      >
    </form>
  </div>
</div>
