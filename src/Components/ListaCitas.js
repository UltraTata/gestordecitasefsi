import {React, useContext, useState} from "react";
import { CitasContext } from "../Context/CitasContext";
import TarjetaCita from "./TarjetaCita";

export default function ListaCitas(){

    const {citas} = useContext(CitasContext);
    return(
        <div class="one-half column">
            <h2>Administra tus citas</h2>
            {
                citas.map(
                    (cita, i) => <TarjetaCita cita={cita} i={i}/> 
                )
            }
        </div>
    );
}