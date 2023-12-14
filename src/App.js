import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Counter from './Component/Counter';
function App() {
  function parentComp(data){
    alert(data);

  }
  
  return (
    <div className="App">

      <Navbar alert={parentComp}/>
      <Counter/>;
     
    </div>
  );
}

export default App;