<script>
    import BlogCard from "$lib/components/blogCard.svelte";
    import Pocketbase from "pocketbase";

    export let data;

    const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);
</script>

<div class="card-holder">
    {#each data.blogs as blog}
        <BlogCard
            url="/blog/{blog.id}"
            title={blog.title}
            author={blog.author}
            category={blog.category}
            imgUrl={pb.getFileUrl(blog, blog.displayImg, { thumb: "0x300" })}
            likes={blog.likes}
            views={blog.views}
        />
    {/each}
</div>

<style>
    .card-holder {
        margin: 32pt;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 6pt;
    }
</style>
