import {CitasProvider} from "../Context/CitasContext.js";
import Form from './Form.js';
import ListaCitas from './ListaCitas.js';
import '../CSS/App.css';
import '../CSS/Citas.css';


function App() {
  return (
  <CitasProvider>
    <div id="root">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div class="container">
        <div class="row">
          <Form/>
          <ListaCitas/>
        </div>
      </div>
    </div>
  </CitasProvider>
  );
}

export default App;
