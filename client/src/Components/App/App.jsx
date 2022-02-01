import React from 'react';
import "./App.css";
import {useDynamicSize} from "../../Hooks/DynamicSize";
import Form from '../Form/Form';

const App = () => {
  const size = useDynamicSize();
  return (
  <div className='App' style={{height: size[1]}}>
    <Form/>
  </div>
  );
};

export default App;