<script>
    export let imageUrl = ["https://via.placeholder.com/150"];
    export let title;
    let imgIdx = 0;

    const nextPhoto = () => {
        console.log(imageUrl[imgIdx]);
        if (imgIdx + 1 >= imageUrl.length) {
            imgIdx = imgIdx = 0;
        } else {
            imgIdx = imgIdx + 1;
        }
    };

    const prevPhoto = () => {
        if (imgIdx - 1 < 0) {
            imgIdx = imgIdx = 0;
        } else {
            imgIdx = imgIdx - 1;
        }
    };
</script>

<div class="img-carousel">
    <div class="carousel-control">
        {#if imageUrl.length > 1}
            <button class="img-carousel-nav" on:click={prevPhoto}>
                <i class="ri-arrow-left-s-line" />
            </button>
            <button class="img-carousel-nav">
                <i class="ri-arrow-right-s-line" on:click={nextPhoto} />
            </button>
        {/if}
    </div>
    <img class="card-image" src={imageUrl[imgIdx]} alt={title} />
</div>

<style lang="scss">
    .img-carousel {
        position: relative;
        aspect-ratio: 3 / 2;
        img {
            position: absolute;
            object-fit: cover;
            width: 100%;
            aspect-ratio: 3 / 2;
            top: 0;
            left: 0;
            z-index: -100;
            border-radius: 6pt;
        }
        .carousel-control {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 12pt;
        }
        .img-carousel-nav {
            height: 32pt;
            width: 32pt;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100%;
            background: rgba(255, 255, 255, 0.6);
            border: none;
            * {
                height: 100%;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
</style>
