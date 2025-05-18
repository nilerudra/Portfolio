const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 px-5 py-4 flex justify-between items-center">
        <div className="logo animate-spin-slow">
          <img src="/logo.svg" alt="Logo" className="h-8" />
        </div>

        <a
          href="mailto:rudrakshnile930@gmail.com"
          className="bg-black text-white px-4 py-2 rounded cursor-pointer hover:bg-[#111]"
        >
          Email
        </a>
      </nav>
    </>
  );
};

export default Navbar;
