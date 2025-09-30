/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'motion/react';
import * as variants from '../motion/animation';

const Hero = () => {
    return (
        <section className="py-32 lg:py-[150px_120px] bg-cyan-50/25 bg-pattern" id="home">
            <motion.div
                variants={variants.staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                className="container grid gap-14 lg:grid-cols-[1fr_0.8fr] lg:items-center">
                {/* Content */}
                <div className="text-center lg:text-left mx-auto">
                    <motion.p variants={variants.fadeInUp} className="subtitle">Fresh ideas, built to grow with you.</motion.p>
                    <motion.h1 variants={variants.fadeInUp} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2.5">Bring your vision to life with {""}
                        <span className="relative inline-block before:absolute before:-inset-1 before:bg-sky-800 before:block before:-skew-y-3">
                            <span className="relative text-white">Beryfy.</span>
                        </span>
                    </motion.h1>
                    <motion.p variants={variants.fadeInUp} className="max-w-[460px] my-[14px_32px] max-lg:mx-auto">
                        We’re a passionate creative team, crafting websites, digital solutions, and innovative projects that help businesses stand out. With innovation and design at the core, we turn your ideas into reality.
                    </motion.p>
                    <motion.button
                        variants={variants.fadeInUp}
                        className="primary-btn"
                        onClick={() => {
                            document.getElementById("why-us")?.scrollIntoView({ behavior: "smooth" });
                        }}
                    >
                        Learn more
                    </motion.button>
                </div>

                {/* Banner */}
                <div className="relative mr-5">
                    {/* Hero figure */}
                    <motion.figure variants={variants.fadeIn} className="relative max-w-max mx-auto group">
                        {/* Image container */}
                        <div className="relative w-80 h-48 sm:w-96 sm:h-56 md:w-[28rem] md:h-64 lg:w-[30rem] lg:h-[20rem] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl">

                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10"></div>
                            <img
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                src="/images/hero-img.jpg"
                                alt="Team collaboration workspace showing professionals working together"
                                loading="eager"
                                onError={(e) => {
                                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='16' fill='%236b7280'%3ETeam Workspace%3C/text%3E%3C/svg%3E";
                                }}
                            />
                            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20"></div>
                        </div>

                        {/* Shape 1 */}
                        <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 animate-float">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl rotate-12 shadow-lg opacity-90 hover:opacity-100 transition-all duration-300 hover:rotate-6">
                                <div className="w-full h-full rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30"></div>
                            </div>
                        </div>

                        {/* Shape 2 */}
                        <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 animate-bounce">
                            <div className="w-5 h-14 sm:w-6 sm:h-16 bg-gradient-to-t from-pink-400 to-purple-500 rounded-full shadow-lg opacity-80 hover:opacity-100 transition-opacity duration-300">
                                <div className="w-full h-full rounded-full bg-white/20 backdrop-blur-sm border border-white/30"></div>
                            </div>
                        </div>

                        {/* Shape 3 */}
                        <div className="absolute -top-6 -right-6 sm:-top-8 sm:-right-8 -z-10 animate-pulse">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-xl opacity-70 hover:opacity-90 transition-opacity duration-300">
                                <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-sm border border-white/20"></div>
                            </div>
                        </div>

                        {/* Floating */}
                        <div className="absolute top-1/4 -left-12 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
                        <div className="absolute top-3/4 -right-8 w-1.5 h-1.5 bg-rose-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '0.5s' }}></div>
                        <div className="absolute top-1/2 -left-6 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
                    </motion.figure>

                    {/* Animated */}
                    <motion.div variants={variants.fadeIn} className="flex justify-center mt-8 space-x-2">
                        <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

export default Hero;