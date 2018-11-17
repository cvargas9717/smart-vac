import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SearchBar extends Component {
  render() {
    return (

      <Form>
        <FormGroup>
          <Label for="exampleEmail">Enter Zip Code: </Label>
          <Input type="text" name="ZipInput" id="Zip" placeholder=" " />
        </FormGroup>
        <Button>Submit</Button>
      </Form>

    );

  }
}

export default SearchBar;
