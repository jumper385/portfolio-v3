<title>Contact 👋</title>

<form action="?/contact" method="POST">
    <div class="row">
        <div class="entry">
            <label for="first_name">
                <p class="input-label">First Name</p>
            </label>
            <input type="text" name="first_name" id="first_name" />
        </div>
        <div class="entry">
            <label for="last_name">
                <p class="input-label">Label Name</p>
            </label>
            <input type="text" name="last_name" id="last_name" />
        </div>
    </div>

    <div class="row">
        <div class="entry">
            <label for="email">
                <p class="input-label">E-Mail</p>
            </label>
            <input type="email" name="email" id="email" />
        </div>
    </div>

    <div class="row">
        <div class="entry">
            <label for="content" class="email">
                <p class="input_label">Message</p>
            </label>
            <textarea name="content" id="content" cols="30" rows="10" />
        </div>
    </div>

    <div class="row">
        <input class="submit" type="submit" value="send a message" />
    </div>
</form>
