import { RandomImagesProps } from "@/utils/interfaces";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";



const RandomImages: React.FC<RandomImagesProps> = ({ images, loadingImages, onImageClick }) => {
    return (
        <motion.section
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <h2 className="text-3xl font-bold text-gray-100 mb-6 text-center">
                Random Anime Images
            </h2>
            {loadingImages ? (
                <p className="text-center text-gray-400">Loading images...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((img) => (
                        <motion.div
                            key={img._id}
                            className="rounded overflow-hidden shadow-lg bg-gray-800 hover:shadow-2xl transition-all cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => onImageClick(img)}
                        >
                            <Image
                                src={img.url}
                                alt={img.category}
                                className="w-full h-64 object-cover"
                                width={200}
                                height={200}
                            />
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
