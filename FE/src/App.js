import Inicio from "./components/pages/Inicio";
import Registro from "./components/pages/Registro";
import PaginaSec from "./components/pages/PaginaSec";
import NoticiasEventos from "./components/pages/NoticiasEventos";
import RecursosEducativos from "./components/pages/RecursosEducativos";
import RecursosEducativosPrimaria from "./components/pages/RecursosEducativosPrimaria";
import MaterialDidactico from "./components/pages/MaterialDidactico";
import MaterialDidacticoPrimaria from "./components/pages/MaterialDidacticoPrimaria";
import PerfilDocente from "./components/pages/PerfilDocente";
import Calificaciones from "./components/pages/Calificaciones";
import ProyectosRealizados from "./components/pages/ProyectosRealizados";
import PerfilEstudiante from "./components/pages/PerfilEstudiante";
import CalificacionesEstudiante from "./components/pages/CalificacionesEstudiante";
import ProyectosRealizadosPrim from "./components/pages/ProyectosRealizadosPrim";
import AcercaNosotros from "./components/pages/AcercaNosotros";
const App = () => {
  return (
    <div>
      <Inicio />
      <Registro />
      <PaginaSec />
      <NoticiasEventos />
      <RecursosEducativos />
      <RecursosEducativosPrimaria />
      <MaterialDidactico />
      <MaterialDidacticoPrimaria />
      <PerfilDocente />
      <Calificaciones />
      <ProyectosRealizados />
      <PerfilEstudiante />
      <CalificacionesEstudiante />
      <ProyectosRealizadosPrim />
      <AcercaNosotros />
    </div>
  );
};

export default App;