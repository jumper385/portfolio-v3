<script>
    import DashboardCard from "./dashboard-card.svelte";

    export let blog;

    const getHiddenArticles = ({ items }) => {
        let out = items.filter((e) => e.visible == true);
        return ((out.length / items.length) * 100).toFixed(2);
    };

    const mostViewedArticle = ({ items }) => {
        let out = items
            .map((e) => ({ title: e.title, views: e.views }))
            .sort((e) => e.view);
        return `${out[0].title} (${out[0].views} Views)`;
    };

    let statistics = [
        {
            title: "Most Views",
            value: `${mostViewedArticle(blog)}`,
        },
        {
            title: "Published Proportion",
            value: `${getHiddenArticles(blog)}%`,
        },
        {
            title: "Total Articles",
            value: `${blog.totalItems} Article(s)`,
        },
    ];
</script>

<DashboardCard title="Blog" icon="ri-article-line" {statistics} link="/blog" />
