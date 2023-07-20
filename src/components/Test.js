import React, { useState } from 'react';
import { watchlistItems } from './dataAll';
import { AutoComplete } from "@progress/kendo-react-dropdowns";
import "./WatchlistTable-module.css";
import { filterBy } from "@progress/kendo-data-query";

const source = watchlistItems.map((item) => item.symbol);
const delay = 500;

const WatchlistTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [data, setData] = useState(source);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState("");
    const timeout = React.useRef();

    const onChange = (event) => {
        const value = event.target.value;
        const filterData = (value) => {
            const data = source;
            const filter = {
                value: value,
                operator: "startswith",
                ignoreCase: true
            };
            return filterBy(data, filter);
        };
        clearTimeout(timeout.current);
        timeout.current = setTimeout(() => {
            setData(filterData(value));
            setLoading(false);
        }, delay);
        setValue(value);
        setLoading(true);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setShowDropdown(true);
    };

    const handleBlur = () => {
        setShowDropdown(false);
    };

    const handleValueChange = (event) => {
        setValue(event.target.value);
    };

    const handleSelect = (event) => {
        const selectedSymbol = event.target.value;
        const selectedItem = watchlistItems.find(item => item.symbol === selectedSymbol);
        if (selectedItem) {
            handleAddItem(selectedItem);
        }
    };

    const handleAddItem = (item) => {
        if (selectedItems.length < 10) {
            setSelectedItems([...selectedItems, item]);
            setShowDropdown(false);
            setSearchTerm('');
        }
    };

    return (
        <div className='watchlist'>
            <AutoComplete
                data={data}
                value={value}
                onChange={handleValueChange}
                onBlur={handleBlur}
                onSelect={handleSelect}
                loading={loading}
                placeholder="e.g. Austria"
                style={{
                    width: "300px"
                }}
            />