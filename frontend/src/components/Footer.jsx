/* eslint-disable no-unused-vars */
import React from 'react'
import { socialProfilesIcons, footerItems } from '../constant/data'
import { motion } from 'motion/react'
import * as variants from '../motion/animation'
import ContactForm from './ContactForm'

const Footer = () => {
    return (
        <section className="bg-[#161c20] pt-20 lg:pt-24 pb-10">
            <motion.div
                variants={variants.staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="container text-gray-400 divide-y divide-gray-800"
            >
                {/* Cta */}
                <motion.div
                    variants={variants.fadeInUp}
                    className="pb-20 grid gap-6 lg:grid-cols-[1fr_0.4fr] lg:items-center"
                >
                    {/* content */}
                    <div className="space-y-2.5">
                        <h2 className="text-white">Start your journey with Beryfy today.</h2>
                        <p>
                            Fast, reliable, and beautifully designed solutions — built to match your
                            brand and goals.
                        </p>
                    </div>
                    {/* btn */}
                    <a href="#contact" className="primary-btn max-w-max lg:ml-auto">
                        Launch Your Project
                    </a>
                </motion.div>

                {/* Footer */}
                <footer className="mt-10">
                    {/* Footer top */}
                    <div className="grid sm:grid-cols-2 gap-5 lg:gap-10 lg:grid-cols-[1.5fr_0.7fr_0.7fr_0.8fr_0.7fr]">
                        {/* Footer brand */}
                        <motion.div variants={variants.fadeInUp} className="space-y-3">
                            <p className="text-gray-50 text-2xl font-semibold block">Beryfy</p>
                            <p>Fresh ideas. Smart solutions. Real growth.</p>
                            {/* Social profiles */}
                            <div className="flex items-center gap-2">
                                {socialProfilesIcons.map((item) => (
                                    <motion.a
                                        variants={variants.fadeInUp}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={item.id}
                                        className="hover:text-cyan-600 transition-colors"
                                    >
                                        <item.icon size={24} />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* footer links */}
                        {footerItems.map((item) => (
                            <motion.div variants={variants.fadeInUp} key={item.id} className="space-y-2">
                                <p className="text-white text-lg">{item.title}</p>
                                <ul className="space-y-1.5">
                                    {item.links.map((link, index) => (
                                        <li key={index}>
                                            <a
                                                href={link.url}
                                                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                                // {...(link.download ? { download: "" } : {})}
                                                className="hover:text-gray-100 transition hover:underline"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer bottom */}
                    <p className="mt-12 lg:mt-18">
                        &copy; Beryfy {new Date().getFullYear()} All Rights Reserved.
                    </p>
                </footer>
            </motion.div>
        </section>
    )
}

export default Footer
