import React, { Component } from "react";

import {
  Container,
  Button,
  Radios,
  Checkbox,
  TextInput,
  TextArea
} from "nes-react";

import Row from "./Row";
import Col from "./Col";

export default class App extends Component {
  state = {
    selectedRadioValue: "option1",
    boxOneChecked: false,
    boxTwoChecked: true,
    textInput: "",
    successInput: "",
    warningInput: "",
    errorInput: "",
    textareaInput: ""
  };

  handleRadioSelect(value) {
    this.setState({ selectedRadioValue: value });
  }

  toggleCheckBox(checkBoxName) {
    this.setState({
      [`${checkBoxName}Checked`]: !this.state[`${checkBoxName}Checked`]
    });
  }

  render() {
    const {
      selectedRadioValue,
      boxOneChecked,
      boxTwoChecked,
      textInput,
      successInput,
      warningInput,
      errorInput,
      textareaInput
    } = this.state;

    return (
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 15,
          width: 1024
        }}
      >
        <link
          href="https://fonts.googleapis.com/css?family=Press+Start+2P"
          rel="stylesheet"
        />

        <h1>nes-react</h1>
        <h4>
          A React component library based on the awesome{" "}
          <a href="https://github.com/BcRikko/NES.css">nes.css</a>
        </h4>

        {/* Containers */}
        <Container>
          <p>Containers</p>
          <Row>
            <Col>
              <Container>Regular</Container>
            </Col>
            <Col>
              <Container rounded>Rounded</Container>
            </Col>
            <Col>
              <Container dark>Dark</Container>
            </Col>
          </Row>
        </Container>

        {/* Buttons */}
        <Container>
          <p>Buttons</p>
          <Button style={{ margin: 10 }}>Regular</Button>
          <Button style={{ margin: 10 }} primary>
            Primary
          </Button>
          <Button style={{ margin: 10 }} success>
            Success
          </Button>
          <Button style={{ margin: 10 }} warning>
            Warning
          </Button>
          <Button style={{ margin: 10 }} error>
            Error
          </Button>
          <Button style={{ margin: 10 }} disabled>
            Disabled
          </Button>
        </Container>

        {/* Radios */}
        <Container>
          <p>Radios</p>
          <Radios
            selectedValue={selectedRadioValue}
            options={[
              {
                value: "yes",
                label: "Yes"
              },
              {
                value: "no",
                label: "No"
              }
            ]}
            onValueChange={this.handleRadioSelect.bind(this)}
          />
        </Container>

        {/* Checkboxes */}
        <Container>
          <p>Checkboxes</p>
          <Checkbox
            checked={boxOneChecked}
            label="Box One"
            onSelect={() => this.toggleCheckBox("boxOne")}
          />

          <Checkbox
            checked={boxTwoChecked}
            label="Box Two"
            onSelect={() => this.toggleCheckBox("boxTwo")}
          />
        </Container>

        {/* Text Inputs */}
        <Container>
          <p>Text Inputs</p>
          <TextInput
            label="Label"
            placeholder="Text placeholder"
            value={textInput}
            onChange={e => this.setState({ textInput: e.target.value })}
          />
          <TextInput
            label="Success"
            labelInline
            success
            value={successInput}
            onChange={e => this.setState({ successInput: e.target.value })}
          />
          <TextInput
            label="Warning"
            labelInline
            warning
            value={warningInput}
            onChange={e => this.setState({ warningInput: e.target.value })}
          />
          <TextInput
            label="Error"
            labelInline
            error
            value={errorInput}
            onChange={e => this.setState({ errorInput: e.target.value })}
          />
          <TextArea
            label="Text Area"
            value={textareaInput}
            onChange={e => this.setState({ textareaInput: e.target.value })}
          />
        </Container>
      </div>
    );
  }
}
