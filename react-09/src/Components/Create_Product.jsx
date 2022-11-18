import React, { useState } from 'react'
import axios from 'axios'
import { json } from 'react-router-dom'
const Create_Product = () => {
    let [submitted, setSubmitted] = useState(false)
 let [products , setProducts]= useState({
    name:"",
    price:"",
    image:"",
    qty:"",
    info:"",
 })

 let getInput=(event)=>{
 setProducts({...products, [event.target.name]:event.target.value})
 }

 let submitProduct=(event)=>{
    event.preventDefault();
    let url= "http://127.0.0.1:5000/api/products"
    axios.post(url,products).then((response)=>{
     console.log(response.data)
    setSubmitted(true)
    }).catch()
    
 }
 
 let changeImage=(event)=>{
    let imageFile =event.target.files[0];
    let reader =new FileReader()
    reader.readAsDataURL(imageFile)
    reader.addEventListener('load',()=>{
        if(reader.result){
            setProducts({...products,image:reader.result})
        }
        else{
            alert('error image')
        }

    })
         
    }
  return <>
      <div className="container mt-5">
        <pre>{JSON.stringify(products)}</pre>
        <pre>{JSON.stringify(submitted)}</pre>
        <div className="row">
            <div className="col-6">
                <div className="card">
                    <div className="card-header bg-warning">
                       <h1>Create Product</h1>
                    </div>
                    <div className="card-body">
                        <form  onSubmit={submitProduct} >
                            <div className='form-group'>
                                <input type="text" name="name" placeholder='Product Name' className='form-control' onChange={getInput}/>
                            </div>
                            <div className='form-group'>
                                <input type="number" name="price" placeholder='Price' className='form-control' onChange={getInput}/>
                            </div>
                            <div className='form-group'>
                                <input type="file" name="image" placeholder='Image' className='form-control-file' onChange={changeImage}/>
                            </div>
                            <div className='form-group'>
                                <input type="number" name="qty" placeholder='QTY' className='form-control' onChange={getInput}/>
                            </div>
                            <div className='form-group'>
                                <input type="text" name="info" placeholder='Information' className='form-control' onChange={getInput}/>
                            </div>
                            <input type="submit" className="card-body bg-success
                            " value='Create Product' onChange={getInput} />
                        </form>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
}

export default Create_Product