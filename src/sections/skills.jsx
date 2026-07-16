import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiSplunk,
  SiWireshark,
  SiLinux,
} from "react-icons/si";

const skills = [
  { name: "Splunk", icon: <SiSplunk size={40} /> },
  { name: "Python", icon: <FaPython size={40} /> },
  { name: "React", icon: <FaReact size={40} /> },
  { name: "Docker", icon: <FaDocker size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
  { name: "Linux", icon: <SiLinux size={40} /> },
  { name: "Wireshark", icon: <SiWireshark size={40} /> },
  { name: "Wazuh", icon: <span className="text-3xl font-bold">W</span> },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-slate-950 text-white px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          Technical <span className="text-cyan-400">Skills</span>
        </h2>

        <p className="text-center text-slate-400 mt-5">
          Technologies and tools I use in cybersecurity and development.
        </p>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mt-16">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
                y: -10,
              }}
              className="bg-slate-800 rounded-2xl p-8 text-center border border-cyan-500/20 hover:border-cyan-400 transition"
            >
              <div className="flex justify-center text-cyan-400">
                {skill.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                {skill.name}
              </h3>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;