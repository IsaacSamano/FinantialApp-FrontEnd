import React, { useEffect, useState } from 'react'
import { Tarjeta } from '../components/Tarjeta';

const App = ({ session, setSession }) => {

    let URL = 'http://localhost:8000/tarjetas_usuario/';

    const [data, setData] = useState([]);

    const getTarjetas = async () => {
        let response = await fetch(URL + session.idUsuario + '/', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            let datos = await response.json();
            console.log(datos);
            setData(datos);
        }
    }

    useEffect(() => {
        getTarjetas()
    }, [])

    return (
        <div>
            <h1>Home</h1>
            <div className='flex flex-row'>
                {data.map((tarjeta, index) => (
                    <Tarjeta key={index} compania={tarjeta.compania} cvv={tarjeta.cvv} fechaVencimiento={tarjeta.fechaVencimiento} idTarjeta={tarjeta.idTarjeta} numero={tarjeta.numero} propietario={tarjeta.propietario} saldo={tarjeta.saldo} tipo={tarjeta.tipo} />
                ))}
            </div>
            <button onClick={() => setSession(null)}>Logout</button>
        </div>
    )
}

export default App