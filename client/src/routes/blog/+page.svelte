<script>
    import CardHolder from "$lib/components/card-holder.svelte";

    export let data;
    let { blog } = data;
</script>

<svelte:head>
    <title>Digism Blog</title>
</svelte:head>

<div class="container">
    <CardHolder cardArray={blog} />
</div>
