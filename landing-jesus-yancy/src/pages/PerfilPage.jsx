import React from "react";

export const PerfilPage = () => {
  return (
    <section className="text-center h-auto pt-24">
      <h1 className="text-indigo-600 font-bold text-7xl mb-10">Perfil</h1>
      <div className="flex h-[55rem]"> {/* Estas son las columnas y el "h-64" es el alto de la sección */}
        <div className="w-1/2 p-4 bg-white">
        <div className="bg-indigo-600 block rounded-lg shadow-lg px-6 pt-24 md:py-16 md:px-12 mt-40 h-[29rem]">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 text-white">
            Desarrollador FrontEnd con React JS <br />
              <span className="text-blue-600 text-2xl"></span>
            </h1>
        </div>
        </div>
        <div className="w-1/2 p-4 bg-white">
        <div className="bg-gray-200 block rounded-lg shadow-lg px-6 pt-24 md:py-16 md:px-12 mt-40 text-indigo-800">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
            Skills <br />
              <span className="text-indigo-600 text-4xl">JavaScript <br/></span>
              <span className="text-indigo-600 text-4xl">HTML5 <br/></span>
              <span className="text-indigo-600 text-4xl">CSS</span>
            </h1>
        </div>
        </div>
      </div>
    </section>
  );
};
