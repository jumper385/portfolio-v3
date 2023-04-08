<script>
    import { dateString } from "$lib/helpers/dateString.js";
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
    <img
        alt={blog.summary}
        src={pb.getFileUrl(blog, blog.displayImg, { thumb: "500x0" })}
    />
    <p class="title">{blog.title}</p>
</div>

<div class="blog-details">
    <p>Written by <span class="author">{blog.author}</span></p>
    <p class="date">{dateString(blog.created)}</p>
</div>

<hr />

<div class="blog-content">{@html blog.content}</div>

<style lang="scss">
    .blog-content {
        margin: 0 32pt;
    }
    .blog-details {
        font-size: 8pt;
        display: flex;
        justify-content: space-between;
        padding: 0pt 32pt;
        margin-bottom: 6pt;
        .author {
            font-weight: 600;
        }
    }

    hr {
        margin: 0 32pt;
        height: 0;
        border: 1px rgb(236, 236, 236) solid;
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
    @media only screen and (max-width: 1000px) {
        .blog-landing {
            position: static;
            margin: 0;
            .title {
                font-size: 24pt;
                position: static;
                background: none;
            }
        }
    }
</style>
