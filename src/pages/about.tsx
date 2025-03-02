import { FaGithub } from 'react-icons/fa';
import SEO from "@/components/SEO";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

const teamMembers = [
    {
        name: 'gonzyui',
        role: 'Lead Developer & Founder',
        bio: 'gonzyui is the visionary behind Niji API, developing robust endpoints and cutting-edge features.',
        imageUrl: '/gonzyui.gif',
        github: 'https://github.com/gonzyui',
    },
];

const AboutPage: React.FC = () => {
    return (
        <>
            <SEO
                title="About Niji API - The Ultimate Anime Image API"
                description="Learn more about Niji API, the modern, scalable anime image API, and the dedicated team behind its creation."
                keywords="About, Niji API, anime, API, team, developers"
                url="https://nijii.xyz/about"
                image="/logo.png"
            />
            <div className="min-h-screen bg-gray-900 text-gray-100 px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-extrabold mb-8 text-center">About Niji API</h1>

                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-4">The API</h2>
                        <p className="text-xl mb-4">
                            Niji API is a modern, scalable solution for all your anime image needs.
                            Created with passion and precision, it delivers high-quality images, robust endpoints,
                            and seamless integration for developers around the world.
                        </p>
                        <p className="text-lg text-gray-300">
                            Designed from scratch by our dedicated team, Niji API stands as a testament to innovative
                            engineering and a deep love for anime. Every endpoint is crafted to ensure maximum performance
                            and reliability.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
                        <p className="text-xl mb-8">
                            Behind Niji API is a dedicated and talented team of developers..
                            We believe in pushing the boundaries of technology and delivering products that inspire.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg">
                                    <Image
                                        src={member.imageUrl}
                                        alt={member.name}
                                        className="w-24 h-24 rounded-full object-cover mb-4"
                                        width={50}
                                        height={50}
                                    />
                                    <h3 className="text-2xl font-bold">{member.name}</h3>
                                    <p className="text-blue-400">{member.role}</p>
                                    <p className="mt-2 text-center text-gray-300">{member.bio}</p>
                                    {member.github && (
                                        <Link
                                            href={member.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-4 flex items-center text-blue-500 hover:underline"
                                        >
                                            <FaGithub className="mr-2" />
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default AboutPage;
