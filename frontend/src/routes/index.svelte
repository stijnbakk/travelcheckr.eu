<script>
	import Lazy from 'svelte-lazy';
    import LandingPageSection from "$lib/components/landingPage/LandingPageSection.svelte";
import Roadmap from "$lib/components/landingPage/Roadmap.svelte";
import Why from "$lib/components/landingPage/Why.svelte";
import { menuBarHeight } from "$lib/stores/stores";
import Feedback from '$lib/components/landingPage/Feedback.svelte';
import Beta from './beta.svelte';
</script>


<!-- <meta property="og:title" content="Check travel rules and COVID restrictions - TravelCheckr.eu">
<meta property="og:site_name" content="TravelCheckr.eu">
<meta property="og:url" content="https://www.travelcheckr.eu">
<meta property="og:description" content="Quickly make sense of the maze of COVID rules. Easily understand what you need to do, bring, follow and expect about your">
<meta property="og:type" content="website">
<meta property="og:image" content=""> -->

<svelte:head>
	<title>Check travel rules and COVID restrictions - TravelCheckr.eu</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
	<meta property="og:title" content="Check travel rules and COVID restrictions - TravelCheckr.eu">
	<meta property="og:site_name" content="TravelCheckr.eu">
	<meta property="og:url" content="https://www.travelcheckr.eu">
	<meta property="og:description" content="Quickly make sense of the maze of COVID rules. Easily understand what you need to do, bring, follow and expect about your">
	<meta property="og:type" content="website">
	<meta property="og:image" content="./static/cover.png">
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







