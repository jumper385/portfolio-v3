<script>
    import CardHolder from "$lib/components/card-holder.svelte";

    export let data;
    let { projects } = data;
</script>

<svelte:head>
    <title>Digism Projects</title>
</svelte:head>

<div class="container">
    <CardHolder cardArray={projects} />
</div>
