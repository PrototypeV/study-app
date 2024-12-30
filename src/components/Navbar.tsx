import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


function Navbar(){
    const navigate = useNavigate();
    return (
        <table>
            <th className="navContainer">
                <Stack direction="horizontal" gap={3}>
                    <Button variant="outline-secondary" className="navbutton" onClick={()=>navigate("/Calender")}>Calender</Button>
                    <Button variant="outline-secondary" className="navbutton" onClick={()=>navigate("/Flashcards")}>Flashcards</Button>
                    <Button variant="outline-secondary" className="navbutton" onClick={()=>navigate("/Focus")}>Focus Session</Button>
                    <Button variant="outline-secondary" className="navbutton" onClick={()=>navigate("/Notes")}>Notes</Button>
                    <Button variant="outline-secondary" className="navbutton" onClick={()=>navigate("/Tts")}>Text to Speech</Button>
                    
                </Stack>
            </th>

            <th className="navtitle">
                <div>Educated Brainrot</div>
            </th>
        </table>
    );
}

export default Navbar;