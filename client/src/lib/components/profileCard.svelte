<script>
    export let data;
    let { profile } = data;
</script>

<div class="profileCard">
    <div class="content">
        <h1 class="name">{profile.name || "Add Profile Name"}</h1>
        <div class="details">
            <div class="detail-entry">
                <p class="category">City</p>
                <p>{profile.city}</p>
            </div>
            <div class="detail-entry">
                <p class="category">E-Mail</p>
                <p>{profile.email}</p>
            </div>
        </div>
        <p>{profile.summary}</p>
    </div>
    <div class="profile">
        <img
            class="profileImg"
            src={profile.profileImg}
            alt={profile.summary}
        />
    </div>
</div>

<div class="dashboard">
    <Inbox />
</div>

<style lang="scss">
    .profileCard {
        padding: 0 32pt;
        display: flex;
        gap: 64pt;
        margin-bottom: 24pt;
        .content {
            width: 100%;
            .name {
                margin: 0;
                padding: 0;
                margin-bottom: 12pt;
            }
            .details {
                display: flex;
                gap: 24pt;

                * {
                    margin: 0;
                    padding: 0;
                    font-weight: bold;
                }

                .category {
                    font-weight: bold;
                    color: #ced6e0;
                }
            }
        }
        img.profileImg {
            width: 300pt;
            border-radius: 24pt;
        }
    }
    .dashboard {
        padding: 0 32pt;
    }
</style>
