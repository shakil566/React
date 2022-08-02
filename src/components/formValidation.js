import React from "react";

class FormValidation extends React.Component {
  state = {
    name: "",
    nameErr: "",
    gender: "",
    address: "",
    email: "",
    emailErr: "",
    password: "",
    passwordErr: "",
  };

  Validation(){
    if(this.state.name == ''){
        this.setState({nameErr:"Name field is required !"})
    }else if(this.state.email == ''){
        this.setState({emailErr:"Email field is required !"})
    }else if(this.state.password == ''){
        this.setState({passwordErr:"Password field is required !"})
    }else{
        return true;
    }

  }

  formSubmit = (event) =>{
    event.preventDefault(); //page not reload
    if(this.Validation()){
    }
}

  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit}>
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
            <strong style={{color:'red'}}>{this.state.nameErr}</strong>
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

            <label>Address:  </label>
            <textarea
              name="address"
              onChange={(event) => {
                this.setState({ address: event.target.value });
              }}
            ></textarea>
            <br></br>
            <label>Enail: </label>
            <input
              type="email"
              name="email"
              onChange={(event) => {
                this.setState({ email: event.target.value });
              }}
            ></input>
            <strong style={{color:'red'}}>{this.state.emailErr}</strong>
              <br></br>

            <label>Password: </label>
            <input
              type="password"
              name="password"
              onChange={(event) => {
                this.setState({ password: event.target.value });
              }}
            ></input>
            <strong style={{color:'red'}}>{this.state.passwordErr}</strong>
              <br></br>
            <button class="btn btn-info" type="submit" >Submit</button>

          </div>
        </form>
        
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
    );
  }
}
export default FormValidation;
