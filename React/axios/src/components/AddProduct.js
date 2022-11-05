import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

function AddProduct(props) {

    const [singleProduct, setsingleProduct] = useState({
        productName: "",
        productPrice: "",
        productDescription: "",
        productImageURL: ""
    })

    let handleClose = () => {
        props.hideAddModal()
    }

    let updateDetails = (e) => {
        setsingleProduct({
            ...singleProduct,
            [e.target.name]: e.target.value
        })
    }

    let handleSubmit = (e) => {
        e.preventDefault()
    }

    let addProduct = async () => {
        try {
            let response = await axios.post("https://ty-shop.herokuapp.com/api/products",
             singleProduct)
            console.log("response in add product", response);
            if (response.data.error) {
                alert(response.data.message)
            } else {
                alert(response.data.message)
                handleClose()
                props.fetchProducts()
                setsingleProduct({
                    productName: "",
                    productPrice: "",
                    productDescription: "",
                    productImageURL: ""
                })
            }
        } catch (err) {
            console.log("err", err);
        }
    }
    return (
        <div>
            <Modal show={props.showAddModal} >
                <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Product Name"
                                name='productName' value={singleProduct.productName} 
                                onChange={(e) => { updateDetails(e) }} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Product Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter Product price"
                                name='productPrice' value={singleProduct.productPrice} onChange={(e) => { updateDetails(e) }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control type="text" placeholder="Enter Product Description"
                                name='productDescription' value={singleProduct.productDescription} onChange={(e) => { updateDetails(e) }} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Product Image</Form.Label>
                            <Form.Control type="text" placeholder="Enter Product Image"
                                name='productImageURL' value={singleProduct.productImageURL} onChange={(e) => { updateDetails(e) }} />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={addProduct} >
                            Add Product
                        </Button>
                    </Form>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default AddProduct