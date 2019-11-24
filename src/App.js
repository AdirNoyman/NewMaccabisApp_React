import React from 'react';
import './App.css';
import { SelfServiceCard } from './SelfServiceCard';
import CallCardsList from './CallCardsList';
import NavBar from './NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';


const callCards = [
  { title: 'card-1' },
  { title: 'card-2' },
  { title: 'card-3' },
  { title: 'card-4' },
  { title: 'card-5' },
  { title: 'card-6' },
  { title: 'card-7' },
  { title: 'card-8' },
  { title: 'card-9' },
  { title: 'card-10' },
  { title: 'card-11' },
  { title: 'card-12' },
  { title: 'card-13' }]


const App = () => {

  return (
    <div className="App">
      <NavBar />
      <Container style={{ paddingTop: '5rem' }} id="startPage">
        <Row className="justify-content-lg-center" id="row-1">
          <Col lg={5}>
            <Card id="selfService">
              <Card.Title>שירות עצמי<br />Self Service</Card.Title>
              <Card.Img variant="top"
                src="https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
                fluid="true" />
              <Card.Body>
                <Card.Text id="listTitle">לחץ על הבחירה המבוקשת:</Card.Text>
                <ListGroup as="ul">
                  <ListGroup.Item as="li"><ListGroup.Item as="a" action href="https://portaldoc.mac.org.il/Pivotal" target="_blank" rel="noopener noreferrer">פתיחת קריאה</ListGroup.Item></ListGroup.Item>
                  <ListGroup.Item as="li"><ListGroup.Item as="a" action href="https://portaldoc.mac.org.il/dana-na/auth/url_default/welcome.cgi" target="_blank" rel="noopener noreferrer">FreePass - איפוס סיסמה בשירות עצמי</ListGroup.Item></ListGroup.Item>
                  <ListGroup.Item as="li"><ListGroup.Item as="a" action href="https://api.whatsapp.com/send?phone=972508464238&text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%A8%D7%91%2C%0A%D7%90%D7%A0%D7%90%20%D7%A6%D7%A8%D7%95%20%D7%A2%D7%99%D7%9E%D7%99%20%D7%A7%D7%A9%D7%A8%20%D7%9C%D7%AA%D7%9E%D7%99%D7%9B%D7%94%20%D7%91%D7%A0%D7%95%D7%A9%D7%90%0A%28%D7%A0%D7%90%20%D7%9C%D7%A6%D7%99%D7%99%D7%9F%20%D7%A9%D7%9D%20%D7%9E%D7%9C%D7%90%20%D7%95%D7%A1%D7%99%D7%91%D7%AA%20%D7%94%D7%A4%D7%A0%D7%99%D7%94%29">
                    פתיחת צ'אט Whatsapp עם מרכז תמיכה<br />(ימים א'-ה' בין השעות 07:30 ל - 17:30)</ListGroup.Item></ListGroup.Item>

                </ListGroup>




              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container id="seperator">חיוג ישיר לתמיכה</Container>

      <Container>
        <Row id="row-2">
          <CardDeck>
            <Col lg={4} md={6}>
              <Card id="passwords">
                <Card.Title>סיסמאות</Card.Title>
                <Card.Img fluid="true" variant="top" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <Card.Body>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
      </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="warning">חיוג לצוות זכאות</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card id="citrix">
                <Card.Title>Citrix  סביבת</Card.Title>
                <Card.Img fluid="true" variant="top" src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <Card.Body>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
      </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="warning">חיוג לצוות זכאות</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card id="as400">
                <Card.Title>AS400 כוכב</Card.Title>
                <Card.Img fluid="true" variant="top" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <Card.Body>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
      </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="warning">חיוג לצוות זכאות</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card id="goodHead">
                <Card.Title>"חברת "ראש טוב</Card.Title>
                <Card.Img fluid="true" variant="top" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <Card.Body>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
      </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="warning">חיוג לצוות זכאות</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card id="doctors">
                <Card.Title>רופאים עצמאיים</Card.Title>
                <Card.Img fluid="true" variant="top" src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <Card.Body>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
      </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="warning">חיוג לצוות זכאות</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card id="docLine">
                <Card.Title>קו לרופא</Card.Title>
                <Card.Img fluid="true" variant="top" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <Card.Body>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
      </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="warning">חיוג לצוות זכאות</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card id="pay">
                <Card.Title>זכאות</Card.Title>
                <Card.Img fluid="true" variant="top" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <Card.Body>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
      </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="warning">חיוג לצוות זכאות</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card id="teleRadio">
                <Card.Title>טלרדיולוגיה</Card.Title>
                <Card.Img fluid="true" variant="top" src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <Card.Body>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
      </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="warning">חיוג לצוות זכאות</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card id="sap">
                <Card.Title>SAP</Card.Title>
                <Card.Img fluid="true" variant="top" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <Card.Body>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
      </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="warning">חיוג לצוות זכאות</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card id="equipment">
                <Card.Title>ציוד קצה</Card.Title>
                <Card.Img fluid="true" variant="top" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <Card.Body>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
      </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="warning">חיוג לצוות זכאות</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <div id="telephone"></div>
              <Card>
                <Card.Title>תקשורת וטלפוניה</Card.Title>
                <Card.Img fluid="true" variant="top" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <Card.Body>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
      </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="warning">חיוג לצוות זכאות</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card id="stations">
                <Card.Title>עמדות שירות</Card.Title>
                <Card.Img fluid="true" variant="top" src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <Card.Body>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
      </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="warning">חיוג לצוות זכאות</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card id="suppliers">
                <Card.Title>ספקים</Card.Title>
                <Card.Img fluid="true" variant="top" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <Card.Body>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
      </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="warning">חיוג לצוות זכאות</Button>
                </Card.Footer>
              </Card>
            </Col>
          </CardDeck>
        </Row>
      </Container>

    </div >
  );
}

export default App;
