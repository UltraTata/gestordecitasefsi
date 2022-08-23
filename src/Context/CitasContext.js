import {createContext, React, useState} from 'react';

export const CitasContext = createContext();

export function CitasProvider(props){
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

    return (<CitasContext.Provider
        value={{
            citas,
            addCita,
            deleteCita
        }}>
            {props.children}
        </CitasContext.Provider>);
}//