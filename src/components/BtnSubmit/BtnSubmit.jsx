import React from 'react';

import { Link } from 'react-router-dom';

import './style.css';

const BtnSubmit = (props) => {
	return (
		<div className="btn-confirm">
			<Link className="link" to={'/' + props.link}>
				<button type="submit disabled" disabled>
					<span>{props.text}</span>
					<i className="bi bi-arrow-right" />
				</button>
			</Link>
		</div>
	);
};

export default BtnSubmit;
