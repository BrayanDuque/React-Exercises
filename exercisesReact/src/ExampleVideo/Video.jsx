import React from "react";
import { useState, useRef, useEffect } from "react";

//Se crea una funcion  para el useEffect y useRef
function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);
    //Realizamos el calculo de la funcion para el useEffect para que siga o pause el video
  useEffect(() => {
    //si isPlaying es true entonces se reproduce el video de lo contrario se pausa
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  });

  //Se retorna el video con las propiedades de ref, src, loop y playsInline
  return <video ref={ref} src={src} loop playsInline />;
}
export const Video = () => {
    //Se crea un estado para el video
 const [isPlaying, setIsPlaying] = useState(false);
 return (
   <>

    {/*Se crea un boton para pausar o reproducir el video con la función onClick para modificar el estado */}
     <button onClick={() => setIsPlaying(!isPlaying)}>
        {/*Se crea un operador ternario para cambiar el texto del boton */}
       {isPlaying ? "Pause" : "Play"}
     </button>
        {/*Se llama el componente VideoPlayer con las propiedades isPlaying y src */}
     <VideoPlayer
       isPlaying={isPlaying}
       src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
     />
   </>
 );
};

export default Video;
