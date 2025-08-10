import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Input } from "./components/ui/Input";
import { Button } from "./components/ui/Button";
import Card from "./components/Card";

const popularPackages = [
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
    title: "Goa Beach Escape",
    subtitle: "3 nights • 4 days • Beachside resort stay",
    location: "Goa, India",
    rating: 4.6,
    price: 12999,
    tags: ["Beach", "Family", "Relax"],
    href: "/trip/goa-escape",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1200",
    title: "Himalayan Trek",
    subtitle: "7 nights • 8 days • Guided mountain trek",
    location: "Uttarakhand, India",
    rating: 4.9,
    price: "₹22,499",
    tags: ["Trek", "Adventure"],
  },
];

const popularDestinations = [
  {
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200",
    title: "Jaipur",
    subtitle: "The Pink City",
    location: "Rajasthan, India",
    rating: 4.7,
    price: "From ₹6,999",
    tags: ["Heritage"],
    href: "/destinations/jaipur",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200",
    title: "Kerala",
    subtitle: "Backwaters & Greenery",
    location: "India",
    rating: 4.8,
    price: "From ₹9,999",
    tags: ["Nature"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?q=80&w=1200",
    title: "Ladakh",
    subtitle: "Land of High Passes",
    rating: 4.9,
    price: "From ₹18,499",
    tags: ["Adventure"],
  },
  {
    image: "null",
    title: "Andaman",
    subtitle: "Turquoise paradise",
    rating: 4.5,
    price: "From ₹14,499",
    tags: ["Beach"],
  },
];

const feedbacks = [
  {
    image: "/feedback/user1.jpg",
    title: "Ankit Patel",
    subtitle: "Fantastic experience! Will book again.",
    rating: 4.7,
  },
  {
    image: "/feedback/user2.jpg",
    title: "Neha Joshi",
    subtitle: "Very responsive and organized team!",
    rating: 5.0,
  },
  {
    image: "/feedback/user3.jpg",
    title: "Rohan Mehta",
    subtitle:
      "The trip was perfectly planned. Every detail was taken care of, and the hotels were excellent.",
    rating: 4.9,
  },
  {
    image: "/feedback/user4.jpg",
    title: "Priya Desai",
    subtitle:
      "I loved how smooth the booking process was. Highly recommend to my friends and family!",
    rating: 4.8,
  },
  {
    image: "/feedback/user5.jpg",
    title: "Arjun Singh",
    subtitle:
      "Great service and well-organized itineraries. Customer support was helpful throughout.",
    rating: 4.6,
  },
  {
    image: null,
    title: "Sneha Kapoor",
    subtitle:
      "The tour guide was friendly and knowledgeable. Made the trip extra memorable!",
    rating: 4.9,  
  },
  {
    image: "/feedback/user7.jpg",
    title: "Vikram Joshi",
    subtitle:
      "Affordable and well-planned trips. Definitely booking again next year!",
    rating: 4.7,
  },
  {
    image: "/feedback/user8.jpg",
    title: "Tanvi Sharma",
    subtitle:
      "Loved every bit of our vacation! The scenic spots and activities were amazing.",
    rating: 5.0,
  },
];

const content = [
  "Discover amazing destinations",
  "Book your next adventure today!",
  "Join our community of travelers",
  "Get exclusive deals and offers",
  "Follow us on social media for updates",
  "Contact us for personalized travel plans",
  "Your journey starts here",
  "Experience the best of travel",
  "Make memories that last a lifetime",
];

function HomePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className='relative w-screen h-[500px] md:h-[600px] bg-[linear-gradient(to_top,white,transparent),url("/herosection/image1.jpg")] bg-cover bg-center overflow-hidden'>
        <motion.img
          initial={{ scale: 2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-[95%] rounded-3xl bottom-2 right-0 left-0 mx-auto h-[83%] md:h-[86%] absolute overflow-hidden object-cover"
          src="/herosection/image1.jpg"
        />
        <motion.div
          initial={{ width: "0%", opacity: 0 }}
          animate={{ width: "75%", opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 1 }}
          className="relative h-full bottom-10 left-0 right-0 mx-auto w-3/4"
        >
          <Input
            className="absolute bottom-0 right-0"
            placeholder="Search here..."
          />
          <Button className="absolute bottom-0 right-0 border-2 border-background">
            Search
          </Button>
        </motion.div>
      </div>

      {/* Welcome Section */}
      <div className='px-5 md:px-10 h-full py-10 flex flex-col items-center justify-center bg-[linear-gradient(to_bottom,white_20%,transparent_50%,white_90%),url("/herosection/image2.jpeg")] bg-cover bg-center'>
        <div className="sm:flex bg-brand-dark/30 w-full items-center lg:w-[80%] backdrop-blur-sm px-5 md:px-10 py-5 rounded-lg">
          <div className="w-full sm:w-2/3">
            <motion.h1
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold text-white"
            >
              Welcome to Our Travel Agency
            </motion.h1>
            {content.map((text, index) => (
              <motion.p
                ref={ref}
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-sm sm:text-base text-gray-200 my-2"
              >
                {text}
              </motion.p>
            ))}
          </div>
          <div className="sm:py-0 my-10 w-full sm:w-1/3 relative aspect-square h-full md:justify-self-end">
            <motion.img
              ref={ref}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="rounded-full w-[75%] absolute top-0 left-0 aspect-square object-cover"
              src="/herosection/image3.jpg"
              alt="Travel Image"
            />
            <motion.img
              ref={ref}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="rounded-full w-[50%] absolute bottom-0 right-0 aspect-square object-cover"
              src="/herosection/image3.jpg"
              alt="Travel Image"
            />
          </div>
        </div>
      </div>

      {/* Popular Packages and Destinations */}
      <div className="px-5 sm:px-10 py-5">
        {/* Popular international packages */}
        <div>
          <h2 className="">Popular international packages</h2>
          <section className="py-3 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {popularPackages.map((pkg, index) => (
              <Card variant="horizontal" key={index} {...pkg} />
            ))}
          </section>
        </div>
          
        {/* Popular Destinations */}
        <div className="my-8">
          <h2 className="">Popular Destinations</h2>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {popularDestinations.map((dest, index) => (
              <Card variant="square" key={index} {...dest} />
            ))}
          </section>
        </div>

        {/* Feedback card */}
        <div className="my-8">
          <h2 className="">Customer Feedback</h2>
          <section className="gap-4 flex overflow-x-auto">
            {feedbacks.map((fb, i) => (
              <Card key={i} variant="feedback" className="" {...fb} />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
