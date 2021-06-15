import React from 'react';
import './App.css';
import styled from "styled-components";
import Calculator from './components/Calculator.js'

function App() {
  return (
   <Wrapper> 
     <div>
      <Calculator />
     </div>
   </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background-color: blue;
  width: 100%;
  height: 100vh;
` 