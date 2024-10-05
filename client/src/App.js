import React from "react";
import './styles/App.css';
import DevOpsTable from './components/DevOpsTable';
import CloudTable from './components/cloudtable.js';

function App() {
  return (
    <div className="App">
      <h1>Periodic Table of Elements</h1>
      <small> with React + CSS Grid</small>
      <DevOpsTable />
    </div>
  );
}

export default App;
