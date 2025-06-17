// Image Imports
import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

// Services
export const services = [
  {
    id: 1,
    icon: "fas fa-wallet",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    icon: "fas fa-tree",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    icon: "fas fa-socks",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

// Tours
export const tours = [
  {
    id: 1,
    image: tour1,
    date: "August 26th, 2025",
    title: "Tibet Adventure",
    info: "Explore the sacred monasteries and mountains of Tibet.",
    location: "China",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "October 1st, 2025",
    title: "Best of Java",
    info: "Journey through Java’s cultural and natural wonders.",
    location: "Indonesia",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "September 15th, 2025",
    title: "Explore Hong Kong",
    info: "Discover the vibrant city life and heritage of Hong Kong.",
    location: "Hong Kong",
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "December 5th, 2025",
    title: "Rwanda Highlights",
    info: "Safari through Rwanda’s wildlife and scenic beauty.",
    location: "Rwanda",
    duration: 20,
    cost: 3300,
  },
];

// Navbar Links
export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

// Social Media Links
export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];
