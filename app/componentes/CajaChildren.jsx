/*
Propósito:
Mostrar contenido que se envía como "children".

Props:
- children: cualquier elemento o texto dentro del componente.
*/

export default function CajaChildren({ children }) {
  return (
    <div style={{ border: "2px solid gray", padding: "10px", margin: "10px" }}>
      {children}
    </div>
  );
}
