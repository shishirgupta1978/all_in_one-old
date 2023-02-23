import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import Title from "../components/Title";
import { activate } from "../api/apiSlice";

const Activate = () => {
	const { uid, token } = useParams();
	const dispatch = useDispatch();

	const { status } = useSelector(
		(state) => state.api
	);


	const submitHandler = () => {
		const userData = {
			uid,
			token,
		};
		dispatch(activate({"url": "/api/v1/auth/users/activation/", "method": "post","data" :userData}));
		toast.success("Your request has been send. Please wait for confirmation.");
		
	};

	return (
		<>
			<Title title="Activate User" />
			<Container>
				<Row>
					<Col className="mg-top text-center">
						<section>
							<h1>
								<FaCheckCircle /> Activate your account
							</h1>
							<hr className="hr-text" />
						</section>
					</Col>
				</Row>
				{status ==="pending" && <Spinner />}
				<Row className="mt-3">
					<Col className="text-center">
						<Button
							type="submit"
							variant="outline-dark"
							size="lg"
							className="mt-3 large-btn"
							onClick={submitHandler}
						>
							Activate
						</Button>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Activate;