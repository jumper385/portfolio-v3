<script>
    export let url, title, author, likes, views, imgUrl, category;
</script>

<div class="blogCard">
    <a href={url} class="cardLink"
        ><img class="responsiveImg" src={imgUrl} alt={title} /></a
    >
    <sub class="category">{category}</sub>
    <a href={url} class="cardLink"><h3 class="cardTitle">{title}</h3></a>
    <sub class="author">{author}</sub>
    <div class="blog-performance">
        <p class="likes">{likes} Likes</p>
        <p class="views">{views} Views</p>
    </div>
</div>

<style lang="scss">
    .blogCard {
        max-width: 100%;
        .cardLink {
            text-decoration: none;
            text-color: none;
        }
        .responsiveImg {
            width: 100%;
            resize: both;
        }
        .category {
            font-size: 12pt;
            color: #651fff;
            padding: 0;
            margin: 0;
            font-weight: 500;
        }
        .cardTitle {
            color: rgb(30, 30, 30);
            padding: 0;
            margin: 6pt 0;
            font-weight: 400;
            font-size: 24pt;
        }
        .author {
            font-size: 12pt;
            color: #9e9e9e;
            padding: 0;
            margin: 0;
            font-weight: 500;
        }
        .blog-performance {
            display: flex;
            gap: 12pt;
        }
    }
</style>
