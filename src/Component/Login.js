import react, {useState,useRef} from 'react';
import logo from "../assets/login/instagram-logo.png"
export default function Login(){
    const [email, setEmail] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const ref = useRef('');

    const handleSubmit = (e)=>{
        setEmail('');
        e.preventDefault();
        console.log("clicked");
        
       
        
    }

    return(
        <div className='z-50 h-full bg-transparent'>
            <div className='sm:bg-white lg:mx-96 sm:mx-36 sm:border-2 sm:border-gray-600'>
                <div className='sm:p-5 sm:flex sm:flex-col gap-4 '>
                    <div className='sm:flex sm:justify-center'>
                        <img className="sm:p-2 scale-75"alt="logo" src={logo}/>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                    <div className={`flex flex-col items-center gap-3`}>
                       
                        <input className='sm:border-2 sm:border-gray-600 md:p-1 lg:w-64 md:w-40' ref={ref} type='text' placeholder="email@example.com" onChange={(e)=>{setEmail(e.target.value)}}/>
                        <input className="sm:border-2 sm:border-gray-600 md:p-1 lg:w-64 md:w-40"type='password' placeholder="password" />  
                        
                    </div>
                    <div>
                        <button disabled={!email} className={`bg-sky-400 p-2 sm:text-white w-64 sm:rounded-lg font-semibold `} >Submit</button>
                        <p>Hello {" "+email}</p>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );

}