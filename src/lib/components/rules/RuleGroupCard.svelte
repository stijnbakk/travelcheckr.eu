<script>
import RuleItem from "./RuleItem.svelte";

    export let ruleset;
</script>

<div class="mb-3 border-[1px] border-gray-700 p-5 rounded md:border-0 md:p-0 md:mb-8">
    <h2 class='font-bold font-serif text-2xl mb-3'>{ruleset.text}</h2>
    <!-- <p class='font-serif mb-4'>before your trip</p> -->

    {#each ruleset.rules as rule}
        <RuleItem ruleData={rule} />
    {/each}
    
</div>