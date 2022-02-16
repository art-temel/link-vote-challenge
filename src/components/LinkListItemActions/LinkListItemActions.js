import React from 'react';
import { Space, Button } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import './LinkListItemActions.css';

export default function LinkListItemActions({ voteUp, voteDown }) {
	return (
		<Space className="link-list__item__actions">
			<Button type="link" onClick={() => voteUp()} className="link-list__item__actions__button__vote" icon={<ArrowUpOutlined />}>
				Up Vote
			</Button>
			<Button type="link" onClick={() => voteDown()} className="link-list__item__actions__button__vote" icon={<ArrowDownOutlined />}>
				Down Vote
			</Button>
		</Space>
	);
}
