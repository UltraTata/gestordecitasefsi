export default function TarjetaCita(params){

    const borrar = () => {
        params.deleteCita(params.i);
    }

    return(
        <div class="cita">
            <p>Mascota: <span>{params.cita.mascota}</span></p>
            <p>Dueño: <span>{params.cita.dueno}</span></p>
            <p>Fecha: <span>{params.cita.fecha}</span></p>
            <p>Hora: <span>{params.cita.hora}</span></p>
            <p>Sintomas: <span>{params.cita.sintomas}</span></p>
            <button onClick={borrar} class="button elimnar u-full-width">Eliminar ×</button>
        </div>
    );
}