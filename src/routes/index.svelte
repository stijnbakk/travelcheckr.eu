<script>
	import Lazy from 'svelte-lazy';
    import LandingPageSection from "$lib/components/landingPage/LandingPageSection.svelte";
import Roadmap from "$lib/components/landingPage/Roadmap.svelte";
import Why from "$lib/components/landingPage/Why.svelte";
import { menuBarHeight } from "$lib/stores/stores";
import Feedback from '$lib/components/landingPage/Feedback.svelte';
import Beta from './beta.svelte';
</script>


<svelte:head>
	<meta name="robots" content="all" />
	<html lang="en" />

	<!-- Primary Meta Tags -->
	<title>Check travel rules and COVID restrictions - TravelCheckr.eu</title>
	<meta name="title" content="Check travel rules and COVID restrictions - TravelCheckr.eu">
	<meta name="description" content="Quickly make sense of the maze of COVID rules. Easily understand what you need to do, bring, follow and expect about your">

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://www.travelcheckr.eu/">
	<meta property="og:title" content="Check travel rules and COVID restrictions - TravelCheckr.eu">
	<meta property="og:description" content="Quickly make sense of the maze of COVID rules. Easily understand what you need to do, bring, follow and expect about your">
	<meta property="og:image" itemprop="image" content="/cover.png">

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="https://www.travelcheckr.eu/">
	<meta property="twitter:title" content="Check travel rules and COVID restrictions - TravelCheckr.eu">
	<meta property="twitter:description" content="Quickly make sense of the maze of COVID rules. Easily understand what you need to do, bring, follow and expect about your">
	<meta property="twitter:image" itemprop="image" content="/cover.png">
</svelte:head>


<div class="mt-[-{$menuBarHeight}]">

	<LandingPageSection />
	<Lazy>
		<div class="bg-red-600">
			<div class="mx-auto max-w-[900px] p-10 text-white">
				<h1 class="font-sans text-2xl pb-5">⚠️ This website is no longer actively maintained.</h1>
				<p class="pb-5">I built this website as a idea to help people navigate COVID restrictions, and as a first introduction to developing with <a class="underline" href="https://kit.svelte.dev">SvelteKit</a>. However, as European countries are now lifting COVID restrictions, I find this website is providing little additional value. This combined with the hazzle of keeping up with all the restrictions have led me to the decision that I will continue to work on other projects.</p>
				<p>Feel free to keep using the site for inspiration, just don't trust the information is accurate. If you want, you can also dive into the code on <a href="https://github.com/lucilus-xyz/travelcheckr.eu" class="underline">GitHub</a>.</p>
			</div>
		</div>
	</Lazy>
	<Lazy>
		<Why/>
	</Lazy>
	<Lazy>
		<Feedback />
	</Lazy>
	<Lazy>
		<Roadmap />
	</Lazy>





</div>







