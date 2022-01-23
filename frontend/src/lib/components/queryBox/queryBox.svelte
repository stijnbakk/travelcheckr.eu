<script>
    
    // Import custom components
    import BetaRuleWarning from "../BetaWarnings/BetaRuleWarning.svelte";

    // Import constants
    import { countriesValues } from "$lib/constants/countryValues";

    // Import global store variables
    import { isBeta, queryResultAvailable } from "$lib/stores/stores";
    import { queryInputDestination, queryInputArrivalDate } from "$lib/stores/stores"
    import { queryResult, queryResultValid} from "$lib/stores/stores";
    

    // Manage button state
    let isButtonWaitingForInput = true;
    let isButtonLoading = false;
    $: ($queryInputDestination === "" || $queryInputArrivalDate ==="") ?     
        isButtonWaitingForInput = true : 
        isButtonWaitingForInput = false;
    
    $: console.log("$queryResultValid: ", $queryResultValid);

    export const startQueryRequest = () => {
        isButtonLoading = true;
        queryRulesFromBackend();
        logQueryToBackend();
    }

    const queryRulesFromBackend = async () => {
        const getResult = await fetch('/api/query/query_rules',{
            method: 'POST',
            body: JSON.stringify({
                search_date: $queryInputArrivalDate,
                destination: $queryInputDestination['code']
            })
        });

        $queryResult = await getResult.json();

        if($queryResult){$queryResultValid = true;}
        if($queryResult){$queryResultAvailable = true;}
        isButtonLoading = false;
    }

    const logQueryToBackend = async () => {
        fetch('/api/query/log_query',{
            method: 'POST',
            body: JSON.stringify({
                search_date: $queryInputArrivalDate,
                destination: $queryInputDestination['code']
            })
        });
        
    }

</script>
<div class="max-w-full mt-6 border-[1px] border-gray-600 rounded justify-left items-left p-5 text-left bg-white">

    <form 
        on:submit|preventDefault={startQueryRequest}
        >
        <label class="label" for="destination_input">Destination:</label>
        <select 
            id="destination_input" class="input" 
            bind:value={$queryInputDestination}
            on:change={() => $queryResultValid = false}
        >
            <option value="" disabled selected class="text-neutral-400">Select a destination</option>
            {#each countriesValues as countryValue}
                <option value={countryValue}>{countryValue.name}</option>
            {/each}
        </select>

        <label class="label" for="arrival_input">Arrival date:</label>
        <input 
            id="arrival_input"
            type="date"
            class="input" 
            bind:value={$queryInputArrivalDate}
            on:change={() => $queryResultValid = false}
        >

        {#if $isBeta}
            <BetaRuleWarning />    
        {/if}
        
        <input
            type="submit"
            class="button"
            class:button_waiting={isButtonWaitingForInput}
            class:button_loading={isButtonLoading}
            disabled={isButtonWaitingForInput || isButtonLoading}
            value={!isButtonWaitingForInput? 
                isButtonLoading ? 
                    "Loading..." : "Check your trip"
                    : "Fill in your trip info"}>
    </form>
</div>

<style scoped>
    .label{
        @apply font-bold text-xs pl-3;
    }
    .input{
        @apply w-full border-[1px] border-gray-200 font-serif rounded py-2 px-3 mb-3 text-lg;
    }
    .button{
        @apply bg-black text-white font-serif rounded w-full p-3 mt-3 cursor-pointer;
    }
    .button_loading, .button_waiting{
        @apply bg-neutral-400 cursor-none;
    }
</style>