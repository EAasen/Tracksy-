# Design System

## Typography

### Fonts
- Primary Font: Arial, sans-serif
- Secondary Font: Georgia, serif

### Font Sizes
- Heading 1: 32px
- Heading 2: 24px
- Heading 3: 18px
- Body Text: 14px

### Font Weights
- Regular: 400
- Bold: 700

## Color Palette

### Primary Colors
- Primary: #3498db (Blue)
- Secondary: #2ecc71 (Green)
- Accent: #e74c3c (Red)

### Neutral Colors
- Light: #ecf0f1 (Light Gray)
- Dark: #2c3e50 (Dark Gray)

## Spacing

### Margins and Padding
- Small: 8px
- Medium: 16px
- Large: 24px

## Component Guidelines

### Buttons
- Primary Button: Blue background, white text
- Secondary Button: Green background, white text
- Disabled Button: Light Gray background, dark gray text

### Modals
- Header: Bold, 18px
- Body: Regular, 14px
- Footer: Regular, 14px

### Tables
- Header: Bold, 14px
- Body: Regular, 14px
- Row Hover: Light Gray background

## DashboardEditor Component

### Overview
The `DashboardEditor` component allows users to customize their dashboard layout using drag-and-drop functionality. It is implemented using the `react-grid-layout` library.

### Usage
1. Import the `DashboardEditor` component:
   ```jsx
   import DashboardEditor from './DashboardEditor';
   ```

2. Use the `DashboardEditor` component in your application:
   ```jsx
   <DashboardEditor />
   ```

### Example
```jsx
import React, { useState } from 'react';
import GridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const DashboardEditor = () => {
  const [layout, setLayout] = useState([
    { i: 'a', x: 0, y: 0, w: 2, h: 2 },
    { i: 'b', x: 2, y: 0, w: 2, h: 2 },
    { i: 'c', x: 4, y: 0, w: 2, h: 2 }
  ]);

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
```

### Visual Aids
![DashboardEditor Example](images/dashboard-editor-example.png)

### In-Code Comments
The `DashboardEditor` component includes comments to explain the key parts of the implementation. These comments help developers understand the purpose and functionality of the code.

### Responsive Design
The `DashboardEditor` component is designed to be responsive and works well on different screen sizes. The `react-grid-layout` library provides built-in support for responsive layouts.

### Saving Layout Configuration
The layout configuration is stored in the component's state and updated as users drag and drop elements. The updated layout can be saved to the backend using an API endpoint.

### Documentation
For more details on the `DashboardEditor` component and other design elements, refer to the in-code comments and the generated documentation using JSDoc.

