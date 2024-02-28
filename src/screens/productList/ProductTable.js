import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import NavBar from "../../components/navbar/Navbar2";
import Titlebars from "../../components/navbar/Titlebar";
import IndianCurrency from "./IndianCurrency.jpg";
import ProductArray from "./ProductArray";
import VisibilityIcon from "@mui/icons-material/Visibility";

function ProductTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(ProductArray);

  const filterProducts = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const lowerCaseCategory = category.toLowerCase();
    const filtered = ProductArray.filter(
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
    setFilteredProducts(ProductArray);
  };

  return (
    <>
      <Titlebars />
      <NavBar />
      <div
        style={{
          backgroundImage: `url(${IndianCurrency})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "auto",
          backgroundPosition: "",
        }}
      >
        <Container>
          <Row>
            <Col md={4} xs={4}></Col>
            <Col md={4} xs={4}>
              <h1
                style={{
                  marginTop: 70,
                  WebkitTextStrokeColor: "white",
                  WebkitTextStrokeWidth: "2px",
                  color: "black",
                  fontWeight: 800,
                }}
              >
                Product Details
              </h1>
            </Col>
            <Col md={1} xs={1}></Col>

            <Col md={3} xs={3}>
              <Button
                className="createbutton"
                href="/CreateProduct"
                style={{ marginTop: 120, marginLeft: 90 }}
              >
                Create Product
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="createicon"
                >
                  <path
                    clipRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </Button>{" "}
            </Col>
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
                  <Button variant="success" onClick={filterProducts} className="Commonbuttongreen">
                    <SearchIcon></SearchIcon>
                    Search
                  </Button>{" "}
                </Col>
                <Col>
                  {(searchQuery || category || price) && (
                    <Button variant="danger" onClick={resetSearch} style={{borderRadius:50}}>
                      <RefreshIcon></RefreshIcon>
                      Reset
                    </Button>
                  )}
                </Col>
              </Row>
            </Form>
          </Row>

          <Row style={{ marginTop: 30 }}>
            <Table striped hover>
              <thead style={{ position: "sticky", top: "0" }}>
                <tr>
                  <th   style={{ backgroundColor: "#618685",color:"#fff" }}>ID</th>
                  <th  style={{ backgroundColor: "#618685",color:"#fff" }}>Name</th>
                  <th  style={{ backgroundColor: "#618685",color:"#fff" }}>Category</th>
                  <th  style={{ backgroundColor: "#618685",color:"#fff" }}>Price</th>
                  <th  style={{ backgroundColor: "#618685",color:"#fff" }}>Stock Amount</th>
                  <th  style={{ backgroundColor: "#618685",color:"#fff" }}>Action</th>
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
                    <td>
                      <Button href={d.Link}><VisibilityIcon/>{d.v6}</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
          <Row style={{marginTop:40}}></Row>
        </Container>
      </div>
    </>
  );
}

export default ProductTable;
