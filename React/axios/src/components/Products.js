// import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import HTTP from '../axiosConfig';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

function Products() {
    const [products, setproducts] = useState([])
    const [showAddModal, setshowAddModal] = useState(false)
    const [showEditModal, setshowEditModal] = useState(false)
    const [selectProduct, setselectProduct] = useState({})

    //to close add modal
    let hideAddModal = () => {
        setshowAddModal(false)
    }

    //to close edit modal
    let hideEditModal = () => {
        setshowEditModal(false) 
    }

    console.log("products", products);
    useEffect(() => {
        fetchProducts()
    }, [])

    let fetchProducts = async () => {
        try {
            let response = await HTTP.get("/api/products")
            console.log(response)
            let allProducts = response.data.products
            console.log("products", response.data.products);
            setproducts(allProducts)
        } catch (err) {
            console.log("err", err);
        }
    }
    // to get selected product on edit btn click
    let selectedProduct = (val) => {
        setselectProduct(val)
        setshowEditModal(true)
    }
    // to delete the product
    let deleteProduct = async (ID) => {
        try {
            let response = await HTTP.delete(`/api/products/ ${ID}`)
            // console.log("response in delete product", response);
            if (response.data.error) {
                alert(response.data.message)
            } else {
                alert(response.data.message)
                fetchProducts()
            }
        } catch (err) {
            console.log("err", err);
        }
    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Description</th>
                        <th>Product Image</th>
                        <th><Button className='btn btn-warning'
                            onClick={() => { setshowAddModal(true) }}>❤️ADD</Button></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((val) => {
                            return (
                                <tr key={val._id}>
                                    <td>{val._id}</td>
                                    <td>{val.productName}</td>
                                    <td>{val.productPrice}</td>
                                    <td>{val.productDescription}</td>
                                    <td><img width="200px" height="180px" src={val.productImageURL} 
                                    alt={val.productName} /></td>
                                    <td><Button onClick={() => { selectedProduct(val) }}>Edit</Button>
                                        <Button className='btn btn-danger ms-2'
                                            onClick={() => { deleteProduct(val._id) }}>Delete
                                        </Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>

            <AddProduct
                showAddModal={showAddModal}
                hideAddModal={hideAddModal}
                fetchProducts={fetchProducts} />

            <EditProduct showEditModal={showEditModal}
                hideEditModal={hideEditModal}
                selectProduct={selectProduct}
                fetchProducts={fetchProducts} />
        </div>
    )
}

export default Products