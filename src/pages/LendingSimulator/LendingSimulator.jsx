import React from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import LeftSection from '../../components/LendingPageComponents/LeftSection/LeftSection';
import RightSection from '../../components/LendingPageComponents/RightSection/RightSection';

import './style.css';

const LendigSimulator = () => {
	const pageVariants = {
		in: {
			opacity: 1,
			x: 0,
		},
		out: {
			opacity: 0,
			x: '100%',
		},
	};
	const pageTransition = {
		type: 'spring',
		stiffness: 50,
		duration: 0.3,
	};

	return (
		<motion.div initial="out" animate="in" exit="out" transition={pageTransition} variants={pageVariants}>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-5 col-left">
						<div className="content-left">
							<LeftSection />
						</div>
					</div>
					<div className="col-md-7 col-right">
						<div className="container-x">
							<Link to="/">
								<button>
									<i className="bi bi-x" />
								</button>
							</Link>
						</div>
						<div className="content-right">
							<RightSection />
							<div className="total-container">
								<div className="total-content">
									<span>Total a Pagar</span>
									<p>
										<strong>R$ 16.033,86 </strong>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default LendigSimulator;
