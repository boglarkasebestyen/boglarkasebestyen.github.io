import React, {useContext} from "react";
import {MyContext} from "./MyContext";
import Card from "./Card";

function CreateAccount() {

	const {
		//state
		name,
		email,
		password,
		nameError,
		emailError,
		passwError,
		successMessageVisible,
		//functions
		handleClick,
		handleNameChange,
		handleEmailChange,
		handlePasswordChange,
		clearForm
	} = useContext(MyContext);

	return (
		<Card
				bgcolor="info"
				header="Open Account"
				body={!successMessageVisible ? (  //if not visible, create account
						<>
							<h5 className="create mb-4">Open an account that fits your needs!</h5>
							<div>
									<div className="error">{nameError}</div>
									<div className="error">{emailError}</div>
									<div className="error">{passwError}</div>
							</div>
							<h6 className="name mt-4">Name</h6>
							<input type="input" className="form-control" id="name" placeholder="Your name is..." value={name} onChange={handleNameChange}/><br/>
							<h6>Email address</h6>
							<input type="input" className="form-control" id="email" placeholder="Your email address is..." value={email} onChange={handleEmailChange}/><br/>
							<h6>Password</h6>
							<input type="password" className="form-control" id="password" placeholder="Create a password" value={password} onChange={handlePasswordChange}/>
							<br/>
							<button type="submit" disabled={!name && !email && !password} className="submitBtn btn btn-light" onClick={e => handleClick()} >Create Account</button>
							</>
							):( //if visible, hide "previous page", show success msg and create a new account
							<>
							<div className="accMessage mb-4">
									<h6>Account succesfully created!</h6>
							</div>
							<button type="submit" className="submitBtn btn btn-light" onClick={clearForm}>Add another account</button>
					</>
				)}
		/>
	)
}

export default CreateAccount;