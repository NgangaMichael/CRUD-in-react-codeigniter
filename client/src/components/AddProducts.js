import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
 
const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();
 
    const saveProduct = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/products',{
            title: title,
            price: price
        })
        .then((response) => {
            // handle response
        navigate.push("/");
            // console.log(response)
          })
          .catch((e) => {
              console.log(e.message);
              //this console logs Error: Network Error
              // at createError (monkeytype.js:formatted:35086:25)
              // at XMLHttpRequest.handleError (monkeytype.js:formatted:34457:28)
          });
        // console.log(title)
        // navigate.push("/");
    }
 
    return (
        <div>
            <form onSubmit={ saveProduct }>
                <div className="field">
                    <label className="label">Title</label>
                    <input 
                        type="text"
                        className="input"
                        value={ title } 
                        onChange={ (e) => setTitle(e.target.value) }
                        placeholder="Title"
                    />
                </div>
                <div className="field">
                    <label className="label">Price</label>
                    <input 
                        type="text"
                        className="input"
                        value={ price } 
                        onChange={ (e) => setPrice(e.target.value) }
                        placeholder="Price"
                    />
                </div>
                <div className="field">
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddProduct