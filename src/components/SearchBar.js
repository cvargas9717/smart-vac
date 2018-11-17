import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SearchBar extends Component {

  constructor(props) {
      super(props);
      this.state = {
        value: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
     this.setState({value: event.target.value});
   }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    console.log("Inside Function");
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Enter Zip Code: </Label>
          <Input type="text" name="ZipInput" id="Zip" value={this.state.value} onChange={this.handleChange} />
        </FormGroup>
        <Button >Submit</Button>
      </Form>

    );

  }
}

export default SearchBar;
