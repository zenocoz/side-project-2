import React from "react"
import {Button, Modal, Form} from "react-bootstrap"
import DataSource from "../services/"

class ModalForm extends React.Component {
  state = {
    show: false,
    details: {},
  }

  handleChange = (e) => {
    this.setState({
      details: {
        ...this.state.details,
        [e.target.id]: e.target.value,
      },
    })
  }

  handleSubmit = () => {
    DataSource.postItems(this.state.details, (response) => {
      this.setState({details: {}, show: false})
      if (response) {
        this.props.handleAlert(true)
      } else {
        this.props.handleAlert(false)
      }
    })
  }

  render() {
    return (
      <>
        <Button
          variant="primary"
          onClick={() => {
            this.props.closeAlert()
            this.setState({show: true})
          }}
        >
          Launch demo modal
        </Button>

        <Modal
          show={this.state.show}
          onHide={() => this.setState({show: false})}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  id="name"
                  type="text"
                  placeholder="Enter name"
                  value={this.state.details.name}
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  id="description"
                  type="text"
                  placeholder="Enter name"
                  value={this.state.details.description}
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Brand</Form.Label>
                <Form.Control
                  id="brand"
                  type="text"
                  placeholder="Enter name"
                  value={this.state.details.brand}
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  id="price"
                  type="number"
                  placeholder="Enter name"
                  value={this.state.details.price}
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Image Url</Form.Label>
                <Form.Control
                  id="imageUrl"
                  type="text"
                  placeholder="Enter name"
                  value={this.state.details.imageUrl}
                  onChange={(e) => this.handleChange(e)}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary" onClick={() => this.handleSubmit()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default ModalForm
