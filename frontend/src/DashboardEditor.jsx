import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const DashboardEditor = () => {
  // State to store layout configuration
  const [layout, setLayout] = useState([
    { i: 'a', x: 0, y: 0, w: 2, h: 2 },
    { i: 'b', x: 2, y: 0, w: 2, h: 2 },
    { i: 'c', x: 4, y: 0, w: 2, h: 2 }
  ]);

  // Function to handle layout change
  const onLayoutChange = (newLayout) => {
    setLayout(newLayout);
    // TODO: Save layout to backend
  };

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
      onLayoutChange={onLayoutChange}
    >
      <div key="a" className="grid-item">A</div>
      <div key="b" className="grid-item">B</div>
      <div key="c" className="grid-item">C</div>
    </GridLayout>
  );
};

export default DashboardEditor;
