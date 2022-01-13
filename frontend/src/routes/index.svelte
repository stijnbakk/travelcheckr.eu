<script>
    import * as rulesets_data from '../data/rulesets.json'
    
    let countries = [
        {
            id: 'germany', 
            name: "Germany", 
            ruleset: 'germany_a'
        },
        {
            id: 'netherlands', 
            name: "Netherlands", 
            ruleset: 'netherlands_a'
        },
        {
            id: 'sweden', 
            name: "Sweden", 
            ruleset: 'sweden_a'
        },
    ]
    
    let rulesets = [
        {
            id: "germany_a", 
            rules: {
                actions_before_travel: [
                    {
                        action: "Get booster shot",
                        info: "Required as of february 2022",
                        link: "https://www.r6stats.com/stats/player/eu/pc/germany/sven-karlsson"
                    },
                    {
                        action: "Install QR code",
                        info: "Needed to show when checkin in"
                    }
                ],
                documents_during_travel: [
                    {
                        document: "QR code",
                        info: "Required during check-in and boarding",
                        link: "https://www.google.com"
                    }
    
                ],
                rules_during_stay: [
                    {
                        rule: "Wear facemask while indoors",
                        clarification: "Only public buildings, FFP2 mask required",
                        link: "https://www.google.com"
                    }
                ],
                notes: "This is a note about Germany"
            }
        },  
        {
            id: "netherlands_a", 
            rule: "Netherlands ruleset"
        },
        {
            id: "sweden_a", 
            rule: "Sweden ruleset"
        }
    ]
    
    // $: filteredList = items.filter(item => item.name.indexOf(searchTerm) !== -1);
    $: filteredList = rulesets.filter(rule => rule.id.indexOf(selected.ruleset) !== -1);
    
    let selected = countries[0];
    </script>
    
    <div class="">
        <div class="bg-white p-12 pt-20">
            <h1 class="text-3xl font-bold pb-7">Quickly check your travel rules</h1>
    
            <p class="text-xs pb-5">Tell us about your trip</p>
            <select bind:value={selected} class="w-full">
                {#each countries as country}
                    <option value="{country}">{country.name}</option>
                {/each}
            </select>
        </div>
        
        <div class="p-5">
        {#if filteredList[0].rules}
            <div>
                <!-- Actions before travel -->
                {#if filteredList[0].rules.actions_before_travel}
                <div class="bg-white mb-5 p-5">
                    <h2 class='text-lg font-bold'>Actions before travel</h2>
                    <ul>
                        {#each filteredList[0].rules.actions_before_travel as action}
                            <li>{action.action}</li>
                        {/each}
                    </ul>
                </div>
                {/if}
    
                <!-- Documents during travel -->
                {#if filteredList[0].rules.documents_during_travel}
                <div class="bg-white mb-5 p-5">
                    <h2 class='text-lg font-bold'>Documents during travel</h2>
                    <ul>
                        {#each filteredList[0].rules.documents_during_travel as document}
                            <li>{document.document}</li>
                        {/each}
                    </ul>
                </div>
                {/if}
    
                <!-- Rules during stay -->
                {#if filteredList[0].rules.rules_during_stay}
                <div class="bg-white mb-5 p-5">
                    <h2 class='text-lg font-bold'>Rules during stay</h2>
                    <ul>
                        {#each filteredList[0].rules.rules_during_stay as rule}
                            <li>{rule.rule}</li>
                        {/each}
                    </ul>
                </div>
                {/if}
            </div>
        {:else}
        <div class="bg-white w-full p-5">
            <p>Rules not available</p>
            
        </div>
        
        {/if}
    
        </div>
        
    </div>