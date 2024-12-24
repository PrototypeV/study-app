import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar(){
    return (
        <table>
            <th className="navContainer">
                <Stack direction="horizontal" gap={3}>
                    <Button variant="outline-secondary" className="navbutton">Calender</Button>
                    <Button variant="outline-secondary" className="navbutton">Flashcards</Button>
                    <Button variant="outline-secondary" className="navbutton">Focus Session</Button>
                    <Button variant="outline-secondary" className="navbutton">Notes</Button>
                    <Button variant="outline-secondary" className="navbutton">Text to Speech</Button>
                    
                </Stack>
            </th>

            <th className="navtitle">
                <div>Educated Brainrot</div>
            </th>
        </table>
    );
}

export default Navbar;