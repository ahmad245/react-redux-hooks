import React from 'react';
import './App.css';
import ParentContainer from './containers/ParentContainer';

const App: React.FC = () => {
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <ParentContainer />
    </div>
  );
}

export default App;
