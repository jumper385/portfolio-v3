<script>
    import Blog from "$lib/components/dashboard/blog.svelte";
    import Inbox from "$lib/components/dashboard/inbox.svelte";

    export let data;
    let { inbox, blog } = data;
</script>

<div class="dashboard">
    <Inbox {inbox} />
    <Blog {blog} />
</div>

<style lang="scss">
    .dashboard {
        padding: 0 32pt;
        display: flex;
        gap: 24pt;
        width: 100%;
        box-sizing: border-box;
        justify-content: space-between;
    }

    @media only screen and (max-width: 600px) {
        .dashboard {
            display: flex;
            flex-direction: column;
        }
    }
</style>
