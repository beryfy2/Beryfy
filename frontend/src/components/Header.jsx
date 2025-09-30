import React, { useState, useEffect } from 'react';
import { navItems } from "../constant/data";
import logo from "/images/Beryfy.svg";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(1);
    const handleClick = () => setIsOpen((prev) => !prev);

    const handleLinkClick = (id) => {
        setIsOpen(false);
        if (typeof id !== 'undefined') {
            setActiveLink(id);
        }
    };
    // Scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => {
                const element = document.querySelector(item.url);
                return {
                    id: item.id,
                    element,
                    top: element ? element.offsetTop - 100 : 0,
                    bottom: element ? element.offsetTop + element.offsetHeight - 100 : 0
                };
            });
            const scrollPosition = window.scrollY + 150;
            const currentSection = sections.find(section =>
                scrollPosition >= section.top && scrollPosition < section.bottom
            );

            if (currentSection) {
                setActiveLink(currentSection.id);
            } else {
                if (scrollPosition < 200) {
                    setActiveLink(1);
                }
            }
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <header className="fixed top-0 py-4 w-full border-b border-neutral-200 bg-white z-40 ">
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center">
                    <img
                        src={logo}
                        alt="Beryfy logo"
                        className="w-13 h-13 transition-transform duration-500 hover:rotate-135 active:rotate-270"
                    />
                    <span className="ml-2 text-3xl font-semibold text-gray-900">
                        Beryfy
                    </span>
                </a>
                {/* <a href="#" className="text-3xl font-semibold text-gray-900">Beryfy</a> */}

                {/* mobile menu */}
                <nav className={`navbar ${isOpen ? "active" : ""}`}>
                    <ul className="text-center pt-12 space-y-2.5">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={item.url}
                                    className={`font-semibold hover:text-cyan-700 transition-colors ${activeLink === item.id ? "text-cyan-500" : ""}`} onClick={() => handleLinkClick(item.id)}>{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    {/* btn */}
                    <a href="#contact" className="primary-btn mt-10" onClick={() => handleLinkClick()}>Contact Us</a>
                </nav>

                {/* Lg menu */}
                <ul className="max-lg:hidden flex gap-10 items-center">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a href={item.url} className={`font-semibold hover:text-cyan-600 transition-colors ${activeLink === item.id ? "text-cyan-500" : ""}`} onClick={() => handleLinkClick(item.id)} >{item.label}</a>
                        </li>
                    ))}
                </ul>

                {/* lg btn */}
                <a href="#contact" className="max-lg:hidden primary-btn" onClick={() => handleLinkClick()}>Contact Us</a>

                {/* Menu btn */}
                <button className="lg:hidden relative h-6 w-6 flex items-center justify-center" onClick={handleClick}>
                    <span className={`absolute w-6 h-0.5 bg-neutral-700 rounded transition-all duration-300 ease-in-out  ${isOpen ? "rotate-45 top-1/2" : "top-[6px]"} `}></span>
                    <span className={`absolute w-6 h-0.5 bg-neutral-700 rounded transition-all duration-300 ease-in-out  ${isOpen ? "-rotate-45 top-1/2" : "top-[14px]"}`}></span>
                </button>

                {/* overlay */}
                <div className={`overlay ${isOpen ? "active" : ""}`} onClick={handleClick} />
            </div>
        </header>
    );
}

export default Header;