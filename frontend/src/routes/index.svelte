<script>
	import Lazy from 'svelte-lazy';
    import LandingPageSection from "$lib/components/landingPage/LandingPageSection.svelte";
import Roadmap from "$lib/components/landingPage/Roadmap.svelte";
import Why from "$lib/components/landingPage/Why.svelte";
import { menuBarHeight } from "$lib/stores/stores";
import Feedback from '$lib/components/landingPage/Feedback.svelte';
</script>




<svelte:head>
	<title>Check travel rules and COVID restrictions - TravelCheckr.eu</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
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







