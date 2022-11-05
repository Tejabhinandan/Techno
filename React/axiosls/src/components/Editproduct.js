import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";

function Editproduct(props) {

  const [SingleProducts, setSingleProducts] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productImageURL: ""
})

console.log("SingleProducts",SingleProducts);

useEffect(()=>{
  setSingleProducts({...props.selectedProduct})
},[props.selectedProduct])



    let handleSubmit=(e)=>{
         e.preventDefault()
    }
    let handleClose=()=>{
       props.hideEditModal()
    }

    let UpdateUserData=(event)=>{
      setSingleProducts({...SingleProducts,[event.target.name]:event.target.value})
     
  }

let Editproductssssss=()=>{
  props.getEditedDetails(SingleProducts)
}

  return (
    <div>
      <Modal show={props.showEditModal} >
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Edit Products Here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                autoFocus
                name="productName"
                value={SingleProducts.productName}
                onChange={(event)=>{UpdateUserData(event)}}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="price"
                autoFocus
                name="productPrice"
                value={SingleProducts.productPrice}
                onChange={(event)=>{UpdateUserData(event)}}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Products Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                autoFocus
                name="productDescription"
                value={SingleProducts.productDescription}
                onChange={(event)=>{UpdateUserData(event)}}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="url"
                autoFocus
                name="productImageURL"
                value={SingleProducts.productImageURL}
                onChange={(event)=>{UpdateUserData(event)}}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={Editproductssssss}>
            Edit Products
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Editproduct;