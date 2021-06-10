import React, { Component } from "react";
import Successful from "./Successful";
import  { Redirect } from 'react-router-dom'
export default class Registration extends Component {

    state={
        user:{
            name: '',
            surname: '',
            email: '',
            password: '',
            confirmPassword: '',
            errors: {}
        }
    }

    inputChange = (e) => {
        let id = e.target.id
        this.setState({
            // onChange is going to always listen to my keystrokes
            user: {
                ...this.state.user,
                [id]: e.target.value
            }
        }, () => {
            console.log(this.state.user)
        })
    }

    formValidation(){

        let formIsValid = true;
        let errors = {};

        if(this.state.user.password !== this.state.user.confirmPassword){
          errors["password"] = "Passwords do not match"
            formIsValid = false;
        }

        if(this.state.user.password.length < 8){
            formIsValid = false;
            errors["password"] = "Passwords should be greater than 8"
            
        }
        this.setState({errors: errors});
        return formIsValid;
    
    }

    submitRegistration(e){
        e.preventDefault();
        if(this.formValidation()){
            this.props.history.push('/success')
        }else{
          alert("Form has errors.")
        }
    
      }

    render() {
        return (
            <form onSubmit={(e)=> this.submitRegistration(e)}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="First name"
                        value = {this.state.user.name}
                        id="name"
                        onChange={e => this.inputChange(e)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Surname</label>
                    <input type="text" className="form-control" placeholder="Last name" 
                     value = {this.state.user.surname}
                     id="surname"
                     onChange={e => this.inputChange(e)}
                     required
                    />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" 
                     value = {this.state.user.email}
                     id="email"
                     onChange={e => this.inputChange(e)}
                     required
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" 
                     value = {this.state.user.password}
                     id="password"
                     onChange={e => this.inputChange(e)}
                     required
                     pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*"
                    />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm password" 
                     value = {this.state.user.confirmPassword}
                     id="confirmPassword"
                     onChange={e => this.inputChange(e)}
                     required
                    />
                    <span className="error">{this.state.user.errors["password"]}</span>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        );
    }
}