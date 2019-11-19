import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Nav from './components/UI/Nav/Nav';
import QuotesList from './components/Quotes/QuotesList';

function App() {
  const [quotes, setQuotes] = useState(
    [{
      quote: `Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.`,
      author: `John Woods`
    },
    {
      quote: `Downvotes without exolanation should be downvotable`,
      author: `Quora Anon`
    },
    {
      quote: `Any fool can write code that a computer can understand. Good programmers write code that humans can understand.`,
      author: `Martin Fowler`
    },
    {
      quote: `Talk is cheap. Show me the code.`,
      author: `Linus Torvalds`
    },
    {
      quote: `when you don't create things, you become defined by your tastes rather than ability. your tastes only narrow & exclude people. so create.`,
      author: `Why The Lucky Stiff`
    },
    {
      quote: `Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.`,
      author: `Rick Cook, The Wizardry Compiled`
    },
    {
      quote: `You've baked a really lovely cake, but then you've used dog shit for frosting.`,
      author: `Steve Jobs`
    },
    {
      quote: `Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it?`,
      author: `Brian Kernighan`
    },
    {
      quote: `Give a man a program, frustrate him for a day.
      Teach a man to program, frustrate him for a lifetime.`,
      author: `Muhammad Waseem`
    },
    {
      quote: `The use of COBOL cripples the mind; its teaching should, therefore, be regarded as a criminal offense.`,
      author: `Edsger W. Dijkstra`
    },
    {
      quote: `Programming is the art of doing one thing at a time`,
      author: `Michael Feathers, Working Effectively with Legacy Code`
    },
    {
      quote: `Simplicity is prerequisite for reliability.`,
      author: `Edsger W. Dijkstra`
    },
    {
      quote: `So if you want to go fast, if you want to get done quickly, if you want your code to be easy to write, make it easy to read.`,
      author: `Robert C. Martin, Clean Code: A Handbook of Agile Software Craftsmanship `
    },
    {
      quote: `You Can't Write Perfect Software. Did that hurt? It shouldn't. Accept it as an axiom of life. Embrace it. Celebrate it. Because perfect software doesn't exist. No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first. And unless you accept this as a fact, you'll end up wasting time and energy chasing an impossible dream.`,
      author: `Andrew Hunt, The Pragmatic Programmer: From Journeyman to Master `
    },
    {
      quote: `Programming is breaking of one big impossible task into several very small possible tasks.`,
      author: `Jazzwant`
    },
    {
      quote: `There is nothing good or bad about knowledge itself; morality lies in the application of knowledge.`,
      author: `Jon Erickson`
    }
    ]
  );

  useEffect(() => {
      //call the firebase
  });

  return (
    <div className="App">
      <Nav />
      <QuotesList data={quotes} />
    </div>
  );
}

export default App;
