// App.js
import React, { useState } from 'react';
import SplitPane from 'react-split-pane';

function Saving() {
  const [paneSize, setPaneSize] = useState(
    parseInt(localStorage.getItem('paneSize')) || 200
  );

  const handleDragFinished = (size) => {
    setPaneSize(size);
    localStorage.setItem('paneSize', size); // Save size to local storage
  };

  return (
    <div style={{ height: '100vh' }}>
      <SplitPane
        split="vertical"
        minSize={100}
        defaultSize={paneSize}
        onDragFinished={handleDragFinished}
      >
        <div style={{ padding: '20px', backgroundColor: '#d0f0f0' }}>
          Left Pane
        </div>
        <div style={{ padding: '20px', backgroundColor: '#d0d0f0' }}>
          Right Pane
        </div>
      </SplitPane>
    </div>
  );
}

export default Saving;
