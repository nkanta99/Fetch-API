import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [filmData, setFilmData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  
  const fetchData = async () => {
     try {
       const response = await fetch("https://ghibliapi.vercel.app/films")

       if (!response.ok) {
        throw new Error("Oops! Something Went Wrong...")
       }

       const data = await response.json()

    console.log(data)
    setFilmData(data)

    } catch (error) {
      console.log(error)
      setErrorMsg(error.message)
    }
   
  } 

  useEffect(() => {
  fetchData()
  }, [])
  


  return (
    <>
     <h1>Fetching API</h1>

     {errorMsg !== "" ? (
      <p>{errorMsg}</p>
     ) : (
      <>
      {filmData.map((film, index) => {
        return (
          <div key={index}>
            <h2>{film.title}</h2>
            <img src={film.image} alt={film.title} />
          </div>
        )
      })}
    </>
     )}
  </>
)}

export default App
