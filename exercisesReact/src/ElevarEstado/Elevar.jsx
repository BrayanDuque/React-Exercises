import React from "react";
import { useState } from "react";
export const Elevar = () => {
    //este es un ejemplo de como elevar estados en react, además de demostar como con el index se puede alterar la acción de los botones o componentes hijos
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      {/* desde el componente padre mandamos el estado como propiedad y realizamos la logica, si index es 0 se muestra el primero, si es 1 se muestra el segundo, pero no los dos a la vez  */}
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        With a population of about 2 million, Almaty is Kazakhstan's largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
};
//tenemos el componente hijo que es panel, en el colocamos el estado isActive como propiedad para que el componente padre lo pueda manejar.
function Panel({ title, children, isActive, onShow }) {
  return (
    //este es un componente que muestra el título y el contenido del panel, además de un botón para mostrarlo si el panel está activo o si se desea mostrarlo. En este caso, se utiliza el index para determinar si el panel es el activo o no.
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}

export default Elevar;