import React, { useState } from 'react';
import  { Default } from "./template/default"
import {  }  from './Components/SearchBar';
import { SearchBar }  from './Components/SearchBar';
import { Header }  from './Components/Header';
import { AlbumList }  from './Components/AlbumList';


function App() {
  const [searchTerm,setSearchTerm] = useState<string>();
  
  const handleSetTerm =  (value: string) => {
     setSearchTerm(value);
   }
  return (
    <Default>
      <Header />
      <SearchBar
        searchTerm={searchTerm}
        handleSetTerm={handleSetTerm}
        />
      <AlbumList 
        title={ 
          searchTerm
          ? `Resultados encontrados para "${searchTerm}"`
          : 'Albuns Buscados recentemente'
      }
      />
      {
          !searchTerm && 
          <AlbumList
          title='Albuns buscados recentemente'
      />   
      }
    </Default>

  );
}

export default App;
