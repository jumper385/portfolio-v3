<script>
    export let data;
    let { article } = data;
    console.log(article);
</script>

<svelte:head>
    <title>{article.title}</title>
    <meta name="description" content={article.description} />
    <meta name="author" content={article.author} />
</svelte:head>

<div class="title">
    <h1 id="rzeyncta">{article.title}</h1>
    <p id="jat1pgb9">{article.description}</p>
</div>

<div class="details">
    <p id="arfcuaty">Author: {article.author}</p>
    <p id="xsjgaa9e">Category: {article.category}</p>
    <p id="xsjgaa9e">Created: {article.created}</p>
</div>

<img id="bt1mmfzs" src={article.display[0]} alt={article.description} />

{@html article.content}

<div id="emotes">
    <p id="xygdve4o">Likes: {article.likes}</p>
    <p id="z1mifqmh">Views: {article.views}</p>
</div>
