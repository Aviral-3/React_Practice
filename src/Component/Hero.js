// import React , {useState} from 'react';

// export default function Navbar(props){
//     const [name, setName]= useState("");
//     let data = 'Ashu';
   
//     return(
//         <>
//         <h1 className='text-3xl font-serif italic bg-green-600'>Enter your name</h1>
//         <form >
//             <input className="border mt-2"type='text' placeholder='name' value={name}onChange={(e)=>{
//                setName(e.target.value)
                
//                console.log(name)
//             }}/>
//             <button className='rounded-md bg-purple-500 px-2 ' onClick={()=>props.alert(data)}>Submit</button>
            
//        </form>
//         </>
//     );
// }

import React, { useState, useEffect } from 'react';

export default function Hero(props) {
    const [name, setName] = useState("Ashish");

    useEffect(() => {
        // This will log the updated value of 'name' whenever it changes
        console.log(name);
    }, [name]);

    return (
        <>
            <h1 className='text-3xl font-serif italic bg-green-600'>Enter your name</h1>
            <form>
                <input
                    className="border mt-2"
                    type='text'
                    //value={name}
                    placeholder='name'
                    onChange={(e) => {
                        setName(e.target.value);
                        // console.log(e);
                    }}
                    
                />
                <button
                    className='rounded-md bg-purple-500 px-2 '
                    onClick={() => props.alert(name)}
                >
                    Submit
                </button>
            </form>
        </>
    );
}
