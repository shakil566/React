import React from "react";

class onChange extends React.Component{

    state = {
        username : '',
        phone : '',
        email : '',
    }

    ChangeVal = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]:value});

    }

    formSubmit = (event) =>{
        event.preventDefault(); //page not reload
        console.log(this.state.username);
        console.log(this.state.phone);
        console.log(this.state.email);
    }

    render(){
        return(
            <div>
            <h1>
                Hello {this.state.username}<br></br>
            </h1>
            <p>Your Details Here...</p>
                <label>User Name: {this.state.username}</label><br></br>
                <label>Phone: {this.state.phone}</label><br></br>
                <label>Email: {this.state.email}</label>
            <form onSubmit={this.formSubmit}>
                <div class="form-group" style={{margin:100, color:'red'}}>
                    <label>User Name: </label>
                    <input type='text' name='username' placeholder="Enter Your Name" onChange={this.ChangeVal}></input><br></br>
                    <label>Phone: </label>
                    <input type='text' name='phone' placeholder="Enter Your Phone" onChange={this.ChangeVal}></input><br></br>
                    <label>Email: </label>
                    <input type='email' name='email' placeholder="Enter Your Email" onChange={this.ChangeVal}></input><br></br>
                    <button type="submit" style={{backgroundColor:'green', color:'white'}}>Submit</button>
                </div>
            </form>
            </div>
        )
    }
}
export default onChange;

