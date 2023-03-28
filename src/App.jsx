import { useState } from 'react'
import './App.css'

// Material UI imports 
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel'; 
import FormGroup from '@mui/material/FormGroup';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';


function App() {
  const [count, setCount] = useState(0);
  const [userInput, setUserInput] = useState('')
  const [typeSearch, setTypeSearch]= useState(-1)
  const [submit, setSubmit] = useState(-1)
  
  
  const ariaLabel = { "aria-label": "description" };



  function callBooks() {

    const url = 'https://openlibrary.org/search.json?'
    
    typeSearch
      ? url = (url + "author=" + userInput)
      : url = (url + "title=" + userInput);


    fetch(url)
      .then((res) => res.json())
      .then((data) => { 
        
      });
  }







  return (
    <div className="App">
      <Container className="SearchBox" maxWidth="sm">
        <Input
          id="outlined-basic"
          type='string'
          placeholder="Enter Search Term"
          inputProps={ariaLabel}
          onChange={(event)=>{setUserInput(event.target.value)}}
        />
        <Button variant="contained" onClick={callBooks}>Search</Button>
        <br></br>
        <FormGroup>
          <FormControlLabel control={<Checkbox onChange={()=>setTypeSearch(1)} />} label="Author" />
          <FormControlLabel control={<Checkbox onChange={()=>setTypeSearch(0)} />} label="Title" />
        </FormGroup>
        {userInput} {typeSearch?"Author":"title"}

      </Container>
    </div>
  );
}

export default App
