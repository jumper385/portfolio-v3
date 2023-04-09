<script>
    export let statistics;
    export let icon;
    export let title;
    export let link;
</script>

<div class="dashboard-card">
    <div class="title-block">
        <h3 class="title">
            <i class="ri-share-box-line" />

            <a href={link} target="noreferrer">
                {title}
            </a>
        </h3>
        <i class={icon} />
    </div>
    <hr />
    <div class="content">
        {#each statistics as stat}
            <div class="entry">
                <p>{stat.title}</p>
                <p>{stat.value}</p>
            </div>
        {/each}
    </div>
</div>

<style lang="scss">
    .dashboard-card {
        .title-block {
            display: flex;
            justify-content: space-between;
            align-items: center;
            * {
                margin: 0;
                padding: 0;
                text-decoration: none;
                color: black;
            }
            .title {
                display: flex;
                align-items: center;
                gap: 6pt;
                i {
                    font-size: 10pt;
                    color: rgba(0, 0, 0, 0.2);
                }
            }
        }
        width: 100%;
        .content {
            margin-top: 6pt;
            display: flex;
            flex-direction: column;
            gap: 6pt;
            .entry {
                display: flex;
                justify-content: space-between;
                * {
                    margin: 0;
                }
            }
        }
    }
</style>
