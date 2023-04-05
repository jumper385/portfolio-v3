<script>
    export let title, description, imgUrl;
</script>

<div class="project-card">
    <img src={imgUrl} alt={description} style="width:100%" />

    <div class="card-details">
        <h3 class="title">{title}</h3>
        <p class="Description">{description}</p>
    </div>
</div>

<style lang="scss">
    .project-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
            width: 100%;
            resize: both;
        }
    }
</style>
