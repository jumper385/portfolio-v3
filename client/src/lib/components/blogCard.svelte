<script>
    import { goto } from "$app/navigation";
    import { dateString } from "$lib/helpers/dateString";

    export let url, title, author, likes, views, imgUrl, category, createdAt;
</script>

<div class="blogCard">
    <a class="blog-link" href={url}>
        <img class="responsiveImg" src={imgUrl} alt={title} />
        <sub class="category">{category}</sub>
        <h3 class="cardTitle">{title}</h3>
        <div class="blog-details">
            <p>Written By <span class="author">{author}</span></p>
            <p class="date">{dateString(createdAt)}</p>
        </div>
        <hr />
        <div class="blog-performance">
            <p class="performance-tablet">
                <i class="ri-thumb-up-fill" />
                {likes}
            </p>
            <p class="performance-tablet">
                <i class="ri-eye-2-line" />
                {views}
            </p>
        </div>
    </a>
</div>

<style lang="scss">
    .blogCard {
        .blog-link {
            text-decoration: none !important;
            color: black;
        }
        .category {
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
        .blog-details {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 8pt !important;
            margin: 0;
            padding: 0;
            * {
                padding: 0;
                margin: 6pt 0;
            }
            .author {
                font-weight: 600;
            }
        }
        hr {
            border: 0.5px rgb(236, 236, 236) solid;
            margin: 0;
            padding: 0;
        }
        .blog-performance {
            display: flex;
            gap: 12pt;
            font-size: 8pt;
            color: rgb(164, 164, 164);
            .performance-tablet {
                display: flex;
                align-items: center;
                gap: 6pt;
            }
        }
    }
</style>
