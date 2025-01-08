import { useState } from "react";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar(){

    const [textInput, setTextInput] = useState('The helicopter goes fwoosh fwoosh fwoosh fwoosh fwoosh');

    const speak = () => {
      const utterance = new SpeechSynthesisUtterance(textInput);
      speechSynthesis.speak(utterance);
    };


    return (
    <div className='TTSPage'>
      <h2> Text to Brainrot: </h2>
        <form>
          <textarea value={textInput} onChange={(e) => setTextInput} required/>
          <button onClick={speak}>Brainrot My Lecture!</button>
        </form>
    </div>
    );
}

export default Navbar;