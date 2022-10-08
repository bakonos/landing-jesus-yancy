export const InicioPage = () => {
  return (
    <section className="fondo">
      <div className="container mx-auto px-6 md:px-12 xl:px-32 pt-52">
        <div className="text-center text-gray-800">
          <div className="bg-white block rounded-lg shadow-lg px-6 pt-24 md:py-16 md:px-12">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
            👋 Hola! Soy Jesús <br />
              <span className="text-indigo-600">Trabajemos juntos</span>
            </h1>
            <a
              class="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-indigo-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-indigo-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              href="https://github.com/bakonos"
              role="button"
            >
              GitHub
            </a>
            <a
              className="inline-block px-7 py-3  font-medium text-sm leading-snug bg-transparent text-indigo-600 uppercase rounded hover:text-white hover:bg-gray-400 hover:focus:focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              href="#!"
              role="button"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
