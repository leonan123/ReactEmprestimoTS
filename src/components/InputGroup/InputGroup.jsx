import React, { useState } from 'react';

import { mask, unMask } from 'remask';

import './style.css';

const InputGroup = (props) => {
	const [ value, setValue ] = useState('');

	//Eventos do input
	const inputChange = (e) => {
		switch (props.inputId) {
			case 'cpf':
				setValue(mask(unMask(e.target.value), [ '999.999.999-99' ]));
				break;
			case 'valor':
				setValue(mask(unMask(e.target.value), [ '999.999.999-99' ]));
				break;

			default:
		}
	};

	const inputFocus = (e) => {
		let labelInput = document.querySelector(`label#${props.labelId}`);
		labelInput.classList.add('active');
	};

	const inputBlur = (e) => {
		let labelInput = document.querySelector(`label#${props.labelId}`);

		if (e.target.value.length <= 0) {
			labelInput.classList.remove('active');
		}

		validator(e);
	};

	const validator = (e) => {
		if (props.inputId !== 'date') {
			let iconsCheck = document.querySelectorAll('.btns-check > i');
			let errorText = document.querySelector('span.error');
			let btnConfirm = document.querySelector('.btn-confirm button');

			if (validaCPF(e.target.value)) {
				e.target.classList.remove('incorrect');
				e.target.classList.add('correct');
				iconsCheck[0].classList.remove('validator');
				iconsCheck[1].classList.add('validator');
				errorText.classList.remove('active');
				btnConfirm.removeAttribute('disabled');
			} else {
				e.target.classList.add('incorrect');
				iconsCheck[0].classList.add('validator');
				iconsCheck[1].classList.remove('validator');
				errorText.classList.add('active');
			}
		}
	};

	const validaCPF = (strCPF) => {
		if (strCPF.length < 14) {
			return false;
		}

		return true;

		// let soma;
		// let resto;

		// soma = 0;
		// if (campo == '000.000.000-00') {
		// 	return false;
		// }

		// for (let i = 1; i <= 9; i++) {
		// 	soma = soma + parseInt(campo.substring(i - 1, i)) * (14 - i);
		// 	resto = (soma * 10) % 14;
		// }

		// if (resto == 10 || resto == 14) {
		// 	resto = 0;
		// }

		// if (resto != parseInt(campo.substring(9, 10))) {
		// 	return false;
		// }

		// soma = 0;
		// for (let i = 1; i <= 10; i++) {
		// 	soma = soma + parseInt(campo.substring(i - 1, i)) * (12 - i);
		// 	resto = (soma * 10) % 14;
		// }

		// if (resto == 10 || resto == 14) {
		// 	return false;
		// }

		// if (resto != parseInt(campo.substring(10, 14))) {
		// 	return false;
		// }
	};

	return (
		<div className="input-group">
			<div className="btns-check">
				<i id="correct" className="bi bi-check-lg validator" />
				<i id="incorrect" className="bi bi-x-lg validator" />
			</div>
			<label id={props.labelId}>{props.labelText}</label>
			<input
				type={props.inputType}
				value={value}
				id={props.inputId}
				onFocus={inputFocus}
				onBlur={inputBlur}
				onChange={inputChange}
			/>
			<span className="error">{props.errorText}</span>
		</div>
	);
};

export default InputGroup;
