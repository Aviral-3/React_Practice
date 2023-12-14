import react,{useState} from 'react';
export default function Counter(){
    const [count,setCounter] = useState(0);
    const incHandler = (count)=>{
        
            setCounter(count + 1);    //We don't use return in event handler functions
        
       }
       const decHandler = (count)=>{
    
            setCounter(count - 1);
        
       }
    return(
        <div className="bg-orange-50">
            <div>
                <p>Counter Check</p>

                <div className="flex justify-center ">
                    <button className="rounded-xl border-black bg-purple-500 px-4 py-2 m-2 hover:scale-110  duration-200 hover:bg-purple-300" onClick={incHandler}>Increment</button>
                    <button className="rounded-xl border-black bg-purple-500 px-4 py-2 m-2 hover:scale-110  duration-200 hover:bg-purple-300 " onClick={decHandler}>Decrement</button>
                    <p>{count}</p>
                </div>



            </div>
        
        </div>

    )
}