import React from "react"
import DataSource from "../services/" //automatically looks for index.js
import {Table} from "react-bootstrap"
import BackofficeTable from "./BackofficeTable"
import ModalForm from "./ModalForm"

class Backoffice extends React.Component {
  state = {
    products: [],
  }

  componentDidMount = () => {
    DataSource.fetchItems((data) => {
      this.setState({products: data})
    })
  }

  render() {
    return (
      <>
        <ModalForm />
        <BackofficeTable products={this.state.products} />
      </>
    )
  }
}

export default Backoffice
