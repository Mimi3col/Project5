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
  const [submit, setSubmit] = useState(0)
  const [Info, setInfo] = useState({
    AuthorID:'',
    BookImage:''
  })
  
  const bookData = ['']
  
  const ariaLabel = { "aria-label": "description" };



  function callBooks() {

    let url;
    
    typeSearch ? url = `https://openlibrary.org/search.json?author=tolkien` : url = `https://openlibrary.org/search.json?title=${userInput}`;


    fetch(url)
      .then((res) => res.json())
      .then((data) => bookData = data)

  }








  return (
    <div className="App">
      <Container className="SearchBox" maxWidth="sm">
        <Input
          id="outlined-basic"
          type="string"
          placeholder="Enter Search Term"
          inputProps={ariaLabel}
          onChange={(event) => {
            setUserInput(event.target.value);
          }}
        />
        <Button variant="contained" onClick={()=> setSubmit(1) && clearImmediate} >
          Search
        </Button>
        <br></br>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox onClick={() => setTypeSearch(1)} />}
            label="Author"
          />
          <FormControlLabel
            control={<Checkbox onClick={() => setTypeSearch(0)} />}
            label="Title"
          />
        </FormGroup>
        {submit ?  (typeSearch ? userInput + " Author" : userInput + " Title") : ""}
        <br></br>
      </Container>
    </div>
  );
}

export default App
