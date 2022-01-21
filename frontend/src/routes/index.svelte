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
    let destination="belgium"

    const toggleMapBoolean = () => (
        console.log('toggleMapBoolean triggered inside index')
    )


    


</script>




<svelte:head>
	<title>Check travel rules and COVID restrictions - Rulemate.eu</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>




<LandingPageSection 
    isResultsAvailable={isResultsAvailable}
    setResultsAvailable={setResultsAvailable} 
    queryResult={queryResult}
    setQueryResult={setQueryResult}
/>

<!-- <EuropeMap destination={destination} setMapToDestination={isResultsAvailable} /> -->








