/* eslint-disable no-unused-vars */
import React from 'react'
import Title from './Title'
import { workItems } from '../constant/data';

import { motion } from 'motion/react';
import * as variants from '../motion/animation';

const Works = () => {
    return (
        <section className="section py-20 lg:py-32 xl:py-40" id="">
            <motion.div
                variants={variants.staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                className="container">
                {/* Title */}
                <Title subtitle="Our Works" title="Our works describe why we are the best in the business" classes="lg:text-center lg:mx-auto " />
                {/* Card wrapper */}
                <div className="grid gap-5 lg:gap-12 mt-24 md:grid-cols-2">
                    {workItems.map(item => (
                        // Card
                        <motion.div variants={variants.fadeInUp} key={item.id} className="space-y-5">
                            {/* img */}
                            <div className="max-w-max mx-auto">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    width={500}
                                    height={item.height}
                                    className="rounded-2xl"
                                />
                            </div>
                            {/* content */}
                            <div className="space-y-1.5">
                                <p>{item.subtitle}</p>
                                <h3 className="text-gray-900">{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Link */}
                <motion.button variants={variants.fadeInUp} className="text-blue-700 hover:text-blue-900 transition-colors mt-12 font-semibold lg:mt-18">See all works</motion.button>
            </motion.div>
        </section>
    )
}

export default Works;