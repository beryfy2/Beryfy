/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import Title from './Title';
import { RiArrowRightLongLine, RiEyeLine, RiExternalLinkLine, RiStarFill } from '@remixicon/react';
import { portfolioItems, mainProject } from '../constant/data';
import { motion } from 'motion/react';
import * as variants from '../motion/animation';

const OurWorks = () => {
    const [hoveredImage, setHoveredImage] = useState(null);
    return (
        <section className="section pb-20 lg:pb-32 relative overflow-hidden" id='works'>
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-30"></div>
            <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '3s' }}></div>

            <motion.div
                variants={variants.staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                className="container relative z-10">

                {/* Enhanced Title Section */}
                <Title subtitle="Our Works" title="Our works describe why we are the best in the business" classes="lg:text-center lg:mx-auto " />
                {/* Enhanced wrapper */}
                <div className="grid gap-16 mt-14 lg:grid-cols-2 lg:items-start lg:gap-20">

                    <div className="lg:order-1">
                        {/* Enhanced Portfolio Grid */}
                        <div className="grid grid-cols-2 gap-6 lg:gap-10 items-center mt-18 mb-20">
                            {portfolioItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    variants={variants.fadeIn}
                                    className={`relative group cursor-pointer ${item.featured ? 'col-span-2 lg:col-span-1' : ''}`}
                                    onMouseEnter={() => setHoveredImage(item.id)}
                                    onMouseLeave={() => setHoveredImage(null)}
                                >
                                    {/* Image Container */}
                                    <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                                        <motion.img
                                            variants={variants.fadeIn}
                                            src={item.image}
                                            alt={item.title}
                                            width={item.width}
                                            height={item.height}
                                            className="w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-110"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                                        {/* Featured Badge */}
                                        {/* {item.featured && (
                                            <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                                <RiStarFill className="text-sm" />
                                                Featured
                                            </div>
                                        )} */}

                                        {/* Hover Actions */}
                                        <motion.div
                                            className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            initial={{ scale: 0.8 }}
                                            animate={{ scale: hoveredImage === item.id ? 1 : 0.8 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <motion.button
                                                className="bg-white/90 backdrop-blur-sm text-gray-800 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <RiEyeLine className="text-xl" />
                                            </motion.button>
                                            <motion.button
                                                className="bg-white/90 backdrop-blur-sm text-gray-800 p-3 rounded-full shadow-lg hover:bg-white transition-colors"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <RiExternalLinkLine className="text-xl" />
                                            </motion.button>
                                        </motion.div>
                                    </div>

                                    {/* Project Info */}
                                    <motion.div
                                        className="mt-4 text-center"
                                        initial={{ opacity: 0.7 }}
                                        animate={{ opacity: hoveredImage === item.id ? 1 : 0.7 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className="font-bold text-gray-900 text-lg group-hover:text-sky-600 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-sky-600 font-semibold text-sm mt-1">
                                            {item.category}
                                        </p>
                                        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Enhanced Main Project */}
                    <div className="lg:mt-32">
                        <motion.div
                            variants={variants.fadeIn}
                            className="relative group"
                        >
                            {/* Main Image */}
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3">
                                <motion.img
                                    variants={variants.fadeIn}
                                    src={mainProject.image}
                                    alt={mainProject.title}
                                    width={445}
                                    height={565}
                                    className="w-full h-auto rounded-3xl transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>

                                {/* Floating Elements */}
                                <div className="absolute top-6 right-6 w-4 h-4 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-6 left-6 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Project Details */}
                            <motion.div
                                className="mt-8 space-y-4"
                                variants={variants.fadeInUp}
                            >
                                <div className="flex items-center gap-2">
                                    <span className="bg-gradient-to-r from-sky-100 to-cyan-100 text-sky-700 px-3 py-1 rounded-full text-sm font-semibold">
                                        {mainProject.category}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors">
                                    {mainProject.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed">
                                    {mainProject.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {mainProject.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-gradient-to-r from-sky-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-4 mt-6">
                                    <motion.a
                                        href={mainProject.liveUrl}
                                        className="flex items-center gap-2 bg-sky-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span>View Live</span>
                                        <RiExternalLinkLine className="text-lg" />
                                    </motion.a>
                                    <motion.a
                                        href={mainProject.liveUrl}
                                        className="flex items-center gap-2 bg-sky-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <span>View Code</span>
                                        <RiArrowRightLongLine className="text-lg" />
                                    </motion.a>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default OurWorks;
