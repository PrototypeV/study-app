import { useState } from "react";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar(){

    const [textInput, setTextInput] = useState('Enter Text Here!');
    return (
    <div className='TTSPage'>
      <h2> Text to Brainrot: </h2>
        <form>
          <label>Enter Text here:</label>   
          <input type='text' value={textInput} onChange={(e) => setTextInput} required/>
          <label>Example Text Area</label>
          <textarea required/>
          <button>Brainrot My Lecture!</button>
        </form>
    </div>
    );
}

export default Navbar;