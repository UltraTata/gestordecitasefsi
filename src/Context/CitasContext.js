import {createContext, React, useState} from 'react';

export const CitasContext = createContext();

export function CitasProvider(props){
    const [citas, setCitas] = useState([]);

    const addCita = (cita) => {
        let newCitas = citas;
        newCitas.push(cita);
        setCitas(newCitas);
    }

    const deleteCita = (i) => {
        let newCitas = citas;
        newCitas.splice(i,1);
        setCitas(newCitas);
    }

    return (<CitasContext.Provider
        value={{
            citas,
            addCita,
            deleteCita
        }}>
            {props.children}
        </CitasContext.Provider>);
}//