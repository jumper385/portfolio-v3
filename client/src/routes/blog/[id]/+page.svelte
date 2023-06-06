<script>
    import Profile from "$lib/components/profile.svelte";

    export let data;
    let { article } = data;
    console.log(article);
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
            profile="https://placehold.co/600x400"
            role="Graduate Electronics Engineer @ VitalTrace"
        />
    </div>
</div>

<div class="landing">
    <img
        class="blog-img"
        id="bt1mmfzs"
        src={article.display[0]}
        alt={article.description}
    />
</div>

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
        title {
            display: flex;
            gap: 24pt;
            * {
                margin: 0;
            }
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
</style>
