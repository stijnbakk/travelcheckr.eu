<script>
    // Import modules
    import axios from 'axios';

    // Import components
    import DatePicker from '$lib/components/DatePicker/DatePicker.svelte';

    // Import custom functions
    import generateQueryBody from '$lib/services/queryingFromNotion/generateQueryBody';} from '$lib/services/querying_from_notion/generateQueryBody';
    import { cleanRules } from '$lib/services/parseData/cleanNotionRules';

    // Import constants
    import { countries } from '$lib/constants/countryValues';


    // Initialize variables
    let result = [];
    let selectedCountry;
    let selectedDate = new Date();
    let resultsAvailable = false;
    
    let loadingResults = false;

    $: selectedDateFormatted = selectedDate.toISOString().split('T')[0];

    const onSelectedDateChange = d => {
        selectedDate = d.detail;
    };

    
    // Debugging & development
    // import { testData } from '$lib/testData';
import ResultsShowbox from '$lib/components/ResultsShower/ResultsShowbox.svelte';
    // console.log(cleanRules(testData.results))
    // result = cleanRules(testData.results)
    // console.log(result)
    // resultsAvailable = true;



    // async function doPost () {
    //     loadingResults = true;
    //     await axios.post(
    //         // API URI
    //         import.meta.env.VITE_RULESET_URI, 
    //         // BODY WITH QUERY FOR NOTION
    //         createQuery(selectedCountry, selectedDateFormatted),
    //         // HEADERS FOR AUTHENTICATION
    //         { 
    //             headers: {
    //                 'content-type': 'application/json', 
    //                 'Authorization': import.meta.env.VITE_RULESET_SECRET, 
    //                 'Notion-Version': '2021-08-16',
    //                 "Access-Control-Allow-Credentials": "true",
    //                 "Access-Control-Allow-Origin": "*",
    //                 "Access-Control-Allow-Methods":"GET,OPTIONS,PATCH,DELETE,POST,PUT",
    //                 "Access-Control-Allow-Headers":"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" 
    //             }
    //     })
    //     .then(function(response) {
    //         // console.log('raw response data:')
    //         // console.log(response.data.results)


    //         result = cleanRules(response.data.results);
    //         resultsAvailable = true;
    //         loadingResults = false;
    //         // console.log("Grouped data should show here after succesfull query of rules")
    //         // console.log('cleaned and grouped data:')
    //         // console.log(result)
    //         return response.data;
    //     })
    //     .catch(function(error) {
    //         console.log(error);
    //     });
    // }

    async function doPost () {
        loadingResults = true;

        // await axios(
        //     import.meta.env.VITE_RULESET_URI, 
        //     {
        //         method: 'POST',
        //         // mode: 'no-cors',
        //         headers: {
        //             'Access-Control-Allow-Origin': '*',
        //             'Content-Type': 'application/json',
        //         },
        //         body: createQuery(selectedCountry, selectedDateFormatted),
        //     },
        // )

        await axios.post(
            // API URI
            import.meta.env.VITE_RULESET_URI, 
            // BODY WITH QUERY FOR NOTION
            generateQueryBody(selectedCountry, selectedDateFormatted),
            // HEADERS FOR AUTHENTICATION
            { 
                headers: {
                    'content-type': 'application/json', 
                    'Authorization': import.meta.env.VITE_RULESET_SECRET, 
                    'Notion-Version': '2021-08-16',
                    "Access-Control-Allow-Credentials": "true",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods":"GET,OPTIONS,PATCH,DELETE,POST,PUT",
                    "Access-Control-Allow-Headers":"X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" 
                }
        })
        .then(function(response) {
            // console.log('raw response data:')
            // console.log(response.data.results)


            result = cleanRules(response.data.results);
            resultsAvailable = true;
            loadingResults = false;
            // console.log("Grouped data should show here after succesfull query of rules")
            // console.log('cleaned and grouped data:')
            // console.log(result)
            return response.data;
        })
        .catch(function(error) {
            console.log(error);
        });
    }
</script>

