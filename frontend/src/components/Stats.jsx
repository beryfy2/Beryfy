/* eslint-disable no-unused-vars */
import React from 'react'
import { statsItems } from "../constant/data"

import { motion } from 'motion/react';
import * as variants from '../motion/animation';

const Stats = () => {
    return (
        <section className="py-20 lg:py-32">
            <motion.div
                variants={variants.staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }} className="container grid justify-center text-center gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
                {statsItems.map(item => (
                    <motion.div variants={variants.fadeInUp} key={item.id}>
                        <h4 className="text-3xl lg:text-5xl font-bold">{item.value}</h4>
                        <p>{item.text}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}

export default Stats