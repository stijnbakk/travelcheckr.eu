<script>

import { menuBarHeight, queryInputArrivalDate, queryInputDestination } from "$lib/stores/stores";

let destination = $queryInputDestination['name'] ? $queryInputDestination['name'] : "";
let arrival_date = $queryInputArrivalDate ? $queryInputArrivalDate : "";
let feedback;
let name;
let email;

let ruleFeedbackLogging

const sendRuleFeedback = async () => {
    ruleFeedbackLogging = await fetch("/api/feedback/logRuleFeedback", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            destination: destination,
            arrival_date: arrival_date,
            feedback: feedback,
            name: name,
            email: email
        })
    });
}

</script>

<svelte:head>
	<title>Feedback about rules</title>
</svelte:head>

<div class="container max-w-4xl mx-auto py-10 px-3">
    <div class="md:flex md:items-center mb-6 mt-20">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
            <h1 class="text-4xl font-serif font-bold mb-10">Feedback about rules</h1>
            <p class="font-serif text-xl">The rules are changing constantly. I'm doing my best to keep up. <span class="font-bold">Thank you very much for helping me out by letting me know how I got the rule wrong.</span></p>
        </div>
    </div>
    
    
    <form class="w-full" on:submit|preventDefault={sendRuleFeedback}>
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-neutral-500 font-bold md:text-right mb-1 md:mb-0 pr-4 pb-4" for="rule_feedback_destination">
                Destination
              </label>
            </div>
            <div class="md:w-2/3">
              <input bind:value={destination} placeholder="Destination" class='input' id="rule_feedback_destination"/>
            </div>
        </div>

        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-neutral-500 font-bold md:text-right mb-1 md:mb-0 pr-4 pb-4" for="rule_feedback_arrival">
                Arrival date
              </label>
            </div>
            <div class="md:w-2/3">
              <input bind:value={arrival_date} type="date" class='input' id="rule_feedback_arrival"/>
            </div>
        </div>

        <div class="md:flex md:items-top mb-6">
            <div class="md:w-1/3">
              <label class="block text-neutral-500 font-bold md:text-right mb-1 md:mb-0 pr-4 pb-4" for="rule_feedback_feedback">
                Feedback
              </label>
            </div>
            <div class="md:w-2/3">
              <textarea bind:value={feedback} placeholder="What feedback can you give me? What rules did I miss? What rules are no longer relevant? Do you have any relevant links or other information I can add to the website?" type="date" class='input' id="rule_feedback_feedback"/>
            </div>
        </div>
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-neutral-500 font-bold md:text-right mb-1 md:mb-0 pr-4 pb-4" for="rule_feedback_name">
                Your name
                <br/>
                <span class="text-xs font-normal">Not required</span>
              </label>
            </div>
            <div class="md:w-2/3">
              <input bind:value={name} type="name" class='input' id="rule_feedback_name"/>
            </div>
        </div>
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-neutral-500 font-bold md:text-right mb-1 md:mb-0 pr-4 pb-4" for="rule_feedback_email">
                Your email
                <br/>
                <span class="text-xs font-normal">Not required</span>
              </label>
            </div>
            <div class="md:w-2/3">
              <input bind:value={email} type="email" class='input' id="rule_feedback_email"/>
            </div>
        </div>
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
            </div>
            <div class="md:w-2/3">
              <input type="submit" class="button">
            </div>
        </div>
        {#if ruleFeedbackLogging}
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
            </div>
            <div class="md:w-2/3 bg-green-700 text-white font-bold p-6 rounded text-center">
              <p>Thank you very much for sending in your feedback!
            </div>
        </div>
        {/if}
        
    </form>
    
</div>

<style>
    .input{
        @apply w-full border-[1px] border-gray-200 font-serif rounded py-2 px-3 mb-3 text-lg;
    }
    .button{
        @apply bg-black text-white font-serif rounded w-full p-3 mt-3 cursor-pointer;
    }
</style>