<div class="bg-gray-600 w-full min-h-screen">
    <div class="bg-pink-700 w-full p-3 text-center text-white">
        <p><span class="font-bold">You're in a beta-version!</span><br/> Not everything is working as it should</p>
    </div>
    <div class="bg-white p-7">

        <p class="font-bold pb-5">Rulemate<span class="font-normal">.eu</span></p>

        <h1 class="font-bold text-3xl pb-9">Quickly check your COVID travel rules</h1>

        <p class="text-xs font-bold pb-2">Destination:</p>
        <select 
            bind:value={selectedCountry}
            class="w-full mb-6"
        >
            <option value={"empty"}>Please select your destination</option>
            {#each countries as country}
                <option value={country.code}>{country.name}</option>
            {/each}
        </select>

        <p class="text-xs font-bold pb-2">Arrival date:</p>
        <DatePicker 
            on:datechange={onSelectedDateChange}
            selected={selectedDate}
        />
        <button 
            type="button" 
            on:click={doPost} 
            class={
                selectedCountry === "empty" || selectedDate === null || loadingResults
                ? "bg-gray-300 cursor-not-allowed w-full rounded p-3 mt-10 text-white"
                // TODO: clean up classes
                : " bg-violet-800 w-full rounded p-3 mt-10 text-white"
            }
            disabled={selectedCountry==="empty" ? true : false}
        >
            {#if selectedCountry=="empty"}
                <p class="text-center text-white">Please select your destination</p>
            {/if}
            {#if selectedDate==null}
                <p class="text-center text-white">Please select your arrival date</p>
            {/if}
            {#if loadingResults}
                <p class="text-center text-white">Loading results...</p>
            {/if}
            {#if !loadingResults && selectedCountry!="empty" && selectedDate!=null}
                <p class="text-center text-white">Check your rules</p>
            {/if}
        </button>


    </div>
    <div class="p-3">
        {#if resultsAvailable}
            <div class="bg-pink-700 p-3 rounded text-white">
                <p class="text-xs"><span class="font-bold">You're using a beta version of this website.</span> Rules are not complete or accurate at this moment.</p>
            </div>
            
            
            {#if result.a_actions_before_travel.rules.length > 0}
                <div class="bg-white p-5 mt-3 rounded-sm">
                    <h2 class="font-bold text-lg">{result.a_actions_before_travel.text}</h2>
                    <hr/>
                    {#each result.a_actions_before_travel.rules as rule}
                        <a class="py-3 block">
                            <p>{rule.title}</p>
                            <p class="text-xs">{rule.description}</p>
                        </a>    
                    {/each}
            
            </div>
            {/if}
            {#if result.b_documents_during_travel.rules.length > 0}
                <div class="bg-white p-5 mt-3 rounded-sm">
                    <h2 class="font-bold text-lg">{result.b_documents_during_travel.text}</h2>
                    <hr/>
                    {#each result.b_documents_during_travel.rules as rule}
                        <a class="py-3 block">
                            <p>{rule.title}</p>
                            <p class="text-xs">{rule.description}</p>
                        </a>    
                    {/each}
            
            </div>
            {/if}
            {#if result.c_rules_during_stay.rules.length > 0}
                <div class="bg-white p-5 mt-3 rounded-sm">
                    <h2 class="font-bold text-lg">{result.c_rules_during_stay.text}</h2>
                    <hr/>
                    {#each result.c_rules_during_stay.rules as rule}
                        <a class="py-3 block">
                            <p>{rule.title}</p>
                            <p class="text-xs">{rule.description}</p>
                        </a>    
                    {/each}
            
            </div>
            {/if}
            {#if result.d_expect_during_stay.rules.length > 0}
            <div class="bg-white p-5 mt-3 rounded-sm">
                <h2 class="font-bold text-lg">{result.d_expect_during_stay.text}</h2>
                <hr/>
                {#each result.d_expect_during_stay.rules as rule}
                    <a class="py-3 block">
                        <p>{rule.title}</p>
                        <p class="text-xs">{rule.description}</p>
                    </a>    
                {/each}
        
            </div>
            {/if}
        {/if}
    </div>

</div>

