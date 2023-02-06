<script>
    export let title, description, imgUrl;
</script>

<div
    style="display:flex; max-width:100%; gap:48pt; padding:32pt; align-items:center"
>
    <img src={imgUrl} alt={description} style="max-height:300px" />

    <div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
</div>
