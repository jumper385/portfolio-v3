<script>
    export let data;
</script>

<div class="wrapper">
    <h1>Success!!!</h1>
    <p>Hang Tight!!! 🛩️</p>
    <p>Your Reference is {data.id}</p>
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
</style>
