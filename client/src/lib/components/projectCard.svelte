<script>
    export let title, description, imgUrl;
</script>

<div class="project-card">
    <img src={imgUrl} alt={description} style="width:100%" />

    <div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
</div>

<style>
    .project-card {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
