"use client";

/*
 En esta página probamos todos los componentes creados.
*/

import SaludoBasico from "./components/SaludoBasico";
import SaludoDesestructurado from "./components/SaludoDesestructurado";
import PerfilConObjeto from "./components/PerfilConObjeto";
import BotonConCallback from "./components/BotonConCallback";
import ContenedorRenderProp from "./components/ContenedorRenderProp";
import CajaChildren from "./components/CajaChildren";
import SaludoConDefaultProps from "./components/SaludoConDefaultProps";

export default function Page() {
  const usuario1 = { nombre: "Santiago", hobbies: ["leer", "correr"] };
  const usuario2 = { nombre: "Laura", hobbies: [] };

  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Ejemplo de Props en React (Next.js)</h1>

      <h2>1️⃣ Saludo Básico</h2>
      <SaludoBasico nombre="Santiago" />

      <h2>2️⃣ Saludo Desestructurado</h2>
      <SaludoDesestructurado nombre="Laura" edad={22} />

      <h2>3️⃣ Perfil con Objeto</h2>
      <PerfilConObjeto usuario={usuario1} />
      <PerfilConObjeto usuario={usuario2} />

      <h2>4️⃣ Botón con Callback</h2>
      <BotonConCallback onClick={() => alert("¡Hiciste clic!")} />

      <h2>5️⃣ Contenedor con Render Prop</h2>
      <ContenedorRenderProp
        render={() => <p>Este texto viene desde una función render prop</p>}
      />

      <h2>6️⃣ Caja con Children</h2>
      <CajaChildren>
        <p>Hola, yo soy el contenido dentro de la caja</p>
      </CajaChildren>

      <h2>7️⃣ Saludo con Default Props</h2>
      <SaludoConDefaultProps nombre="Andrés" />
      <SaludoConDefaultProps />
    </main>
  );
}
