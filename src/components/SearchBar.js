import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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

    const userData = {
          ZipInput: event.target.ZipInput.value
      };
      console.log(userData);

      fetch('http://localhost:8080/zipInput', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(userData)
      }).then(function(response){
        console.log(JSON.stringify(response));
        console.log(response);
      });

      this.setState({value: ''});

      event.preventDefault();
  }

  render() {
    return (

        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <div className='searchBarContainer'>
              <Label for="exampleEmail">Enter Zip Code: </Label>
              <Input type="text" name="ZipInput" id="Zip" value={this.state.value} onChange={this.handleChange} />
              <Button className='submitButton' >Submit</Button>
            </div>
          </FormGroup>

        </Form>

    );

  }
}

export default SearchBar;
