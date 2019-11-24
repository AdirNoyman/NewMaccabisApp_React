import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



class NavBar extends Component {

    state = {

        static: { position: 'fixed' }
    }


    turnNavToStatic = () => this.setState({ static: { position: 'static' } });

    render() {

        let staticNav = this.state.static;

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" style={staticNav}>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand href="#home">מרכז תמיכה - נתב ויזואלי</Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#startPage" onClick={this.turnNavToStatic}>ראשי</Nav.Link>
                        <Nav.Link href="#selfService" onClick={this.turnNavToStatic}>שירות עצמי</Nav.Link>
                        <Nav.Link href="#passwords" onClick={this.turnNavToStatic}>סיסמאות</Nav.Link>
                        <Nav.Link href="#citrix" onClick={this.turnNavToStatic}>Citrix  סביבת</Nav.Link>
                        <Nav.Link href="#as400" onClick={this.turnNavToStatic}>AS400 כוכב</Nav.Link>
                        <Nav.Link href="#goodHead" onClick={this.turnNavToStatic}>חברת "ראש טוב"</Nav.Link>
                        <Nav.Link href="#doctors" onClick={this.turnNavToStatic}>רופאים עצמאיים</Nav.Link>
                        <Nav.Link href="#docLine" onClick={this.turnNavToStatic}>קו לרופא</Nav.Link>
                        <Nav.Link href="#pay" onClick={this.turnNavToStatic}>זכאות</Nav.Link>
                        <Nav.Link href="#teleRadio" onClick={this.turnNavToStatic}>טלרדיולוגיה</Nav.Link>
                        <Nav.Link href="#sap" onClick={this.turnNavToStatic}>SAP</Nav.Link>
                        <Nav.Link href="#equipment" onClick={this.turnNavToStatic}>ציוד קצה</Nav.Link>
                        <Nav.Link href="#telephone" onClick={this.turnNavToStatic}>תקשורת וטלפוניה</Nav.Link>
                        <Nav.Link href="#stations" onClick={this.turnNavToStatic}>עמדות שירות</Nav.Link>
                        <Nav.Link href="#suppliers" onClick={this.turnNavToStatic}>ספקים</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        );
    }

}

export default NavBar;
