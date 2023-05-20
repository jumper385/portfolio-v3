<script>
    export let data;
    let { profile } = data;

    console.log(profile);
</script>

<p>{profile?.email}</p>
