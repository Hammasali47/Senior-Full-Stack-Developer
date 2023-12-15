// import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {

  const [largeHandleState,setLargeHandleState]= useState()
  const [smallHandleState,setSmallHandleState]= useState()

  setTimeout(() => {
    
  }, 60000);

  return (
    <div className="App">
     {/* <div className="Section1"> */}
      <div className="Section2">
        <div className="Section3">
          <div className="LargeHandle"></div>
          <div className="SmallHandle"></div>
        </div>
      </div>
     {/* </div> */}
    </div>
  );
}

export default App;
