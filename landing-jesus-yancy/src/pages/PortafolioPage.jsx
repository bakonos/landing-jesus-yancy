import { MyCard } from "../components/MyCard";
import { proyectos } from "../database/proyectos";

export const PortafolioPage = () => {
  return (
    <section className="text-center h-auto pt-24">
      <h1 className="text-indigo-600 font-bold text-7xl">Portafolio</h1>
      <div className="lg:flex w-full">
        {proyectos.map((proyecto) => (
          <MyCard
            key={proyecto.id}
            url={proyecto.url}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            url_preview={proyecto.url_preview}
            url_github={proyecto.url_github}
          />
        ))}
      </div>
    </section>
  );
};
