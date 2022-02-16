import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import React from 'react';
import PointBox from '../../shared/PointBox/PointBox';
import './AddLinkButton.css';

export default function AddLinkButton({ onClick }) {
	return (
		<Button className="create-link-button" onClick={onClick}>
			<PointBox>
				<PlusOutlined style={{ fontSize: '32px' }} />
			</PointBox>
			<Title level={2}>Submit A Link</Title>
		</Button>
	);
}
