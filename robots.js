export default function robots() {
    return {
        rules: [
            {
                userAgent: 'Googlebot',
                allow: ['/'],
                disallow: ['/private/'],
            },
            {
                userAgent: ['Applebot', 'Bingbot'],
                disallow: ['/'],
            },
        ],
        sitemap: 'https://cacho-user.vercel.app/sitemap.xml', // Update the URL to your actual sitemap URL
    }
}
