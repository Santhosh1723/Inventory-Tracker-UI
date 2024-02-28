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
import { grey } from "@mui/material/colors";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from "@mui/icons-material/Edit";

function CategoryView() {
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
              style={{  marginTop: 30,borderRadius:50 }}
            ><DeleteIcon/>
              Remove
            </Button>{" "}
          </Col>
          <Col xs={2} md={2}>
        <Button
              href="/CreateCategory"
              variant="info"
              style={{ paddingRight: 30, marginTop: 30,borderRadius:50 }}
            ><EditIcon/>
              Edit
            </Button>{" "}
        </Col>
          <Col xs={6} md={6} ></Col>
          <Col xs={2} md={2} >
            <Button
              href="/ProductCategory"
              variant="success"
              style={{ paddingRight: 30, marginTop: 30,borderRadius:50 }}
            ><ArrowBackIcon/>
              Back
            </Button>{" "}
          </Col>
        </Row>
        <Row>
          <Card border="danger" className="commoncard">
            <Card.Header>
              <Card.Title style={{textAlign:'center',marginTop:10}}>Product Category Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>

              <Form>
            
            <Row>
            <Col md={2} xs={1}></Col>
            <Col md={8} xs={10}>
            <Row style={{marginBottom:20}}>
                <Form.Label>Category Name</Form.Label>
                <Form.Control type="text" placeholder="Computer and Accessories" readOnly disabled style={{backgroundColor:"#93a1a1"}}/>
                <Row style={{marginBottom:20}}></Row>
                <Form.Label>Category ID</Form.Label>
                <Form.Control type="text" placeholder="c147" readOnly disabled muted style={{backgroundColor:"#93a1a1"}}/>
            </Row>
            <Row>
            <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={7}
                      disabled
                      readOnly
                      style={{backgroundColor:"#93a1a1"}}
                      placeholder="PERFECT GIFT IDEA: Works on wet, dry, Long, short, thick, curly, and straight hair. Perfect gift for Valentines Day, Mother's Day, Thanksgiving, Christmas, Anniversary and Birthday to your girlfriend, wife, mom, sister and friends. NOTE: Paddle brush is designed to have one missing pin on the bottom of the cushion. This is to help with air circulation and is not a product defect."
                    />
            </Row>
            <Row style={{marginBottom:30}}>
              <Form.Group as={Col} controlId="formGridNew">
                <Form.Label>Created At</Form.Label>
                <Form.Control type="Date"  placeholder="17/10/2003" readOnly disabled style={{backgroundColor:"#93a1a1"}} />
              </Form.Group>

             
            </Row>
           
          
            </Col>
            <Col md={2} xs={1}></Col>
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

export default CategoryView;
