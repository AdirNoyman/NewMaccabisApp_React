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
      <Container style={{ paddingTop: '5rem' }}>
        <Row className="justify-content-lg-center" id="row-1">
          <Col lg={5}>
            <Card id="selfService">
              <Card.Title>שירות עצמי<br />Self Service</Card.Title>
              <Card.Img variant="top"
                src="../images/selfservice.jpeg"
                fluid="true" />
              <Card.Body id="selfList">
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



      <Container>
        <Row><Col as="h2" className="divider gradient">חיוג ישיר לתמיכה</Col></Row>
        <Row id="row-2">
          <CardDeck>
            <Col lg={4} md={6}>
              <Card id="passwords">
                <Card.Title>סיסמאות</Card.Title>
                <Card.Img fluid="true" variant="top" src="../images/passwords.jpeg" />
                <Card.Body>
                  <ListGroup as="ul">
                    <ListGroup.Item as="li">סיסמא אישית למערכות מכבי(AD)</ListGroup.Item>
                    <ListGroup.Item as="li">סיסמת AS400("כוכב")</ListGroup.Item>
                    <ListGroup.Item as="li">סיסמת קליקס(OTP)</ListGroup.Item>
                    <ListGroup.Item as="li"><ListGroup.Item as="a" action href="../pdf/passwords.pdf" _blank="true" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</ListGroup.Item></ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer>
                  <Button as="a" href="tel:03-746-3523" variant="warning">חיוג לצוות סיסמאות</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card id="citrix">
                <Card.Title>Citrix  סביבת</Card.Title>
                <Card.Img fluid="true" variant="top" src="../images/citrix.jpeg" />
                <Card.Body>
                  <ListGroup as="ul">
                    <ListGroup.Item as="li">דואר אלקטרוני ויישומי Office</ListGroup.Item>
                    <ListGroup.Item as="li">סריקה והדפסה</ListGroup.Item>
                    <ListGroup.Item as="li"><ListGroup.Item as="a" action href="../pdf/citrix.pdf" _blank="true" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</ListGroup.Item></ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer>
                  <Button as="a" href="tel:03-746-3535" variant="warning">Citrix חיוג לצוות</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card id="as400">
                <Card.Title>AS400 כוכב</Card.Title>
                <Card.Img fluid="true" variant="top" src="../images/as400.jpeg" />
                <Card.Body>
                  <ListGroup as="ul">
                    <ListGroup.Item as="li">יישומי כוכב מכבי: חברות וגבייה</ListGroup.Item>
                    <ListGroup.Item as="li">סריקה / הדפסה ממערכות כוכב</ListGroup.Item>
                    <ListGroup.Item as="li">APPLINX / CRM</ListGroup.Item>
                    <ListGroup.Item as="li"><ListGroup.Item as="a" action href="../pdf/AS400.pdf" _blank="true" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</ListGroup.Item></ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer>
                  <Button as="a" href="tel:03-746-3529" variant="warning">AS400 חיוג לצוות</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card id="goodHead">
                <Card.Title>"חברת "ראש טוב</Card.Title>
                <Card.Img fluid="true" variant="top" src="../images/goodhead.jpeg" />
                <Card.Body>
                  <ListGroup as="ul">
                    <ListGroup.Item as="li"><ListGroup.Item as="a" action href="../pdf/emptyPdfInfo.pdf" _blank="true" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</ListGroup.Item></ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer>
                  <Button as="a" href="tel:1-800-220-110" variant="warning">"חיוג לחברת "ראש טוב</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card id="doctors">
                <Card.Title>רופאים עצמאיים</Card.Title>
                <Card.Img fluid="true" variant="top" src="../images/doctors.jpeg" />
                <Card.Body>
                  <ListGroup as="ul">
                    <ListGroup.Item as="li">קליקס / פורטל רופא</ListGroup.Item>
                    <ListGroup.Item as="li">זימון תורים לרופאים בקהילה</ListGroup.Item>
                    <ListGroup.Item as="li">תקשורת</ListGroup.Item>
                    <ListGroup.Item as="li"><ListGroup.Item as="a" action href="../pdf/doctors.pdf" _blank="true" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</ListGroup.Item></ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer>
                  <Button as="a" href="tel:03-746-3524" variant="warning">חיוג לצוות רופאים עצמאיים</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card id="docLine">
                <Card.Title>קו לרופא</Card.Title>
                <Card.Img fluid="true" variant="top" src="../images/docline.jpeg" />
                <Card.Body>
                  <ListGroup as="ul">
                    <ListGroup.Item as="li">ראש טוב</ListGroup.Item>
                    <ListGroup.Item as="li">מרכז ארצי לדימות / אישורי תרופות</ListGroup.Item>
                    <ListGroup.Item as="li">מכבי ללא הפסקה - תורים דחופים</ListGroup.Item>
                    <ListGroup.Item as="li"><ListGroup.Item as="a" action href="../pdf/emptyPdfInfo.pdf" _blank="true" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</ListGroup.Item></ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer>
                  <Button as="a" href="tel:1-800-800-180" variant="warning">"חיוג ל"קו לרופא</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card id="pay">
                <Card.Title>זכאות</Card.Title>
                <Card.Img fluid="true" variant="top" src="../images/payments.jpeg" />
                <Card.Body>
                  <ListGroup as="ul">
                    <ListGroup.Item as="li"><ListGroup.Item as="a" action href="../pdf/zakaut.pdf" _blank="true" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</ListGroup.Item></ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer>
                  <Button as="a" href="tel:03-514-3635" variant="warning">חיוג לצוות זכאות</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card id="teleRadio">
                <Card.Title>טלרדיולוגיה</Card.Title>
                <Card.Img fluid="true" variant="top" src="../images/teleradio.jpeg" />
                <Card.Body>
                  <ListGroup as="ul">
                    <ListGroup.Item as="li">דימות / תמר</ListGroup.Item>
                    <ListGroup.Item as="li">ניב"ה אולטראסאונד גניקולוגי / א.ק.ג</ListGroup.Item>
                    <ListGroup.Item as="li">טלמדיסין / קרדילוגיה</ListGroup.Item>
                    <ListGroup.Item as="li"><ListGroup.Item as="a" action href="../pdf/teleradio.pdf" _blank="true" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</ListGroup.Item></ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer>
                  <Button as="a" href="tel:03-746-3525" variant="warning">חיוג לצוות טלרדיולוגיה</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card id="sap">
                <Card.Title>SAP</Card.Title>
                <Card.Img fluid="true" variant="top" src="../images/sap.jpeg" />
                <Card.Body>
                  <ListGroup as="ul">
                    <ListGroup.Item as="li">סאפ</ListGroup.Item>
                    <ListGroup.Item as="li">פורטל סאפ ומקוונים אישית</ListGroup.Item>
                    <ListGroup.Item as="li">מכ"ם</ListGroup.Item>
                    <ListGroup.Item as="li"><ListGroup.Item as="a" action href="../pdf/SAP.pdf" _blank="true" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</ListGroup.Item></ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer>
                  <Button as="a" href="tel:03-746-3536" variant="warning">SAP חיוג לצוות</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card id="equipment">
                <Card.Title>ציוד קצה</Card.Title>
                <Card.Img fluid="true" variant="top" src="../images/equipment.jpeg" />
                <Card.Body>
                  <ListGroup as="ul">
                    <ListGroup.Item as="li">עמדת מחשב כולל מסך ומערכות הפעלה</ListGroup.Item>
                    <ListGroup.Item as="li">מדפסות וסורקים</ListGroup.Item>
                    <ListGroup.Item as="li">קורא כרטיסים</ListGroup.Item>
                    <ListGroup.Item as="li"><ListGroup.Item as="a" action href="../pdf/equipment.pdf" _blank="true" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</ListGroup.Item></ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer>
                  <Button as="a" href="tel:03-746-3530" variant="warning">חיוג לצוות ציוד קצה</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <div id="telephone"></div>
              <Card>
                <Card.Title>תקשורת וטלפוניה</Card.Title>
                <Card.Img fluid="true" variant="top" src="../images/telecom.jpeg" />
                <Card.Body>
                  <ListGroup as="ul">
                    <ListGroup.Item as="li">תקשורת / אינטרנט</ListGroup.Item>
                    <ListGroup.Item as="li">טלפוניה</ListGroup.Item>
                    <ListGroup.Item as="li">סנכרון דואר ארגוני למכשיר נייד</ListGroup.Item>
                    <ListGroup.Item as="li"><ListGroup.Item as="a" action href="../pdf/emptyPdfInfo.pdf" _blank="true" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</ListGroup.Item></ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer>
                  <Button as="a" href="tel:03-746-3527" variant="warning">חיוג לצוות תקשורת</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card id="stations">
                <Card.Title>עמדות שירות</Card.Title>
                <Card.Img fluid="true" variant="top" src="../images/servicestations.jpeg" />
                <Card.Body>
                  <ListGroup as="ul">
                    <ListGroup.Item as="li">זימון וניהול תורים</ListGroup.Item>
                    <ListGroup.Item as="li">עמדות תור לי <span style={{ color: "blue" }}>●</span> מכבי לי <span style={{ color: "blue" }}>●</span> פוטו</ListGroup.Item>
                    <ListGroup.Item as="li">Video Conference</ListGroup.Item>
                    <ListGroup.Item as="li"><ListGroup.Item as="a" action href="../pdf/emptyPdfInfo.pdf" _blank="true" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</ListGroup.Item></ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer>
                  <Button as="a" href="tel:03-746-3531" variant="warning">חיוג לצוות עמדות שירות</Button>
                </Card.Footer>
              </Card>
            </Col>
            <Col lg={4} md={6}>
              <Card id="suppliers">
                <Card.Title>ספקים</Card.Title>
                <Card.Img fluid="true" variant="top" src="../images/suppliers.jpeg" />
                <Card.Body>
                  <ListGroup as="ul">
                    <ListGroup.Item as="li">חיוב ישיר</ListGroup.Item>
                    <ListGroup.Item as="li"> מד"ח <span style={{ color: "blue" }}>●</span> מכבי לי <span style={{ color: "blue" }}>●</span> פוטו</ListGroup.Item>
                    <ListGroup.Item as="li"><ListGroup.Item as="a" action href="../pdf/emptyPdfInfo.pdf" _blank="true" rel="noopener noreferrer">למידע נוסף - לחץ על הקישור</ListGroup.Item></ListGroup.Item>
                  </ListGroup>
                </Card.Body>
                <Card.Footer>
                  <Button as="a" href="tel:03-746-3533" variant="warning">חיוג לצוות ספקים</Button>
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
