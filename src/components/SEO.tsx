import Head from "next/head";
import React from "react";

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    url?: string;
    image?: string;
    author?: string;
}

const SEO: React.FC<SEOProps> = ({
                                     title,
                                     description,
                                     keywords,
                                     url,
                                     image,
                                     author = "Niji API",
                                 }) => {
    return (
        <Head>
            {/* Primary Meta Tags */}
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="author" content={author} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Canonical URL */}
            {url && <link rel="canonical" href={url} />}

            {/* Open Graph / Facebook */}
            {url && <meta property="og:url" content={url} />}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {image && <meta property="og:image" content={image} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={image} />}

            {/* Robots */}
            <meta name="robots" content="index, follow" />

            {/* Favicon et autres liens */}
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export default SEO;