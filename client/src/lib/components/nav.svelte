<script>
    export let admin;
</script>

<nav>
    <div class="links">
        <a href="/">home</a>
        <a href="/projects">projects</a>
        <a href="/blog">blog</a>
    </div>
    <div class="links">
        {#if !admin}
            <a class="accent" href="/contact">contact</a>
        {:else}
            <a class="accent" href="/dashboard">dashboard</a>
        {/if}
    </div>
</nav>

<style lang="scss">
    nav {
        display: flex;
        justify-content: space-between;
        padding: 32pt;
        box-sizing: border-box;
        .links {
            display: flex;
            box-sizing: border-box;
            align-items: center;
            gap: 12pt;
            a {
                text-decoration: none;
                font-weight: 500;
                color: black;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 6pt;
            }
        }
        .accent {
            color: white !important;
            padding: 6pt 12pt;
            border-radius: 3pt;
            background-color: black;
        }
    }

    @media only screen and (max-width: 600px) {
        .accent {
            padding: 6pt 12pt !important;
            margin: 0;
        }
    }
</style>
