import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Titlebars from "../components/navbar/Titlebar";
import NavBar from "../components/navbar/Navbar2";
import ViewImg from "./ViewImg.jpg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@mui/icons-material/Edit";

function EmployeeView() {
  return (
    <>
    <Titlebars/>
    <NavBar/>
    <div
    style={{
        backgroundImage:`url(${ViewImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "auto",
        backgroundPosition: "",
      }}
    >
      <div>
        <Container style={{width:1000}}>
        <Row>
        <Col xs={2} md={2}>
        <Button
              href="#"
              variant="danger"
              style={{ paddingRight: 30, marginTop: 30,borderRadius:50 }}
            ><DeleteIcon/>
              Remove
            </Button>{" "}
        </Col>
        <Col xs={2} md={2}>
        <Button
              href="/CreateEmployee"
              variant="info"
              style={{ paddingRight: 30, marginTop: 30,borderRadius:50 }}
            ><EditIcon/>
              Edit
            </Button>{" "}
        </Col>
        <Col xs={6} md={6}></Col>
        <Col xs={2} md={2}>
          
            <Button
              href="/EmployeeTable"
              variant="success"
              style={{ paddingRight: 30, marginTop: 30,borderRadius:50 }}
            ><ArrowBackIcon/>
              Back
            </Button>{" "}
          </Col>
        </Row>
        <Row>
          <Card border="danger" className="commoncard"  >
            <Card.Header>
              <Card.Title style={{textAlign:'center'}}>Employee Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>

          <Form>
           
            <Row>
              <Col md={2}></Col>
              <Col md={8}>
                <Row style={{ marginBottom: 20 }}>
                  <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Santhosh" readOnly disabled style={{backgroundColor:"#93a1a1"}}/>
                  </Col>
                  <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Kumar" readOnly disabled style={{backgroundColor:"#93a1a1"}} />
                  </Col>
                </Row>
                <Row style={{ marginBottom: 20 }}>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Santhosh17@gmail.com" readOnly disabled style={{backgroundColor:"#93a1a1"}}/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridStatus">
                    <Form.Label>Role</Form.Label>
                    <select className="form-select" readOnly disabled style={{backgroundColor:"#93a1a1"}}>
                      <option value="Admin">Admin</option>

                      <option value="Casier">Casier</option>

                      <option value="Sales">Sales</option>
                    </select>
                  </Form.Group>
                </Row>
                <Row style={{ marginBottom: 20 }}>
                  <Form.Group as={Col} controlId="formGridPhone">
                    <Form.Label>Phone No</Form.Label>
                    <Form.Control type="Number" placeholder="9988776655"style={{backgroundColor:"#93a1a1"}} readOnly disabled/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridJoinedAt">
                    <Form.Label>Joined At</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="01-01-2000"
                      readOnly disabled
                      style={{backgroundColor:"#93a1a1"}}
                    />
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control placeholder=" no:101-2, ram studio,Adyar,chennai" style={{backgroundColor:"#93a1a1"}}  readOnly disabled />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Chennai" style={{backgroundColor:"#93a1a1"}} readOnly disabled />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose..." style={{backgroundColor:"#93a1a1"}} readOnly disabled>
                      <option>Tamil Nadu</option>
                     
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Postal code</Form.Label>
                    <Form.Control  type="Number" placeholder="717821" style={{backgroundColor:"#93a1a1"}} readOnly disabled />
                  </Form.Group>
                </Row>
                <Row>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Description & Experiance</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder= "Worked at amazon as sales Executive for  years and flipcart shipment dealer for 2 years. HAving a sales and Shippment Knowledge"
                      style={{backgroundColor:"#93a1a1"}} readOnly disabled
                    />
                  </Form.Group>
                </Row>
               
              </Col>
             
            </Row>
          </Form>
          </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Row style={{marginTop:40}}></Row>
        </Container>
      </div>
    </div></>
  );
}

export default EmployeeView;
