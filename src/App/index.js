import React from 'react';
import { SongProvider } from '../SongContext';
import {AppUI} from '../AppUI';
import './App.css'


function App() {


  return (

    <SongProvider>

      <AppUI />

    </SongProvider>


  );
}

export default App;
