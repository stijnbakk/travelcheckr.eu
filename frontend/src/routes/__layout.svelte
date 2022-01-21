<script>
	import '../app.css';
</script>

<main>
	<div class="w-screen p-3 text-center absolute top-0 z-10 h-[50px]">
        <div>
            <h1 class="font-bold font-serif">rulemate<span>.eu</span></h1>
        </div>
    </div>

	<slot />

	

	<div class="w-full bottom-0 p-3">
		<div class="w-full bg-yellow-300 text-black font-bold p-3 rounded text-sm text-center">
			<div>
				Welcome! Please note this website is not yet officially launched. Some things might not work as expected<br/><span class='font-normal'>Congratulations! You're now an official beta user 😎. <a class="underline underline-offset-2" href="/feedback">I'd love to know who you are and how you think I improve the site</a></span>
			</div>
		</div>
	</div>
</main>
