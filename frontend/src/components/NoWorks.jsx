/* eslint-disable no-unused-vars */
import React from "react";
import { RiFolderOpenLine } from "@remixicon/react";
import { motion } from "motion/react";
import * as variants from "../motion/animation";

const NoWorks = () => {
    const scrollToServices = () => {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    
    return (
        <section className="section py-20 lg:py-32 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" id='works'>
            <motion.div
                variants={variants.fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="text-center px-6 sm:px-10 md:px-16 lg:px-0 max-w-xl"
            >
                <div className="text-5xl sm:text-6xl text-sky-600 mb-6">
                    <RiFolderOpenLine />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    No Projects Yet
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                    We are currently working on amazing projects to showcase our expertise.
                    Stay tuned for updates!
                </p>
                <button onClick={scrollToServices} className="bg-sky-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold hover:bg-cyan-700 transition-all duration-300 shadow-lg">
                    Explore Services
                </button>
            </motion.div>
        </section>
    );
};

export default NoWorks;

