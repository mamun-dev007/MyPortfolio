import React from 'react';

const ResponsiveDesign = () => {
    return (
        <div className=''>
            <div className="space-y-12 text-white">

  {/* 🔹 HERO */}
  <div className="bg-gradient-to-r from-black to-purple-900 rounded-xl p-8">
    <h2 className="text-3xl md:text-4xl font-bold">
      UI/UX Design
    </h2>
    <p className="text-white/70 mt-3 max-w-xl">
      We don’t only design beautiful experiences, we also make sure your
      business grows through user-centered design.
    </p>

    <div className="mt-6 flex gap-6 text-sm text-white/80">
      <div>
        <p className="text-2xl font-bold">5.0</p>
        <span>Rated on Clutch</span>
      </div>
      <div>
        <p className="text-2xl font-bold">37</p>
        <span>International Clients</span>
      </div>
      <div>
        <p className="text-2xl font-bold">10+</p>
        <span>Design Awards</span>
      </div>
    </div>
  </div>

  {/* 🔹 SERVICE DESCRIPTION */}
  <div>
    <h3 className="text-2xl font-semibold mb-4">
      UI/UX Design
    </h3>
    <p className="text-white/80 leading-relaxed">
      Elizabeth some dodgy chavs are you taking the piss faff about pardon
      amongst car boot a load of old tosh is cracking goal blow off telling
      brown. Broly show off show off pick your nose and blow off well A bit of
      how’s your father tomfoolery blimey, me old mucker starkers Queen’s
      English dropped a clanger.
    </p>
  </div>

  {/* 🔹 SERVICES PROCESS */}
  <div>
    <h3 className="text-2xl font-semibold mb-4">
      Services Process
    </h3>
    <p className="text-white/70 mb-6 max-w-2xl">
      Elizabeth some dodgy chavs are you taking the piss faff about pardon
      amongst car boot a load of old tosh is cracking goal blow off telling
      brown.
    </p>

    <div className="grid md:grid-cols-2 gap-4">
      {[
        "Reinvent Your Business to Better",
        "Pioneering the Internet's First",
        "Pioneering the Design World's First",
        "Pioneering the Design World's First",
        "Pioneering the Design World's First",
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="text-purple-400">✓</span>
          <span className="text-white/80">{item}</span>
        </div>
      ))}
    </div>
  </div>

  {/* 🔹 ALL SERVICES */}
  <div className="bg-black/40 rounded-xl p-6">
    <h3 className="text-xl font-semibold mb-4">
      All Services
    </h3>

    <ul className="space-y-3">
      {[
        "Branding Design",
        "3D Animation",
        "UI/UX Design",
        "Web Design",
        "App Design",
      ].map((service, i) => (
        <li
          key={i}
          className={`flex justify-between items-center px-4 py-3 rounded-lg cursor-pointer
          ${service === "Branding Design"
            ? "bg-purple-600"
            : "hover:bg-white/10"
          }`}
        >
          <span>{service}</span>
          <span>→</span>
        </li>
      ))}
    </ul>
  </div>

  {/* 🔹 GET IN TOUCH */}
  <div className="bg-black/40 rounded-xl p-6">
    <h3 className="text-xl font-semibold mb-6">
      Get In Touch
    </h3>

    <form className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
      />
      <textarea
        rows="4"
        placeholder="Your message"
        className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-purple-500"
      />
      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 transition rounded-full py-3 font-semibold"
      >
        Send Message
      </button>
    </form>
  </div>

</div>

        </div>
    );
};

export default ResponsiveDesign;