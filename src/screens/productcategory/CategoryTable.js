import VisibilityIcon from "@mui/icons-material/Visibility";
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import NavBar from "../../components/navbar/Navbar2";
import Titlebars from "../../components/navbar/Titlebar";
import Heading from "./CategoryArray";
import Istock from "./Istock.jpg";
import ListIcon from "@mui/icons-material/List";
import "./TableCategory.css";

function ProductCategory() {
  return (
    <>
      <Titlebars />
      <NavBar />
      <div
        style={{
          backgroundImage: `url(${Istock})`,
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
              <h1
                style={{
                  marginTop: 70,
                  WebkitTextStrokeColor: "white",
                  WebkitTextStrokeWidth: "2px",
                  color: "black",
                  fontWeight: 800,
                }}
              >
                Product Category Details
              </h1>
            </Col>
            <Col md={3} xs={3}>
              <Button
                className="createbutton"
                href="/CreateCategory"
                style={{ marginTop: 120, marginLeft: 90 }}
              >
                Create Category
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
          <Row style={{ marginTop: 30 }}>
            <Table striped hover>
              <thead style={{ position: "sticky", top: "0" }}>
                <tr>
                  <th style={{ backgroundColor: "#618685", color: "#fff" }}>
                    ID
                  </th>
                  <th style={{ backgroundColor: "#618685", color: "#fff" }}>
                    Name
                  </th>
                  <th style={{ backgroundColor: "#618685", color: "#fff" }}>
                    Total Product{" "}
                  </th>
                  <th style={{ backgroundColor: "#618685", color: "#fff" }}>
                    List of Product
                  </th>
                  <th style={{ backgroundColor: "#618685", color: "#fff" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {Heading.map((d) => (
                  <tr>
                    <td>{d.v1}</td>
                    <td>{d.v2}</td>
                    <td>{d.v3}</td>
                    <td>
                      <Button href="/ProductCategoryList" variant="info">
                        <ListIcon /> {d.v4}
                      </Button>
                    </td>
                    <td>
                      <Button href={d.Link} variant="link">
                        <VisibilityIcon></VisibilityIcon>
                        {d.v5}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
          <Row style={{ marginTop: 40 }}></Row>
        </Container>
      </div>
    </>
  );
}

export default ProductCategory;
