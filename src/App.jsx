import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // import react-scroll
import SertifT from "./assets/Thumbnail-sertifgene 1.png"
import PokedexT from "./assets/Thumbnail-pokedex.png"
import WhitepaceT from "./assets/Thumbnail-Whitepace.png"
import { SiReact } from "react-icons/si";
import {
  RiTailwindCssFill,
  RiInstagramFill,
  RiGithubFill,
  RiLinkedinFill,
} from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  return (
    <div className="p-4 bg-slate-200 bg-opacity-30 rounded-xl md:rounded-full">
      <div className="flex justify-between items-center gap-5">
        {/* Logo */}
        <div className="bg-slate-200 p-2 rounded-lg bg-opacity-70">
          <a href="/" className="Text-1">
            Rendyラ
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex gap-8">
            <li className="nav-item">
              <Link
                to="Hero" // Section id yang akan di scroll
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="Progres" // Section id yang akan di scroll
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Progres
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="Contact" // Section id yang akan di scroll
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="md:hidden flex justify-center items-center">
          <span
            className="solar--hamburger-menu-broken text-2xl"
            onClick={toggle}
          ></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {active && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col gap-5">
            <li className="nav-item">
              <Link
                to="Hero"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="Progres"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Progres
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const App = () => {
const [isProgresVisible, setIsProgresVisible] = useState(false);
const [isContactVisible, setIsContactVisible] = useState(false);
 const [hasProgresAnimated, setHasProgresAnimated] = useState(false);
 const [hasContactAnimated, setHasContactAnimated] = useState(false);
const contactRef = useRef(null);
const progresRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.target.id === "Progres") {
         if (entry.isIntersecting && !hasProgresAnimated) {
           setIsProgresVisible(true);
           setHasProgresAnimated(true); // Pastikan animasi hanya sekali
         }
      } else if (entry.target.id === "Contact") {
         if (entry.isIntersecting && !hasContactAnimated) {
           setIsContactVisible(true);
           setHasContactAnimated(true); // Pastikan animasi hanya sekali
         }
      }
    },
    {
      threshold: 0.5,
    }
  );

  if (progresRef.current) observer.observe(progresRef.current);
  if (contactRef.current) observer.observe(contactRef.current);

  return () => {
    if (progresRef.current) observer.unobserve(progresRef.current);
    if (contactRef.current) observer.unobserve(contactRef.current);
  };
}, []);

  return (
    <div>
      <header className="absolute top-0 w-full flex items-center justify-center pt-3 z-50">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section
        id="Hero"
        className="h-screen flex justify-center items-center flex-col"
      >
        <div className="">
          <motion.p
            className="header-outline"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: -2 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >
            Hellow
          </motion.p>

          <motion.p
            className="header"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 1,
              duration: 1,
              ease: "easeOut",
            }}
          >
            i am Rendy,
          </motion.p>
          <motion.p
            className="header"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 1.5,
              duration: 1,
              ease: "easeOut",
            }}
          >
            frontend developer
          </motion.p>

          <motion.div
            className="Btn"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2,
              duration: 2,
              ease: "easeOut",
            }}
          >
            <motion.button
              className="py-2 px-6 bg-blue-500 text-white rounded-lg font-semibold text-xs lg:text-lg transition-all duration-100 ease-in-out transform hover:scale-110 hover:bg-blue-600 "
              whileHover={{ scale: 1.15, backgroundColor: "#3b82f6" }} // Hover effect
              whileTap={{ scale: 0.75 }} // Klik effect
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                to="Progres"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                My progres
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Progres Section */}
      <section
        id="Progres"
        ref={progresRef}
        className="backdrop:h-min bg-slate-600"
      >
        <div className="text-center pt-10 pb-5">
          <p className="header-2 text-white ">Project at internship</p>
        </div>

        <div
          className={`flex overflow-x-auto gap-6 p-4 space-x-4 sm:space-x-6 lg:justify-center ${
            isProgresVisible
              ? "opacity-100 translate-y-0 blur-none"
              : "opacity-0 translate-y-24 blur-sm"
          } transition-all duration-1000 ease-in-out`}
        >
          {/* content 1 */}
          <div className="flex flex-col bg-white p-4 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl w-full sm:w-80">
            <div>
              <motion.img
                src={SertifT}
                alt="Sertif gene Thumbnail"
                className="border-4 border-black rounded-lg mb-4 hover:scale-105 transition-transform duration-300 min-w-60 min-h-44 object-cover"
                whileHover={{ scale: 1.05 }}
              />
            </div>
            <div className="flex flex-col gap-2 flex-grow">
              <p className="text-lg font-semibold text-gray-900">
                Sertifikat Generator
              </p>
              <p className="text-sm text-gray-600">
                Aplikasi yang dibuat sebagai final Projek, tujuan aplikasi ini
                adalah untuk membuat sertifikat secara otomatis
              </p>
            </div>
            <motion.button
              className="py-2 px-6 bg-blue-500 text-white rounded-lg font-semibold text-xs transition-all duration-200 ease-in-out transform hover:scale-110 hover:bg-blue-600 mt-auto"
              whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="Progres"
                smooth={true}
                duration={500}
                className="cursor-pointer"
              >
                My Progres
              </Link>
            </motion.button>
          </div>

          {/* content 2 */}
          <div className="flex flex-col bg-white p-4 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl w-full sm:w-80">
            <div>
              <motion.img
                src={PokedexT}
                alt="Pokedex Thumbnail"
                className="border-4 border-black rounded-lg mb-4 hover:scale-105 transition-transform duration-300 min-w-60 min-h-44 object-cover"
                whileHover={{ scale: 1.05 }}
              />
            </div>
            <div className="flex flex-col gap-2 flex-grow">
              <p className="text-lg font-semibold text-gray-900">Pokedex</p>
              <p className="text-sm text-gray-600">
                Aplikasi yang dibuat sebagai Projek ke 2 , tujuan aplikasi ini
                adalah untuk mengenal penggunaan useState, useEffect dan
                fetching API dalam React js
              </p>
              <motion.button
                className="py-2 px-6 bg-blue-500 text-white rounded-lg font-semibold text-xs transition-all duration-200 ease-in-out transform hover:scale-110 hover:bg-blue-600 mt-auto"
                whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="Progres"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  My Progres
                </Link>
              </motion.button>
            </div>
          </div>

          {/* content 3 */}
          <div className="flex flex-col bg-white p-4 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl w-full sm:w-80">
            <div>
              <motion.img
                src={WhitepaceT}
                alt="Whitepace Thumbnail"
                className="border-4 border-black rounded-lg mb-4 hover:scale-105 transition-transform duration-300 min-w-60 min-h-44 object-cover"
                whileHover={{ scale: 1.05 }}
              />
            </div>
            <div className="flex flex-col gap-2 flex-grow">
              <p className="text-lg font-semibold text-gray-900">WhitePace</p>
              <p className="text-sm text-gray-600">
                Aplikasi yang dibuat sebagai Projek pertama untuk membuat sebuah
                responsif website, tujuan aplikasi ini untuk mengetes kemampuan
                dalam membuat responsif website
              </p>
              <motion.button
                className="py-2 px-6 bg-blue-500 text-white rounded-lg font-semibold text-xs transition-all duration-200 ease-in-out transform hover:scale-110 hover:bg-blue-600 mt-auto"
                whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="Progres"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer"
                >
                  My Progres
                </Link>
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="Contact"
        ref={contactRef}
        className="h-screen flex justify-center bg-gray-100"
      >
        <div
          className={`flex flex-col items-center justify-center ${
            isContactVisible
              ? "opacity-100 translate-x-0 blur-none"
              : "opacity-0 translate-x-24 blur-sm"
          } transition-all duration-1000 ease-in-out`}
        >
          <div className="mb-8">
            <p className="header-2 text-gray-800 text-2xl pt-20">
              What I learned?
            </p>
          </div>
          <div className="flex gap-6 justify-center items-center flex-wrap">
            <div className="icon">
              <SiReact size={80} />
            </div>
            <div className="icon">
              <RiTailwindCssFill size={80} />
            </div>
            <div className="icon">
              <FaHtml5 size={80} />
            </div>
            <div className="icon">
              <FaCss3Alt size={80} />
            </div>
            <div className="icon">
              <IoLogoJavascript size={80} />
            </div>
            <div className="icon">
              <SiTypescript size={80} />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 p-4 text-center">
        <div className="flex justify-center space-x-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiInstagramFill
              size={30}
              className="text-white hover:text-blue-400 transition-colors"
            />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiGithubFill
              size={30}
              className="text-white hover:text-gray-400 transition-colors"
            />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiLinkedinFill
              size={30}
              className="text-white hover:text-blue-600 transition-colors"
            />
          </a>
        </div>
        <p className="text-white mt-4">© 2024 Your Company</p>
      </footer>
    </div>
  );
};

export default App;
