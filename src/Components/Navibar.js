import { hover } from '@testing-library/user-event/dist/hover';
import React, { useState } from 'react';
import { Navbar, Nav, Button, Container, Form, ModalDialog } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';

const Styles = styled.div`
a, .navbar-brand, .navbar-nav, .nav-link{
	color: #adb1b8;
	&:hover {
		color: white
	}
}
`

export default function NaviBar() {

	const [show, setShow] = useState(false);
	const [show1, setShow1] = useState(false);


	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleClose1 = () => setShow1(false);
	const handleShow1 = () => setShow1(true);

	return (
		<>
			<Styles>
				<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
					<Container>
						<Navbar.Brand>BudFox</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mr-auto">
								<Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
								<Nav.Link><NavLink to="/users">Users</NavLink></Nav.Link>
								<Nav.Link><NavLink to="/about">About</NavLink></Nav.Link>
							</Nav>
							<Nav>
								<Button variant="primary" className="mr-2" onClick={handleShow}>Log In</Button>

								<Button variant="primary" onClick={handleShow1}>Sign out</Button>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</Styles>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Log in</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email Address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
						</Form.Group>
						<Form.Group controlId="formBasicPassword" className='mt-3'>
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Enter password" />
						</Form.Group>
						<Form.Group controlId="formBasicCheckbox">
							<Form.Check type="checkbox" className='mt-3' label="Check me out" />
						</Form.Group>
						<ModalDialog>
							<Button onClick={handleClose} color='primary' className="m-2">Cancel</Button>
							<Button onClick={handleClose} color='primary' className="m-2">Log in</Button>
						</ModalDialog>
					</Form>
				</Modal.Body>
			</Modal >




			<Modal show={show1} onHide={handleClose1}>
				<Modal.Header closeButton>
					<Modal.Title>Sign up</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email Address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
							<Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
						</Form.Group>
						<Form.Group controlId="formBasicPassword" className='mt-3'>
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Enter password" />
						</Form.Group>
						<Form.Group controlId="formBasicCheckbox">
							<Form.Check type="checkbox" className='mt-3' label="Check me out" />
						</Form.Group>
						<ModalDialog>
							<Button onClick={handleClose1} color='primary' className="m-2">Cancel</Button>
							<Button onClick={handleClose1} color='primary' className="m-2">Log in</Button>
						</ModalDialog>
					</Form>
				</Modal.Body>
			</Modal >

		</>
	);
}
