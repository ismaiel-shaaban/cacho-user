export default function sitemap() {
    return [
        {
            url: 'https://cacho-user.vercel.app/sitemap.xml',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://cacho-user.vercel.app/sitemap.xml/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://cacho-user.vercel.app/sitemap.xml/stores',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
    ]
}