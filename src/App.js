import './App.css';
import axios from 'axios';
import AddProduct from './Components/AddProduct';
import { useState, useEffect } from "react";
import ProductsData from './Components/ProductsData';
function App() {

  const [newdata, Setnewdata] = useState([])
  let url ="http://localhost:3000/products"


  const getNotes=()=>{
    return axios.get(`${url}`);
}
  const addNotes=(newvalues)=>{
    return axios.post(`${url}`,newvalues)

}

useEffect(() => {
   
  getNotes().then((data) => {
    Setnewdata(data.data)
 
})
},[newdata])

  const SaveData = (newvalues) => {
    
    // export const addNotes=(newNotes)=>{
    //   return axios.post(`${url}`,newNotes)
   console.log(newvalues,"newvalues")
    let notes = newdata;
    newvalues.notesId = newdata.length + 1;
    notes.push(newvalues);
    Setnewdata(notes);
    addNotes(newvalues).then((data) => {
   
  })
 
  
     
  }

 




  let displayvalues = newdata.map((item) => {
    <AddProduct new={item}/>
   

    return item;
 
 });


  return (
   
    <div className="App">
       
      <ProductsData new={displayvalues} /> 
      <AddProduct  savedata={SaveData}/>
        
    </div>
  );
}

export default App;
