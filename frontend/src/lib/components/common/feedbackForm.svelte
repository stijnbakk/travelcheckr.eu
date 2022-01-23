<script>
    let name;
    let email;
    let feedback;

    let feedbackSubmit;
    let buttonAvailable=true;

    const submitForm = async () => {
        buttonAvailable = false
        feedbackSubmit = await fetch('/api/feedback/logFeedback',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                feedback: feedback
            })
        })
        if(feedbackSubmit){
            buttonAvailable = true;
        }
    }
</script>
<form on:submit|preventDefault={submitForm} class="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
      <div class="mt-1">
        <input bind:value={name} placeholder="Who are you, if I might ask?" type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md">
      </div>
    </div>
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
      <div class="mt-1">
        <input bind:value={email} placeholder="Where can I reach you?" id="email" name="email" type="email" autocomplete="email" class="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md">
      </div>
    </div>

    <div class="sm:col-span-2">
      <div class="flex justify-between">
        <label for="feedback" class="block text-sm font-medium text-gray-700">What feedback have you got for me?</label>
      </div>
      <div class="mt-1">
        <textarea bind:value={feedback} id="feedback" name="feedback" aria-describedby="feedback" rows="4" class="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border border-gray-300 rounded-md" placeholder="Tell me how I can improve. What features you like, what features you don't. What things I got wrong, or right." />
      </div>
    </div>
    
    <div class="text-right sm:col-span-2">
      <input type="submit" class="button" value={buttonAvailable ? 'Send in your feedback' : 'Sending...'} >
    </div>
  </form>
  {#if feedbackSubmit}
    <div class="bg-green-700 rounded p-5 text-white px-10 mt-4">
        <p class="text-lg font-bold">Thanks for your feedback! 😃</p>
        <p class="text-sm">Kind Regards, <br/>Stijn</p>
    </div>
{/if}

  <style lang="less">
          .button{
        @apply bg-black text-white font-serif rounded w-full p-3 mt-3 cursor-pointer;
    }
    .button_loading, .button_waiting{
        @apply bg-neutral-400 cursor-none;
    }
  </style>