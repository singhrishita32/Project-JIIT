import React, {Component} from 'react'
import { signupS} from '../Auth/Student'
import {Link} from 'react-router-dom'

class SignupS extends Component{
    constructor(){
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            error: ""
        }
    }

    handleChange = (str) => (event) => {
        this.setState({ error: "" });
        this.setState({
            [str]: event.target.value
        });
    };

    clickSubmit = (event) => {
        event.preventDefault();
        const {name,email,password} = this.state
        const user = {
            name: name,
            email: email,
            password: password,
        }
        
        signupS(user)
            .then(data => {
                if (data.error) this.setState({ error: data.error })
                else this.setState({
                    error:"",
                    name: "",
                    email: "",
                    password: "",
                    open:true
                });
            });
    };
    
    signupForm = (name, email, password) => (
        <form>
                    <div className="form-group">
                        <label className="text-muted">Name</label>
                        <input 
                            onChange = {this.handleChange("name")} 
                            type = "text" 
                            className = "form-control"
                            value = {name}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Email</label>
                        <input 
                            onChange = {this.handleChange("email")} 
                            type = "email" 
                            className = "form-control"
                            value = {email}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label className="text-muted">Password</label>
                        <input 
                            onChange = {this.handleChange("password")} 
                            type = "password" 
                            className = "form-control"
                            value = {password}>
                        </input>   
                    </div>
                    <button onClick = {this.clickSubmit}  className="btn btn-raised btn-primary">Submit</button>
                    
                </form>
          
    )

    render() {
        const { name, email, password, error, open } = this.state;
        return (
            <div>
               <div className="jumbotron">
                        <h3 className="font-weight-bold">Jaypee Institute Of Information Technology</h3>
                        <h4>Project Portal</h4>
                </div>

                <div className="container">
                    <h2 className="mt-5 mb-5">Student Signup</h2>

                    <div className="alert alert-danger" style={{display:error?"":"NONE"}}>
                        {error}
                    </div>

                    <div className="alert alert-info" style={{display:open?"":"none"}}>
                        New Account is Successfully Created! Please <Link to="/SigninS">Sign In </Link>
                    </div>
                    {this.signupForm(name,email,password)}    
                </div>
            </div>
        );
    };
};

export default SignupS;