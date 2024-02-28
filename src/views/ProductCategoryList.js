import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Container } from "@mui/material";
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import NavBar from "../components/navbar/Navbar2";
import Titlebars from "../components/navbar/Titlebar";
import ProductCategoryArrayList from "./ProductCategoryListArray";
import ViewImg from "./ViewImg.jpg";

function ProductCategoryList() {
  return (
    <>
      <NavBar />
      <Titlebars />
      <div
        style={{
          backgroundImage: `url(${ViewImg})`,
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
                variant="info"
                style={{ paddingRight: 30, marginTop: 30, borderRadius: 50 }}
              >
                <EditIcon />
                Edit
              </Button>{" "}
            </Col>
            <Col xs={2} md={2}>
             
            </Col>
            <Col xs={6} md={6}></Col>
            <Col xs={2} md={2}>
              <Button
                href="/ProductCategory"
                variant="success"
                style={{ paddingRight: 30, marginTop: 30, borderRadius: 50 }}
              >
                <ArrowBackIcon />
                Back
              </Button>{" "}
            </Col>
          </Row>

          <Row style={{marginTop:30}}>
            <Table striped hover>
              <thead>
                <tr>
                  <th style={{ backgroundColor: "#618685", color: "#fff" }}>
                    ID
                  </th>
                  <th style={{ backgroundColor: "#618685", color: "#fff" }}>
                    Product List
                  </th>
                  <th style={{ backgroundColor: "#618685", color: "#fff" }}>
                    Price
                  </th>
                  <th style={{ backgroundColor: "#618685", color: "#fff" }}>
                    Stock Amount
                  </th>
                  <th style={{ backgroundColor: "#618685", color: "#fff" }}>
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {ProductCategoryArrayList.map((d) => (
                  <tr key={d.v1}>
                    <td>{d.v1}</td>
                    <td>{d.v2}</td>
                    <td>{d.v4}</td>
                    <td>{d.v5}</td>
                    <td><Button>
                    <DeleteIcon />{d.v6}
                        </Button></td>
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

export default ProductCategoryList;
