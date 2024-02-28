import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Titlebars from "../../components/navbar/Titlebar";
import NavBar from "../../components/navbar/Navbar2";
import CreateImg from "./CreateImg.jpg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "./CreateEmployee.css";

function CreateEmployee() {
  return (
    <>
    <Titlebars/>
    <NavBar/>
    <div
    style={{
      backgroundImage:`url(${CreateImg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      height: "auto",
    }}
  >
      <div>
        <Container style={{width:900}}>
        <Row >
          <Card border="danger" style={{marginTop:70,borderRadius:50}} className="commoncard">
            <Card.Header>
              <Card.Title></Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
          <Form>
            
              <h3 style={{ marginTop: 30 ,textAlign:"center"}}>Create New Employee</h3>
           
            <Row style={{marginTop:40}}>
              <Col md={2}></Col>
              <Col md={8}>
                <Row style={{ marginBottom: 20 }}>
                  <Col>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First name" />
                  </Col>
                  <Col>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last name" />
                  </Col>
                </Row>
                <Row style={{ marginBottom: 20 }}>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridStatus">
                    <Form.Label>Role</Form.Label>
                    <select className="form-select">
                      <option value="Admin">Admin</option>

                      <option value="Casier">Casier</option>

                      <option value="Sales">Sales</option>
                    </select>
                  </Form.Group>
                </Row>
                <Row style={{ marginBottom: 20 }}>
                  <Form.Group as={Col} controlId="formGridPhone">
                  <Form.Label>Phone No</Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone No" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridJoinedAt">
                    <Form.Label>Joined At</Form.Label>
                    <Form.Control
                      type="date"
                     
                    />
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Name of City" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>Tamil Nadu</option>
                      <option>Kerala</option>
                      <option>Kasmir</option>
                      <option>Delhi</option>
                      <option>Andra Pradesh</option>
                      <option>Madhya Pradesh</option>
                      <option>Karnataka</option>
                      <option>Bihar</option>
                      <option>Gujarat</option>
                      <option>Harayana</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Postal code</Form.Label>
                    <Form.Control  type="Number" placeholder="Enter Pin" />
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
                      placeholder= "Experiance and Description"
                    />
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} controlId="formGridJoinedAt">
                    <Button
                      href="/EmployeeTable"
                      variant="danger"
                      style={{ paddingRight: 30, borderRadius:50 }}
                    ><ArrowBackIcon/>
                      Back
                    </Button>{" "}
                    <Button href="#submit" varient="primary" style={{borderRadius:50}}>
                      Submit
                    </Button>{" "}
                  </Form.Group>
                </Row>
              </Col>
              <Col md={2}></Col>
            </Row>
          </Form>
          </Card.Text>
          </Card.Body>
          </Card>
        </Row>
        <Row style={{marginTop:40}}></Row>
        </Container>
      </div>
    </div>
    </>
  );
}

export default CreateEmployee;
