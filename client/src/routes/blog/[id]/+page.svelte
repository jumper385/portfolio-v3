<script>
    import Pocketbase from "pocketbase";

    export let data;
    let { blog } = data;

    const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);
</script>

<title>{blog.title}</title>

<svelte:head>
    <meta name="description" content={blog.summary} />
</svelte:head>

<div class="blog-landing">
    <img alt={blog.summary} src={pb.getFileUrl(blog, blog.displayImg)} />
    <p class="title">{blog.title}</p>
</div>
<div class="blog-content">{@html blog.content}</div>

<style lang="scss">
    .blog-content {
        margin: 0 32pt;
    }
    .blog-landing {
        position: relative;
        margin-bottom: 42pt;
        img {
            width: 100%;
            height: 300pt;
            object-fit: cover;
        }
        .title {
            font-size: 32pt;
            margin: 0;
            padding: 6pt 32pt;
            position: absolute;
            bottom: -16pt;
            left: 32pt;
            background: #ffff00;
            font-weight: bold;
        }
    }
</style>
