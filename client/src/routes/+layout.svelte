<script>
    import Nav from "$lib/components/nav.svelte";
    import Socials from "$lib/components/socials.svelte";
    import "../global.scss";
</script>

<svelte:head>
    <link
        href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css"
        rel="stylesheet"
    />
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
    />

    <meta name="description" content="Electronics is kidna fun!" />
</svelte:head>

<Nav />
<slot />
<Socials />
