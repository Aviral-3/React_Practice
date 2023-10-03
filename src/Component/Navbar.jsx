import React , {useState} from 'react';

export default function Navbar(){
    const [name, setName]= useState("name");

   
    return(
        <>
        <h1 className='text-3xl font-serif italic bg-green-600'>Meal Tracker</h1>
        <form >
            <input className="border mt-2"type='text' value={name}onChange={(e)=>{
                setName(e.target.value)
               console.log(name)
            }}/>
            <button className='rounded-md bg-purple-500 px-2 '>Submit</button>
            
        </form>
        </>
    );
}