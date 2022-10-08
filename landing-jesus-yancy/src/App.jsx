import Navbar from "./components/Navbar";
import { InicioPage } from "./pages/InicioPage";
import { PerfilPage } from "./pages/PerfilPage";
import { EstudiosPage } from "./pages/EstudiosPage";
import { ExperienciaPage } from "./pages/ExperienciaPage";
import { PortafolioPage } from "./pages/PortafolioPage";
import { ContactoPage } from "./pages/ContactoPage";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div id="inicio">
        <InicioPage />
      </div>
      <div id="perfil">
        <PerfilPage />
      </div>
      <div id="estudios">
        <EstudiosPage />
      </div>
      <div id="experiencia">
        <ExperienciaPage />
      </div>
      <div id="portafolio">
        <PortafolioPage />
      </div>
      <div id="contacto">
        <ContactoPage />
      </div>
      <Footer />
    </>
  );
}

export default App;
