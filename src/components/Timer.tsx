import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function Timer() {
    const [session, setSession] = useState();

    function sessionTime(value: any){
        setSession(value);
    }

  return (
    <>
        <p>Time Remaining: {session}</p>
        <p>Session Time:</p>
        <Form.Select aria-label="Default select example" onChange={e=>sessionTime(e.target.value)}>
            <option value="1">10 mins</option>
            <option value="2">20 mins</option>
            <option value="3">30 mins</option>
        </Form.Select>
        <p>Break Time:</p>
        <Form.Select aria-label="Default select example">
            <option value="1">5 mins</option>
            <option value="2">10 mins</option>
            <option value="3">15 mins</option>
        </Form.Select>
        <Button variant="success">Start</Button>
        <Button variant="danger">Stop</Button>
        <Button variant="secondary">Cancel</Button>
    </>
  )
}

export default Timer;
