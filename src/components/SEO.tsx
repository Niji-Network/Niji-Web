import { SEOProps } from "@/utils/interfaces";
import Head from "next/head";
import React from "react";

const SEO: React.FC<SEOProps> = ({
                                     title,
                                     description,
                                     keywords,
                                     url,
                                     image,
                                     author = "Niji API",
                                     siteName = "Niji API",
                                     twitterHandle = "@gonzyui",
                                 }) => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: url,
        name: title,
        author: {
            "@type": "Organization",
            name: author,
        },
        description: description,
    };

    return (
        <Head>
            {/* Page Title and Basic Meta */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="author" content={author} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Canonical URL */}
            {url && <link rel="canonical" href={url} />}

            {/* Open Graph Meta Tags */}
            <meta property="og:site_name" content={siteName} />
            {url && <meta property="og:url" content={url} />}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {image && <meta property="og:image" content={image} />}

            {/* Twitter Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}

            {/* Robots & Favicon */}
            <meta name="robots" content="index, follow" />
            <link rel="icon" href="/favicon.ico" />

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </Head>
    );
};

export default SEO;