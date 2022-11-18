import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Product_List = () => {
    let [products,setProducts]=useState([])
    useEffect(()=>{
   let url= "http://127.0.0.1:5000/api/products"
        axios.get(url).then((response)=>{
            setProducts(response.data)
        }).catch()
    },[])
  return <>
  <div className="container">
    <div className="row">
        {
            products.length>0?<>
            {
                products.map((product)=>{
                    return <div className="col-3" key={product._id}>
                        <div className="card">
                            <div className="card-header">
                                <img src={product.image} alt="img" width="70px" />
                            </div>
                            <div className="head-body">
                               <ul className='list-group'>
                                <li className='list-group-item'>{product.name}</li>
                                <li className='list-group-item'>{product.price}</li>
                                <li className='list-group-item'>{product.qty}</li>
                                <li className='list-group-item'>{product.info}</li>
                               </ul>
                            </div>
                        </div>
                    </div>
                })
            }
            </>:<h1>-----No Products!-----</h1>
        }
    </div>
  </div>
  </>
   
  
}

export default Product_List