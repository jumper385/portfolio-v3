<script>
    import CardHolder from "$lib/components/card-holder.svelte";

    export let data;
    let { projects } = data;
</script>

<div class="container">
    <CardHolder cardArray={projects} />
</div>
