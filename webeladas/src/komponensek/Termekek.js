


import { kepObject } from './kepObject';
import {useState} from 'react';
import Termek from './Termek';
function Termekek() {
  const[aktKep,setAktKep]=useState(0)
  function kattintasKezelo(index){
    console.log(index)
    setAktKep(index)
}
  return (
    <div className="App">
      <header className="App-header">
        <h1>Képgaléria</h1>
        
      </header>
   
      <article>
        {
      kepObject.map((elem,index)=>{
          return(<Termek obj={elem} key={index} index={index} kattintasKezelo={kattintasKezelo}/>)
      })
    }
      </article>
      <footer>PappNiki</footer>
    </div>
  );
}

export default Termekek;