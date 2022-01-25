<div class="bg-neutral-200">
<div class="mx-auto p-5 py-20 max-w-[900px]">
        <h1 class="font-bold font-serif text-4xl pb-4">What's coming</h1>
        <p class="font-serif text-2xl pb-6">A sneak peak into how I plan on improving this website</p>
        <p class="font-serif mb-5">Already want to try out new features?<br/>Go to <a href="https://beta.travelcheckr.eu" class="underline underline-offset-2">beta.travelcheckr.eu</a> and help me improve this website.</p>

        <a class="button" href="/feedback">Tell me what features you want me to build</a>


        <h2 class="font-serif text-2xl font-bold pb-4">Roadmap as I'm now planning it:</h2>
        <ul>
            <li>Version 0.1 <span class="tag">current version</span></li>
            <li>Version 0.2 <span class="tag">February 2022</span>
                <ul>
                    <li>Multi-language support  🇳🇱 🇩🇪 🇫🇷 <span class="font-normal"> - To make the website more accessible</span></li>
                    <li>Lots of stability and usability improvements 😀 <span class="font-normal"> - To keep the site stable, quick and easy to maintain</span></li>
                    <li>Add 🇩🇪 Germany, 🇳🇱 Netherlands, 🇩🇰 Denmark, 🇸🇪 Sweden, 🇳🇴 Norway, 🇧🇪 Belgium, 🇪🇸 Spain, 🇵🇹 Portugal, 🇮🇹 Italy and 🇬🇷 Greece</li>
                    <li>Dark mode 🌗 <span class="font-normal"> - Easy on the eyes, and simply looks cool 😎</span></li>
                    <li>Download button ⬇️ <span class="font-normal"> - Easily save and share the rules that you should know about</span></li>
                    <li>Search engine improvements 👀<span class="font-normal"> - Found by more people = more people helped 🙂</span></li>
                </ul>
            </li>
            <li>Version 1.0 <span class="tag">April 2022</span>
                <ul>
                    <li>Advanced options: 'from', 'via' and 'vaccination status' <span class="font-normal"> - No more searching what special rules apply if you're only transferring through a country</span></li>
                    <li>🇪🇺 Add all EU countries <span class="font-normal"> - Keep on growing</span></li>
                    <li>GraphQL API 🕸 <span class="font-normal"> - To easily share links with friends and have better search results</span></li>
                    <li>API as a Service 💶 <span class="font-normal"> - What if you can check these rules immediately from the app of your airline or train company?</span></li>
                </ul>
            </li>
            <li>Version 2.0
                <ul>
                    <li>Go global 🌍</li>
                </ul>
            </li>
        </ul>
</div>	
</div>

<style lang="less">
    ul{
        @apply list-disc;

        li{
            @apply font-bold pb-8 text-xl;
            ul{
                @apply list-disc ml-6 pt-4;
                li{
                    @apply font-bold pb-1 text-base;
                }
            }
        }

    }
    .tag{
        @apply text-sm inline bg-blue-300 text-blue-900 border-2 border-blue-400 px-2 rounded-lg ml-2 font-normal py-1;
    }

    .button{
        @apply bg-black text-white font-serif rounded px-8 py-3 mt-3 text-lg mb-10 inline-block cursor-pointer;
        &:hover{
            @apply bg-neutral-700;
        }
    }
</style>