import React from 'react';

import FormLogin from '../../components/FormLogin/FormLogin';
import TitleLogin from '../../components/TitleLogin/TitleLogin';

import './style.css';

const Login = () => {
	return (
		<div className="Login">
			<div className="BackImg" />
			<div className="container d-flex align-items-center">
				<div className="row align-items-center w-100">
					<div className="col-md-6 d-flex aling-items-center">
						<TitleLogin />
					</div>
					<div className="col-md-6 d-flex justify-content-center">
						<FormLogin text="Com Easier, a resposta vem em menos de 1 minuto" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
