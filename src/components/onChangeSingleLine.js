import React from "react";

class OnChangeSingleLine extends React.Component {
  state = {
    name: "",
    gender: "",
    address: "",
    email: "",
    password: "",
  };

  render() {
    return (
      <div>
        <form>
          <div class="form-group">
            <h1>Student Form</h1>

            <label>Name: </label>
            <input
              type="text"
              name="name"
              onChange={(event) => {
                this.setState({ name: event.target.value });
              }}
            ></input>
            <br></br>

            <label>Gender: </label>
            <select
              name="gender"
              onChange={(event) => {
                this.setState({ gender: event.target.value });
              }}
            >
              <option value="Mae" selected disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <br></br>
            <br></br>

            <label>Address: </label>
            <textarea
              name="address"
              onChange={(event) => {
                this.setState({ address:event.target.value });
              }}
            >
            </textarea>
            <br></br>
            <label>Enail: </label>
            <input
              type="email"
              name="email"
              onChange={(event) => {
                this.setState({ email: event.target.value });
              }}
            ></input>
            <br></br>

            <label>Password: </label>
            <input
              type="password"
              name="password"
              onChange={(event) => {
                this.setState({ password: event.target.value });
              }}
            ></input>

            <h3>Student OnChange Details</h3>
            <label>User name: {this.state.name}</label>
            <br></br>
            <label>Gender: {this.state.gender}</label>
            <br></br>
            <label>Address: {this.state.address}</label>
            <br></br>
            <label>Email: {this.state.email}</label>
            <br></br>
            <label>Password: {this.state.password}</label>
            <br></br>
          </div>
        </form>
      </div>
    );
  }
}
export default OnChangeSingleLine;
