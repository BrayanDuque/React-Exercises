import { useState, useEffect } from "react";

export function useOnlineStatus() {
    //se crea un estado de inline y se inicializa en true
  const [isOnline, setIsOnline] = useState(true);
  //se crea un efecto que se ejecuta cuando el componente se monta, si tiene linea o no por medio de funciones
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    //se agrega un evento de escucha para saber si esta en linea o no y se remueve cuando el componente se desmonta de la ventana global de javascript
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
        //se remueve el evento de escucha cuando el componente se desmonta de la ventana global de javascript
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
    //se retorna el estado de inline
  return isOnline;
}
