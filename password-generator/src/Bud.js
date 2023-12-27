import { useState } from 'react'

import './Bud.css'    
function Bud() {


    const [budItem, setBudItem] = useState('');

    const [item, setItem] = useState([]);
    const bag = (e) => {
       
       
        setBudItem((prev) => {
            const previous = e.target.value;

            return previous

        })

    }


    const addItem = () => {
        const newItemList = [...item, budItem]
        setItem(newItemList);
        console.log(item);
        if (budItem.trim() === '') {
            alert('Please enter a valid item.'); 
            
            return;
          }
    }


    const deleteItem = (e) => {

        const updatedItems = item.filter((_, i) => i != e.target.id);
        setItem(updatedItems);
        {alert("your item has deleted")}
        
    };

    return (
        <div className='body'>
            <div className="bag">

                <h1>Grocery Bud</h1>
                <input type='text' onChange={bag}></input>
                <button onClick={addItem}>add item</button>

            </div>
            <div className='bag-container'>
                {item.map((ele, idx) => {
                    return (
                        <div className='card'>
                            <input type='checkbox' className='check-box'></input>

                            <label
                                htmlFor="grocery"

                            >{ele}</label>

                            <button onClick={
                                deleteItem
                            } id={idx}>DELETE</button>

                        </div>
                    )
                })}

            </div>
        </div>

    )
}
export default Bud