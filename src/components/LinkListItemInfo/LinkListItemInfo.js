import React from 'react';
import { Space } from 'antd';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';

export default function LinkListItemInfo({ name, url }) {
	return (
		<Space direction="vertical" className="w-100" size={0}>
			<Title type={!name && 'secondary'} level={4}>
				{name ? name : 'Not Defined!'}
			</Title>
			<Text type="secondary">{url ? `(${url})` : 'Not Defined!'}</Text>
		</Space>
	);
}
