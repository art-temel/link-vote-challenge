import React from 'react';
import { Space, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import './LinkDeleteModal.css';
import Title from 'antd/lib/typography/Title';
import Text from 'antd/lib/typography/Text';
import Modal from 'antd/lib/modal/Modal';

export default function LinkDeleteModal({ item, onDeleteLink, isVisible, onClose }) {
	return (
		<Modal
			title="Remove Link"
			visible={isVisible}
			footer={false}
			closeIcon={<CloseOutlined className="link-list__item_remove-modal__close-icon" onClick={() => onClose()} />}
			className="link-list__item_remove-modal"
		>
			<Space className="link-list__item_remove-modal__content" direction="vertical" size={24}>
				<Space direction="vertical" className="w-100" size={2}>
					<Text>Do you want to remove:</Text>
					<Title level={4}>{item.name}</Title>
				</Space>
				<Space className="w-100" size={40}>
					<Button
						className="black-button"
						onClick={() => {
							onDeleteLink(item);
							onClose();
						}}
					>
						OK
					</Button>
					<Button className="black-button" onClick={() => onClose()}>
						CANCEL
					</Button>
				</Space>
			</Space>
		</Modal>
	);
}
