// App.js
import React from 'react';
import SplitPane from 'react-split-pane';

function Basic() {
  return (
    <div style={{ height: '100vh' }}>
      <SplitPane split="vertical" minSize={100} defaultSize={200}>
        <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
          Left Pane
        </div>
        <div style={{ padding: '20px', backgroundColor: '#e0e0e0' }}>
          Right Pane
        </div>
      </SplitPane>
    </div>
  );
}

export default Basic;
