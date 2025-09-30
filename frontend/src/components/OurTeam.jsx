/* eslint-disable no-unused-vars */
import React from "react";
import { teamsDataItems } from "../constant/data";

import { motion } from 'motion/react';
import * as variants from '../motion/animation';

const OurTeam = () => {
    return (
        <section
            className="relative overflow-hidden pt-32 lg:pt-48 pb-32 lg:pb-48 bg-gradient-to-b from-[#5f3bf0] to-[#473bf0]"
            aria-label="Our Team Section" id="about"
        >
            <motion.div
                variants={variants.staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                className="container mx-auto px-6">
                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <motion.p variants={variants.fadeInUp} className="text-emerald-300 uppercase tracking-widest font-semibold mb-4">
                        Our Team
                    </motion.p>
                    <motion.h2 variants={variants.fadeInUp}  className="text-white text-4xl lg:text-5xl font-extrabold leading-tight">
                        Meet the Minds Behind <span className="text-emerald-300">Beryfy</span>
                    </motion.h2>
                </div>

                {/* Team Members Grid */}
                <div
                    className="grid gap-10 md:grid-cols-2 xl:grid-cols-5"
                    role="list"
                >
                    {teamsDataItems.map((item) => (
                        <motion.div variants={variants.fadeIn}
                            key={item.id}
                            role="listitem"
                            className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 hover:scale-[1.02] p-8 cursor-pointer"
                        >
                            {/* <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                                /> */}
                            <div className="flex flex-col items-center text-center space-y-6">
                                {/* Name & Role */}
                                <div>
                                    <h3 className="text-gray-900 font-bold text-xl">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-600 font-medium">{item.role}</p>
                                </div>

                                {/* Tech Stack */}
                                {item.stack && item.stack.length > 0 ? (
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {item.stack.map((tech, i) => (
                                            <span
                                                key={i}
                                                className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold shadow-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-400 text-sm italic">
                                        Tech stack not specified
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Background Shape */}
            <img
                src="/images/shape-6.svg"
                alt=""
                aria-hidden="true"
                className="absolute top-0 left-0 w-[120%] max-w-[1600px] pointer-events-none"
            />
        </section>
    );
};

export default OurTeam;
