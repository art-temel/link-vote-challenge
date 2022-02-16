import React from 'react';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import { useState } from 'react';
import './App.css';
import AddLinkView from './views/AddLinkView/AddLinkView';
import LinkListView from './views/LinkListView/LinkListView';
import TopHeader from './components/TopHeader/TopHeader';

function App() {
	const [addLinkFormVisible, setAddLinkFormVisible] = useState(false);

	return (
		<Layout>
			<Header className="site-header">
				<TopHeader />
			</Header>
			<Content className="site-layout">
				{addLinkFormVisible ? (
					<AddLinkView onClose={() => setAddLinkFormVisible(false)} />
				) : (
					<LinkListView onClickAddButton={() => setAddLinkFormVisible(true)} />
				)}
			</Content>
		</Layout>
	);
}
export default App;
