"use client";

/*
 En esta página probamos todos los componentes creados.

*/

import SaludoBasico from "./componentes/SaludoBasico";
import SaludoDesestructurado from "./componentes/SaludoDesestructurado";
import PerfilConObjeto from "./componentes/PerfilConObjeto";
import BotonConCallback from "./componentes/BotonConCallback";
import ContenedorRenderProp from "./componentes/ContenedorRenderProp";
import CajaChildren from "./componentes/CajaChildren";
import SaludoConDefaultProps from "./componentes/SaludoConDefaultProps";

export default function Page() {
  //  Creamos dos objetos para pasar como props
  const usuario1 = { nombre: "Santiago", hobbies: ["leer", "correr"] };
  const usuario2 = { nombre: "Laura", hobbies: [] };

  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1> Ejemplo de Props en React (Next.js)</h1>
      <p>
        En esta página vas a ver cómo se usan diferentes tipos de props en React.
        Cada componente tiene su propio ejemplo.
      </p>

      <hr />

      {/* 1️ Saludo Básico */}
      <h2>  1  ️⃣ Saludo Básico</h2>
      <SaludoBasico nombre="Santiago" />

      {/* 2️ Saludo Desestructurado */}
      <h2> 2  ️⃣ Saludo Desestructurado</h2>
      <SaludoDesestructurado nombre="Laura" edad={22} />

      {/* 3️ Perfil con Objeto */}
      <h2> 3  ️⃣ Perfil con Objeto</h2>
      <PerfilConObjeto usuario={usuario1} />
      <PerfilConObjeto usuario={usuario2} />

      {/* 4️ Botón con Callback */}
      <h2> 4  ️⃣ Botón con Callback</h2>
      <BotonConCallback onClick={() => alert("¡Hiciste clic!")} />

      {/* 5️ Contenedor con Render Prop */}
      <h2> 5  ️⃣ Contenedor con Render Prop</h2>
      <ContenedorRenderProp
        render={() => <p>Este texto viene desde una función render prop</p>}
      />

      {/* 6️ Caja con Children */}
      h2> 6 ⃣ Caja con Children</h2>
      <CajaChildren>
        <p>Hola, yo soy el contenido dentro de la caja </p>
      </CajaChildren>

      {/* 7 Saludo con Default Props */}
      <h2>7 Saludo con Default Props</h2>
      <SaludoConDefaultProps nombre="Andrés" />
      <SaludoConDefaultProps />
    </main>
  );
}
