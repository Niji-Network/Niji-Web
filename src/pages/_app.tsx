import type { AppProps } from 'next/app';
import SEO from '@/components/SEO';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <SEO
                title="Niji API - Official Documentation"
                description="Official documentation for Niji API, the modern, scalable anime image API. Explore endpoints, request examples, and more."
                keywords="Niji API, Documentation, anime, endpoints, developer"
                url="https://nijii.xyz"
                image="/logo.png"
            />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
