import react,{useState} from 'react';
export default function Counter(){
const [count,setCounter] = useState(0);
const[surprise,setSurprise] = useState('');
const incHandler = ()=>{
        console.log("clicked increment")
        setCounter(count + 1);    //We don't use return in event handler functions

    
    }
    const decHandler = ()=>{

        if(count>0){
        setCounter(count - 1);
        }
    

    }
 
return(
    <div className="bg-orange-50">
        <div>
            <p>Counter Check</p>

            <div className="flex justify-center ">
                <button className="rounded-xl border-black bg-purple-500 px-4 py-2 m-2 hover:scale-110  duration-200 hover:bg-purple-300" onClick={incHandler}>Increment</button>
                <button className="rounded-xl border-black bg-purple-500 px-4 py-2 m-2 hover:scale-110  duration-200 hover:bg-purple-300 " onClick={decHandler}>Decrement</button>
                <p className='bg-gray-300 inline px-4 py-2 rounded-xl'>{count}</p>
            </div>
            {/* <div>
                <button className="rounded-xl border-black bg-purple-500 px-4 py-2 m-2 hover:scale-110  duration-200 hover:bg-purple-300" onClick={handleSurprise}>Press Me!</button>
                
            </div> */}

        </div>
    
    </div>
)
}