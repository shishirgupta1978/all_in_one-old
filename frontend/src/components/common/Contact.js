import React,{useState} from 'react'
import { TextField } from "@mui/material";
import {Title} from "./Title";
import { Form,Button, Col, Container, Row } from "react-bootstrap";
import {sendmail} from "../../api/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import {Spinner} from "./Spinner";

export const Contact = () => {
  const [name,setName]=useState("");
  const [phone_number,setPhone_number]=useState("");
  const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
  const [messages, setMessages] = useState("");

	const dispatch = useDispatch();

	const {isLoading} = useSelector(
		(state) => state.api
	);


const submitHandler = (e)=>{
  e.preventDefault();
  const userData = {
    name,
    phone_number,
    email,
    subject,
    "message": messages
  };
  dispatch(sendmail({"url": "/api/enquiries/", "method": "post","data" :userData}));


}

  return (
    <>
    <Title title="Contact Us"/>
    <div className='main-height px-4 px-lg-5 d-flex align-items-center justify-content-center'>
    <Container className="col-sm-12 col-md-10 col-lg-8 form">
        <Row>
            <Col className='mg-top text-center'>
            <h1>Contact Us</h1>
            <hr className='hr-text'/>
            </Col>
        </Row>
        {isLoading && <Spinner />}
            <Row className='mt-3'>
          
                <Col sm={12} md={7} lg={7} xl={7}>
                <Form onSubmit={submitHandler}>
                <TextField margin='normal' required fullWidth id='name' name='name' label='Name' value={name}
									onChange={(e) => setName(e.target.value)} />
          <div className="row"><div className='col-6'><TextField margin='normal' required fullWidth id='mobile' name='mobile' type="number" label='Contact Number' value={phone_number}
									onChange={(e) => setPhone_number(e.target.value)} /></div>
        <div className='col-6'><TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' value={email}
									onChange={(e) => setEmail(e.target.value)} /></div></div>
        <TextField margin='normal' required fullWidth id='subject' name='subject' label='Subject' value={subject}
									onChange={(e) => setSubject(e.target.value)}/>
        <TextField margin='normal' required fullWidth id='message' name='message' label='Message' minRows={3} value={messages}
									onChange={(e) => setMessages(e.target.value)} multiline />

          <div className="d-flex justify-content-center">
          <Button
										type="submit"
										variant="dark"
										className="my-3"
									>
										Send Enquery
									</Button>
          </div>
             


          </Form>
                  
                  </Col>
                  <Col sm={12} md={5} lg={5} xl={5}>
                  <p className='address'><strong>Abc Communication</strong><br/>123, house no. 1214464,<br/>Gali number 7,<br/>Rohini.<br/>Delhi - 110006<br/>M-98911346464<br/>O-7879797977.</p>
                
                  
                  </Col>
          
            </Row>
            
        
    </Container>
    </div>

 
  </>
  )
}
