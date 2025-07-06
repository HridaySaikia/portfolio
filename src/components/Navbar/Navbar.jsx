import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);


    const menuItems = [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "work", label: "Projects" },
        { id: "education", label: "Education" },
        { id: "contact", label: "Contact" }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMenuItemClick = (sectionId) => {
        setActiveSection(sectionId);
        setIsOpen(false);

        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[15vw] 
        ${isScrolled ? "bg-[#050414]/60 backdrop-blur-md shadow-md" : "bg-transparent"}
        `}>
            <div className=' text-white py-5 flex justify-between items-center'>
                {/* Logo */}
                <div className='text-lg font-semibold cursor-pointer'>
                    <span className='text-cyan-400'>&lt;</span>
                    <span className='text-white'>Hriday</span>
                    <span className='text-cyan-400'>/</span>
                    <span className='text-white'>Saikia</span>
                    <span className='text-cyan-400'>&gt;</span>
                </div>

                {/* Desktop Menu */}
                <ul className='hidden md:flex space-x-8 text-gray-300'>
                    {menuItems.map((item) => (
                        <li key={item.id} className={`cursor-pointer hover:text-cyan-400 ${activeSection === item.id ? "text-cyan-400" : ""
                            }`}>
                            <button onClick={() => handleMenuItemClick(item.id)}>
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Social Media Icons */}
                <div className='hidden md:flex space-x-5'>
                    <a
                        href="https://github.com/HridaySaikia"
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-300 hover:text-cyan-400'
                    >
                        <FaGithub size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/hriday-saikia-54764028a/"
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-gray-300 hover:text-cyan-400'
                    >
                        <FaLinkedin size={24} />
                    </a>
                </div>

                {/* Mobile Menu Icon */}
                <div className='md:hidden'>
                    {
                        isOpen ? (
                            <FiX
                                className='text-3xl text-cyan-400 cursor-pointer'
                                onClick={() => setIsOpen(false)}
                            />
                        ) : (
                            <FiMenu
                                className='text-3xl text-cyan-400 cursor-pointer'
                                onClick={() => setIsOpen(true)}
                            />
                        )}
                </div>
            </div>

            {/* Mobile Menu Items */}
            {isOpen && (
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414]/60   backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
                    <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
                        {menuItems.map((item) => (
                            <li
                                key={item.id}
                                className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-cyan-400" : ""
                                    }`}
                            >
                                <button onClick={() => handleMenuItemClick(item.id)}>
                                    {item.label}
                                </button>
                            </li>
                        ))}
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/codingmastr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/tarun-kaushik-553b441a4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white"
                            >
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </ul>
                </div>
            )}



        </nav>
    );
};

export default Navbar
