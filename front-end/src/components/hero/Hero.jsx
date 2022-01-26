import React from 'react';

import { Link } from 'react-router-dom';

import illustration from '../../assets/images/whoo-home-page-illustration.svg';
import './hero.scss';

export default function Hero() {
	return (
		<div className="hero">
			<div className="container">
				<div className="left">
					<div className="hero-text-container">
						<h1 className="home-page-text home-page-heading">
							Work better, safer, together.
						</h1>
						<p className="home-page-text home-page-sub-heading">
							Connect and collaberate with other professionals that share your
							goals and intrests. Create a free whoo account in just a few
							moments, add friends and collaberate!
						</p>
					</div>

					<div className="button-container">
						<Link className="default-button sign-in" to="/sign-in">
							Sign In
						</Link>
						<Link className="default-button sign-up" to="/sign-up">
							Sign Up
						</Link>
					</div>
				</div>
				<div className="right">
					<img
						className="hero-illustration"
						src={illustration}
						alt="illustration of people working together in an office"
					/>
				</div>
			</div>
		</div>
	);
}
