import { useState, useEffect } from 'react'
import './App.css'
import Card from '../components/card';
const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const list = []; 
  const [zipCode, setZipcode] = useState("");

  const [Info, setInfo] = useState({
    city:"",
    state:"",
    date0:"",
    high_temp0:"",
    low_temp0:"",
    avg_temp0:"",
    date1:"",
    high_temp1:"",
    low_temp1:"",
    avg_temp1:"",
    date2:"",
    high_temp2:"",
    low_temp2:"",
    avg_temp2:"",
    date3:"",
    high_temp3:"",
    low_temp3:"",
    avg_temp3:"",
    date4:"",
    high_temp4:"",
    low_temp4:"",
    avg_temp4:"",
    date5:"",
    high_temp5:"",
    low_temp5:"",
    avg_temp5:"",
    date6:"",
    high_temp6:"",
    low_temp6:"",
    avg_temp6:"",
    date7:"",
    high_temp7:"",
    low_temp7:"",
    avg_temp7:"",
    date8:"",
    high_temp8:"",
    low_temp8:"",
    avg_temp8:"",
    dat9:"",
    high_temp9:"",
    low_temp9:"",
    avg_temp9:"",
    date10:"",
    high_temp10:"",
    low_temp10:"",
    avg_temp10:"",
    date11:"",
    high_temp11:"",
    low_temp11:"",
    avg_temp11:""
  } 
)

  const callRandomCityData = async()=>{

    const url = `https://api.weatherbit.io/v2.0/history/daily?postal_code=!${zipCode}&units=I&country=US&start_date=2023-03-16&end_date=2023-03-28&key=${API_KEY}`;


      fetch(url)
     .then(res=>res.json())
     .then(object=>
      setInfo(
      {
        city:(object.city_name),
        state:(object.state_code),
        date0: (object.data[0].datetime),
        high_temp0: (object.data[0].max_temp),
        low_temp0: (object.data[0].min_temp),
        avg_temp0: (object.data[0].temp),
        date1: (object.data[1].datetime),
        high_temp1: (object.data[1].max_temp),
        low_temp1: (object.data[1].min_temp),
        avg_temp1: (object.data[1].temp),
        date2: (object.data[2].datetime),
        high_temp2: (object.data[2].max_temp),
        low_temp2: (object.data[2].min_temp),
        avg_temp2: (object.data[2].temp),
        date3: (object.data[3].datetime),
        high_temp3: (object.data[3].max_temp),
        low_temp3: (object.data[3].min_temp),
        avg_temp3: (object.data[3].temp),
        date4: (object.data[4].datetime),
        high_temp4: (object.data[4].max_temp),
        low_temp4: (object.data[4].min_temp),
        avg_temp4: (object.data[4].temp),
        date5: (object.data[5].datetime),
        high_temp5: (object.data[5].max_temp),
        low_temp5: (object.data[5].min_temp),
        avg_temp5: (object.data[5].temp),
        date6: (object.data[6].datetime),
        high_temp6: (object.data[6].max_temp),
        low_temp6: (object.data[6].min_temp),
        avg_temp6: (object.data[6].temp),
        date7: (object.data[7].datetime),
        high_temp7: (object.data[7].max_temp),
        low_temp7: (object.data[7].min_temp),
        avg_temp7: (object.data[7].temp),
        date8: (object.data[8].datetime),
        high_temp8: (object.data[8].max_temp),
        low_temp8: (object.data[8].min_temp),
        avg_temp8: (object.data[8].temp),
        date9: (object.data[9].datetime),
        high_temp9: (object.data[9].max_temp),
        low_temp9: (object.data[9].min_temp),
        avg_temp9: (object.data[9].temp),
        date10: (object.data[10].datetime),
        high_temp10: (object.data[10].max_temp),
        low_temp10: (object.data[10].min_temp),
        avg_temp10: (object.data[10].temp),
        date11: (object.data[11].datetime),
        high_temp11: (object.data[11].max_temp),
        low_temp11: (object.data[11].min_temp),
        avg_temp11: (object.data[11].temp)
      }
     ))
  }

  return (
    <div className="App">
    <div> 
        <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="enter a zip code" type="text" name="search" value={zipCode} onChange={(event)=>setZipcode(event.target.value)} />
    </div>
        <button
            className="border border-slate-500 hover:border-green-500 ..."
         onClick={callRandomCityData}>Refresh Data</button>
        <br></br>
        
      <div className=" flex flex-row gap-2">
      <c className=" underline decoration-sky-500">City:   {Info.city}</c>
      <c className=" underline decoration-green-500">State:    {Info.state}</c>
      </div>

        <div className="grid gac-4 grid-cols-3 grid-rows-3 gap-3 ...">
          <div className="box-border h-32 w-100 p-4 border-4 border-blue-600 ...">
            Date:  {Info.date0} <br></br>
            High:  {Info.high_temp0} <br></br> 
            Low:  {Info.low_temp0} <br></br>
            avg:   {Info.avg_temp0}
        </div>
        <div className="box-border h-32 w-100 p-4 border-4 border-blue-600 ...">
            Date:  {Info.date1} <br></br>
            High:  {Info.high_temp1} <br></br> 
            Low:  {Info.low_temp1} <br></br>
            avg:   {Info.avg_temp1}
        </div>
        <div className="box-border h-32 w-100 p-4 border-4 border-blue-600 ...">
            Date:  {Info.date2} <br></br>
            High:  {Info.high_temp2} <br></br> 
            Low:  {Info.low_temp2} <br></br>
            avg:   {Info.avg_temp2}
        </div>
        <div className="box-border h-32 w-100 p-4 border-4 border-blue-600 ...">
            Date:  {Info.date3} <br></br>
            High:  {Info.high_temp3} <br></br> 
            Low:  {Info.low_temp3} <br></br>
            avg:   {Info.avg_temp3}
        </div>
        <div className="box-border h-32 w-100 p-4 border-4 border-blue-600 ...">
            Date:  {Info.date4} <br></br>
            High:  {Info.high_temp4} <br></br> 
            Low:  {Info.low_temp4} <br></br>
            avg:   {Info.avg_temp4}
        </div>
        <div className="box-border h-32 w-100 p-4 border-4 border-blue-600 ...">
            Date:  {Info.date5} <br></br>
            High:  {Info.high_temp5} <br></br> 
            Low:  {Info.low_temp5} <br></br>
            avg:   {Info.avg_temp5}
        </div>
        <div className="box-border h-32 w-100 p-4 border-4 border-blue-600 ...">
            Date:  {Info.date6} <br></br>
            High:  {Info.high_temp6} <br></br> 
            Low:  {Info.low_temp6} <br></br>
            avg:   {Info.avg_temp6}
        </div>
        <div className="box-border h-32 w-100 p-4 border-4 border-blue-600 ...">
            Date:  {Info.date7} <br></br>
            High:  {Info.high_temp7} <br></br> 
            Low:  {Info.low_temp7} <br></br>
            avg:   {Info.avg_temp7}
        </div>
        <div className="box-border h-32 w-100 p-4 border-4 border-blue-600 ...">
            Date:  {Info.date8} <br></br>
            High:  {Info.high_temp8} <br></br> 
            Low:  {Info.low_temp8} <br></br>
            avg:   {Info.avg_temp8}
        </div>
        <div className="box-border h-32 w-100 p-4 border-4 border-blue-600 ...">
            Date:  {Info.date9} <br></br>
            High:  {Info.high_temp9} <br></br> 
            Low:  {Info.low_temp9} <br></br>
            avg:   {Info.avg_temp9}
        </div>
        <div className="box-border h-32 w-100 p-4 border-4 border-blue-600 ...">
            Date:  {Info.date10} <br></br>
            High:  {Info.high_temp10} <br></br> 
            Low:  {Info.low_temp10} <br></br>
            avg:   {Info.avg_temp10}
        </div>
        <div className="box-border h-32 w-100 p-4 border-4 border-blue-600 ...">
            Date:  {Info.date11} <br></br>
            High:  {Info.high_temp11} <br></br> 
            Low:  {Info.low_temp11} <br></br>
            avg:   {Info.avg_temp11}
        </div>
    
        </div>
        <br></br>
    </div>
  );
}

export default App
