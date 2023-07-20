import React from 'react';
import WatchlistTable from './components/WatchlistTable';
import Navbar from './components/Navbar';
import { Menubar } from './components/Menubar';
import { BrowserRouter } from 'react-router-dom';
import "./App.css"
import { Responsive, WidthProvider } from "react-grid-layout";
import { layouts, breakpoint, columns } from "./components/dataAll"

const ResponsiveGridLayout = WidthProvider(Responsive);


const App = () => {
  return (
    <BrowserRouter className="app-container">


      <ResponsiveGridLayout

        layouts={{ lg: layouts }}
        margin={[0, 0]}
        breakpoints={breakpoint}
        cols={columns}
        isResizable={false}
        isDraggable={false}
      >
        <div key="navbar"><Navbar /></div>
        <div key="menubar" ><Menubar /></div>
        <div className="watchlist " key="watchlisttable"><WatchlistTable /></div>

      </ResponsiveGridLayout>


    </BrowserRouter>
  );
};

export default App;
