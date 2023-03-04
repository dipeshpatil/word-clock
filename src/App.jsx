import { useEffect, useState } from "react";

import Letter from "./components/letter";
import { CLOCK_DATA } from "./clock_data";
import { getWords } from "../clock";

import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());
  const [words, setWords] = useState(getWords());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
      setWords(getWords());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="clock">
        {CLOCK_DATA.map((dataRow) => {
          return dataRow.map(({ value, type }) => (
            <Letter
              highlight={words.includes(type)}
              key={Math.random()}
              value={value}
              type={type}
            />
          ));
        })}
      </div>
    </div>
  );
}

export default App;
