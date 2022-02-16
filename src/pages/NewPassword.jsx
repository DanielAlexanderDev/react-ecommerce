import React from 'react';
import '@styles/NewPassword.scss';
import logo from '@logos/logo_yard_sale.svg'
import { Link } from 'react-router-dom';

const NewPassword = () => {
  return (
    <div className='NewPassword'>
      <div className="NewPassword-container">
				<img src={logo} alt="logo" className="logo" />
				<h1 className="title">Create a new password</h1>
				<p className="subtitle">Enter a new password for yue account</p>
				<form action="/" className="form">
					<label htmlFor="password" className="label">Password</label>
					<input type="password" id="password" placeholder="*********" className="input input-password" />
					<label htmlFor="new-password" className="label">New Password</label>
					<input type="password" id="new-password" placeholder="*********" className="input input-password" />
					<Link to={'/password-recovery'}>
						<input type="submit" value="Confirm" className="primary-button login-button" />
					</Link>
				</form>
			</div>
    </div>
  );
};

export default NewPassword;
