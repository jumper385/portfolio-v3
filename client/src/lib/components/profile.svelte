<script>
    export let profile = "https://placehold.co/600x400";
    export let name = "Default Name";
    export let role = "Position";
    export let date = "10th October 2023";
</script>

<div class="profile">
    <img src={profile} alt="profile pic" />
    <div>
        <p>{name}</p>
        <p>{role}</p>
        <p>{date}</p>
    </div>
</div>

<style lang="scss">
    .profile {
        font-size: 8pt;
        * {
            margin: 0;
        }
        display: flex;
        gap: 6pt;
        align-items: center;
        img {
            height: 32pt;
            object-fit: cover;
            aspect-ratio: 1 / 1;
            border-radius: 50%;
        }
    }
</style>
