<script>
    let email;
    let newsletterSignUp;
    let buttonAvailable = true;
    const sendNewsletterSignup = async () => {
        buttonAvailable = false;
        newsletterSignUp = await fetch("/api/feedback/newsletter-signup",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email
            })
        })
    }
</script>
<div class="mt-8 lg:mt-0 lg:ml-8">
    {#if !newsletterSignUp}
    <form class="sm:flex" on:submit|preventDefault={sendNewsletterSignup}>
      <label for="email-address" class="sr-only">Email address</label>
      <input id="email-address" bind:value={email} placeholder="Where can I reach you?" name="email-address" type="email" autocomplete="email" required class="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md" >
      <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
        <button type="submit" disabled={!buttonAvailable} class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-700 hover:bg-pink-60 focus:outline-none focus:ring-2 focus:ring-offset-2 ">
          {buttonAvailable? 'Sign me up!' : 'Sending...'}
        </button>
      </div>
    </form>
    {:else}
    <div class="bg-green-700 rounded p-5 text-white px-10">
        <p class="text-lg font-bold">All signed up, thanks!</p>
        <p>We'll be in touch soon 🙂</p>

    </div>
    {/if}
  </div>