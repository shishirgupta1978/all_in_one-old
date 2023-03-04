import React, {useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {Spinner} from "./Spinner";
import {Title} from "./Title";
import { TextField } from "@mui/material";
import {login} from "../../api/apiSlice";

export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { status,user} = useSelector(
		(state) => state.api
	);


useEffect(()=>{
if(user)
{
	navigate("/")
}
	
},[user,navigate])



	const submitHandler = (e) => {
		e.preventDefault();
		if (!email) {
			toast.error("An email must be provided");
		}

		if (!password) {
			toast.error("A password must be provided");
		}

		const userData = {
			email,
			password,
		};
		dispatch(login({"url": "/api/auth/token/", "method": "post","data" :userData}));
	};

	return (
		<>
			<Title title="login" />
			<div className="homepage">
				<Container className="col-sm-12 col-md-6 col-lg-4 form">
					<Row>
						<Col className="text-center">
							
								<h2>
									<FaSignInAlt /> Login
								</h2>
								<hr className="hr-text" />
						</Col>
					</Row>

					{status ==="pending" && <Spinner />}
					<Row className="mt-3">
						<Col className="justify-content-center">
							<Form onSubmit={submitHandler}>

								<TextField margin='normal' required fullWidth id='email' name='email' type='email' label='Email Address' value={email}
									onChange={(e) => setEmail(e.target.value)} />
								<TextField margin='normal' required fullWidth id='password' name='password' type='password' label='Password' value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									} />
								<Row>
									<Col>						  <div className="form-check">
										<input className="form-check-input" type="checkbox" value="agree" id="check" defaultChecked />
										Remember me
									</div>

									</Col>
									<Col className="text-end">
									  <Link to='/resetpassword'>Forgot Password?</Link>
									</Col>

								</Row>


								<div className="text-center">
									<Button
										type="submit"
										variant="dark"
										className="mt-3"
									>
										Sign In
									</Button>
								</div>
							</Form>
						</Col>
					</Row>

					<Row className="py-3">
						<Col>
							New User? <Link to="/register">Register Here.....</Link>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

