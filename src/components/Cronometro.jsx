import React, { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

function Cronometro() {

    const [laps, setLaps] = useState(0);
    const [timeInSeconds, setTimeInSeconds] = useState(0);

    useEffect( () => {
        setTimeInSeconds(0);
        
        const intervalId = setInterval( () => {
            setTimeInSeconds(timeInSeconds=>timeInSeconds+1);
        }, 1000);
        
        return () => {
            clearInterval(intervalId)
        }
    },[]);

    return(
        <div>
            <p>Vueltas: {laps}</p>
            <p>Tiempo en segundos: {timeInSeconds}</p>
            <button onClick={()=>setLaps(laps=>laps+1)}>Finalizar vuelta</button>
        </div>
    )

}

export default Cronometro