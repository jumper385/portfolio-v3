<script>
    import Nav from "$lib/components/nav.svelte";
    import ProjectCard from "$lib/components/projectCard.svelte";
    import Pocketbase from "pocketbase";
    import Socials from "../../lib/components/socials.svelte";

    const pb = new Pocketbase(import.meta.env.VITE_DB_PATH);
    let projects = async () => {
        let out = await pb.collection("projects").getFullList(200);
        console.log(out);
        return out;
    };
</script>

<Nav />

<div class="project-holder">
    {#await projects() then projects}
        {#each projects as project}
            <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={pb.getFileUrl(project, project.display[0], {
                    thumb: "1000x1000",
                })}
            />
        {/each}
    {/await}
</div>

<Socials />

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
