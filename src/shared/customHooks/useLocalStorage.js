import { useState, useEffect } from 'react';

function getStorageValue(key, defaultValue, mockStorage) {
	// getting stored value
	const saved = mockStorage?.find((el) => el.key === key) || localStorage.getItem(key);
	const initial = JSON.parse(saved);
	return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue, mockStorage) => {
	const [value, setValue] = useState(() => {
		return getStorageValue(key, defaultValue, mockStorage);
	});

	useEffect(() => {
		// storing input name
		if (!mockStorage) localStorage.setItem(key, JSON.stringify(value));
		else mockStorage.push({ key, value: value });
	}, [key, value]);

	return [value, setValue];
};
