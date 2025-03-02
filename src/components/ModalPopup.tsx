import { motion, AnimatePresence } from "framer-motion";
import { ModalPopupProps } from "@/utils/interfaces";
import React, { useEffect, useState } from "react";
import Image from "next/image";


const ModalPopup: React.FC<ModalPopupProps> = ({ image, onClose }) => {
    const [copied, setCopied] = useState<boolean>(false);

    useEffect(() => {
        if (image) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [image]);

    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
        onClose();
    };

    const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const handleCopy = async () => {
        if (image?.url) {
            try {
                await navigator.clipboard.writeText(image.url);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error("Failed to copy URL", err);
            }
        }
    };

    const handleDownload = () => {
        if (image?.url) {
            const link = document.createElement("a");
            link.href = image.url;
            link.download = image.anime ? `${image.anime}.jpg` : "download.jpg";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <AnimatePresence>
            {image && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleBackgroundClick}
                >
                    <motion.div
                        className="bg-gray-900 p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3 relative"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        onClick={handleContentClick}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 text-2xl"
                        >
                            &times;
                        </button>
                        <Image
                            src={image.url}
                            alt={image.category}
                            className="w-full h-64 object-cover rounded-md"
                            width={200}
                            height={200}
                        />
                        <div className="mt-4 text-gray-100 space-y-2">
                            <p>
                                <strong>Anime:</strong> {image.anime || "None"}
                            </p>
                            <p>
                                <strong>Category:</strong> {image.category || "None"}
                            </p>
                            <p>
                                <strong>NSFW:</strong> {image.nsfw ? "Yes" : "No"}
                            </p>
                            <p>
                                <strong>Character:</strong> {image.character || "None"}
                            </p>
                            <p>
                                <strong>Tags:</strong>{" "}
                                {image.tags && image.tags.length > 0 ? image.tags.join(", ") : "None"}
                            </p>
                        </div>
                        <div className="mt-6 flex flex-col items-center space-y-2">
                            <button
                                onClick={handleDownload}
                                className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                            >
                                Download
                            </button>
                            <button
                                onClick={handleCopy}
                                className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                            >
                                Copy URL
                            </button>
                            {copied && (
                                <motion.div
                                    className="text-sm text-green-400 mt-1"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    Copied!
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ModalPopup;