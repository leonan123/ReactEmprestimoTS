import React from 'react';
import InputGroup from '../InputGroup/InputGroup';
import BtnSubmit from '../BtnSubmit/BtnSubmit';

import './style.css';

const FormLogin = (props) => {
	return (
		<div className="container-form">
			<div className="title-form">
				<h2>{props.text}</h2>
			</div>
			<form>
				<InputGroup
					labelId={'label-CPF'}
					labelText={'Digite seu CPF'}
					labelClass={'label-input'}
					errorText={'Por favor insira um CPF válido!'}
					inputId={'cpf'}
				/>
				<BtnSubmit 
				link="lending-simulator"
				text="Continuar"
				/>
			</form>
		</div>
	);
};

export default FormLogin;
