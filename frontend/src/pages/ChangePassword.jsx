import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import Title from "../components/Title";
import { TextField } from "@mui/material";

import { getResponse, reset } from "../api/apiSlice";

const ChangePassword = () => {
	const [first_render,setFirst_render] = useState(true);
    const [current_password, setCurrent_password] = useState("");
	const [new_password, setNew_password] = useState("");
    const [re_new_password, setRe_new_password] = useState("");

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { user, status, result } = useSelector(
		(state) => state.api
	);

	useEffect(() => {
		if(first_render)
		{
			setFirst_render(false);
			dispatch(reset());
		}else{
			if(status==='success')
			{
				toast.success("Password Changed Successfully")
				navigate("/");
			}

		}
		

	}, [status,result, user, navigate, dispatch,first_render]);

	const submitHandler = (e) => {
		e.preventDefault();
		if (new_password!==re_new_password) {
			toast.error("New password and Confirm new password should be matched");
		}
		else{
			const userData = {
				current_password,
				new_password,
				re_new_password
			};
	
			dispatch(getResponse({"url": "/api/v1/auth/users/set_password/", "method": "post","data" :userData,"private": true }));

		}

		


	};

	return (
		<>
			<Title title="Change Password" />
				<Container className="align-items-center vh-100 mt-3">
				<Row className="justify-content-center">
				<Col xs={12} md={8} lg={6} xl={4} className="form">
										<section>
								<h1 className="text-center">
									Change Password
								</h1>
								<hr className="hr-text" />
							</section>
				
					{status==="pending" && <Spinner />}
				
							<Form onSubmit={submitHandler}>
                            <TextField margin='normal' required fullWidth id='current_password' name='current_password' type='password' label='Current Password' value={current_password}
									onChange={(e) => setCurrent_password(e.target.value)} />

								<TextField margin='normal' required fullWidth id='new_password' name='new_password' type='password' label='New Password' value={new_password}
									onChange={(e) => setNew_password(e.target.value)} />
                                    <TextField margin='normal' required fullWidth id='re_new_password' name='re_new_password' type='password' label='Confirm New Password' value={re_new_password}
									onChange={(e) => setRe_new_password(e.target.value)} />
					

								<div className="text-center py-3">
									<Button
										type="submit"
										variant="dark"
										className="mt-3"
									>
										Update
									</Button>
								</div>
							</Form>
						</Col>
					</Row>

					
				</Container>
		</>
	);
};

export default ChangePassword;