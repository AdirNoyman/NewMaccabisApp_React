import React from 'react';
import './App.css';
import { SelfServiceCard } from './SelfServiceCard';
import CallCardsList from './CallCardsList';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Button,
  Icon,
  Item,
  Label,
  Step,
  Table,
  Card,
} from 'semantic-ui-react';

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
      {/* <SelfServiceCard />
      <CallCardsList cards={callCards} /> */}
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image size='mini' src='/logo.png' style={{ marginRight: '1.5rem' }} />
            מרכז תמיכה - נתב ויזואלי
        </Menu.Item>
          <Menu.Item as='a'>Home</Menu.Item>

          <Dropdown item simple text='תפריט'>
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>

      <Container text style={{ marginTop: '7em' }}>
        <Header as='h1'>Semantic UI React Fixed Template</Header>
        <p>This is a basic fixed menu template using fixed size containers.</p>
        <p>
          A text container is used for the main container, which is useful for single column layouts.
      </p>

      </Container>

      <Segment inverted vertical style={{ margin: '5rem 0 0 0', padding: '1em 0em', background: '#1743b2' }}>
        <Container textAlign='center'>
          <h1>חיוג ישיר לתמיכה</h1>
        </Container>
      </Segment>
      <Segment style={{ background: '#00aeff', marginTop: 0, borderRadius: 0, paddingBottom: '3rem', padding: '5px 5px 5px' }}>
        <Container text style={{ marginTop: '2em' }}>
          <Grid columns={2} doubling stackable>
            <Grid.Column>

              <Card style={{ width: '100%' }}>
                <Card.Header style={{ textAlign: 'center', color: 'white', padding: '0.8rem', fontWeight: 'bold', fontSize: '1.5rem', background: '#0e1d8e' }}>זכאות</Card.Header>

                <Image src='https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' wrapped ui={false} />

                <Card.Content>


                  <Card.Description>
                    Daniel is a comedian living in Nashville.
                    Daniel is a comedian living in Nashville.
                    Daniel is a comedian living in Nashville.
      </Card.Description>
                </Card.Content>
                <Card.Content style={{ textAlign: 'center' }}>
                  <Button color='orange'>חיוג לצוות זכאות</Button>
                </Card.Content>

              </Card>

            </Grid.Column>
            <Grid.Column>
              <Segment>Content</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>Content</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>Content</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>Content</Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>Content</Segment>
            </Grid.Column>
          </Grid>

        </Container>
      </Segment>
    </div>
  );
}

export default App;
