import React, { useState, useEffect } from 'react'
import './App.css'


const url = "https://restcountries.com/v3.1/all"
const App = () =>  {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  

  return (
    <>
      <div>
        
      </div>
      <h1>Country App</h1>
      <div className="card">
       
        
      </div>
      
    </>
  )
}

export default App
