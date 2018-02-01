import React, { Component } from 'react';
import {
  Panel,
  Button,
  Grid,
  Row,
  Col,
  Form,
  FormGroup,
  ControlLabel,
  HelpBlock,
  FormControl,
  ButtonToolbar,
  Checkbox,
  Radio
} from 'react-bootstrap';

import styled, { keyframes } from 'styled-components';

const FieldGroup = ({ id, label, help, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const FadeIn = styled(Grid)`
  animation: ${fadeIn} 0.5s;
`;

class Forms extends Component {
  render() {
    return (
      <FadeIn>
        <Row>
          <Col xs={12} md={6}>
            <Panel>
              <Panel.Heading>Login Form</Panel.Heading>
              <Panel.Body>
                <Form action="" method="post">
                  <FormGroup>
                    <Col md={3}>
                      <ControlLabel>Email</ControlLabel>
                    </Col>
                    <Col xs={12} md={9}>
                      <FormControl type="email" placeholder="Enter Email..." />
                      <HelpBlock>Please enter your email</HelpBlock>
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Col md={3}>
                      <ControlLabel>Password</ControlLabel>
                    </Col>
                    <Col xs={12} md={9}>
                      <FormControl type="password" placeholder="Enter Password..." />
                      <HelpBlock>Please enter your password</HelpBlock>
                    </Col>
                  </FormGroup>
                </Form>
              </Panel.Body>
              <Panel.Footer>
                <ButtonToolbar>
                  <Button type="submit" bsSize="sm" bsStyle="success">
                    Submit
                  </Button>
                  <Button type="reset" bsSize="sm" bsStyle="danger">
                    Reset
                  </Button>
                </ButtonToolbar>
              </Panel.Footer>
            </Panel>
          </Col>

          <Col xs={12} md={6}>
            <Panel>
              <Panel.Heading>Basic Form</Panel.Heading>
              <Panel.Body>
                <FieldGroup id="formControlsText" type="text" label="Text" placeholder="Enter text" />
                <FieldGroup id="formControlsEmail" type="email" label="Email address" placeholder="Enter email" />
                <FieldGroup id="formControlsPassword" label="Password" type="password" />
                <FieldGroup id="formControlsFile" type="file" label="File" help="Example block-level help text here." />

                <Checkbox checked readOnly>
                  Checkbox
                </Checkbox>
                <Radio checked readOnly>
                  Radio
                </Radio>

                <FormGroup>
                  <Checkbox inline>1</Checkbox> <Checkbox inline>2</Checkbox> <Checkbox inline>3</Checkbox>
                </FormGroup>
                <FormGroup>
                  <Radio name="radioGroup" inline>
                    1
                  </Radio>{' '}
                  <Radio name="radioGroup" inline>
                    2
                  </Radio>{' '}
                  <Radio name="radioGroup" inline>
                    3
                  </Radio>
                </FormGroup>

                <FormGroup controlId="formControlsSelect">
                  <ControlLabel>Select</ControlLabel>
                  <FormControl componentClass="select" placeholder="select">
                    <option value="select">select</option>
                    <option value="other">...</option>
                  </FormControl>
                </FormGroup>
                <FormGroup controlId="formControlsSelectMultiple">
                  <ControlLabel>Multiple select</ControlLabel>
                  <FormControl componentClass="select" multiple>
                    <option value="select">select (multiple)</option>
                    <option value="other">...</option>
                  </FormControl>
                </FormGroup>

                <FormGroup controlId="formControlsTextarea">
                  <ControlLabel>Textarea</ControlLabel>
                  <FormControl componentClass="textarea" placeholder="textarea" />
                </FormGroup>

                <FormGroup>
                  <ControlLabel>Static text</ControlLabel>
                  <FormControl.Static>email@example.com</FormControl.Static>
                </FormGroup>
              </Panel.Body>
              <Panel.Footer>
                <ButtonToolbar>
                  <Button type="submit" bsSize="sm" bsStyle="primary">
                    Submit
                  </Button>
                  <Button type="reset" bsSize="sm" bsStyle="danger">
                    Reset
                  </Button>
                </ButtonToolbar>
              </Panel.Footer>
            </Panel>
          </Col>
        </Row>
      </FadeIn>
    );
  }
}

export default Forms;
