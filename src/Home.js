import React from "react";
import Slider from './Components/Slider';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Static1 from './Assets/Static1.jpg';
import Static2 from './Assets/Static2.jpg';
import Static3 from './Assets/Static3.jpg';

export const Home = () => (
	<>
		<Slider />
		<Container style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
			<Row>
				<Col>
					<Card style={{ width: '18rem' }}>
						<Card.Img variant="top" src={Static1} />
						<Card.Body>
							<Card.Title>Sky City Plus</Card.Title>
							<Card.Text>
								Meet the houses of the future - "Sky City Plus"!
								The new project from the Budfoh company develops the idea of practical and comfortable housing.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: '18rem' }}>
						<Card.Img variant="top" src={Static2} />
						<Card.Body>
							<Card.Title>Altair 3</Card.Title>
							<Card.Text>
								The complex is located near the first project of the series, "Altair. Star town". The business card of all "Altair" projects is stylish and practical facades.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: '18rem' }}>
						<Card.Img variant="top" src={Static3} />
						<Card.Body>
							<Card.Title>Sea residence</Card.Title>
							<Card.Text>
								The apartment complex will border the former sanatorium-park zone, and it will be possible to get to the sea coast from there in 15 minutes.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>

	</>
)