import React from "react";
import Navbar from './Components/Navbar'; 
import Textform from './Components/Textform'; 


function App() {
  return (
   <>
    <Navbar title="TextUtil" cont="About us" />
    
    <div className="container my-10">
    <Textform heading="Enter the text "  />
    </div>
  
   </>
  );
}

export default App;
