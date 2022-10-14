import React, { useState } from 'react'


export default function AddProduct(props) {
    const[data,setdata]=useState({Productname : "" ,Brand:"",Quantity:"",Price:"",Actions:""})
    // const [ProductName,setProductName]=useState({Productname : "" ,Brand:""})
    // const [Brand,setBrand]=useState()
    // const [Quantity,setQuantity]=useState()
    // const [Price,setPrice]=useState()
    // const [Actions,setActions]=useState()

    // Write Your Code Here
    function handleFormSubmit(e) {
        e.preventDefault();
      
        props.savedata(data)
       
        setdata({Productname : "" ,
        Brand:"",
        Quantity:"",
        Price:"",
        Actions:""
           
        })
      
    }

    function handleProductNameChange(e) {
        

        e.preventDefault();
        var name = e.target.name;
         setdata( { ...data,[name]: e.target.value} )
         console.log(data,"data")
    }

    function handleBrandChange(e) {
        e.preventDefault();
        var name = e.target.name;
         setdata( { ...data,[name]: e.target.value} )
       
         console.log(data,"data")
        // Write Your Code Here
    }

    function handleQuantityChange(e) {
        e.preventDefault();
        var name = e.target.name;
         setdata( { ...data,[name]: e.target.value} )
       
         console.log(data,"data")
    }

    function handlePriceChange(e) {
        e.preventDefault();
        var name = e.target.name;
         setdata( { ...data,[name]: e.target.value} )
       
         console.log(data,"data")
    }

    function handleActionChange(e) {
        e.preventDefault();
        var name = e.target.name;
         setdata( { ...data,[name]: e.target.value} )
    
         console.log(data,"data")
    }



    return (
        <div>
         
         <input name="Productname" value={data.Productname} type="text" placeholder='Enter ProductName ' onChange={handleProductNameChange}></input>
         <input name="Brand" value={data.Brand} type="text" placeholder='Enter Brand'  onChange={handleBrandChange}></input>
         <input name="Quantity"  value={data.Quantity} type="text"   placeholder='Enter Quantity ' onChange={handleQuantityChange}></input>
         <input name="Price" value={data.Price} type="text"  placeholder='Enter Price'   onChange={handlePriceChange}></input>
         <input name="Actions" value={data.Actions} type="text" placeholder='Enter Actions'   onChange={handleActionChange}></input>
         <button onClick={handleFormSubmit}>Save</button>
         <div>

         </div>
       
        </div>
    )
}

