<script>
	import '../app.css';
	import {isBeta, menuBarHeight, queryInputArrivalDate, queryInputDestination} from '$lib/stores/stores'
	import { onDestroy } from 'svelte';
import NewsletterSignUp from '$lib/components/common/NewsletterSignUp.svelte';

	const unsubscribe = isBeta.subscribe((value) => ($isBeta = value));
	onDestroy(unsubscribe);
</script>


<main class='mb-auto'>
	<div class="w-screen p-3 text-center absolute top-0 z-10 h-[{$menuBarHeight}]">
        <div><a href="/">
			{#if $isBeta}
				<span class="px-2  py-1 text-sm rounded inline-block bg-yellow-300 font-serif">beta</span>.
			{/if}
            <p class="font-bold inline font-serif">TravelCheckr<span class="font-normal">.eu 
			</span></p>
			</a>
        </div>
    </div>

	<div class="pt-[{$menuBarHeight}]">
		<slot />

		
		<div class="bg-neutral-600">
			<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
			  <div class="lg:w-0 lg:flex-1">
				<h2 class="text-3xl font-bold font-serif tracking-tight text-white sm:text-4xl" id="newsletter-headline">
				  Want me to keep you up to date?
				</h2>
				<p class="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
				  Drop your email. I won't spam you. Pinky promise.
				</p>
			  </div>
			  <NewsletterSignUp />
			</div>
		  </div>

	</div>
</main>
<footer class='bg-neutral-900 p-10 text-center text-white'>
	<p class='font-serif font-bold'>TravelCheckr<span class="font-normal">.eu</span></p>
	<p class="opacity-25">Built with ♥ in Haarlem, Netherlands</p>
	<a class="opacity-25 underline underline-offset-2" href="mailto:stijn@travelcheckr.eu">stijn@travelcheckr.eu</a>
</footer>
