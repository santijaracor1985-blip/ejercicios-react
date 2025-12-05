/*
Propósito:
Mostrar un saludo simple usando props.

Props:
- nombre: texto con el nombre de la persona.
*/


export default function SaludoBasico({ nombre, entusiasta }) {
  return (
    <div>
      <p>
        Hola, {nombre}
        {entusiasta ? "!" : ""}
      </p>
    </div>
  );
}
