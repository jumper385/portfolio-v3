<script>
    import ImgCarousel from "$lib/components/img-carousel.svelte";
    import Profile from "$lib/components/profile.svelte";

    export let data;
    let { article, profile } = data;
</script>

<svelte:head>
    <title>{article.title}</title>
    <meta name="description" content={article.description} />
    <meta name="author" content={article.author} />
</svelte:head>

<div class="blog-container">
    <div class="title-block">
        <div class="title">
            <p>{article.category}</p>
            <h1>{article.title}</h1>
        </div>
        <Profile
            date={article.created}
            name="Henry Chen"
            profile={profile.landing_img}
            role="Graduate Electronics Engineer @ VitalTrace"
        />
    </div>
</div>

<ImgCarousel
    title={article.title}
    imageUrl={article.display}
    asHeight={7}
    asWidth={16}
    borderRadius="0"
/>

<div class="blog-container" style="margin-bottom:24pt;">
    <div>{@html article.content}</div>
</div>

<div id="emotes">
    <!-- <p id="xygdve4o">Likes: {article.likes}</p> -->
    <p style="text-align:center">Views: {article.views}</p>
</div>

<style lang="scss">
    .title-block {
        display: flex;
        flex-direction: column;
        margin-bottom: 24pt;
        .title {
            display: flex;
            flex-direction: column;
            gap: 12pt;
            * {
                margin: 0;
            }
            margin-bottom: 12pt;
        }
    }

    .blog-container {
        max-width: 640px;
        margin: 0 auto;
    }

    .blog-img {
        width: 100%;
        aspect-ratio: 1280 / 500;
        object-fit: cover;
    }

    @media screen and (max-width: calc(640px + 32pt)) {
        .blog-container {
            padding: 0 24pt;
        }
    }
</style>
