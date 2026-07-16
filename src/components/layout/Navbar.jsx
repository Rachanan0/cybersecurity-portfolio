import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto mt-5">

        <div className="mx-4 rounded-2xl border border-cyan-500/20 bg-slate-900/60 backdrop-blur-xl">

          <div className="flex items-center justify-between px-8 py-4">

            <h1 className="text-2xl font-black tracking-wide text-cyan-400">
              RACHANA
            </h1>

            <nav className="hidden md:flex items-center gap-8">

              <a href="#home" className="hover:text-cyan-400 transition">
                Home
              </a>

              <a href="#about" className="hover:text-cyan-400 transition">
                About
              </a>

              <a href="#skills" className="hover:text-cyan-400 transition">
                Skills
              </a>

              <a href="#projects" className="hover:text-cyan-400 transition">
                Projects
              </a>

              <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
              </a>

            </nav>

            <div className="flex gap-5 text-2xl">

              <a
                href="https://github.com/Rachanan0"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/rachana01/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

      </div>
    </motion.header>
  );
}

export default Navbar;