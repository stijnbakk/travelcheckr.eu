<script>
    export let ruleData;
    console.log(ruleData)
</script>


{#if ruleData.link == null}

    <div class="flex mb-1  py-2 md:px-2 rounded md:ml-[-0.75rem] ">
        <input type="checkbox" class="flex m-1 mr-3">
        <div class="">
            <p>{ruleData.title}</p>
            <p class="text-xs">{ruleData.description}</p>
        </div>
    </div>

{:else}
<a href="{ruleData.link}">
    <div class="flex mb-1  py-2 md:px-2 rounded md:ml-[-0.75rem] ">
        <input type="checkbox" class="flex m-1 mr-3">
        <div class="">
            <p>{ruleData.title}</p>
            <p class="text-xs">{ruleData.description}</p>
            <p class="text-blue-900 pt-2 pb-4 text-xs underline underline-offset-2">More information</p>
        </div>
    </div>
</a>

{/if}