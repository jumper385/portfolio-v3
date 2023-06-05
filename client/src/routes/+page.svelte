<script>
    import CardHolder from "$lib/components/card-holder.svelte";
    import Card from "$lib/components/card.svelte";
    import Socials from "$lib/components/socials.svelte";

    export let data;
    let { siteElements, projects, blog } = data;
</script>

<div class="landing-row">
    <div class="container landing-title">
        <div class="title">
            <h1>{siteElements.site_title}</h1>
            <p>{siteElements.slogan}</p>
        </div>

        <div class="skills">
            {#each siteElements.skills.split(",") as skill}
                <p>{skill}</p>
            {/each}
        </div>

        <Socials />
    </div>

    <div class="container img-container">
        <img
            class="landing-img"
            src={siteElements.landing_img}
            alt="a landing"
        />
    </div>
</div>

<div class="container">
    <h2>Featured Projects</h2>
    <CardHolder cardArray={projects} />
</div>

<div class="container">
    <h2>Featured Blog Articles</h2>
    <CardHolder cardArray={blog} />
</div>

<style lang="scss">
    .landing-title {
        display: inline-flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 32pt;
    }

    .landing-row {
        display: grid;
        grid-template-columns: 3fr 2fr;
        width: 100%;

        .landing-img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
    }

    .container {
        padding: 24pt;
        box-sizing: border-box;
    }

    .title {
        display: flex;
        flex-direction: column;
        gap: 8pt;
        * {
            margin: 0;
            padding: 0;
        }
    }
</style>
