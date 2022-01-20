<script>
    import { exampleGroupedRules } from "$lib/constants/exampleGroupedRules"
    import QueryBox from "$lib/components/queryBox/queryBox.svelte"
    import RuleGroupCard from "$lib/components/rules/RuleGroupCard.svelte"




    // Parameter set 1
    export let setResultsAvailable;
    export let isResultsAvailable;

    // Parameter set 2
    export let queryResult;
    export let setQueryResult;
    
    // $:console.log('queryResult in landingpage:', queryResult)
</script>

<div 
            id="landing"
            class="md:grid md:grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto]"
            class:resultView={isResultsAvailable}
            >
            <!-- 1st grid column -->
            <div class="column1 h-screen grid-col flex justify-center items-center flex-col p-10 text-center">
                    <h1 class="font-serif font-bold text-4xl leading-normal mb-5">Check travel rules and COVID restrictions</h1>
                    <p class="text-xl leading-normal font-light mb-10">Quickly understand what to <span class="highlighted_underline">do</span>, <span class="highlighted_underline">bring</span>, <span class="highlighted_underline">know</span> and <span class="highlighted_underline">expect</span> about your trip</p>
                    <!-- <button on:click={setResultsAvailable} value="test me">Test me!!!</button> -->
                    
                    <QueryBox 
                        setResultsAvailable={setResultsAvailable}
                        setQueryResult={setQueryResult}
                        />
                    
            </div>
            <!-- 2nd grid column -->
            {#if isResultsAvailable}
            <div class="column2 md:flex justify-center items-left md:h-full flex-col p-10 text-left h-auto">

                <h1 class="font-bold font-serif text-3xl mb-10">What you need to know about your trip</h1>

                {#if queryResult}
                    {#if queryResult.a_actions_before_travel}
                        <RuleGroupCard ruleset={queryResult.a_actions_before_travel}/>
                    {/if}

                    {#if queryResult.b_documents_during_travel}
                        <RuleGroupCard ruleset={queryResult.b_documents_during_travel}/>
                    {/if}

                    {#if queryResult.c_rules_during_stay}
                        <RuleGroupCard ruleset={queryResult.c_rules_during_stay}/>
                    {/if}

                    {#if queryResult.d_expect_during_stay}
                        <RuleGroupCard ruleset={queryResult.d_expect_during_stay}/>
                    {/if}
                {/if}
            </div>
            {/if}

            <!-- 3rd grid column -->
            <div class="column3 "></div>
</div>

<style lang="scss">
    .highlighted_underline{
        @apply underline underline-offset-2
    }
    
    #landing{
        transition: all 0.5s ease-in-out;
    }
    @media only screen and (max-width: 767px) {
        #landing{
            .column1{
                width: 100vw;
                transition: width 0.5s ease-in-out;
                text-align: center;
            }
            .column2, .column3{
                visibility: visible;
            }
            &.resultView{
                .column1{
                    width: 100%;
                }
                .column2{
                    width: 100%;
                    visibility: visible
                }
                .column3{
                    width: 0px;
                    visibility: hidden
                }
    
            }
        }
    }
    
    
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        #landing{
            .column1{
                width: 100vw;
                transition: width 0.5s ease-in-out;
                text-align: center;
            }
            .column2, .column3{
                visibility: hidden;
            }
            &.resultView{
                .column1{
                    width: 40vw;
                }
                .column2{
                    width: 60vw;
                    visibility: visible
                }
                .column3{
                    width: 0px;
                    visibility: visible
                }
    
            }
        }
    }
    
    @media only screen and (min-width: 1024px) {
        #landing{
            .column1{
                width: 100vw;
                transition: width 0.5s ease-in-out;
                text-align: center;
            }
            &.resultView{
                .column1{
                    width: 25vw;
                }
                .column2{
                    transition: visibility 1s ease-in-out;
                    transition-delay: 0.5s;
                    width: 40vw
                }
                .column3{
                    width: 35vw
                }
            }
        }
    }
    
    </style>