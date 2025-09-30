/* eslint-disable no-unused-vars */
import React from 'react'
import Title from './Title'
import { whyChooseUsItems } from '../constant/data'

import { motion } from 'motion/react';
import * as variants from '../motion/animation';

const WhyChooseUs = () => {
    return (
        <section className="section py-25 lg:py-36 bg-gray-100 relative" id="why-us">
            <motion.div variants={variants.staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }} 
                className="container">
                {/* title */}
                <Title subtitle="Why choose us" title="Creative, modern, and future-ready solutions tailored to your goals." classes="lg:text-center lg:mx-auto" />

                {/* wrapper */}
                <div className="grid md:grid-cols-10 lg:justify-center gap-8 lg:gap-10 lg:mt-14 mt-10">
                    {whyChooseUsItems.map(item => (
                        // card
                        <motion.div variants={variants.fadeInUp} key={item.id} className="mt-10 lg:mt-16 flex items-start gap-5 md:col-span-5 card">
                            {/* icon */}
                            <div className="w-20 h-20 rounded-lg bg-[#473bf028] shrink-0 flex items-center justify-center card-icon">
                                <img src={item.icon} alt={item.title} width={35} height={35} />
                            </div>
                            {/* content */}
                            <div className="max-w-[300px] w-full">
                                <h3 className="text-gray-800 mb-4">{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default WhyChooseUs