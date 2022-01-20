<script>
    // Import custom components and sections
    import EuropeMap from "$lib/components/landingPage/EuropeMap.svelte"
    import LandingPageSection from "$lib/components/landingPage/LandingPageSection.svelte";


    
    let initialDate = new Date()
    let search_date= initialDate.toISOString().split('T')[0]

    let queryResult;
    const setQueryResult = (queryResultInput) => (queryResult = queryResultInput);

    let isResultsAvailable = false
    const setResultsAvailable = (booleanInput) => (isResultsAvailable = booleanInput);


    // Setup parameters for EuropeMap
    let destination="germany"

    const toggleMapBoolean = () => (
        console.log('toggleMapBoolean triggered inside index')
    )


    


</script>




<svelte:head>
	<title>Check travel rules and COVID restrictions - Rulemate.eu</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>

<EuropeMap destination={destination} setMapToDestination={isResultsAvailable} />

<div class="w-full absolute top-0 block">
    <LandingPageSection 
        isResultsAvailable={isResultsAvailable}
        setResultsAvailable={setResultsAvailable} 
        queryResult={queryResult}
        setQueryResult={setQueryResult}
    />
        
    <div>
        test content below landing component
    </div>
</div>







