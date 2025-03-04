import { motion, AnimatePresence } from "framer-motion";
import { ModalPopupProps } from "@/utils/interfaces";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const ModalPopup: React.FC<ModalPopupProps> = ({ image, onClose }) => {
    const [copied, setCopied] = useState<boolean>(false);

    useEffect(() => {
        document.body.style.overflow = image ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [image]);

    const handleBackgroundClick = () => {
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
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleBackgroundClick}
                >
                    <motion.div
                        className="relative w-11/12 max-w-lg rounded-lg bg-gray-900 p-6 shadow-lg md:w-1/2 lg:w-1/3"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        onClick={handleContentClick}
                    >
                        <button
                            onClick={onClose}
                            aria-label="Close modal"
                            className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-gray-200 focus:outline-none"
                        >
                            &times;
                        </button>
                        <Image
                            src={image.url}
                            alt={image.category || "Image"}
                            className="w-full rounded-md object-cover"
                            width={400}
                            height={300}
                        />
                        <div className="mt-4 space-y-2 text-gray-100">
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
                                className="w-full rounded bg-blue-600 px-4 py-2 text-white font-semibold shadow hover:bg-blue-700 transition-colors"
                            >
                                Download
                            </button>
                            <button
                                onClick={handleCopy}
                                className="w-full rounded bg-green-600 px-4 py-2 text-white font-semibold shadow hover:bg-green-700 transition-colors"
                            >
                                Copy URL
                            </button>
                            <AnimatePresence>
                                {copied && (
                                    <motion.div
                                        className="mt-1 text-sm text-green-400"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        Copied!
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ModalPopup;