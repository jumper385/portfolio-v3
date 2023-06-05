<script>
    export let title = "Default Title";
    export let description = "Default Description";
    export let imageUrl = "https://via.placeholder.com/150";
    export let cardUrl;
</script>

<article class="card">
    <img class="card-image" src={imageUrl} alt={title} />
    <div class="card-content">
        <h2 class="card-title">
            {#if cardUrl}
                <a href={cardUrl}>{title}</a>
            {:else}
                {title}
            {/if}
        </h2>
        <p class="card-description">{description}</p>
    </div>
</article>

<style lang="scss">
    .card {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 12pt;
        img {
            border-radius: 6pt;
            aspect-ratio: 3 / 2;
            object-fit: cover;
            max-width: 100%;
            max-height: 100%;
        }
        .card-content {
            display: flex;
            flex-direction: column;
            gap: 6pt;
            * {
                margin: 0;
            }
        }
    }
</style>
