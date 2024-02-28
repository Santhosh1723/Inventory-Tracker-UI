// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Table from "react-bootstrap/Table";
// import Container from "react-bootstrap/esm/Container";
// import NewInvoicetArrayss from "./ArrayLists";
// import Row from "react-bootstrap/Row";
//  import Form from "react-bootstrap/Form";

// function NewInvoicessbb({ onAddToInvoice, onRemoveFromInvoice  }) {

//     const handleAddToInvoice = (selectedItem) => {
//       // Call the callback to add the selected item to the parent component
//       onAddToInvoice(selectedItem);
//     };

//     return (
//       <>
//         <Form>
//            <Container>
//              <Row style={{ marginTop: 50 }}>
//                <Table striped hover>
//                 <thead>
//                    <tr>
//                      <th>ID</th>
//                      <th>Product Name</th>
//                      <th>Category</th>
//                      <th>Price</th>
//                      <th>Stock</th>
//                      <th>Add Product</th>
//                    </tr>
//                  </thead>
//                  <tbody>
//                    { NewInvoicetArrayss.map((d) => (
//                      <tr key={d.v1}>
//                        <td>{d.v1}</td>
//                        <td>{d.v2}</td>
//                        <td>{d.v3}</td>
//                        <td>{d.v4}</td>
//                        <td>{d.v5}</td>

//                     <td>
//                         <Button
//                           variant="info"
//                           className="AddButton"
//                           onClick={() => handleAddToInvoice(d)}
//                         >
//                           {d.v6}
//                         </Button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </Row>
//           </Container>
//         </Form>
//       </>
//     );
//   }

// export default  NewInvoicessbb;
