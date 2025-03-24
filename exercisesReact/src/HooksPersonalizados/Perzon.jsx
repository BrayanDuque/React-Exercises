import React from 'react'
//se importa el hook personalizado useOnlineStatus
import { useOnlineStatus } from './Online';

//se crea un componente funcional StatusBar que retorna un h1 con un mensaje dependiendo si esta en linea o no
function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
}

//se crea un componente funcional SaveButton que retorna un boton que se habilita o deshabilita dependiendo si esta en linea o no
function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    console.log('✅ Progress saved');
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? 'Save progress' : 'Reconnecting...'}
    </button>
  );
}
export const Perzon = () => {
  return (
      <>
      {/*se retorna el componente SaveButton y StatusBar*/}
      <SaveButton />
      <StatusBar />
    </>
  );
}

export default Perzon
