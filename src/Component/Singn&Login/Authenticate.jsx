import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { login, signUp } from "../../Services/Auth";

const Authenticate = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [signinEmail, setSigninEmail] = useState("");
	const [signinPassword, setSigninPassword] = useState("");
	const [isSignUp, setIsSignUp] = useState(false);




	const signup = () => {
		signUp( email, password)
			.then(() => {
				setEmail("");
				setPassword("");
				alert("User signed up successfully");
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	const signin = () => {
		login( signinEmail, signinPassword)
			.then(() => {
				alert("Welcome " + signinEmail);
				window.location.href = "../Task2/index.html";
			})
			.catch(() => {
				alert("Check your inputs and try again!");
			});
	};

	return (
		<div className="container d-flex justify-content-center col-6 align-items-center vh-100">
			<div className="row bg-white col-12 shadow rounded p-4" >
				<div className={`col-md-12 ${isSignUp ? "d-none" : ""}`}>
					<h1 className="text-center">Sign In</h1>
					<div className="d-flex justify-content-center my-3">
						<a href="#" className="btn btn-outline-secondary rounded-circle mx-1">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="#" className="btn btn-outline-secondary rounded-circle mx-1">
							<i className="fab fa-google-plus-g"></i>
						</a>
						<a href="#" className="btn btn-outline-secondary rounded-circle mx-1">
							<i className="fab fa-linkedin-in"></i>
						</a>
					</div>
					<p className="text-center">or use your account</p>
					<input
						type="email"
						className="form-control mb-3"
						placeholder="Email"
						value={signinEmail}
						onChange={(e) => setSigninEmail(e.target.value)}
					/>
					<input
						type="password"
						className="form-control mb-3"
						placeholder="Password"
						value={signinPassword}
						onChange={(e) => setSigninPassword(e.target.value)}
					/>
					<a href="#" className="d-block text-center mb-3">
						Forgot your password?
					</a>
					<button className="btn btn-danger w-100" onClick={signin}>
						Sign In
					</button>
					<p className="text-center mt-3">
						Don't have an account?{" "}
						<button
							className="btn btn-link p-0"
							onClick={() => setIsSignUp(true)}
						>
							Sign Up
						</button>
					</p>
				</div>
				<div className={`col-md-12 ${isSignUp ? "" : "d-none"}`}>
					<h1 className="text-center">Sign Up</h1>
					<div className="d-flex justify-content-center my-3">
						<a href="#" className="btn btn-outline-secondary rounded-circle mx-1">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="#" className="btn btn-outline-secondary rounded-circle mx-1">
							<i className="fab fa-google-plus-g"></i>
						</a>
						<a href="#" className="btn btn-outline-secondary rounded-circle mx-1">
							<i className="fab fa-linkedin-in"></i>
						</a>
					</div>
					<p className="text-center">or use your email for registration</p>
					<input
						type="email"
						className="form-control mb-3"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						className="form-control mb-3"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button className="btn btn-danger w-100" onClick={signup}>
						Sign Up
					</button>
					<p className="text-center mt-3">
						Already have an account?{" "}
						<button
							className="btn btn-link p-0"
							onClick={() => setIsSignUp(false)}
						>
							Sign In
						</button>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Authenticate;