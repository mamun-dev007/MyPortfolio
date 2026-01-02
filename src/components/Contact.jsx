import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

/* ===== ANIMATIONS ===== */
const sectionVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log(data);
      toast.success("Message sent successfully 🚀");
      reset();
    } catch {
      toast.error("Something went wrong!");
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-black via-[#12061f] to-black
                 py-16 sm:py-20 lg:py-24 px-4 sm:px-6"
    >
      <motion.div
        variants={sectionVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start"
      >
        {/* LEFT – FORM */}
        <motion.div
          variants={fadeLeft}
          className="
            rounded-3xl bg-gradient-to-br from-purple-900/40 to-black/40
            border border-purple-500/20
            p-6 sm:p-8 backdrop-blur
            shadow-[0_0_60px_rgba(168,85,247,0.25)]
          "
        >
          <motion.h2
            variants={item}
            className="tage text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 mb-3"
          >
            Let’s work together!
          </motion.h2>

          <motion.p
            variants={item}
            className="text-gray-400 mb-6 text-sm sm:text-base"
          >
            I design and code beautifully simple things and love what I do.
          </motion.p>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            {/* Name */}
            <motion.div variants={item}>
              <input
                type="text"
                placeholder="First name"
                className="w-full rounded-xl bg-black/40 border border-purple-500/20
                           px-4 py-3 text-sm text-white
                           focus:outline-none focus:ring-2 focus:ring-purple-500"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </motion.div>

            {/* Email */}
            <motion.div variants={item}>
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl bg-black/40 border border-purple-500/20
                           px-4 py-3 text-sm text-white
                           focus:outline-none focus:ring-2 focus:ring-purple-500"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </motion.div>

            {/* Message */}
            <motion.div variants={item}>
              <textarea
                rows="5"
                placeholder="Message"
                className="w-full rounded-xl bg-black/40 border border-purple-500/20
                           px-4 py-3 text-sm text-white resize-none
                           focus:outline-none focus:ring-2 focus:ring-purple-500"
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </motion.div>

            {/* Button */}
            <motion.button
              variants={item}
              type="submit"
              disabled={isSubmitting}
              whileTap={{ scale: 0.96 }}
              className="
                 mt-2 py-3 px-9 rounded-full
                bg-purple-700 hover:bg-purple-900
                text-sm font-semibold
                disabled:opacity-50 transition
                shadow-[0_0_30px_rgba(168,85,247,0.45)]
              "
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </motion.div>

        {/* RIGHT – INFO */}
        <motion.div
          variants={fadeRight}
          className="space-y-6 sm:space-y-8"
        >
          <ContactItem icon={<FiPhone />} title="Phone" value="+880 1602500633" />
          <ContactItem
            icon={<FiMail />}
            title="Email"
            value="mamunmiahridoy@mail.com"
          />
          <ContactItem
            icon={<FiMapPin />}
            title="Address"
            value="Dhaka, Bangladesh"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

const ContactItem = ({ icon, title, value }) => (
  <motion.div
    variants={item}
    whileHover={{ x: 6 }}
    className="flex items-start gap-4"
  >
    <div className="p-3 rounded-full bg-purple-500/20 text-purple-400 text-lg">
      {icon}
    </div>
    <div>
      <p className="text-gray-400 text-xs sm:text-sm">{title}</p>
      <p className="text-white font-medium text-sm sm:text-base">
        {value}
      </p>
    </div>
  </motion.div>
);

export default Contact;
