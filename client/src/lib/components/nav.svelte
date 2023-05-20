<script>
    export let admin;
</script>

<nav>
    <div class="links">
        {#if admin}
            <a href="/admin/dashboard">dashboard</a>
            <a href="/admin/projects">projects</a>
            <a href="/admin/blog">blog</a>
            <a href="/admin/messages">messages</a>
            <a href="/admin/messages">settings</a>
        {:else}
            <a href="/">home</a>
            <a href="/projects">projects</a>
            <a href="/blog">blog</a>
        {/if}
    </div>
    <div class="links">
        {#if admin}
            <p class="accent">signout</p>
        {:else}
            <a href="/contact" class="accent">contact</a>
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
            text-decoration: none !important;
            font-weight: 500 !important;
            color: black !important;
            display: flex !important;
            align-items: center !important;
            justify-content: space-between;
            gap: 6pt;
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
