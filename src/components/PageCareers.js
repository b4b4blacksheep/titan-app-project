import { Accordion, Col, Row, Container, Button } from 'react-bootstrap';



export default function PageCareers() {
  return (
      <Container className="pb-5">
        <Row>
          <Col>
        	<p class="h1 text-center py-5">Careers</p>
          </Col>
        </Row>
        <Row >
        	<Accordion defaultActiveKey="1"> 
        	  <Accordion.Item eventKey="0">
        	    <Accordion.Header>Titan Internships</Accordion.Header>
        	    <Accordion.Body>
        	      <p>HQ</p>
        	      <p>Classification: Internship</p>
        	      <p>The TITAN collective, which includes SLAM PH, TMG and NBA Store PH, offers internship opportunities to students and individuals who wish to be part of activities, projects and programs that support overall company goals. In this program, they are immersed in our general operations and are exposed to different teams and professionals, which help enrich their professional experience and contribute to their career goals.</p>
        	      <p>We currently have internship openings for the following functions but are also open to those who want to explore opportunities in other departments:</p>
        	      <p>// Analytics</p>
        	      <p>// Brand Design</p>
        	      <p>// Court Operations (can also be a part-time job)</p>
        	      <p>// Retail Stores (can also be a part-time job)</p>
        	      <Button variant="outline-dark">Apply Now</Button>
        	    </Accordion.Body>
        	  </Accordion.Item>
        	  <Accordion.Item eventKey="1">
        	    <Accordion.Header>Finance Director</Accordion.Header>
        	    <Accordion.Body>
        	      <p>HQ - Finance</p>
        	      <p>Classification: Director Level</p>
        	      <p>A fundamental aspect of TITAN’s success lies in its ability to map out its financial capabilities. The Finance team identifies opportunities, risks and investments that drive the company towards growth and stability. Through regular and effective financial activities and reporting, the company is able to make informed important decisions that build the brand’s portfolio and equity.</p>
        	      <p>The Finance Director is a results-driven leader who develops the company’s financial strategies and oversees financial activities that influence key stakeholders’ decision-making. Financial planning, analyses, audit, cost and risk management, metrics-setting, process implementation, reporting accuracy and people management are some of the critical areas within this role’s scope. The Finance Director is also the subject matter expert for accounting, taxation and treasury. The ideal candidate possesses the technical knowledge and experience to confidently resolve complex financial matters and to drive operational success to achieve desired business outcomes.</p>
	        	    <p><ul class="list-unstyled">
						  <li>Qualifications:
						    <ul>
						      <li> Possesses a Bachelor’s Degree in Finance or Accounting</li>
						      <li>A licensed Certified Public Accountant (CPA) or Chartered Financial Analyst (CFA)</li>
						      <li>Minimum 8 years of related work experience and 5 years managerial experience</li>
						      <li>Expertise in Accounting, Financial Planning, Analysis, Taxation, Audit</li>
						      <li>Strong interpersonal and communication skills, can interact professionally with individuals of all levels within the organization</li>
						      <li>Solution-oriented, highly analytical, thinks both critically and creatively</li>
						      <li> Advanced skills in Microsoft Excel, Word</li>
						      <li> Knowledgeable in Oracle-based finance systems</li>
						      <li> Able to manage multiple priorities simultaneously and is able to meet deadlines and milestones</li>
						    </ul>
						  </li>
						</ul>
					</p>
        	      <Button variant="outline-dark">Apply Now</Button>
        	    </Accordion.Body>
        	  </Accordion.Item>
        	  <Accordion.Item eventKey="1">
        	    <Accordion.Header>NBA Store PH - Advanced Associate</Accordion.Header>
        	    <Accordion.Body>
        	      <p>The Advanced Associate is well-versed with cash management and/or stock & inventory management all the while ensuring high-level consumer experience through product knowledge and reliable service.</p>
	        	    <p><ul class="list-unstyled">
						  <li>Qualifications:
						    <ul>
						      <li> Graduate of a bachelor’s degree of any course </li>
						      <li> Must have had cashiering experience handling various payment methods and or stock and inventory experience </li>
						      <li> Demonstrates solid interpersonal and communication skills in both English and Filipino, conveying information effectively </li>
						      <li> Deep knowledge about the game of basketball, basketball products and is constantly updated with the latest information in the basketball scene </li>
						      <li> Able to multi-task to meet both customer and operational needs </li>
						      <li> Able to sustain genuine enthusiasm and positive attitude while servicing consumers </li>
						    </ul>
						  </li>
						</ul>
					</p>
        	      <Button variant="outline-dark">Apply Now</Button>
        	    </Accordion.Body>
        	  </Accordion.Item>
        	</Accordion>
        </Row>
      </Container>
  );
}