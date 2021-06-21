import React from 'react';
import './Stylesheets/photos.css'
import Carousel from 'react-bootstrap/Carousel';
import testLogo from './Images/test-img.png';

function Photos(){
	return(
		<div className = "photos" >
				<Carousel>
				  <Carousel.Item>
				    <img
				      
				      src={testLogo}
				      alt="First slide"
				    />
				  </Carousel.Item>
				  <Carousel.Item>
				    <img
				      
				      src={testLogo}
				      alt="Second slide"
				    />

		
				  </Carousel.Item>
				  <Carousel.Item>
				    <img
				    
				      src={testLogo}
				      alt="Third slide"
				    />

			
				  </Carousel.Item>
				</Carousel>
		</div>
	)
}

export default Photos;