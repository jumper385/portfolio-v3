<script>
    import Nav from "$lib/components/nav.svelte";
    import Socials from "$lib/components/socials.svelte";
</script>

<div
    style="display:flex; width:100%; height:100vh ; padding:0; margin:0; justify-content:space-between; padding0"
>
    <div
        style="display:flex; flex-direction:column; box-sizing:border-box; justify-content:space-between; height:100%; width:100%; padding:0;"
    >
        <div
            style="padding:32pt; display:flex; flex-direction:column; gap:12pt"
        >
            <h1 style="padding:0; margin:0;">Henry Chen</h1>
            <h2 style="padding:0; margin:0;">Electronics, Web, IoT</h2>
            <p style="padding:0; margin:0;">
                "Baby" Electronics Engineer at VitalTrace
            </p>
            <p style="padding:0; margin:0;">
                Analog Design, RTOS Firmware Design, NodeJS Development
            </p>
        </div>

        <Socials />
    </div>
</div>
