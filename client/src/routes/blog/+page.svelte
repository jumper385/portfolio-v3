<script>
    import BlogCard from "$lib/components/blogCard.svelte";
    import Pocketbase from "pocketbase";

    export let data;

    const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);
</script>

<title>Blog</title>

<div class="card-holder">
    {#if data.blogs.length > 0}
        {#each data.blogs as blog}
            <BlogCard
                url="/blog/{blog.id}"
                title={blog.title}
                author={blog.author}
                category={blog.category}
                imgUrl={blog.displayImg}
                likes={blog.likes}
                views={blog.views}
            />
        {/each}
    {:else}
        <p style="color:lightgrey">No Blog Entries to Display...</p>
    {/if}
</div>

<style>
    .card-holder {
        margin: 32pt;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 6pt;
    }

    @media only screen and (max-width: 600px) {
        .card-holder {
            grid-template-columns: 1fr;
            grid-row-gap: 24pt;
        }
    }
</style>
