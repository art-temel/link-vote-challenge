import React from 'react';
import { Select } from 'antd';
import './LinkListSort.css';
import { CaretDownOutlined } from '@ant-design/icons';
const { Option } = Select;

export default function LinkListSort({ onSortTypeChange }) {
	return (
		<Select
			onChange={(value) => onSortTypeChange(value)}
			style={{ width: '180px' }}
			className={'link-list__sort-select'}
			placeholder="Order By"
			suffixIcon={<CaretDownOutlined />}
		>
			<Option value={1}>Most Voted (Z - A)</Option>
			<Option value={-1}>Less Voted (A - Z)</Option>
		</Select>
	);
}
