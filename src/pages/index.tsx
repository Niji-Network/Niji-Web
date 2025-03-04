import { Image, Stats as StatsInterface, LandingPageProps } from "@/utils/interfaces";
import RandomImages from "@/components/RandomImages";
import ModalPopup from "@/components/ModalPopup";
import { GetStaticProps, NextPage } from "next";
import { motion } from "framer-motion";
import Stats from "@/components/Stats";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";
import { useState } from "react";
import Link from "next/link";


const LandingPage: NextPage<LandingPageProps> = ({ images: initialImages, stats: initialStats }) => {
  const [images] = useState<Image[]>(initialImages);
  const [stats] = useState<StatsInterface | null>(initialStats);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  return (
      <>
        <SEO
            title="Niji API - The Ultimate Anime Image API"
            description="Discover Niji API, the modern, scalable anime image API powering creative projects with high-quality images and robust endpoints."
            keywords="anime, API, manga, images, Niji API"
            url="https://nijii.xyz"
            image="/logo.png"
        />
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
          <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <Hero images={images} loadingImages={false} />
            <Stats stats={stats} loadingStats={false} />
            <RandomImages images={images} loadingImages={false} onImageClick={setSelectedImage} />
            <motion.section
                className="mt-16 text-center px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                Ready to Dive In?
              </h2>
              <p className="text-gray-300 text-lg md:text-xl mb-8">
                Explore our full API documentation and discover how you can integrate
                our powerful anime image API into your project.
              </p>
              <Link
                  href="/docs"
                  className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition-colors"
              >
                View Documentation
              </Link>
            </motion.section>
          </main>
          <ModalPopup image={selectedImage} onClose={() => setSelectedImage(null)} />
        </div>
      </>
  );
};

export const getStaticProps: GetStaticProps<LandingPageProps> = async () => {
  const imagesRes = await fetch("https://api.nijii.xyz/v1/img/random?size=6", {
    headers: { "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY as string },
  });
  const imagesData = await imagesRes.json();
  const images: Image[] = imagesData.items || [];

  const statsRes = await fetch("https://api.nijii.xyz/v1/stats", {
    headers: { "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY as string },
  });
  const statsData = await statsRes.json();
  const stats: StatsInterface | null = statsData.globalStats || null;

  return {
    props: {
      images,
      stats,
    },
    revalidate: 60,
  };
};

export default LandingPage;
