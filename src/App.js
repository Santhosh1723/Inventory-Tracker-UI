import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/authentication/Login";
import SignUp from "./components/authentication/SignUP";
import CreateCategory from "./screens/createcategory/CreateCategory";
import CreateEmployee from "./screens/createemployee/CreateEmployee";
//import CreateInvoice from "./screens/createinvoice/CreateInvoice";
import CreateProduct from "./screens/createproduct/CreateProduct";
import Dashboard from "./screens/dashboard/Dashboard";
import EmployeeTable from "./screens/employee/EmployeeTable";
import InvoiceTable from "./screens/invoice/InvoiceTable";
import CreateInvoice from "./screens/createinvoice/CreateInvoice";
import NewInvoice from "./screens/newinvoice/NewInvoice";
import ProductTable from "./screens/productList/ProductTable";
import ProductCategory from "./screens/productcategory/CategoryTable";
import ShopOwnerDetails from "./screens/shop/ShopOwnerDetails";
import UserProfile from "./screens/shop/UserProfile";
import CategoryView from "./views/CategoryView";
import EmployeeView from "./views/Employeevew";
import InvoiceView from "./views/InvoiceView";
import ProductCategoryList from "./views/ProductCategoryList";
import ProductView from "./views/productview";
import BillingProducts from "./screens/newinvoice/BillingProducts";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./landingpage/Navbar";
import Footer from "./landingpage/Footer/Footer";

function App() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleAddToInvoice = (selectedItem) => {
    // Add the selected item to the state
    setSelectedItems((prevItems) => [...prevItems, selectedItem]);
  };

  const handleRemoveFromInvoice = (itemId) => {
    // Remove the selected item from the state
    setSelectedItems((prevItems) =>
      prevItems.filter((item) => item.v1 !== itemId)
    );
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route exact path='/' element={<> <Navbar/><Home /><Footer/></>} />
        <Route path='/about' element={<> <Navbar/><About /><Footer/></>} />
          <Route path='/contact' element={<> <Navbar/><Contact /><Footer/></>} />
          <Route path="/Login" element={<Login />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/EmployeeTable" element={<EmployeeTable />} />
          <Route path="/ProductCategory" element={<ProductCategory />} />
          <Route path="/ProductTable" element={<ProductTable />} />
          <Route path="/InvoiceTable" element={<InvoiceTable />} />
          <Route path="/CreateEmployee" element={<CreateEmployee />} />
          <Route path="/CreateProduct" element={<CreateProduct />} />
          <Route path="/CreateCategory" element={<CreateCategory />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/ProductCategoryList"  element={<ProductCategoryList />}/>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ProductView" element={<ProductView />} />
          <Route path="/EmployeeView" element={<EmployeeView />} />
          <Route path="/CategoryView" element={<CategoryView />} />
          <Route path="/InvoiceView" element={<InvoiceView />} />
          <Route path="/ShopOwnerDetails" element={<ShopOwnerDetails />} />
        
          <Route
            path="/NewInvoice"
            element={
              <>
                <NewInvoice onAddToInvoice={handleAddToInvoice} />
                <BillingProducts selectedItems={selectedItems} onRemoveFromInvoice={handleRemoveFromInvoice} />
              </>
            }
          />
      
          <Route path="/CreateInvoice" element={ <CreateInvoice />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

//////////////////////////////////////////

/*
 <Route path="/NewInvoice" element={ <BillingProducts selectedItems={selectedItems} onRemoveFromInvoice={handleRemoveFromInvoice} />} />
 
here I need to render two components with a single route, When the path NewInvoice is called that time I need to render two components such as NewInvoice and BillingProducts , give me a code I needed 

import React, { useState } from "react";
//import { CreateInvoice, NewInvoice } from "./YourComponentPath";
//import { CreateInvoicess,NewInvoicess } from "./search/rough";
//import CreateInvoicess from "./search/rough";
//import NewInvoicess from "./search/newtable";
import CreateInvoicesaa from "./search/BillArea";
import NewInvoicessbb from "./search/ListArea";

function App() {

  const [selectedItems, setSelectedItems] = useState([]);

  const handleAddToInvoice = (selectedItem) => {
    // Add the selected item to the state
    setSelectedItems((prevItems) => [...prevItems, selectedItem]);
  };

  const handleRemoveFromInvoice = (itemId) => {
    // Remove the selected item from the state
    setSelectedItems((prevItems) => prevItems.filter((item) => item.v1 !== itemId));
  };

  return (
    <>
      < NewInvoicessbb onAddToInvoice={handleAddToInvoice} />
      < CreateInvoicesaa selectedItems={selectedItems} onRemoveFromInvoice={handleRemoveFromInvoice}/>
    </>
  );
}

export default App;
*/