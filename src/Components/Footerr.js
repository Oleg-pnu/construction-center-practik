import React from 'react';
import { CDBAlert, CDBLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';
import logo from '../Assets/logo.png';

export const Alert = () => {
	return (
		<CDBAlert className="shadow mt-5">
			<CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '85%' }}>
				<CDBBox display="flex" justifyContent="between" className="flex-wrap">
					<CDBBox>
						<a href="/" >
							<img alt="logo" src={logo} width="120px" />
						</a>
						<p className="my-3" style={{ width: '250px' }}>
							We are creating High Quality Resources and tools to Aid developers during the
							developement of their projects
						</p>
						<CDBBox display="flex" className="mt-4">
							<CDBBtn flat color="white">
								<CDBIcon fab icon="facebook-f" />
							</CDBBtn>
							<CDBBtn flat color="white" className="mx-3">
								<CDBIcon fab icon="twitter" />
							</CDBBtn>
							<CDBBtn flat color="white" className="p-2">
								<CDBIcon fab icon="instagram" />
							</CDBBtn>
						</CDBBox>
					</CDBBox>
					<CDBBox>
						<p className="h5 mb-4" style={{ fontWeight: '600' }}>
							BudFox
						</p>
						<CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
							<CDBLink href="/">Resources</CDBLink>
							<CDBLink href="/">About Us</CDBLink>
							<CDBLink href="/">Contact</CDBLink>
							<CDBLink href="/">Blog</CDBLink>
						</CDBBox>
					</CDBBox>
					<CDBBox>
						<p className="h5 mb-4" style={{ fontWeight: '600' }}>
							Help
						</p>
						<CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
							<CDBLink href="/">Support</CDBLink>
							<CDBLink href="/">Sign Up</CDBLink>
							<CDBLink href="/">Sign In</CDBLink>
						</CDBBox>
					</CDBBox>
					<CDBBox>
						<p className="h5 mb-4" style={{ fontWeight: '600' }}>
							Products
						</p>
						<CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
							<CDBLink href="/">Windframe</CDBLink>
							<CDBLink href="/">Loop</CDBLink>
							<CDBLink href="/">Contrast</CDBLink>
						</CDBBox>
					</CDBBox>
				</CDBBox>
				<small className="text-center mt-5">&copy; BudFox, 2023. All rights reserved.</small>
			</CDBBox>
		</CDBAlert>
	);
};

export default Alert;