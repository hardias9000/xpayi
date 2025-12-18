import Logo from "./Logo";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/** Logo */}

          <div>
            <Logo />
            <p className="">
              Desarrollo web profesional para negocios que quieres crecer en
              internet
            </p>
          </div>

          {/** Navegacion */}
          <div>
            <h4 className="text-xl font-semibold mb-4">
              <ul className="space-y-2">
                <li>
                  <a href="#inico" className="hover:text-white transition">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="hover:text-white transition">
                    servicios
                  </a>
                </li>
                <li>
                  <a href="#sobreby" className="hover:text-white transition">
                    Sobre by
                  </a>
                </li>
                <li>
                  <a href="#portafolio" className="hover:text-white transition">
                    Portafolio
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="hover:text-white transition">
                    Contacto
                  </a>
                </li>
              </ul>
            </h4>
          </div>
        </div>
        {/**linea divisora */}
        <div className="h-px bg-gray-700 my-10"></div>
        {/**bla bla bla */}

        {/** Derecho reservado */}
        <p className="text-center text-gray-500">
          &copy; {new Date().getFullYear()} [siia] - Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
