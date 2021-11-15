import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';

export default function BotonComentar({abrirPopup}) {
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if(location?.pathname !== "/"){
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [location?.pathname]);

    return visible ? (
        <div className="boton-comentar">
            <button onClick={abrirPopup}>
                <img src="/assets/imagen/espejo3.png"></img>
            </button>
        </div>
    ) : null
}
