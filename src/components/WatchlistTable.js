import React, { useState } from 'react';
import { watchlistItems } from './dataAll';
import { AutoComplete } from "@progress/kendo-react-dropdowns";
import "./WatchlistTable-module.css";

const WatchlistTable = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedItems, setSelectedItems] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        setShowDropdown(true);
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





            <div className="search">
                <input
                    className="searchBar"
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search symbol..."
                />
            </div>

            {selectedItems.length > 0 && (
                <table className='watchlisttable'>
                    <thead>
                        <tr>
                            <th>Symbol</th>
                            <th>Price</th>
                            <th>LTP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedItems.map((item) => (
                            <React.Fragment key={item.id}>
                                <tr>
                                    <td>{item.symbol}</td>
                                    <td>{item.price}</td>
                                    <td>{item.ltp}</td>
                                </tr>
                                <tr>
                                    <td>{item.maturityDate}</td>
                                    <td>{item.current}</td>
                                    <td>{item.test}</td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            )}

            {showDropdown && searchTerm && (
                <div className="dropdown">
                    <table className='watchlisttable'>
                        <thead>
                            <tr>
                                <th>Symbol</th>
                                <th>Price</th>
                                <th>LTP</th>
                                <th>Add</th>
                            </tr>
                        </thead>
                        <tbody>
                            {watchlistItems
                                .filter((item) =>
                                    item.symbol.toLowerCase().includes(searchTerm.toLowerCase())
                                )
                                .map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.symbol}</td>
                                        <td>{item.price}</td>
                                        <td>{item.ltp}</td>
                                        <td>
                                            <button onClick={() => handleAddItem(item)}>
                                                Add
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default WatchlistTable;
