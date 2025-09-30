/* eslint-disable no-unused-vars */
import React from 'react'
import { testimonialsItems } from '../constant/data'

import { motion } from 'motion/react';
import * as variants from '../motion/animation';

const Testimonials = () => {
    return (
        <section className="py-28 lg:py-40 bg-[#5f3bf0] relative overflow-hidden">
            <motion.div
                variants={variants.staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                className="container">
                <motion.p variants={variants.fadeInUp} className="text-emerald-300 uppercase mb-7 text-center tracking-widest font-semibold">
                    Testimonials
                </motion.p>
                <motion.h2 variants={variants.fadeInUp} className="text-white text-4xl lg:text-5xl font-bold text-center mb-14">
                    What People Say About Us
                </motion.h2>

                {/* Wrapper */}
                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {testimonialsItems.map(item => (
                        // Card
                        <motion.div variants={variants.fadeIn}
                            key={item.id}
                            className="bg-white/95 backdrop-blur-sm p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 space-y-6"
                        >
                            <p className="text-lg text-gray-700 leading-relaxed italic">
                                “{item.text}”
                            </p>
                            <div className="flex items-center gap-4">
                                {/* optional avatar */}
                                {item.image && (
                                    <img
                                        src={item.image}
                                        alt={item.author}
                                        className="w-12 h-12 rounded-full object-cover border border-gray-200 shadow-sm"
                                    />
                                )}
                                <div>
                                    <h3 className="text-gray-900 font-semibold text-lg">
                                        {item.author}
                                    </h3>
                                    <p className="text-gray-500 text-sm">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* bg-shape */}
            <img
                src="/images/shape-6.svg"
                alt="bg-shape"
                width={1642}
                height={635}
                className="absolute top-0 left-0 pointer-events-none"
            />
        </section>
    )
}

export default Testimonials;
