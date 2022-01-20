<script>
    export let ruleData;
</script>
<div class="flex mb-1  py-2 md:px-2 rounded md:ml-[-0.75rem] ">
    <input type="checkbox" class="flex m-1 mr-3">
    <div class="">
        <p>{ruleData.title}</p>
        <p class="text-xs">{ruleData.description}</p>
    </div>
</div>