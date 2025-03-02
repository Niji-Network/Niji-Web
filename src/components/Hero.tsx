import { HeroProps } from "@/utils/interfaces";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";


const Hero: React.FC<HeroProps> = ({ images, loadingImages }) => {
    const apiOnline = !loadingImages && images.length > 0;
    return (
        <motion.section
            className="flex flex-col-reverse md:flex-row items-center gap-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex-1">
                <h1 className="text-5xl font-extrabold text-gray-100">Niji API</h1>
                <p className="mt-4 text-xl text-gray-300">
                    The ultimate anime image API that powers your creative projects.
                </p>
                <p className="mt-4 text-gray-400">
                    Discover a seamless experience retrieving high-quality anime and manga
                    images with cutting-edge features.
                </p>
                <Link
                    href="/docs"
                    className="mt-8 inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition-colors"
                >
                    Explore the API
                </Link>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                {loadingImages ? (
                    <div className="w-64 h-64 bg-gray-700 rounded-lg animate-pulse"></div>
                ) : images[0] ? (
                    <motion.img
                        src={images[0].url}
                        alt={images[0].category}
                        className="w-64 h-64 object-cover rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                ) : (
                    <div className="w-64 h-64 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
                        No Image
                    </div>
                )}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg font-semibold"
                >
                    {apiOnline ? (
                        <span className="text-green-500">API is online</span>
                    ) : (
                        <span className="text-red-500">API is offline</span>
                    )}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Hero;
