<script>
    import DashboardCard from "./dashboard-card.svelte";

    export let inbox;

    const getUnreadMessages = ({ items }) => {
        let out = items.filter((e) => e.opened == false);
        return out.length;
    };

    const getUniqueEmails = ({ items }) => {
        const uniques = (value, index, self) => {
            return self.indexOf(value) === index;
        };
        let out = items.map((e) => e.email).filter(uniques);
        return out.length;
    };

    let statistics = [
        {
            title: "Unread Messages",
            value: `${getUnreadMessages(inbox)} Message(s)`,
        },
        {
            title: "Unique Senders",
            value: `${getUniqueEmails(inbox)} Sender(s)`,
        },
        {
            title: "Total Messages",
            value: `${inbox.totalItems} Message(s)`,
        },
    ];
</script>

<DashboardCard
    title="Inbox"
    icon="ri-mail-unread-line"
    {statistics}
    link="/inbox"
/>
