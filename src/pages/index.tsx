import { Image, Stats as StatsInterface } from "@/utils/interfaces";
import RandomImages from "@/components/RandomImages";
import ModalPopup from "@/components/ModalPopup";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Stats from "@/components/Stats";
import Hero from "@/components/Hero";
import SEO from "@/components/SEO";

const LandingPage = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [stats, setStats] = useState<StatsInterface | null>(null);
  const [loadingImages, setLoadingImages] = useState<boolean>(true);
  const [loadingStats, setLoadingStats] = useState<boolean>(true);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    async function fetchImages() {
      try {
        const res = await fetch("https://api.nijii.xyz/v1/img/random?size=5", {
          headers: { "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY as string },
        });
        const data = await res.json();
        setImages(data.items || []);
      } catch (error) {
        console.error("Error fetching images", error);
      } finally {
        setLoadingImages(false);
      }
    }
    fetchImages();
  }, []);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("https://api.nijii.xyz/v1/stats", {
          headers: { "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY as string },
        });
        const data = await res.json();
        setStats(data.globalStats);
      } catch (error) {
        console.error("Error fetching stats", error);
      } finally {
        setLoadingStats(false);
      }
    }
    fetchStats();
  }, []);

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
          <main className="max-w-7xl mx-auto py-16 px-4">
            <Hero images={images} loadingImages={loadingImages} />
            <Stats stats={stats} loadingStats={loadingStats} />
            <RandomImages images={images} loadingImages={loadingImages} onImageClick={setSelectedImage} />
            <motion.section
                className="mt-16 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-100 mb-4">
                Ready to Dive In?
              </h2>
              <p className="text-gray-300 mb-8">
                Explore our full API documentation and discover how you can integrate
                our powerful anime image API into your project.
              </p>
              <a
                  href="/docs"
                  className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition-colors"
              >
                View Documentation
              </a>
            </motion.section>
          </main>
          <ModalPopup image={selectedImage} onClose={() => setSelectedImage(null)}/>
        </div>
      </>
  );
};

export default LandingPage;