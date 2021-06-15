import React from 'react';
import './App.css';
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <Wrapper />
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  background-color: blue;
  width: 100%;
  height: 100vh;
` 