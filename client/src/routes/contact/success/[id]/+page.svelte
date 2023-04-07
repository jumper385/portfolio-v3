<script>
    export let data;
</script>

<title>Contact Success!!!</title>

<div class="wrapper">
    <h1>Success!!!</h1>
    <p>Hang Tight!!! 🛩️</p>
    <p>
        Your Reference is <span>
            <pre>{data.id}</pre>
        </span>
    </p>
</div>

<style lang="scss">
    .wrapper {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 12pt;
        * {
            margin: 0;
            padding: 0;
        }
    }
    pre {
        background: rgb(0, 255, 162);
        width: fit-content;
        display: inline;
        border-radius: 3pt;
    }
</style>
