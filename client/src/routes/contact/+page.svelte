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
        <input class="submitButton" type="submit" value="send a message" />
    </div>
</form>

<style lang="scss">
    form {
        padding: 0 32pt;
        .row {
            display: flex;
            gap: 24pt;
            margin-bottom: 12pt;
            .entry {
                width: 100%;
                input,
                textarea {
                    width: 100%;
                    border: 1.25pt #e4e9eb solid;
                    border-radius: 6pt;
                    margin: 0;
                    padding: 12pt 6pt;
                    box-sizing: border-box;
                    resize: none;
                }
                textarea:focus,
                input:focus {
                    outline: none;
                }
                label {
                    font-size: 8pt;
                    font-weight: 600;
                    text-transform: uppercase;
                    p {
                        margin: 0;
                        padding: 0;
                        padding-left: 6pt;
                        margin-bottom: 6pt;
                    }
                }
            }
            .submitButton {
                width: 100%;
                background-color: black;
                color: white;
                border: none;
                padding: 12pt 32pt;
                border-radius: 6pt;
                font-weight: 500;
            }
        }
    }
</style>
