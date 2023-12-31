import { useState } from 'react';
import './App.css';
//import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter, Route, Routes,
} from "react-router-dom";
function App() {

  const[mode,setMode]=useState('light')

  const toggleMode=()=>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor='white';
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='#042473';
    }
  }
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<News key="sports" mode={mode} toggleMode={toggleMode} pageSize="19" country="in" category="sports"/>}/>
          <Route exact path='/business' element={<News key="business" pageSize="19" country="in" category="business"/>}/>
          <Route exact path='/entertainment' element={<News key="entertainment" pageSize="19" country="in" category="entertainment"/>}/>
          <Route exact path='/general' element={<News key="general" pageSize="19" country="in" category="general"/>}/>
          <Route exact path='/health' element={<News key="health" pageSize="19" country="in" category="health"/>}/>
          <Route exact path='/science' element={<News key="science" pageSize="19" country="in" category="science"/>}/>
          <Route exact path='/sports' element={<News key="sports" pageSize="19" country="in" category="sports"/>}/>
          <Route exact path='/technology' element={<News key="technology" pageSize="19" country="in" category="technology"/>}/>
        </Routes>
     </BrowserRouter>
    </>
  );
}
export default App;
