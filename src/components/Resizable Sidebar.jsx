// App.js
import React from 'react';
import SplitPane from 'react-split-pane';

function Resizing() {
  return (
    <div style={{ height: '100vh' }}>
      <SplitPane split="vertical" minSize={150} maxSize={300} defaultSize={200}>
        <div style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
          Sidebar
        </div>
        <div style={{ backgroundColor: '#fff', padding: '10px' }}>
          Main Content
        </div>
      </SplitPane>
    </div>
  );
}

export default Resizing;
