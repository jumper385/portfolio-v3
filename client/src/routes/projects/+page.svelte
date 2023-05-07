<script>
    export let data;

    import Pocketbase from "pocketbase";

    import PageCard from "$lib/components/pageCard.svelte";

    const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);
</script>

<title>Projects 🏗️</title>

<div class="project-holder">
    {#if data?.projects && data?.projects?.length > 0}
        {#each data?.projects as project}
            <PageCard
                title={project.title}
                imgUrl={pb.getFileUrl(project, project.display[0], {
                    thumb: "0x1000",
                })}
                subtitle={project.description}
                timestamp={project.created}
                metrics={[
                    {
                        icon: "ri-hand-heart-fill",
                        metric: `$${project.funding / 100}`,
                    },
                ]}
                tag={project.tag}
                price_code={project.price_code}
            />
        {/each}
    {:else}
        <p style="color:lightgrey">No Projects to Display...</p>
    {/if}
</div>

<style>
    .project-holder {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 24pt;
        padding: 24pt;
        box-sizing: border-box;
    }
    @media only screen and (max-width: 600px) {
        .project-holder {
            grid-template-columns: 1fr;
        }
    }
</style>
