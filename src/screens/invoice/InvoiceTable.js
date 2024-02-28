import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import NavBar from "../../components/navbar/Navbar2";
import Titlebars from "../../components/navbar/Titlebar";
import InvoiceArray from "./InvoiceArray";
import Istock from "./Istock.jpg";
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import PreviewIcon from '@mui/icons-material/Preview';
import VisibilityIcon from '@mui/icons-material/Visibility';
import "./Invoice.css";


//import "./TableCategory.css";
function InvoiceTable() {
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
                Invoice Details
              </h1>
            </Col>
            <Col md={3} xs={3}>
            <Button
                className="createbutton"
                href="/CreateInvoice"
                style={{ marginTop: 120, marginLeft: 90 }}
              >
                Create Invoice
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
              </Button>
         
            </Col>
          </Row>

          <Row style={{ marginTop: 30 }}>
            <Table striped hover responsive>
              <thead style={{ position: "sticky", top: "0" }}>
                <tr>
                  <th  style={{ backgroundColor: "#618685",color:"#fff" }}> ID</th>
                  <th style={{ backgroundColor: "#618685",color:"#fff" }}>Customer </th>
                  <th style={{ backgroundColor: "#618685",color:"#fff" }}>Invoice ID </th>
                  <th style={{ backgroundColor: "#618685",color:"#fff" }}>Paid </th>
                  <th style={{ backgroundColor: "#618685",color:"#fff" }}>Total </th>
                  <th style={{ backgroundColor: "#618685",color:"#fff" }}>Date</th>
                  <th style={{ backgroundColor: "#618685",color:"#fff" }}>Action</th>
                  
                
                  
               
                </tr>
              </thead>
              <tbody>
                {InvoiceArray.map((d) => (
                  <tr>
                    <td>{d.v1}</td>
                    <td>{d.v2}</td>
                    <td>{d.v3}</td>
                    <td>{d.v4}</td>
                    <td>{d.v5}</td>
                    <td>{d.v6}</td>
                    <td>
                      <Button href={d.Link}>
                       <VisibilityIcon/> {d.v7}
                      </Button>
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

export default InvoiceTable;
