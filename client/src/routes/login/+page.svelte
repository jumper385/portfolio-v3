<form action="?/login" method="POST">
    <div class="row">
        <div class="entry">
            <label for="email"><p>E-Mail</p></label>
            <input type="text" name="email" id="email" />
        </div>
    </div>
    <div class="row">
        <div class="entry">
            <label for="password"><p>Password</p></label>
            <input type="password" name="password" id="password" />
        </div>
    </div>
    <div class="row">
        <div class="entry">
            <button type="submit" class="submit">Login</button>
        </div>
    </div>
</form>

<style lang="scss">
    form {
        max-width: 300pt;
        margin: 0 auto;
    }
</style>
