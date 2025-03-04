export interface Image {
    _id: string;
    url: string;
    category: string;
    anime?: string;
    nsfw: boolean;
    character?: string;
    tags?: string[];
}

export interface Stats {
    totalRequests: number;
    totalUsers: number;
    totalImages: number;
}

export interface StatsProps {
    stats: Stats | null;
    loadingStats: boolean;
}

export interface HeroProps {
    images: Image[];
    loadingImages: boolean;
}

export interface ModalPopupProps {
    image: Image | null;
    onClose: () => void;
}

export interface RandomImagesProps {
    images: Image[];
    loadingImages: boolean;
    onImageClick: (img: Image) => void;
}

export interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    url?: string;
    image?: string;
    author?: string;
    siteName?: string;
    twitterHandle?: string;
}

export interface LandingPageProps {
    images: Image[];
    stats: Stats | null;
}

export interface TeamMember {
    name: string;
    role: string;
    bio: string;
    imageUrl: string;
    github?: string;
    bluesky?: string;
    fiverr?: string;
    domain?: string;
}

export interface Endpoint {
    category: string;
    path: string;
    method: string;
    summary: string;
    description: string;
    responseExample: string;
}