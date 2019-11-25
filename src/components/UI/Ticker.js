import React from 'react';
//ReactDOM.render(<Ticker times={5} interval={1000} />, document.getElementById('root'));
export default function Ticker(props) {
  const [ticker, setTicker] = React.useState(0);
  let interval = null;

  const tick = () => {
    reset();
    interval = setInterval(() => {
      if (ticker < props.times) 
        setTicker(ticker + 1);
      else 
        clearInterval(interval);
    }, props.interval);
  }

  const reset = () => {
    setTicker(0);
    clearInterval(interval);
  }

  return (
    <div>
      <span style={{ fontSize: 100 }}>{ticker}</span>
      <button onClick={tick}>Tick!</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
