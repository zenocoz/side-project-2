import React from "react"
import {Col, Row, Container, Card, Button, Form} from "react-bootstrap"
import DataSource from "../services/"

class Home extends React.Component {
  state = {
    products: [],
    brands: [],
  }

  componentDidMount = () => {
    DataSource.fetchItems((data) => {
      this.setState({
        products: data,
        brands: [...new Set(data.map((item) => item.brand))],
      })
    })
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="col-3">
            {this.state.brands.map((brand) => (
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label={brand} />
              </Form.Group>
            ))}
          </Col>
          <Col className="col-6">
            <Row>
              {this.state.products.map((product) => (
                <Col>
                  <Card style={{width: "18rem"}}>
                    <Card.Img variant="top" src={product.imageUrl} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.brand}</Card.Text>

                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
          <Col className="col-3"></Col>
        </Row>
      </Container>
    )
  }
}

export default Home
