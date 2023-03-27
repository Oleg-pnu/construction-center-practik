import React from "react";
import { Carousel } from "react-bootstrap";
import Slider1 from '../Assets/Slider1.jpeg';
import Slider2 from '../Assets/Slider2.jpeg';
import Slider3 from '../Assets/Slider3.jpeg';

export default function Slider() {
	return (
		<Carousel>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={Slider1}
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>Bargain offers for houses</h3>
					<p>Action houses</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={Slider2}
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>Bargain offers for houses</h3>
					<p>Action houses</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src={Slider3}
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>Bargain offers for houses</h3>
					<p>Action houses</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	)
}