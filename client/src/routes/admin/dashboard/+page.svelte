<script>
    export let data;
</script>

<form action="?/updateElements" method="post" enctype="multipart/form-data">
    <div class="row">
        <div class="entry">
            <label for="siteName">Site Name</label>
            <input
                type="text"
                name="siteName"
                id="site-name"
                bind:value={data.site_title}
            />
        </div>
    </div>

    <div class="row">
        <div class="entry">
            <label for="slogan">Slogan</label>
            <input
                type="text"
                name="slogan"
                id="slogan"
                bind:value={data.slogan}
            />
        </div>
    </div>

    <div class="row">
        <div class="entry">
            <label for="skills">Skills</label>
            <textarea name="skills" id="skills" bind:value={data.skills} />
        </div>
    </div>

    <div class="row">
        <div class="entry">
            <label for="landingImg">Landing Image</label>
            <input type="file" name="landingImg" id="landing-img" />
        </div>
    </div>

    <div class="row">
        <div class="entry"><button type="submit">Update Home Page</button></div>
    </div>
</form>
