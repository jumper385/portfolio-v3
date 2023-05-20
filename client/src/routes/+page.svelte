<script>
    export let data;
</script>

<title>Digism Design Co.</title>

<div style="display:flex; padding:0; margin:0; justify-content:space-between;">
    <div
        style="display:flex; flex-direction:column; box-sizing:border-box; justify-content:space-between; width:100%; padding:0; position: relative"
    >
        <div
            style="padding:32pt; display:flex; flex-direction:column; gap:12pt; margin-bottom:0"
        >
            <h1 style="padding:0; margin:0;">{data.site_title}</h1>
            <p style="padding:0; margin:0;">
                {data.slogan}
            </p>
            <p style="padding:0; margin:0;">
                {data.skills}
            </p>
        </div>
    </div>
</div>
