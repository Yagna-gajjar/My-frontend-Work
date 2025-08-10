import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { nav } from 'framer-motion/client';
import { useNavigate } from 'react-router-dom';


function HeroSection() {
    const [selectedImage, setSelectedImage] = useState('image1.jpg');
    const backgroundImages = ['image1.jpg', 'image2.jpeg', 'image3.jpg', 'image4.jpeg', 'image5.jpeg'];
    const [xOffset, setXOffset] = useState(0);
    const nav = useNavigate();

    const getCardWidth = () => {
        if (window.innerWidth >= 768) return 192 + 48; // md:w-48 + md:me-12
        if (window.innerWidth >= 640) return 176 + 32; // sm:w-44 + sm:me-8
        return 160 + 24; // w-40 + me-6
    };

    const cardWidth = getCardWidth();
    const visibleWidth = window.innerWidth / 2; // w-1/2
    const totalWidth = backgroundImages.length * cardWidth;
    const maxScroll = -(totalWidth - visibleWidth);

    useEffect(() => {
        let currentIndex = backgroundImages.indexOf(selectedImage);

        const interval = setInterval(() => {
            // Scroll to the right
            if (currentIndex === backgroundImages.length - 1) {
                setXOffset(0); // Reset to the start
            } else {
                setXOffset((prev) => Math.max(prev - cardWidth, maxScroll)); // scroll to the next image
            }

            // Update index and loop back
            currentIndex = (currentIndex + 1) % backgroundImages.length;
            setSelectedImage(backgroundImages[currentIndex]);
        }, 3000); // Change every 3 seconds (adjust as needed)

        return () => clearInterval(interval); // Cleanup
    }, []);
    return (
        <div>
            <AnimatePresence>
                <div className='relative w-screen  h-screen overflow-hidden'>
                    <motion.img
                        key={selectedImage}
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                        className='absolute top-0 w-full h-full object-cover'
                        src={`/herosection/${selectedImage}`}
                    />
                    <div className='absolute w-full h-full bg-background-dark/50'></div>
                    <motion.div
                        initial={{ y: 300, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className='w-full md:w-1/2 text-start px-10 text-text-light flex flex-col justify-center items-start absolute top-14 md:bottom-0 left-0 h-1/2 md:h-full'>
                        <h1 className='text-4xl md:text-5xl lg:text-7xl'>
                            Travel and Exlpore
                        </h1>
                        <p className='text-md md:text-lg lg:text-2xl py-5 text-justify'>
                            Travel is more than just visiting new places; it's about creating stories, embracing cultures, and finding pieces of yourself in every corner of the world.
                        </p>
                        <div className='flex gap-4 mt-5'>
                            <Button onClick={() => nav('/home')}>
                                Get Started
                            </Button>
                            <Button
                                variant='secondary'
                            >
                                Lern More
                            </Button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, ease: 'easeInOut', delay: 1 }}
                        className='w-full md:w-1/2 absolute bottom-0 pb-10 right-0 overflow-hidden fade-mask-x'>
                        <motion.div
                            animate={{ x: xOffset }}
                            transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.6 }}
                            className='flex pt-10 ps-10'
                        >
                            {backgroundImages.map((image) => (
                                <div
                                    key={image}
                                    // onClick={() => changeImageBackground(image)}
                                    className={`w-40 h-44 sm:w-44 sm:h-48 md:w-48 md:h-52 relative hover:-translate-y-1 transform duration-300 ease-in-out me-6 sm:me-8 md:me-12 shrink-0 ${selectedImage == image ? 'scale-110' : ''}`}
                                >
                                    <img
                                        className='w-full h-full absolute object-cover rounded-lg border-2 border-background'
                                        src={`/herosection/${image}`}
                                    />
                                    <div className={`w-full h-full absolute rounded-lg border-2 ${selectedImage == image ? 'bg-background-dark/40' : ''}`}></div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </AnimatePresence>
        </div>
    );
}

export default HeroSection;
