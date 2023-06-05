<script>
    import Footer from "$lib/components/footer.svelte";
    import Nav from "$lib/components/nav.svelte";
    import "$lib/global.scss";
</script>

<svelte:head>
    <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css"
        rel="stylesheet"
    />
</svelte:head>

<Nav />

<slot />

<Footer />
