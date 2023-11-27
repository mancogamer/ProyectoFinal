import Menu from "../organismos/Menu";
import ImagenFondo from "../organismos/ImagenFondo";
import PiePagina from "../organismos/PiePagina";

function Inicio() {
  return (
    <div style={{backgroundColor: '#eee'}}>
      <nav>
        <Menu />
      </nav>
      <div>
        <ImagenFondo />
      </div>
      <div>
        <PiePagina />
      </div>
      
    </div>
  );
}

export default Inicio;