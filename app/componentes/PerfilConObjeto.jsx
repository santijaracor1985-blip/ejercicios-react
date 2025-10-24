/*
Propósito:
Recibir un objeto con información del usuario.

Props:
- usuario: objeto con nombre y hobbies.
*/

export default function PerfilConObjeto({ usuario }) {
  const { nombre, hobbies } = usuario;

  return (
    <div>
      <p>Nombre: {nombre}</p>
      <p>
        Hobbies: {hobbies.length > 0 ? hobbies.join(", ") : "Sin hobbies"}
      </p>
    </div>
  );
}
