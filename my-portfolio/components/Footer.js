import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-violet-900 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-4 flex justify-center items-center">
        <p className="text-center text-sm md:text-xl font-medium tracking-wide">
          © {new Date().getFullYear()} | Designed and Built by{" "}
          <span className="font-bold bg-clip-text text-transparent bg-white">
            Tejash Soni
          </span>

        </p>
      </div>
    </footer>
  );
};

export default Footer;
