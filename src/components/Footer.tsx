import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-gray-400 py-4 md:py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <Link href="/" className="text-2xl font-bold text-white">
                            Niji API
                        </Link>
                    </div>
                    <nav className="flex flex-wrap justify-center gap-4">
                        <Link href="/docs" className="hover:text-white transition-colors">
                            Docs
                        </Link>
                        <Link href="/about" className="hover:text-white transition-colors">
                            About
                        </Link>
                        <Link
                            href="/discord"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            Discord
                        </Link>
                        <Link
                            href="https://github.com/Niji-Network"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            GitHub
                        </Link>
                    </nav>
                </div>
                <div className="mt-4 text-center text-xs md:text-sm">
                    <p>© {new Date().getFullYear()} Niji API. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
