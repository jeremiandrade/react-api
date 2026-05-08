
import { useState, useEffect, use } from 'react'

// Lista di Attrici:   https://lanciweb.github.io/demo/api/actresses/

// Lista di Attori:  https://lanciweb.github.io/demo/api/actors/



// MILESTONE 3

// Mostriamo in pagina una card per ciascun attore, con grafica a piacimento!


function App() {

  // chiamata Ajax actresses
  const actresses_url = 'https://lanciweb.github.io/demo/api/actresses/'
  const [actresses, setActresses] = useState([])

  useEffect(() => {

    fetch(actresses_url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setActresses(data)
      })
  }, [])


  // chiamata Ajax actors
  const actors_url = 'https://lanciweb.github.io/demo/api/actors/'
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch(actors_url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setActors(data)
      })
  }, [])



  return (
    <>
      {/* <div className="list-1_actresses">
        <h2>List Actresses</h2>
        <ol>
          {actresses.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ol>
      </div> */}

      {/* list item actors */}

      {/* <div className="list_2_actors">
        <h2>List Actors</h2>
        <ol>
          {actors.map(actor => (
            <li key={actor.id}>{actor.name}</li>
          ))}
        </ol>
      </div> */}



      <div>
        <h3> Card Actresses</h3>
        <div className="container">
          <div className="row">

            {actresses.map(item => (
              <div className="col" key={item.id}>
                <div className="card">
                  <img src={item.image} alt="" />
                  <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text">{item.biography}</p>
                    <p>Nazionalità:{item.nationality}</p>
                    <p>Anno Di Nascità:{item.birth_years}</p>
                    <p>Riconoscimento:  {item.awards} </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div>
        <h3> Card Actor</h3>
        <div className="container">
          <div className="row">

            {actors.map(item => (
              <div className="col" key={item.id}>
                <div className="card">
                  <img src={item.image} alt="" />
                  <div className="card-body">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text">{item.biography}</p>
                    <p>Nazionalità:{item.nationality}</p>
                    <p>Anno Di Nascità:{item.birth_years}</p>
                    <p>Riconoscimento:  {item.awards} </p>
                  </div>
                </div>
              </div>

            ))

            }
          </div>
        </div>
      </div>





    </>
  )
}

export default App
