import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar(){
    return (
        <Stack direction="horizontal" gap={3}>
            <Button variant="outline-secondary" className="b-1">Calender</Button>
            <Button variant="outline-secondary" className="b-2">Flashcards</Button>
            <Button variant="outline-secondary" className="b-3">Focus Session</Button>
            <Button variant="outline-secondary" className="b-4">Notes</Button>
            <Button variant="outline-secondary" className="b-5">Text to Speech</Button>
            <div className="appName">Educated Brainrot</div>
        </Stack>
    );
}

export default Navbar;