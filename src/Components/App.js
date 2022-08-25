import {React, useState} from "react";
import Form from './Form.js';
import ListaCitas from './ListaCitas.js';
import '../CSS/App.css';
import '../CSS/Citas.css';


function App() {
  const [citas, setCitas] = useState([]);

  const addCita = (cita) => {
      let newCitas = [];
      citas.map(
          (c) => newCitas.push(c)
      );
      newCitas.push(cita);
      setCitas(newCitas);
  }

  const deleteCita = (i) => {
      let newCitas = [];
      citas.map(
          (c) => newCitas.push(c)
      );
      newCitas.splice(i,1);
      setCitas(newCitas);
  }

  return (
  <div id="root">
    <h1>ADMINISTRADOR DE PACIENTES</h1>
    <div class="container">
      <div class="row">
        <Form addCita={addCita}/>
        <ListaCitas deleteCita={deleteCita} citas={citas}/>
      </div>
    </div>
  </div>
  );
}

export default App;
