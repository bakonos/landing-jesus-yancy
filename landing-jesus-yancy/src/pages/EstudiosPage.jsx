import React from "react";

export const EstudiosPage = () => {
  return (
    <section className="text-center h-auto pt-24">
      <h1 className="text-indigo-600 font-bold text-7xl mb-10">Estudios</h1>
      <div className="flex h-[55rem]"> {/* Estas son las columnas y el "h-64" es el alto de la sección */}
        <div className="w-1/3 p-4 bg-gray-200">
        <div className="bg-white block rounded-lg shadow-lg px-6 pt-24 md:py-16 md:px-12 mt-40">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
            Diplomado en Desarrollo Web con React Js <br />
              <span className="text-indigo-600 text-2xl">Fundación Internacional María Luisa de Moreno - LiveBox - Tecnológico de Antioquia</span>
            </h1>
        </div>
         
        </div>
        <div className="w-1/3 p-4 bg-gray-200">
        <div className="bg-white block rounded-lg shadow-lg px-6 pt-24 md:py-16 md:px-12 mt-64">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
            Curso de Pyhton <br />
              <span className="text-indigo-600 text-2xl">Platzi</span>
            </h1>
        </div>
        </div>
        <div className="w-1/3 p-4 bg-gray-200">
        <div className="bg-white block rounded-lg shadow-lg px-6 pt-24 md:py-16 md:px-12 mt-40">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
            Curso de Machine Learning Aplicado con Pyhton <br />
              <span className="text-indigo-600 text-2xl">Platzi</span>
            </h1>
        </div>
        </div>
      </div>
    </section>
  );
};
