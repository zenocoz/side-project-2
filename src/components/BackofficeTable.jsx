import React from "react"
import {Table} from "react-bootstrap"

export default function BackofficeTable(props) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Brand</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((product) => (
          <tr>
            <td>{product._id}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>{product.brand}</td>
            <td>
              <img src={product.imageUrl} style={{width: "50px"}} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
