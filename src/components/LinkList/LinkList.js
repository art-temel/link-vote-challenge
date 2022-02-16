import { Space, List } from 'antd';
import React, { useState } from 'react';
import LinkListItem from '../LinkListItem/LinkListItem';
import LinkListSort from '../LinkListSort/LinkListSort';
import './LinkList.css';

export default function LinkList({ linkList, setLinkList }) {
	const [sortType, setSortType] = useState();

	const onLinkChange = (item) => {
		setLinkList((prevData) => prevData.map((el) => (el.id === item.id ? item : el)));
	};

	const onDeleteLink = (item) => {
		setLinkList((prevData) => prevData.filter((data) => data.id !== item.id));
	};

	const linkSort = (a, b, fnSortType) => {
		if (a.score === b.score) {
			return fnSortType * (a.lastChange < b.lastChange ? 1 * fnSortType : -1);
		}
		return fnSortType * (b.score - a.score);
	};

	return (
		<Space direction="vertical" className="w-100">
			<LinkListSort onSortTypeChange={setSortType} />
			<List
				itemLayout="vertical"
				size="default"
				pagination={linkList.length > 5 && { pageSize: 5 }}
				dataSource={sortType ? linkList.sort((a, b) => linkSort(a, b, sortType)) : linkList}
				renderItem={(item) => (
					<List.Item key={item.id}>
						<LinkListItem item={item} onLinkChange={onLinkChange} onDeleteLink={onDeleteLink} />
					</List.Item>
				)}
			/>
		</Space>
	);
}
