import { Divider, Space } from 'antd';
import React from 'react';
import AddLinkButton from '../../components/AddLinkButton/AddLinkButton';
import { useLocalStorage } from '../../shared/customHooks/useLocalStorage';
import LinkList from '../../components/LinkList/LinkList';

export default function LinkListView({ onClickAddButton }) {
	const [linkList, setLinkList] = useLocalStorage('linkList', []);

	return (
		<Space direction="vertical" className="w-100" size={4}>
			<AddLinkButton onClick={onClickAddButton} />
			<Divider />
			{linkList?.length ? <LinkList linkList={linkList} setLinkList={setLinkList} /> : null}
		</Space>
	);
}
