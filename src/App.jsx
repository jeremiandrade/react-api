
import { useState, useEffect, use } from 'react'

// E’ arrivato il momento di mettere insieme i concetti appresi creiamo una piccola app che ci mostri un elenco di attori o attrici.

// Usate uno di questi due endpoint, a piacimento:

// Lista di Attrici:   https://lanciweb.github.io/demo/api/actresses/

// Lista di Attori:  https://lanciweb.github.io/demo/api/actors/

// MILESTONE 1
// Al caricamento dell'applicazione, recuperiamo la lista degli attori e delle attrici dalle API e stampiamoli in console.

// MILESTONE 2

// Prepariamo una card per ciascun attore/attrice, mostrandone le seguenti informazioni:

// nome
// anno nascita
// nazionalità
// biografia
// immagine
// riconoscimenti

// MILESTONE 3

// Mostriamo in pagina una card per ciascun attore, con grafica a piacimento!


function App() {

  // chiamata Ajax actresses
  const actresses_url = 'https://lanciweb.github.io/demo/api/actresses/'
  const [actresses, setActresses] = useState([])

  useEffect(() => {
    console.log('https://lanciweb.github.io/demo/api/actresses/');

    fetch(actresses_url)
      .then(response => response.json())
      .then(data => {

        console.log(data);
        setActresses(data)
      })
  }, [])

  // const actors = 'https://lanciweb.github.io/demo/api/actors/'
  // const [actors, setActors] = useState([])




  return (
    <>
      <h2>List Actresses</h2>

      <ol>
        {
          actresses.map(item => (
            <li key={item.id}>{item.name}</li>
          ))
        }
      </ol>

      <h2>List Actors</h2>

      <ol>
        <li>actors</li>
      </ol>




    </>
  )
}

export default App
