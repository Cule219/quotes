import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './quotes.json'

//components
import Nav from './components/UI/Nav/Nav';
import QuotesList from './components/Quotes/QuotesList';
import PlayLists from './components/PlayLists/PlayLists';

//Use Masakis API for some fun quotes

//Do Responsive both for H*W and W*H

//Load src for frames playlists dynamically 

function App() {
  const [quotes, setQuotes] = useState(data);

  useEffect(() => {
      //call the firebase
  });

  const done = () => {
    setQuotes(quotes.slice(1));
  }

  return (
    <div className="App">
      <Nav done={done}/>
      <PlayLists lists={playlists}/>
      <QuotesList data={quotes} />
    </div>
  );
}

export default App;

const playlists = 
[
  "v=6jN1h-0RGko&list=RD6jN1h-0RGko",
  "v=R_f251UXl9Q&list=RDR_f251UXl9Q",
  "v=P5avN2fhvEQ&list=RDP5avN2fhvEQ"
]