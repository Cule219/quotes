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
  const [quotes] = useState(data);

  useEffect(() => {
      //call the firebase
  });

  return (
    <div className="App">
      <Nav />
      <PlayLists lists={playlists}/>
      <QuotesList data={quotes} />
    </div>
  );
}

export default App;

const playlists = 

[
  "https://www.youtube.com/embed?v=6jN1h-0RGko&list=RD6jN1h-0RGko",
  "https://www.youtube.com/watch?v=R_f251UXl9Q&list=RDR_f251UXl9Q",
  "https://www.youtube.com/watch?v=P5avN2fhvEQ&list=RDP5avN2fhvEQ"
]