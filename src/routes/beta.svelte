<script>
import { text } from "svelte/internal";

    let queryResult; 

    let search_date = '2022-01-15';
    let destination = 'germany';

    let buttonDisabled = false;

    const startQueryRequest = () => {
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
        console.log(queryResult)
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

<div class="bg-slate-800 w-full min-h-screen">
    <div class="p-5 bg-white w-full text-xl">
        <form on:submit|preventDefault={startQueryRequest}>
            On <input type="date" name="search_date" value="2022-01-15" class="text-xl w-auto border-0 underline">
            <br/>
            I will travel from <input type="text" name="departure" value="Netherlands" class="text-xl p-0 w-auto border-0 underline underline-offset-4">
            <br/>
            To <input type="text" name="destination" value="Germany" class="text-xl p-0 w-auto border-0 underline underline-offset-4">
            <br/><br/>
            
            <input disabled={buttonDisabled} type="submit" class="bg-blue-600 p-3" value="Tell me what I should know">
        </form>
    </div>

    <pre>
        {queryResult}
    </pre>




</div>