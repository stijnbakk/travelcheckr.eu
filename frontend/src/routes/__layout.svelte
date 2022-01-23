<script>
	import '../app.css';

	let environment = import.meta.env.VITE_DEPLOY_MODE
	$: isBeta = environment === 'beta' || "development" ? true : false;
</script>

<main>
	<div class="w-screen p-3 text-center absolute top-0 z-10 h-[50px]">
        <div>
			{#if isBeta}
				<span class="px-2  py-1 text-sm rounded inline-block bg-yellow-300 font-serif">beta</span>.
			{/if}
            <p class="font-bold inline font-serif">TravelCheckr<span class="font-normal">.eu 
			</span></p>
        </div>
    </div>

	<slot />

	

	<div class="w-full p-3">
		<div class="w-full bg-yellow-300 text-black font-bold p-3 rounded text-sm text-center">
			<div>
				Welcome! Please note this website is not yet officially launched. Some things might not work as expected<br/><span class='font-normal'>Congratulations! You're now an official beta user 😎. <a class="underline underline-offset-2" href="/feedback">I'd love to know who you are and how you think I improve the site</a></span>
			</div>
		</div>
	</div>

	<footer class='bg-neutral-700 p-10 text-center text-white'>
		<p class='font-serif font-bold'>TravelCheckr<span class="font-normal">.eu</span></p>
		<p class="opacity-25">Built with ♥ in Haarlem, Netherlands</p>
		<a class="opacity-25 underline underline-offset-2" href="mailto:stijn@travelcheckr.eu">stijn@travelcheckr.eu</a>
	</footer>
</main>
