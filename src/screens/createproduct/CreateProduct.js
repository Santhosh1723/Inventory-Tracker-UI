
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Titlebars from "../../components/navbar/Titlebar";
import NavBar from "../../components/navbar/Navbar2";
import CreateImg from "./CreateImg.jpg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function CreateProduct()
{
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
        <Container style={{width:1100}}>
        <Row >
          <Card border="warning"  className="commoncard">
            <Card.Header>
              <Card.Title></Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>

          <Form>
            <h3  style={{ marginTop: 30, textAlign:"center"}}>Create New Product</h3>
            
            <Row>
            <Col md={2}></Col>
            <Col md={8}>
            <Row >
                <Form.Label style={{marginTop:20}}>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Name of the Product" />
                <Row style={{marginBottom:30}}></Row>
                
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder= "Basic Info About Product"
                    />
                  </Form.Group>
           
           
            </Row>
            <Row style={{marginBottom:30}}>
              <Form.Group as={Col} controlId="formGridCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" placeholder="Type of Product" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPrice">
                <Form.Label>Product Price</Form.Label>
                <Form.Control type="text" placeholder="Price of an Product" />
              </Form.Group>
            </Row>
            <Row style={{marginBottom:20}}>
              <Form.Group as={Col} controlId="formGridSellingPrice">
                <Form.Label>Selling Price</Form.Label>
                <Form.Control type="text" placeholder="Price to sale" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridStock">
                <Form.Label>Stoct Amount</Form.Label>
                <Form.Control type="text" placeholder="Quantity" />
              </Form.Group>
            </Row>
            <Row>
            <Form.Group as={Col} controlId="formGridJoinedAt">
            <Button href="/ProductTable" variant="danger" style={{paddingRight:30,borderRadius:50}}><ArrowBackIcon/> Back</Button>{" "}
            <Button href="#submit" variant="primary" style={{borderRadius:50}}>Submit</Button>{" "}
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
    </div></>
  );
}

export default CreateProduct;
