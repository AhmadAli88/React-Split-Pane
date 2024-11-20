// App.js
import React from 'react';
import SplitPane from 'react-split-pane';


function Customizing() {
  return (
    <div style={{ height: '100vh' }}>
      <SplitPane
        split="vertical"
        defaultSize="50%"
        resizerStyle={{ background: '#000', cursor: 'col-resize', width: '5px' }}
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

export default Customizing;
