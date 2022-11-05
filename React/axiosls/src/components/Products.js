import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useState } from "react";
import AddProducts from "./Addproduct";
import EditProduct from "./Editproduct";

function getData(){
    const storeData= localStorage.getItem("saveData")
    if(storeData){
      return JSON.parse(storeData)
    }else{
     return []
    }
  }
function Products() {
  const [showAddModal, setshowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false)
  const [selectedProduct, setselectedProduct] = useState({})
  const [idNum, setidNum] = useState()
  const [dispalyProduct, setdispalyProduct] = useState(getData());
  console.log("dispalyProduct", dispalyProduct);
  console.log("selectedProduct",selectedProduct);



useEffect(()=> {
let loadData=localStorage.getItem("saveData");
const loadedData=JSON.parse(loadData);
if(loadedData!==null) setdispalyProduct(loadedData)
},[])

  let hideAddModal = () => {
    setshowAddModal(false); 
  };

  let hideEditModal = () => {
    setShowEditModal(false); 
  };


 let editProduct=(val,id)=>{
  console.log(val)
  setselectedProduct(val)
  setshowAddModal(true)
  setidNum(id)
 }


 let deleteProduct=(id)=>{
  let updatedList=[...dispalyProduct].filter((dispalyProduct)=>dispalyProduct.id===id)
  setdispalyProduct(updatedList)
 }

 

  let getDetails = (details) => {
    let copy = [...dispalyProduct];
    copy.push(details)
    setdispalyProduct(copy); 
  };

  let getEditedDetails=(details)=>{
    let copy = [...dispalyProduct];
    copy.splice(idNum,1,details)
    setdispalyProduct(copy); 

  }

 

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Description</th>
            <th>Product Image</th>
            <th>
              <Button
                variant="primary"
                onClick={() => {
                  setshowAddModal(true);
                }}
              >
            ➕
              </Button>{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {dispalyProduct.map((val,id) => {
            return (
              <tr key={id}>
                <td>{val.productName}</td>
                <td>{val.productPrice}</td>
                <td>{val.productDescription}</td>
                <td>
                  <img src={val.productImageURL} alt={val.productName} />
                </td>
                <td><Button variant="warning" onClick={() => { editProduct(val,id) }}>✍</Button>{' '}
                <Button variant="warning" onClick={() => { deleteProduct(id) }}>🚮</Button>{' '}</td>
          
              </tr>
            );
          })}
        </tbody>
      </Table>

      <AddProducts
        showAddModal={showAddModal}
        hideAddModal={hideAddModal}
        getDetails={getDetails}
      />
      <EditProduct
      showEditModal={showEditModal}
      selectedProduct={selectedProduct}
      getEditedDetails={getEditedDetails}
      hideEditModal={hideEditModal}/>
    </div>
  );
}

export default Products;