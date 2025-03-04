import { RandomImagesProps } from "@/utils/interfaces";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const RandomImages: React.FC<RandomImagesProps> = ({ images, loadingImages, onImageClick }) => {
    return (
        <motion.section
            className="mt-16 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-8">
                Random Anime Images
            </h2>
            {loadingImages ? (
                <p className="text-center text-gray-400">Loading images...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((img) => (
                        <motion.div
                            key={img._id}
                            className="rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-700 shadow-md hover:shadow-2xl transition-transform duration-300 cursor-pointer"
                            whileHover={{ scale: 1.05, translateY: -5 }}
                            onClick={() => onImageClick(img)}
                        >
                            <div className="relative w-full h-64">
                                <Image
                                    src={img.url}
                                    alt={img.category}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-300 ease-in-out"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-100">
                                    {img.anime || "Random Image"}
                                </h3>
                                <p className="text-gray-400">{img.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </motion.section>
    );
};

export default RandomImages;