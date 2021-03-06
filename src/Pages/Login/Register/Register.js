import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

import './Register.css'
const Register = () => {
    const {handleRegistration,handleNameChange,handleEmailChange,handlePasswordChange,error,handleResetPassword,user}=useAuth();
    return (

<div className="register-container">
<div class="signup-form">	
    <form  onSubmit={handleRegistration} >
		<h2>Create Account</h2>
		<p class="lead">It's free and hardly takes more than 30 seconds.</p>
        <div class="form-group">
			<div class="input-group">
				<span class="input-group-addon"></span>
				<input  onChange={handleNameChange}  type="text" class="form-control" name="username" placeholder="Username" required="required"/>
			</div>
        </div>
        <div class="form-group">
			<div class="input-group">
				<span class="input-group-addon"></span>
				<input  onChange={handleEmailChange}  type="email" class="form-control" name="email" placeholder="Email Address" required="required"/>
			</div>
        </div>
		<div class="form-group">
			<div class="input-group">
				<span class="input-group-addon"><i class="fa fa-lock"></i></span>
				<input onChange={handlePasswordChange} type="text" class="form-control" name="password" placeholder="Password" required="required"/>
			</div>
        </div>
		<div class="form-group">
			<div class="input-group">
				<span class="input-group-addon">
					<i class="fa fa-lock"></i>
					<i class="fa fa-check"></i>
				</span>
				<input type="text" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required"/>
			</div>
        </div>        
		<div class="form-group">
            <button type="submit" class="btn btn-primary btn-block btn-lg">Sign Up</button>
        </div>
		<p class="small text-center">By clicking the Sign Up button, you agree to our <br/>Terms and Conditions, and Privacy Policy</p>
        <div class="text-center text-danger">Already have an account?  <Link to="/Login" class="text-center text-danger">Sign in </Link></div>
    </form>

</div>

</div>
    );
};

export default Register;






