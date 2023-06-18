<script>
    import ImgCarousel from "./img-carousel.svelte";

    export let title = "Default Title";
    export let description = "Default Description";
    export let imageUrl = [];
    export let cardUrl;
</script>

<article class="card">
    <ImgCarousel {imageUrl} {title} />
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
        .card-content {
            display: flex;
            flex-direction: column;
            gap: 6pt;
            padding: 6pt;
            * {
                margin: 0;
                text-decoration: none;
            }
            .card-title {
                * {
                    font-size: 16pt;
                    font-weight: 600;
                }
            }
            .card-description {
                line-height: 150%;
            }
        }
    }
</style>
