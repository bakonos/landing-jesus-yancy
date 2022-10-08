import React from "react";

export const ExperienciaPage = () => {
  return (
    <section className="text-center h-auto pt-24">
      <h1 className="text-indigo-600 font-bold text-7xl mb-10">Experiencia</h1>
      <div className="flex h-[55rem]"> {/* Estas son las columnas y el "h-64" es el alto de la sección */}
        <div className=" w-full p-4 bg-indigo-100">
        <div className="bg-white block rounded-lg shadow-lg px-6 pt-24 md:py-16 md:px-12 mt-52">
            <h1 className="text-5xl md:text-4xl xl:text-7xl font-medium tracking-tight mb-12">
            Experiencia como Freelancer en la creación de Apps interesantes con React JS, JavaScript, TypeScript, TailwindCss y HTML5 <br />
              <span className="text-indigo-600 text-3xl">¡Mira mi portafolio y prueba estas Apps!</span>
            </h1>
      </div>
      </div>
      </div>
    </section>
  );
};
