import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import TimeInput from "./components/TimeInput"
import PathPrefix from "./components/PathPrefix"
import LocalStorageInput from "./components/LocalStorageInput"

function App() {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col>
            <LocalStorageInput label="s3Endpoint" />
          </Col>
          <Col>
            <TimeInput />
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <PathPrefix label="path1" />
          </Col>
          <Col sm="6">
            <PathPrefix label="path2" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
