/* eslint-disable no-unused-vars */
import React from 'react';
import Title from './Title';
import { servicesItems } from "../constant/data";
import { RiArrowRightLongLine } from '@remixicon/react';

import { motion } from 'motion/react';
import * as variants from '../motion/animation';

const Services = () => {
    return (
        <section className="section pb-24 lg:pb-40" id="services">
            <motion.div variants={variants.staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }} 
                className="container mx-auto px-6">
                {/* Title */}
                <Title subtitle='Our services' title='Smart digital solutions for a modern world.' />

                {/* Card wrapper */}
                <div className="grid mt-10 gap-6 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    {servicesItems.map(item => (
                        // Card
                        <motion.div variants={variants.fadeIn}
                            key={item.id}
                            className="bg-pink-600 px-6 py-16 rounded-xl services-card shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 space-y-6 cursor-pointer"
                        >
                            {/* icon */}
                            <div className="max-w-max mx-auto">
                                <img
                                    src={item.icon}
                                    alt={item.title}
                                    width={item.width}
                                    height={item.height}
                                />
                            </div>

                            {/* content */}
                            <div className="text-center mt-5 lg:mt-8">
                                <h3>{item.title}</h3>
                                <p className="max-w-[300px] mx-auto font-semibold text-neutral-200 mt-3">{item.text}</p>
                            </div>

                            <a href="#" className="text-white mt-10 font-semibold flex items-center justify-center gap-1.5 text-lg hover:underline max-w-max mx-auto">
                                Learn more
                                <span>
                                    <RiArrowRightLongLine />
                                </span>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Services;