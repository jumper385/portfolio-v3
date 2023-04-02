<script>
    export let data;
    let { blog } = data;
</script>

<p>{blog.title}</p>
<p>{@html blog.content}</p>
