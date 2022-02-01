import React from 'react';
import "./App.css";
import {useDynamicSize} from "../../Hooks/DynamicSize";

const App = () => {
  const size = useDynamicSize();
  console.log(size);
  return (
  <div className='App' style={{height: size[1]}}>
    
  </div>
  );
};

export default App;