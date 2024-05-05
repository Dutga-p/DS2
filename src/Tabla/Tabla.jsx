import './tabla.css';

function tabla() {
  return (
    <div className="tabla">
      <div>
        <h2>
          To Do
        </h2>
      </div>
      <form>
        <input type="text" placeholder="¿Cual es la tarea de hoy?" />
        <button type="submit"> Añadir tarea</button>
      </form>
      <div>
        <p>Tarea 1</p>
        <p>Tarea 2</p>
        <p>Tarea 3</p>
        <p>Tarea 4</p>
      </div>
    </div>
  )
}

export default tabla