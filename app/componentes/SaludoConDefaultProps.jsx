/*
Propósito:
Usar valores por defecto en las props.

Props:
- nombre: texto (por defecto "Invitado").
*/

export default function SaludoConDefaultProps({ nombre = "Invitado" }) {
  return <p>Hola, {nombre}</p>;
}
