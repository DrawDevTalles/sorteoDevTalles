function Home() {
let sorteo = ""
let fechaInicio = ""
let fechaFin = ""
let ganador = ""
    return (
     <div>
        <h1> El Sorteo actual es {sorteo}</h1>
        <h2> Inició en : {fechaInicio} </h2>
        <h2> Termina en: {fechaFin} </h2>
        <h2> El ganador es: {ganador} </h2>
        <h3> Si quieres participar debes registrarte:</h3> 
        <button>Participa</button>


     </div>
    )
  }
  
  export default Home
  