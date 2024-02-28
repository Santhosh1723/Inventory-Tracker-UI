import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/esm/Container";
import CreateInv from "./CreateInv.jpg";
import Row from "react-bootstrap/Row";
import DeleteIcon from '@mui/icons-material/Delete';


function BillingProducts({ selectedItems, onRemoveFromInvoice }) {
  const handleRemoveFromInvoice = (itemId) => {
    // Call the callback to remove the selected item from the parent component
    onRemoveFromInvoice(itemId);
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${CreateInv})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "620px",
          backgroundPosition: "",
        }}
      >
        <Container>
        <Row>
        
            <h3
              style={{
               
                
                textAlign: "center",
                WebkitTextStrokeColor: "yellow",
                WebkitTextStrokeWidth: "1px",
                color: "white",
                fontWeight: 800,
              }}
            >
              Billing Products
            </h3>
          </Row>
          <div style={{ maxHeight: "500px", overflowY: "auto" }}>
            <Table striped hover>
              <thead style={{ position: "sticky", top: "0" }}>
                <tr>
                  <th style={{ backgroundColor: "#618685", color: "#fff" }}>
                    ID
                  </th>
                  <th style={{ backgroundColor: "#618685", color: "#fff" }}>
                    Product Name
                  </th>
                  <th style={{ backgroundColor: "#618685", color: "#fff" }}>
                    Quantity
                  </th>
                  <th style={{ backgroundColor: "#618685", color: "#fff" }}>
                    Price
                  </th>
                  <th style={{ backgroundColor: "#618685", color: "#fff" }}>
                    Sub.Total
                  </th>
                  <th style={{ backgroundColor: "#618685", color: "#fff" }}>
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectedItems.map((item) => (
                  <tr key={item.v1}>
                    <td>{item.v1}</td>
                    <td>{item.v2}</td>
                    <td>qty</td>
                    <td>{item.v4}</td>
                    <td>total</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => handleRemoveFromInvoice(item.v1)}
                      ><DeleteIcon/>
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
           
          </div>
          <Row style={{marginTop:"10px"}}>
          <Button className="submitbutton type1"  href="/CreateInvoice"> 
                  Submit
                </Button>
                </Row>
        </Container>
        <Row style={{marginTop:10}}></Row>
      </div>
    </>
  );
}
export default BillingProducts;
