import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css'

import ImgStoreLocator1 from '../assets/app-titan-store-locator-1.png';
import ImgStoreLocator2 from '../assets/app-titan-store-locator-2.png';
import ImgStoreLocator3 from '../assets/app-titan-store-locator-3.png';
import ImgStoreLocator4 from '../assets/app-titan-store-locator-4.png';
import ImgStoreLocator5 from '../assets/app-titan-store-locator-5.png';
import ImgStoreLocator6 from '../assets/app-titan-store-locator-6.png';

const StoreCard = ({ imgSrc, storeData }) => (
  <Col xl={4} md={4} xs={12} >
    <img className="d-block w-100 fluid py-2" src={imgSrc} alt={storeData.name} />
    <h3>{storeData.name}</h3>
    {storeData.address.map((line, index) => (
      <p className="barber-text" key={index}>{line}</p>
    ))}<br/>
    <p className="barber-text">{storeData.contact}</p><br/>
    <p className="pb-2" ><a className = "text-decoration-none barber-text" href={`mailto:${storeData.email}`}>{storeData.email}</a></p>
    {storeData.hours.map((hour, index) => (
      <p className="barber-text" key={index}>{hour}</p>
    ))}<br/>
  </Col>
);

export default function PageStoreLocator() {
	const stores = [
	  {
	    imgSrc: ImgStoreLocator1,
	    name: "Titan Fort",
	    address: [
	      "Upper Ground Floor",
	      "One Bonifacio High Street",
	      "Bonifacio Global City, Taguig 1634",
	    ],
	    contact: "+63 917 875 0566",
	    email: "fort@titan22.com",
	    hours: [
	      "Sun-Thu 11am-10pm",
	      "Fri-Sat 11am-11pm",
	    ],
	  },
	  {
	    imgSrc: ImgStoreLocator2,
	    name: "Titan Vertis",
	    address: [
	      "Level 3, Vertis North",
	      "cor. North Ave Barangay Bagong Pag-Asa",
	      "Quezon City 1105",
	    ],
	    contact: "+63 2 7 720 9528, +63 917 875 0564",
	    email: "vertis@titan22.com",
	    hours: [
	      "Mon-Thu 11am-8pm",
	      "Fri-Sun 11am-9pm",
	    ],
	  },
	  {
	    imgSrc: ImgStoreLocator3,
	    name: "Titan Megamall",
	    address: [
	      "Unit 340-341(D) Third Level Mega Fashion Hall",
	      "SM Megamall, Dona Julia Vargas Ave.",
	      "Wack Wack Village, Mandaluyong City",
	    ],
	    contact: "+63 917 703 8245",
	    email: "megamall@titan22.com",
	    hours: [
	      "Mon-Thu 10am-9pm",
	      "Fri-Sun 10am-10pm",
	    ],
	  },
	  {
	    imgSrc: ImgStoreLocator4,
	    name: "Titan Conrad",
	    address: [
	      "#230-231 S Maison, Second Floor",
	      "Conrad Hotel Manila, Marina Way",
	      "Mall of Asia Complex, Pasay 1300",
	    ],
	    contact: "+63 2 7 368 2496, +63 917 875 0565",
	    email: "conrad@titan22.com",
	    hours: [
	      "Mon-Thu 10am-9pm",
	      "Fri-Sun 10am-10pm",
	    ],
	  },
	  {
	    imgSrc: ImgStoreLocator5,
	    name: "Titan Alabang",
	    address: [
	      "#4 Molito 2, Ground Floor",
	      "Alabang-Zapote Road",
	      "Alabang, Muntinlupa 1780",
	    ],
	    contact: "+63 2 8 541 8886, +63 917 875 0563",
	    email: "alabang@titan22.com",
	    hours: [
	      "Mon-Sun 10am-9pm"
	    ],
	  },
	  {
	    imgSrc: ImgStoreLocator6,
	    name: "Titan Basketball Outlet",
	    address: [
	      "Building C 2FR-1",
	      "Solenad 3, Nuvali",
	      "Sta. Rosa 4026",
	    ],
	    contact: "+63 49 544 9646, +63 917 112 5564",
	    email: "solenad@titan22.com",
	    hours: [
	      "Mon-Fri 11am-8pm",
	      "Sat-Sun 10am-9pm"
	    ],
	  },
	];

return (
    <Container>
      <Row className="text-center py-3">
      <h1>Store Locator</h1>
        <Col>
          <p>
            While we continue to encourage online shopping, our retail locations are ready to service you. TITAN continues to strive to be a safe, clean home court for both our staff and customers. We will be implementing an appointment system in an effort to maintain proper social distancing inside the store at all times.
          </p>
          <p>
            You can book your slot here.
          </p>
          <p>
            Everyone is expected to follow the store guidelines indicated here for a safer shopping experience.
          </p>
        </Col>
      </Row>
      <Row className="py-3">
        {stores.map((store, index) => (
          <StoreCard key={index} imgSrc={store.imgSrc} storeData={store} />
        ))}
      </Row>
    </Container>
  );
}
