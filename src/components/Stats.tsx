import { StatsProps } from "@/utils/interfaces";
import { motion } from "framer-motion";
import React from "react";

const Stats: React.FC<StatsProps> = ({ stats, loadingStats }) => {
    return (
        <motion.section
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            {loadingStats ? (
                <>
                    {[1, 2, 3].map((_, i) => (
                        <motion.div
                            key={i}
                            className="p-4 bg-gray-800 rounded-lg shadow-lg"
                            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)" }}
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
                        className="p-4 bg-gray-800 rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-3xl font-bold text-blue-400">
                            {stats.totalImages.toLocaleString()}
                        </h3>
                        <p className="mt-2 text-gray-300">Images Processed</p>
                    </motion.div>
                    <motion.div
                        className="p-4 bg-gray-800 rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-3xl font-bold text-blue-400">
                            {stats.totalUsers.toLocaleString()}
                        </h3>
                        <p className="mt-2 text-gray-300">Happy Developers</p>
                    </motion.div>
                    <motion.div
                        className="p-4 bg-gray-800 rounded-lg shadow-lg"
                        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-3xl font-bold text-blue-400">
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