import React, { useState, useEffect } from "react";
import axios from 'axios';

import Media from './Media';
import Explanation from './Explanation';

import "./App.css";

function App() {

  const [data, setData] = useState({});

  const fetchData = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      console.log(res.data);
      setData(res.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(fetchData, []);

  return (
    <div className="App">
      <Media title={data.title} url={data.url} />
      <Explanation explanation={data.explanation} />
    </div>
  );
}

export default App;
