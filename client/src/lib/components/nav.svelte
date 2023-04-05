<nav>
    <div class="links">
        <a href="/">home</a>
        <a href="/projects">projects</a>
        <a href="/blog">blog</a>
    </div>
    <div class="links"><a class="accent" href="/contact">contact</a></div>
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
            gap: 12pt;
            a {
                text-decoration: none;
                font-weight: 500;
                color: black;
            }
        }
        .accent {
            color: white !important;
            padding: 12pt 32pt;
            border-radius: 3pt;
            background-color: black;
        }
    }
</style>
