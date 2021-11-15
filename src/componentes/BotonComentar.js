import React from 'react'

export default function BotonComentar({abrirPopup, visible}) {
    return visible ? (
        <div className="boton-comentar">
            <button onClick={abrirPopup}>
                <img src="/assets/imagen/espejo3.png"></img>
            </button>
        </div>
    ) : null
}