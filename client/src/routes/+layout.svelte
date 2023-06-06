<script>
    import Footer from "$lib/components/footer.svelte";
    import Nav from "$lib/components/nav.svelte";
    import "$lib/global.scss";
</script>

<svelte:head>
    <link
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        rel="stylesheet"
    />
    <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css"
        rel="stylesheet"
    />
</svelte:head>

<Nav />

<slot />

<Footer />
