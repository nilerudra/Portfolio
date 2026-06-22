import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-20 bg-gradient-to-b from-[#f6f3f2] to-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.4em] text-gray-500 text-sm">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Let's Build Something Amazing
          </h2>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Whether you have a project, internship opportunity, freelance work,
            or just want to connect — my inbox is always open.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
          >
            <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-yellow-500" />
                <a
                  href="mailto:rudrakshnile930@gmail.com"
                  className="text-gray-700 hover:text-yellow-500"
                >
                  rudrakshnile930@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-yellow-500" />
                <a
                  href="tel:+919522582918"
                  className="text-gray-700 hover:text-yellow-500"
                >
                  +91 9522582918
                </a>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-yellow-500" />
                <span className="text-gray-700">
                  Chhatrapati Sambhajinagar, Maharashtra
                </span>
              </div>
            </div>

            {/* Socials */}

            <div className="flex gap-4 mt-10">
              <a
                href="https://github.com/nilerudra"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-black hover:text-white transition"
              >
                <Github />
              </a>

              <a
                href="https://linkedin.com/in/rudraksh-nile-18b68622a"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition"
              >
                <Linkedin />
              </a>
            </div>
          </motion.div>

          {/* Right Side */}

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200"
          >
            <div className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  p-4
                  rounded-xl
                  border
                  border-gray-200
                  focus:outline-none
                  focus:ring-2
                  focus:ring-yellow-400
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                  w-full
                  p-4
                  rounded-xl
                  border
                  border-gray-200
                  focus:outline-none
                  focus:ring-2
                  focus:ring-yellow-400
                "
              />

              <textarea
                placeholder="Tell me about your project..."
                rows="6"
                className="
                  w-full
                  p-4
                  rounded-xl
                  border
                  border-gray-200
                  resize-none
                  focus:outline-none
                  focus:ring-2
                  focus:ring-yellow-400
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  bg-black
                  text-white
                  py-4
                  rounded-xl
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:bg-gray-800
                  transition
                "
              >
                <Send size={18} />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
