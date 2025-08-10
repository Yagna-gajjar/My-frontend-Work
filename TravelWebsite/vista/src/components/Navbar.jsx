import React, { useEffect, useState } from 'react';
import { useAuth } from './context/AuthContext';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navLink = useLocation().pathname;

    const navLinks = [
        { name: 'Home', href: '/home' },
        { name: 'Destinations', href: '/destinations' },
        { name: 'Tours', href: '/tours' },
        { name: 'Blog', href: '/blog' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    // Detect scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`shadow-md transition-all duration-1000 ease-in-out  ${isScrolled ? 'bg-brand-contrast shadow-md' : 'bg-background-dark/20 backdrop-blur'} fixed w-full top-0 z-50`}>
            <nav className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
                {/* Logo */}
                <AnimatePresence>
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className="text-3xl font-bold text-brand-light">
                        <span className="text-brand-dark">V</span>ista
                    </motion.div>

                    {/* Desktop Links */}
                    <ul
                        className="hidden md:flex gap-6 text-sm font-medium text-text-light items-center">
                        {navLinks.map((link) => (
                            <motion.li
                                initial={{ y: -100 }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 * navLinks.indexOf(link) }}
                                key={link.name}>
                                <Link
                                    key={link.href}
                                    to={link.href}
                                    className={`transition-all duration-1000 ease-in-out  ${isScrolled ? 'text-text' : 'text-white'} ${navLink == link.href ? 'bg-brand-dark' : ''} rounded-xl hover:bg-brand px-2 py-1 transition-colors duration-200`}
                                >
                                    {link.name}
                                </Link>
                            </motion.li>
                        ))}
                        <motion.li

                            initial={{ y: -100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.3, delay: 1.2 }}
                        >
                            {user ? (
                                <a
                                    href="/profile"
                                    className="text-brand font-semibold hover:underline"
                                >
                                    Profile
                                </a>
                            ) : (
                                <a
                                    href="/login"
                                    className="text-brand font-semibold hover:underline"
                                >
                                    Login
                                </a>
                            )}
                        </motion.li>
                    </ul>
                </AnimatePresence>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-brand-dark focus:outline-none"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -50, opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        className='absolute top-0 md:hidden w-3/4 sm:w-1/2 bg-background h-screen p-6 shadow-sm'
                    >
                        <ul className="flex flex-col gap-3 text-sm font-medium text-gray-700">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="block hover:text-brand transition-colors duration-200"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                {user ? (
                                    <a
                                        href="/profile"
                                        className="text-brand font-semibold hover:underline"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Profile
                                    </a>
                                ) : (
                                    <a
                                        href="/login"
                                        className="text-brand font-semibold hover:underline"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Login
                                    </a>
                                )}
                            </li>
                        </ul>
                    </motion.div>
                )
                }
            </AnimatePresence>
        </header >
    );
}

export default Navbar;
