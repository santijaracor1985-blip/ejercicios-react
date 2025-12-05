
/*
Propósito:
Ejemplo de cómo pasar una función (callback) como prop.

Props:
- onClick: función que se ejecuta cuando se hace clic en el botón.
*/

export default function BotonConCallback({ texto, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ padding: "10px", margin: "5px", cursor: "pointer" }}
    >
      {texto}
    </button>
  );
}
