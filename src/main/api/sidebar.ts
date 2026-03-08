export interface SidebarItem {
    title: string;
    key?: string; // for i18n
    href?: string;
    children?: SidebarItem[];
    allowUserDocs?: boolean; // Filter for User Docs
}

const config: SidebarItem[] = [
    {
        title: "Introduction",
        key: "introduction",
        href: "introduction",
        allowUserDocs: true
    },
    {
        title: "Indoor Map Digitalizer",
        key: "imd",
        allowUserDocs: false,
        children: [
            { title: "Overview", key: "overview", href: "imd/overview" },
            { title: "Quickstart", key: "quickstart", href: "imd/quickstart" }
        ]
    },
    {
        title: "Server",
        key: "server",
        allowUserDocs: false,
        children: [
            { title: "Overview", key: "overview", href: "server/overview" },
            {
                title: "Security",
                key: "security",
                children: [
                    { title: "Sessions", key: "sessions", href: "server/security/sessions" }
                ]
            }
        ]
    },
    {
        title: "User App",
        key: "app",
        allowUserDocs: true,
        children: [
            { title: "Overview", key: "overview", href: "app/overview" }
        ]
    }
];

export default config;