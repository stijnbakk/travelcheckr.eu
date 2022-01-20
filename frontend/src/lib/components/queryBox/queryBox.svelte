<script>

    let queryResult;
    
    let isButtonAvailable = true;
    
    export let setResultsAvailable;
    export let setQueryResult;

    let initialDate = new Date()
    let search_date= initialDate.toISOString().split('T')[0]
    // let search_date="2022-01-15"
    let destination="germany"

    const startQueryRequest = () => {
        isButtonAvailable = false;
        queryRulesFromBackend();
        logQueryToBackend();
    }

    const queryRulesFromBackend = async () => {
        const getResult = await fetch('/api/query/query_rules',{
            method: 'POST',
            body: JSON.stringify({
                search_date: search_date,
                destination: destination
            })
        });

        queryResult = await getResult.json();
        console.log(queryResult);
        if(queryResult){setResultsAvailable(true)}
        if(queryResult){setQueryResult(queryResult)}
        isButtonAvailable = true;
    }

    const logQueryToBackend = async () => {
        fetch('/api/query/log_query',{
            method: 'POST',
            body: JSON.stringify({
                search_date: search_date,
                destination: destination
            })
        });
        
    }

</script>
<div class="max-w-full mt-6 border-[1px] border-gray-600 rounded justify-left items-left p-5 text-left bg-white">
    <!-- on:submit|preventDefault={toggleLandingResultView} -->
    <form on:submit|preventDefault={startQueryRequest}>
        <label class="label">Destination:</label>
        <select class="input">
            <option value="germany">Germany</option>
        </select>

        <label class="label">Arrival date:</label>
        <input 
        type="date"
            class="input" 
            bind:value={search_date}
        >
        <input
        type="submit"
        class="button"
        class:button_loading={!isButtonAvailable}
        value={isButtonAvailable? "Check your trip" : "Loading results..."}>
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
        @apply bg-black text-white font-serif rounded w-full p-3 mt-3;
    }
    .button_loading{
        @apply bg-gray-400;
    }
</style>