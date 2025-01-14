import {Form,Button} from 'react-bootstrap';


export const ReviewForm = ({handleSubmit,revText,labeltext,defaultValue}) => {
  return (
    <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>{labeltext}</Form.Label>
            <Form.Control ref={revText} type="text" placeholder="Enter your Review" defaultValue={defaultValue} />
        </Form.Group>
        <br />
        <Button variant="outline-primary" onClick={handleSubmit}>Submit</Button>

            </Form>    
  )
}


