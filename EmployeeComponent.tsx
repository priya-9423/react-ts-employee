import React, { PureComponent } from "react";
import ReactDOM from "react-DOM";

export default class EmployeeCompoent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      Lastname: "",
      Address: "",
      IsSameAddress: false,
      Gender: "",
      State: ""
    };
  }

  onClickFunction = e => {
    let { value, name,type, checked } = e.target;
    value = type == "checkbox" ? checked :value

    this.setState({
      [name]: value
    });

  };

  render() {
    return (
      <div>
        First Name :
        <input
          name="FirstName"
          type="text"
          onChange={this.onClickFunction}
          placeholder="First Name"
        />
        <br />
        Last Name :
        <input
          name="Lastname"
          onChange={this.onClickFunction}
          type="text"
          placeholder="Last Name"
        />
        <br />
        Address :        <textarea
          placeholder="Address"
          onChange={this.onClickFunction}
          name="Address"
        />
        <br />
        Is Billing Address Same :
        <input
          type="checkBox"
          checked={this.state.IsSameAddress}
          onChange={this.onClickFunction}
          name="IsSameAddress"
        />
        <br />
        Gender :
        <span onChange={this.onClickFunction} name="Gender">
          <input type="radio" name="Gender" value="Female" /> Female
          <input type="radio" name="Gender" value="Male" /> Male
        </span>
        <br />
        State :
        <select onChange={this.onClickFunction} name="State">
          <option value="Maharashtra">Maharashtra</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Asam">Asam</option>
        </select>
        <br />
        <br />
        <br />
        Details:
        <br />
        First Name: <div> {this.state.FirstName}</div>
        Last Name: <div>{this.state.Lastname}</div>
        Address : <div>{this.state.Address}</div>
        Is billing address : <div>{this.state.IsSameAddress ? 'true' : 'false'}</div>
        Gender: <div>{this.state.Gender} </div>
        State: <div> {this.state.State}</div>
      </div>
    );
  }
}
