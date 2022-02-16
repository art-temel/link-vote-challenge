import React from 'react';
import { Divider } from 'antd';
import './TopHeader.css';
import logo from '../../logo.png';

export default function TopHeader() {
	return (
		<>
			<div className="top-header">
				<img src={logo} className="hepsiburada-logo" alt="logo" />
				<p>
					<strong>Link</strong>VOTE <span>Challenge</span>
				</p>
			</div>
			<Divider className="header__layout-slider" />
		</>
	);
}
