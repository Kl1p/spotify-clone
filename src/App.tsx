import React from 'react';
import  { Default } from "./template/default"
import {  }  from './Components/SearchBar';
import { SearchBar }  from './Components/SearchBar';
import { Header }  from './Components/Header';
import { AlbumList }  from './Components/AlbumList';


function App() {
  return (
    <Default>
      <Header />
      <SearchBar />
      <AlbumList />
    </Default>

  );
}

export default App;
