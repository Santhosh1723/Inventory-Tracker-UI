import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Titlebars from "../components/navbar/Titlebar";
import NavBar from "../components/navbar/Navbar2";
import ViewImg from "./ViewImg.jpg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@mui/icons-material/Edit";

function ProductView() {
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
      <Container>
        <Row>
        <Col xs={2} md={2}>
        <Button
              href="#"
              variant="danger"
              style={{ marginLeft:30,paddingRight: 30, marginTop: 30, borderRadius:50 }}
            >
              <DeleteIcon/>Remove
            </Button>{" "}
        </Col>
        <Col xs={2} md={2}>
        <Button
              href="/CreateProduct"
              variant="info"
              style={{ paddingRight: 30, marginTop: 30,borderRadius:50 }}
            ><EditIcon/>
              Edit
            </Button>{" "}
        </Col>
          <Col xs={6} md={6}>

          </Col>
          <Col xs={2} md={2}>
            <Button
              href="/ProductTable"
              variant="success"
              style={{ paddingRight: 30, marginTop: 30, borderRadius:50 }}
            ><ArrowBackIcon/>
              Back
            </Button>{" "}
          </Col>
        </Row>
        <Row >
          <Card border="warning" className="commoncard" >
            <Card.Header>
              <Card.Title>Product Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Camera"
                      disabled
                      readOnly
                      style={{backgroundColor:"#93a1a1"}}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={7}
                      disabled
                      readOnly
                      style={{backgroundColor:"#93a1a1"}}
                      placeholder="PERFECT GIFT IDEA: Works on wet, dry, Long, short, thick, curly, and straight hair. Perfect gift for Valentines Day, Mother's Day, Thanksgiving, Christmas, Anniversary and Birthday to your girlfriend, wife, mom, sister and friends. NOTE: Paddle brush is designed to have one missing pin on the bottom of the cushion. This is to help with air circulation and is not a product defect."
                    />
                  </Form.Group>

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCategory">
                      <Form.Label>Category</Form.Label>
                      <Form.Control
                        type="text"
                        disabled
                        readOnly
                        placeholder="Health & Beauty"
                        style={{backgroundColor:"#93a1a1"}}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPrice">
                      <Form.Label>Price</Form.Label>
                      <Form.Control
                        type="password"
                        disabled
                        readOnly
                        placeholder="1205"
                        style={{backgroundColor:"#93a1a1"}}
                      />
                    </Form.Group>
                  </Row>

                  <Form.Group>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridSellingPrice">
                        <Form.Label>Selling Price</Form.Label>
                        <Form.Control
                          type="number"
                          disabled
                          readOnly
                          placeholder="1000"
                          style={{backgroundColor:"#93a1a1"}}
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridStock">
                        <Form.Label>Stock Amount</Form.Label>
                        <Form.Control
                          type="number"
                          disabled
                          readOnly
                          style={{backgroundColor:"#93a1a1"}}
                        />
                      </Form.Group>
                    </Row>
                  </Form.Group>
                  <Form.Group>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridStstus">
                        <Form.Label>Product Visibility Status</Form.Label>
                        <Form.Control
                          type="text"
                          disabled
                          readOnly
                          placeholder="Public"
                          style={{backgroundColor:"#93a1a1"}}
                        />
                      </Form.Group>
                    </Row>
                  </Form.Group>
                </Form>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Row style={{marginTop:40}}></Row>
      </Container>
    </div></>
  );
}

export default ProductView;
