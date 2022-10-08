import React from "react";

export const ContactoPage = () => {
  return (
    <section className="text-center h-auto pt-24">
      <h1 className="text-indigo-600 font-bold text-7xl">Contacto</h1>
        <div className="p-20">
          <div className="lg:w-full">
            <div className="flex justify-center ">
              <div className="flex flex-col lg:w-10/12 md:w-full  ">
                <div className="w-full shadow-lg shadow-gray-500/50 lg:rounded-lg">
                  <div className="flex flex-wrap-reverse lg:flex-wrap -mr-4 -ml-4 no-gutters">
                    <div className=" w-full pr-4 pl-4 flex items-stretch lg:max-w-[58.33333%]">
                      <div className="bg-white w-full p-12 ">
                        <h3 className="mb-4 text-3xl font-semibold ">Contact</h3>

                        <form method="POST" id="contactForm" name="contactForm">
                          <div className="flex flex-wrap -mr-4 -ml-4 p-0 m-0 ">
                            <div className="flex md:flex-col w-full  lg:w-6/12 mb-4 pr-1 m-0">
                              <input
                                type="text"
                                className="h-12 w-full p-2 text-black text-sm rounded-sm shadow-none outline-none bg-white border border-[rgba(0,0,0,0.1)]"
                                name="name"
                                id="name"
                                placeholder="Nombre y Apellido"
                              />
                            </div>
                            <div className="flex md:flex-col w-full lg:w-6/12 mb-4 lg:pl-1 m-0">
                              <input
                                type="email"
                                className="h-12 w-full p-2 text-black text-sm rounded-sm shadow-none outline-none bg-white border border-[rgba(0,0,0,0.1)]"
                                name="email"
                                id="email"
                                placeholder="Email"
                              />
                            </div>
                            <div className="flex md:flex-col w-full p-0 m-0">
                              <div className="mb-4 w-full">
                                <input
                                  type="text"
                                  className="h-12 w-full p-2 text-black text-sm rounded-sm shadow-none outline-none bg-white border border-[rgba(0,0,0,0.1)]"
                                  name="subject"
                                  id="subject"
                                  placeholder="Asunto"
                                />
                              </div>
                            </div>
                            <div className="flex md:flex-col w-full p-0 m-0">
                              <div className="mb-4">
                                <textarea
                                  name="message"
                                  className="h-48 w-full p-2 text-black text-sm rounded-sm shadow-none bg-white outline-none border border-[rgba(0,0,0,0.1)]"
                                  id="message"
                                  cols="50"
                                  placeholder="Mensaje"
                                ></textarea>
                              </div>
                            </div>
                            <div className="flex md:flex-col w-full p-0 m-0">
                              <div className="mb-4">
                                <button
                                  type="button"
                                  className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-100 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-500"
                                >
                                  Enviar Mensaje
                                </button>
                                <div className="float-left w-full hidden text-base font-bold py-2 px-0"></div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className=" flex  md:flex-col lg:w-5/12  ">
                      <div className=" flex flex-col grow items-stretch -my-6 text-white w-full p-10 lg:rounded-lg gradient--image ">
                        <div className=" ">
                          <div className="mb-20">
                            <h3 className="mb-6 mt-12 text-white text-3xl font-semibold">
                              Hablemos!
                            </h3>
                            <p>
                              Si tienes una pregunta, quieres iniciar un proyecto o simplemente deseas comunicarte conmigo, puedes enviarme un mensaje a través de este formulario de contacto.    </p>
                          </div>
                          <span className="flex justify-center self-end w-full space-x-4">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-github"></i>
                            <i className="fa-brands fa-twitter-square"></i>
                            <i className="fa-brands fa-linkedin"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};
