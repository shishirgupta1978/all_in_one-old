import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import Title from "../components/Title";
import { TextField } from "@mui/material";


import { getResponse, reset } from "../api/apiSlice";

const ResetPassword = () => {
	const [email, setEmail] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const {user,status } = useSelector(
		(state) => state.api
	);

	useEffect(() => {
	
			if (user) {
				navigate("/");
			}

		

		

		
	}, [status, navigate,user, dispatch]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (!email) {
			toast.error("An email must be provided");
		}


		const userData = {
			email,
		};
		dispatch(reset());
		dispatch(getResponse({"url": "/api/v1/auth/users/", "method": "post","data" :userData})).then()
	};

	return (
		<>
			<Title title="Reset Password" />
			<div className='main-height px-4 px-lg-5 d-flex align-items-center justify-content-center'>
				<Container className="col-sm-12 col-md-6 col-lg-4 form">
					<Row>
						<Col className="mg-top text-center">
							<section>
								<h1>
									<FaSignInAlt /> Reset Password
								</h1>
								<hr className="hr-text" />
							</section>
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

export default ResetPassword;