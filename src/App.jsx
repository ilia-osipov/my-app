

import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Form from './components/Form';
import "./App.css";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Favorites from './components/Favorites';
import Description from './components/Description';


function App() {

  //хранение данных туров
  const[tyrs, setTyrs]= useState([])
  useEffect (() =>{
    async function axiosData() {
      const tyrsData = await axios.get('https://643d234b6afd66da6aedcd7d.mockapi.io/tyrs')

      setTyrs(tyrsData.data)



    }
    axiosData();





  // fetch('https://643d234b6afd66da6aedcd7d.mockapi.io/tyrs').then((myJson)=>{
  //   return myJson.json();
  // }).then((myJson) => {
  //     setTyrs(myJson)
  //   })
  },[])
  return (
    <div>

      <Router>
        <Header/>
        <Routes>
          <Route path='/favorites'
            element={
              <Favorites/>

            }
            />
              <Route path='/'
               element={
                <Home 
                item={tyrs}
                />
                }
               />
               <Route path='/form'
               element={<Form/>}/>



               <Route path='/description'
            element={
              <Description/>

            }
            />

          
          
        </Routes>
      
 
   {/* <Button variant='primary'>
      Кнопка

   </Button>

   <Button variant="outline-danger">Danger

   </Button> */}
   </Router>
   <Footer/>
   </div>
  );
  
}

export default App;
