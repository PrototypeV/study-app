import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar(){
    return (
    <div>
        <form>
          <label>Enter Text here:</label>   
        </form>
        <input type="text" required/>
        <h5>
          <Badge bg="secondary" as={Button}>
            Brainrot My Lecture!
          </Badge>
        </h5>
    </div>
    );
}

export default Navbar;