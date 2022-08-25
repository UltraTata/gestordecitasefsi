import TarjetaCita from "./TarjetaCita";

export default function ListaCitas(params){
    return(
        <div class="one-half column">
            <h2>Administra tus citas</h2>
            {
                params.citas.map(
                    (cita, i) => <TarjetaCita deleteCita={params.deleteCita} cita={cita} i={i}/> 
                )
            }
        </div>
    );
}