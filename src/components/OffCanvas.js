// src/OffCanvas.js
import React, { useState } from 'react';
import { Splitter, SplitterPane } from '@progress/kendo-react-layout';
import { FiMenu, FiHome, FiBell, FiSettings } from 'react-icons/fi'; // Replace with your desired icons
import './OffCanvas.css';

const OffCanvas = () => {
    const [isPanelOpen, setPanelOpen] = useState(false);

    const handleToggle = () => {
        setPanelOpen(!isPanelOpen);
    };

    const iconList = [
        { icon: <FiMenu />, name: 'Menu' },
        { icon: <FiHome />, name: 'Home' },
        { icon: <FiBell />, name: 'Notifications' },
        { icon: <FiSettings />, name: 'Settings' },
    ];

    return (
        <Splitter style={{ height: '100vh' }}>
            <SplitterPane size={isPanelOpen ? 300 : 60} collapsible={true}>
                {/* The button to toggle the off-canvas panel */}
                <div className="toggle-button" onClick={handleToggle}>
                    {iconList.map((item, index) => (
                        <span key={index} className="tooltip">
                            {item.icon}
                            <span className={`tooltip-text ${isPanelOpen ? 'show' : ''}`}>{item.name}</span>
                        </span>
                    ))}
                </div>
            </SplitterPane>
            <SplitterPane>
                {/* Content for the off-canvas panel */}
                <div className={`off-canvas-panel ${isPanelOpen ? 'open' : ''}`}>
                    <h3>Off-Canvas Menu</h3>
                    <ul>
                        <li>Menu Item 1</li>
                        <li>Menu Item 2</li>
                        <li>Menu Item 3</li>
                    </ul>
                </div>
            </SplitterPane>
        </Splitter>
    );
};

export default OffCanvas;
