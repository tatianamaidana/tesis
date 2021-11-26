import React, {useEffect,useState} from "react";
import PopUpInicio from "../componentes/PopUpInicio";
import Intro from "../componentes/Intro";

function Home({ setIntroLista }) {

  const [portadaVisible, setPortadaVisible] = useState(true);
  const [poupVisible, setPoupVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPortadaVisible(false);
    }, 12500);
    setTimeout(() => {
      setPoupVisible(true);
    }, 11500);
  },[]);

  return (
    <div
      className="inicio"
      style={{ backgroundImage: "url('/assets/imagen/fondo1.jpg')" }}
    >
      <Intro visible={portadaVisible} />
      <PopUpInicio visible={poupVisible}/>
    </div>
  );
}

export default Home;
