<script>

    let receivedRules; 
    const getRulesFromApi = async () => {
        console.log('getRulesFromApi called from client');

        const submit = await fetch('/api/getRules',{
            method: 'POST',
            body: JSON.stringify({})
        });

        receivedRules = await submit.json();
        console.log(`received data from server on client side:`);
        console.log(receivedRules);
    }
</script>

<div class="p-5">
    <h1>Api POST test</h1>
    <hr/>

    <form on:submit|preventDefault={getRulesFromApi}>
        <input type="submit" class="bg-blue-600 p-3">
    </form>

    <hr/>
    <h1>Results:</h1>
    <pre>
        {receivedRules}
    </pre>




</div>