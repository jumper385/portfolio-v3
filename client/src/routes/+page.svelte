<script>
    import CardHolder from "$lib/components/card-holder.svelte";
    import Socials from "$lib/components/socials.svelte";

    export let data;
    let { siteElements, projects, blog } = data;
</script>

<svelte:head>
    <title>Digism Design</title>
</svelte:head>

<div class="landing-row">
    <div class="">
        <img
            class="landing-img"
            src={siteElements.landing_img}
            alt="a landing"
        />
    </div>

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
    .landing-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        height: 100%;
        padding: 24pt;
        box-sizing: border-box;
        grid-gap: 24pt;

        * {
            padding: 0;
        }

        .landing-title {
            display: inline-flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 32pt;
            background-color: #f6f6f6;
            box-sizing: border-box;
        }

        .landing-img {
            max-height: 100%;
            max-width: 100%;
            object-fit: cover;
        }
        margin-bottom: 24pt;
    }

    .container {
        padding: 24pt;
        height: 100%;
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

    @media screen and (max-width: calc(640px)) {
        .landing-row {
            grid-template-columns: 1fr;
        }
    }
</style>
