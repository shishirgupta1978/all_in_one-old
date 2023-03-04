import React, {useState,useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {Spinner} from "./Spinner";
import {Title} from "./Title";
import { register,reset} from "../../api/apiSlice";
import { TextField,MenuItem } from "@mui/material";


export const Register = () => {
	const [first_render, setFirst_render] = useState(true);
	const [username, setUsername] = useState("");
	const [first_name, setFirstName] = useState("");
	const [last_name, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [re_password, setRePassword] = useState("");
	const [date_of_birth, setDate_of_birth] = useState("");
	const [gender, setGender] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {status } = useSelector(
		(state) => state.api
	);


	useEffect(()=>{

		if(first_render)
		{
			setFirst_render(false);
			dispatch(reset());
		}else{
			if(status==='success')
			{
				toast.success("User register Successfully. Please check yor email")
				navigate("/");
			}

		}


	},[status,navigate,reset,dispatch,first_render]);
	const submitHandler = (e) => {
		e.preventDefault();

		if (password !== re_password) {
			toast.error("Passwords do not match");
		} else {
			const userData = {
				username,
				first_name,
				last_name,
				email,
				password,
				re_password,
				date_of_birth,
				gender
			};
			dispatch(register({"url": "/api/auth/users/", "method": "post","data" :userData}));
		}
	};
	return (
		<>
			<Title title="Register" />
			<div className="homepage">
			<Container className="col-sm-12 col-md-8 col-lg-5 form ">
				<Row>
					<Col className="mg-top text-center">
							<h2>
								<FaUser /> Register
							</h2>
							<hr className="hr-text" />
					</Col>
				</Row>

				{status === "pending" && <Spinner />}
				<Row>
					<Col className="justify-content-center">
						<Form id="register-form"  onSubmit={submitHandler}>
						<Row>
						<Col><TextField margin='normal' required fullWidth id='username' name='username' type='name' label='Username' value={username}
						onChange={(e) => setUsername(e.target.value)} /></Col>
						<Col><TextField margin='normal' required fullWidth id='email' name='email' type='email' label='Email Address' value={email}
						onChange={(e) => setEmail(e.target.value)} /></Col>
						
						
						
						</Row>
							
							<Row><Col>						<TextField margin='normal' required fullWidth id='first_name' name='first_name' type='name' label='First Name' value={first_name}
								onChange={(e) => setFirstName(e.target.value)} />
							</Col>
								<Col>						<TextField margin='normal' required fullWidth id='last_name' name='last_name' type='name' label='Last Name' value={last_name}
									onChange={(e) => setLastName(e.target.value)} />

								</Col>
							</Row>
							<Row><Col>  <TextField margin='normal' required sx={{ width: '100%' }} id='gender' select name='gender' label='Gender' value={gender} onChange={(e) => setGender(e.target.value)} >

							<MenuItem value={'Male'}>Male</MenuItem>
							<MenuItem value={'Female'}>Female</MenuItem>
							<MenuItem value={'Other'}>Other</MenuItem>
						  </TextField>
								</Col>
								<Col><TextField margin='normal' required sx={{ width: '100%' }} id='date_of_birth' name='date_of_birth' InputLabelProps={{ shrink: true, required: true }}
							type="date" label='Date of Birth' value={date_of_birth} onChange={(e) => setDate_of_birth(e.target.value)} /></Col>
								</Row>

							<Row><Col><TextField margin='normal' required fullWidth id='password' name='password' type='password' label='Password' value={password}
								onChange={(e) => setPassword(e.target.value)} /></Col>
								<Col><TextField margin='normal' required fullWidth id='re-password' name='re-password' type='password' label='Confirm Password' value={re_password}
									onChange={(e) => setRePassword(e.target.value)} /></Col></Row>




						<div className="text-center">
							<Button
								type="submit"
								variant="dark"
								className="mt-3"
							>
								Sign Up
							</Button></div>
						</Form>
					</Col>
				</Row>

				<Row className="py-3">
					<Col>
						Have an account already? <Link to="/login">Login</Link>
					</Col>
				</Row>
			</Container></div>
		</>
	);
};

