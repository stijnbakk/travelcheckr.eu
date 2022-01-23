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
	<title>Check travel rules and COVID restrictions - TravelCheckr.eu</title>
	<meta name="robots" content="noindex nofollow" />
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
	<meta property="og:image" content="./cover.png">

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="https://www.travelcheckr.eu/">
	<meta property="twitter:title" content="Check travel rules and COVID restrictions - TravelCheckr.eu">
	<meta property="twitter:description" content="Quickly make sense of the maze of COVID rules. Easily understand what you need to do, bring, follow and expect about your">
	<meta property="twitter:image" content="./cover.png">
</svelte:head>


<div class="mt-[-{$menuBarHeight}]">

	<LandingPageSection />
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







