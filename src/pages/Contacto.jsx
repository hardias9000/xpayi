import { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  /*const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Formulario enviado: ", formData);
        //conectar a backend o servicio de email
    };
    */

  return (
    <>
      <NavBar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 2 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="md:py-4 flex flex-col justify-center items-center">
              <h2 className="text-2xl font-bold letras text-gray-900 sm:text-3xl">
                xloop
              </h2>

              <p className="mt-4 letras text-gray-700">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                voluptas delectus alias magni velit! Dicta corrupti dignissimos
                dolor consequatur illum tempore consectetur hic a cupiditate
                sunt quam, earum nisi aperiam.
              </p>
            </div>

            <div className="pt-6">
              <form
                onSubmit={handleChange}
                className="bg-white shadow-md px-8 pt-6 rounded-2xl pb-4"
              >
                {/** Nombre */}
                <div className="mb-4">
                  <label className="block font-medium mb-2">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ontline-none fucos:ring-2 fucos:ing-indigo-500"
                    placeholder="Tu nombre completo"
                    required
                  />

                  {/**e-mail */}
                  <div className="mb-4">
                    <label className="block font-medium mb-2">
                      Correo Electronico
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ontline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="tu_email@google.com"
                      required
                    />
                  </div>

                  {/** Mensaje */}
                  <div className="mb-4">
                    <label className="block font-medium mb-2">Mensaje</label>
                    <input
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ontline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Cuentame que necesitas..."
                      required
                    />
                  </div>

                  {/** Button */}
                  <button
                    type="submit"
                    className="flex items-center justify-center w-50 mx-auto bg-blue-500 text-white py-3 rounded-xl font-semiold text-lg hover:bg-indigo-700 transition"
                  >
                    Enviar mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

export default Contacto;
