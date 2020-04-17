import React from 'react';
import './App.css';
import { Banner } from './components/Banner';
import { AddTo } from './components/AddTo';
import ListList from './components/ListList';
import { Delta } from './components/Delta';

function App() {
  return (
    <div className="App">
      <Banner />
      <ListList />
      <div class="functionBox">
        <div class="functionBoxGrid">
          <AddTo />
        </div>
      </div>
    </div>
  );
}

export default App;
