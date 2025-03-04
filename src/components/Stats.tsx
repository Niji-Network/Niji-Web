import { StatsProps } from "@/utils/interfaces";
import { motion } from "framer-motion";
import React from "react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
};

const Stats: React.FC<StatsProps> = ({ stats, loadingStats }) => {
    return (
        <motion.section
            className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center px-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {loadingStats ? (
                <>
                    {[1, 2, 3].map((_, i) => (
                        <motion.div
                            key={i}
                            className="p-6 bg-gray-800 rounded-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="h-10 bg-gray-700 rounded animate-pulse"></div>
                            <p className="mt-2 text-gray-400">Loading...</p>
                        </motion.div>
                    ))}
                </>
            ) : stats ? (
                <>
                    <motion.div
                        variants={cardVariants}
                        className="p-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-blue-400">
                            {stats.totalImages.toLocaleString()}
                        </h3>
                        <p className="mt-2 text-gray-300">Images Processed</p>
                    </motion.div>
                    <motion.div
                        variants={cardVariants}
                        className="p-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-blue-400">
                            {stats.totalUsers.toLocaleString()}
                        </h3>
                        <p className="mt-2 text-gray-300">Happy Developers</p>
                    </motion.div>
                    <motion.div
                        variants={cardVariants}
                        className="p-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-blue-400">
                            {stats.totalRequests.toLocaleString()}
                        </h3>
                        <p className="mt-2 text-gray-300">Total Requests</p>
                    </motion.div>
                </>
            ) : null}
        </motion.section>
    );
};

export default Stats;