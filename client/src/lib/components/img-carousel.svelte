<script>
    export let imageUrl = ["https://via.placeholder.com/150"];
    export let title;
    export let asHeight = 2;
    export let asWidth = 3;
    export let borderRadius = "6pt";
    let aspectRatio = `${asWidth} / ${asHeight}`;
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

<div class="img-carousel" style="aspect-ratio: {aspectRatio}">
    <div class="carousel-control">
        {#if imageUrl.length > 1}
            <button
                class="img-carousel-nav"
                on:click={prevPhoto}
                disabled={imgIdx == 0}
            >
                <i class="ri-arrow-left-s-line" />
            </button>
            <button
                class="img-carousel-nav"
                disabled={imageUrl.length - 1 == imgIdx}
                on:click={nextPhoto}
            >
                <i class="ri-arrow-right-s-line" />
            </button>
        {/if}
    </div>
    <img
        class="card-image"
        src={imageUrl[imgIdx]}
        alt={title}
        style="border-radius: {borderRadius}"
    />
    {#if imageUrl.length > 1}
        <div class="carousel-info">
            <p>{imgIdx + 1} / {imageUrl.length}</p>
        </div>
    {/if}
</div>

<style lang="scss">
    .img-carousel {
        position: relative;
        img {
            position: absolute;
            height: 100%;
            object-fit: cover;
            width: 100%;
            top: 0;
            left: 0;
            z-index: -100;
        }
        .carousel-control {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 12pt;
            box-sizing: border-box;
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
        .img-carousel-nav:disabled {
            background: rgba(255, 255, 255, 0.2);
        }
        .carousel-info {
            position: absolute;
            bottom: 0;
            display: flex;
            justify-content: center;
            // background: pink;
            padding: 0;
            margin: 0;
            width: 100%;
            * {
                margin: 0;
            }
        }
    }
</style>
