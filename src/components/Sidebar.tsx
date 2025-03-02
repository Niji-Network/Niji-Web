import { FaBook, FaInfoCircle, FaDiscord } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
    { name: "Docs", icon: <FaBook size={24} color="#fff" />, link: "/docs" },
    { name: "About", icon: <FaInfoCircle size={24} color="#fff" />, link: "/about" },
    { name: "Discord", icon: <FaDiscord size={24} color="#fff" />, link: "https://discord.gg/yourDiscordLink" },
];

const Sidebar: React.FC = () => {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <div className="fixed top-0 left-0 h-full w-20 bg-gray-800 flex flex-col items-center py-8">
            <div className="mb-10">
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" className="w-10 h-10 rounded-4xl" width={50} height={50} />
                </Link>
            </div>
            <nav className="flex flex-col space-y-25">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.link}
                        onMouseEnter={() => setHovered(item.name)}
                        onMouseLeave={() => setHovered(null)}
                        className="relative group flex items-center justify-center"
                    >
                        {item.icon}
                        <AnimatePresence>
                            {hovered === item.name && (
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute left-full ml-3 p-1 bg-gray-800 text-white text-xs rounded shadow-lg whitespace-nowrap"
                                >
                                    {item.name}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;