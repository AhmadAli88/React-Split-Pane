// App.js
import React from 'react';
import SplitPane from 'react-split-pane';

function Nested() {
  return (
    <div style={{ height: '100vh' }}>
      <SplitPane split="vertical" defaultSize="50%">
        <div style={{ padding: '20px', backgroundColor: '#d0f0f0' }}>
          Left Pane
        </div>
        <SplitPane split="horizontal" defaultSize="50%">
          <div style={{ padding: '20px', backgroundColor: '#f0d0d0' }}>
            Top Right Pane
          </div>
          <div style={{ padding: '20px', backgroundColor: '#d0d0f0' }}>
            Bottom Right Pane
          </div>
        </SplitPane>
      </SplitPane>
    </div>
  );
}

export default Nested;
