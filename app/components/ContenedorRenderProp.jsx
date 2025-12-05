/*
Propósito:
Aprender el patrón "Render Prop".

Props:
- contenido: un elemento React (por ejemplo, <p>Hola</p>).
- render: una función que devuelve un elemento.
*/


export default function ContenedorRenderProp({ contenido, render }) {
  return <div>{render ? render() : contenido}</div>;
}
