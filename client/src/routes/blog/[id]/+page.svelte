<script>
    export let data;
    let { blog } = data;
</script>

<title>{blog.title}</title>

<svelte:head>
    <meta name="description" content={blog.summary} />
</svelte:head>

<p>{blog.title}</p>
<p>{@html blog.content}</p>
