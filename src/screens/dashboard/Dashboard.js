import ForwardIcon from "@mui/icons-material/Forward";
import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/esm/Button";
import NavBar from "../../components/navbar/Navbar2";
import Titlebars from "../../components/navbar/Titlebar";
//import MyVerticallyCenteredModal from "../newinvoice/NewInvoice";
import "./Dashboard.css";
import Istock from "./Istock.jpg";

function Dashboard() {
  //const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <Titlebars />
      <NavBar />
      <div
        style={{
          backgroundImage: `url(${Istock})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: 670,
          backgroundPosition: "",
        }}
      >
        <Container>
          <Row>
            <Col md={4} xs={12}>
              {" "}
              <Card 
              className="hovercard-client" 
                //className="shadow-lg  bg-white rounded"
                style={{ width: "18rem", margin: 10, marginTop: 80 }}
              >
                


                <Card.Body>
                  <Card.Title>Total Products</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Sales Today
                  </Card.Subtitle>
                  <Form.Control
                    type="text"
                    placeholder="2500"
                    disabled
                    readOnly
                  />
                  <br></br>
                  <Button
                    variant="primary"
                    href="ProductTable"
                    className="button"
                  >
                    <ForwardIcon />
                    <span
                      className="button-content"
                      style={{ marginTop: "15px" }}
                    >
                      Go to Cart
                    </span>
                  </Button>
                  <Card.Link href="#"></Card.Link>
                </Card.Body>
              
              </Card>
            </Col>
            <Col md={4} xs={12}>
              {" "}
              <Card
                className="hovercard-client" 
                //className="shadow-lg  bg-white rounded"
                style={{
                  width: "18rem",
                  margin: 10,
                  backgroundColor: "",
                  marginTop: 80,
                }}
              >
                <Card.Body>
                  <Card.Title>Total Invoice</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Biling Today
                  </Card.Subtitle>
                  <Form.Control
                    type="text"
                    placeholder="500"
                    disabled
                    readOnly
                  />
                  <br></br>
                  <Button
                    variant="primary"
                    href="InvoiceTable"
                    className="button"
                  >
                    <ForwardIcon></ForwardIcon>
                    <span className="button-content">Go to Invoice</span>
                  </Button>
                  <Card.Link href="#"></Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} xs={12}>
              {" "}
              <Card
              className="hovercard-client" 
                //className="shadow-lg  bg-white rounded"
                style={{
                  width: "18rem",
                  margin: 10,
                  backgroundColor: "",
                  marginTop: 80,
                }}
              >
                <Card.Body>
                  <Card.Title>Total Sell Today</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Income Today
                  </Card.Subtitle>
                  <Form.Control
                    type="text"
                    placeholder="2500"
                    disabled
                    readOnly
                  />
                  <br></br>

                  <Button href="/NewInvoice" className="button">
                    <ForwardIcon />
                    <span className="button-content">Go To Sales</span>
                  </Button>

              
                  <Card.Link href="#"></Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Dashboard;
