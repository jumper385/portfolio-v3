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

<Socials />
