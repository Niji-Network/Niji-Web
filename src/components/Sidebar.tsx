import { FaBook, FaInfoCircle, FaDiscord, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
    { name: "Docs", icon: <FaBook size={24} color="#fff" />, link: "/docs" },
    { name: "About", icon: <FaInfoCircle size={24} color="#fff" />, link: "/about" },
    {
        name: "Discord",
        icon: <FaDiscord size={24} color="#fff" />,
        link: "https://discord.gg/yourDiscordLink",
    },
];

const Sidebar: React.FC = () => {
    const [hovered, setHovered] = useState<string | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const desktopSidebarContent = (
        <div className="flex flex-col items-center py-8 bg-gray-800 text-white h-full">
            <div className="mb-10">
                <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            className="w-10 h-10 rounded-full"
                            width={50}
                            height={50}
                        />
                </Link>
            </div>
            <nav className="flex flex-col space-y-8">
                {navItems.map((item) => (
                    <Link key={item.name}
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

    const mobileSidebarContent = (
        <div className="flex flex-col h-full bg-gray-800 text-white">
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
                <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            className="w-10 h-10 rounded-full"
                            width={50}
                            height={50}
                        />
                </Link>
                <button
                    onClick={toggleSidebar}
                    className="text-white focus:outline-none"
                    aria-label="Close sidebar"
                >
                    <FaTimes size={24} />
                </button>
            </div>
            <nav className="flex flex-col space-y-6 px-4 py-6">
                {navItems.map((item) => (
                    <Link key={item.name} href={item.link} className="flex items-center space-x-4 p-3 rounded hover:bg-gray-700 transition-colors">
                            {item.icon}
                            <span className="text-base font-medium">{item.name}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );

    return (
        <>
            <div className="hidden md:flex fixed top-0 left-0 h-full w-24">
                {desktopSidebarContent}
            </div>

            <div className="md:hidden fixed top-4 left-4 z-50">
                <button
                    onClick={toggleSidebar}
                    className="p-2 bg-gray-800 rounded-full text-white focus:outline-none shadow"
                    aria-label="Toggle sidebar"
                >
                    {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleSidebar}
                    >
                        <motion.div
                            className="absolute inset-0 z-50"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {mobileSidebarContent}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Sidebar;
