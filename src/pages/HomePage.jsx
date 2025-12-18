import { ChevronRight, Shield, Code, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      {/**logo y menus */}

      <NavBar />
      <div className="min-h-screen pt-6 bg-slate-100 to-slate-200 bg-gradient-to-br selection:bg-indigo-500 selection:text-white">
        {/**hero section */}
        <main className="pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 pt-6 overflow-hidden">
          {/** background decoration
           * 
          <div className="absolute top-0 left-1/2 -translate-x-1/1 w-[1000px] h-[600px] bg-slate-600/20 to-blue-200 bg-gradient-to-br rounded-full blur-[110px]-z-10">
          </div>
           */}
          <div className="max-w-7xl grid grid-cols-1 gap-8 md:grid-cols-2 mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center">
              <h1 className="text-3xl font-medium letras text-gray-950 sm:text-3xl md:text-3xl lg:text-3xl">
                <span className="block">
                  [siia] Es una empresa de desarrollo de software con
                  integracion de IA
                </span>
              </h1>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border-slate-700 mb-8 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-green-400"></span>
              </div>
              <p className="max-w-2xl mx-auto letras font-xl text-2xl text-blue-500">
                [siia] Crea innovacion para tu idea y tu vision del futuro,
                sitios web App, bases de datos, integracion con IA
              </p>

              <div className="mt-10 flex justify-center gap-4">
                <button className="flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-blue-500 hover:text-gray-100 transition-colors">
                  Ver documentacion
                  <Code size={20} />
                </button>
                <button className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-gray-950 border border-slate-700 hover:bg-slate-800 hover:text-gray-100 transition-colors">
                  Contar ventas <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/** code snippet previw visual element */}
            <div className="mt-6 relative max-w-3xl mx-auto text-left">
              <div className="bg-slate-950 rounded-xl border border-slate-800 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-2 text-xs text-slate-500 font-mono">
                    helo_future.py
                  </span>
                </div>
                <div className="p-6 overflow-x-auto">
                  <pre className="text-blue-400">
                    <code>
                      <span className="text-purple-400">const </span>
                      <span className="text-blue-400">siia </span>
                      <span className="text-yellow-400">require</span>(
                      <span className="text-green-400">xPay-node</span>) ;{"\n"}
                      {"\n"}
                      <span className="text-purple-400">const </span>payment =
                      <span className="text-purple-400"> await </span>
                      <span> xpay.charges</span>
                      <span className="text-blue-400"> create</span>({"{"}
                      {"\n"} amount:
                      <span className="text-orange-400">2000</span>,{"\n"}{" "}
                      currency:<span className="text-orange-400">'usd'</span>,
                      {"\n"} source:
                      <span className="text-orange-400">'tok_mastercard'</span>,
                      {"\n"} description:
                      <span className="text-orange-400">
                        'Licencia Software Enterprise'
                      </span>
                      {"\n"}
                      {"}"});
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/** features grid --  */}
      <div className="py-20">
        <div className="w-full flex flex-col items-center justify-center letras">
          <h2 className="font-medium text-3xl">Solución para tu vision</h2>
          <p className="py-3 text-2xl">
            Innovamos negocias con tu vision para el futuro
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 2 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/** feature 1 */}
            <div className="group p-6 rounded-2xl bg-green-600/30 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-700/30">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-10 transition"></div>
              <div className="w-12 h-12 bg:red-900/50 rounded-lg flex items-center justify-center mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Integración Instantánea
              </h3>
              <p className="letras">
                SDK preconstruido y tipados para react, Node, Python, Java
              </p>
            </div>
            {/** feature 2 */}
            <div className="p-6 rounded-2xl bg-green-600/30 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-700/30">
              <div className="w-12 h-12 bg:indigo-900/50 rounded-lg flex items-centerjustify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Integración Instantánea
              </h3>
              <p className="">
                SDK preconstruido y tipados para react, Node, Python, Java
              </p>
            </div>
            {/** feature 3 */}
            <div className="p-6 rounded-2xl bg-green-600/30 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-700/30">
              <div className="w-12 h-12 bg:indigo-900/50 rounded-lg flex items-centerjustify-center mb-4">
                <Globe size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Integración Instantánea
              </h3>
              <p className="">
                SDK preconstruido y tipados para react, Node, Python, Java
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <section className="pt-6 letras">
        <ol className="relative space-y-12 before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2  before:bg-gray-300">
          <li className="group relative grid grid-cols-2 odd:-me-3 even:-sm-3">
            <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
              <span className="size-3 shrink-0 rounded-full bg-blue-600 relative top-2"></span>
              <div className="mt-2">
                {" "}
                <time className="text-xs/none font-medium text-gray-700 dark:text-gray-800">
                  12/02/2025
                </time>
                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-800">
                  Kickoff
                </h3>
                <p className="mt-0.5 text-1xl text-gray-700 dark:text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  officiis tempora ipsum adipisci tenetur sunt quae
                  exercitationem sed pariatur porro!
                </p>
              </div>
            </div>
            <div aria-hidden="true"></div>
          </li>
          <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
              <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

              <div className="-mt-2">
                <time className="text-xs/none font-medium text-gray-700 dark:text-gray-800">
                  5/03/2025
                </time>

                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-800">
                  First Milestone
                </h3>

                <p className="mt-0.5 text-1xl text-gray-700 dark:text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  officiis tempora ipsum adipisci tenetur sunt quae
                  exercitationem sed pariatur porro!
                </p>
              </div>
            </div>

            <div aria-hidden="true"></div>
          </li>

          <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
              <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

              <div className="-mt-2">
                <time className="text-xs/none font-medium text-gray-700 dark:text-gray-800">
                  24/04/2025
                </time>

                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-800">
                  Launch
                </h3>

                <p className="mt-0.5 text-1xl text-gray-700 dark:text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  officiis tempora ipsum adipisci tenetur sunt quae
                  exercitationem sed pariatur porro!
                </p>
              </div>
            </div>

            <div aria-hidden="true"></div>
          </li>
          <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
              <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

              <div className="-mt-2">
                <time className="text-xs/none font-medium text-gray-700 dark:text-gray-800">
                  5/03/2025
                </time>

                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-800">
                  First Milestone
                </h3>

                <p className="mt-0.5 text-1xl text-gray-700 dark:text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  officiis tempora ipsum adipisci tenetur sunt quae
                  exercitationem sed pariatur porro!
                </p>
              </div>
            </div>

            <div aria-hidden="true"></div>
          </li>
          <li className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3">
            <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
              <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

              <div className="-mt-2">
                <time className="text-xs/none font-medium text-gray-700 dark:text-gray-800">
                  24/04/2025
                </time>

                <h3 className="text-lg font-bold text-gray-900 dark:text-gray-800">
                  Launch
                </h3>

                <p className="mt-0.5 text-1xl text-gray-700 dark:text-gray-800">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                  officiis tempora ipsum adipisci tenetur sunt quae
                  exercitationem sed pariatur porro!
                </p>
              </div>
            </div>

            <div aria-hidden="true"></div>
          </li>
        </ol>
      </section>

      <section className="pt-6 bg-gray-200 lg:grid lg:h-screen lg:place-content-center">
        <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center letras">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Contratas a la competencia cuando quieres ser alguien, contratas a
              <strong className="text-indigo-600"> [siia] </strong>
              cuando ya eres alguien
            </h1>
            <p className="mt-4 text-base text-pretty text-gray-600 sm:text-lg/relaxed">
              Cuenta tu idea y hacemos que cresca tu empresa en internet,
              llegando a mas publico y levantando una marca propia.
            </p>
            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
              <a
                className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                href="#"
              >
                Get Started
              </a>

              <a
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
