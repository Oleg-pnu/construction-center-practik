import React from "react";
import Slider from './Components/Slider';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Static1 from './Assets/Static1.jpg';
import Static2 from './Assets/Static2.jpg';
import Static3 from './Assets/Static3.jpg';
import House from './Assets/House.jpg';


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
		<Container>
			<Row>
				<Col mg={7}>
					<img src={House} height={400} />
				</Col>
				<Col mg={5}>
					<p>
						"BudFox" has been engaged in construction in the south of Ukraine for more than 30 years.
						We built 60 buildings with a total area of 800,000 m², including not only residential complexes,
						but also Orthodox churches, a synagogue, an Arab cultural center, shopping and office centers.
						We do not just build residential complexes, but take responsibility for their further maintenance.
						The management company "Nash Dom" created by us serves more than 750,000 m² of housing,
						in which about 25,000 Odessa residents live. "BudFox" unites more than 2,200 industry professionals,
						the first in Odessa to use innovative software and engineering construction solutions: BIM modeling,
						touch-tables for the demonstration of apartments in sales departments,
						a ventilation system with heat recovery, three-layer fire-resistant facade panels,
						solar systems, energy-efficient boilers, "Smart House" etc. In general,
						about 10,000 people are involved in the activities of our company,
						taking into account contractors and one-off projects.
					</p>
				</Col>
			</Row>
		</Container>
	</>
)