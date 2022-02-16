import React, { useState } from 'react';
import { Space, Button, Row, Col, message, Typography } from 'antd';
import { MinusCircleFilled } from '@ant-design/icons';
import './LinkListItem.css';
import PointBox from '../../shared/PointBox/PointBox';
import LinkDeleteModal from '../LinkDeleteModal/LinkDeleteModal';
import LinkListItemInfo from '../LinkListItemInfo/LinkListItemInfo';
import LinkListItemActions from '../LinkListItemActions/LinkListItemActions';

const { Title, Paragraph, Text } = Typography;

export default function LinkListItem({ item, onLinkChange, onDeleteLink }) {
	const [deleteVisible, setDeleteVisible] = useState(false);
	const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

	const voteChange = (increment) => {
		onLinkChange({ ...item, score: item.score + parseInt(increment, 10) });
	};

	const deleteLink = () => {
		onDeleteLink(item);
		message.open({
			content: (
				<Paragraph>
					<Text strong>{item.name}</Text> removed.
				</Paragraph>
			),
			className: 'success-toast-container',
		});
	};

	return (
		<Row
			className="link-list__item"
			onMouseEnter={() => setDeleteVisible(true)}
			onMouseLeave={() => setDeleteVisible(false)}
			wrap={false}
		>
			<Col flex="auto">
				<Space direction="horizontal" size={12} className="w-100">
					<PointBox>
						<div>
							<Title level={2}>{item.score}</Title>
							<Text strong>POINTS</Text>
						</div>
					</PointBox>
					<Space direction="vertical" className="w-100">
						<LinkListItemInfo name={item.name} url={item.url} />
						<LinkListItemActions item={item} voteUp={() => voteChange(1)} voteDown={() => voteChange(-1)} />
					</Space>
				</Space>
			</Col>
			{deleteVisible && (
				<Col>
					<Button
						style={{ backgroundColor: 'transparent' }}
						type="link"
						className="link-list__item__delete-button"
						icon={<MinusCircleFilled twoToneColor="red" />}
						onClick={() => setIsDeleteModalVisible(true)}
					/>
				</Col>
			)}
			<LinkDeleteModal
				item={item}
				onDeleteLink={deleteLink}
				isVisible={isDeleteModalVisible}
				onClose={() => setIsDeleteModalVisible(false)}
			/>
		</Row>
	);
}
