import React, {useEffect,useState} from "react";
import PopUpInicio from "../componentes/PopUpInicio";
import Intro from "../componentes/Intro";

function Home({ enableComments }) {

  const [portadaVisible, setPortadaVisible] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPortadaVisible(false);
    }, 6500);
  },[]);

  return (
    <div
      className="inicio"
      style={{ backgroundImage: "url('/assets/imagen/fondo1.jpg')" }}
    >
      <Intro visible={portadaVisible} />
      <PopUpInicio visible={true} enableComments={enableComments} />
    </div>
  );
}

export default Home;
