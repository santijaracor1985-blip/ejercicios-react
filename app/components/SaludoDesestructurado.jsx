/*
Propósito:
Mostrar un saludo usando varias props.

Props:
- nombre: nombre del usuario.
- edad: número que indica la edad.
*/

export default function SaludoDesestructurado({ nombre, edad }) {
  return (
    <div>
      <p>
        Nombre: {nombre}, Edad: {edad}
      </p>
    </div>
  );
}
