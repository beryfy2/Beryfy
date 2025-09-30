/* eslint-disable no-unused-vars */
import React from 'react';

import { motion } from 'motion/react';
import * as variants from '../motion/animation';

const Title = ({subtitle, title, classes}) => {
    return (
        <div className={`mt-2 max-w-[590px] ${classes}`}>
            <motion.p variants={variants.fadeInUp} className="subtitle mb-2.5">{subtitle}</motion.p>
            <motion.h2  variants={variants.fadeInUp}>{title}</motion.h2>
        </div>
    )
}

export default Title;