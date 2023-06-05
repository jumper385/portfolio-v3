<script>
    import Card from "./card.svelte";
    export let cardArray;
</script>

<div class="card-holder">
    {#each cardArray as card}
        <Card
            description={card?.description}
            title={card?.title}
            imageUrl={card?.display[0]}
            cardUrl={card?.cardUrl}
        />
    {/each}
</div>

<style>
    .card-holder {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        box-sizing: border-box;
        align-content: space-between;
        justify-content: space-between;
        grid-gap: 32pt;
    }

    @media screen and (max-width: 768px) {
        .card-holder {
            grid-template-columns: 1fr;
        }
    }
</style>
