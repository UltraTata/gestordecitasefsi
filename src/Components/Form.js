import {React, useState} from "react";

export default function Form(params){

    const [cita, setCita] = useState({
        mascota: "",
        dueno: "",
        fecha: "",
        hora: "",
        sintoma: ""
    });

    const modificar = (event) => {
        let newCita = {
            mascota: cita.mascota,
            dueno: cita.dueno,
            fecha: cita.fecha,
            hora: cita.hora,
            sintoma: cita.sintoma
        };
        newCita[event.target.name] = event.target.value;
        setCita(newCita)
    }

    const add = () => {
        params.addCita(cita);
    }

    return(
        <div class="one-half column">
            <h2>Crear mi Cita</h2>
            <label>Nombre Mascota</label>
            <input type="text" name="mascota" value={cita.mascota} onChange={modificar} class="u-full-width" placeholder="Nombre Mascota" />
            <label>Nombre Dueño</label>
            <input type="text" name="dueno" value={cita.dueno} onChange={modificar} class="u-full-width" placeholder="Nombre dueno de la mascota" />
            <label>Fecha</label>
            <input type="date" name="fecha" value={cita.fecha} onChange={modificar} class="u-full-width" />
            <label>hora</label>
            <input type="time" name="hora" value={cita.hora} onChange={modificar} class="u-full-width" />
            <label>Sintomas</label>
            <textarea name="sintomas" value={cita.sintomas} onChange={modificar} class="u-full-width"/>
            <button onClick={add} class="u-full-width button-primary">Agregar cita</button>
        </div>
    );
}