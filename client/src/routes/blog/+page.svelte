<script>
    import CardHolder from "$lib/components/card-holder.svelte";

    export let data;
    let { blog } = data;
</script>

<div class="container">
    <CardHolder cardArray={blog} />
</div>
