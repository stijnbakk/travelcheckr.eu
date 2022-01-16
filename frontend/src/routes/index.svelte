<script>
    let queryResult; 

    let search_date = '2022-01-15';
    let destination = 'germany';

    const startQueryRequest = () => {
        queryFromBackend();
        logQueryToBackend();
    }

    const queryFromBackend = async () => {
        const getResult = await fetch('/api/query/query_rules',{
            method: 'POST',
            body: JSON.stringify({
                search_date: search_date,
                destination: destination
            })
        });

        queryResult = await getResult.json();
    }

    const logQueryToBackend = async () => {
        console.log('logRulesToApi called from client');

        fetch('/api/query/log_query',{
            method: 'POST',
            body: JSON.stringify({
                search_date: search_date,
                destination: destination
            })
        });

    }

</script>

<div class="p-5">
    <h1>Api POST test</h1>
    <hr/>

    <form on:submit|preventDefault={startQueryRequest}>
        <input type="submit" class="bg-blue-600 p-3" value="Get results">
    </form>

    <hr/>
    <h1>Results:</h1>
    <pre>
        {queryResult}
    </pre>




</div>