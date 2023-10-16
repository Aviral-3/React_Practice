import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
function App() {
  function parentComp(data){
    alert(data);

  }
  
  return (
    <div className="App">

      <Navbar alert={parentComp}/>
     
    </div>
  );
}

export default App;