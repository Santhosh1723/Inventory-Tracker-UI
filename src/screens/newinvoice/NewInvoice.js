////////////////////////////////// New  ///////////////////////////////////////////////////////

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
//import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
//import Heading from "./NewInvoiceArray";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Card from "react-bootstrap/Card";
import NewInvoicetArray from "./NewInvoiceArray";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RefreshIcon from "@mui/icons-material/Refresh";
import Titlebars from "../../components/navbar/Titlebar";
import NavBar from "../../components/navbar/Navbar2";
import IndianCurrency from "./IndianCurrency.jpg";
import CreateInv from "./CreateInv.jpg";
import NewInvoicecss from "./NewInvoicecss.css";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function NewInvoice({ onAddToInvoice, onRemoveFromInvoice }) {
  //////// add and remove ////////////////
  const handleAddToInvoice = (selectedItem) => {
    // Call the callback to add the selected item to the parent component
    onAddToInvoice(selectedItem);
  };
  ///////////////////////////////////////////////////////////

  /////////// search  /////////////////////////

  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(NewInvoicetArray);

  const filterProducts = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const lowerCaseCategory = category.toLowerCase();
    const filtered = NewInvoicetArray.filter(
      (product) =>
        product.v2.toLowerCase().includes(lowerCaseQuery) &&
        product.v3.toLowerCase().includes(lowerCaseCategory) &&
        product.v4.toString().includes(price)
    );
    setFilteredProducts(filtered);
  };

  const resetSearch = () => {
    setSearchQuery("");
    setCategory("");
    setPrice("");
    setFilteredProducts(NewInvoicetArray);
  };

  /////////////////////////////////////////

  return (
    <>
      <Titlebars />
      <NavBar />
      <div
        style={{
          backgroundImage: `url(${CreateInv})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "auto",
          backgroundPosition: "",
        }}
      >
        <Container>
          <Row>
            <Col md={4} xs={4}></Col>
            <Col md={5} xs={5}>
              <h3
                style={{
                  marginTop: 20,
                  WebkitTextStrokeColor: "yellow",
                  WebkitTextStrokeWidth: "1px",
                  color: "white",
                  fontWeight: 800,
                }}
              >
                Search & Add Product
              </h3>
            </Col>
            <Col md={1} xs={1}> </Col>
            <Col  md={2} xs={2}>
              <Button
                href="/CreateInvoice"
                variant="danger"
                style={{ paddingRight: 30, marginTop: 30, borderRadius: 50 }}
              >
                <ArrowBackIcon />
                Back
              </Button>
            </Col>
          </Row>

          <Row style={{ marginTop: -20 }}>
            <Card
              className="commoncard"
              style={{ maxHeight: "300px", overflowY: "auto" }}
            >
              <Form style={{ marginTop: "10px" }}>
                <Row>
                  <Col xs={2} md={2}></Col>
                  <Col>
                    <Form.Control
                      style={{ border: "2px solid cadetblue" }}
                      placeholder="Product Name"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onBlur={filterProducts}
                    />
                  </Col>
                  <Col>
                    <Form.Group controlId="formGridState">
                      <Form.Select
                        style={{ border: "2px solid cadetblue" }}
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        onBlur={filterProducts}
                      >
                        <option value="">Choose category</option>
                        <option value="Hardwares">Hardwares</option>
                        <option value="Computer Accessories">
                          Computer Accessories
                        </option>
                        <option value="Health & Beauty ">
                          Health & Beauty
                        </option>
                        <option value="Watch & Sunglasses">
                          Watch & Sunglasses
                        </option>
                        <option value="Computer & Laptop">
                          Computer & Laptop
                        </option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Control
                      style={{ border: "2px solid cadetblue" }}
                      placeholder="Price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      onBlur={filterProducts}
                    />
                  </Col>
                  <Col>
                    <Button
                      variant="success"
                      onClick={filterProducts}
                      className="Commonbuttongreen"
                    >
                      <SearchIcon></SearchIcon>
                      Search
                    </Button>{" "}
                  </Col>
                  <Col>
                    {(searchQuery || category || price) && (
                      <Button
                        variant="danger"
                        onClick={resetSearch}
                        style={{ borderRadius: 50 }}
                      >
                        <RefreshIcon></RefreshIcon>
                        Reset
                      </Button>
                    )}
                  </Col>
                </Row>
              </Form>

              <Card.Body>
                <Row>
                  <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                    <Table striped hover>
                      <thead style={{ position: "sticky", top: "0" }}>
                        <tr className="row-height-head">
                          <th
                            style={{
                              backgroundColor: "#618685",
                              color: "#fff",
                            }}
                          >
                            ID
                          </th>
                          <th
                            style={{
                              backgroundColor: "#618685",
                              color: "#fff",
                            }}
                          >
                            Product Name
                          </th>
                          <th
                            style={{
                              backgroundColor: "#618685",
                              color: "#fff",
                            }}
                          >
                            Category
                          </th>
                          <th
                            style={{
                              backgroundColor: "#618685",
                              color: "#fff",
                            }}
                          >
                            Price
                          </th>
                          <th
                            style={{
                              backgroundColor: "#618685",
                              color: "#fff",
                            }}
                          >
                            Stock Amount
                          </th>
                          <th
                            style={{
                              backgroundColor: "#618685",
                              color: "#fff",
                            }}
                          >
                            Add Product
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredProducts.map((d) => (
                          <tr key={d.v1} className="row-height">
                            <td>{d.v1}</td>
                            <td>{d.v2}</td>
                            <td>{d.v3}</td>
                            <td>{d.v4}</td>
                            <td>{d.v5}</td>
                            <td>
                              <Button
                                variant="info"
                                className="AddButton"
                                onClick={() => handleAddToInvoice(d)}
                              ><AddCircleIcon/>
                                {d.v6}
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </Row>
          <Row style={{ marginTop: "20px" }}></Row>
        </Container>
      </div>
    </>
  );
}

export default NewInvoice;
//////////////////////////////////////////////////////////////////////////////////////////

/* import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
//import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
//import Heading from "./NewInvoiceArray";
import React, { useState } from "react";
import NewInvoicetArray from "./NewInvoiceArray";
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RefreshIcon from '@mui/icons-material/Refresh';

function NewInvoice({props, onAddToInvoice, onRemoveFromInvoice }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(NewInvoicetArray);

  const filterProducts = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const lowerCaseCategory = category.toLowerCase();
    const filtered = NewInvoicetArray.filter(
      (product) =>
        product.v2.toLowerCase().includes(lowerCaseQuery) &&
        product.v3.toLowerCase().includes(lowerCaseCategory) &&
        product.v4.toString().includes(price)
    );
    setFilteredProducts(filtered);
  };

  const resetSearch = () => {
    setSearchQuery("");
    setCategory("");
    setPrice("");
    setFilteredProducts(NewInvoicetArray);
  };

  /////////////////////////////////////

  const handleAddToInvoice = (selectedItem) => {
    // Call the callback to add the selected item to the parent component
    onAddToInvoice(selectedItem);
  };
  

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Search & Add Product
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Container style={{ marginTop: 5 }}>
          <Row>
            <h5>New Invoice</h5>
          </Row>

          <Row style={{ marginTop: 50 }}>
            <Form>
              <Row>
                <Col xs={1}></Col>
                <Col>
                  <Form.Control
                    style={{ border: "2px solid cadetblue" }}
                    placeholder="Product Name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onBlur={filterProducts}
                  />
                </Col>
                <Col>
                  <Form.Group controlId="formGridState">
                    <Form.Select
                      style={{ border: "2px solid cadetblue" }}
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      onBlur={filterProducts}
                    >
                      <option value="">Choose category</option>
                      <option value="Hardwares">Hardwares</option>
                      <option value="Computer Accessories">
                        Computer Accessories
                      </option>
                      <option value="Health & Beauty ">Health & Beauty</option>
                      <option value="Watch & Sunglasses">
                        Watch & Sunglasses
                      </option>
                      <option value="Computer & Laptop">
                        Computer & Laptop
                      </option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Control
                    style={{ border: "2px solid cadetblue" }}
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    onBlur={filterProducts}
                  />
                </Col>
                <Col>
                  <Button className="Commonbuttongreen" onClick={filterProducts}><SearchIcon></SearchIcon>
                    Search
                  </Button>{" "}
                </Col>
                <Col >
                  {(searchQuery || category || price) && (
                    <Button variant="danger" style={{borderRadius:50}} onClick={resetSearch}><RefreshIcon></RefreshIcon>
                      Reset
                    </Button>
                  )}
                </Col>
              </Row>
            </Form>
          </Row>

          <Row style={{ marginTop: 20 }}>
            <Table striped hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Product Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Add Product</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((d) => (
                  <tr key={d.v1}>
                    <td>{d.v1}</td>
                    <td>{d.v2}</td>
                    <td>{d.v3}</td>
                    <td>{d.v4}</td>
                    <td>{d.v5}</td>
                    <Button
                        variant="info"
                        className="AddButton"
                        onClick={() => handleAddToInvoice(d)}
                      >
                        {d.v6}
                      </Button>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} variant="danger" style={{borderRadius:50}}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default NewInvoice;
*/

///////////////////////////////////////////////////////////////////////////////////////////

/* function NewInvoice() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  ); 
} 
 */
