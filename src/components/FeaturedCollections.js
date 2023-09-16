import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import featuredCollections0 from '../assets/featured-collections/app-titan-featuredCollection-0.png';
import featuredCollections1 from '../assets/featured-collections/app-titan-featuredCollection-1.png';
import featuredCollections2 from '../assets/featured-collections/app-titan-featuredCollection-2.png';

const collections = [
  {
    imgSrc: featuredCollections0,
    title: "TITAN Fall '23 Essentials",
    link: "/collections/titan-fa23-essentials",
  },
  {
    imgSrc: featuredCollections1,
    title: 'Air Jordan XXXVIII',
    link: "/collections/titan-for-love-apparel-collection",
  },
  {
    imgSrc: featuredCollections2,
    title: 'TITAN For Love Apparel Collection',
    link: "/collections/air-jordan-xxxviii",
  }
];

const FeaturedCollections = () => {
  return (
    <Container className="py-5">
      <h1 className="loginTitle">Featured Collections</h1>
      <Row>
        {collections.map((collection, index) => (
          <Col key={index} xs={12} md={4}>
            <div className="homeHighlight p-3 highlight1">
              <img className="img-fluid my-2" src={collection.imgSrc} alt={collection.title} />
              <h3>
                {collection.title}
              </h3>
              {collection.link && 
                <Link to={collection.link}>
                  <button type="button" className="btn btn-outline-dark">Shop Collection</button>
                </Link>
              }
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedCollections;
