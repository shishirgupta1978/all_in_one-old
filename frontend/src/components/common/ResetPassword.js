import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {Spinner} from "./Spinner";
import {Title} from "./Title";
import { TextField } from "@mui/material";


import { getResponse, reset } from "../../api/apiSlice";

export const ResetPassword = () => {
	const [email, setEmail] = useState("");
	const [first_render, setFirst_render]= useState(true)

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {status } = useSelector(
		(state) => state.api
	);

	useEffect(() => {
		if(first_render)
		{
			setFirst_render(false)
			dispatch(reset());
		}else{
			if (status === "success") {
				navigate("/");
			}

		}

		

		
	}, [status, navigate,reset, dispatch,first_render]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (!email) {
			toast.error("An email must be provided");
		}


		const userData = {
			email,
		};

		dispatch(getResponse({"url": "/api/auth/users/", "method": "post","data" :userData})).then()
	};

	return (
		<>
			<Title title="Reset Password" />
			<div className='homepage'>
				<Container className="col-sm-12 col-md-6 col-lg-4 form">
					<Row>
						<Col className="text-center">
							
								<h2>
									<FaSignInAlt /> Reset Password
								</h2>
								<hr className="hr-text" />
							
						</Col>
					</Row>

					{status==="pending" && <Spinner />}
					<Row className="mt-3">
						<Col className="justify-content-center">
							<Form onSubmit={submitHandler}>

								<TextField margin='normal' required fullWidth id='email' name='email' type='email' label='Email Address' value={email}
									onChange={(e) => setEmail(e.target.value)} />
					

								<div className="text-center py-3">
									<Button
										type="submit"
										variant="dark"
										className="mt-3"
									>
										Send Activation Email
									</Button>
								</div>
							</Form>
						</Col>
					</Row>

					
				</Container>
			</div>
		</>
	);
};

