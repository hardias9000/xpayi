import { Link } from "react-router-dom";

import Logo from "./Logo";
function NavBar() {
  return (
    <>
      {/**navbar */}
      <nav className="fixed w-full z-50 bg-gray-100 backdrop-blur-md border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo />
            {/**menu -- */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8 letras font-medium">
                <Link
                  to="/home"
                  className="hover:bg-gray-300 transition-all px-3 py-2 rounded-full text-1xl font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/contacto"
                  className="hover:bg-gray-300 transition-all px-3 py-2 rounded-full text-1xl font-medium"
                >
                  Contacto
                </Link>
                {/**
                 * 
                <Link
                  to="/portafolio"
                  className="hover:bg-gray-300 transition-all px-3 py-2 rounded-full text-1xl font-medium"
                >
                  Portafolio
                </Link>
                <Link
                  to="/sobre_by"
                  className="hover:bg-gray-300 transition-all px-3 py-2 rounded-full text-1xl font-medium"
                >
                  About
                </Link>
                */}
              </div>
            </div>
            {/**-------------- /*}
            {/**cta button *
            <div className="hidden md:block">
              <Link
                to="/contacto"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 font-helvetica rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/30"
                >
                Empezar ahora
              </Link>
            </div>
            ** menu moviel */}

            {/**moviel menu dropdown *
            <div className="mr-2 flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-blue-400 font-helvetica hover:text-white hover:bg-slate-800 focus:outline-none"
                >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="about"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700"
                >
                about
              </Link>
              <Link
                to="sobre_by"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700"
                >
                about
              </Link>
              <Link
                to="about"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700"
                >
                about
              </Link>{" "}
              <Link
                to="about"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700"
                >
                about
              </Link>
            </div>
          </div>
        )}
        {/**___________________________ */}
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
