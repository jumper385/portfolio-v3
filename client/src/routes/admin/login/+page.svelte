<script>
    export let data;
</script>

<form action="?/login" method="post">
    <div class="row">
        <div class="entry">
            <label for="username">Username</label>
            <input type="text" name="username" id="username" />
        </div>
    </div>
    <div class="row">
        <div class="entry">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
        </div>
    </div>
    <div class="row">
        <div class="entry">
            <button type="submit">login</button>
        </div>
    </div>
</form>
