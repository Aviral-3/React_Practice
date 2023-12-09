import react,{useState} from 'react';
export default function Counter(){
const [count,setCounter] = useState(0);
const[toggle,setToggle] = useState(true);
const[name,setName] = useState("Ashish Vats");
const incHandler = ()=>{
        console.log("clicked increment button")
        setCounter(count + 1);    //We don't use return in event handler functions

    
    }
const decHandler = ()=>{

    if(count>0){
    setCounter(count + 1);
    }


}

const handleToggle=()=>{
    if(toggle){
        setName("Palak Garg");
        setToggle(false);
    }
    else{
        setName("Ashish Vats");
        setToggle(true);
    }
    
}

return(
    <div className="bg-orange-50" id="counter">
        <div>
            <p>Counter Check</p>

            <div className="flex justify-center ">
                <button className="rounded-xl border-black bg-purple-500 px-4 py-2 m-2 hover:scale-110  duration-200 hover:bg-purple-300" onClick={incHandler}>Increment</button>
                <button className="rounded-xl border-black bg-purple-500 px-4 py-2 m-2 hover:scale-110  duration-200 hover:bg-purple-300 " onClick={decHandler}>Decrement</button>
                <p className='bg-gray-300 inline px-4 py-2 rounded-xl'>{count}</p>
            </div>
            <div className='flex flex-col ' >
                <p className='bg-gray-300  px-4 py-6 rounded-xl inline'>{name}</p>

                <button className="rounded-xl border-black bg-purple-500 px-4 py-2 m-2 hover:scale-110  duration-200 hover:bg-purple-300" onClick={handleToggle}>Press Me!</button>
                
            </div>

        </div>
    
    </div>
)
}