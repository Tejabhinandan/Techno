import React, { useState, useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

function Addproduct(props) {

    const [Product, setProduct] = useState({
        productName: "",
        productPrice: "",
        productDescription: "",
        productImageURL: ""
    })

    const [SavedProduct, setSavedProduct] = useState([])

    console.log("SavedProduct",SavedProduct);

    let handleSubmit=(e)=>{
        e.preventDefault()
    }

    let handleClose=()=>{
        props.hideAddModal()
    }

    let UpdateUserData=(event)=>{
        setProduct({...Product, [event.target.name]:event.target.value})
       
    }

    useEffect(()=>{
      const saveData=JSON.stringify(SavedProduct)
      localStorage.setItem("saveData",saveData)
    },[SavedProduct])

    let saveData=()=>{
        props.getDetails(Product)
        let productCopy=[...SavedProduct]
        productCopy.push(Product)
        setSavedProduct(productCopy)
        handleClose()
        setProduct({
            productName: " ",
            productPrice: " ",
            productDescription: " ",
            productImageURL: " "
        })

    }


  return (
    <div>
       <Modal show={props.showAddModal} >
        <Modal.Header closeButton onClick={handleClose}>
          <Modal.Title>Add Products Here</Modal.Title>
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
                value={Product.productName}
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
                value={Product.productPrice}
                onChange={(event)=>{UpdateUserData(event)}}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Prouct Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                autoFocus
                name="productDescription"
                value={Product.productDescription}
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
                value={Product.productImageURL}
                onChange={(event)=>{UpdateUserData(event)}}
              />
            </Form.Group>
           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" type="submit" onClick={saveData} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Addproduct