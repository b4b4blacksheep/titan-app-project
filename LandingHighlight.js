import {Button, Row, Col, Card} from 'react-bootstrap'

export default function LandingHighlight(){
	return(
		<div>
			<Row className="py-2">
				<Col className="landing1 bottom py-5 ">
					<Card>
					     <Card.Header as="h5" className="loginTitle">NEW ARRIVALS</Card.Header>
					     <Card.Body>
					       <Card.Title>ACCESSORIES</Card.Title>
					       		<Card.Text className="text-center">
					       			Stay Active With The Best Of Nike to Keep You Positive, Healthy And Moving Forward. The Official Website. Home Of Everything Nike. Shop The Latest Releases Today! 30-Day Free Returns. Free Returns for Members. Nike Member Days is Here. Free Shipping Over ₱7,500
					       		</Card.Text>
					       <Button variant="dark" className="btnWhite" a href="/products" >VISIT SHOP</Button>
					     </Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	)
}