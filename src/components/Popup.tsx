import { FaGithub, FaDiscord, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";

const MotionLink = motion(Link);

const Popup: React.FC = () => {
    const [visible, setVisible] = useState(true);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="fixed bottom-4 right-4 z-50"
                    initial={{ opacity: 0, x: 50, y: 50 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: 50, y: 50 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative bg-gray-800 p-4 rounded-lg shadow-lg">
                        <button
                            onClick={() => setVisible(false)}
                            className="absolute top-2 right-2 text-gray-400 hover:text-white focus:outline-none"
                            aria-label="Close popup"
                        >
                            <FaTimes size={20} />
                        </button>
                        <p className="mb-2 text-sm text-white">Join our community!</p>
                        <div className="flex space-x-4">
                            <MotionLink
                                href="https://github.com/Niji-Network"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
                                whileHover={{ scale: 1.1 }}
                            >
                                <FaGithub size={24} />
                                <span className="hidden sm:inline text-sm">GitHub</span>
                            </MotionLink>
                            <MotionLink
                                href="/discord"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-white hover:text-blue-400 transition-colors"
                                whileHover={{ scale: 1.1 }}
                            >
                                <FaDiscord size={24} />
                                <span className="hidden sm:inline text-sm">Discord</span>
                            </MotionLink>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Popup;
