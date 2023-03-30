import { useState, useEffect } from 'react'
import './App.css'
import Card from '../components/card';
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const list = []; 

  const [Info, setInfo] = useState({
    date:"",
    high_temp:"",
    low_temp:"",
    avg_temp:""
  })

  const callRandomCityData = async(zipCode)=>{
    zipCode=33510

    const url = `https://api.weatherbit.io/v2.0/history/daily?postal_code=!${zipCode}&units=I&country=US&start_date=2023-02-25&end_date=2023-03-25&key=${API_KEY}`;


      fetch(url)
     .then(res=>res.json())
     .then(object=>  
      setInfo(
      {
        date: (object.data[0].datetime),
        high_temp: (object.data[0].max_temp),
        low_temp: (object.data[0].min_temp),
        avg_temp: (object.data[0].temp)
      }
     ))
  }

  const allList = (object) =>{
      



  }




  return (
    <div className="App">
    
        <button
            className="border border-slate-500 hover:border-green-500 ..."
         onClick={callRandomCityData}>Refresh Data</button>
        <br></br>

        <div className="box-border h-32 w-100 p-4 border-4 border-blue-600 ...">
            Date:  {Info.date} <br></br>
            High:  {Info.high_temp} <br></br> 
            Low:  {Info.low_temp} <br></br>
            avg:   {Info.avg_temp}
        </div>
        <br></br>
    </div>
  );
}

export default App
