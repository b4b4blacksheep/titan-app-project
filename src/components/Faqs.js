import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

// import './style.css'

export default function Faqs () {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
          <h1 className="text-center">Frequently Asked Questions</h1>

            <Accordion className='py-3'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How do I place an order online?</Accordion.Header>
                        <Accordion.Body>
                            <p>
                            1. Start shopping by browsing through the catalog and clicking on a product to be redirected to its page for more details.
                            </p>
                            <p>
                            2. Product details, additional photos, sizing, and available options can be found on the product page. Select your desired size and click on the “Add to Cart” button to add the item to your shopping cart.
                            3. After adding to cart, a pop-up will appear, with options to continue shopping or to proceed to checkout.
                                // By clicking “Continue Shopping”, the pop-up message will close and go back to the current product page.
                                // By clicking “Proceed to Checkout”, the page will be redirected to the Checkout page.
                            4. To view and edit the items inside the cart, click the shopping cart icon seen in the upper right corner of the page.
                            5. To use a special promo code or store credit voucher, proceed to the Shopping Cart page, click “Apply Discount Code” and enter the code:
                                // If the Discount Code consists of a free gift with purchase, a notification above the list of items in the cart will show up with a link to redeem the free gift.
                            6. By clicking the "Proceed to Checkout" button, you will be transferred to the Checkout page where you’ll be required to input your contact details and delivery information.  
                            7. Delivery details, shipping methods, payment methods and the order summary can be seen in this page. Customer details including the shipping address will be required to be filled up in the Checkout page to place and order.
                            8. It is highly encouraged for the customer to review all inputted details. Once done, click “Place Order” to complete the order.
                            9. Once the order has been placed, an invoice consisting of the order details and delivery schedule/tracking number will be sent to the inputted email address.
                            </p>
                        </Accordion.Body>
                    </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        </Accordion.Body>
                </Accordion.Item>
            </Accordion>
          
        </Col>
      </Row>
    </Container>
  );
};