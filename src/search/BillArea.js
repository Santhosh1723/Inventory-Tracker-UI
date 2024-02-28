// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Table from "react-bootstrap/Table";
// import Container from "react-bootstrap/esm/Container";
// //import NewInvoicetArrayss from "./ArrayLists";

// function CreateInvoicesaa({ selectedItems, onRemoveFromInvoice }) {
//     const handleRemoveFromInvoice = (itemId) => {
//         // Call the callback to remove the selected item from the parent component
//         onRemoveFromInvoice(itemId);
//       };
//   return (
//     <>
//       <div>
//         <Container>
//           <Table striped hover>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Product Name</th>
//                 <th>Quantity</th>
//                 <th>Price</th>
//                 <th>Sub.Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               {selectedItems.map((item) => (
//                 <tr key={item.v1}>
//                   <td>{item.v1}</td>
//                   <td>{item.v2}</td>
//                   <td>qty</td>
//                   <td>{item.v4}</td>
//                   <td>total</td>
//                   <Button
//                       variant="danger"
//                       onClick={() => handleRemoveFromInvoice(item.v1)}
//                     >
//                       Remove
//                     </Button>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </Container>
//       </div>
//     </>
//   );
// }

// export default CreateInvoicesaa;
