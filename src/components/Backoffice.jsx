import React from "react"
import DataSource from "../services/" //automatically looks for index.js
import {Table, Alert} from "react-bootstrap"
import BackofficeTable from "./BackofficeTable"
import ModalForm from "./ModalForm"

class Backoffice extends React.Component {
  state = {
    products: [],
    showAlert: false,
    success: false,
  }

  componentDidMount = () => {
    DataSource.fetchItems((data) => {
      this.setState({products: data})
    })
  }

  handleAlert = (response) => {
    this.setState({showAlert: true, success: response ? true : false})
  }

  render() {
    return (
      <>
        {this.state.showAlert && (
          <Alert
            variant={this.state.success ? "success" : "danger"}
            onClose={() => this.setState({showAlert: false})}
            dismissible
          >
            <Alert.Heading>
              {this.state.success
                ? "Product Addeded"
                : "There was an error adding the product"}
            </Alert.Heading>
          </Alert>
        )}

        <ModalForm
          handleAlert={this.handleAlert}
          closeAlert={() => this.setState({showAlert: false})}
        />
        <BackofficeTable products={this.state.products} />
      </>
    )
  }
}

export default Backoffice
