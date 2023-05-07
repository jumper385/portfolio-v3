<script>
    import { goto } from "$app/navigation";
    import { dateString } from "$lib/helpers/dateString";

    export let url,
        title,
        subtitle,
        content,
        likes,
        views,
        imgUrl,
        tag,
        timestamp,
        metrics,
        price_code;

    const createCheckout = async () => {
        let res = await fetch("?/createCheckout", {
            method: "POST",
            redirect: "follow",
            body: JSON.stringify({
                price_code,
            }),
        });
        let { location } = await res.json();
        goto(location);
    };
</script>

<div class="card">
    <a class="card-link" href={url}>
        <img class="responsiveImg" src={imgUrl} alt={title} />
        {#if tag}
            <sub class="tag">{tag}</sub>
        {/if}
        <h3 class="cardTitle">{title}</h3>
        <div class="card-details">
            {#if subtitle}
                <p>{subtitle}</p>
            {/if}
            <p class="date">{dateString(timestamp)}</p>
        </div>
        <hr />
        {#if price_code}
            <div>
                <button
                    class="donate-button"
                    type="submit"
                    value={{ price_code }}>Donate</button
                >
            </div>
        {/if}
        <div class="card-metrics">
            {#if metrics?.length > 0}
                {#each metrics as { icon, metric }}
                    <p class="metric-item">
                        <i class={icon} />
                        {metric}
                    </p>
                {/each}
            {:else}
                <p class="metric-item">No metrics to Show</p>
            {/if}
        </div>
    </a>
</div>

<style lang="scss">
    .card {
        .card-link {
            text-decoration: none !important;
            color: black;
        }
        .tag {
            font-size: 8pt;
            color: #651fff;
            padding: 0;
            margin: 0;
            font-weight: 500;
        }
        .cardTitle {
            color: rgb(30, 30, 30);
            padding: 0;
            margin: 0;
            font-weight: 400;
            font-size: 18pt;
        }
        .responsiveImg {
            width: 100%;
            max-height: 100% !important;
            resize: both;
        }
        .card-details {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            font-size: 8pt !important;
            margin: 0;
            padding: 0;
            gap: 12pt;
            .date {
                flex-shrink: 0;
            }
            * {
                padding: 0;
                margin: 6pt 0;
            }
        }
        hr {
            border: 0.5px rgb(236, 236, 236) solid;
            margin: 0;
            padding: 0;
        }
        .card-metrics {
            display: flex;
            gap: 12pt;
            font-size: 8pt;
            color: rgb(164, 164, 164);
            .metric-item {
                display: flex;
                align-items: center;
                gap: 6pt;
            }
        }
    }
</style>
