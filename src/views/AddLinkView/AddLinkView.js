import React from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Input, Form, Space, Typography, message } from 'antd';
import { useLocalStorage } from '../../shared/customHooks/useLocalStorage';
import { v4 as uuidv4 } from 'uuid';

const { Title, Paragraph, Text } = Typography;

export default function AddLinkView({ onClose }) {
	const [linkList, setLinkList] = useLocalStorage('linkList', []);

	const onSubmit = (values) => {
		message.open({
			content: (
				<Paragraph>
					<Text strong>{values.name}</Text> added.
				</Paragraph>
			),
			className: 'success-toast-container',
		});
		setLinkList([{ ...values, id: uuidv4(), score: 0, lastChange: new Date() }, ...linkList]);
		onClose();
	};

	return (
		<Space direction="vertical" className="w-100" size={24}>
			<Button type="link" icon={<ArrowLeftOutlined />} onClick={onClose}>
				Return to List
			</Button>

			<Space direction="vertical" className="w-100" size={24}>
				<Title level={4}>Add New Link</Title>

				<Form layout="vertical" onFinish={onSubmit}>
					<Form.Item label="Link Name:" name="name">
						<Input placeholder="e.g. Alphabet" />
					</Form.Item>
					<Form.Item label="Link URL:" name="url">
						<Input placeholder="e.g. http://abc.xyz" />
					</Form.Item>
					<Form.Item>
						<div style={{ display: 'flex', justifyContent: 'end' }}>
							<Button className="black-button" type="primary" htmlType="submit">
								Submit
							</Button>
						</div>
					</Form.Item>
				</Form>
			</Space>
		</Space>
	);
}
